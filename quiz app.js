const question = [
    {
        'question': 'Which is the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'php',
        'correct': 'a'
    },
    {
        'question': 'What year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of above',
        'correct': 'b'
    },
    {
        'question': 'What does css stands for?',
        'a': 'Hypertext Markup language',
        'b': 'Casecading style sheet',
        'c': 'Json object Natation',
        'd': 'Casecading sheet style',
        'correct': 'b'
    },
    {
        'question': 'What does css stands for?',
        'a': 'Hypertext Markup language',
        'b': 'Casecading style sheet',
        'c': 'Json object Natation',
        'd': 'Casecading sheet style',
        'correct': 'b'
    },
    {
        'question': 'What does css stands for?',
        'a': 'Hypertext Markup language',
        'b': 'Casecading style sheet',
        'c': 'Json object Natation',
        'd': 'Casecading sheet style',
        'correct': 'b'
    }
]

let index = 0;
let total = question.length
let right = 0,
    wrong = 0;
const quebox = document.getElementById("quebox")
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () => {
    if(index === total) {
        return endQuiz()
    }
    reset()
    const data = question[index]
    quebox.innerText = `${index + 1}- ${data.question}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center">
    <h1>Thank you for playing the quiz</h1>
    <h2> ${right} / ${total} are correct </h2>
    <img src="https://i.gifer.com/origin/16/162b41786d99b9d7e7b03549c4e19ae2_w200.gif">
    <h2>Congratulations!</h2>
    </div>
    `
}

loadQuestion();

