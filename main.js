let posMessage = {
    I: {
       posIOne: 'believe in you.', 
    },
    You: {
        posYouOne: 'can do it.',
        posYouTwo: 'will keep working until you fulfil your dreams.',
    },
    Always: {
        posAlwaysOne: 'keep going.',
        posAlwaysTwo: 'believe in yourself'
    }
};

let negMessage = {
    I: {
        negIOne: 'will not quit'
    },
    You: {
        negITwo: 'will not stop chasing your dreams.',
    },
    They: {
        negTheyOne: 'will never believe in you, until you make them believe.'
    },
    Never: {
        negNeverOne: 'stop dreaming.',
        negNeverTwo: 'let someone else stop you from dreaming.'
    }
};

let decidedSentence = ''
let sentenceBeginning = '';
let sentenceRest = ' ';

//This function randomly decides whether the sentence should be negative or positive 
const decideWhichSentence = () => {
    let randomNumberSentence = Math.random();
    if(randomNumberSentence < 0.5) {
        decidedSentence = posMessage;
        //return decidedSentence
    } else if (randomNumberSentence > 0.5) {
        decidedSentence = negMessage;
        //return decidedSentence
    }
};

//This function randomly chooses a beginning of the sentence (keys of the belonging object)
const decideSentenceBeginning = () => {
    let allBeginnings = Object.keys(decidedSentence);
    let randomNumberBeginning = Math.floor(Math.random()*allBeginnings.length); //chooses beginning by generating a random number between 0-amount of keys
    sentenceBeginning = allBeginnings[randomNumberBeginning];
    //return sentenceBeginning;
};

//This function randomly generates the rest of the sentence based on its kind (pos or neg)
const decideSentenceRest = () => {
    let allRests = Object.values(decidedSentence[sentenceBeginning])
    let randomNumberRest = Math.floor(Math.random()*allRests.length);
    sentenceRest = allRests[randomNumberRest];
    //return sentenceRest;
};

//This function puts all the components together and creates the final sentence
const createMessage = () => {
    decideWhichSentence();
    decideSentenceBeginning();
    decideSentenceRest();
    console.log(sentenceBeginning + ' ' + sentenceRest);
};

//Finally, to create and print the message:
createMessage();

