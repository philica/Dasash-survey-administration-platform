// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxiAUqD12QssjVB8LAAdtDBgINDtDSwZk",
  authDomain: "dasash-ee343.firebaseapp.com",
  projectId: "dasash-ee343",
  storageBucket: "dasash-ee343.appspot.com",
  messagingSenderId: "177392192719",
  appId: "1:177392192719:web:441ccb9ebaa0799625bbba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getDatabase, ref, set, get, child, update, remove }
  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const surveyJson = {
  title: "American History",
  showProgressBar: "bottom",
  showTimerPanel: "top",
  maxTimeToFinishPage: 10,
  maxTimeToFinish: 25,
  firstPageIsStarted: true,
  startSurveyText: "Start Quiz",
  pages: [{
    elements: [{
      type: "html",
      html: "You are about to start a quiz on American history. <br>You will have 10 seconds for every question and 25 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
    }, {
      type: "text",
      name: "username",
      titleLocation: "hidden",
      isRequired: true
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "civilwar",
      title: "When was the American Civil War?",
      choices: [
        "1796-1803", "1810-1814", "1861-1865", "1939-1945"
      ],
      correctAnswer: "1861-1865"
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "libertyordeath",
      title: "Whose quote is this: \"Give me liberty, or give me death\"?",
      choicesOrder: "random",
      choices: [
        "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
      ],
      correctAnswer: "Patrick Henry"
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "magnacarta",
      title: "What is Magna Carta?",
      choicesOrder: "random",
      choices: [
        "The foundation of the British parliamentary system",
        "The Great Seal of the monarchs of England",
        "The French Declaration of the Rights of Man",
        "The charter signed by the Pilgrims on the Mayflower"
      ],
      correctAnswer: "The foundation of the British parliamentary system"
    }]
  }],
  completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
  completedHtmlOnCondition: [{
    expression: "{correctAnswers} == 0",
    html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
  }, {
    expression: "{correctAnswers} == {questionCount}",
    html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
  }]
};

const survey = localStorage.getItem("LocalStorageSurvey")

const db = getDatabase();

let publishBtn = document.getElementById("publish")

function InsertData() {
    alert("survey")
//   set(ref(db, "Survey/test"), survey)
//     .then(() => {
//       alert("data stored succesfully")
//     })
//     .catch((error) => {
//       alert("unsuccesfull storing : " + error)
//     })
    localStorage.clear();
}
publishBtn.addEventListener('click',InsertData)