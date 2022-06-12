var colors = generateColor(6);
var guessColor = pickedColor();
var replace = document.getElementById("colorDisplay");
var gameOver = false;
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");

replace.textContent = guessColor;

var squaress = document.querySelectorAll(".square");

for (var i = 0; i < squaress.length; i++)
{
	squaress[i].style.background = colors[i];

	squaress[i].addEventListener("click", function(){
		var clicked = this.style.background;
		var status = document.getElementById("status")
		if (!gameOver)
		{
		if (clicked === guessColor)
		{
			status.textContent = "Correct!"
			changeColors(clicked);
			reset.textContent = "Play Again?"
			gameOver = true;
		}
		else
		{
			this.style.background = "Black";
			status.textContent = "Try Again";
		}
	}
	else
	{
		alert("Please Reset")
	}


		console.log(clicked + " and " + guessColor);
	})
}



function changeColors(color)
{
	for (var i =0; i<squaress.length; i++)
	{
	squaress[i].style.background = color;
	}
	h1.style.background = color;
}

function pickedColor()
{
	if(hrdmode)
	{
		var i = Math.floor(Math.random()*6);
	}
	else
	{
		var i = Math.floor(Math.random()*3);
	}
	var x = colors[i];
return x;
}

function generateColor(num)
{
var arry = [];

for (var i = 0; i<num; i++)
{
	arry.push(randomColor());
}

return arry;
}

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	var x = "rgb(" + r + ", " + g + ", " + b + ")";
	return x;
}


reset.addEventListener("click", function()
{
	resett();
})

var hrdmode = true;
var easy = document.getElementById("EZ");
var hard = document.getElementById("HRD");


easy.addEventListener("click", function()
{
	hrdmode = false;
	resett();

	easy.classList.add("selected");
	hard.classList.remove("selected");

	for (var i = squaress.length/2; i < squaress.length; i++)
{
	squaress[i].style.display = "none";
}
})

hard.addEventListener("click", function()
{
	hrdmode = true;
	resett();
	easy.classList.remove("selected");
	hard.classList.add("selected");

		for (var i = squaress.length/2; i < squaress.length; i++)
{
	squaress[i].style.display = "block";
}
})

function resett()
{
	gameOver = false;
	if (hrdmode)
	{
	colors = generateColor(6);
	}
	else
	{
		colors = generateColor(3);
	}
	guessColor = pickedColor();
	replace.textContent = guessColor;
	for (var i = 0; i < squaress.length; i++)
{
	squaress[i].style.background = colors[i];
}
h1.style.background = "skyblue";
reset.textContent = "New Colors";
var status = document.getElementById("status");
status.textContent = "";

}