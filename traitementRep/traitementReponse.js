////////////////////////////////////////////////////////////////////////////////////////////
//VALIDATION DES REPONSES 

function countPoints() {
    let points = 0;
    for (let j = 0; j <= 9; j++) {
        let checkedValue = $('#Q' + j + ':checked').val();

        if (tabQuestion[j][5] === checkedValue) {
            points++;
        }
    }
    return points;

}

function test() {

    let points = countPoints();

    if (points <= 4) {
        alert('insuffisant '+ points+'/10');
    } else if (points <= 6 && points >= 5) {
        alert('moyen '+points+'/10');
    } else if (points <= 7 && points >= 6) {
        alert('bien '+points+'/10');
    } else if (points > 7) {
        alert('super '+points+'/10');
    }
}
