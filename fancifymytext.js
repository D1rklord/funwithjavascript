function giveAlert() {
  alert("Hello, world!");

}

//This function increases the text size
function biggerTextSize() {
    var textArea = document.getElementById('textInput');
    textArea.style.fontSize = '24pt';
}

//This function will change the boring style
function changeBoringStyle() {
    var textArea = document.getElementById('textInput');
    textArea.style.fontWeight = 'normal';
    textArea.style.textDecoration = 'none';
    textArea.style.color = 'black';
}

function changeFancyStyle() {
    var textArea = document.getElementById('textInput');
    textArea.style.fontWeight = 'bold';
    textArea.style.textDecoration = 'underline';
    textArea.style.color = 'blue';

}

function upcaseAndSuffix () {
    var textArea = document.getElementById('textInput');
    var text = textArea.value;

    text = text.toUpperCase();

    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        if (words.length > 0) {
            words[words.length - 1] = words[words.length - 1].toUpperCase() + "-Moo";
        }
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(". ");
}

window.onload = function() {

    var mooButton = document.getElementById('mooButton');
    mooButton.addEventListener('click', upcaseAndSuffix);
    
    var biggerButton = document.getElementById('biggerButton');
    biggerButton.addEventListener('click', biggerTextSize);

    var fancyRadio = document.getElementById('fancyRadio');
    fancyRadio.addEventListener('change', changeFancyStyle);

    var boringRadio = document.getElementById('boringRadio');
    boringRadio.addEventListener('change', changeBoringStyle);

     
}