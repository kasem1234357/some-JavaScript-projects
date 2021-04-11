//
const btn = document.querySelector('button');
const username = document.querySelector('.name');
const startWindow = document.querySelector('.start')
const gameBlocks = document.querySelectorAll('.game');
const gameBox = document.querySelector('.game-box');
const wrong = document.querySelector('.tries span');
const duration = 1000;
let gamer;
let Blocks =Array.from(gameBlocks);
let orderRange = Array.from(Array(Blocks.length).keys());
//functions

btn.addEventListener('click',getname);
function getname()
{
    let yourName = prompt('put your name');
    if(yourName == null || yourName == "")
    {
        username.textContent += 'Unknown';
        gamer = `unkown`
    }
    else
    {
        username.textContent += yourName;
        gamer = yourName
    }
    startWindow.remove();
    gameBlocks.forEach((gameBlock,index) =>{
        gameBlock.style.order = orderRange[index];
        gameBlock.classList.add('clicked');
        gameBox.classList.add('stop')
        setTimeout(() =>{
            gameBlock.classList.remove('clicked');
            gameBox.classList.remove('stop')
        },duration*2);
        gameBlock.addEventListener('click',() =>{
            gameBlock.classList.add('clicked');
                filter();
        })
    })
};
function stop()
{
    gameBox.classList.add('stop')
    setTimeout(() => {
        // Remove Class stop After The Duration
        gameBox.classList.remove('stop');
        }, duration);
}
function checkMatchedBlocks(firstBlock, secondBlock) {
    if (firstBlock.dataset.teq === secondBlock.dataset.teq) {
        document.getElementById('success').play();
        firstBlock.classList.remove('clicked');
        secondBlock.classList.remove('clicked');
        firstBlock.classList.add('win');
        secondBlock.classList.add('win');
    } else {
        document.getElementById('fail').play();
        wrong.innerHTML = parseInt(wrong.innerHTML) + 1;
        setTimeout(() => {
            firstBlock.classList.remove('clicked');
            secondBlock.classList.remove('clicked');
        }, duration);
    }
}
function filter(){
        let allFlippedBlocks = Blocks.filter(flippedBlock => flippedBlock.classList.contains('clicked'));
        /*console.log(allFlippedBlocks);*/
        
        if(allFlippedBlocks.length === 2)
        {
            stop()
            checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1])
        }
        let elWin = Blocks.filter(flippedBlock => flippedBlock.classList.contains('win'));
        if(elWin.length == Blocks.length)
        {
            let finish = document.createElement('div');
            finish.classList.add('finish');
            finish.innerHTML = `<p>🎉🎉 congutrlition ${gamer} you finished the game 🎉🎉</p>`
            document.querySelector('body').appendChild(finish);
            function creatBubble(){
    const createElement = document.createElement('span');
    createElement.classList.add('bubble');
    var size = Math.random() * 60;
    createElement.style.width = `${20 + size}px`;
    createElement.style.height = `${20 + size}px`;
    createElement.style.left = Math.random()*innerWidth + "px";
    document.querySelector('.container').appendChild(createElement);
    setTimeout(()=>{
    createElement.remove();
    },4000)
}
setInterval(creatBubble,70);
        }
}
function shufle (ar){
        //نأخذ عدد العناصر في المصفوفة من أجل استخراج ارقام عشوائية على عدد العناصر
        let current = ar.length,
        temp,//ننشأ مصفوقة لتخزين الارقام العشوائية مؤقتا
        random;//متغير لاستخرتاج الارقام العشوائية
        while(current > 0)//نقوم بانشاء حلقة تكرار تنازلية لانشاء 
        {
            random = Math.floor(Math.random()* current ) 
            //console.log(random);
            current--;
            temp = ar[current];
            ar[current] = ar[random]//نستبدل قيمة الصحيحة بالقيمة العشوائية
            ar[random] = temp
        }
        return ar;
}
///----------------------------------------------------------/////
    shufle(orderRange);



//


