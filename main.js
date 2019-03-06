const dinosaurs = [
    {
        dinoType: 't-rex',
        name: 'Louie'
    },
    {
        dinoType: 'mastodon',
        name: 'Jamal'
    },
    {
        dinoType: 'velociraptor',
        name: 'Lisa'
    }

];

//loop over the dinosaurs
//build up a domstring
//print domstring to the dom

const printToDom = (divId, textToPrint) => {
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML = textToPrint;
};

const buildDinosaurs = () => {
    let domstring = '';
    for(let i = 0; i<dinosaurs.length; i++){
        domstring += `<div class="dinosaur">`
        domstring += `<h3>${dinosaurs[i].dinoType}<h3>`;
        domstring += `<p>${dinosaurs[i].name}</p>`;
        domstring += `</div>`
    }
    printToDom('Dino', domstring);
};

const init = () => {
    buildDinosaurs();
};

init();



