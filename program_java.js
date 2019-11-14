// JavaScript Document



console.log("hello console");

//pick random letter


function randLetter() {
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
				  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
				  "w", "x", "y", "z"];
    
	var letter = letters[Math.floor(Math.random() * letters.length)];
	return letter;
}


console.log(randLetter());

$('#palavra1').html(randLetter());
$('#palavra2').html(randLetter());
$('#palavra3').html(randLetter());
$('#palavra4').html(randLetter());



//random widths


//this is working


function randWidth(){
    const x = Math.floor(Math.random() * 161) + 480;
    $('#box1').width(x+'px');
	$('#box3').width(x+'px');
	return x; 
}

console.log(randWidth());


function randWidthRight(){
	var y = $(window).width();
	var x2= randWidth();
	var widthSize = y - x2;
	
	$('#box2').width(widthSize+'px');
	$('#box4').width(widthSize+'px');
	
	return widthSize;
	}
	
	
console.log(randWidthRight());





//random heights

function randHeight(){
    const a = Math.floor(Math.random() * 101) + 380;
    $('#box1').height(a+'px');
	$('#box2').height(a+'px');
	return a; 
}

console.log(randHeight());



function randHeightRight(){
	var b = $(window).height();
	var a2= randHeight();
	var heightSize = b - a2;
	
	$('#box3').height(heightSize+'px');
	$('#box4').height(heightSize+'px');
	
	return heightSize;
	}
	
	
console.log(randHeightRight());







//random font

function randFont(){

var fonts = ['Roboto_Mono', 'Inconsolatas', 'Cousine', 'Anonymous_Pro', 'Open_Sans', 'Montserrat', 'Merriweather', 'Play_Fair_Display'];
            var rand = fonts[Math.floor(Math.random() * fonts.length)];
            console.log(rand);

            var bodyElement1 = document.getElementById("box1");
			var bodyElement2 = document.getElementById("box2");
			var bodyElement3 = document.getElementById("box3");
			var bodyElement4 = document.getElementById("box4");
			
            bodyElement1.className = fonts[Math.floor(Math.random() * fonts.length)];
			bodyElement2.className = fonts[Math.floor(Math.random() * fonts.length)];
			bodyElement3.className = fonts[Math.floor(Math.random() * fonts.length)];
			bodyElement4.className = fonts[Math.floor(Math.random() * fonts.length)];


}


console.log(randFont());



//button


/*function refreshPage(){
    window.location.reload();
	$('#button') = refreshPage();
} */


document.addEventListener('keyup', function(e){
  if(e.keyCode == 13);
  window.location.reload();
});



