$(document).ready(main);

var vie;
var nbraleat;

function main(){

	function reset(){
		vie = parseInt(prompt("Choisissez le nombre de vie"));
		$("span").text(vie);
		var min = parseInt(prompt("Choisissez un nombre aléatoire minimal"));
		var max = parseInt(prompt("Choisissez un nombre aléatoire maximal"));
		nbraleat = Math.floor(Math.random() * (max - min + 1)) + min;

	}

	function partieGagnee(message){

		alert(message);
		reset();
	}

	function partiePerdue(message){

		alert(message);
		vie--;
		$("span").text(vie);
	}

	function clickValider(){

		var taper = $("input").val();

		if (taper === nbraleat){
			partieGagnee("Gagné");
			
		}if(vie === 0){
			alert("You loose!")
			reset();

		}else if(taper > nbraleat){
			partiePerdue("Try again, votre nombre est trop grand");
			

		}else {
			partiePerdue("Try again, votre nombre est trop petit");
			
		}	

	}

	$("button").click(function(){

		clickValider()

	});

	reset();

}

