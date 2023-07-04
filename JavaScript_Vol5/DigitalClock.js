setInterval(function(){

    let date=new Date();
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let day=date.getDay();
    let mon=date.getMonth();
    let yr=date.getFullYear();
    
    let time="AM"
    if(hr==0){
        hr=12;
    }else if(hr>12){
        hr=hr-12;
      time="PM"
    }
    const formattedHour = hr < 10 ? '0' + hr : hr;
  const formattedMinute = min < 10 ? '0' + min : min;
  const formattedSecond = sec < 10 ? '0' + sec : sec;

  let cardNo=document.getElementsByClassName("card")[0]
  let cardNo2=document.getElementsByClassName("card")[1]
  let cardNo3=document.getElementsByClassName("card")[2]
  let cardNo4=document.getElementsByClassName("card")[3]

  cardNo.innerHTML=`${formattedHour}`;
  cardNo2.innerHTML=`${formattedMinute}`
  cardNo3.innerHTML=`${formattedSecond}`;
  cardNo4.innerHTML=`${time}`;
},1000)