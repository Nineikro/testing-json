async function populate() {

    const requestURL = 'https://raw.githubusercontent.com/Nineikro/testing-json/main/kanji.json?token=GHSAT0AAAAAACDJPAEF4N2TW6CB3Q4A6T76ZEYRG6A';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroesText = await response.text();

    const superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    populateHeroes(superHeroes);

  }

  function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.songName;
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = `Creator: ${obj.creator} // Formed: ${obj.formed}`;
    header.appendChild(myPara);
  }

  function populateHeroes(obj) {
    const section = document.querySelector('section');
    const blocks = obj.parts;

    for (const block of blocks) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');

      myH2.textContent = block.name;
      myPara1.textContent = `Secret identity: ${block.secretIdentity}`;
      myPara2.textContent = `Content : ${block.content}`;
      myPara3.textContent = 'Superpowers:';

      const superPowers = block.powers;
      for (const power of superPowers) {
        const listItem = document.createElement('li');
        listItem.textContent = power;
        myList.appendChild(listItem);
      }

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);

      section.appendChild(myArticle);
    }
  }

  populate();