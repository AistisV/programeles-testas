const resultText = document.getElementById("result")
// 'youtube' = localStorage.getItem('Youtube')
// 'snapchat' = localStorage.getItem('Snapchat')
// 'messenger' = localStorage.getItem('Messenger')
// 'instagram' = localStorage.getItem('Instagram')
// 'tiktok' = localStorage.getItem('Tiktok')
// 'discord' = localStorage.getItem('Discord')

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'result_particles.json', function() {
  console.log('callback - particles.js config loaded');
});

appResults = {
    'Youtube': localStorage.getItem('Youtube'),
    'Snapchat': localStorage.getItem('Snapchat'),
    'Messenger': localStorage.getItem('Messenger'),
    'Instagram': localStorage.getItem('Instagram'),
    'Tiktok': localStorage.getItem('Tiktok'),
    'Discord': localStorage.getItem('Discord'),
}
var bestApp;
for (var h in appResults) {
  if (!bestApp || (appResults[h] > appResults[bestApp])) {
    bestApp = h;
  }
}
setTimeout(function(){
resultText.innerHTML = bestApp.toUpperCase()
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline()
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  })
}, 500)