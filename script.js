
var clicks = 0,
 submit=document.getElementById('submit')
 submit.addEventListener('click',function() {
	clicks++;
	console.log(clicks)
	document.getElementById('guesses').textContent=clicks;
});


var numbers = [0,1,2,3,4,5,6,7,8,9];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var hidden=shuffleArray(numbers).slice(0,4).join('');
console.log(hidden);
if(hidden[0] == 0){
	hidden=numbers.slice(1,5).join('');
	console.log(hidden);
}
   
  	// console.log(numbers);

submit.addEventListener('click', play);
function play() {


 	var guess = document.getElementById('guess').value;
 	//console.log(guess)

  	if(guess){
  		var arr=guess.split(""),
  			len=arr.length;
			//console.log(arr)


  		for(i=0;i<len;i++){
  			var num =parseInt(arr[i])

  			if(isNaN(num)){
  				alert('the number must contain only digits')
  			}
  		}//end for


  		if (guess.length != 4) {
  			alert("the number is too long or short");
  		} else if (guess.charAt(0) === guess.charAt(1) || guess.charAt(0) === guess.charAt(2) || guess.charAt(0) === guess.charAt(3) || guess.charAt(1) === guess.charAt(2) || guess.charAt(1) === guess.charAt(3) || guess.charAt(2) === guess.charAt(3)) {
  			alert("some of the digits repeat");
 		} else {
			var bulls = 0;
    		var cows = 0;
			if (guess !== hidden) {
      			if (guess.charAt(0) === hidden.charAt(0)) {
        			bulls += 1;
    			} else if (guess.charAt(0) === hidden.charAt(1) || guess.charAt(0) === hidden.charAt(2) || guess.charAt(0) === hidden.charAt(3)) {
        			cows += 1;
     			}
     			if (guess.charAt(1) === hidden.charAt(1)) {
        			bulls += 1;
    			} else if (guess.charAt(1) === hidden.charAt(0) || guess.charAt(1) === hidden.charAt(2) || guess.charAt(1) === hidden.charAt(3)) {
        			cows += 1;
    			}
    			if (guess.charAt(2) === hidden.charAt(2)) {
        			bulls += 1;
    			} else if (guess.charAt(2) === hidden.charAt(0) || guess.charAt(2) === hidden.charAt(1) || guess.charAt(2) === hidden.charAt(3)) {
        			cows += 1;
    			}
    			if (guess.charAt(3) === hidden.charAt(3)) {
        			bulls += 1;
    			} else if (guess.charAt(3) === hidden.charAt(0) || guess.charAt(3) === hidden.charAt(1) || guess.charAt(3) === hidden.charAt(2)) {
       				cows += 1;
    			}
      			document.getElementById('message').innerHTML="Bulls: " + bulls + " & Cows: " + cows;

    		} else if (guess === hidden) {
      			document.getElementById('message').innerHTML="Congratulations!";
      			document.getElementById('submit').style.display = 'none';

    		}//end guess hidden
    	}//if guess length === 4
	}else{
		alert('you must enter a number')
	}//end if guess

	document.getElementById('guess').value = '';
}
