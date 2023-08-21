const div = document.getElementById("container");
const pQuestion = document.getElementById("question");
const divQues = document.getElementById("ques");
const numDiv = document.getElementById("q-num");

const questions = [
  {
    id: 0,
    question:
      "Which of the following elements is not a liquid around room temperature?",
    answers: [
      { text: "a. Magnesium", isCorrect: true },
      { text: "b. Bromine", isCorrect: false },
      { text: "c. Mercury", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "Which of the followings does not contain potassium?",
    answers: [
      { text: "a. Soap", isCorrect: false },
      { text: "b. Bread", isCorrect: true },
      { text: "c. Gunpowder", isCorrect: false },
    ],
  },
  {
    id: 2,
    question:
      "What do we call the process in which an atom’s nucleus splits into smaller elements?",
    answers: [
      { text: "a. Nuclear fusion", isCorrect: false },
      { text: "b. Nuclear fission", isCorrect: true },
      { text: "c. Nuclear reaction", isCorrect: false },
    ],
  },
  {
    id: 3,
    question:
      "If we fill a glass with ice cubes and water. What will occur when the ice melts?",
    answers: [
      { text: "a. The water level increases slightly", isCorrect: false },
      { text: "b. The water level decreases slightly", isCorrect: true },
      { text: "c. The water level remains the same", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Based on the pH level, how can we describe milk?",
    answers: [
      { text: "a. Neutral", isCorrect: false },
      { text: "b. Slightly acidic", isCorrect: true },
      { text: "c. Slightly basic", isCorrect: false },
    ],
  },
  {
    id: 5,
    question:
      "Noble gases are basically inert with complete outer electron shells. Which of the following elements is not a noble gas?",
    answers: [
      { text: "a. Chlorine", isCorrect: true },
      { text: "b. Helium", isCorrect: false },
      { text: "c. Argon", isCorrect: false },
    ],
  },
  {
    id: 6,
    question:
      "Which scientist is credited with the invention of the periodic table?",
    answers: [
      { text: "a. Nobel", isCorrect: false },
      { text: "b. Lavoisier", isCorrect: false },
      { text: "c. Mendeleev", isCorrect: true },
    ],
  },
  {
    id: 7,
    question: "Which gas accounts for the largest part of the air?",
    answers: [
      { text: "a. Hydrogen", isCorrect: false },
      { text: "b. Oxygen", isCorrect: false },
      { text: "c. Nitrogen", isCorrect: true },
    ],
  },
  {
    id: 8,
    question:
      "Which elements are present in all organic molecules, which make up living organisms?",
    answers: [
      { text: "a. Hydrogen and carbon", isCorrect: true },
      { text: "b. Nitrogen and carbon", isCorrect: false },
      { text: "c. Oxygen and carbon", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "What are the basic features of liquids?",
    answers: [
      { text: "a. A defined volume and a defined shape", isCorrect: false },
      { text: "b. No defined shape and no defined volume", isCorrect: false },
      { text: "c. No defined shape and a defined volume", isCorrect: true },
    ],
  },
];

let i = 0;
let num = 1;

const showQuestions = (question = questions[i], number = num) => {
  const prasanje = question.question;

  const p = document.createElement("h3");
  p.innerHTML = num + "." + prasanje;
  div.appendChild(p);

  const numQ = document.createElement("div");
  numQ.classList.add("number");
  numQ.innerHTML = `${number}/${questions.length}`;
  numDiv.appendChild(numQ);

  question.answers.forEach((element) => {
    const answer = element.text;
    const tocno = element.isCorrect;
    console.log(answer);

    const divOpt = document.createElement("div");
    divOpt.classList.add("option");

    divOpt.innerHTML = answer;

    divOpt.onclick = (event) => {
      const odgovori = document.querySelectorAll(".option");
      odgovori.forEach((element) => {
        element.classList.remove("correct");
        element.classList.remove("incorrect");
      });
      const element = event.target;
      const btnNext = document.createElement("button");
      btnNext.setAttribute("id", "btnNext");
      btnNext.classList.add("btnNext");
      btnNext.innerHTML = `Next`;

      const start = document.createElement("button");
      start.setAttribute("id", "btnStart");
      start.classList.add("btnNext");
      start.innerHTML = `Start again`;

      if (tocno) {
        element.classList.add("correct");

        if (i < questions.length - 1) {
          div.appendChild(btnNext);
          btnNext.onclick = () => {
            console.log("sara");
            i++;
            num++;
            console.log(num);
            console.log(i, questions.length);

            console.log(i, questions.length);
            div.innerHTML = ``;
            numDiv.innerHTML = ``;
            showQuestions(questions[i], num);
          };
        }

        if (i === questions.length - 1) {
          div.appendChild(start);
          start.onclick = () => {
            i = 0;
            num = 1;
            div.innerHTML = ``;
            numDiv.innerHTML = ``;
            showQuestions(questions[0], 1);
          };
        }
      } else {
        const blabla = document.getElementById("btnNext");
        if (blabla) div.removeChild(blabla);
        element.classList.add("incorrect");
      }
    };

    div.appendChild(divOpt);
  });
};

showQuestions();
