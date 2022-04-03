let currentQuestion = 0
let questions = ["Kiek jums metų?",
 "Ar planuojate dažnai siųsti vaizdines ar garsines žinutes?",
 "Ar svarbi galimybė stebėti ką veikia jūsų draugai, su jais nebendraujant?",
 "Ar ieškote naujų draugų, su kuriais galima būtų pabendrauti?",
 "Ar dažnai reaguojate į kitų žinutes patiktukais/jaustukais?",
 "Ar norėtumėte priklausyti grupėms, kuriose susirenka panašiais dalykais besidomintys žmonės?",
 "Ar ieškote išsamios, plačiai išdėstytos informacijos?",
 "Ar ieškote galimybės rinkti sekėjus?"]
let choices = ["Mažiau nei 21:Daugiau nei 21",
 "Taip:Ne",
 "Taip:Ne",
 "Taip:Ne",
 "Taip:Ne",
 "Taip:Ne",
 "Taip:Ne",
 "Taip:Ne"]
let addPointsTo = ['Instagram,Snapchat:Messenger,Instagram',
 "Messenger,Snapchat: ",
 "Instagram,Snapchat: ",
 "Instagram,Snapchat: ",
 "Messenger,Instagram: ",
 "Discord,Messenger: ",
 "Youtube:Tiktok",
 "Instagram,Tiktok,Youtube: ",
]
localStorage.setItem('Youtube', 0)
localStorage.setItem('Snapchat', 0)
localStorage.setItem('Messenger', 0)
localStorage.setItem('Instagram', 0)
localStorage.setItem('Tiktok', 0)
localStorage.setItem('Discord', 0)
const choicesDiv = document.getElementById("choices")
const questionText = document.getElementById("question")
const progressBarFull = document.getElementById("progressBarFull")

function updateQuestion(){
    if(this.id!=undefined){
        chosenApp = addPointsTo[currentQuestion-1].split(":")[this.id]
        for(i in chosenApp.split(",")){
            currentApp = chosenApp.split(",")[i]
            console.log(currentApp)
            if (currentApp==" ") continue
            currentPoints = localStorage.getItem(currentApp)
            localStorage.setItem(currentApp, currentPoints+1)
        }
    }

    progressBarFull.style.width = `${(currentQuestion/questions.length)*100}%`

    if(currentQuestion>=questions.length) {
        return setTimeout(function(){
            window.location.href = 'result.html'
        }, 500)
    }
    choicesDiv.innerHTML = ''
    questionText.innerHTML = questions[currentQuestion]

    for(let i = 0;i<choices[currentQuestion].split(":").length;i++){
        let choice = choices[currentQuestion].split(":")[i]
        let element = document.createElement('button')
        element.className = "choiceButton"
        element.innerHTML = choice
        element.id = i
        choicesDiv.appendChild(element)
        element.addEventListener("click", updateQuestion);
    }

    currentQuestion++
}

updateQuestion()


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
