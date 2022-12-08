let chaptersObj = {
    chap1: {
        subtitle: 'Le campement',
        text: 'Vous êtes le Héros dans un monde apocalyptique infesté de zombies et votre camp manque de nourriture et de médicament.',
        img: '',
        video: 'assets/chap1.mp4',
        options: [{
            text: "Aller en chercher seul.",
            action: "goToChapter('chap2')"
        }]
    },
    chap2: {
        subtitle: 'Expedition',
        text: "Durant votre expédition, vous trouvez un survivant qui a besoin d'aide.",
        img: 'assets/chap2mortmarchante.png',
        options: [{
            text: "Laisser le survivant mourir.",
            action: "isKeyFounded()"
        }, {

            text: " Sauvez le survivant.",
            action: "changeStateKeyFounded()"

        }, ]
    },
    chap3: {
        subtitle: ' La Pharmacie',
        text: 'Il y a une phamarcie devant vous gardé par un zombie coincer.',
        img: 'assets/chap3mortmarchante.png',
        options: [{
            text: "Tirez sur le zombie.",
            action: "goToChapter('chapmortZombieShoot')",

        }, {

            text: "Prendre les clés du zombie.",
            action: "goToChapter('chapmortZombie')",

        }]


    },


    pharmaciekey: {
        subtitle: 'Expedition',
        text: 'Il y a une phamarcie devant vous garder par un zombie coincer.Il semble avoir les clés sur lui.Que faire?',
        img: 'assets/chap3mortmarchante.png',
        options: [{
            text: "Tirez sur le zombie.",
            action: "goToChapter('chapmortZombieShoot')"
        }, {

            text: " Prendre les clés du zombie.",
            action: "goToChapter('chapmortZombie')"

        }, {

            text: "Courir...",
            action: "goToChapter('chap4')"

        }]
    },

    chap4: {
        subtitle: 'Les survivants',
        text: 'Vous avez les clés et rendez compte que la pharmacie est un abri habité par des survivants.Que faire?',
        img: 'assets/chap4mortmarchante.jpg',
        options: [{
            text: "Voler leur nourritures et medicaments.",
            action: "goToChapter('chapmortEmbuscade')",

        }, {

            text: "Ne pas les voler.",
            action: "goToChapter('chap5')",

        }]


    },

    chap5: {
        subtitle: 'Le jeu',
        text: "Vous continuez d'attendre jusquà ce qu’un survivant sort de sa cachette vous vous regardez comme dans les face à face Farwest et vous posent une seule question si vous avez la bonne réponse, il vous laisse vivre avec des vivres pour votre campement sinon vous connaissez déjà la suite Le lait avant ou après les céréales? QUE FAIRE?",
        img: 'assets/chap5mortmarchante.jpg',
        options: [{
            text: "avant les céréales.",
            action: "goToChapter('mortCereales')",

        }, {

            text: "Après les céréales.",
            action: "goToChapter('chap6')",

        }]


    },
    chap6: {
        subtitle: "La poule ou l'oeuf",
        text: "Mauvaise réponse, les survivants vous laissent une dernière chance.Qui vient avant la poule ou l'œuf?",

        img: 'assets/chap6mortmarchante.jpg',
        options: [{
            text: "l'oeuf.",
            action: "goToChapter('chap7')",

        }, {

            text: "La poule.",
            action: "goToChapter('chap7')",

        }]
    },
    chap7: {
        subtitle: 'fin',
        text: 'Les survivants ne connaissent pas la réponse plus que vous et donnent et des médicaments et de la nourriture',
        img: 'assets/happyending.jpg',
        options: [{

                text: "Revenir au début.",
                action: "goToChapter('chap1')",
            }

        ]

    },

    // les chaps morts
    chapmortEmbuscade: {
        subtitle: 'Vous êtes mort',
        text: 'Des survivants sortent de nulle part et vous tuent. FIN.',
        img: 'assets/trapsurvivor.png',


        options: [{

                text: "Revenir au début.",
                action: "KeyFoundedMort()"
            }

        ]

    },
    chapmortZombieShoot: {
        subtitle: 'Vous êtes mort',
        text: 'Le bruit attire les zombies proches de la pharmacie. FIN.',
        img: 'assets/zombieAttack.jpg',
        options: [{

                text: "Revenir au début.",
                action: "KeyFoundedMort()"

            }

        ]

    },
    chapmortZombie: {
        subtitle: 'Vous êtes mort',
        text: 'Vous paniquez face au zombie et il vous dévorent. FIN.',
        img: 'assets/zombieAttack.jpg',
        options: [{

                text: "Revenir au début.",
                action: "KeyFoundedMort()"
            }

        ]

    },
    mortCereales: {
        subtitle: 'Vous êtes mort',
        text: 'Je sais pas quoi dire... FIN.',
        img: 'assets/mort.jpg',
        options: [{

                text: "Revenir au début.",
                action: "KeyFoundedMort()"
            }

        ]

    },
    // clee trouver
    KeyFound: {
        subtitle: 'Vous êtes mort',
        text: "Le survivant vous remercie de votre geste et par la suite vous poignarde à mort lors de l’assaut vous prenez ses clés( Vous avez obtenu les clés d'une pharmacie)",
        img: '',
        video: 'assets/KeyFound.mp4',
        options: [{
            text: "Revenir au début.",
            action: "goToChapter('chap1')"
        }]
    },

}
let volume = 0;
var audio;
var audio2;
var audio3;

