
class Question{
    constructor(text,choices,answer){
        this.text=text;
        this.choices=choices;
        this.answer=answer;
    }
    checkAnswer(answer){
        return this.answer===answer
    }
}

class Quiz{
    constructor(questions,score,questionIndex){
        this.questions=questions;
        this.score=0;
        this.questionIndex=0;
    }
    getQuestion(){
        return this.questions[this.questionIndex]
    }
    isFinish(){
        return this.questions.length===this.questionIndex

    }
    quess(answer){
        var question=this.getQuestion();

        if(question.checkAnswer(answer)){
            this.score++;
            
        }
        this.questionIndex++

    }

}


var q1 = new Question("what's the best programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");

var q2 = new Question("what's the most popular programming language ?",["C#","visual basic","nodejs","javascript"],"javascript");

var q3 = new Question("what's the best modern programming language ?",["C#","javascript","pyhton","asp.net"],"javascript");



var questions = [q1,q2,q3];

//start quiz

var quiz =new Quiz(questions)

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore()
    }else{
        var question = quiz.getQuestion();
        var choices= question.choices
        document.querySelector('#question').textContent=question.text
        for(var i=0;i<choices.length; i++){
           var element= document.querySelector('#choice'+i)

           element.innerHTML=choices[i]

        quess('btn'+i,choices[i])

        }
        showProgress();
    }
}

function quess(id,guess){
    var btn =document.getElementById(id)
    btn.onclick=function(){
        quiz.quess(guess);
        loadQuestion();
    }

}

function showScore(){
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML = html;
}

function showProgress(){
    var totalQuestion =quiz.questions.length
    var questionNumber =quiz.questionIndex+1 
    document.querySelector('#progress').innerHTML='Question' + questionNumber + 'of' + totalQuestion
}