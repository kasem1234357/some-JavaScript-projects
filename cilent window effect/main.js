const black = document.querySelector(".black");
const sec =document.querySelector('section')
window.onmousemove = function(e){
    const x = e.clientX;
    black.style.left = `${x}px`;
    //white.style.left=`${-x}px`;
    //white.style.width = `${x}px`
}


/*setInterval(() => {
    window.onscroll = function(e){
    if(window.scrollY <= window.innerWidth+5 ){
        sec.style.position = `fixed`;
        const x = window.scrollY;
    black.style.left = `${x}px`;
    }
    else{
        console.log('hello')
    sec.style.transform = `translateY(-${window.scrollY - window.innerWidth}px)`;
    }
}
}, 100);*/