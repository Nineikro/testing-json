//gets JSON's data
async function populate() { 

    const requestURL = 'https://raw.githubusercontent.com/Nineikro/testing-json/main/kanji.json?token=GHSAT0AAAAAACDJPAEFMCLUI4MPLTDHCX22ZEYSTXQ'; 'https://raw.githubusercontent.com/Nineikro/testing-json/main/vocabulary.json?token=GHSAT0AAAAAACDJPAEEK3JO7WUWEA2ODADOZEYSNXA';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroesText = await response.text();

    const superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    populateHeroes(superHeroes);

}

//header stuff
function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');
  myH1.textContent = obj.songName;
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `Creator: ${obj.creator} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

//song stuff
function populateHeroes(obj) {
  const section = document.querySelector('section'); //selects section
  const blocks = obj.parts; //JSON song parts stored on blocks

  for (const block of blocks) { //loops through all the parts; meaning: shows all the parts till theres no more
    const myArticle = document.createElement('article'); //creates article element and stores in myArticle
    const Para1 = document.createElement('p'); //creates paragraph element and stores in para1

    const songLines = block.powers; //JSON lyrics stores in songLines
    for (const line of songLines) { //loops through all lines of part
      const content = document.createElement('p'); //creates paragraph and stores in content
      content.textContent = line; //all the text in the paragraph are the lines from songLines looped through
      Para1.appendChild(content); //adds content to para1

      const kanjis = obj.kanji;
      for (const kanji of kanjis) {
        if (line.includes(kanjis)) {
          console.log("hello world")
        }
      }
    }

    myArticle.appendChild(Para1); //appends para1 to myarticle

    section.appendChild(myArticle); //appends myarticle to section
  }
}

  populate();