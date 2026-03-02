function displayQuiz() {
    const questions = [
        {
            question: "You’re just starting on maple and you need to decide on a class to main! Do you...",
            choices: ["pick something that looks cool!", "look at a tier list on youtube", "ask your friends who already play for suggestions"],
            weights: [
                {judgingScore: 0, perceivingScore: +2 },
                {judgingScore: +2, perceivingScore: 0 },
                {judgingScore: 0, perceivingScore: +1 },
            ]
        },
        {
            question: "Your fren wants to bring someone you barely know into your ckalos party.. What will you say?",
            choices: ["sure new friend!", "no.. my meso/drops", "idk will they grief"],
            weights: [
                {introvertScore: 0, extrovertScore: +2 }, 
                {introvertScore: +2, extrovertScore: 0 }, 
                {introvertScore: +1, extrovertScore: 0 }, 
            ]
        },
        {
            question: "Its ssf and you hit a 21 eternal in 10b! Do you tap to 22 or focus on your other equips?",
            choices: ["i’m feeling lucky today", "this is a big dmg increase already and i have gains to make elsewhere"],
            weights: [
                {thinkingScore: 0, feelingScore: +2 },
                {thinkingScore: +2, feelingScore: 0 },
            ]
        },
        {
            question: "Someone in your guild’s discord is flexing their gene badge that they just got after several months of running bm. What do you react with?",
            choices: [":pog:", ":its always the same ppl hitting when will it be my turn:"],
            weights: [
                {thinkingScore: +2, feelingScore: 0 },
                {thinkingScore: 0, feelingScore: +2 },
            ]
        },
        {
            question: "You had a busy day today and only have 10 minutes to play before reset. Do you...",
            choices: ["do symbol dailies - slow and steady wins the race", "do daily bosses - maybe something will drop!", "do mp - exp is valuable"],
            weights: [
                {judgingScore: +2, perceivingScore: 0 },
                {judgingScore: 0, perceivingScore: +2 },
                {judgingScore: +1, perceivingScore: 0 },
            ]
        },
        {
            question:"You’ve just charged 100k nx to your account. What do you spend it on?",
            choices: ["open some premium surprise boxes for the next best thing", "buy your vac pet subscription (or do wonderberries)", "get a new look with royal face/hairs", "i wouldn't charge 100k nx"],
            weights: [
                {sensingScore: +2, intuitionScore: 0 },
                {sensingScore: 0, intuitionScore: +2 },
                {sensingScore: +2, intuitionScore: 0 },
                {sensingScore: 0, intuitionScore: +2 },
            ]
        },
        {
            question:"Maple is under maintenance again. What do you do in the meantime?",
            choices: ["scroll the subreddit", "play other games", "get off your pc and touch grass"],
            weights: [
                {sensingScore: +2, intuitionScore: 0 },
                {sensingScore: 0, intuitionScore: +2 },
                {sensingScore: 0, intuitionScore: +2 },
            ]
        },
        {
            question:"Where would you rather afk?",
            choices: ["c1 henesys", "a quiet, scenic hidden map", "endgame town for quick access to shops", "your guild’s hq"],
            weights: [
                {introvertScore: 0, extrovertScore: +3 },
                {introvertScore: +3, extrovertScore: 0 },
                {introvertScore: +2, extrovertScore: 0 },
                {introvertScore: 0, extrovertScore: +2 },
            ]
        },
        {
            question:"your class just lost -20% fd in the most recent balance patch.. will you",
            choices: ["switch to a stronger class that just got 30% fd", "stick with your class and pray to chang soup it gets buffed"],
            weights: [
                {thinkingScore: 0, feelingScore: +2 },
                {thinkingScore: +2, feelingScore: 0 },
            ]
        },
        {
            question:"your mule gets a pitch drop. you think..",
            choices: ["yay a pitch", "my main could've used this"],
            weights: [
                {judgingScore: 0, perceivingScore: +2 },
                {judgingScore: +2, perceivingScore: 0 },
            ]
        },
        {
            question:"You are starting new and your friend tells you they can carry you through bosses! Do you accept or refuse?",
            choices: ["Free carries!", "Just for the hard stuff", "I want to experience everything on my own."],
            weights: [
                {introvertScore: 0, extrovertScore: +1 },
                {introvertScore: 0, extrovertScore: +1 },
                {introvertScore: +1, extrovertScore: 0 },
            ]
        },
        {
            question:"You start cubing and hit a fake 3 line with 2 allstats on your freshly made 22 eternals with 2b left in the bank! Do you:",
            choices: ["My eternals deserve better!! continue bluecubing", "purple cube the rest", "No meso broke….. settle"],
            weights: [
                {sensingScore: +1, intuitionScore: 0 },
                {sensingScore: 0, intuitionScore: +1 },
                {sensingScore: 0, intuitionScore: +2 },
            ]
        },
        {
            question: "Processing your class...",
            choices: ["View my class!"],
            weights: [
                {extrovertScore: 0, introvertScore: 0 }, // placeholder
            ]
        },
    ]


    //Variables for scores 
    let currentQuestionIndex = 0;
    let introvertScore = 0;
    let extrovertScore = 0;
    let judgingScore = 0;
    let perceivingScore = 0;
    let sensingScore = 0;
    let intuitionScore = 0;
    let thinkingScore = 0;
    let feelingScore = 0;


    function displayQuestionImage(questionIndex) {
        const imageURLs = [
            "Q1.png",
            "Q2.png",
            "Q3.png",
            "Q4.png",
            "Q5.png",
            "Q6.png",
            "Q7.png",
            "Q8.png",
            "Q9.png",
            "Q10.png",
            "Q11.png",
            "Q12.png",
            "processing.GIF",
        ];
        const questionImageElement = document.getElementById('question-image');
        questionImageElement.src = imageURLs[questionIndex];
    }

    document.getElementById('begin-quiz').addEventListener('click', function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'block';
    });

    //Function to display the current question and choices
    function displayCurrentQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        const questionElement = document.getElementById('question');
        const progressImageElement = document.getElementById('question-progress-image');
        const choiceContainers = document.getElementById('choices');
        
        choiceContainers.innerHTML = '';
        
        questionElement.textContent = currentQuestion.question;
        progressImageElement.src = getQuestionProgressImage(currentQuestionIndex);
        
        displayQuestionImage(currentQuestionIndex);

        currentQuestion.choices.forEach((choice, index) => {
                //Buttons for choices
            const button = document.createElement('button');
            button.textContent = choice;
            button.classList.add('choices');
            button.addEventListener('click', () => handleChoiceClick(index));
            choiceContainers.appendChild(button);
        });
        }

    //Function to get progress bar image URL for the current question 
    function getQuestionProgressImage(questionIndex) {
        const progressImageURLs = [
            "Q1 progress.svg",
            "Q2 progress.svg",
            "Q3 progress.svg",
            "Q4 progress.svg",
            "Q5 progress.svg",
            "Q6 progress.svg",
            "Q7 progress.svg",
            "Q8 progress.svg",
            "Q9 progress.svg",
            "Q10 progress.svg",
            "Q11 progress.svg",
            "Q12 progress.svg",
        ];
        return progressImageURLs[questionIndex] || "";
    }

    //Function to handle choice click
    function handleChoiceClick(choiceIndex) {
        // Update scores based on user response
        const currentQuestion = questions[currentQuestionIndex];
        const selectedChoiceWeight = currentQuestion.weights[choiceIndex];
        console.log("Selected choice weight:", selectedChoiceWeight);

                //Update scores based on weight of selected choice
                if (selectedChoiceWeight.hasOwnProperty('introvertScore')) {
                    introvertScore += selectedChoiceWeight.introvertScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('extrovertScore')) {
                    extrovertScore += selectedChoiceWeight.extrovertScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('judgingScore')) {
                    judgingScore += selectedChoiceWeight.judgingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('perceivingScore')) {
                    perceivingScore += selectedChoiceWeight.perceivingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('sensingScore')) {
                    sensingScore += selectedChoiceWeight.sensingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('intuitionScore')) {
                    intuitionScore += selectedChoiceWeight.intuitionScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('thinkingScore')) {
                    thinkingScore += selectedChoiceWeight.thinkingScore;
                }
                if (selectedChoiceWeight.hasOwnProperty('feelingScore')) {
                    feelingScore += selectedChoiceWeight.feelingScore;
                }

            //Move to the next question
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                displayCurrentQuestion();
            } else {
                calculateMBTITypeAndDisplayImage();
            }
        }
        

    //Function to calculate MBTI type based on scores and display image
    function calculateMBTITypeAndDisplayImage() {
        //Calculate introvert/extrovert dimension
        const introextro = introvertScore > extrovertScore ? "I" :"E";
        //Calculate sensing/intuition dimension
        const sensint = sensingScore > intuitionScore ? "S" : "N";
        //Calculate thinking/feeling dimension
        const thinkfeel = thinkingScore > feelingScore ? "T" : "F";
        //Calculate judging/perceiving dimension
        const judgeper = judgingScore > perceivingScore ? "J" : "P";
        //Produce MBTI type string
        const mbtiTypeString = introextro + sensint + thinkfeel + judgeper;

        console.log("MBTI Type:", mbtiTypeString);

        document.getElementById('results').style.display = 'none';
        
        //Remove quiz-related elements from the DOM
        const questionElement = document.getElementById('question');
        const choiceContainers = document.getElementById('choices');
        const quizContainer = document.getElementById('quiz');
        const thumbnailImage = document.querySelector('img[src="Thumbnail.gif"]');
        questionElement.remove();
        choiceContainers.remove();
        quizContainer.remove();
        thumbnailImage.remove();

        displayImage(mbtiTypeString);

        document.getElementById('results').style.display = 'block'
    }
    
    //Function to calculate MBTI type and return image URL 
        function getMBTIImageUrl(mbtiTypeString) {
            const MBTIImageUrls = {
                "ENTJ": "Lemon.png",
                "INTJ": "Pomegranate.png", 
                "ENTP": "Dragon Fruit.png",
                "INTP": "Grape.png",
                "ENFJ": "Peach.png",
                "INFJ": "Fig.png",
                "ENFP": "Watermelon.png",
                "INFP": "Cherry.png",
                "ESFJ": "Orange.png",
                "ISFJ": "Apple.png",
                "ESTJ": "Banana.png",
                "ISTJ": "Pear.png",
                "ESTP": "Pineapple.png",
                "ISTP": "Coconut.png",
                "ESFP": "Mango.png",
                "ISFP": "Strawberry.png",
            };
            return MBTIImageUrls[mbtiTypeString] || ""
        }

        //Display image
        function displayImage(mbtiTypeString) {
            const imageURL = getMBTIImageUrl(mbtiTypeString);
            const mbtiImageContainer = document.getElementById('mbti-image');
            const imageElement = document.createElement('img');
            imageElement.src = imageURL;

            mbtiImageContainer.appendChild(imageElement);
    
    }
        //Display the first question when the quiz starts
        displayCurrentQuestion();
        document.addEventListener('DOMContentLoaded', () => {
        const choiceContainers = document.querySelectorAll('.choice-container');
        choiceContainers.forEach((container) => {
            const choices = container.querySelectorAll('button');
            choices.forEach((choice, choiceIndex) => {
                choice.addEventListener('click', () => {
                    handleChoiceClick(choiceIndex);
                });
            });
        });
    });
}

//Call function to start the quiz
displayQuiz();

// Share quiz button click event handler
document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.share-button');

    shareButton.addEventListener('click', function() {
        const url = window.location.href;

        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Quiz URL copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy URL: ', err);
            });
    });
});

// Select the button element
const backToHomeButton = document.getElementById('back-to-home');

// Add event listener for the button click
document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('back-to-home');

    backButton.addEventListener('click', function() {
        // Redirect to the home page or perform any other action you want
        window.location.href = 'https://alkaruarts.github.io/maplestory-personality-test/';
    });
});

// Function to navigate back to the home page
function navigateToHomePage() {
    // Reset quiz state if needed
    resetQuiz(); // Assuming you have a resetQuiz() function defined

    // Hide quiz page and show the home page
    document.getElementById('home').style.display = 'block';
    document.getElementById('quiz-page').style.display = 'none';
}






