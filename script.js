const input_1 = document.querySelector(".input-1");
const input_2 = document.querySelector(".input-2");
const input_3 = document.querySelector(".input-3");
const input_41 = document.querySelector(".input-41");
const input_42 = document.querySelector(".input-42");
const input_5 = document.querySelector(".input-5");
const input_6 = document.querySelector(".input-6");
const errorMessage_1 = document.querySelector(".error-message-1");
const errorMessage_2 = document.querySelector(".error-message-2");
const errorMessage_31 = document.querySelector(".error-message-31");
const errorMessage_32 = document.querySelector(".error-message-32");
const errorMessage_4 = document.querySelector(".error-message-4");
const errorMessage_5 = document.querySelector(".error-message-5");
const errorMessage_6 = document.querySelector(".error-message-6");
const gmailPattern =
  /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@[gG][mM][aA][iI][lL]\.com$/;
const button = document.querySelector(".button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  let valid = true;
  if (input_1.value === "") {
    errorMessage_1.classList.remove("hidden");
    input_1.classList.add("active");
    valid = false;
    
  } else {
    errorMessage_1.classList.add("hidden");
    input_1.classList.remove("active");
  }
  if (input_2.value === "") {
    errorMessage_2.classList.remove("hidden");
    input_2.classList.add("active");
    valid = false;
  } else {
    errorMessage_2.classList.add("hidden");
    input_2.classList.remove("active");
  }
  if (input_3.value === "") {
    errorMessage_32.classList.remove("hidden");
    input_3.classList.add("active");
    valid = false;
  } else if (!gmailPattern.test(input_3.value)) {
    errorMessage_31.classList.remove("hidden");
    input_3.classList.add("active");
    valid = false;
  } else {
    errorMessage_32.classList.add("hidden");
    errorMessage_31.classList.add("hidden");
    input_3.classList.remove("active");
  }
  if (!input_41.checked && !input_42.checked) {
    errorMessage_4.classList.remove("hidden");
    // input_4.classList.add('active')
    valid = false;
  } else {
    errorMessage_4.classList.add("hidden");
  }
  if (input_5.value === "") {
    errorMessage_5.classList.remove("hidden");
    input_5.classList.add("active");
    valid = false;
  } else {
    errorMessage_5.classList.add("hidden");
    input_5.classList.remove("active");
  }
  if (!input_6.checked) {
    errorMessage_6.classList.remove("hidden");
    valid = false;
  } else {
    errorMessage_6.classList.add("hidden");
    input_6.classList.remove("active");
  }
  if (
    valid === true
    // !(input_1.value === "") &&
    // !(input_2.value === "") &&
    // !(input_3.value === "") &&
    // !(input_4.checked ) &&
    // !(input_5.value === "") &&
    // !(input_6.checked )
  ) {
    e.preventDefault();
    alert(`
        Message Sent!
        Thanks for completing the form. We'll be in touch soon!
        First Name :- ${input_1.value}
        Last Name :- ${input_2.value}
        Email Address :- ${input_3.value}
        Message :- ${input_5.value}`)
        window.location.reload();
  } 
});

// function reload(){
//     input_1.value = '';
//     input_1.setAttribute('dis', '');
//     input_2.value = '';
//     input_2.setAttribute('dis', '');
//     input_3.value = '';
//     input_3.setAttribute('dis', '');
//     !input_4.checked;
//     input_4.setAttribute('dis', '');
//     input_5.value = '';
//     input_5.setAttribute('dis', '');
//     !input_6.checked;
//     input_6.setAttribute('dis', '');
// }
