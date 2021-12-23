
const button = document.querySelectorAll('.colorBut');

function changeClrBkg() {
    textarea.style.backgroundColor = event.target.value;
}
 
button.forEach(buttonItem => {
    buttonItem.addEventListener("click", changeClrBkg)
})



function plusFontSize() {
    textarea.style.fontSize = parseInt(textarea.style.fontSize) + 1 + 'px';
    } 

function minusFontSize() {
    textarea.style.fontSize = parseInt(textarea.style.fontSize) - 1 + 'px';
    } 

function plusBorderSize() {
        textarea.style.borderRadius = parseInt(textarea.style.borderRadius) + 1 + 'px';
        } 
    
function minusBorderSize() {
        textarea.style.borderRadius = parseInt(textarea.style.borderRadius) - 1 + 'px';
        } 



        

        