'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0].
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}, \n(Write option number)`
      )
    );
    // register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (typeof type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// Steps
// 1. create a new method ('registerNewAnswer') on the poll object:

// 1.1 - display prompt window for the user to input the number of the selected option:
// DONE

// 1.2 - update the answers on the poll object based on the input number. Increase the value at the position of the array by 1 that was selected (check if the input is a number, and the answer makes sense i.e. has to be 0, 1, 2,

// 2. Call the method when user clicks the answer poll button:
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 3. create a method ('displayResults') to display poll restults. it takes a string as an input ('type'), and can be a 'string' or 'array'.
//If the type is 'array', display the results array as it is, using console.log(). Need to have a default option. If it is a 'string', display a string. i.e.('Poll results are 13, 2, 4, 1').

// 4. run 'displayResults' method at the end of all 'registerNewAnswer' method calls.

//5. // use call method to create a new this keyword
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
