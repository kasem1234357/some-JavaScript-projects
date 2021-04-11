// get the time  by milleseconds
var today= new Date();
///convert to hours for greeting conditions
var hourNow = today.getHours();
// build global varieble for condition
var greeting;
/// get url for element in html
var hoursEl =document.getElementById('hours');

var secondsEl =document.getElementById('seconds');
//build function for time
    function say(secNow,minNow,hourNow)
{
    var today= new Date();
    var hourNow = today.getHours();
    var minNow = today.getMinutes();
    var secNow =today.getSeconds();
    // condition for 12 hour system
    secondsEl.innerHTML = " :"+secNow;
    if(hourNow >12)
    {
        hoursEl.innerHTML = hourNow-12 +" :"+ minNow
    }
    else
    {
        hoursEl.innerHTML = hourNow +" :"+ minNow ;
    }
}
// return functio every 1000 milleseconds
setInterval(say,1000);
//build conditions

if (hourNow> 18) {
greeting= 'Good evening!';
}
    else if (hourNow > 12) {
greeting = ' Good afternoon!';
    }
else if (hourNow > 0) {
greeting = 'Good morning!';
}
else {
greeting = 'Welcome! ' ;
}
// print result from conditions for html page
document.write(`<h3>${greeting}</h3>`);

////      FINISHED     /////
