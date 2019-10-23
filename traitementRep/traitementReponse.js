////////////////////////////////////////////////////////////////////////////////////////////
//VALIDATION DES REPONSES 
let tabPoints = [];
function countPoints() {
    let points = 0;
    for (let j = 0; j <= 9; j++) {
        let checkedValue = $('#Q' + j + ':checked').val();

        if (tabQuestion[j][5] === checkedValue) {
            points++;
            tabPoints.push(points);
            
        }
        console.log(document.getElementsByClassName('reponse')[j].style.display = 'block');
        location.href = "#validationRep";
    }
    tabPoints = tabPoints[tabPoints.length-1];
    return points;

}

function download_csv() {
    var csv = 'Quizz'+';'+'nom'+';'+'Date'+';'+'points'+'\n'+';'+';'+new Date()+';'+tabPoints;
 
    console.log(csv);
    var hiddenElement = document.querySelector('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'agent.csv';
    hiddenElement.click();
}

document.getElementById('formQuizz').addEventListener('submit', function (e) {
    
    let points = countPoints();
    let bilan = document.createElement('p');
    bilan.className = "text-center";
    let buttonEnvoi = document.getElementById('validationRep');

    if (points <= 4) {
        document.getElementById('formQuizz').insertBefore(bilan, buttonEnvoi)

        bilan.appendChild(document.createTextNode('Insuffisant ' + points + '/10. Voir les réponses plus haut.'));
        //alert('insuffisant '+ points+'/10');

    } else if (points <= 6 && points >= 5) {
        document.getElementById('formQuizz').insertBefore(bilan, buttonEnvoi)
        bilan.appendChild(document.createTextNode('Moyen ' + points + '/10. Voir les réponses plus haut.'));
        //alert('moyen '+points+'/10');

    } else if (points <= 7 && points >= 6) {
        document.getElementById('formQuizz').insertBefore(bilan, buttonEnvoi)
        bilan.appendChild(document.createTextNode('Bien ' + points + '/10. Voir les réponses plus haut.'));
        //alert('bien '+points+'/10');

    } else if (points > 7) {
        document.getElementById('formQuizz').insertBefore(bilan, buttonEnvoi)
        bilan.appendChild(document.createTextNode('Très bien ' + points + '/10.Bravo! Voir les réponses plus haut.'));
        //alert('super '+points+'/10');

    }
    download_csv();
    console.log(tabPoints);
    e.preventDefault();
}, false

)



