const Query = (Q) =>{
    return document.querySelector(Q)
}
let ham = Query('.ham');
let Navi = Query('.navi');
ham.addEventListener("click",()=>{
    if(!Navi.classList.contains('NaviActive')){
        Navi.classList.toggle('NaviActive')
        
    }
    else{
        Navi.classList.add('NaviActiveDown')
       setTimeout(()=>{
        Navi.classList.toggle('NaviActive')
        Navi.classList.remove('NaviActiveDown')
       },500);
        
    }
})
var countDownDate = new Date("Jan 8, 2022 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
console.log();
 Query("#day").innerHTML = days;
 Query("#hour").innerHTML = (`${hours}`).length==1?`0${hours}`:`${hours}`;
 Query("#min").innerHTML = (`${minutes}`).length==1?`0${minutes}`: `${minutes}`;
 Query("#sec").innerHTML = (`${seconds}`).length==1?`0${seconds}`: `${seconds}`;


},1000)