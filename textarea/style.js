const textx = document.getElementById('text');
const number = document.getElementById('number');
const larg = 180;
console.log(textx);
text.addEventListener('keyup',() =>{
    var textLength = textx.value.length;
    number.textContent =`180 / ${180 - textLength}`;
    number.style.fontSize = `40px`
    number.style.color = `#fff`
    if (textLength > 180)
    {
    number.textContent = `you add more 180 word`
    number.style.fontSize = `25px`
    number.style.color = `#ff0`
    }
})