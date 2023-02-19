// var userName=prompt("Give me your name broo!!");
// console.log("Welcome to the website",userName);
// alert(userName +" has breached the website." );
var text=document.querySelector("#text")
var button=document.querySelector("#button");
var output=document.querySelector("#output");
var url="https://api.funtranslations.com/translate/valyrian.json?text="
function getUrl(text){
return url +  text;
}
function errorHandler(error){
    console.log("Some error occured  "+ error)
    alert("Unfortunately our server is down right now! Please check back after some time!")
}
function clickHandler(inputtext)
{ var inputtext=text.value
//   console.log("Clicked!")
//   console.log(inputtext)
   fetch(getUrl(inputtext))
  .then(response=>response.json())
  .then(json=>{
    var translatedText=json.contents.translated;
    output.innerText=translatedText;
   })
  //  .catch(errorHandler)
  
}
button.addEventListener("click" ,clickHandler)
