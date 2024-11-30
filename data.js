const questions = [
    {     
        id: '001',
        image: 'virat kohli.jpg',
        option1:'rohit sharma',
        option2:'virat kohli',
        option3:'suryakumar yadav',
        option4:'jasprit bumrah',
        ans:'2',
        
    },
    {    
        id: '002',
        image: 'Suryakumar yadav.jpg',
        option1:'ravindra jadeja',
        option2:'virat kohli',
        option3:'suryakumar yadav',
        option4:'mohammed shami',
        ans:'3',
        
    },    {    
        id: '003',
        image: 'rohit sharma.jpg',
        option1:'rohit sharma',
        option2:'ishan kishan',
        option3:'tilak varma',
        option4:'cheteswar pujara',
        ans:'1',
        
    },    {    
        id: '004',
        image: 'Mohammed Shami.jpg',
        option1:'rohit sharma',
        option2:'virat kohli',
        option3:'suryakumar yadav',
        option4:'Mohammed Shami',
        ans:'4',
        
    },    {    
        id: '005',
        image: 'm s dhoni.jpg',
        option1:'tilak varma',
        option2:'m s dhoni',
        option3:'sanju samson',
        option4:'Mohammed Shami',
        ans:'2',
        
    },    {    
        id: '006',
        image: 'Kuldeep yadav.jpg',
        option1:'jitesh sharma',
        option2:'hardik pandya',
        option3:'Kuldeep yadav',
        option4:'axar patel',
        ans:'3',
        
    },    {    
        id: '007',
        image: 'King & Hitman.jpg',
        option1:'rohit sharma',
        option2:'virat kohli',
        option3:'suryakumar yadav',
        option4:'both a and b',
        ans:'4',
        
    },    {    
        id: '008',
        image: 'jaspreet bumrah.jpg',
        option1:'sachin tendulkar',
        option2:'k l rahul',
        option3:'ravi ashwin',
        option4:'jasprit bumrah',
        ans:'4',
        
    },    {    
        id: '009',
        image: 'hardik pandya.jpg',
        option1:'hardik pandya',
        option2:'shikhar dhawan',
        option3:'shubhman gill',
        option4:'jasprit bumrah',
        ans:'1',
        
    },    {    
        id: '0010',
        image: 'arshdeep singh.jpg',
        option1:'ruturaj gaikwad',
        option2:'dipak chahar',
        option3:'arshdeep singh',
        option4:'jasprit bumrah',
        ans:'3',
        
    },    

]
let currentquestion=0;
let score=0;
let questionsData=document.querySelector(".questionsData");

function loadQuestion(){
    let question=questions[currentquestion];
    questionsData.innerHTML=` <div class="questionsData">
        <div id="image">
        <img src="${question.image}" alt="">
        </div>
        <div class="options">
            <button class="option" onclick="checkAnswere(1);">${question.option1}</button>
            <button class="option" onclick="checkAnswere(2);">${question.option2}</button>
            <button class="option" onclick="checkAnswere(3);">${question.option3}</button>
            <button class="option" onclick="checkAnswere(4);">${question.option4}</button>
            <div class="result">
             <h4>result<h4>

            </div>

        </div>
    </div>`
}
function checkAnswere(selected){
    let result=document.querySelector(".result");
    let question=questions[currentquestion];
    let updateScore=document.querySelector('#score');
    if(selected == `${question.ans}`){
        score++;

        result.innerHTML=`<h4>RIGHT</h4>`
        result.style.backgroundColor='#28a745';
        updateScore.innerHTML=score;


    }
    else{
        result.innerHTML=`<h4>WRONG</h4>`
        result.style.backgroundColor='#dc4535';
    }
}

function nextQuestion(){
    currentquestion++;

    if(currentquestion  < questions.length){
        loadQuestion();

    }else{
        questionsData.innerHTML=`<h1>Game Over</h1>
        <h1>your final score is<h1> `

    }
}

loadQuestion();

