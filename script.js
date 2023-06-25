/*
const container = document.querySelector('#container');
const body = document.querySelector("body");

const content = document.createElement('div'); //creates a new div
content.classList.add('content'); //adds class content to div
content.textContent = 'This is the glorious text-content!'; //adds text to content div

container.appendChild(content); //sends to html content div

const paragraph = document.createElement('p');
paragraph.setAttribute ('style', 'color:red');
paragraph.textContent = 'Hey, im red';

body.appendChild(paragraph);

const heading_3 = document.createElement('h3');
heading_3.setAttribute ('style', 'color:blue');
heading_3.textContent = 'im a blue h3 :D';

body.appendChild(heading_3);

const content2 = document.createElement('div');
content2.setAttribute ('style', 'background-color:pink; border: 2px solid black');

body.appendChild(content2);

const heading1 = document.createElement('h1');
heading1.textContent = 'im in a div'

content2.appendChild(heading1);

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'ME TOO OMG'

content2.appendChild(paragraph2);

//---------------------------------------------------------

const array = {
    kanji1: "垂れ",
    value1: "たれ",
    kanji2: "兄ちゃん",
    value2: "にいちゃん",
}

const musicContent = document.createElement('div');

body.appendChild(musicContent);

const pt1 = document.createElement('div');
pt1.classList.add('pt1');
pt1.textContent = 
`よう うな ${array[1]} てるその兄ちゃん
何か辛い事あったんか？
俺で良けりゃ話してくんない？
力になるぜ`

musicContent.appendChild(pt1)

// -------------------------------------------------------

function myFunction() {
    document.getElementById("myDropdown").classList.toggle('show');
}

// -------------------------------------------------------
*/

const kanjiJLPT5 = ["学校", "川", "手", '戸', "眼鏡", "煙草"];

const filter = kanjiJLPT5.filter(myFunction)
let i = document.getElementById('3').id 
let len = kanjiJLPT5.length
i = ''

function myFunction (value, index, array) {
    if (i === len) {
        return i
    }
}

console.log(text)