const btn = document.getElementById("btn");
const copy_btn = document.getElementById("copy-btn");

const result = document.getElementById("result");

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();
var content = '';

recognition.continuous = true;

recognition.onstart = function (){
    document.getElementById("result").innerHTML = "VOICE RECOGNITION IS ON";
    console.log("speech recognition is on");
}

recognition.onspeech = function(){
    document.getElementById("result").innerHTML = "NO ACTION";
}

recognition.onerror = function(){
    document.getElementById("result").innerHTML = "ERROR";
}

recognition.onresult = function(event){
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content += transcript;
    document.getElementById("result").innerHTML = content;
}

btn.addEventListener("click",function (event) {
    if(content.length)
    {
        content += ''
    }
    recognition.start();
})


copy_btn.addEventListener("click",function () {
    var range = document.createRange();

    range.selectNode(document.getElementById("result"));

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    window.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copied the text");
})
