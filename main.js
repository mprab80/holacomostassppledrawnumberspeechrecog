x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number="";
draw_apple="";
nithilNumber=0;
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple = loadImage("apple.png");
  //apple = "apple.png";
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    nithilNumber=Number(content);
    if(Number.isInteger(nithilNumber)){
      document.getElementById("status").innerHTML="Started drawing apple";
      draw_apple="set";
    }else{
      alert("The speech has not recognized a number");
    }

}

function setup() {
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
  canvas=createCanvas(screen_width, screen_height-150);
  canvas=canvas.position(0, 150)
}
 
function draw() {
  //
  if(draw_apple == "set")
  {
    console.log("Inside draw " + to_number);
    for(var i=1; i <= nithilNumber; i++)
    {
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image (apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = nithilNumber + " Apples drawn";
    speak_data= nithilNumber + " Apples drawn";
    speak()
    }
    draw_apple=""
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
