'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["1: JavaScript", "2: Python", "3: Rust", "4: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const message = `${this.question}\n ${this.options.join('\n')}\n(Write option number)`;
        const answer = Number(prompt(message)) - 1;
        if (answer >= 0 && answer < 4) {
            this.answers[answer]++;
        }
        else {
            alert('Resposta inválida');
        }
        displayResults.call(poll);
        displayResults.call(poll, 'string');
    }
}

function displayResults(type = 'array') {
    if (type === 'array') {
        console.log(this.answers);
    }
    else if (type === 'string'){
        console.log(`Poll results are ${this.answers.join(', ')}`);
    }
}
const teste = [1,2,3];

displayResults.call(poll);

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));