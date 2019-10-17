const app = document.getElementById("app");

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

    randomTab(tab);

    //Boucle sur 4 question possibles
    for (let i = 0; i <= 3; i++) {
        let label = document.createElement('label')
        label.htmlFor = "Q" + index;
        label.appendChild(document.createTextNode(tabQuestion[index][tab[i]
        ]));
        let checkBox = document.createElement('input');
        checkBox.type = "radio";
        checkBox.id = "Q" + index;
        checkBox.name = "Q" + index;
        checkBox.value = tabQuestion[index][tab[i]];
        app.appendChild(checkBox);
        app.appendChild(label);
    }
}


