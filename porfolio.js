




var tablinks=document.getElementsByClassName("tab_links");
var tabcontents=document.getElementsByClassName("contents");
function opentab(tabname){
for(tablink of tablinks){
tablink.classList.remove("active_links");
}                                                //here tablinks and tabcontents are a special type    
for(tabcontent of tabcontents){                              //of function which are used to hide the contents of tab--->
tabcontent.classList.remove("active_contents");
}

//the above code is to hide the data 
//now the below code is to display the data when clicked
event.currentTarget.classList.add("active_links");
document.getElementById(tabname).classList.add("active_contents");
}  







//This script tag is for side bar in and out for small screen

var side_bar=document.getElementById("side_menu");
function open_menu(){
side_bar.style.right="0";
}
function close_menu(){
side_bar.style.right="-200px";
}


/*adding the google form (javascript code is taken from github and small modoifications done on the lines which are *)*/
const scriptURL ='https://script.google.com/macros/s/AKfycbyEVb6Lrqo1vEEg_Ftzfr_SrSGRCTGDA8jc_e_ylNWIejcGoR8MSzx358i53wyp4knT/exec'; //******
const form = document.forms['submit-to-google-sheet'] //********

const msg=document.getElementById('msg')
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {msg.innerHTML="Form submitted successfully"
setTimeout(function(){
msg.innerHTML=""
},5000 )
form.reset();
})
.catch(error => console.error('Error!', error.message))
})


//this code is for providing animation to the text in header page********(3.5)

ScrollReveal({ 
reset: true ,
distance:'80px',
duration:2000,
delay:200,

});

ScrollReveal().reveal('.sub_title',{origin:'top'})
ScrollReveal().reveal('.sub_title p,.tab,#skills,#experience,#education,.service_list,.list,.row',{origin:'bottom'})
ScrollReveal().reveal('#header p',{origin:'left'})
ScrollReveal().reveal('#header h1',{origin:'right'})
