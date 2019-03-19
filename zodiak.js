 let getAge = prompt("Enter your date of birth","dd.mm.yyyy").split('.').reverse().join('-');
//let getAge = "1998-12-07";
let today = Date.now();
let birthday = new Date(getAge);
let age = Math.floor((today - birthday.getTime()) /(24 * 3600 * 365.25 * 1000))
   alert('You are '+age +' years old!');
let month=birthday.getMonth();
let day =birthday.getDate();
let year =birthday.getFullYear();

const zodiakSigns=[
      {name:"Capricorn", day:21},
      {name: "Aquarius" , day:20},
      {name:"Pisces" ,day:20},
      {name:"Aries", day:20},
      {name:"Taurus", day:20},
      {name:"Gemini", day:20},
      {name:"Cancer", day:21},
      {name:"Leo", day:22},
      {name:"Virgo", day:23},
      {name:"Libra", day:23},
      {name:"Scorpio", day:23},
      {name:"Sagittarius", day:22},
      {name:"Capricorn", day:21}
      ];
if(zodiakSigns[month].day >= day){
	alert('Your zodiak sign: '+zodiakSigns[month].name+'.')
}
else{
	alert('Your zodiak sign: '+zodiakSigns[month-1].name+'.')
}