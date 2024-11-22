// პირველი

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

const positiveCount = nums.filter((num) => num > 0).length;

const negativeSum = nums
  .filter((num) => num < 0)
  .reduce((acc, num) => acc + num, 0);

const result = [positiveCount, negativeSum];

console.log(result);

//მეორე

const nums2 = [3, 5, 7, 9, 11, 13, 15];

function processNumbers(numbers) {
  const multiplied = numbers.map((num) => num * 2);
  const filtered = multiplied.filter((num) => num % 3 === 0);
  return filtered;
}

const finall = processNumbers(nums2);
console.log(finall);

//მესამე

function findSumOfSmallest(numbersArray) {
  const sortedNumbers = numbersArray.sort((a, b) => a - b);

  return sortedNumbers[0] + sortedNumbers[1];
}

const smallestSum = findSumOfSmallest([19, 5, 42, 2, 77]);
console.log(smallestSum);

// მეოთხე

function findLargerElements(array1, array2) {
  return array1.map((value, idx) => Math.max(value, array2[idx]));
}

let firstArray = [13, 64, 15, 17, 88];
let secondArray = [23, 14, 53, 17, 80];

const largerNumbers = findLargerElements(firstArray, secondArray);
console.log(largerNumbers);

// მეხუთე

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

const allNames = characters.map((character) => character.name);
console.log(allNames);

const firstNames = characters.map((character) => character.name.split(" ")[0]);
console.log(firstNames);

const eyeColorCount = characters.reduce((acc, character) => {
  const eyeColor = character.eye_color;
  acc[eyeColor] = (acc[eyeColor] || 0) + 1;
  return acc;
}, {});

console.log(eyeColorCount);
