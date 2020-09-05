//-------button variables-------

//displays
const main_display = document.getElementsByClassName("main-display");
const history_display = document.getElementsByClassName("history-display");

//value buttons
const button7 = document.getElementById("7-button");
button7.onclick = function() {ValueButtonPressed('7')};

const button8 = document.getElementById("8-button");
button8.onclick = function() {ValueButtonPressed('8')};

const button9 = document.getElementById("9-button");
button9.onclick = function() {ValueButtonPressed('9')};

const button4 = document.getElementById("4-button");
button4.onclick = function() {ValueButtonPressed('4')};

const button5 = document.getElementById("5-button");
button5.onclick = function() {ValueButtonPressed('5')};

const button6 = document.getElementById("6-button");
button6.onclick = function() {ValueButtonPressed('6')};

const button1 = document.getElementById("1-button");
button1.onclick = function() {ValueButtonPressed('1')};

const button2 = document.getElementById("2-button");
button2.onclick = function() {ValueButtonPressed('2')};

const button3 = document.getElementById("3-button");
button3.onclick = function() {ValueButtonPressed('3')};

const button0 = document.getElementById("0-button");
button0.onclick = function() {ValueButtonPressed('0')};

const decimalbutton = document.getElementById("decimal-button");
decimalbutton.onclick = function() {DecimalButtonPressed()};

//calculator buttons
const acbutton = document.getElementById("ac-button");
acbutton.onclick = function() {ACButtonPressed()};

const delbutton = document.getElementById("del-button");
delbutton.onclick = function() {DELButtonPressed()};

const equalbutton = document.getElementById("equal-button");
equalbutton.onclick = function() {EqualButtonPressed()};

//operator buttons
const dividebutton = document.getElementById("divide-button");
dividebutton.onclick = function() {OperatorButtonPressed('/')};

const multiplybutton = document.getElementById("multiply-button");
multiplybutton.onclick = function() {OperatorButtonPressed('x')};

const minusbutton = document.getElementById("minus-button");
minusbutton.onclick = function() {OperatorButtonPressed('-')};

const plusbutton = document.getElementById("plus-button");
plusbutton.onclick = function() {OperatorButtonPressed('+')};


//-------Bools-------
var afterEqual = false;
var decimalAllow = true;


//-------button fuctions-------

//valuebuttons
function ValueButtonPressed(str)
{
	if(MainDisplayToLong() ==  true)
	{
		alert("Too Many Characters!");
	}
	else
	{
		if(afterEqual)
		{
			main_display[0].textContent = str;
			afterEqual=false;
		}
		else
		{
			var a = main_display[0].textContent + str;
			main_display[0].textContent = a;
		}
	}
}

function DecimalButtonPressed()
{
	if(MainDisplayToLong)
	{
		if(main_display[0].textContent.slice(-1)!="." && decimalAllow)
		{
			main_display[0].textContent= main_display[0].textContent + '.';
			decimalAllow=false;
			console.log('aa');
		}

		else
		{
			console.log('decimal false');
		}
	}
}

//operator buttons
function OperatorButtonPressed(op)
{
	if(!MainDisplayToLong())
	{
		if(!"+-*/".includes(main_display[0].textContent.slice(-1)))
		{
			decimalAllow=true;
			console.log('decimal true');
			switch(op)
			{
				case 'x':
					main_display[0].textContent= main_display[0].textContent + '*';
					break;
				case '/':
					main_display[0].textContent= main_display[0].textContent + '/';
					break;
				case '+':
					main_display[0].textContent= main_display[0].textContent + '+';
					break;
				case '-':
					main_display[0].textContent= main_display[0].textContent + '-';
					break;
			}
		}
	}
	
}

//calculator buttons
function ACButtonPressed()
{
	console.log('decimal true');
	decimalAllow=true;
	main_display[0].textContent=' ';
	history_display[0].textContent=' ';
}

function DELButtonPressed()
{
	main_display[0].textContent =  main_display[0].textContent.slice(0,-1);
}

function EqualButtonPressed()
{
	decimalAllow=true;
	console.log('decimal true');
	afterEqual=true;
	console.log('=');
	history_display[0].textContent =  main_display[0].textContent;

	//making sure answer is not too long
	var ans = eval(main_display[0].textContent).toString();
	if(ans.length >10)
	{
		var num = Number(ans);
		ans = num.toPrecision(10).toString();
		console.log(ans.length);
	}

	main_display[0].textContent = ans;
}

function MainDisplayToLong()
{
	var bool = false;
	console.log(main_display[0].textContent.replace(/\s/g, '').length);
	if(main_display[0].textContent.replace(/\s/g, '').length>10)
	{
		bool = true;
	}
	return bool;
}

