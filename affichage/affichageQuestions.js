

const app = document.getElementById("app");



function displayClassiqueTab(){ 
    tabQuestion = classiqueTab;

}

function displayCollegeTab(){
    tabQuestion = collegeTab;
}

function displayReseauTab(){
    tabQuestion = reseauTab;
}

function displayConfirmeTab(){
    tabQuestion = confirmeTab;
}


// Génere un tableau aléatoire avec  des chiffres qui ne se repètent pas
function randomTab(array) {
    var tmp, current, top = 4;
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
    }
    return array;
}

let tab = [1, 2, 3, 4];

//Boucle sur 10 questions
for (let index = 0; index <= 9; index++) {

    let question = document.createElement('p');

    question.appendChild(document.createTextNode(tabQuestion[index][0]));
    app.appendChild(question);
    let reponse = document.createElement('p');
    reponse.appendChild(document.createTextNode(tabQuestion[index][6]));
    reponse.className = 'reponse';
    app.appendChild(reponse);
    randomTab(tab);

    //Boucle sur 4 question possibles
    for (let i = 0; i <= 3; i++) {
        let label = document.createElement('label')
        //label.htmlFor = "Q" + index;       
        label.className = "btn btn-primary btn-sm container element-animation" + (i + 1);
        label.style = 'margin:10px'
        let checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.id = "Q" + index;
        checkBox.className = "input";
        checkBox.value = tabQuestion[index][tab[i]];
        let span = document.createElement('span');
        span.className = "checkmark";

        app.appendChild(label);
        span.appendChild(document.createTextNode(tabQuestion[index][tab[i]
        ]));
        label.appendChild(checkBox);
        label.appendChild(span);
    }

}

//Attribue un nom unique pour chage balise input. Permettra la récupération serveur PHP
for (let j = 0; j <= 39; j++) {

    document.querySelectorAll('input')[j].name = 'Q' + j;
}

