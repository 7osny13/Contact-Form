const contactForm = document.getElementById('contactForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const selectedRadio = document.querySelectorAll('input[name="queryType"]');
const message = document.getElementById('message');
const consent = document.getElementById('consent');
const submtBtn = document.getElementById('submit');
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const validEmailError = document.getElementById('validEmailError');
const emailError = document.getElementById('emailError');
const queryError = document.getElementById('queryError');
const messageError = document.getElementById('messageError');
const consentError = document.getElementById('consentError');
const successMessage = document.getElementById('successMessage');

console.log(selectedRadio)


function handleMessage(e) {
    e.preventDefault();

    const validEmail = validateEmail(email.value);
    const validFirstName = validateInputs(firstName);
    const validlastName = validateInputs(lastName);
    const validquery = validQueryType(selectedRadio);
    const validMessage = validateInputs(message);
    const validConsent = validCheck(consent);

    if(validEmail && validFirstName && validlastName && validquery && validMessage && validConsent === true)
    {
        successMessage.hidden = false;
        setInterval(() => {
            successMessage.hidden = true;;
        },2000)
        contactForm.reset()    
    }
    

    
    
}

function validateEmail(email) {

    // Check if email is empty
  if (!email) {
    emailError.hidden = false;       
    validEmailError.hidden = true;          
    return false;
  } else {
    emailError.hidden = true;          
  }


  const isValidEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Check if the email matches the regex
    if (!isValidEmail.test(email)) {
        validEmailError.hidden = false;       
        return false;
    } else {
        validEmailError.hidden = true;     
    }
    
    return true; 
    
  }


function validateInputs(input) {
    if(!input.value){
      input.nextElementSibling.hidden = false; 
      return false 
    } else {
        input.nextElementSibling.hidden = true;
        return true;
    }
}


function validQueryType(query) {
    let radioSelected = false;
    query.forEach(radio => {
    if (radio.checked) {
      radioSelected = true;
      queryError.hidden = true;
     
    }
  });
  
  // If no radio is selected, prevent submission and show the error
    if (!radioSelected) {
        queryError.hidden = false; // Reveal error message
        return false;
    }

    return true
}


function validCheck(input) {
    if(!input.checked){
        input.nextElementSibling.nextElementSibling.hidden = false;
        return false;  
      } else {
        input.nextElementSibling.nextElementSibling.hidden = true;
        return true
        }
}


contactForm.addEventListener('submit' , handleMessage);


