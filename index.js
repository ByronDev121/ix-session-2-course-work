console.log("Hello, World!");

var firstName = "Byron";

let lastName = "de Villiers";

lastName += " update";
// lastName = lastName + " update";
console.log(lastName);

const fullName = firstName + "  " + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);

// Primitives:

let nil;
let nill = null;
let bigInt = 2 ** 53;
console.log("typeof 'hello world'", typeof "hello world");
console.log("typeof 31", typeof 31);
console.log("typeof ", bigInt, typeof BigInt(bigInt));
console.log("typeof Symbol('key')", typeof Symbol("key"));
console.log("typeof true", typeof true);
console.log("typeof nil", typeof nil);
console.log("typeof nill", typeof nill);

console.log("=======");

// Strings
let greeting = `Hello! My name is ${fullName}`;
console.log(greeting);
console.log(greeting.length);
console.log(greeting[5]);
console.log(greeting.substring(0, 6));
console.log(greeting.includes("this"));
console.log(greeting.indexOf("!"));
console.log(greeting.split(""));

console.log("=======");

// Objects literals:
const person = {
  firstName: "Byron",
  lastName: "de Villiers",
  age: "31",
  hobbies: ["hike", "surf", "run"],
  address: {
    number: 5,
    street: "Riepen Avenue",
    suburb: "Riepen Park",
    province: "Guateng",
    country: "SA",
  },
  getFormattedAddress: () => {
    return (
      person.address.number +
      " " +
      person.address.street +
      " " +
      person.address.suburb +
      " " +
      person.address.province
    );
  },
};

const person2 = {
  firstName: "Byron",
  lastName: "de Villiers",
  age: 31,
  hobbies: ["hike", "surf", "run"],
  address: {
    number: 5,
    street: "Riepen Avenue",
    suburb: "Riepen Park",
    province: "Guateng",
    country: "SA",
  },
  getFormattedAddress: function () {
    return (
      this.address.number +
      " " +
      this.address.street +
      " " +
      this.address.suburb +
      " " +
      this.address.province
    );
  },
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.hobbies);
// console.log(person.getFormattedAddress());˝

console.log("=====");

// Arrays:
// Initializing an array - old
let nums1 = new Array(1, 2, 3, 4, 5, 6);
let nums2 = new Array(10);
nums2[2] = "test";
console.log(nums1);
console.log(nums2);
// Initializing an array - new
let alphaNumeric = [1, 2, 3, 4, 5, "a", "b", person];
console.log(alphaNumeric);
let fruits = ["orange", "pear", "apple"];
fruits.push("strawberry");
// console.log(fruits);
// const firstFruit = fruits.shift();
// console.log(firstFruit);
console.log(fruits);

console.log("=======");

// Higher order array methods:
//Filter
const filteredFruits = fruits.filter((fruit) => {
  return !fruit.includes("orange");
});
// Map
const mappedFruits = fruits.map((fruit, index) => {
  return {
    productId: index + 1,
    name: fruit,
    qty: 0,
    price: "R10",
  };
});
// Sort
const sortedFruits = fruits.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
});
console.log(filteredFruits);
console.log(mappedFruits);
console.log(sortedFruits);

const firstNameCopy = "Byron";
console.log(firstNameCopy === firstName);
console.log(person.firstName == person2.firstName);

const misMatchKeys = [];
const shouldListMisMatch = false;
Object.keys(person).forEach((key) => {
  let person1Value = person[key];
  let person2Value = person2[key];
  if (person1Value !== person2Value || shouldListMisMatch) {
    misMatchKeys.push(key);
  }
});

console.log(misMatchKeys);

let testNum = 1.2646;
console.log(Math.ceil(testNum));

console.log("=======");

// Conditional statement:
const nums = 7;
// If:
if (nums == 20) {
  console.log("nums == 20");
} else if (nums == 10) {
  console.log("nums == 10");
} else {
  console.log("nums == ", nums);
}

// Switch:
switch (nums) {
  case 10:
    console.log("nums == 10");
    break;
  case 20:
    console.log("nums == 20");
    break;
  default:
    console.log("nums == ", nums);
}

// Ternary Operator
nums == 10
  ? console.log("nums == 10")
  : nums == 20
  ? console.log("nums == 20")
  : console.log("nums == ", nums);

const numsGreaterThanTen =
  nums > 10 ? "greater that 10" : "less than or equal to 10";
console.log(numsGreaterThanTen);

console.log("=======");

// Loops:

// For:
console.log("For loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("For of loop:");
for (const fruit of fruits) {
  console.log(fruit);
}
console.log("For each loop:");
fruits.forEach((fruit) => {
  console.log(fruit);
});

// While:
console.log("While loop:");
let index = 0;
let isConditionSatisfied = false;
while (!isConditionSatisfied) {
  console.log(index);
  if (index > 10) {
    isConditionSatisfied = true;
  }
  index++;
}

console.log("=======");

// Functions

let todos = [
  {
    id: 1,
    title: "Learn HTML, CSS and JS",
    completed: true,
  },
  {
    id: 2,
    title: "Write code",
    completed: false,
  },
  {
    id: 3,
    title: "Get a SWE job",
    completed: true,
  },
];

const getAllCompletedTasks = (todos) => {
  return todos.filter((todo) => todo.completed);
};

function getAllUncompletedTasks(todos) {
  return todos.filter((todo) => !todo.completed);
}

function areAllTasksDone(todos) {
  return !todos.some((todo) => !todo.completed);
}

function isTaskDone(todo) {
  return todo.completed;
}

// alert("this is a test alert");

console.log(getAllUncompletedTasks(todos));
console.log(getAllCompletedTasks(todos));
console.log(areAllTasksDone(todos));
console.log(isTaskDone(todos[2]));
console.log(todos[2].completed);

console.log(person.address.suburb);
console.log(person.getFormattedAddress());

// Constructor functions:
function User(firstName, lastName, bio, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.bio = bio;
  this.email = email;
}

User.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

const user = new User(
  "Byron",
  "de Villiers",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, culpa.Laudantium, similique tempora. Dignissimos voluptas unde harum nihil.Quaerat eos excepturi eius explicabo perspiciatis sapiente autem,tempore consequatur blanditiis atque.",
  "byron@mail.com"
);

console.log(user);
console.log(user.getFullName());

// Classes:
const Person = class {
  constructor(firstName, lastName, bio, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bio = bio;
    this.email = email;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
};

const personClass = new Person(
  "Byron",
  "de Villiers",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, culpa.Laudantium, similique tempora. Dignissimos voluptas unde harum nihil.Quaerat eos excepturi eius explicabo perspiciatis sapiente autem,tempore consequatur blanditiis atque.",
  "byron@mail.com"
);

console.log(personClass);
console.log(personClass.getFullName());

// Write some function
