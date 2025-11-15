function setCard(x, y, id)
{
	const height = 286;
	const width = 196.9;
	$("#card" + id).css("background-position", `-${x * width}px -${y * height}px`);
}

function random(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function randomCard()
{
	let y = random(0, 3);
	let map = 
	[
		{ x: 5, p: 6 },
		{ x: 6, p: 7 },
		{ x: 7, p: 8 },
		{ x: 8, p: 9 },
		{ x: 9, p: 10 },
		{ x: 10, p: 2 },
		{ x: 11, p: 3 },
		{ x: 12, p: 4 },
		{ x: 0, p: 11 }
	];
	let card = map[random(0, 8)];
	return { x: card.x, y: y, points: card.p };
}

let uscore = 0;
let cscore = 0;

let turn = 0;

let name = prompt("Your name?", "User");
if (name == "") { name = "User"; }
$("#name")[0].innerHTML = name;

function reset()
{
	setCard(2, 4, 1);
	setCard(2, 4, 2);
	$("#turn")[0].innerHTML = "";
	$("#generate")[0].innerHTML = "Generate";
	uscore = 0;
	cscore = 0;
	$("#number1")[0].innerHTML = 0;
	$("#number2")[0].innerHTML = 0;
	turn = 0;
	$("#result")[0].innerHTML = "";
}

reset();

$("#generate")[0].onclick = () => 
{
	if(turn == 3)
	{
		reset();
		return;
	}
	
	turn++;
	$("#turn")[0].innerHTML = `Turn ${turn} of 3`;
	
	let ucard = randomCard();
	let ccard = randomCard();
	
	setCard(ucard.x, ucard.y, 1);
	setCard(ccard.x, ccard.y, 2);
	
	let unum = ucard.points;
	let cnum = ccard.points;
	
	uscore += unum;
	cscore += cnum;
	
	$("#number1")[0].innerHTML = uscore;
	$("#number2")[0].innerHTML = cscore;
	
	if(turn == 3)
	{
		$("#generate")[0].innerHTML = "Reset";
		let result = "";
		if(uscore > cscore)
		{
			result = "User won!";
		}
		else if(uscore < cscore)
		{
			result = "Computer won!";
		}
		else
		{
			result = "Draw!";
		}
		
		$("#result")[0].innerHTML = result;
	}
};