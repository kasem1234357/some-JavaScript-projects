
function circles()
{
 var count = 200;
 var section = document.querySelector('section');
 var i = 0;
 while(i< count)
 {
    
     var z = document.createElement('img');
     z.src = 'n.png'
     var x = Math.floor(Math.random()*innerWidth);
     var y = Math.floor(Math.random()*innerHeight);
     var size = Math.random()* 40 ;
     
     z.style.top = `${y}px`;
     z.style.left = `${x}px`;
     z.style.width = 1+size +'px';
     z.style.height = 1+size +'px';
     section.appendChild(z);
     z.style.animationDuration = 5+size/4 +'s';
     z.style.animationDelay = -size/4 +'s';
    
     i++
     
 }
}
circles();