'use strict';

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const message = `${this.question}\n ${this.options.join('\n')}`;
        const answer = Number(prompt(message));
        console.log(answer);
    }
}

poll.registerNewAnswer();