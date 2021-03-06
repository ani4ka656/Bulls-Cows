var clicks = 0,
    submit = document.getElementById('submit'),
    btn = document.getElementById('btn'),
    text = document.getElementById('text'),
    rules = document.getElementById('rules'),
    message = document.getElementById('message'),
    guesses =  document.getElementById('guesses'),
    number =  document.getElementById('number')
    rules.style.display = "none";

btn.addEventListener('mouseenter', function(){             
    rules.style.display = "block";
    message.style.display = "none";
    guesses.style.display = "none";
    number.style.display = "none";
    text.style.display = "none";
    submit.style.display = "none";
});

btn.addEventListener('mouseout', function(){ 
    rules.style.display = "none";
    message.style.display = "block";
    guesses.style.display = "block";
    number.style.display = "block";
    text.style.display = "block";
    submit.style.display = "block";

});
//Here we generate the number every time randomly
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
var hidden = shuffleArray(numbers).slice(0,4).join('');
console.log(hidden);
if(hidden[0] == 0){
	hidden = numbers.slice(1,5).join('');
	console.log(hidden);
}
   
  	// console.log(numbers);
//This is the main function
submit.addEventListener('click', play);
function play() {
    var guess = document.getElementById('guess').value;
    var flag = true;
 	//console.log(guess)

  	if (guess) {
  		var arr=guess.split(""),
  			len=arr.length;
			//console.log(arr)

        //here we chek if the input value is != number
  		for(i = 0;i < len; i++){
  			var num = parseInt(arr[i])
  			if (isNaN(num)) {
  				flag = false;
               // alert('The number must contain only digits')
  			}
  		}//end for
        if(!flag){
            alert('The number must contain only digits')
        } else if (guess.charAt(0) === '0') {
            alert("The number imust not begin with zero/0!");
        } else if (guess.length < 4) {
  			alert("The number is too short!");
  		} else if (guess.length > 4) {
            alert("The number is too long!");
        } else if (guess.charAt(0) === guess.charAt(1) || guess.charAt(0) === guess.charAt(2) || guess.charAt(0) === guess.charAt(3) || guess.charAt(1) === guess.charAt(2) || guess.charAt(1) === guess.charAt(3) || guess.charAt(2) === guess.charAt(3)) {
  			alert("Some of the digits repeat");
 		} else {
            clicks++;
            //console.log(clicks)
            document.getElementById('guesses').textContent="Try: " + clicks;            
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
                document.getElementById('number').innerHTML="The number: " + guess;

    		} else if (guess === hidden) {
      			message.innerHTML = "Congratulations!";
                message.setAttribute('id', 'gameover');
                number.innerHTML = "Your number: " + guess;
      			submit.style.display = 'none';
                btn.style.display = 'none';
                var retry=document.createElement('a');
                retry.setAttribute('href','index.html');
                retry.setAttribute('id', 'gameover');                
                retry.textContent = 'GameOver';
                document.getElementById('play').appendChild(retry);

    		}//end guess hidden
    	}//if guess length === 4
	} else {
		alert('You must enter a number')
	}//end if guess
    
	document.getElementById('guess').value = '';
}
