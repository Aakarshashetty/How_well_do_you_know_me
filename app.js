console.log("HOW MUCH DO YOU KNOW ABOUT AAKARSHA!");
const chalk = require('chalk');
//console.log(chalk.blue('Hello world!'));
var readlineSync = require("readline-sync");
var userName = readlineSync.question("Enter your name: ");
console.log(chalk.bold("WELCOME "+userName.toUpperCase()+"!"));
var score = 0;
function quiz(question,answer){
	var userAnswer = readlineSync.question(question);
	if(userAnswer.split(" ").join("").toLowerCase() === answer.split(" ").join("").toLowerCase()){
		console.log(chalk.green.dim("Yes you are Right!"));
		score++;
		console.log("Your current score: "+score);
		console.log("-----------------------------");
	}
	else{
		console.log(chalk.red.bold("Ops Wrong answer!"));
		console.log("Your current score: "+score);
		console.log("-----------------------------");
	}
}
var questions = [
	{
		question : "Where do aakarsha live? ",
		answer : "siddipet"
	},
	{
		question : "What is aakarsha's favourite chocolate? ",
		answer : "Dairy milk"
	},
	{
		question : "Who is aakarsha's favourite Indian singer? ",
		answer : "Darshan"
	},
	{
		question : "Who is aakarsha'a favourite International singer? ",
		answer : "Jungkook"
	},
	{
	question : "What is aakarsha's favourite hobby? ",
	answer : "Singing"
	}
]
for(var i=0;i<questions.length;i++){
	var currQuestion = questions[i];
	quiz(currQuestion.question,currQuestion.answer);
}
console.log("Your score is: ",score);
var highestScore = 
	{
		name : "Munny",
		score : "5"
	}

if(score>=highestScore.score){
	highestScore.score = score;
	console.log(chalk.magenta.bold("Yayy you got Highest Score, Send your screenshot!"))
}
else{
	console.log(chalk.dim.bold("You didn't got all correct!"));
console.log("Highest score-"+highestScore.name+" with score: "+highestScore.score);
}