const prompt = require("prompt-sync")({ sigint: true });

let questionsList =[
    {
      id : 1,
      question:"2 x 15 = ?  ",
      answer :2,
      options:["1. 25","2. 30", "3. 20","4. 40"]
    },
    {
        id : 2,
        question:"Who is the CEO of PIAIC?  ",
        answer :3,
        options:["1. Pred. Arif Alvi","2. Prime Minister", "3. Zia Khan","4. Imran Khan"]
    },
    {
        id : 3,
        question:"Typescript is the superset of JavaScript?  ",
        answer :1,
        options:["1. True","2. false"]
    },
    {
        id : 4,
        question:"100 - 73= ?  ",
        answer :3,
        options:["1. 25","2. 30", "3. 27","4. 40"]

      },
      {
        id : 5,
        question:"Pakistan Largest city?  ",
        answer :1,
        options:["1. Karachi","2. Islamabad", "3. Lahore","4. Peshawar"]
      }
];

let score=0;
for(let i=0;i<5;i++){
    console.log( questionsList[i].question);
   for(const item of questionsList[i].options){
    console.log(item);
   }
   let option = prompt("Plz choose above option:  ");
    score = (questionsList[i].answer == option)? score+10:score;
   
}

console.log(`Your total score is: ${score}`);