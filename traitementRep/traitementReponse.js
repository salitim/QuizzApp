////////////////////////////////////////////////////////////////////////////////////////////
		//VALIDATION DES REPONSES 
        
        function countPoints(){
            let points = 0;  
            for(let j = 0; j<=9;j++){
            let checkedValue = $('#Q'+j+':checked').val();
            
            if(tabQuestion[j][5]===checkedValue){
                points ++;
            }
            
            }
            return points;

        }

		function test() {
            
            let points = countpoints();

            if(points<=4){
                alert('marge de progression importante');
            }else if(points<=6){
                alert('marge de progression importante');
            }else if(points<=7){
                alert('bien');
            }else if(points>7){
                alert('super'); 
            }
		}
