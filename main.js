
let generalQuestionPool = [];
let intimateQuestionPool = [];

let generalRobotResponses = [];
let intimateRobotResponses = [];

// Adding General Questions
generalQuestionPool.push("What is your name?")
generalQuestionPool.push("Where is your favorite place to eat?")
generalQuestionPool.push("What do you usually order from there?")
generalQuestionPool.push("Do you have any hobbies?")
generalQuestionPool.push("What's your favorite item that you've bought this year?")

// Adding intimate Questions
generalQuestionPool.push("What is your biggest regret from college?")
generalQuestionPool.push("What do you want to be remembered for if you passed away?")
generalQuestionPool.push("Be honest, how often do you work from your bed?")
generalQuestionPool.push("It was nice talking to you! I have to go to my meeting soon, so Goodbye!")



// Adding Responses
generalRobotResponses.push("Hello, my name is Mark.")
generalRobotResponses.push("Nice to meet you!")
generalRobotResponses.push("Interesting, maybe I should try going there sometime.")
generalRobotResponses.push("That sounds delicious! I personally really love grilled cheese sandwiches.")
generalRobotResponses.push("Cool, I usually spend my free time playing poker with other robots.")
generalRobotResponses.push("That sounds nice, I might consider that in my holiday shopping plans.")

// Adding intimate responses
generalRobotResponses.push("I see, my biggest regret was not going to more parties.")
generalRobotResponses.push("I understand. I would love to be remembered as a nice robot.")
generalRobotResponses.push("Ok, because I like to sleep a lot.")


let idx = 0;
let intimate = false;
let mystery_num = 0;

window.onload = function() {
    let responseButton = document.getElementById("responseButton");

    // Update the current slider value (each time you drag the slider handle)
    responseButton.onclick = function() {
        if (idx == generalQuestionPool.length) {
            let mys = document.getElementById("mysteryNum");
            mys.innerHTML = "Your mystery number is: " + Math.floor(mystery_num / (generalQuestionPool.length - 1)) + " Please use it to fill out this <a href=https://forms.gle/uKrJ8hh94gNewrrw5 target=_blank>survey</a>";

            
            return;
        }
        let response = document.getElementById("response").value;
        document.getElementById("response").value = "";
        mystery_num += response.split(" ").length;
        
        let agentResponseBox = document.getElementById("agentResponse");



        agentres = generalRobotResponses[idx] + " " + generalQuestionPool[idx]
        
        agentResponseBox.innerHTML = "<b>Agent Response:</b> " + agentres;
        var msg = new SpeechSynthesisUtterance();
        // let voices = window.speechSynthesis.getVoices();
        // window.speechSynthesis.getVoices().forEach(function(voice) {
        //     console.log(voice.name, voice.default ? voice.default :'');
        //   });
          
        //msg.voice = voices[2]; 
        msg.text = agentres
        window.speechSynthesis.speak(msg);

        idx++;

        
    }

}
