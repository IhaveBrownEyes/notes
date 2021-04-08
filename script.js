/////////////////////////////////////////////////////////////////////////////////////
//***************  Changing Image, Turning on and off bulb  ***********************//
////////////////////////////////////////////////////////////////////////////////////

document.querySelector('.btn-on').addEventListener('click', e => {
    document.getElementById('my-image').src = 'img/pic_bulbon.gif';
});

document.querySelector('.btn-off').addEventListener('click', e => {
    document.getElementById('my-image').src = 'img/pic_bulboff.gif';
});


/////////////////////////////////////////////////////////////////////////////////////
//*****  Hiding and Unhiding Text, one button doing two work reversing work  ******//
////////////////////////////////////////////////////////////////////////////////////


const a = document.querySelectorAll('.text');

function hideElements() {
    a.forEach(e => e.style.display = 'none');
    document.querySelector('#hide-unhide').innerHTML = 'Show Hidden Text';
}

function unhideElements() {
    a.forEach(e => e.style.display = 'block');
    document.querySelector('#hide-unhide').innerHTML = 'Hide Text';
}

hideElements();

document.querySelector('#hide-unhide').addEventListener('click', function(){
    const btnText = document.querySelector('#hide-unhide').innerHTML;
    if(btnText === 'Show Hidden Text'){
        unhideElements()
    }else {
        hideElements();
    }
});



