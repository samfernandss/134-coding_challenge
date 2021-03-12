'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["1: JavaScript", "2: Python", "3: Rust", "4: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const message = `${this.question}\n ${this.options.join('\n')}`;
        const answer = Number(prompt(message))-1;
        console.log(answer);
        if (answer >= 0 && answer < 4){
            this.answers[answer]++;
            console.log(this.answers);
        }
        else {
            alert('Resposta inválida');
        }
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer);
console.log(poll.registerNewAnswer());