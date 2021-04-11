const background = document.querySelector('#bg');
const colorText = document.querySelector('#color');
const btn = document.querySelector('button');
const type = ['hex','rgb',];
const randomel = 'abcdef123456789';
let final= [];

btn.addEventListener('click', randomcolor);
function randomcolor()
{
    final = [];
    let random = Math.round(Math.random());
    if(type[random] === 'hex')
    {
        for (let i =0; i<6; i++)
        {
            let random2 = Math.floor(Math.random()*randomel.length);
            final.push(randomel[random2])
        }
        background.style.background = "#"+final.join('');
        colorText.textContent = `#${final.join('')}`;
    }
    else 
    {
        for (let i=0; i<3; i++)
        {
            let random2 = Math.floor(Math.random()*255);
            final.push(random2);
        }
        background.style.background = `rgb(${final[0]}, ${final[1]}, ${final[2]})`;
        colorText.textContent = `rgb(${final[0]}, ${final[1]}, ${final[2]})`;
    }
}