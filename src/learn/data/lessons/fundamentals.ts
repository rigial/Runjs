import type { Lesson } from '../../types';

export const fundamentalLessons: Lesson[] = [
  {
    slug: 'what-is-javascript',
    title: 'What is JavaScript?',
    description: 'Discover what JavaScript is, why it exists, and how it brings life to the web.',
    difficulty: 'beginner',
    readingTime: 4,
    sections: [
      {
        heading: 'The Language of the Web',
        paragraphs: [
          'If HTML is the structure of a house and CSS is the paint and decoration, JavaScript is the electricity and plumbing. It makes web pages interactive, allowing elements to move, change, and react to your actions without reloading the page.',
          'JavaScript was created in 1995 in just 10 days! Since then, it has evolved into one of the most popular and powerful programming languages in the world, running on servers, phones, and almost every computer.'
        ],
        bulletPoints: [
          'Adds interactivity to websites',
          'Runs directly in the browser (client-side)',
          'Can also run on servers using Node.js'
        ],
        callout: {
          type: 'note',
          text: 'Java and JavaScript are entirely different languages! They just share a similar name.'
        }
      },
      {
        heading: 'What can JavaScript do?',
        paragraphs: [
          'JavaScript gives you the power to change content on a page, animate images, validate forms before submission, and fetch new data from the internet seamlessly.'
        ],
        codeExamples: [
          {
            title: 'A simple interaction',
            code: '// In a browser, this pops up an alert box\nalert("Welcome to JavaScript!");',
            explanation: 'This built-in function tells the browser to display a small dialog box with your message.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Your First Interaction',
        description: 'Use JavaScript to show a welcome message in the console.',
        starterCode: '// Type console.log() to print a message\n',
        solution: 'console.log("Hello, interactive web!");',
        hints: ['Use the console.log function.', 'Don\'t forget quotes around your text!'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What is the primary role of JavaScript on a webpage?',
        options: ['Structuring content', 'Styling elements', 'Adding interactivity', 'Hosting databases'],
        correctIndex: 2,
        explanation: 'While HTML structures and CSS styles, JavaScript makes the webpage interactive.'
      },
      {
        question: 'Are Java and JavaScript the same thing?',
        options: ['Yes', 'No'],
        correctIndex: 1,
        explanation: 'They are completely different languages with different designs and use cases.'
      }
    ],
    keyTakeaways: [
      'JavaScript makes websites interactive and dynamic.',
      'It runs in the browser, meaning users do not need to install anything special.',
      'It is not related to the Java programming language.'
    ],
    tags: ['intro', 'basics', 'overview']
  },
  {
    slug: 'hello-world',
    title: 'Hello World & First Program',
    description: 'Write your very first line of JavaScript code and learn how to output text.',
    difficulty: 'beginner',
    readingTime: 3,
    sections: [
      {
        heading: 'Saying Hello',
        paragraphs: [
          'In programming, printing "Hello, World!" is the traditional way to start learning a new language. In JavaScript, the most common way to print something so you can see it is by using the console.',
          'The console is a tool built into web browsers (and environments like Node.js) that developers use to see messages, errors, and data.'
        ],
        codeExamples: [
          {
            title: 'Your First Program',
            code: 'console.log("Hello, World!");',
            output: 'Hello, World!',
            explanation: 'console is an object, and log is an action (or method) it can perform. We pass our message inside parentheses and quotes.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'Always end your JavaScript statements with a semicolon (;). While not strictly required in all cases, it is a great habit for beginners!'
        }
      }
    ],
    exercises: [
      {
        title: 'Introduce Yourself',
        description: 'Print a message to the console that says "My name is [Your Name]".',
        starterCode: '',
        solution: 'console.log("My name is Alex");',
        hints: ['Use console.log', 'Make sure your text is wrapped in quotes'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which tool is commonly used by developers to print messages in JavaScript?',
        options: ['alert()', 'console.log()', 'document.print()', 'system.out()'],
        correctIndex: 1,
        explanation: 'console.log() is the standard way to print output for debugging and learning.'
      }
    ],
    keyTakeaways: [
      '"Hello, World!" is a classic first step in coding.',
      'console.log() is your best friend for seeing what your code is doing.'
    ],
    tags: ['basics', 'syntax', 'console']
  },
  {
    slug: 'variables-and-constants',
    title: 'Variables & Constants',
    description: 'Learn how to store and manage data in memory using variables.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'Boxes for Data',
        paragraphs: [
          'Variables are like labeled boxes where you can store information to use later. Instead of typing the same value over and over, you store it in a variable and just use the variable\'s name.',
          'In modern JavaScript, we create variables using two main keywords: let and const. (You might also see var in older code, but we avoid it today).'
        ]
      },
      {
        heading: 'Let vs Const',
        paragraphs: [
          'Use "let" when you expect the value in the box to change later. Think of a game score.',
          'Use "const" (short for constant) when the value should never change. Think of your birth date.'
        ],
        codeExamples: [
          {
            title: 'Changing Values with let',
            code: 'let score = 0;\nconsole.log(score);\n\nscore = 10; // Updating the value\nconsole.log(score);',
            output: '0\n10',
            explanation: 'We declare score with let, meaning we are allowed to reassign it later.'
          },
          {
            title: 'Unchanging Values with const',
            code: 'const greeting = "Hello!";\nconsole.log(greeting);\n\n// greeting = "Hi"; // This would cause an error!',
            explanation: 'Variables created with const cannot be reassigned.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'A good rule of thumb: Always use const by default. Only change it to let if you discover you need to update the value later.'
        }
      }
    ],
    exercises: [
      {
        title: 'Storing User Data',
        description: 'Create a constant called "username" and assign it a name. Then create a variable called "age" using let, and update the age by adding 1.',
        starterCode: '// Create username\n\n// Create age\n\n// Update age\n',
        solution: 'const username = "Sam";\nlet age = 25;\nage = 26;',
        hints: ['username should use const', 'age should use let so it can change', 'Just write age = 26 (no let needed the second time)'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which keyword should you use for a variable that will NOT change?',
        options: ['var', 'let', 'const', 'static'],
        correctIndex: 2,
        explanation: 'const prevents accidental reassignment of variables.'
      },
      {
        question: 'What happens if you try to reassign a const variable?',
        options: ['It changes successfully', 'It is ignored', 'It causes an error', 'It creates a new variable'],
        correctIndex: 2,
        explanation: 'JavaScript throws a TypeError if you try to change a const value.'
      }
    ],
    keyTakeaways: [
      'Variables store data for later use.',
      'Use let for values that will change.',
      'Use const for values that stay the same.',
      'Avoid using var in modern JavaScript.'
    ],
    tags: ['variables', 'let', 'const', 'basics']
  },
  {
    slug: 'data-types',
    title: 'Data Types',
    description: 'Explore the different kinds of data JavaScript can handle, like text and numbers.',
    difficulty: 'beginner',
    readingTime: 6,
    sections: [
      {
        heading: 'The Flavors of Data',
        paragraphs: [
          'Just like you treat a math equation differently from a poem, JavaScript treats different kinds of data differently. These categories are called "Data Types".',
          'JavaScript has several primitive (basic) data types.'
        ],
        bulletPoints: [
          'String: Text wrapped in quotes ("hello")',
          'Number: Math numbers, both whole and decimal (42, 3.14)',
          'Boolean: True or false (true, false)',
          'Undefined: An empty variable that hasn\'t been given a value yet',
          'Null: An intentionally empty or non-existent value'
        ],
        codeExamples: [
          {
            title: 'Different Types in Action',
            code: 'const name = "Alice"; // String\nconst age = 30; // Number\nconst isStudent = true; // Boolean\nlet favoriteColor; // Undefined\nconst emptyBox = null; // Null\n\nconsole.log(typeof name, typeof age);',
            output: 'string number',
            explanation: 'The typeof operator tells us what type of data a variable holds.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Type Check',
        description: 'Create a variable holding your favorite number, and another holding your favorite food (as text). Use console.log with typeof to verify their types.',
        starterCode: 'let favNumber = \nlet favFood = \n',
        solution: 'let favNumber = 7;\nlet favFood = "Pizza";\nconsole.log(typeof favNumber);\nconsole.log(typeof favFood);',
        hints: ['Numbers don\'t need quotes.', 'Text needs quotes to be a String.', 'Use typeof variableName'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What data type is the value 42.5?',
        options: ['String', 'Float', 'Number', 'Decimal'],
        correctIndex: 2,
        explanation: 'In JavaScript, all numbers (whole or decimal) are just of type "Number".'
      },
      {
        question: 'What is the type of a variable that has been declared but not assigned a value?',
        options: ['null', 'undefined', 'string', 'error'],
        correctIndex: 1,
        explanation: 'Variables are undefined by default until you put something in them.'
      }
    ],
    keyTakeaways: [
      'Strings are for text and use quotes.',
      'Numbers handle both integers and decimals.',
      'Booleans are just true or false.',
      'Use the typeof operator to check a value\'s type.'
    ],
    tags: ['types', 'string', 'number', 'boolean']
  },
  {
    slug: 'type-conversions',
    title: 'Type Conversions',
    description: 'Learn how to change data from one type to another, like turning a string into a number.',
    difficulty: 'beginner',
    readingTime: 4,
    sections: [
      {
        heading: 'Mixing Types',
        paragraphs: [
          'Sometimes you have data in the wrong format. For instance, user input from a website form is almost always a String, even if they typed a number. If they type "5" and you try to add 2 to it, JavaScript might give you "52" instead of 7!',
          'To fix this, we manually convert data from one type to another.'
        ],
        codeExamples: [
          {
            title: 'String to Number',
            code: 'const input = "42";\nconst result = Number(input) + 8;\nconsole.log(result);',
            output: '50',
            explanation: 'Number() turns the string "42" into the actual math number 42.'
          },
          {
            title: 'Number to String',
            code: 'const score = 100;\nconst message = String(score) + " points!";\nconsole.log(message);',
            output: '100 points!',
            explanation: 'String() converts the number so it easily joins with other text.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'If you try to convert a word into a number, like Number("apple"), JavaScript returns NaN (Not-a-Number).'
        }
      }
    ],
    exercises: [
      {
        title: 'Fix the Math',
        description: 'The code below concatenates text instead of doing math. Fix it by converting stringPrice to a number before adding tax.',
        starterCode: 'const stringPrice = "15";\nconst tax = 2;\n// Fix the line below\nconst total = stringPrice + tax;\nconsole.log(total);',
        solution: 'const stringPrice = "15";\nconst tax = 2;\nconst total = Number(stringPrice) + tax;\nconsole.log(total);',
        hints: ['Wrap stringPrice in Number() on line 4.'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What is the output of: String(5) + 5',
        options: ['10', '55', 'NaN', 'Error'],
        correctIndex: 1,
        explanation: 'String(5) becomes "5". Joining a string "5" with number 5 results in the text "55".'
      },
      {
        question: 'What happens when you do Number("hello")?',
        options: ['It crashes', '0', 'NaN', 'undefined'],
        correctIndex: 2,
        explanation: 'Since "hello" cannot be understood as a math number, it becomes NaN (Not-a-Number).'
      }
    ],
    keyTakeaways: [
      'Use Number() to turn text into math numbers.',
      'Use String() to turn numbers into text.',
      'Always be aware of what type your data is to avoid weird math bugs.'
    ],
    tags: ['conversion', 'casting', 'types']
  },
  {
    slug: 'arithmetic-operators',
    title: 'Arithmetic Operators',
    description: 'Perform basic math operations like addition, subtraction, multiplication, and division.',
    difficulty: 'beginner',
    readingTime: 4,
    sections: [
      {
        heading: 'Math in Code',
        paragraphs: [
          'JavaScript can act as a powerful calculator. You use symbols called "operators" to perform math.',
          'The standard operators are + (add), - (subtract), * (multiply), and / (divide).'
        ],
        codeExamples: [
          {
            title: 'Basic Math',
            code: 'const sum = 10 + 5;      // 15\nconst diff = 10 - 5;     // 5\nconst product = 10 * 5;  // 50\nconst quotient = 10 / 5; // 2',
            explanation: 'You can use operators between raw numbers or between variables holding numbers.'
          }
        ]
      },
      {
        heading: 'The Modulo Operator',
        paragraphs: [
          'There is a special operator called Modulo (%). It gives you the REMAINDER of a division. It is incredibly useful for finding out if a number is even or odd.'
        ],
        codeExamples: [
          {
            title: 'Using Modulo',
            code: 'console.log(10 % 3);\n// 10 divided by 3 is 3 with a remainder of 1. So it prints 1.',
            output: '1'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Calculate the Area',
        description: 'Calculate the area of a rectangle. Multiply width by height and store it in a variable called "area".',
        starterCode: 'const width = 8;\nconst height = 4;\n// Create the area variable here\n',
        solution: 'const width = 8;\nconst height = 4;\nconst area = width * height;\nconsole.log(area);',
        hints: ['Use the * operator.', 'Assign the result to a new const called area.'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which operator is used for multiplication?',
        options: ['x', '*', '#', '%'],
        correctIndex: 1,
        explanation: 'The asterisk (*) is the standard multiplication operator in programming.'
      },
      {
        question: 'What is the result of 7 % 2?',
        options: ['3.5', '3', '1', '0'],
        correctIndex: 2,
        explanation: '7 divided by 2 is 3, with a remainder of 1. Modulo gives the remainder.'
      }
    ],
    keyTakeaways: [
      'JavaScript handles standard math operations naturally.',
      'The modulo operator (%) is used to find remainders.',
      'Standard math order of operations (PEMDAS) applies in JavaScript.'
    ],
    tags: ['math', 'operators', 'modulo']
  },
  {
    slug: 'comparison-operators',
    title: 'Comparison Operators',
    description: 'Compare values to see if they are equal, greater, or less than one another.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'Asking Questions about Data',
        paragraphs: [
          'Comparison operators compare two values and always answer with a Boolean: true or false.',
          'Common comparisons are > (greater than), < (less than), >= (greater or equal), and <= (less or equal).'
        ],
        codeExamples: [
          {
            title: 'Simple Comparisons',
            code: 'console.log(10 > 5);   // true\nconsole.log(5 >= 5);   // true\nconsole.log(3 < 1);    // false',
            output: 'true\ntrue\nfalse'
          }
        ]
      },
      {
        heading: 'Equality: == vs ===',
        paragraphs: [
          'To check if things are equal, JavaScript has two operators. The loose equality (==) tries to convert types before comparing. The strict equality (===) compares both the value AND the data type.',
          'In modern JavaScript, ALWAYS use strict equality (===) to prevent weird bugs.'
        ],
        codeExamples: [
          {
            title: 'Strict vs Loose',
            code: 'console.log(5 == "5");  // true (bad practice!)\nconsole.log(5 === "5"); // false (they are different types!)',
            output: 'true\nfalse',
            explanation: 'Use === for equality, and !== for not equal.'
          }
        ],
        callout: {
          type: 'important',
          text: 'Using == can lead to unpredictable results. Make it a habit to always use === and !==.'
        }
      }
    ],
    exercises: [
      {
        title: 'Are you old enough?',
        description: 'Create a boolean variable called "canDrive" that evaluates whether a userAge is greater than or equal to 16.',
        starterCode: 'const userAge = 15;\n// let canDrive = ...\n',
        solution: 'const userAge = 15;\nlet canDrive = userAge >= 16;\nconsole.log(canDrive);',
        hints: ['Use the >= operator', 'Assign the result of the comparison to canDrive'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which operator should you use to check if two values are exactly identical in both value and type?',
        options: ['=', '==', '===', '=>'],
        correctIndex: 2,
        explanation: '=== is the strict equality operator. (A single = is for assignment!)'
      },
      {
        question: 'What is the output of 10 !== "10"?',
        options: ['true', 'false', 'error', 'undefined'],
        correctIndex: 0,
        explanation: 'Because 10 is a number and "10" is a string, they are strictly NOT equal, so the answer is true.'
      }
    ],
    keyTakeaways: [
      'Comparisons always result in true or false.',
      'A single equals sign (=) assigns a value; it does not compare.',
      'Always use triple equals (===) for safer comparisons.'
    ],
    tags: ['comparison', 'equality', 'booleans']
  },
  {
    slug: 'logical-operators',
    title: 'Logical Operators',
    description: 'Combine multiple conditions using AND, OR, and NOT.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'Combining Questions',
        paragraphs: [
          'Sometimes you need to check multiple things at once. For example, "Is it the weekend AND is it sunny?" Logical operators let you combine boolean values.',
          'There are three main logical operators: && (AND), || (OR), and ! (NOT).'
        ]
      },
      {
        heading: 'AND, OR, NOT in action',
        paragraphs: [
          '&& (AND) requires ALL conditions to be true.',
          '|| (OR) requires at least ONE condition to be true.',
          '! (NOT) flips the boolean: true becomes false, false becomes true.'
        ],
        codeExamples: [
          {
            title: 'Logical logic',
            code: 'const hasTicket = true;\nconst isVIP = false;\n\n// AND: Need both\nconsole.log(hasTicket && isVIP); // false\n\n// OR: Need either one\nconsole.log(hasTicket || isVIP); // true\n\n// NOT: Flip it\nconsole.log(!hasTicket); // false',
            output: 'false\ntrue\nfalse'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Movie Night',
        description: 'You can go to the movies if you have money AND you have free time. Create a variable "canGoToMovies" that combines these.',
        starterCode: 'const hasMoney = true;\nconst hasFreeTime = false;\n\n// const canGoToMovies = \n',
        solution: 'const hasMoney = true;\nconst hasFreeTime = false;\nconst canGoToMovies = hasMoney && hasFreeTime;\nconsole.log(canGoToMovies);',
        hints: ['Use the && operator between the two variables.'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which operator evaluates to true ONLY if BOTH sides are true?',
        options: ['||', '!', '&&', '=='],
        correctIndex: 2,
        explanation: '&& (AND) requires both the left side and right side to be true.'
      },
      {
        question: 'What is the result of !false?',
        options: ['true', 'false', 'error', 'null'],
        correctIndex: 0,
        explanation: 'The NOT operator (!) reverses the boolean value. Not false is true.'
      }
    ],
    keyTakeaways: [
      '&& combines conditions where everything must be true.',
      '|| combines conditions where only one needs to be true.',
      '! simply flips a true to false, or a false to true.'
    ],
    tags: ['logic', 'and', 'or', 'not']
  },
  {
    slug: 'conditionals-if-else',
    title: 'If/Else Conditionals',
    description: 'Make your code make decisions and take different paths.',
    difficulty: 'beginner',
    readingTime: 6,
    sections: [
      {
        heading: 'Fork in the Road',
        paragraphs: [
          'Up until now, our code ran straight from top to bottom. Conditionals allow code to branch. If a condition is true, run one block of code; otherwise, run a different block.',
          'We use "if", "else if", and "else" to build these branches.'
        ],
        codeExamples: [
          {
            title: 'Basic If/Else',
            code: 'const hour = 14;\n\nif (hour < 12) {\n  console.log("Good morning!");\n} else if (hour < 18) {\n  console.log("Good afternoon!");\n} else {\n  console.log("Good evening!");\n}',
            output: 'Good afternoon!',
            explanation: 'The code checks the conditions in order. The first one that is true runs its block {}, and the rest are skipped.'
          }
        ],
        callout: {
          type: 'tip',
          text: 'You don\'t always need an "else if" or an "else". Sometimes a simple "if" on its own is exactly what you need!'
        }
      }
    ],
    exercises: [
      {
        title: 'Pass or Fail',
        description: 'Write an if/else statement. If the score is 50 or above, log "Pass". Otherwise, log "Fail".',
        starterCode: 'const score = 45;\n\n// Write your if/else here\n',
        solution: 'const score = 45;\nif (score >= 50) {\n  console.log("Pass");\n} else {\n  console.log("Fail");\n}',
        hints: ['Check if score >= 50', 'Wrap the console.log in curly braces {}'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What keyword is used to provide a default block of code if all previous conditions are false?',
        options: ['catch', 'default', 'else', 'otherwise'],
        correctIndex: 2,
        explanation: 'The "else" block acts as a catch-all at the end of an if statement.'
      },
      {
        question: 'Can you have multiple "else if" blocks in a single if statement?',
        options: ['Yes', 'No'],
        correctIndex: 0,
        explanation: 'You can chain as many "else if" blocks as you need to check different conditions.'
      }
    ],
    keyTakeaways: [
      'Conditionals control the flow of your program.',
      'The block {} inside the "if" only runs if the condition is true.',
      '"else" provides a fallback if no conditions were true.'
    ],
    tags: ['control-flow', 'if', 'else', 'conditions']
  },
  {
    slug: 'switch-statement',
    title: 'Switch Statement',
    description: 'An elegant alternative to writing many if/else conditions.',
    difficulty: 'beginner',
    readingTime: 5,
    sections: [
      {
        heading: 'Handling Many Exact Values',
        paragraphs: [
          'When you are comparing a single variable against many exact values, a chain of "else if" statements can get messy. The "switch" statement provides a cleaner way to handle this.',
          'You provide the switch with a value, and it checks it against various "cases".'
        ],
        codeExamples: [
          {
            title: 'Switch in Action',
            code: 'const day = "Monday";\n\nswitch (day) {\n  case "Monday":\n    console.log("Start of the work week.");\n    break;\n  case "Friday":\n    console.log("Almost the weekend!");\n    break;\n  default:\n    console.log("Just a regular day.");\n}',
            output: 'Start of the work week.',
            explanation: 'The "break" keyword is crucial; it stops the switch from continuing to run the code in the cases below it.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'If you forget the "break" statement at the end of a case, the code will "fall through" and execute the next case\'s code too!'
        }
      }
    ],
    exercises: [
      {
        title: 'Traffic Light',
        description: 'Create a switch statement for a "lightColor" variable. If it is "red", log "Stop". If "green", log "Go". Add a default for "Yield".',
        starterCode: 'const lightColor = "green";\n\n// Write switch here\n',
        solution: 'const lightColor = "green";\nswitch(lightColor) {\n  case "red":\n    console.log("Stop");\n    break;\n  case "green":\n    console.log("Go");\n    break;\n  default:\n    console.log("Yield");\n}',
        hints: ['Use switch(lightColor)', 'Don\'t forget your break statements!'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'What keyword stops a switch block from running into the next case?',
        options: ['stop', 'end', 'break', 'return'],
        correctIndex: 2,
        explanation: '"break" tells JavaScript to exit the switch block immediately.'
      },
      {
        question: 'What is the switch equivalent of an "else" block?',
        options: ['case all', 'default', 'finally', 'else'],
        correctIndex: 1,
        explanation: '"default" runs if none of the specific cases matched.'
      }
    ],
    keyTakeaways: [
      'Switch is great for checking one variable against many specific values.',
      'Always use "break" to end a case.',
      'Use "default" to handle any unmatched values.'
    ],
    tags: ['control-flow', 'switch', 'conditions']
  },
  {
    slug: 'ternary-operator',
    title: 'Ternary Operator',
    description: 'A handy shortcut for simple if/else statements.',
    difficulty: 'intermediate',
    readingTime: 4,
    sections: [
      {
        heading: 'The One-Line If Statement',
        paragraphs: [
          'Sometimes, writing a full if/else block feels like too much typing for a very simple decision. The ternary operator lets you write a quick if/else on a single line.',
          'It is called "ternary" because it has three parts: the condition, what happens if true, and what happens if false.'
        ],
        codeExamples: [
          {
            title: 'Syntax: condition ? ifTrue : ifFalse',
            code: 'const age = 20;\n// Instead of a block, we do it in one line:\nconst status = age >= 18 ? "Adult" : "Minor";\n\nconsole.log(status);',
            output: 'Adult',
            explanation: 'If age is >= 18, it returns "Adult". Otherwise, it returns "Minor".'
          }
        ],
        callout: {
          type: 'note',
          text: 'Ternary operators are great for assigning variables based on a condition, but don\'t overuse them. If the logic is complex, a standard if/else is easier to read.'
        }
      }
    ],
    exercises: [
      {
        title: 'Dark Mode Toggle',
        description: 'Use a ternary operator. If "isDarkMode" is true, assign "black" to bgColor. Otherwise, assign "white".',
        starterCode: 'const isDarkMode = true;\n// const bgColor = ...\n',
        solution: 'const isDarkMode = true;\nconst bgColor = isDarkMode ? "black" : "white";\nconsole.log(bgColor);',
        hints: ['Condition ? TrueValue : FalseValue'],
        difficulty: 'beginner'
      }
    ],
    quiz: [
      {
        question: 'Which symbols are used in the ternary operator?',
        options: ['& and |', '? and :', 'if and else', '=> and ;'],
        correctIndex: 1,
        explanation: 'The syntax is: condition ? valueIfTrue : valueIfFalse'
      }
    ],
    keyTakeaways: [
      'The ternary operator is a fast way to write simple if/else logic.',
      'It is excellent for variable assignments.',
      'Readability is key: don\'t nest multiple ternaries inside each other.'
    ],
    tags: ['ternary', 'syntax', 'shortcuts']
  },
  {
    slug: 'for-loop',
    title: 'For Loop',
    description: 'Automate repetitive tasks by looping over code multiple times.',
    difficulty: 'beginner',
    readingTime: 6,
    sections: [
      {
        heading: 'Doing Things Over and Over',
        paragraphs: [
          'Programmers hate doing the same thing twice. If you need to print 5 messages, you don\'t write console.log 5 times; you write a loop.',
          'The "for" loop is the most common loop. It runs a block of code a specific number of times.'
        ],
        codeExamples: [
          {
            title: 'Counting to 3',
            code: 'for (let i = 1; i <= 3; i++) {\n  console.log("Count is " + i);\n}',
            output: 'Count is 1\nCount is 2\nCount is 3',
            explanation: 'A for loop has 3 parts: Initialization (let i = 1), Condition (i <= 3), and Increment (i++).'
          }
        ]
      },
      {
        heading: 'Breaking down the loop',
        paragraphs: [
          '1. Initialization: We create a counter variable (usually named "i" for index) and set it to a starting number.',
          '2. Condition: Before every loop, the computer checks this. If true, run the code. If false, stop looping.',
          '3. Increment: After the code block runs, this updates the counter (i++ means add 1 to i).'
        ]
      }
    ],
    exercises: [
      {
        title: 'Countdown',
        description: 'Write a for loop that counts down from 5 to 1, logging each number.',
        starterCode: '// Start at 5, loop while >= 1, decrement (i--)\n',
        solution: 'for (let i = 5; i >= 1; i--) {\n  console.log(i);\n}',
        hints: ['Initialization: let i = 5', 'Condition: i >= 1', 'Decrement: i--'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What does i++ do in a loop?',
        options: ['Stops the loop', 'Multiplies i by 2', 'Adds 1 to i', 'Makes i undefined'],
        correctIndex: 2,
        explanation: 'i++ is shorthand for i = i + 1.'
      },
      {
        question: 'If a for loop condition is initially false, how many times will the loop run?',
        options: ['Infinite times', 'One time', 'Zero times', 'It will cause an error'],
        correctIndex: 2,
        explanation: 'The condition is checked BEFORE every run, including the first one. If false, it skips the loop entirely.'
      }
    ],
    keyTakeaways: [
      'Loops save you from writing repetitive code.',
      'A for loop controls exactly how many times code runs using a counter.',
      'Be careful not to create an infinite loop (where the condition is never false)!'
    ],
    tags: ['loops', 'iteration', 'for']
  },
  {
    slug: 'while-and-do-while',
    title: 'While & Do-While Loops',
    description: 'Learn how to loop based on conditions rather than a set number of times.',
    difficulty: 'intermediate',
    readingTime: 5,
    sections: [
      {
        heading: 'The While Loop',
        paragraphs: [
          'A "for" loop is great when you know exactly how many times to loop. A "while" loop is better when you want to loop UNTIL something specific happens, but you don\'t know how long it will take.',
          'It acts like a repeating "if" statement. While the condition is true, keep running the code.'
        ],
        codeExamples: [
          {
            title: 'While Loop Example',
            code: 'let battery = 100;\n\nwhile (battery > 97) {\n  console.log("Battery at " + battery + "%");\n  battery--; // Drain battery\n}',
            output: 'Battery at 100%\nBattery at 99%\nBattery at 98%',
            explanation: 'Make sure your code eventually changes the condition to false, or the loop will run forever!'
          }
        ]
      },
      {
        heading: 'The Do-While Loop',
        paragraphs: [
          'A "do-while" loop is very similar, but with one major difference: it always runs the code block at least ONCE, because it checks the condition at the END of the loop instead of the beginning.'
        ],
        codeExamples: [
          {
            title: 'Do-While Example',
            code: 'let passwordCorrect = false;\n\ndo {\n  console.log("Attempting login...");\n  // Code to check password would go here\n  passwordCorrect = true; // Simulating success\n} while (!passwordCorrect);',
            output: 'Attempting login...',
            explanation: 'Even if passwordCorrect was true initially, the block runs once.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Empty the Cup',
        description: 'Using a while loop, decrease the "waterLevel" by 1 until it hits 0. Log the level inside the loop.',
        starterCode: 'let waterLevel = 3;\n\n// Write while loop here\n',
        solution: 'let waterLevel = 3;\nwhile (waterLevel > 0) {\n  console.log("Water level: " + waterLevel);\n  waterLevel--;\n}',
        hints: ['Condition should check if waterLevel is greater than 0', 'Remember to subtract 1 inside the loop using --'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'What is the main risk of using a while loop?',
        options: ['It uses too much memory', 'Creating an infinite loop', 'It only works with numbers', 'It requires external libraries'],
        correctIndex: 1,
        explanation: 'If the condition never becomes false, the loop never stops, crashing the program (infinite loop).'
      },
      {
        question: 'How is a do-while loop different from a while loop?',
        options: ['It runs faster', 'It guarantees the code runs at least once', 'It doesn\'t use conditions', 'It loops backwards'],
        correctIndex: 1,
        explanation: 'Because it checks the condition at the end, the code block is always executed on the first pass.'
      }
    ],
    keyTakeaways: [
      'Use while loops when you don\'t know beforehand how many iterations are needed.',
      'Always ensure the loop condition will eventually become false.',
      'Do-while loops ensure the code block executes at least one time.'
    ],
    tags: ['loops', 'while', 'iteration']
  },
  {
    slug: 'break-and-continue',
    title: 'Break & Continue',
    description: 'Take complete control over your loops by skipping iterations or stopping them early.',
    difficulty: 'intermediate',
    readingTime: 4,
    sections: [
      {
        heading: 'Stopping the Loop',
        paragraphs: [
          'Sometimes you find what you are looking for before a loop finishes naturally. The "break" keyword completely stops the loop and exits it immediately.'
        ],
        codeExamples: [
          {
            title: 'Using Break',
            code: 'for (let i = 1; i <= 5; i++) {\n  if (i === 3) {\n    console.log("Found 3, stopping!");\n    break;\n  }\n  console.log(i);\n}',
            output: '1\n2\nFound 3, stopping!',
            explanation: 'The loop was supposed to go to 5, but break stopped it at 3.'
          }
        ]
      },
      {
        heading: 'Skipping an Iteration',
        paragraphs: [
          'If you just want to skip the current step but keep the loop running, use "continue". It skips the rest of the code in the block and jumps straight to the next loop iteration.'
        ],
        codeExamples: [
          {
            title: 'Using Continue',
            code: 'for (let i = 1; i <= 4; i++) {\n  if (i === 2) {\n    continue; // Skip printing 2\n  }\n  console.log(i);\n}',
            output: '1\n3\n4',
            explanation: 'When i was 2, continue skipped the console.log and moved to i=3.'
          }
        ]
      }
    ],
    exercises: [
      {
        title: 'Skip the Odds',
        description: 'Write a loop from 1 to 5. Use the "continue" keyword to skip printing any odd numbers. (Hint: i % 2 !== 0 means odd).',
        starterCode: 'for (let i = 1; i <= 5; i++) {\n  // Add if condition and continue\n  \n  console.log(i);\n}',
        solution: 'for (let i = 1; i <= 5; i++) {\n  if (i % 2 !== 0) {\n    continue;\n  }\n  console.log(i);\n}',
        hints: ['Check if i % 2 !== 0', 'Put continue inside the if block.'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which keyword stops the entire loop completely?',
        options: ['stop', 'halt', 'break', 'continue'],
        correctIndex: 2,
        explanation: 'Break completely exits the loop structure.'
      },
      {
        question: 'What happens when "continue" is executed in a loop?',
        options: ['The loop breaks', 'It skips to the next iteration', 'It pauses execution', 'It goes back one step'],
        correctIndex: 1,
        explanation: 'Continue skips the remaining code for that specific run and immediately starts the next run of the loop.'
      }
    ],
    keyTakeaways: [
      '"break" is the emergency exit for loops.',
      '"continue" is a way to skip specific steps without stopping the whole loop.',
      'These tools give you fine-grained control over loop behavior.'
    ],
    tags: ['loops', 'control', 'break', 'continue']
  },
  {
    slug: 'for-of-and-for-in',
    title: 'For...of & For...in',
    description: 'Modern, cleaner ways to loop over data structures like arrays and objects.',
    difficulty: 'advanced',
    readingTime: 5,
    sections: [
      {
        heading: 'Looping over Collections',
        paragraphs: [
          'While standard "for" loops are powerful, they require you to manage index counters manually. JavaScript provides easier ways to loop over collections like Arrays and Objects.',
          'The "for...of" loop is used to iterate over values in iterable items like Arrays.'
        ],
        codeExamples: [
          {
            title: 'For...of Loop',
            code: 'const colors = ["red", "green", "blue"];\n\nfor (const color of colors) {\n  console.log(color);\n}',
            output: 'red\ngreen\nblue',
            explanation: 'You don\'t need a counter (like let i = 0). It automatically gives you each value one by one.'
          }
        ]
      },
      {
        heading: 'Looping over Objects',
        paragraphs: [
          'The "for...in" loop is designed specifically for iterating over the "keys" (or properties) of an Object.'
        ],
        codeExamples: [
          {
            title: 'For...in Loop',
            code: 'const user = {\n  name: "Alice",\n  age: 28\n};\n\nfor (const key in user) {\n  console.log(key + ": " + user[key]);\n}',
            output: 'name: Alice\nage: 28',
            explanation: 'The loop provides the keys ("name", "age"), and we can use them to access the values.'
          }
        ],
        callout: {
          type: 'warning',
          text: 'Do not use for...in to loop over Arrays. It iterates over indexes as strings, which can cause unexpected bugs. Use for...of for Arrays!'
        }
      }
    ],
    exercises: [
      {
        title: 'Print the Menu',
        description: 'You have an array of foods. Use a for...of loop to print each one.',
        starterCode: 'const menu = ["Pizza", "Burger", "Pasta"];\n\n// Write for...of loop here\n',
        solution: 'const menu = ["Pizza", "Burger", "Pasta"];\nfor (const item of menu) {\n  console.log(item);\n}',
        hints: ['Use the syntax: for (const item of menu)'],
        difficulty: 'intermediate'
      }
    ],
    quiz: [
      {
        question: 'Which loop is best suited for going through items in an Array?',
        options: ['for...in', 'for...of', 'while', 'do...while'],
        correctIndex: 1,
        explanation: 'for...of is designed to safely and easily iterate over iterable values like Arrays.'
      },
      {
        question: 'What does a for...in loop iterate over in an Object?',
        options: ['The values', 'The keys (properties)', 'Both keys and values', 'The object\'s prototype'],
        correctIndex: 1,
        explanation: 'for...in iterates over the property names (keys) of an object.'
      }
    ],
    keyTakeaways: [
      'Use for...of to loop through the VALUES of an Array.',
      'Use for...in to loop through the KEYS of an Object.',
      'These loops make your code cleaner and easier to read than manual counter loops.'
    ],
    tags: ['loops', 'arrays', 'objects', 'iteration']
  }
];
