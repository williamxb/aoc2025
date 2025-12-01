import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);

  // split by whitespace
  const a = input.split(/\s+/);

  let dial = 50, answer = 0

  for (let i = 0; i < a.length; i++) {
    // true = right = addition / false == left == subtraction
    let operator = (a[i].slice(undefined, 1) == "R")
    
    // remove L/R from string, create int
    let rotateBy = parseInt(a[i].slice(1))

    // as we are counting zero pointers AFTER rotations,
    // we should only turn by max 100.
    if (rotateBy > 100) {
      while (rotateBy > 100) {
        rotateBy = rotateBy - 100;
      }
    }
    
    // rotate!
    for (let i = 0; i < rotateBy; i++) {
      operator ? dial++ : dial--;
  
      // reset dial to zero
      if (dial >= 100) dial = dial - 100;
      if (dial < 0) dial = dial + 100;
    }

    // landed on a zero pointer!
    if (dial === 0) answer = answer + 1;

    // testing
    // console.log(`dial moved ${operator ? "R" : "L"}${rotateBy} is ${dial} - answer = ${answer}`)
  }
  
  return answer;
};

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput);

  // split by whitespace
  const a = input.split(/\s+/);

  let dial = 50, answer = 0

  for (let i = 0; i < a.length; i++) {
    // true = right = addition / false == left == subtraction
    let operator = (a[i].slice(undefined, 1) == "R")
    
    // remove L/R from string, create int
    let rotateBy = parseInt(a[i].slice(1))

    /*
     * this logic isn't required, as we
     * are now counting ALL zero pointers
     * 
    if (rotateBy > 100) {
      while (rotateBy > 100) {
        rotateBy = rotateBy - 100;
      }
    }
    */
    
    // rotate!
    for (let i = 0; i < rotateBy; i++) {
      operator ? dial++ : dial--;
  
      // reset dial to zero
      if (dial >= 100) dial = dial - 100;
      if (dial < 0) dial = dial + 100;

      // landed on a zero pointer!
      if (dial === 0) answer = answer + 1;
    }

    // testing
    // console.log(`dial moved ${operator ? "R" : "L"}${rotateBy} is ${dial} - answer = ${answer}`)
  }
  
  return answer;
};

run({
  part1: {
    tests: [
      {
        input: `
        L68
        L30
        R48
        L5
        R60
        L55
        L1
        L99
        R14
        L82`,
        expected: 3,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        L68
        L30
        R48
        L5
        R60
        L55
        L1
        L99
        R14
        L82`,
        expected: 6,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
