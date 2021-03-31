'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["1: JavaScript", "2: Python", "3: Rust", "4: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const message = `${this.question}\n ${this.options.join('\n')}`;
        const answer = Number(prompt(message)) - 1;
        if (answer >= 0 && answer < 4) {
            this.answers[answer]++;
            console.log(this.answers);
        }
        else {
            alert('Resposta inválida');
        }
        displayResults.call(poll, this.answers);
    }
}

function displayResults(type) {
    console.log(typeof(type));
    if (type === 'array') {
        console.log(poll.answers);
    }
    else if (typeof (type) === Number){
        console.log(`Poll results are ${poll.answers}`);
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));