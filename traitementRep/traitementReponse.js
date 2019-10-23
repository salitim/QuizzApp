////////////////////////////////////////////////////////////////////////////////////////////
//VALIDATION DES REPONSES 

function countPoints() {
    let points = 0;
    for (let j = 0; j <= 9; j++) {
        let checkedValue = $('#Q' + j + ':checked').val();

        if (tabQuestion[j][5] === checkedValue) {
            points++;
        }
        console.log(document.getElementsByClassName('reponse')[j].style.display = 'block');
        location.href = "#validationRep";
    }

    return points;

}


document.getElementById('formQuizz').addEventListener('submit', function (e) {
    e.preventDefault();
    let points = countPoints();
    let bilan = document.createElement('p');
    let buttonEnvoi = document.getElementById('validationRep');

    if (points <= 4) {
        buttonEnvoi.appendChild(bilan);
        bilan.appendChild(document.createTextNode('Insuffisant ' + points + '/10. Voir les réponses plus haut.'));
        //alert('insuffisant '+ points+'/10');

    } else if (points <= 6 && points >= 5) {
        buttonEnvoi.appendChild(bilan);
        bilan.appendChild(document.createTextNode('Moyen ' + points + '/10. Voir les réponses plus haut.'));
        //alert('moyen '+points+'/10');

    } else if (points <= 7 && points >= 6) {
        buttonEnvoi.appendChild(bilan);
        bilan.appendChild(document.createTextNode('Bien ' + points + '/10. Voir les réponses plus haut.'));
        //alert('bien '+points+'/10');

    } else if (points > 7) {
        buttonEnvoi.appendChild(bilan);
        bilan.appendChild(document.createTextNode('Aucune erreur ' + points + '/10. Voir les réponses plus haut.'));
        //alert('super '+points+'/10');

    }


}, false

)