function goToChapter(chap) {

    document.getElementById("subtitle").innerHTML = chaptersObj[chap]["subtitle"];
    document.getElementById("text").innerHTML = chaptersObj[chap]["text"];

    let buttonPanel = document.getElementById('Container')
    let optionsArr = chaptersObj[chap].options;
    let buttonTag;
    let optionText;
    let optionAction;

    for (var i = 0; i < optionsArr.length; i++) {
        optionText = optionsArr[i].text;
        optionAction = optionsArr[i].action;
        buttonTag = `<button class="button" onclick="${optionAction}">${optionText}</button>`;
        if (i == 0) {
            buttonPanel.innerHTML = buttonTag;
        } else {
            buttonPanel.insertAdjacentHTML('beforeend', buttonTag);
        }
    }



    if (chaptersObj[chap]["img"] !== null && chaptersObj[chap]["img"] != '' && chaptersObj[chap]["img"] != "") {

        let imgOuVideoPanel = document.getElementById("imgOuVideo-container");
        let imgOuVideoTag;
        let myElementIV = chaptersObj[chap]["img"];

        imgOuVideoTag = `<img src="${myElementIV}"></img>`

        imgOuVideoPanel.innerHTML = "";
        imgOuVideoPanel.insertAdjacentHTML('beforeend', imgOuVideoTag);


    } else {


        let imgOuVideoPanel = document.getElementById("imgOuVideo-container");
        let imgOuVideoTag;


        let myElementIV = chaptersObj[chap]["video"];
        imgOuVideoTag = `<video autoplay loop muted inline>

        <source src="${myElementIV}" type="video/mp4">

    </video>`
        imgOuVideoPanel.innerHTML = "";
        imgOuVideoPanel.insertAdjacentHTML('beforeend', imgOuVideoTag);
    }
    // son entre chapitre
    if (chap != "KeyFound" && chap != "chapmortEmbuscade" && chap != "chapmortZombieShoot" && chap != "chapmortZombie" && chap != "mortCereales") {
        audio = new Audio('assets/changeChap.mp3');
        audio.play();
        document.body.style.backgroundColor = "#846c5b"
    } else {
        if (chap != "chapmortEmbuscade" && chap != "chapmortZombieShoot" && chap != "chapmortZombie" && chap != "mortCereales") {
            audio2 = new Audio('assets/KeyfoundSE.mp3');
            audio2.play();
            document.body.style.backgroundColor = "#846c5b"
        } else {
            console.log("");
            audio3 = new Audio('assets/zombieAttack.mp3');
            audio3.play();
            document.body.style.backgroundColor = "red"; //changement de couleur lorsque le personnage principal meurt
        }

    }



    localStorage.setItem("chaptersObj", chap);

    currentChapter(chap);
}

// debut de chapitre
function localSto() {

    if (!localStorage.getItem("chaptersObj")) {
        goToChapter("chap1");
    } else {

        goToChapter(localStorage.getItem("chaptersObj"));
    }

}



var keyFoundedRes = false;
localStorage.setItem("keyFoundedRes", keyFoundedRes);

let changeStateKeyFounded = function() {
    keyFoundedRes = true;

    localStorage.setItem("keyFoundedRes", keyFoundedRes);
    goToChapter("KeyFound");

}
let KeyFoundedMort = function() {
    keyFoundedRes = false;

    localStorage.setItem("keyFoundedRes", keyFoundedRes);
    goToChapter("chap1");

}


let isKeyFounded = function() {

    if (keyFoundedRes) {
        goToChapter("pharmaciekey");
    } else {

        goToChapter("chap3");
    }

}


//  enregistre valeur de l'objet
localSto();

function currentChapter(chap) {
    document.body.className = chap;

}

function reset() {
    localStorage.clear();
    goToChapter("chap1");


}

function soundOff() {
    video.muted = true;
    music.stop()
    audio = true;
    audio2 = true;
    audio3 = true;
    checkbox = document.getElementById("volume")
    if (checkBox.checked == true) {
        music.stop()

    } else {

    }
}