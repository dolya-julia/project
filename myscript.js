const items = document.querySelectorAll(".elemAccordeon");
items.forEach(item => {
  item.addEventListener('click', function() {
    items.forEach(elem => elem.classList.remove('active'));
    this.classList.add('active');
  });
});
$('.accordeon .headingElem').on('click', function (){
    $('.accordeon .descElem.active').removeClass('active');
    let thisContentBlock = $(this).parent().find('.descElem');
    
    if(thisContentBlock.hasClass('active')) {
        thisContentBlock.removeClass('active')
    }
    else {
        thisContentBlock.addClass('active')
    }
})

let b3 = document.getElementById("button_form");
b3.addEventListener("click", formSend);
function formSend(){
  const form = document.getElementById('form');
  let error = formValidate(form);
  if (error === 0){
    $.ajax({
      url: 'https://formcarry.com/s/v3jx-pgWK',
      method: 'POST',
      data: $('#form').serialize(),
      dataType: 'json',
      beforeSend: function() { },
      success: function(data) { 
        console.log('Success!');
        document.getElementById("answer").innerHTML = "Успешно отправлено!";
       $('form').trigger( 'reset' );
        localStorage.removeItem('name');
        localStorage.removeItem('tel');
        localStorage.removeItem('email');
        localStorage.removeItem('message');
     },
      error: function(err) { 
        console.log('Fail!' );
        document.getElementById("answer").innerHTML = "Ошибка!";
      }
    });
  }
  else{
    alert('Заполните обязательные поля');
  }
}
let input_name = document.getElementById("name");
input_name.addEventListener("change", function(event) {
  localStorage.setItem('name', input_name.value);
  console.log(localStorage.getItem('name'));
}); 
let input_tel = document.getElementById("tel");
input_tel.addEventListener("change", function(event) {
  localStorage.setItem('tel', input_email.value);
  console.log(localStorage.getItem('tel'));
}); 
let input_email = document.getElementById("email");
input_email.addEventListener("change", function(event) {
  localStorage.setItem('email', input_email.value);
  console.log(localStorage.getItem('email'));
}); 
let input_message = document.getElementById("message");
input_message.addEventListener("change", function(event) {
  localStorage.setItem('message', input_message.value);
  console.log(localStorage.getItem('message'));
}); 
const name = localStorage.getItem('name');
input_name = document.getElementById("name");
input_name.value = name;
const tel = localStorage.getItem('tel');
input_tel = document.getElementById("tel");
input_tel.value = tel;
const email = localStorage.getItem('email');
input_email = document.getElementById("email");
input_email.value = email;
const message = localStorage.getItem('message');
input_message = document.getElementById("message");
input_message.value = message;

function formValidate(form){
  let error = 0;
  let formReq = document.querySelectorAll('.req');
  for (let i = 0; i < formReq.length; i++){
    const input = formReq[i];
    formRemoveError(input);
    if(input.classList.contains('_email')){
      if (emailTest(input)){
        formAddError(input);
        error++;
      }
    }
    else if(input.classList.contains('_tel')){
      if (telTest(input)){
        formAddError(input);
        error++;
      }
    }
    else if(input.getAttribute("type") === "checkbox" && input.checked === false){
      formAddError(input);
      error++;
    }
    else {
      if (input.value === ''){
        formAddError(input);
        error++;
      }
    }
  }
  return error;
}
function emailTest(input){
  return !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(input.value);
}
function telTest(input){
  return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/iu.test(input.value);
}
function formAddError(input){
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}
function formRemoveError(input){
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}


$(document).ready(function(){
  $(".slider").owlCarousel({
    loop:true, 
    margin:10, 
    nav:true,
    items:1,
    navText: ["<img src='img/arrow-left.svg'>", "<img src='img/arrow-right.svg'>"],
});
  $(".slide-one").owlCarousel({
        loop:true, 
        margin:10, 
        nav:false,
        autoplay:true, 
        smartSpeed:1000, 
        autoplayTimeout:2000, 
        responsive:{ 
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });

    $(".slide-two").owlCarousel({
        loop:true, 
        margin:10, 
        nav:false, 
        autoplay:true, 
        smartSpeed:1000, 
        autoplayTimeout:2500, 
        responsive:{ 
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
});  