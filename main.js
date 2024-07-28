const form = document.getElementById('myForm');
const inputData = {};

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   inputData.name = document.getElementById('name').value;
//   inputData.number = document.getElementById('number').value;
//   inputData.email = document.getElementById('email').value;
//   inputData.password = document.getElementById('password').value;

const inputName = document.getElementById('inputName');
const number = document.getElementById('number');
const inputEmail = document.getElementById('inputEmail');
const password = document.getElementById('password');

inputName.addEventListener('input', (e) => {
  e.preventDefault();
  if (inputName.value.length > 10) {
    inputName.value = inputName.value.substring(0, 10); // منع عدد المحارف من تجاوز ال10 احرف
  }
  // console.log(` Name is: ${inputName.value}`);
});

number.addEventListener('input', () => {
  const currentValue = parseInt(number.value, 10);
  if (currentValue < 1) {
    number.value = 1; // منع القيمة من النزول للصفر والقيم السلبية
  }
});

inputEmail.addEventListener('input', () => {
  const emails  = inputEmail.value.split(','); 
  const validEmails = [];
  emails.forEach((email) => {
    const trimmedEmail = email.trim();
    if (trimmedEmail.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      validEmails.push(trimmedEmail); 
    }
  });
});


  // Save the data (e.g. to local storage)
   localStorage.setItem('inputData', JSON.stringify(inputData));

  // Log the data to the console
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
     console.log(`your ${key} is: ${value}`);
    }
    inputName.readOnly = true;
    inputEmail.readOnly = true;
  });