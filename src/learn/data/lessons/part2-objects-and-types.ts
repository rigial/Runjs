import type { Lesson } from '../../types';

export const part2Lessons: Lesson[] = [
  {
    "title": "Object",
    "description": "As we know from the chapter , there are eight data types in JavaScript. Seven of them are called \"primitive\", because their values contain only a single thing (be it a string or a ...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "As we know from the chapter , there are eight data types in JavaScript. Seven of them are called \"primitive\", because their values contain only a single thing (be it a string or a number or whatever).",
          "In contrast, objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.",
          "An object can be created with curly braces `{\u2026}` with an optional list of *properties*. A property is a \"key: value\" pair, where `key` is a string (also called a \"property name\"), and `value` can be anything.",
          "We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file by the key. It's easy to find a file by its name or add/remove a file.",
          "![](object.svg)"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let user = new Object(); // \"object constructor\" syntax\nlet user = {};  // \"object literal\" syntax",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Literals and properties",
        "paragraphs": [
          "We can immediately put some properties into `{...}` as \"key: value\" pairs:",
          "A property has a key (also known as \"name\" or \"identifier\") before the colon `\":\"` and a value to the right of it.",
          "In the `user` object, there are two properties:",
          "1. The first property has the name `\"name\"` and the value `\"John\"`.",
          "2. The second one has the name `\"age\"` and the value `30`."
        ],
        "codeExamples": [
          {
            "title": "Literals and properties",
            "code": "let user = {     // an object\n  name: \"John\",  // by key \"name\" store value \"John\"\n  age: 30        // by key \"age\" store value 30\n};",
            "explanation": "Example demonstrating literals and properties."
          },
          {
            "title": "Literals and properties",
            "code": "// get property values of the object:\nalert( user.name ); // John\nalert( user.age ); // 30",
            "explanation": "Example demonstrating literals and properties."
          }
        ]
      },
      {
        "heading": "Square brackets",
        "paragraphs": [
          "For multiword properties, the dot access doesn't work:",
          "JavaScript doesn't understand that. It thinks that we address `user.likes`, and then gives a syntax error when comes across unexpected `birds`.",
          "The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn't start with a digit and doesn't include special characters (`$` and `_` are allowed).",
          "There's an alternative \"square bracket notation\" that works with any string:",
          "Now everything is fine. Please note that the string inside the brackets is properly quoted (any type of quotes will do)."
        ],
        "codeExamples": [
          {
            "title": "Square brackets",
            "code": "// this would give a syntax error\nuser.likes birds = true",
            "explanation": "Example demonstrating square brackets."
          },
          {
            "title": "Square brackets",
            "code": "let user = {};\n\n// set\nuser[\"likes birds\"] = true;\n\n// get\nalert(user[\"likes birds\"]); // true\n\n// delete\ndelete user[\"likes birds\"];",
            "explanation": "Example demonstrating square brackets."
          }
        ]
      },
      {
        "heading": "Computed properties",
        "paragraphs": [
          "We can use square brackets in an object literal, when creating an object. That's called *computed properties*.",
          "For instance:",
          "The meaning of a computed property is simple: `[fruit]` means that the property name should be taken from `fruit`.",
          "So, if a visitor enters `\"apple\"`, `bag` will become `{apple: 5}`.",
          "Essentially, that works the same as:"
        ],
        "codeExamples": [
          {
            "title": "Computed properties",
            "code": "let fruit = prompt(\"Which fruit to buy?\", \"apple\");\n\nlet bag = {\n*!*\n  [fruit]: 5, // the name of the property is taken from the variable fruit\n*/!*\n};\n\nalert( bag.apple ); // 5 if fruit=\"apple\"",
            "explanation": "Example demonstrating computed properties."
          },
          {
            "title": "Computed properties",
            "code": "let fruit = prompt(\"Which fruit to buy?\", \"apple\");\nlet bag = {};\n\n// take property name from the fruit variable\nbag[fruit] = 5;",
            "explanation": "Example demonstrating computed properties."
          }
        ]
      },
      {
        "heading": "Property value shorthand",
        "paragraphs": [
          "In real code, we often use existing variables as values for property names.",
          "For instance:",
          "In the example above, properties have the same names as variables. The use-case of making a property from a variable is so common, that there's a special *property value shorthand* to make it shorter.",
          "Instead of `name:name` we can just write `name`, like this:",
          "We can use both normal properties and shorthands in the same object:"
        ],
        "codeExamples": [
          {
            "title": "Property value shorthand",
            "code": "function makeUser(name, age) {\n  return {\n    name: name,\n    age: age,\n    // ...other properties\n  };\n}\n\nlet user = makeUser(\"John\", 30);\nalert(user.name); // John",
            "explanation": "Example demonstrating property value shorthand."
          },
          {
            "title": "Property value shorthand",
            "code": "function makeUser(name, age) {\n*!*\n  return {\n    name, // same as name: name\n    age,  // same as age: age\n    // ...\n  };\n*/!*\n}",
            "explanation": "Example demonstrating property value shorthand."
          }
        ]
      },
      {
        "heading": "Property names limitations",
        "paragraphs": [
          "As we already know, a variable cannot have a name equal to one of the language-reserved words like \"for\", \"let\", \"return\" etc.",
          "But for an object property, there's no such restriction:",
          "In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).",
          "Other types are automatically converted to strings.",
          "For instance, a number `0` becomes a string `\"0\"` when used as a property key:"
        ],
        "codeExamples": [
          {
            "title": "Property names limitations",
            "code": "// these properties are all right\nlet obj = {\n  for: 1,\n  let: 2,\n  return: 3\n};\n\nalert( obj.for + obj.let + obj.return );  // 6",
            "explanation": "Example demonstrating property names limitations."
          },
          {
            "title": "Property names limitations",
            "code": "let obj = {\n  0: \"test\" // same as \"0\": \"test\"\n};\n\n// both alerts access the same property (the number 0 is converted to string \"0\")\nalert( obj[\"0\"] ); // test\nalert( obj[0] ); // test (same property)",
            "explanation": "Example demonstrating property names limitations."
          }
        ]
      },
      {
        "heading": "Property existence test, \"in\" operator",
        "paragraphs": [
          "A notable feature of objects in JavaScript, compared to many other languages, is that it's possible to access any property. There will be no error if the property doesn't exist!",
          "Reading a non-existing property just returns `undefined`. So we can easily test whether the property exists:",
          "There's also a special operator `\"in\"` for that.",
          "The syntax is:",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Property existence test, \"in\" operator",
            "code": "let user = {};\n\nalert( user.noSuchProperty === undefined ); // true means \"no such property\"",
            "explanation": "Example demonstrating property existence test, \"in\" operator."
          },
          {
            "title": "Property existence test, \"in\" operator",
            "code": "\"key\" in object",
            "explanation": "Example demonstrating property existence test, \"in\" operator."
          }
        ]
      },
      {
        "heading": "The \"for..in\" loop [#forin]",
        "paragraphs": [
          "To walk over all keys of an object, there exists a special form of the loop: `for..in`. This is a completely different thing from the `for(;;)` construct that we studied before.",
          "The syntax:",
          "For instance, let's output all properties of `user`:",
          "Note that all \"for\" constructs allow us to declare the looping variable inside the loop, like `let key` here.",
          "Also, we could use another variable name here instead of `key`. For instance, `\"for (let prop in obj)\"` is also widely used."
        ],
        "codeExamples": [
          {
            "title": "The \"for..in\" loop [#forin]",
            "code": "for (key in object) {\n  // executes the body for each key among object properties\n}",
            "explanation": "Example demonstrating the \"for..in\" loop [#forin]."
          },
          {
            "title": "The \"for..in\" loop [#forin]",
            "code": "let user = {\n  name: \"John\",\n  age: 30,\n  isAdmin: true\n};\n\nfor (let key in user) {\n  // keys\n  alert( key );  // name, age, isAdmin\n  // values for the keys\n  alert( user[key] ); // John, 30, true\n}",
            "explanation": "Example demonstrating the \"for..in\" loop [#forin]."
          }
        ]
      },
      {
        "heading": "Ordered like an object",
        "paragraphs": [
          "Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?",
          "The short answer is: \"ordered in a special fashion\": integer properties are sorted, others appear in creation order. The details follow.",
          "As an example, let's consider an object with the phone codes:",
          "The object may be used to suggest a list of options to the user. If we're making a site mainly for a German audience then we probably want `49` to be the first.",
          "But if we run the code, we see a totally different picture:"
        ],
        "codeExamples": [
          {
            "title": "Ordered like an object",
            "code": "let codes = {\n  \"49\": \"Germany\",\n  \"41\": \"Switzerland\",\n  \"44\": \"Great Britain\",\n  // ..,\n  \"1\": \"USA\"\n};\n\n*!*\nfor (let code in codes) {\n  alert(code); // 1, 41, 44, 49\n}\n*/!*",
            "explanation": "Example demonstrating ordered like an object."
          },
          {
            "title": "Ordered like an object",
            "code": "The \"integer property\" term here means a string that can be converted to-and-from an integer without a change.\n\nSo, `\"49\"` is an integer property name, because when it's transformed to an integer number and back, it's still the same. But `\"+49\"` and `\"1.2\"` are not:",
            "explanation": "Example demonstrating ordered like an object."
          }
        ],
        "bulletPoints": [
          "USA (1) goes first",
          "then Switzerland (41) and so on."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Objects are associative arrays with several special features.",
          "They store properties (key-value pairs), where:",
          "To access a property, we can use:",
          "Additional operators:",
          "What we've studied in this chapter is called a \"plain object\", or just `Object`."
        ],
        "bulletPoints": [
          "Property keys must be strings or symbols (usually strings).",
          "Values can be of any type.",
          "The dot notation: `obj.property`.",
          "Square brackets notation `obj[\"property\"]`. Square brackets allow taking the key from a variable, like `obj[varWithKey]`.",
          "To delete a property: `delete obj.prop`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Hello, object",
        "description": "Write the code, one line for each action: 1. Create an empty object `user`. 2. Add the property `name` with the value `John`. 3. Add the property `surname` with the value `Smith`. 4. Change the value of the `name` to `Pete`. 5. Remove the property `name` from the object.",
        "starterCode": "// Write your code here\n",
        "solution": "let user = {};\nuser.name = \"John\";\nuser.surname = \"Smith\";\nuser.name = \"Pete\";\ndelete user.name;",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Check for emptiness",
        "description": "Write the function `isEmpty(obj)` which returns `true` if the object has no properties, `false` otherwise. Should work like that: ```js let schedule = {}; alert( isEmpty(schedule) ); // true schedule[\"8:30\"] = \"get up\"; alert( isEmpty(schedule) ); // false ```",
        "starterCode": "let schedule = {};\n\nalert( isEmpty(schedule) ); // true\n\nschedule[\"8:30\"] = \"get up\";\n\nalert( isEmpty(schedule) ); // false",
        "solution": "let schedule = {};\n\nalert( isEmpty(schedule) ); // true\n\nschedule[\"8:30\"] = \"get up\";\n\nalert( isEmpty(schedule) ); // false",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Sum object properties",
        "description": "We have an object storing salaries of our team: ```js let salaries = { John: 100, Ann: 160, Pete: 130 } ``` Write the code to sum all salaries and store in the variable `sum`. Should be `390` in the example above. If `salaries` is empty, then the result must be `0`.",
        "starterCode": "let salaries = {\n  John: 100,\n  Ann: 160,\n  Pete: 130\n}",
        "solution": "let salaries = {\n  John: 100,\n  Ann: 160,\n  Pete: 130\n}",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Object in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for object.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Object is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Object?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Object is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying object.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "object"
    ],
    "slug": "object"
  },
  {
    "title": "Object Copy",
    "description": "One of the fundamental differences of objects versus primitives is that objects are stored and copied \"by reference\", whereas primitive values: strings, numbers, booleans, etc -- a...",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "One of the fundamental differences of objects versus primitives is that objects are stored and copied \"by reference\", whereas primitive values: strings, numbers, booleans, etc -- are always copied \"as a whole value\".",
          "That's easy to understand if we look a bit under the hood of what happens when we copy a value.",
          "Let's start with a primitive, such as a string.",
          "Here we put a copy of `message` into `phrase`:",
          "As a result we have two independent variables, each one storing the string `\"Hello!\"`."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let message = \"Hello!\";\nlet phrase = message;",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let user = {\n  name: \"John\"\n};",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Comparison by reference",
        "paragraphs": [
          "Two objects are equal only if they are the same object.",
          "For instance, here `a` and `b` reference the same object, thus they are equal:",
          "And here two independent objects are not equal, even though they look alike (both are empty):",
          "For comparisons like `obj1 > obj2` or for a comparison against a primitive `obj == 5`, objects are converted to primitives. We'll study how object conversions work very soon, but to tell the truth, such comparisons are needed very rarely -- usually they appear as a result of a programming mistake.",
          "const user = {"
        ],
        "codeExamples": [
          {
            "title": "Comparison by reference",
            "code": "let a = {};\nlet b = a; // copy the reference\n\nalert( a == b ); // true, both variables reference the same object\nalert( a === b ); // true",
            "explanation": "Example demonstrating comparison by reference."
          },
          {
            "title": "Comparison by reference",
            "code": "let a = {};\nlet b = {}; // two independent objects\n\nalert( a == b ); // false",
            "explanation": "Example demonstrating comparison by reference."
          }
        ]
      },
      {
        "heading": "Cloning and merging, Object.assign [#cloning-and-merging-object-assign]",
        "paragraphs": [
          "So, copying an object variable creates one more reference to the same object.",
          "But what if we need to duplicate an object?",
          "We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.",
          "Like this:",
          "We can also use the method Object.assign."
        ],
        "codeExamples": [
          {
            "title": "Cloning and merging, Object.assign [#cloning-and-merging-object-assign]",
            "code": "let user = {\n  name: \"John\",\n  age: 30\n};\n\n*!*\nlet clone = {}; // the new empty object\n\n// let's copy all user properties into it\nfor (let key in user) {\n  clone[key] = user[key];\n}\n*/!*\n\n// now clone is a fully independent object with the same content\nclone.name = \"Pete\"; // changed the data in it\n\nalert( user.name ); // still John in the original object",
            "explanation": "Example demonstrating cloning and merging, object.assign [#cloning-and-merging-object-assign]."
          },
          {
            "title": "Cloning and merging, Object.assign [#cloning-and-merging-object-assign]",
            "code": "Object.assign(dest, ...sources)",
            "explanation": "Example demonstrating cloning and merging, object.assign [#cloning-and-merging-object-assign]."
          }
        ],
        "bulletPoints": [
          "The first argument `dest` is a target object.",
          "Further arguments is a list of source objects."
        ]
      },
      {
        "heading": "Nested cloning",
        "paragraphs": [
          "Until now we assumed that all properties of `user` are primitive. But properties can be references to other objects.",
          "Like this:",
          "Now it's not enough to copy `clone.sizes = user.sizes`, because `user.sizes` is an object, and will be copied by reference, so `clone` and `user` will share the same sizes:",
          "To fix that and make `user` and `clone` truly separate objects, we should use a cloning loop that examines each value of `user[key]` and, if it's an object, then replicate its structure as well. That is called a \"deep cloning\" or \"structured cloning\". There's structuredClone method that implements deep cloning."
        ],
        "codeExamples": [
          {
            "title": "Nested cloning",
            "code": "let user = {\n  name: \"John\",\n  sizes: {\n    height: 182,\n    width: 50\n  }\n};\n\nalert( user.sizes.height ); // 182",
            "explanation": "Example demonstrating nested cloning."
          },
          {
            "title": "Nested cloning",
            "code": "let user = {\n  name: \"John\",\n  sizes: {\n    height: 182,\n    width: 50\n  }\n};\n\nlet clone = Object.assign({}, user);\n\nalert( user.sizes === clone.sizes ); // true, same object\n\n// user and clone share sizes\nuser.sizes.width = 60;    // change a property from one place\nalert(clone.sizes.width); // 60, get the result from the other one",
            "explanation": "Example demonstrating nested cloning."
          }
        ]
      },
      {
        "heading": "structuredClone",
        "paragraphs": [
          "The call `structuredClone(object)` clones the `object` with all nested properties.",
          "Here's how we can use it in our example:",
          "The `structuredClone` method can clone most data types, such as objects, arrays, primitive values.",
          "It also supports circular references, when an object property references the object itself (directly or via a chain or references).",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "structuredClone",
            "code": "let user = {\n  name: \"John\",\n  sizes: {\n    height: 182,\n    width: 50\n  }\n};\n\n*!*\nlet clone = structuredClone(user);\n*/!*\n\nalert( user.sizes === clone.sizes ); // false, different objects\n\n// user and clone are totally unrelated now\nuser.sizes.width = 60;    // change a property from one place\nalert(clone.sizes.width); // 50, not related",
            "explanation": "Example demonstrating structuredclone."
          },
          {
            "title": "structuredClone",
            "code": "let user = {};\n// let's create a circular reference:\n// user.me references the user itself\nuser.me = user;\n\nlet clone = structuredClone(user);\nalert(clone.me === clone); // true",
            "explanation": "Example demonstrating structuredclone."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Objects are assigned and copied by reference. In other words, a variable stores not the \"object value\", but a \"reference\" (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.",
          "All operations via copied references (like adding/removing properties) are performed on the same single object.",
          "To make a \"real copy\" (a clone) we can use `Object.assign` for the so-called \"shallow copy\" (nested objects are copied by reference) or a \"deep cloning\" function `structuredClone` or use a custom cloning implementation, such as _.cloneDeep(obj)."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Object Copy",
        "description": "Apply your understanding of Object Copy. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Object Copy\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Object Copy\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Object Copy in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for object copy.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Object Copy is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Object Copy?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Object Copy is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying object copy.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "object-copy"
    ],
    "slug": "object-copy"
  },
  {
    "title": "Garbage Collection",
    "description": "Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions... All that takes memory.",
    "difficulty": "intermediate",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions... All that takes memory.",
          "What happens when something is not needed any more? How does the JavaScript engine discover it and clean it up?"
        ]
      },
      {
        "heading": "Reachability",
        "paragraphs": [
          "The main concept of memory management in JavaScript is *reachability*.",
          "Simply put, \"reachable\" values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.",
          "1. There's a base set of inherently reachable values, that cannot be deleted for obvious reasons.",
          "For instance:",
          "These values are called *roots*."
        ],
        "bulletPoints": [
          "The currently executing function, its local variables and parameters.",
          "Other functions on the current chain of nested calls, their local variables and parameters.",
          "Global variables.",
          "(there are some other, internal ones as well)"
        ]
      },
      {
        "heading": "A simple example",
        "paragraphs": [
          "Here's the simplest example:",
          "![](memory-user-john.svg)",
          "Here the arrow depicts an object reference. The global variable `\"user\"` references the object `{name: \"John\"}` (we'll call it John for brevity). The `\"name\"` property of John stores a primitive, so it's painted inside the object.",
          "If the value of `user` is overwritten, the reference is lost:",
          "![](memory-user-john-lost.svg)"
        ],
        "codeExamples": [
          {
            "title": "A simple example",
            "code": "// user has a reference to the object\nlet user = {\n  name: \"John\"\n};",
            "explanation": "Example demonstrating a simple example."
          },
          {
            "title": "A simple example",
            "code": "user = null;",
            "explanation": "Example demonstrating a simple example."
          }
        ]
      },
      {
        "heading": "Two references",
        "paragraphs": [
          "Now let's imagine we copied the reference from `user` to `admin`:",
          "![](memory-user-john-admin.svg)",
          "Now if we do the same:",
          "...Then the object is still reachable via `admin` global variable, so it must stay in memory. If we overwrite `admin` too, then it can be removed."
        ],
        "codeExamples": [
          {
            "title": "Two references",
            "code": "// user has a reference to the object\nlet user = {\n  name: \"John\"\n};\n\n*!*\nlet admin = user;\n*/!*",
            "explanation": "Example demonstrating two references."
          },
          {
            "title": "Two references",
            "code": "user = null;",
            "explanation": "Example demonstrating two references."
          }
        ]
      },
      {
        "heading": "Interlinked objects",
        "paragraphs": [
          "Now a more complex example. The family:",
          "Function `marry` \"marries\" two objects by giving them references to each other and returns a new object that contains them both.",
          "The resulting memory structure:",
          "![](family.svg)",
          "As of now, all objects are reachable."
        ],
        "codeExamples": [
          {
            "title": "Interlinked objects",
            "code": "function marry(man, woman) {\n  woman.husband = man;\n  man.wife = woman;\n\n  return {\n    father: man,\n    mother: woman\n  }\n}\n\nlet family = marry({\n  name: \"John\"\n}, {\n  name: \"Ann\"\n});",
            "explanation": "Example demonstrating interlinked objects."
          },
          {
            "title": "Interlinked objects",
            "code": "delete family.father;\ndelete family.mother.husband;",
            "explanation": "Example demonstrating interlinked objects."
          }
        ]
      },
      {
        "heading": "Unreachable island",
        "paragraphs": [
          "It is possible that the whole island of interlinked objects becomes unreachable and is removed from the memory.",
          "The source object is the same as above. Then:",
          "The in-memory picture becomes:",
          "![](family-no-family.svg)",
          "This example demonstrates how important the concept of reachability is."
        ],
        "codeExamples": [
          {
            "title": "Unreachable island",
            "code": "family = null;",
            "explanation": "Example demonstrating unreachable island."
          }
        ]
      },
      {
        "heading": "Internal algorithms",
        "paragraphs": [
          "The basic garbage collection algorithm is called \"mark-and-sweep\".",
          "The following \"garbage collection\" steps are regularly performed:",
          "For instance, let our object structure look like this:",
          "![](garbage-collection-1.svg)",
          "We can clearly see an \"unreachable island\" to the right side. Now let's see how \"mark-and-sweep\" garbage collector deals with it."
        ],
        "bulletPoints": [
          "The garbage collector takes roots and \"marks\" (remembers) them.",
          "Then it visits and \"marks\" all references from them.",
          "Then it visits marked objects and marks *their* references. All visited objects are remembered, so as not to visit the same object twice in the future.",
          "...And so on until every reachable (from the roots) references are visited.",
          "All objects except marked ones are removed."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "The main things to know:",
          "Modern engines implement advanced algorithms of garbage collection.",
          "A general book \"The Garbage Collection Handbook: The Art of Automatic Memory Management\" (R. Jones et al) covers some of them.",
          "If you are familiar with low-level programming, more detailed information about V8's garbage collector is in the article A tour of V8: Garbage Collection.",
          "The V8 blog also publishes articles about changes in memory management from time to time. Naturally, to learn more about garbage collection, you'd better prepare by learning about V8 internals in general and read the blog of Vyacheslav Egorov who worked as one of the V8 engineers. I'm saying: \"V8\", because it is best covered by articles on the internet. For other engines, many approaches are similar, but garbage collection differs in many aspects."
        ],
        "bulletPoints": [
          "Garbage collection is performed automatically. We cannot force or prevent it.",
          "Objects are retained in memory while they are reachable.",
          "Being referenced is not the same as being reachable (from a root): a pack of interlinked objects can become unreachable as a whole, as we've seen in the example above."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Garbage Collection",
        "description": "Apply your understanding of Garbage Collection. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Garbage Collection\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Garbage Collection\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Garbage Collection in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for garbage collection.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Garbage Collection is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Garbage Collection?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Garbage Collection is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying garbage collection.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "garbage-collection"
    ],
    "slug": "garbage-collection"
  },
  {
    "title": "Object Methods",
    "description": "Objects are usually created to represent entities of the real world, like users, orders and so on:",
    "difficulty": "intermediate",
    "readingTime": 8,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Objects are usually created to represent entities of the real world, like users, orders and so on:",
          "And, in the real world, a user can *act*: select something from the shopping cart, login, logout etc.",
          "Actions are represented in JavaScript by functions in properties."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let user = {\n  name: \"John\",\n  age: 30\n};",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Method examples",
        "paragraphs": [
          "For a start, let's teach the `user` to say hello:",
          "Here we've just used a Function Expression to create a function and assign it to the property `user.sayHi` of the object.",
          "Then we can call it as `user.sayHi()`. The user can now speak!",
          "A function that is a property of an object is called its *method*.",
          "So, here we've got a method `sayHi` of the object `user`."
        ],
        "codeExamples": [
          {
            "title": "Method examples",
            "code": "let user = {\n  name: \"John\",\n  age: 30\n};\n\n*!*\nuser.sayHi = function() {\n  alert(\"Hello!\");\n};\n*/!*\n\nuser.sayHi(); // Hello!",
            "explanation": "Example demonstrating method examples."
          },
          {
            "title": "Method examples",
            "code": "let user = {\n  // ...\n};\n\n*!*\n// first, declare\nfunction sayHi() {\n  alert(\"Hello!\");\n}\n\n// then add as a method\nuser.sayHi = sayHi;\n*/!*\n\nuser.sayHi(); // Hello!",
            "explanation": "Example demonstrating method examples."
          }
        ]
      },
      {
        "heading": "Method shorthand",
        "paragraphs": [
          "There exists a shorter syntax for methods in an object literal:",
          "As demonstrated, we can omit `\"function\"` and just write `sayHi()`.",
          "To tell the truth, the notations are not fully identical. There are subtle differences related to object inheritance (to be covered later), but for now they do not matter. In almost all cases, the shorter syntax is preferred."
        ],
        "codeExamples": [
          {
            "title": "Method shorthand",
            "code": "// these objects do the same\n\nuser = {\n  sayHi: function() {\n    alert(\"Hello\");\n  }\n};\n\n// method shorthand looks better, right?\nuser = {\n*!*\n  sayHi() { // same as \"sayHi: function(){...}\"\n*/!*\n    alert(\"Hello\");\n  }\n};",
            "explanation": "Example demonstrating method shorthand."
          }
        ]
      },
      {
        "heading": "\"this\" in methods",
        "paragraphs": [
          "It's common that an object method needs to access the information stored in the object to do its job.",
          "For instance, the code inside `user.sayHi()` may need the name of the `user`.",
          "**To access the object, a method can use the `this` keyword.**",
          "The value of `this` is the object \"before dot\", the one used to call the method.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "\"this\" in methods",
            "code": "let user = {\n  name: \"John\",\n  age: 30,\n\n  sayHi() {\n*!*\n    // \"this\" is the \"current object\"\n    alert(this.name);\n*/!*\n  }\n\n};\n\nuser.sayHi(); // John",
            "explanation": "Example demonstrating \"this\" in methods."
          },
          {
            "title": "\"this\" in methods",
            "code": "let user = {\n  name: \"John\",\n  age: 30,\n\n  sayHi() {\n*!*\n    alert(user.name); // \"user\" instead of \"this\"\n*/!*\n  }\n\n};",
            "explanation": "Example demonstrating \"this\" in methods."
          }
        ]
      },
      {
        "heading": "\"this\" is not bound",
        "paragraphs": [
          "In JavaScript, keyword `this` behaves unlike most other programming languages. It can be used in any function, even if it's not a method of an object.",
          "There's no syntax error in the following example:",
          "The value of `this` is evaluated during the run-time, depending on the context.",
          "For instance, here the same function is assigned to two different objects and has different \"this\" in the calls:",
          "The rule is simple: if `obj.f()` is called, then `this` is `obj` during the call of `f`. So it's either `user` or `admin` in the example above."
        ],
        "codeExamples": [
          {
            "title": "\"this\" is not bound",
            "code": "function sayHi() {\n  alert( *!*this*/!*.name );\n}",
            "explanation": "Example demonstrating \"this\" is not bound."
          },
          {
            "title": "\"this\" is not bound",
            "code": "let user = { name: \"John\" };\nlet admin = { name: \"Admin\" };\n\nfunction sayHi() {\n  alert( this.name );\n}\n\n*!*\n// use the same function in two objects\nuser.f = sayHi;\nadmin.f = sayHi;\n*/!*\n\n// these calls have different this\n// \"this\" inside the function is the object \"before the dot\"\nuser.f(); // John  (this == user)\nadmin.f(); // Admin  (this == admin)\n\nadmin['f'](); // Admin (dot or square brackets access the method \u2013 doesn't matter)",
            "explanation": "Example demonstrating \"this\" is not bound."
          }
        ]
      },
      {
        "heading": "Arrow functions have no \"this\"",
        "paragraphs": [
          "Arrow functions are special: they don't have their \"own\" `this`. If we reference `this` from such a function, it's taken from the outer \"normal\" function.",
          "For instance, here `arrow()` uses `this` from the outer `user.sayHi()` method:",
          "That's a special feature of arrow functions, it's useful when we actually do not want to have a separate `this`, but rather to take it from the outer context. Later in the chapter we'll go more deeply into arrow functions."
        ],
        "codeExamples": [
          {
            "title": "Arrow functions have no \"this\"",
            "code": "let user = {\n  firstName: \"Ilya\",\n  sayHi() {\n    let arrow = () => alert(this.firstName);\n    arrow();\n  }\n};\n\nuser.sayHi(); // Ilya",
            "explanation": "Example demonstrating arrow functions have no \"this\"."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "The value of `this` is defined at run-time.",
          "Please note that arrow functions are special: they have no `this`. When `this` is accessed inside an arrow function, it is taken from outside."
        ],
        "bulletPoints": [
          "Functions that are stored in object properties are called \"methods\".",
          "Methods allow objects to \"act\" like `object.doSomething()`.",
          "Methods can reference the object as `this`.",
          "When a function is declared, it may use `this`, but that `this` has no value until the function is called.",
          "A function can be copied between objects."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Using \"this\" in object literal",
        "description": "Here the function `makeUser` returns an object. What is the result of accessing its `ref`? Why? ```js function makeUser() { return { name: \"John\", ref: this }; } let user = makeUser(); alert( user.ref.name ); // What's the result? ```",
        "starterCode": "function makeUser() {\n  return {\n    name: \"John\",\n    ref: this\n  };\n}\n\nlet user = makeUser();\n\nalert( user.ref.name ); // What's the result?",
        "solution": "That's because rules that set `this` do not look at object definition. Only the moment of call matters.\n\nHere the value of `this` inside `makeUser()` is `undefined`, because it is called as a function, not as a method with \"dot\" syntax.\n\nThe value of `this` is one for the whole function, code blocks and object literals do not affect it.\n\nSo `ref: this` actually takes current `this` of the function.\n\nWe can rewrite the function and return the same `this` with `undefined` value:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Create a calculator",
        "description": "Create an object `calculator` with three methods: - `read()` prompts for two values and saves them as object properties with names `a` and `b` respectively. - `sum()` returns the sum of saved values. - `mul()` multiplies saved values and returns the result. ```js let calculator = { // ... your code ",
        "starterCode": "let calculator = {\n  // ... your code ...\n};\n\ncalculator.read();\nalert( calculator.sum() );\nalert( calculator.mul() );",
        "solution": "let calculator = {\n  // ... your code ...\n};\n\ncalculator.read();\nalert( calculator.sum() );\nalert( calculator.mul() );",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Chaining",
        "description": "There's a `ladder` object that allows you to go up and down: ```js let ladder = { step: 0, up() { this.step++; }, down() { this.step--; }, showStep: function() { // shows the current step alert( this.step ); } }; ``` Now, if we need to make several calls in sequence, we can do it like this: ```js la",
        "starterCode": "let ladder = {\n  step: 0,\n  up() { \n    this.step++;\n  },\n  down() { \n    this.step--;\n  },\n  showStep: function() { // shows the current step\n    alert( this.step );\n  }\n};",
        "solution": "We also can write a single call per line. For long chains it's more readable:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Object Methods in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for object methods.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Object Methods is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Object Methods?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Object Methods is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying object methods.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "object-methods"
    ],
    "slug": "object-methods"
  },
  {
    "title": "Constructor New",
    "description": "The regular `{...}` syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.",
    "difficulty": "intermediate",
    "readingTime": 7,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The regular `{...}` syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.",
          "That can be done using constructor functions and the `\"new\"` operator."
        ]
      },
      {
        "heading": "Constructor function",
        "paragraphs": [
          "Constructor functions technically are regular functions. There are two conventions though:",
          "1. They are named with capital letter first.",
          "2. They should be executed only with `\"new\"` operator.",
          "For instance:",
          "When a function is executed with `new`, it does the following steps:"
        ],
        "codeExamples": [
          {
            "title": "Constructor function",
            "code": "function User(name) {\n  this.name = name;\n  this.isAdmin = false;\n}\n\n*!*\nlet user = new User(\"Jack\");\n*/!*\n\nalert(user.name); // Jack\nalert(user.isAdmin); // false",
            "explanation": "Example demonstrating constructor function."
          },
          {
            "title": "Constructor function",
            "code": "function User(name) {\n*!*\n  // this = {};  (implicitly)\n*/!*\n\n  // add properties to this\n  this.name = name;\n  this.isAdmin = false;\n\n*!*\n  // return this;  (implicitly)\n*/!*\n}",
            "explanation": "Example demonstrating constructor function."
          }
        ]
      },
      {
        "heading": "Constructor mode test: new.target",
        "paragraphs": [
          "Inside a function, we can check whether it was called with `new` or without it, using a special `new.target` property.",
          "It is undefined for regular calls and equals the function if called with `new`:",
          "That can be used inside the function to know whether it was called with `new`, \"in constructor mode\", or without it, \"in regular mode\".",
          "We can also make both `new` and regular calls to do the same, like this:",
          "This approach is sometimes used in libraries to make the syntax more flexible. So that people may call the function with or without `new`, and it still works."
        ],
        "codeExamples": [
          {
            "title": "Constructor mode test: new.target",
            "code": "The syntax from this section is rarely used, skip it unless you want to know everything.",
            "explanation": "Example demonstrating constructor mode test: new.target."
          },
          {
            "title": "Constructor mode test: new.target",
            "code": "function User() {\n  alert(new.target);\n}\n\n// without \"new\":\n*!*\nUser(); // undefined\n*/!*\n\n// with \"new\":\n*!*\nnew User(); // function User { ... }\n*/!*",
            "explanation": "Example demonstrating constructor mode test: new.target."
          }
        ]
      },
      {
        "heading": "Return from constructors",
        "paragraphs": [
          "Usually, constructors do not have a `return` statement. Their task is to write all necessary stuff into `this`, and it automatically becomes the result.",
          "But if there is a `return` statement, then the rule is simple:",
          "In other words, `return` with an object returns that object, in all other cases `this` is returned.",
          "For instance, here `return` overrides `this` by returning an object:",
          "And here's an example with an empty `return` (or we could place a primitive after it, doesn't matter):"
        ],
        "codeExamples": [
          {
            "title": "Return from constructors",
            "code": "function BigUser() {\n\n  this.name = \"John\";\n\n  return { name: \"Godzilla\" };  // <-- returns this object\n}\n\nalert( new BigUser().name );  // Godzilla, got that object",
            "explanation": "Example demonstrating return from constructors."
          },
          {
            "title": "Return from constructors",
            "code": "function SmallUser() {\n\n  this.name = \"John\";\n\n  return; // <-- returns this\n}\n\nalert( new SmallUser().name );  // John",
            "explanation": "Example demonstrating return from constructors."
          }
        ],
        "bulletPoints": [
          "If `return` is called with an object, then the object is returned instead of `this`.",
          "If `return` is called with a primitive, it's ignored."
        ]
      },
      {
        "heading": "Methods in constructor",
        "paragraphs": [
          "Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.",
          "Of course, we can add to `this` not only properties, but methods as well.",
          "For instance, `new User(name)` below creates an object with the given `name` and the method `sayHi`:",
          "To create complex objects, there's a more advanced syntax, classes, that we'll cover later."
        ],
        "codeExamples": [
          {
            "title": "Methods in constructor",
            "code": "function User(name) {\n  this.name = name;\n\n  this.sayHi = function() {\n    alert( \"My name is: \" + this.name );\n  };\n}\n\n*!*\nlet john = new User(\"John\");\n\njohn.sayHi(); // My name is: John\n*/!*\n\n/*\njohn = {\n   name: \"John\",\n   sayHi: function() { ... }\n}\n*/",
            "explanation": "Example demonstrating methods in constructor."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "We can use constructor functions to make multiple similar objects.",
          "JavaScript provides constructor functions for many built-in language objects: like `Date` for dates, `Set` for sets and others that we plan to study."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "In this chapter we only cover the basics about objects and constructors. They are essential for learning more about data types and functions in the next chapters.\n\nAfter we learn that, we return to objects and cover them in-depth in the chapters <info:prototypes> and <info:classes>.",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "Constructor functions or, briefly, constructors, are regular functions, but there's a common agreement to name them with capital letter first.",
          "Constructor functions should only be called using `new`. Such a call implies a creation of empty `this` at the start and returning the populated one at the end."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Two functions \u2013 one object",
        "description": "Is it possible to create functions `A` and `B` so that `new A() == new B()`? ```js no-beautify function A() { ... } function B() { ... } let a = new A(); let b = new B(); alert( a == b ); // true ``` If it is, then provide an example of their code.",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Create new Calculator",
        "description": "Create a constructor function `Calculator` that creates objects with 3 methods: - `read()` prompts for two values and saves them as object properties with names `a` and `b` respectively. - `sum()` returns the sum of these properties. - `mul()` returns the multiplication product of these properties. ",
        "starterCode": "let calculator = new Calculator();\ncalculator.read();\n\nalert( \"Sum=\" + calculator.sum() );\nalert( \"Mul=\" + calculator.mul() );",
        "solution": "let calculator = new Calculator();\ncalculator.read();\n\nalert( \"Sum=\" + calculator.sum() );\nalert( \"Mul=\" + calculator.mul() );",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Create new Accumulator",
        "description": "Create a constructor function `Accumulator(startingValue)`. Object that it creates should: - Store the \"current value\" in the property `value`. The starting value is set to the argument of the constructor `startingValue`. - The `read()` method should use `prompt` to read a new number and add it to `",
        "starterCode": "let accumulator = new Accumulator(1); // initial value 1\n\naccumulator.read(); // adds the user-entered value\naccumulator.read(); // adds the user-entered value\n\nalert(accumulator.value); // shows the sum of these values",
        "solution": "let accumulator = new Accumulator(1); // initial value 1\n\naccumulator.read(); // adds the user-entered value\naccumulator.read(); // adds the user-entered value\n\nalert(accumulator.value); // shows the sum of these values",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Constructor New in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for constructor new.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Constructor New is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Constructor New?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Constructor New is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying constructor new.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "constructor-new"
    ],
    "slug": "constructor-new"
  },
  {
    "title": "Optional Chaining",
    "description": "[recent browser=\"new\"]",
    "difficulty": "intermediate",
    "readingTime": 9,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "[recent browser=\"new\"]",
          "The optional chaining `?.` is a safe way to access nested object properties, even if an intermediate property doesn't exist."
        ]
      },
      {
        "heading": "The \"non-existing property\" problem",
        "paragraphs": [
          "If you've just started to read the tutorial and learn JavaScript, maybe the problem hasn't touched you yet, but it's quite common.",
          "As an example, let's say we have `user` objects that hold the information about our users.",
          "Most of our users have addresses in `user.address` property, with the street `user.address.street`, but some did not provide them.",
          "In such case, when we attempt to get `user.address.street`, and the user happens to be without an address, we get an error:",
          "That's the expected result. JavaScript works like this. As `user.address` is `undefined`, an attempt to get `user.address.street` fails with an error."
        ],
        "codeExamples": [
          {
            "title": "The \"non-existing property\" problem",
            "code": "let user = {}; // a user without \"address\" property\n\nalert(user.address.street); // Error!",
            "explanation": "Example demonstrating the \"non-existing property\" problem."
          },
          {
            "title": "The \"non-existing property\" problem",
            "code": "// document.querySelector('.elem') is null if there's no element\nlet html = document.querySelector('.elem').innerHTML; // error if it's null",
            "explanation": "Example demonstrating the \"non-existing property\" problem."
          }
        ]
      },
      {
        "heading": "Optional chaining",
        "paragraphs": [
          "The optional chaining `?.` stops the evaluation if the value before `?.` is `undefined` or `null` and returns `undefined`.",
          "**Further in this article, for brevity, we'll be saying that something \"exists\" if it's not `null` and not `undefined`.**",
          "In other words, `value?.prop`:",
          "Here's the safe way to access `user.address.street` using `?.`:",
          "The code is short and clean, there's no duplication at all."
        ],
        "codeExamples": [
          {
            "title": "Optional chaining",
            "code": "let user = {}; // user has no address\n\nalert( user?.address?.street ); // undefined (no error)",
            "explanation": "Example demonstrating optional chaining."
          },
          {
            "title": "Optional chaining",
            "code": "let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element",
            "explanation": "Example demonstrating optional chaining."
          }
        ],
        "bulletPoints": [
          "works as `value.prop`, if `value` exists,",
          "otherwise (when `value` is `undefined/null`) it returns `undefined`."
        ]
      },
      {
        "heading": "Short-circuiting",
        "paragraphs": [
          "As it was said before, the `?.` immediately stops (\"short-circuits\") the evaluation if the left part doesn't exist.",
          "So, if there are any further function calls or operations to the right of `?.`, they won't be made.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Short-circuiting",
            "code": "let user = null;\nlet x = 0;\n\nuser?.sayHi(x++); // no \"user\", so the execution doesn't reach sayHi call and x++\n\nalert(x); // 0, value not incremented",
            "explanation": "Example demonstrating short-circuiting."
          }
        ]
      },
      {
        "heading": "Other variants: ?.(), ?.[]",
        "paragraphs": [
          "The optional chaining `?.` is not an operator, but a special syntax construct, that also works with functions and square brackets.",
          "For example, `?.()` is used to call a function that may not exist.",
          "In the code below, some of our users have `admin` method, and some don't:",
          "Here, in both lines we first use the dot (`userAdmin.admin`) to get `admin` property, because we assume that the `user` object exists, so it's safe read from it.",
          "Then `?.()` checks the left part: if the `admin` function exists, then it runs (that's so for `userAdmin`). Otherwise (for `userGuest`) the evaluation stops without errors."
        ],
        "codeExamples": [
          {
            "title": "Other variants: ?.(), ?.[]",
            "code": "let userAdmin = {\n  admin() {\n    alert(\"I am admin\");\n  }\n};\n\nlet userGuest = {};\n\n*!*\nuserAdmin.admin?.(); // I am admin\n*/!*\n\n*!*\nuserGuest.admin?.(); // nothing happens (no such method)\n*/!*",
            "explanation": "Example demonstrating other variants: ?.(), ?.[]."
          },
          {
            "title": "Other variants: ?.(), ?.[]",
            "code": "let key = \"firstName\";\n\nlet user1 = {\n  firstName: \"John\"\n};\n\nlet user2 = null;\n\nalert( user1?.[key] ); // John\nalert( user2?.[key] ); // undefined",
            "explanation": "Example demonstrating other variants: ?.(), ?.[]."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "The optional chaining `?.` syntax has three forms:",
          "1. `obj?.prop` -- returns `obj.prop` if `obj` exists, otherwise `undefined`.",
          "2. `obj?.[prop]` -- returns `obj[prop]` if `obj` exists, otherwise `undefined`.",
          "3. `obj.method?.()` -- calls `obj.method()` if `obj.method` exists, otherwise returns `undefined`.",
          "As we can see, all of them are straightforward and simple to use. The `?.` checks the left part for `null/undefined` and allows the evaluation to proceed if it's not so."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Optional Chaining",
        "description": "Apply your understanding of Optional Chaining. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Optional Chaining\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Optional Chaining\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Optional Chaining in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for optional chaining.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Optional Chaining is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Optional Chaining?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Optional Chaining is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying optional chaining.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "optional-chaining"
    ],
    "slug": "optional-chaining"
  },
  {
    "title": "Symbol",
    "description": "By specification, only two primitive types may serve as object property keys:",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "By specification, only two primitive types may serve as object property keys:",
          "Otherwise, if one uses another type, such as number, it's autoconverted to string. So that `obj[1]` is the same as `obj[\"1\"]`, and `obj[true]` is the same as `obj[\"true\"]`.",
          "Until now we've been using only strings.",
          "Now let's explore symbols, see what they can do for us."
        ],
        "bulletPoints": [
          "string type, or",
          "symbol type."
        ]
      },
      {
        "heading": "Symbols",
        "paragraphs": [
          "A \"symbol\" represents a unique identifier.",
          "A value of this type can be created using `Symbol()`:",
          "Upon creation, we can give symbols a description (also called a symbol name), mostly useful for debugging purposes:",
          "Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values. The description is just a label that doesn't affect anything.",
          "For instance, here are two symbols with the same description -- they are not equal:"
        ],
        "codeExamples": [
          {
            "title": "Symbols",
            "code": "let id = Symbol();",
            "explanation": "Example demonstrating symbols."
          },
          {
            "title": "Symbols",
            "code": "// id is a symbol with the description \"id\"\nlet id = Symbol(\"id\");",
            "explanation": "Example demonstrating symbols."
          }
        ]
      },
      {
        "heading": "\"Hidden\" properties",
        "paragraphs": [
          "Symbols allow us to create \"hidden\" properties of an object, that no other part of code can accidentally access or overwrite.",
          "For instance, if we're working with `user` objects, that belong to a third-party code. We'd like to add identifiers to them.",
          "Let's use a symbol key for it:",
          "What's the benefit of using `Symbol(\"id\")` over a string `\"id\"`?",
          "As `user` objects belong to another codebase, it's unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally. The third-party code won't be aware of newly defined symbols, so it's safe to add symbols to the `user` objects."
        ],
        "codeExamples": [
          {
            "title": "\"Hidden\" properties",
            "code": "let user = { // belongs to another code\n  name: \"John\"\n};\n\nlet id = Symbol(\"id\");\n\nuser[id] = 1;\n\nalert( user[id] ); // we can access the data using the symbol as the key",
            "explanation": "Example demonstrating \"hidden\" properties."
          },
          {
            "title": "\"Hidden\" properties",
            "code": "// ...\nlet id = Symbol(\"id\");\n\nuser[id] = \"Their id value\";",
            "explanation": "Example demonstrating \"hidden\" properties."
          }
        ]
      },
      {
        "heading": "Symbols in an object literal",
        "paragraphs": [
          "If we want to use a symbol in an object literal `{...}`, we need square brackets around it.",
          "Like this:",
          "That's because we need the value from the variable `id` as the key, not the string \"id\"."
        ],
        "codeExamples": [
          {
            "title": "Symbols in an object literal",
            "code": "let id = Symbol(\"id\");\n\nlet user = {\n  name: \"John\",\n*!*\n  [id]: 123 // not \"id\": 123\n*/!*\n};",
            "explanation": "Example demonstrating symbols in an object literal."
          }
        ]
      },
      {
        "heading": "Symbols are skipped by for..in",
        "paragraphs": [
          "Symbolic properties do not participate in `for..in` loop.",
          "For instance:",
          "Object.keys(user) also ignores them. That's a part of the general \"hiding symbolic properties\" principle. If another script or a library loops over our object, it won't unexpectedly access a symbolic property.",
          "In contrast, Object.assign copies both string and symbol properties:",
          "There's no paradox here. That's by design. The idea is that when we clone an object or merge objects, we usually want *all* properties to be copied (including symbols like `id`)."
        ],
        "codeExamples": [
          {
            "title": "Symbols are skipped by for..in",
            "code": "let id = Symbol(\"id\");\nlet user = {\n  name: \"John\",\n  age: 30,\n  [id]: 123\n};\n\n*!*\nfor (let key in user) alert(key); // name, age (no symbols)\n*/!*\n\n// the direct access by the symbol works\nalert( \"Direct: \" + user[id] ); // Direct: 123",
            "explanation": "Example demonstrating symbols are skipped by for..in."
          },
          {
            "title": "Symbols are skipped by for..in",
            "code": "let id = Symbol(\"id\");\nlet user = {\n  [id]: 123\n};\n\nlet clone = Object.assign({}, user);\n\nalert( clone[id] ); // 123",
            "explanation": "Example demonstrating symbols are skipped by for..in."
          }
        ]
      },
      {
        "heading": "Global symbols",
        "paragraphs": [
          "As we've seen, usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be same entities. For instance, different parts of our application want to access symbol `\"id\"` meaning exactly the same property.",
          "To achieve that, there exists a *global symbol registry*. We can create symbols in it and access them later, and it guarantees that repeated accesses by the same name return exactly the same symbol.",
          "In order to read (create if absent) a symbol from the registry, use `Symbol.for(key)`.",
          "That call checks the global registry, and if there's a symbol described as `key`, then returns it, otherwise creates a new symbol `Symbol(key)` and stores it in the registry by the given `key`.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Global symbols",
            "code": "// read from the global registry\nlet id = Symbol.for(\"id\"); // if the symbol did not exist, it is created\n\n// read it again (maybe from another part of the code)\nlet idAgain = Symbol.for(\"id\");\n\n// the same symbol\nalert( id === idAgain ); // true",
            "explanation": "Example demonstrating global symbols."
          },
          {
            "title": "Global symbols",
            "code": "In some programming languages, like Ruby, there's a single symbol per name.\n\nIn JavaScript, as we can see, that's true for global symbols.",
            "explanation": "Example demonstrating global symbols."
          }
        ]
      },
      {
        "heading": "Symbol.keyFor",
        "paragraphs": [
          "We have seen that for global symbols, `Symbol.for(key)` returns a symbol by name. To do the opposite -- return a name by global symbol -- we can use: `Symbol.keyFor(sym)`:",
          "For instance:",
          "The `Symbol.keyFor` internally uses the global symbol registry to look up the key for the symbol. So it doesn't work for non-global symbols. If the symbol is not global, it won't be able to find it and returns `undefined`.",
          "That said, all symbols have the `description` property.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Symbol.keyFor",
            "code": "// get symbol by name\nlet sym = Symbol.for(\"name\");\nlet sym2 = Symbol.for(\"id\");\n\n// get name by symbol\nalert( Symbol.keyFor(sym) ); // name\nalert( Symbol.keyFor(sym2) ); // id",
            "explanation": "Example demonstrating symbol.keyfor."
          },
          {
            "title": "Symbol.keyFor",
            "code": "let globalSymbol = Symbol.for(\"name\");\nlet localSymbol = Symbol(\"name\");\n\nalert( Symbol.keyFor(globalSymbol) ); // name, global symbol\nalert( Symbol.keyFor(localSymbol) ); // undefined, not global\n\nalert( localSymbol.description ); // name",
            "explanation": "Example demonstrating symbol.keyfor."
          }
        ]
      },
      {
        "heading": "System symbols",
        "paragraphs": [
          "There exist many \"system\" symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.",
          "They are listed in the specification in the Well-known symbols table:",
          "For instance, `Symbol.toPrimitive` allows us to describe object to primitive conversion. We'll see its use very soon.",
          "Other symbols will also become familiar when we study the corresponding language features."
        ],
        "bulletPoints": [
          "`Symbol.hasInstance`",
          "`Symbol.isConcatSpreadable`",
          "`Symbol.iterator`",
          "`Symbol.toPrimitive`",
          "...and so on."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "`Symbol` is a primitive type for unique identifiers.",
          "Symbols are created with `Symbol()` call with an optional description (name).",
          "Symbols are always different values, even if they have the same name. If we want same-named symbols to be equal, then we should use the global registry: `Symbol.for(key)` returns (creates if needed) a global symbol with `key` as the name. Multiple calls of `Symbol.for` with the same `key` return exactly the same symbol.",
          "Symbols have two main use cases:",
          "1. \"Hidden\" object properties."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Symbol",
        "description": "Apply your understanding of Symbol. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Symbol\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Symbol\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Symbol in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for symbol.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Symbol is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Symbol?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Symbol is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying symbol.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "symbol"
    ],
    "slug": "symbol"
  },
  {
    "title": "Object Toprimitive",
    "description": "What happens when objects are added `obj1 + obj2`, subtracted `obj1 - obj2` or printed using `alert(obj)`?",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "What happens when objects are added `obj1 + obj2`, subtracted `obj1 - obj2` or printed using `alert(obj)`?",
          "JavaScript doesn't allow you to customize how operators work on objects. Unlike some other programming languages, such as Ruby or C++, we can't implement a special object method to handle addition (or other operators).",
          "In case of such operations, objects are auto-converted to primitives, and then the operation is carried out over these primitives and results in a primitive value.",
          "That's an important limitation: the result of `obj1 + obj2` (or another math operation) can't be another object!",
          "E.g. we can't make objects representing vectors or matrices (or achievements or whatever), add them and expect a \"summed\" object as the result. Such architectural feats are automatically \"off the board\"."
        ]
      },
      {
        "heading": "Conversion rules",
        "paragraphs": [
          "In the chapter we've seen the rules for numeric, string and boolean conversions of primitives. But we left a gap for objects. Now, as we know about methods and symbols it becomes possible to fill it.",
          "1. There's no conversion to boolean. All objects are `true` in a boolean context, as simple as that. There exist only numeric and string conversions.",
          "2. The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, `Date` objects (to be covered in the chapter ) can be subtracted, and the result of `date1 - date2` is the time difference between two dates.",
          "3. As for the string conversion -- it usually happens when we output an object with `alert(obj)` and in similar contexts.",
          "We can implement string and numeric conversion by ourselves, using special object methods."
        ]
      },
      {
        "heading": "Hints",
        "paragraphs": [
          "How does JavaScript decide which conversion to apply?",
          "There are three variants of type conversion, that happen in various situations. They're called \"hints\", as described in the specification:",
          "`\"string\"`",
          ": For an object-to-string conversion, when we're doing an operation on an object that expects a string, like `alert`:",
          "// output"
        ],
        "bulletPoints": [
          "try calling `obj.toString()` or `obj.valueOf()`, whatever exists.",
          "try calling `obj.valueOf()` or `obj.toString()`, whatever exists."
        ]
      },
      {
        "heading": "Symbol.toPrimitive",
        "paragraphs": [
          "Let's start from the first method. There's a built-in symbol named `Symbol.toPrimitive` that should be used to name the conversion method, like this:",
          "If the method `Symbol.toPrimitive` exists, it's used for all hints, and no more methods are needed.",
          "For instance, here `user` object implements it:",
          "As we can see from the code, `user` becomes a self-descriptive string or a money amount, depending on the conversion. The single method `user[Symbol.toPrimitive]` handles all conversion cases."
        ],
        "codeExamples": [
          {
            "title": "Symbol.toPrimitive",
            "code": "obj[Symbol.toPrimitive] = function(hint) {\n  // here goes the code to convert this object to a primitive\n  // it must return a primitive value\n  // hint = one of \"string\", \"number\", \"default\"\n};",
            "explanation": "Example demonstrating symbol.toprimitive."
          },
          {
            "title": "Symbol.toPrimitive",
            "code": "let user = {\n  name: \"John\",\n  money: 1000,\n\n  [Symbol.toPrimitive](hint) {\n    alert(`hint: ${hint}`);\n    return hint == \"string\" ? `{name: \"${this.name}\"}` : this.money;\n  }\n};\n\n// conversions demo:\nalert(user); // hint: string -> {name: \"John\"}\nalert(+user); // hint: number -> 1000\nalert(user + 500); // hint: default -> 1500",
            "explanation": "Example demonstrating symbol.toprimitive."
          }
        ]
      },
      {
        "heading": "toString/valueOf",
        "paragraphs": [
          "If there's no `Symbol.toPrimitive` then JavaScript tries to find methods `toString` and `valueOf`:",
          "Methods `toString` and `valueOf` come from ancient times. They are not symbols (symbols did not exist that long ago), but rather \"regular\" string-named methods. They provide an alternative \"old-style\" way to implement the conversion.",
          "These methods must return a primitive value. If `toString` or `valueOf` returns an object, then it's ignored (same as if there were no method).",
          "By default, a plain object has following `toString` and `valueOf` methods:",
          "Here's the demo:"
        ],
        "codeExamples": [
          {
            "title": "toString/valueOf",
            "code": "let user = {name: \"John\"};\n\nalert(user); // [object Object]\nalert(user.valueOf() === user); // true",
            "explanation": "Example demonstrating tostring/valueof."
          },
          {
            "title": "toString/valueOf",
            "code": "let user = {\n  name: \"John\",\n  money: 1000,\n\n  // for hint=\"string\"\n  toString() {\n    return `{name: \"${this.name}\"}`;\n  },\n\n  // for hint=\"number\" or \"default\"\n  valueOf() {\n    return this.money;\n  }\n\n};\n\nalert(user); // toString -> {name: \"John\"}\nalert(+user); // valueOf -> 1000\nalert(user + 500); // valueOf -> 1500",
            "explanation": "Example demonstrating tostring/valueof."
          }
        ],
        "bulletPoints": [
          "For the `\"string\"` hint: call `toString` method, and if it doesn't exist or if it returns an object instead of a primitive value, then call `valueOf` (so `toString` has the priority for string conversions).",
          "For other hints: call `valueOf`, and if it doesn't exist or if it returns an object instead of a primitive value, then call `toString` (so `valueOf` has the priority for maths).",
          "The `toString` method returns a string `\"[object Object]\"`.",
          "The `valueOf` method returns the object itself."
        ]
      },
      {
        "heading": "A conversion can return any primitive type",
        "paragraphs": [
          "The important thing to know about all primitive-conversion methods is that they do not necessarily return the \"hinted\" primitive.",
          "There is no control whether `toString` returns exactly a string, or whether `Symbol.toPrimitive` method returns a number for the hint `\"number\"`.",
          "The only mandatory thing: these methods must return a primitive, not an object."
        ],
        "codeExamples": [
          {
            "title": "A conversion can return any primitive type",
            "code": "For historical reasons, if `toString` or `valueOf` returns an object, there's no error, but such value is ignored (like if the method didn't exist). That's because in ancient times there was no good \"error\" concept in JavaScript.\n\nIn contrast, `Symbol.toPrimitive` is stricter, it *must* return a primitive, otherwise there will be an error.",
            "explanation": "Example demonstrating a conversion can return any primitive type."
          }
        ]
      },
      {
        "heading": "Further conversions",
        "paragraphs": [
          "As we know already, many operators and functions perform type conversions, e.g. multiplication `*` converts operands to numbers.",
          "If we pass an object as an argument, then there are two stages of calculations:",
          "1. The object is converted to a primitive (using the rules described above).",
          "2. If necessary for further calculations, the resulting primitive is also converted.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Further conversions",
            "code": "let obj = {\n  // toString handles all conversions in the absence of other methods\n  toString() {\n    return \"2\";\n  }\n};\n\nalert(obj * 2); // 4, object converted to primitive \"2\", then multiplication made it a number",
            "explanation": "Example demonstrating further conversions."
          },
          {
            "title": "Further conversions",
            "code": "let obj = {\n  toString() {\n    return \"2\";\n  }\n};\n\nalert(obj + 2); // \"22\" (\"2\" + 2), conversion to primitive returned a string => concatenation",
            "explanation": "Example demonstrating further conversions."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "The object-to-primitive conversion is called automatically by many built-in functions and operators that expect a primitive as a value.",
          "There are 3 types (hints) of it:",
          "The specification describes explicitly which operator uses which hint.",
          "The conversion algorithm is:",
          "1. Call `objSymbol.toPrimitive` if the method exists,"
        ],
        "bulletPoints": [
          "`\"string\"` (for `alert` and other operations that need a string)",
          "`\"number\"` (for maths)",
          "`\"default\"` (few operators, usually objects implement it the same way as `\"number\"`)",
          "try calling `obj.toString()` or `obj.valueOf()`, whatever exists.",
          "try calling `obj.valueOf()` or `obj.toString()`, whatever exists."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Object Toprimitive",
        "description": "Apply your understanding of Object Toprimitive. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Object Toprimitive\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Object Toprimitive\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Object Toprimitive in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for object toprimitive.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Object Toprimitive is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Object Toprimitive?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Object Toprimitive is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying object toprimitive.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "object-toprimitive"
    ],
    "slug": "object-toprimitive"
  },
  {
    "title": "Primitives Methods",
    "description": "JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects. They also provide methods to call as such. We will study those soon, but first we'll ...",
    "difficulty": "intermediate",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "JavaScript allows us to work with primitives (strings, numbers, etc.) as if they were objects. They also provide methods to call as such. We will study those soon, but first we'll see how it works because, of course, primitives are not objects (and here we will make it even clearer).",
          "Let's look at the key distinctions between primitives and objects.",
          "A primitive",
          "An object",
          "One of the best things about objects is that we can store a function as one of its properties."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let john = {\n  name: \"John\",\n  sayHi: function() {\n    alert(\"Hi buddy!\");\n  }\n};\n\njohn.sayHi(); // Hi buddy!",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "Is a value of a primitive type.",
          "There are 7 primitive types: `string`, `number`, `bigint`, `boolean`, `symbol`, `null` and `undefined`.",
          "Is capable of storing multiple values as properties.",
          "Can be created with `{}`, for instance: `{name: \"John\", age: 30}`. There are other kinds of objects in JavaScript: functions, for example, are objects."
        ]
      },
      {
        "heading": "A primitive as an object",
        "paragraphs": [
          "Here's the paradox faced by the creator of JavaScript:",
          "The solution looks a little bit awkward, but here it is:",
          "1. Primitives are still primitive. A single value, as desired.",
          "2. The language allows access to methods and properties of strings, numbers, booleans and symbols.",
          "3. In order for that to work, a special \"object wrapper\" that provides the extra functionality is created, and then is destroyed."
        ],
        "codeExamples": [
          {
            "title": "A primitive as an object",
            "code": "let str = \"Hello\";\n\nalert( str.toUpperCase() ); // HELLO",
            "explanation": "Example demonstrating a primitive as an object."
          },
          {
            "title": "A primitive as an object",
            "code": "let n = 1.23456;\n\nalert( n.toFixed(2) ); // 1.23",
            "explanation": "Example demonstrating a primitive as an object."
          }
        ],
        "bulletPoints": [
          "There are many things one would want to do with a primitive, like a string or a number. It would be great to access them using methods.",
          "Primitives must be as fast and lightweight as possible."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Can I add a string property?",
        "description": "Consider the following code: ```js let str = \"Hello\"; str.test = 5; alert(str.test); ``` What do you think, will it work? What will be shown?",
        "starterCode": "let str = \"Hello\";\n\nstr.test = 5;\n\nalert(str.test);",
        "solution": "let str = \"Hello\";\n\nstr.test = 5;\n\nalert(str.test);",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Primitives Methods in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for primitives methods.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Primitives Methods is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Primitives Methods?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Primitives Methods is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying primitives methods.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "primitives-methods"
    ],
    "slug": "primitives-methods"
  },
  {
    "title": "Number",
    "description": "In modern JavaScript, there are two types of numbers:",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In modern JavaScript, there are two types of numbers:",
          "1. Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as \"double precision floating point numbers\". These are numbers that we're using most of the time, and we'll talk about them in this chapter.",
          "2. BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can't safely exceed (253-1) or be less than -(253-1), as we mentioned earlier in the chapter . As bigints are used in a few special areas, we devote them to a special chapter .",
          "So here we'll talk about regular numbers. Let's expand our knowledge of them."
        ]
      },
      {
        "heading": "More ways to write a number",
        "paragraphs": [
          "Imagine we need to write 1 billion. The obvious way is:",
          "We also can use underscore `_` as the separator:",
          "Here the underscore `_` plays the role of the \"syntactic sugar\", it makes the number more readable. The JavaScript engine simply ignores `_` between digits, so it's exactly the same one billion as above.",
          "In real life though, we try to avoid writing long sequences of zeroes. We're too lazy for that. We'll try to write something like `\"1bn\"` for a billion or `\"7.3bn\"` for 7 billion 300 million. The same is true for most large numbers.",
          "In JavaScript, we can shorten a number by appending the letter `\"e\"` to it and specifying the zeroes count:"
        ],
        "codeExamples": [
          {
            "title": "More ways to write a number",
            "code": "let billion = 1000000000;",
            "explanation": "Example demonstrating more ways to write a number."
          },
          {
            "title": "More ways to write a number",
            "code": "let billion = 1_000_000_000;",
            "explanation": "Example demonstrating more ways to write a number."
          }
        ]
      },
      {
        "heading": "Hex, binary and octal numbers",
        "paragraphs": [
          "Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, and for many other things. So naturally, there exists a shorter way to write them: `0x` and then the number.",
          "For instance:",
          "Binary and octal numeral systems are rarely used, but also supported using the `0b` and `0o` prefixes:",
          "There are only 3 numeral systems with such support. For other numeral systems, we should use the function `parseInt` (which we will see later in this chapter)."
        ],
        "codeExamples": [
          {
            "title": "Hex, binary and octal numbers",
            "code": "alert( 0xff ); // 255\nalert( 0xFF ); // 255 (the same, case doesn't matter)",
            "explanation": "Example demonstrating hex, binary and octal numbers."
          },
          {
            "title": "Hex, binary and octal numbers",
            "code": "let a = 0b11111111; // binary form of 255\nlet b = 0o377; // octal form of 255\n\nalert( a == b ); // true, the same number 255 at both sides",
            "explanation": "Example demonstrating hex, binary and octal numbers."
          }
        ]
      },
      {
        "heading": "toString(base)",
        "paragraphs": [
          "The method `num.toString(base)` returns a string representation of `num` in the numeral system with the given `base`.",
          "For example:",
          "The `base` can vary from `2` to `36`. By default, it's `10`.",
          "Common use cases for this are:",
          "alert( 123456..toString(36) ); // 2n9c"
        ],
        "codeExamples": [
          {
            "title": "toString(base)",
            "code": "let num = 255;\n\nalert( num.toString(16) );  // ff\nalert( num.toString(2) );   // 11111111",
            "explanation": "Example demonstrating tostring(base)."
          },
          {
            "title": "toString(base)",
            "code": "Please note that two dots in `123456..toString(36)` is not a typo. If we want to call a method directly on a number, like `toString` in the example above, then we need to place two dots `..` after it.\n\nIf we placed a single dot: `123456.toString(36)`, then there would be an error, because JavaScript syntax implies the decimal part after the first dot. And if we place one more dot, then JavaScript knows that the decimal part is empty and now uses the method.\n\nAlso could write `(123456).toString(36)`.",
            "explanation": "Example demonstrating tostring(base)."
          }
        ],
        "bulletPoints": [
          "**base=16** is used for hex colors, character encodings etc, digits can be `0..9` or `A..F`.",
          "**base=2** is mostly for debugging bitwise operations, digits can be `0` or `1`.",
          "**base=36** is the maximum, digits can be `0..9` or `A..Z`. The whole Latin alphabet is used to represent a number. A funny, but useful case for `36` is when we need to turn a long numeric identifier into something shorter, for example, to make a short url. Can simply represent it in the numeral system with base `36`:"
        ]
      },
      {
        "heading": "Rounding",
        "paragraphs": [
          "One of the most used operations when working with numbers is rounding.",
          "There are several built-in functions for rounding:",
          "`Math.floor`",
          ": Rounds down: `3.1` becomes `3`, and `-1.1` becomes `-2`.",
          "`Math.ceil`"
        ]
      },
      {
        "heading": "Imprecise calculations",
        "paragraphs": [
          "Internally, a number is represented in 64-bit format IEEE-754, so there are exactly 64 bits to store a number: 52 of them are used to store the digits, 11 of them store the position of the decimal point, and 1 bit is for the sign.",
          "If a number is really huge, it may overflow the 64-bit storage and become a special numeric value `Infinity`:",
          "What may be a little less obvious, but happens quite often, is the loss of precision.",
          "Consider this (falsy!) equality test:",
          "That's right, if we check whether the sum of `0.1` and `0.2` is `0.3`, we get `false`."
        ],
        "codeExamples": [
          {
            "title": "Imprecise calculations",
            "code": "alert( 1e500 ); // Infinity",
            "explanation": "Example demonstrating imprecise calculations."
          },
          {
            "title": "Imprecise calculations",
            "code": "alert( 0.1 + 0.2 == 0.3 ); // *!*false*/!*",
            "explanation": "Example demonstrating imprecise calculations."
          }
        ]
      },
      {
        "heading": "Tests: isFinite and isNaN",
        "paragraphs": [
          "Remember these two special numeric values?",
          "They belong to the type `number`, but are not \"normal\" numbers, so there are special functions to check for them:",
          "alert( isNaN(NaN) ); // true",
          "alert( isNaN(\"str\") ); // true",
          "But do we need this function? Can't we just use the comparison `=== NaN`? Unfortunately not. The value `NaN` is unique in that it does not equal anything, including itself:"
        ],
        "codeExamples": [
          {
            "title": "Tests: isFinite and isNaN",
            "code": "let num = +prompt(\"Enter a number\", '');\n\n// will be true unless you enter Infinity, -Infinity or not a number\nalert( isFinite(num) );",
            "explanation": "Example demonstrating tests: isfinite and isnan."
          },
          {
            "title": "Tests: isFinite and isNaN",
            "code": "[Number.isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) and [Number.isFinite](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) methods are the more \"strict\" versions of `isNaN` and `isFinite` functions. They do not autoconvert their argument into a number, but check if it belongs to the `number` type instead.\n\n- `Number.isNaN(value)` returns `true` if the argument belongs to the `number` type and it is `NaN`. In any other case, it returns `false`.\n\n    ```js run\n    alert( Number.isNaN(NaN) ); // true\n    alert( Number.isNaN(\"str\" / 2) ); // true\n\n    // Note the difference:\n    alert( Number.isNaN(\"str\") ); // false, because \"str\" belongs to the string type, not the number type\n    alert( isNaN(\"str\") ); // true, because isNaN converts string \"str\" into a number and gets NaN as a result of this conversion\n    ```\n\n- `Number.isFinite(value)` returns `true` if the argument belongs to the `number` type and it is not `NaN/Infinity/-Infinity`. In any other case, it returns `false`.\n\n    ```js run\n    alert( Number.isFinite(123) ); // true\n    alert( Number.isFinite(Infinity) ); // false\n    alert( Number.isFinite(2 / 0) ); // false\n\n    // Note the difference:\n    alert( Number.isFinite(\"123\") ); // false, because \"123\" belongs to the string type, not the number type\n    alert( isFinite(\"123\") ); // true, because isFinite converts string \"123\" into a number 123\n    ```\n\nIn a way, `Number.isNaN` and `Number.isFinite` are simpler and more straightforward than `isNaN` and `isFinite` functions. In practice though, `isNaN` and `isFinite` are mostly used, as they're shorter to write.",
            "explanation": "Example demonstrating tests: isfinite and isnan."
          }
        ],
        "bulletPoints": [
          "`Infinity` (and `-Infinity`) is a special numeric value that is greater (less) than anything.",
          "`NaN` represents an error.",
          "`isNaN(value)` converts its argument to a number and then tests it for being `NaN`:",
          "`isFinite(value)` converts its argument to a number and returns `true` if it's a regular number, not `NaN/Infinity/-Infinity`:"
        ]
      },
      {
        "heading": "parseInt and parseFloat",
        "paragraphs": [
          "Numeric conversion using a plus `+` or `Number()` is strict. If a value is not exactly a number, it fails:",
          "The sole exception is spaces at the beginning or at the end of the string, as they are ignored.",
          "But in real life, we often have values in units, like `\"100px\"` or `\"12pt\"` in CSS. Also in many countries, the currency symbol goes after the amount, so we have `\"19\u20ac\"` and would like to extract a numeric value out of that.",
          "That's what `parseInt` and `parseFloat` are for.",
          "They \"read\" a number from a string until they can't. In case of an error, the gathered number is returned. The function `parseInt` returns an integer, whilst `parseFloat` will return a floating-point number:"
        ],
        "codeExamples": [
          {
            "title": "parseInt and parseFloat",
            "code": "alert( +\"100px\" ); // NaN",
            "explanation": "Example demonstrating parseint and parsefloat."
          },
          {
            "title": "parseInt and parseFloat",
            "code": "alert( parseInt('100px') ); // 100\nalert( parseFloat('12.5em') ); // 12.5\n\nalert( parseInt('12.3') ); // 12, only the integer part is returned\nalert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading",
            "explanation": "Example demonstrating parseint and parsefloat."
          }
        ]
      },
      {
        "heading": "Other math functions",
        "paragraphs": [
          "JavaScript has a built-in Math object which contains a small library of mathematical functions and constants.",
          "A few examples:",
          "`Math.random()`",
          ": Returns a random number from 0 to 1 (not including 1).",
          "alert( Math.random() ); // 0.1234567894322"
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "To write numbers with many zeroes:",
          "For different numeral systems:",
          "For regular number tests:",
          "For converting values like `12pt` and `100px` to a number:",
          "For fractions:"
        ],
        "bulletPoints": [
          "Append `\"e\"` with the zeroes count to the number. Like: `123e6` is the same as `123` with 6 zeroes `123000000`.",
          "A negative number after `\"e\"` causes the number to be divided by 1 with given zeroes. E.g. `123e-6` means `0.000123` (`123` millionths).",
          "Can write numbers directly in hex (`0x`), octal (`0o`) and binary (`0b`) systems.",
          "`parseInt(str, base)` parses the string `str` into an integer in numeral system with given `base`, `2 \u2264 base \u2264 36`.",
          "`num.toString(base)` converts a number to a string in the numeral system with the given `base`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Sum numbers from the visitor",
        "description": "Create a script that prompts the visitor to enter two numbers and then shows their sum. [demo] P.S. There is a gotcha with types.",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Why 6.35.toFixed(1) == 6.3?",
        "description": "According to the documentation `Math.round` and `toFixed` both round to the nearest number: `0..4` lead down while `5..9` lead up. For instance: ```js run alert( 1.35.toFixed(1) ); // 1.4 ``` In the similar example below, why is `6.35` rounded to `6.3`, not `6.4`? ```js run alert( 6.35.toFixed(1) );",
        "starterCode": "In the similar example below, why is `6.35` rounded to `6.3`, not `6.4`?",
        "solution": "The precision loss can cause both increase and decrease of a number. In this particular case the number becomes a tiny bit less, that's why it rounded down.\n\nAnd what's for `1.35`?",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Repeat until the input is a number",
        "description": "Create a function `readNumber` which prompts for a number until the visitor enters a valid numeric value. The resulting value must be returned as a number. The visitor can also stop the process by entering an empty line or pressing \"CANCEL\". In that case, the function should return `null`. [demo]",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Number in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for number.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Number is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Number?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Number is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying number.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "number"
    ],
    "slug": "number"
  },
  {
    "title": "String",
    "description": "In JavaScript, the textual data is stored as strings. There is no separate type for a single character.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In JavaScript, the textual data is stored as strings. There is no separate type for a single character.",
          "The internal format for strings is always UTF-16, it is not tied to the page encoding."
        ]
      },
      {
        "heading": "Quotes",
        "paragraphs": [
          "Let's recall the kinds of quotes.",
          "Strings can be enclosed within either single quotes, double quotes or backticks:",
          "Single and double quotes are essentially the same. Backticks, however, allow us to embed any expression into the string, by wrapping it in `${\u2026}`:",
          "Another advantage of using backticks is that they allow a string to span multiple lines:",
          "Looks natural, right? But single or double quotes do not work this way."
        ],
        "codeExamples": [
          {
            "title": "Quotes",
            "code": "let single = 'single-quoted';\nlet double = \"double-quoted\";\n\nlet backticks = `backticks`;",
            "explanation": "Example demonstrating quotes."
          },
          {
            "title": "Quotes",
            "code": "function sum(a, b) {\n  return a + b;\n}\n\nalert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.",
            "explanation": "Example demonstrating quotes."
          }
        ]
      },
      {
        "heading": "Special characters",
        "paragraphs": [
          "It is still possible to create multiline strings with single and double quotes by using a so-called \"newline character\", written as `\\n`, which denotes a line break:",
          "As a simpler example, these two lines are equal, just written differently:",
          "There are other, less common special characters:",
          "| Character | Description |",
          "|-----------|-------------|"
        ],
        "codeExamples": [
          {
            "title": "Special characters",
            "code": "let guestList = \"Guests:\\n * John\\n * Pete\\n * Mary\";\n\nalert(guestList); // a multiline list of guests, same as above",
            "explanation": "Example demonstrating special characters."
          },
          {
            "title": "Special characters",
            "code": "let str1 = \"Hello\\nWorld\"; // two lines using a \"newline symbol\"\n\n// two lines using a normal newline and backticks\nlet str2 = `Hello\nWorld`;\n\nalert(str1 == str2); // true",
            "explanation": "Example demonstrating special characters."
          }
        ]
      },
      {
        "heading": "String length",
        "paragraphs": [
          "The `length` property has the string length:",
          "Note that `\\n` is a single \"special\" character, so the length is indeed `3`."
        ],
        "codeExamples": [
          {
            "title": "String length",
            "code": "alert( `My\\n`.length ); // 3",
            "explanation": "Example demonstrating string length."
          },
          {
            "title": "String length",
            "code": "People with a background in some other languages sometimes mistype by calling `str.length()` instead of just `str.length`. That doesn't work.\n\nPlease note that `str.length` is a numeric property, not a function. There is no need to add parenthesis after it. Not `.length()`, but `.length`.",
            "explanation": "Example demonstrating string length."
          }
        ]
      },
      {
        "heading": "Accessing characters",
        "paragraphs": [
          "To get a character at position `pos`, use square brackets `[pos]` or call the method str.at(pos). The first character starts from the zero position:",
          "As you can see, the `.at(pos)` method has a benefit of allowing negative position. If `pos` is negative, then it's counted from the end of the string.",
          "So `.at(-1)` means the last character, and `.at(-2)` is the one before it, etc.",
          "The square brackets always return `undefined` for negative indexes, for instance:",
          "We can also iterate over characters using `for..of`:"
        ],
        "codeExamples": [
          {
            "title": "Accessing characters",
            "code": "let str = `Hello`;\n\n// the first character\nalert( str[0] ); // H\nalert( str.at(0) ); // H\n\n// the last character\nalert( str[str.length - 1] ); // o\nalert( str.at(-1) );",
            "explanation": "Example demonstrating accessing characters."
          },
          {
            "title": "Accessing characters",
            "code": "let str = `Hello`;\n\nalert( str[-2] ); // undefined\nalert( str.at(-2) ); // l",
            "explanation": "Example demonstrating accessing characters."
          }
        ]
      },
      {
        "heading": "Strings are immutable",
        "paragraphs": [
          "Strings can't be changed in JavaScript. It is impossible to change a character.",
          "Let's try it to show that it doesn't work:",
          "The usual workaround is to create a whole new string and assign it to `str` instead of the old one.",
          "For instance:",
          "In the following sections we'll see more examples of this."
        ],
        "codeExamples": [
          {
            "title": "Strings are immutable",
            "code": "let str = 'Hi';\n\nstr[0] = 'h'; // error\nalert( str[0] ); // doesn't work",
            "explanation": "Example demonstrating strings are immutable."
          },
          {
            "title": "Strings are immutable",
            "code": "let str = 'Hi';\n\nstr = 'h' + str[1]; // replace the string\n\nalert( str ); // hi",
            "explanation": "Example demonstrating strings are immutable."
          }
        ]
      },
      {
        "heading": "Changing the case",
        "paragraphs": [
          "Methods toLowerCase() and toUpperCase() change the case:",
          "Or, if we want a single character lowercased:"
        ],
        "codeExamples": [
          {
            "title": "Changing the case",
            "code": "alert( 'Interface'.toUpperCase() ); // INTERFACE\nalert( 'Interface'.toLowerCase() ); // interface",
            "explanation": "Example demonstrating changing the case."
          },
          {
            "title": "Changing the case",
            "code": "alert( 'Interface'[0].toLowerCase() ); // 'i'",
            "explanation": "Example demonstrating changing the case."
          }
        ]
      },
      {
        "heading": "Searching for a substring",
        "paragraphs": [
          "There are multiple ways to look for a substring within a string."
        ]
      },
      {
        "heading": "str.indexOf",
        "paragraphs": [
          "The first method is str.indexOf(substr, pos).",
          "It looks for the `substr` in `str`, starting from the given position `pos`, and returns the position where the match was found or `-1` if nothing can be found.",
          "For instance:",
          "The optional second parameter allows us to start searching from a given position.",
          "For instance, the first occurrence of `\"id\"` is at position `1`. To look for the next occurrence, let's start the search from position `2`:"
        ],
        "codeExamples": [
          {
            "title": "str.indexOf",
            "code": "let str = 'Widget with id';\n\nalert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning\nalert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive\n\nalert( str.indexOf(\"id\") ); // 1, \"id\" is found at the position 1 (..idget with id)",
            "explanation": "Example demonstrating str.indexof."
          },
          {
            "title": "str.indexOf",
            "code": "let str = 'Widget with id';\n\nalert( str.indexOf('id', 2) ) // 12",
            "explanation": "Example demonstrating str.indexof."
          }
        ]
      },
      {
        "heading": "includes, startsWith, endsWith",
        "paragraphs": [
          "The more modern method str.includes(substr, pos) returns `true/false` depending on whether `str` contains `substr` within.",
          "It's the right choice if we need to test for the match, but don't need its position:",
          "The optional second argument of `str.includes` is the position to start searching from:",
          "The methods str.startsWith and str.endsWith do exactly what they say:"
        ],
        "codeExamples": [
          {
            "title": "includes, startsWith, endsWith",
            "code": "alert( \"Widget with id\".includes(\"Widget\") ); // true\n\nalert( \"Hello\".includes(\"Bye\") ); // false",
            "explanation": "Example demonstrating includes, startswith, endswith."
          },
          {
            "title": "includes, startsWith, endsWith",
            "code": "alert( \"Widget\".includes(\"id\") ); // true\nalert( \"Widget\".includes(\"id\", 3) ); // false, from position 3 there is no \"id\"",
            "explanation": "Example demonstrating includes, startswith, endswith."
          }
        ]
      },
      {
        "heading": "Getting a substring",
        "paragraphs": [
          "There are 3 methods in JavaScript to get a substring: `substring`, `substr` and `slice`.",
          "`str.slice(start [, end])`",
          ": Returns the part of the string from `start` to (but not including) `end`.",
          "For instance:",
          "let str = \"stringify\";"
        ],
        "codeExamples": [
          {
            "title": "Getting a substring",
            "code": "All of them can do the job. Formally, `substr` has a minor drawback: it is described not in the core JavaScript specification, but in Annex B, which covers browser-only features that exist mainly for historical reasons. So, non-browser environments may fail to support it. But in practice it works everywhere.\n\nOf the other two variants, `slice` is a little bit more flexible, it allows negative arguments and shorter to write.\n\nSo, for practical use it's enough to remember only `slice`.",
            "explanation": "Example demonstrating getting a substring."
          }
        ]
      },
      {
        "heading": "Comparing strings",
        "paragraphs": [
          "As we know from the chapter , strings are compared character-by-character in alphabetical order.",
          "Although, there are some oddities.",
          "1. A lowercase letter is always greater than the uppercase:",
          "alert( 'a' > 'Z' ); // true",
          "2. Letters with diacritical marks are \"out of order\":"
        ],
        "codeExamples": [
          {
            "title": "Comparing strings",
            "code": "let str = '';\n\nfor (let i = 65; i <= 220; i++) {\n  str += String.fromCodePoint(i);\n}\nalert( str );\n// Output:\n// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u007f\u0080\u0081\u0082\u0083\u0084\n// \u00a1\u00a2\u00a3\u00a4\u00a5\u00a6\u00a7\u00a8\u00a9\u00aa\u00ab\u00ac\u00ad\u00ae\u00af\u00b0\u00b1\u00b2\u00b3\u00b4\u00b5\u00b6\u00b7\u00b8\u00b9\u00ba\u00bb\u00bc\u00bd\u00be\u00bf\u00c0\u00c1\u00c2\u00c3\u00c4\u00c5\u00c6\u00c7\u00c8\u00c9\u00ca\u00cb\u00cc\u00cd\u00ce\u00cf\u00d0\u00d1\u00d2\u00d3\u00d4\u00d5\u00d6\u00d7\u00d8\u00d9\u00da\u00db\u00dc",
            "explanation": "Example demonstrating comparing strings."
          }
        ],
        "bulletPoints": [
          "All lowercase letters go after uppercase letters because their codes are greater.",
          "Some letters like `\u00d6` stand apart from the main alphabet. Here, its code is greater than anything from `a` to `z`."
        ]
      },
      {
        "heading": "Correct comparisons [#correct-comparisons]",
        "paragraphs": [
          "The \"right\" algorithm to do string comparisons is more complex than it may seem, because alphabets are different for different languages.",
          "So, the browser needs to know the language to compare.",
          "Luckily, modern browsers support the internationalization standard ECMA-402.",
          "It provides a special method to compare strings in different languages, following their rules.",
          "The call str.localeCompare(str2) returns an integer indicating whether `str` is less, equal or greater than `str2` according to the language rules:"
        ],
        "codeExamples": [
          {
            "title": "Correct comparisons [#correct-comparisons]",
            "code": "alert( '\u00d6sterreich'.localeCompare('Zealand') ); // -1",
            "explanation": "Example demonstrating correct comparisons [#correct-comparisons]."
          }
        ],
        "bulletPoints": [
          "Returns a negative number if `str` is less than `str2`.",
          "Returns a positive number if `str` is greater than `str2`.",
          "Returns `0` if they are equivalent."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "There are several other helpful methods in strings:",
          "Strings also have methods for doing search/replace with regular expressions. But that's big topic, so it's explained in a separate tutorial section .",
          "Also, as of now it's important to know that strings are based on Unicode encoding, and hence there're issues with comparisons. There's more about Unicode in the chapter ."
        ],
        "bulletPoints": [
          "There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions `${\u2026}`.",
          "We can use special characters, such as a line break `\\n`.",
          "To get a character, use: `[]` or `at` method.",
          "To get a substring, use: `slice` or `substring`.",
          "To lowercase/uppercase a string, use: `toLowerCase/toUpperCase`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Uppercase the first character",
        "description": "Write a function `ucFirst(str)` that returns the string `str` with the uppercased first character, for instance: ```js ucFirst(\"john\") == \"John\"; ```",
        "starterCode": "ucFirst(\"john\") == \"John\";",
        "solution": "let newStr = str[0].toUpperCase() + str.slice(1);",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Check for spam",
        "description": "Write a function `checkSpam(str)` that returns `true` if `str` contains 'viagra' or 'XXX', otherwise `false`. The function must be case-insensitive: ```js checkSpam('buy ViAgRA now') == true checkSpam('free xxxxx') == true checkSpam(\"innocent rabbit\") == false ```",
        "starterCode": "checkSpam('buy ViAgRA now') == true\ncheckSpam('free xxxxx') == true\ncheckSpam(\"innocent rabbit\") == false",
        "solution": "checkSpam('buy ViAgRA now') == true\ncheckSpam('free xxxxx') == true\ncheckSpam(\"innocent rabbit\") == false",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Truncate the text",
        "description": "Create a function `truncate(str, maxlength)` that checks the length of the `str` and, if it exceeds `maxlength` -- replaces the end of `str` with the ellipsis character `\"\u2026\"`, to make its length equal to `maxlength`. The result of the function should be the truncated (if needed) string. For instance",
        "starterCode": "truncate(\"What I'd like to tell on this topic is:\", 20) == \"What I'd like to te\u2026\"\n\ntruncate(\"Hi everyone!\", 20) == \"Hi everyone!\"",
        "solution": "truncate(\"What I'd like to tell on this topic is:\", 20) == \"What I'd like to te\u2026\"\n\ntruncate(\"Hi everyone!\", 20) == \"Hi everyone!\"",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of String in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for string.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "String is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with String?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "String is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying string.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "string"
    ],
    "slug": "string"
  },
  {
    "title": "Array",
    "description": "Objects allow you to store keyed collections of values. That's fine.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Objects allow you to store keyed collections of values. That's fine.",
          "But quite often we find that we need an *ordered collection*, where we have a 1st, a 2nd, a 3rd element and so on. For example, we need that to store a list of something: users, goods, HTML elements etc.",
          "It is not convenient to use an object here, because it provides no methods to manage the order of elements. We can\u2019t insert a new property \u201cbetween\u201d the existing ones. Objects are just not meant for such use.",
          "There exists a special data structure named `Array`, to store ordered collections."
        ]
      },
      {
        "heading": "Declaration",
        "paragraphs": [
          "There are two syntaxes for creating an empty array:",
          "Almost all the time, the second syntax is used. We can supply initial elements in the brackets:",
          "Array elements are numbered, starting with zero.",
          "We can get an element by its number in square brackets:",
          "We can replace an element:"
        ],
        "codeExamples": [
          {
            "title": "Declaration",
            "code": "let arr = new Array();\nlet arr = [];",
            "explanation": "Example demonstrating declaration."
          },
          {
            "title": "Declaration",
            "code": "let fruits = [\"Apple\", \"Orange\", \"Plum\"];",
            "explanation": "Example demonstrating declaration."
          }
        ]
      },
      {
        "heading": "Get last elements with \"at\"",
        "paragraphs": [
          "[recent browser=\"new\"]",
          "Let's say we want the last element of the array.",
          "Some programming languages allow the use of negative indexes for the same purpose, like `fruits[-1]`.",
          "However, in JavaScript it won't work. The result will be `undefined`, because the index in square brackets is treated literally.",
          "We can explicitly calculate the last element index and then access it: `fruits[fruits.length - 1]`."
        ],
        "codeExamples": [
          {
            "title": "Get last elements with \"at\"",
            "code": "let fruits = [\"Apple\", \"Orange\", \"Plum\"];\n\nalert( fruits[fruits.length-1] ); // Plum",
            "explanation": "Example demonstrating get last elements with \"at\"."
          },
          {
            "title": "Get last elements with \"at\"",
            "code": "let fruits = [\"Apple\", \"Orange\", \"Plum\"];\n\n// same as fruits[fruits.length-1]\nalert( fruits.at(-1) ); // Plum",
            "explanation": "Example demonstrating get last elements with \"at\"."
          }
        ],
        "bulletPoints": [
          "is exactly the same as `arr[i]`, if `i >= 0`.",
          "for negative values of `i`, it steps back from the end of the array."
        ]
      },
      {
        "heading": "Methods pop/push, shift/unshift",
        "paragraphs": [
          "A queue) is one of the most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:",
          "![](queue.svg)",
          "Arrays support both operations.",
          "In practice we need it very often. For example, a queue of messages that need to be shown on-screen.",
          "There's another use case for arrays -- the data structure named stack)."
        ],
        "codeExamples": [
          {
            "title": "Methods pop/push, shift/unshift",
            "code": "let fruits = [\"Apple\"];\n\nfruits.push(\"Orange\", \"Peach\");\nfruits.unshift(\"Pineapple\", \"Lemon\");\n\n// [\"Pineapple\", \"Lemon\", \"Apple\", \"Orange\", \"Peach\"]\nalert( fruits );",
            "explanation": "Example demonstrating methods pop/push, shift/unshift."
          }
        ],
        "bulletPoints": [
          "`push` appends an element to the end.",
          "`shift` get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.",
          "`push` adds an element to the end.",
          "`pop` takes an element from the end."
        ]
      },
      {
        "heading": "Internals",
        "paragraphs": [
          "An array is a special kind of object. The square brackets used to access a property `arr[0]` actually come from the object syntax. That's essentially the same as `obj[key]`, where `arr` is the object, while numbers are used as keys.",
          "They extend objects providing special methods to work with ordered collections of data and also the `length` property. But at the core it's still an object.",
          "Remember, there are only eight basic data types in JavaScript (see the Data types chapter for more info). Array is an object and thus behaves like an object.",
          "For instance, it is copied by reference:",
          "...But what makes arrays really special is their internal representation. The engine tries to store its elements in the contiguous memory area, one after another, just as depicted on the illustrations in this chapter, and there are other optimizations as well, to make arrays work really fast."
        ],
        "codeExamples": [
          {
            "title": "Internals",
            "code": "let fruits = [\"Banana\"]\n\nlet arr = fruits; // copy by reference (two variables reference the same array)\n\nalert( arr === fruits ); // true\n\narr.push(\"Pear\"); // modify the array by reference\n\nalert( fruits ); // Banana, Pear - 2 items now",
            "explanation": "Example demonstrating internals."
          },
          {
            "title": "Internals",
            "code": "let fruits = []; // make an array\n\nfruits[99999] = 5; // assign a property with the index far greater than its length\n\nfruits.age = 25; // create a property with an arbitrary name",
            "explanation": "Example demonstrating internals."
          }
        ],
        "bulletPoints": [
          "Add a non-numeric property like `arr.test = 5`.",
          "Make holes, like: add `arr[0]` and then `arr[1000]` (and nothing between them).",
          "Fill the array in the reverse order, like `arr[1000]`, `arr[999]` and so on."
        ]
      },
      {
        "heading": "Performance",
        "paragraphs": [
          "Methods `push/pop` run fast, while `shift/unshift` are slow.",
          "![](array-speed.svg)",
          "Why is it faster to work with the end of an array than with its beginning? Let's see what happens during the execution:",
          "It's not enough to take and remove the element with the index `0`. Other elements need to be renumbered as well.",
          "The `shift` operation must do 3 things:"
        ],
        "codeExamples": [
          {
            "title": "Performance",
            "code": "fruits.shift(); // take 1 element from the start",
            "explanation": "Example demonstrating performance."
          },
          {
            "title": "Performance",
            "code": "fruits.pop(); // take 1 element from the end",
            "explanation": "Example demonstrating performance."
          }
        ]
      },
      {
        "heading": "Loops",
        "paragraphs": [
          "One of the oldest ways to cycle array items is the `for` loop over indexes:",
          "But for arrays there is another form of loop, `for..of`:",
          "The `for..of` doesn't give access to the number of the current element, just its value, but in most cases that's enough. And it's shorter.",
          "Technically, because arrays are objects, it is also possible to use `for..in`:",
          "But that's actually a bad idea. There are potential problems with it:"
        ],
        "codeExamples": [
          {
            "title": "Loops",
            "code": "let arr = [\"Apple\", \"Orange\", \"Pear\"];\n\n*!*\nfor (let i = 0; i < arr.length; i++) {\n*/!*\n  alert( arr[i] );\n}",
            "explanation": "Example demonstrating loops."
          },
          {
            "title": "Loops",
            "code": "let fruits = [\"Apple\", \"Orange\", \"Plum\"];\n\n// iterates over array elements\nfor (let fruit of fruits) {\n  alert( fruit );\n}",
            "explanation": "Example demonstrating loops."
          }
        ]
      },
      {
        "heading": "A word about \"length\"",
        "paragraphs": [
          "The `length` property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.",
          "For instance, a single element with a large index gives a big length:",
          "Note that we usually don't use arrays like that.",
          "Another interesting thing about the `length` property is that it's writable.",
          "If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here's the example:"
        ],
        "codeExamples": [
          {
            "title": "A word about \"length\"",
            "code": "let fruits = [];\nfruits[123] = \"Apple\";\n\nalert( fruits.length ); // 124",
            "explanation": "Example demonstrating a word about \"length\"."
          },
          {
            "title": "A word about \"length\"",
            "code": "let arr = [1, 2, 3, 4, 5];\n\narr.length = 2; // truncate to 2 elements\nalert( arr ); // [1, 2]\n\narr.length = 5; // return length back\nalert( arr[3] ); // undefined: the values do not return",
            "explanation": "Example demonstrating a word about \"length\"."
          }
        ]
      },
      {
        "heading": "new Array() [#new-array]",
        "paragraphs": [
          "There is one more syntax to create an array:",
          "It's rarely used, because square brackets `[]` are shorter. Also, there's a tricky feature with it.",
          "If `new Array` is called with a single argument which is a number, then it creates an array *without items, but with the given length*.",
          "Let's see how one can shoot themselves in the foot:",
          "To avoid such surprises, we usually use square brackets, unless we really know what we're doing."
        ],
        "codeExamples": [
          {
            "title": "new Array() [#new-array]",
            "code": "let arr = *!*new Array*/!*(\"Apple\", \"Pear\", \"etc\");",
            "explanation": "Example demonstrating new array() [#new-array]."
          },
          {
            "title": "new Array() [#new-array]",
            "code": "let arr = new Array(2); // will it create an array of [2] ?\n\nalert( arr[0] ); // undefined! no elements.\n\nalert( arr.length ); // length 2",
            "explanation": "Example demonstrating new array() [#new-array]."
          }
        ]
      },
      {
        "heading": "Multidimensional arrays",
        "paragraphs": [
          "Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:"
        ],
        "codeExamples": [
          {
            "title": "Multidimensional arrays",
            "code": "let matrix = [\n  [1, 2, 3],\n  [4, 5, 6],\n  [7, 8, 9]\n];\n\nalert( matrix[0][1] ); // 2, the second value of the first inner array",
            "explanation": "Example demonstrating multidimensional arrays."
          }
        ]
      },
      {
        "heading": "toString",
        "paragraphs": [
          "Arrays have their own implementation of `toString` method that returns a comma-separated list of elements.",
          "For instance:",
          "Also, let's try this:",
          "Arrays do not have `Symbol.toPrimitive`, neither a viable `valueOf`, they implement only `toString` conversion, so here `[]` becomes an empty string, `[1]` becomes `\"1\"` and `[1,2]` becomes `\"1,2\"`.",
          "When the binary plus `\"+\"` operator adds something to a string, it converts it to a string as well, so the next step looks like this:"
        ],
        "codeExamples": [
          {
            "title": "toString",
            "code": "let arr = [1, 2, 3];\n\nalert( arr ); // 1,2,3\nalert( String(arr) === '1,2,3' ); // true",
            "explanation": "Example demonstrating tostring."
          },
          {
            "title": "toString",
            "code": "alert( [] + 1 ); // \"1\"\nalert( [1] + 1 ); // \"11\"\nalert( [1,2] + 1 ); // \"1,21\"",
            "explanation": "Example demonstrating tostring."
          }
        ]
      },
      {
        "heading": "Don't compare arrays with ==",
        "paragraphs": [
          "Arrays in JavaScript, unlike some other programming languages, shouldn't be compared with operator `==`.",
          "This operator has no special treatment for arrays, it works with them as with any objects.",
          "Let's recall the rules:",
          "The strict comparison `===` is even simpler, as it doesn't convert types.",
          "So, if we compare arrays with `==`, they are never the same, unless we compare two variables that reference exactly the same array."
        ],
        "codeExamples": [
          {
            "title": "Don't compare arrays with ==",
            "code": "alert( [] == [] ); // false\nalert( [0] == [0] ); // false",
            "explanation": "Example demonstrating don't compare arrays with ==."
          },
          {
            "title": "Don't compare arrays with ==",
            "code": "alert( 0 == [] ); // true\n\nalert('0' == [] ); // false",
            "explanation": "Example demonstrating don't compare arrays with ==."
          }
        ],
        "bulletPoints": [
          "Two objects are equal `==` only if they're references to the same object.",
          "If one of the arguments of `==` is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter .",
          "...With an exception of `null` and `undefined` that equal `==` each other and nothing else."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Array is a special kind of object, suited to storing and managing ordered data items.",
          "The declaration:",
          "The call to `new Array(number)` creates an array with the given length, but without elements.",
          "Getting the elements:",
          "We can use an array as a deque with the following operations:"
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "// square brackets (usual)\nlet arr = [item1, item2...];\n\n// new Array (exceptionally rare)\nlet arr = new Array(item1, item2...);",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "The `length` property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.",
          "If we shorten `length` manually, the array is truncated.",
          "we can get element by its index, like `arr[0]`",
          "also we can use `at(i)` method that allows negative indexes. For negative values of `i`, it steps back from the end of the array. If `i >= 0`, it works same as `arr[i]`.",
          "`push(...items)` adds `items` to the end."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Is array copied?",
        "description": "What is this code going to show? ```js let fruits = [\"Apples\", \"Pear\", \"Orange\"]; // push a new value into the \"copy\" let shoppingCart = fruits; shoppingCart.push(\"Banana\"); // what's in fruits? alert( fruits.length ); // ? ```",
        "starterCode": "let fruits = [\"Apples\", \"Pear\", \"Orange\"];\n\n// push a new value into the \"copy\"\nlet shoppingCart = fruits;\nshoppingCart.push(\"Banana\");\n\n// what's in fruits?\nalert( fruits.length ); // ?",
        "solution": "let fruits = [\"Apples\", \"Pear\", \"Orange\"];\n\n// push a new value into the \"copy\"\nlet shoppingCart = fruits;\nshoppingCart.push(\"Banana\");\n\n// what's in fruits?\nalert( fruits.length ); // ?",
        "hints": [
          "Careful with edge cases and type coercions."
        ],
        "difficulty": "advanced"
      },
      {
        "title": "A maximal subarray",
        "description": "The input is an array of numbers, e.g. `arr = [1, -2, 3, 4, -9, 6]`. The task is: find the contiguous subarray of `arr` with the maximal sum of items. Write the function `getMaxSubSum(arr)` that will return that sum. For instance: ```js getMaxSubSum([-1, *!*2, 3*/!*, -9]) == 5 (the sum of highlighte",
        "starterCode": "getMaxSubSum([-1, *!*2, 3*/!*, -9]) == 5 (the sum of highlighted items)\ngetMaxSubSum([*!*2, -1, 2, 3*/!*, -9]) == 6\ngetMaxSubSum([-1, 2, 3, -9, *!*11*/!*]) == 11\ngetMaxSubSum([-2, -1, *!*1, 2*/!*]) == 3\ngetMaxSubSum([*!*100*/!*, -9, 2, -3, 5]) == 100\ngetMaxSubSum([*!*1, 2, 3*/!*]) == 6 (take all)",
        "solution": "The code is actually a nested loop: the external loop over array elements, and the internal counts subsums starting with the current element.",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Array operations.",
        "description": "Let's try 5 array operations. 1. Create an array `styles` with items \"Jazz\" and \"Blues\". 2. Append \"Rock-n-Roll\" to the end. 3. Replace the value in the middle with \"Classics\". Your code for finding the middle value should work for any arrays with odd length. 4. Strip off the first value of the arra",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Array in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for array.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Array is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Array?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Array is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying array.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "array"
    ],
    "slug": "array"
  },
  {
    "title": "Array Methods",
    "description": "Arrays provide a lot of methods. To make things easier, in this chapter, they are split into groups.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Arrays provide a lot of methods. To make things easier, in this chapter, they are split into groups."
        ]
      },
      {
        "heading": "Add/remove items",
        "paragraphs": [
          "We already know methods that add and remove items from the beginning or the end:",
          "Here are a few others."
        ],
        "bulletPoints": [
          "`arr.push(...items)` -- adds items to the end,",
          "`arr.pop()` -- extracts an item from the end,",
          "`arr.shift()` -- extracts an item from the beginning,",
          "`arr.unshift(...items)` -- adds items to the beginning."
        ]
      },
      {
        "heading": "splice",
        "paragraphs": [
          "How to delete an element from the array?",
          "The arrays are objects, so we can try to use `delete`:",
          "The element was removed, but the array still has 3 elements, we can see that `arr.length == 3`.",
          "That's natural, because `delete obj.key` removes a value by the `key`. It's all it does. Fine for objects. But for arrays we usually want the rest of the elements to shift and occupy the freed place. We expect to have a shorter array now.",
          "So, special methods should be used."
        ],
        "codeExamples": [
          {
            "title": "splice",
            "code": "let arr = [\"I\", \"go\", \"home\"];\n\ndelete arr[1]; // remove \"go\"\n\nalert( arr[1] ); // undefined\n\n// now arr = [\"I\",  , \"home\"];\nalert( arr.length ); // 3",
            "explanation": "Example demonstrating splice."
          },
          {
            "title": "splice",
            "code": "arr.splice(start[, deleteCount, elem1, ..., elemN])",
            "explanation": "Example demonstrating splice."
          }
        ]
      },
      {
        "heading": "slice",
        "paragraphs": [
          "The method arr.slice is much simpler than the similar-looking `arr.splice`.",
          "The syntax is:",
          "It returns a new array copying to it all items from index `start` to `end` (not including `end`). Both `start` and `end` can be negative, in that case position from array end is assumed.",
          "It's similar to a string method `str.slice`, but instead of substrings, it makes subarrays.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "slice",
            "code": "arr.slice([start], [end])",
            "explanation": "Example demonstrating slice."
          },
          {
            "title": "slice",
            "code": "let arr = [\"t\", \"e\", \"s\", \"t\"];\n\nalert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)\n\nalert( arr.slice(-2) ); // s,t (copy from -2 till the end)",
            "explanation": "Example demonstrating slice."
          }
        ]
      },
      {
        "heading": "concat",
        "paragraphs": [
          "The method arr.concat creates a new array that includes values from other arrays and additional items.",
          "The syntax is:",
          "It accepts any number of arguments -- either arrays or values.",
          "The result is a new array containing items from `arr`, then `arg1`, `arg2` etc.",
          "If an argument `argN` is an array, then all its elements are copied. Otherwise, the argument itself is copied."
        ],
        "codeExamples": [
          {
            "title": "concat",
            "code": "arr.concat(arg1, arg2...)",
            "explanation": "Example demonstrating concat."
          },
          {
            "title": "concat",
            "code": "let arr = [1, 2];\n\n// create an array from: arr and [3,4]\nalert( arr.concat([3, 4]) ); // 1,2,3,4\n\n// create an array from: arr and [3,4] and [5,6]\nalert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6\n\n// create an array from: arr and [3,4], then add values 5 and 6\nalert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6",
            "explanation": "Example demonstrating concat."
          }
        ]
      },
      {
        "heading": "Iterate: forEach",
        "paragraphs": [
          "The arr.forEach method allows to run a function for every element of the array.",
          "The syntax:",
          "For instance, this shows each element of the array:",
          "And this code is more elaborate about their positions in the target array:",
          "The result of the function (if it returns any) is thrown away and ignored."
        ],
        "codeExamples": [
          {
            "title": "Iterate: forEach",
            "code": "arr.forEach(function(item, index, array) {\n  // ... do something with an item\n});",
            "explanation": "Example demonstrating iterate: foreach."
          },
          {
            "title": "Iterate: forEach",
            "code": "// for each element call alert\n[\"Bilbo\", \"Gandalf\", \"Nazgul\"].forEach(alert);",
            "explanation": "Example demonstrating iterate: foreach."
          }
        ]
      },
      {
        "heading": "Searching in array",
        "paragraphs": [
          "Now let's cover methods that search in an array."
        ]
      },
      {
        "heading": "indexOf/lastIndexOf and includes",
        "paragraphs": [
          "The methods arr.indexOf and arr.includes have the similar syntax and do essentially the same as their string counterparts, but operate on items instead of characters:",
          "Usually, these methods are used with only one argument: the `item` to search. By default, the search is from the beginning.",
          "For instance:",
          "Please note that `indexOf` uses the strict equality `===` for comparison. So, if we look for `false`, it finds exactly `false` and not the zero.",
          "If we want to check if `item` exists in the array and don't need the index, then `arr.includes` is preferred."
        ],
        "codeExamples": [
          {
            "title": "indexOf/lastIndexOf and includes",
            "code": "let arr = [1, 0, false];\n\nalert( arr.indexOf(0) ); // 1\nalert( arr.indexOf(false) ); // 2\nalert( arr.indexOf(null) ); // -1\n\nalert( arr.includes(1) ); // true",
            "explanation": "Example demonstrating indexof/lastindexof and includes."
          },
          {
            "title": "indexOf/lastIndexOf and includes",
            "code": "let fruits = ['Apple', 'Orange', 'Apple']\n\nalert( fruits.indexOf('Apple') ); // 0 (first Apple)\nalert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)",
            "explanation": "Example demonstrating indexof/lastindexof and includes."
          }
        ],
        "bulletPoints": [
          "`arr.indexOf(item, from)` -- looks for `item` starting from index `from`, and returns the index where it was found, otherwise `-1`.",
          "`arr.includes(item, from)` -- looks for `item` starting from index `from`, returns `true` if found."
        ]
      },
      {
        "heading": "find and findIndex/findLastIndex",
        "paragraphs": [
          "Imagine we have an array of objects. How do we find an object with a specific condition?",
          "Here the arr.find(fn) method comes in handy.",
          "The syntax is:",
          "The function is called for elements of the array, one after another:",
          "If it returns `true`, the search is stopped, the `item` is returned. If nothing is found, `undefined` is returned."
        ],
        "codeExamples": [
          {
            "title": "find and findIndex/findLastIndex",
            "code": "let result = arr.find(function(item, index, array) {\n  // if true is returned, item is returned and iteration is stopped\n  // for falsy scenario returns undefined\n});",
            "explanation": "Example demonstrating find and findindex/findlastindex."
          },
          {
            "title": "find and findIndex/findLastIndex",
            "code": "let users = [\n  {id: 1, name: \"John\"},\n  {id: 2, name: \"Pete\"},\n  {id: 3, name: \"Mary\"}\n];\n\nlet user = users.find(item => item.id == 1);\n\nalert(user.name); // John",
            "explanation": "Example demonstrating find and findindex/findlastindex."
          }
        ],
        "bulletPoints": [
          "`item` is the element.",
          "`index` is its index.",
          "`array` is the array itself."
        ]
      },
      {
        "heading": "filter",
        "paragraphs": [
          "The `find` method looks for a single (first) element that makes the function return `true`.",
          "If there may be many, we can use arr.filter(fn).",
          "The syntax is similar to `find`, but `filter` returns an array of all matching elements:",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "filter",
            "code": "let results = arr.filter(function(item, index, array) {\n  // if true item is pushed to results and the iteration continues\n  // returns empty array if nothing found\n});",
            "explanation": "Example demonstrating filter."
          },
          {
            "title": "filter",
            "code": "let users = [\n  {id: 1, name: \"John\"},\n  {id: 2, name: \"Pete\"},\n  {id: 3, name: \"Mary\"}\n];\n\n// returns array of the first two users\nlet someUsers = users.filter(item => item.id < 3);\n\nalert(someUsers.length); // 2",
            "explanation": "Example demonstrating filter."
          }
        ]
      },
      {
        "heading": "Transform an array",
        "paragraphs": [
          "Let's move on to methods that transform and reorder an array."
        ]
      },
      {
        "heading": "map",
        "paragraphs": [
          "The arr.map method is one of the most useful and often used.",
          "It calls the function for each element of the array and returns the array of results.",
          "The syntax is:",
          "For instance, here we transform each element into its length:"
        ],
        "codeExamples": [
          {
            "title": "map",
            "code": "let result = arr.map(function(item, index, array) {\n  // returns the new value instead of item\n});",
            "explanation": "Example demonstrating map."
          },
          {
            "title": "map",
            "code": "let lengths = [\"Bilbo\", \"Gandalf\", \"Nazgul\"].map(item => item.length);\nalert(lengths); // 5,7,6",
            "explanation": "Example demonstrating map."
          }
        ]
      },
      {
        "heading": "sort(fn)",
        "paragraphs": [
          "The call to arr.sort() sorts the array *in place*, changing its element order.",
          "It also returns the sorted array, but the returned value is usually ignored, as `arr` itself is modified.",
          "For instance:",
          "Did you notice anything strange in the outcome?",
          "The order became `1, 15, 2`. Incorrect. But why?"
        ],
        "codeExamples": [
          {
            "title": "sort(fn)",
            "code": "let arr = [ 1, 2, 15 ];\n\n// the method reorders the content of arr\narr.sort();\n\nalert( arr );  // *!*1, 15, 2*/!*",
            "explanation": "Example demonstrating sort(fn)."
          },
          {
            "title": "sort(fn)",
            "code": "function compare(a, b) {\n  if (a > b) return 1; // if the first value is greater than the second\n  if (a == b) return 0; // if values are equal\n  if (a < b) return -1; // if the first value is less than the second\n}",
            "explanation": "Example demonstrating sort(fn)."
          }
        ]
      },
      {
        "heading": "reverse",
        "paragraphs": [
          "The method arr.reverse reverses the order of elements in `arr`.",
          "For instance:",
          "It also returns the array `arr` after the reversal."
        ],
        "codeExamples": [
          {
            "title": "reverse",
            "code": "let arr = [1, 2, 3, 4, 5];\narr.reverse();\n\nalert( arr ); // 5,4,3,2,1",
            "explanation": "Example demonstrating reverse."
          }
        ]
      },
      {
        "heading": "split and join",
        "paragraphs": [
          "Here's the situation from real life. We are writing a messaging app, and the person enters the comma-delimited list of receivers: `John, Pete, Mary`. But for us an array of names would be much more comfortable than a single string. How to get it?",
          "The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter `delim`.",
          "In the example below, we split by a comma followed by a space:",
          "The `split` method has an optional second numeric argument -- a limit on the array length. If it is provided, then the extra elements are ignored. In practice it is rarely used though:",
          "let str = \"test\";"
        ],
        "codeExamples": [
          {
            "title": "split and join",
            "code": "let names = 'Bilbo, Gandalf, Nazgul';\n\nlet arr = names.split(', ');\n\nfor (let name of arr) {\n  alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)\n}",
            "explanation": "Example demonstrating split and join."
          },
          {
            "title": "split and join",
            "code": "let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);\n\nalert(arr); // Bilbo, Gandalf",
            "explanation": "Example demonstrating split and join."
          }
        ]
      },
      {
        "heading": "reduce/reduceRight",
        "paragraphs": [
          "When we need to iterate over an array -- we can use `forEach`, `for` or `for..of`.",
          "When we need to iterate and return the data for each element -- we can use `map`.",
          "The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.",
          "The syntax is:",
          "The function is applied to all array elements one after another and \"carries on\" its result to the next call."
        ],
        "codeExamples": [
          {
            "title": "reduce/reduceRight",
            "code": "let value = arr.reduce(function(accumulator, item, index, array) {\n  // ...\n}, [initial]);",
            "explanation": "Example demonstrating reduce/reduceright."
          },
          {
            "title": "reduce/reduceRight",
            "code": "let arr = [1, 2, 3, 4, 5];\n\nlet result = arr.reduce((sum, current) => sum + current, 0);\n\nalert(result); // 15",
            "explanation": "Example demonstrating reduce/reduceright."
          }
        ],
        "bulletPoints": [
          "`accumulator` -- is the result of the previous function call, equals `initial` the first time (if `initial` is provided).",
          "`item` -- is the current array item.",
          "`index` -- is its position.",
          "`array` -- is the array."
        ]
      },
      {
        "heading": "Array.isArray",
        "paragraphs": [
          "Arrays do not form a separate language type. They are based on objects.",
          "So `typeof` does not help to distinguish a plain object from an array:",
          "...But arrays are used so often that there's a special method for that: Array.isArray(value). It returns `true` if the `value` is an array, and `false` otherwise."
        ],
        "codeExamples": [
          {
            "title": "Array.isArray",
            "code": "alert(typeof {}); // object\nalert(typeof []); // object (same)",
            "explanation": "Example demonstrating array.isarray."
          },
          {
            "title": "Array.isArray",
            "code": "alert(Array.isArray({})); // false\n\nalert(Array.isArray([])); // true",
            "explanation": "Example demonstrating array.isarray."
          }
        ]
      },
      {
        "heading": "Most methods support \"thisArg\"",
        "paragraphs": [
          "Almost all array methods that call functions -- like `find`, `filter`, `map`, with a notable exception of `sort`, accept an optional additional parameter `thisArg`.",
          "That parameter is not explained in the sections above, because it's rarely used. But for completeness, we have to cover it.",
          "Here's the full syntax of these methods:",
          "The value of `thisArg` parameter becomes `this` for `func`.",
          "For example, here we use a method of `army` object as a filter, and `thisArg` passes the context:"
        ],
        "codeExamples": [
          {
            "title": "Most methods support \"thisArg\"",
            "code": "arr.find(func, thisArg);\narr.filter(func, thisArg);\narr.map(func, thisArg);\n// ...\n// thisArg is the optional last argument",
            "explanation": "Example demonstrating most methods support \"thisarg\"."
          },
          {
            "title": "Most methods support \"thisArg\"",
            "code": "let army = {\n  minAge: 18,\n  maxAge: 27,\n  canJoin(user) {\n    return user.age >= this.minAge && user.age < this.maxAge;\n  }\n};\n\nlet users = [\n  {age: 16},\n  {age: 20},\n  {age: 23},\n  {age: 30}\n];\n\n*!*\n// find users, for who army.canJoin returns true\nlet soldiers = users.filter(army.canJoin, army);\n*/!*\n\nalert(soldiers.length); // 2\nalert(soldiers[0].age); // 20\nalert(soldiers[1].age); // 23",
            "explanation": "Example demonstrating most methods support \"thisarg\"."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "A cheat sheet of array methods:",
          "Please note that methods `sort`, `reverse` and `splice` modify the array itself.",
          "These methods are the most used ones, they cover 99% of use cases. But there are few others:",
          "The function `fn` is called on each element of the array similar to `map`. If any/all results are `true`, returns `true`, otherwise `false`.",
          "These methods behave sort of like `||` and `&&` operators: if `fn` returns a truthy value, `arr.some()` immediately returns `true` and stops iterating over the rest of items; if `fn` returns a falsy value, `arr.every()` immediately returns `false` and stops iterating over the rest of items as well."
        ],
        "bulletPoints": [
          "To add/remove elements:",
          "`push(...items)` -- adds items to the end,",
          "`pop()` -- extracts an item from the end,",
          "`shift()` -- extracts an item from the beginning,",
          "`unshift(...items)` -- adds items to the beginning."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Translate border-left-width to borderLeftWidth",
        "description": "Write the function `camelize(str)` that changes dash-separated words like \"my-short-string\" into camel-cased \"myShortString\". That is: removes all dashes, each word after dash becomes uppercased. Examples: ```js camelize(\"background-color\") == 'backgroundColor'; camelize(\"list-style-image\") == 'list",
        "starterCode": "camelize(\"background-color\") == 'backgroundColor';\ncamelize(\"list-style-image\") == 'listStyleImage';\ncamelize(\"-webkit-transition\") == 'WebkitTransition';",
        "solution": "camelize(\"background-color\") == 'backgroundColor';\ncamelize(\"list-style-image\") == 'listStyleImage';\ncamelize(\"-webkit-transition\") == 'WebkitTransition';",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Get average age",
        "description": "Write the function `getAverageAge(users)` that gets an array of objects with property `age` and returns the average age. The formula for the average is `(age1 + age2 + ... + ageN) / N`. For instance: ```js no-beautify let john = { name: \"John\", age: 25 }; let pete = { name: \"Pete\", age: 30 }; let ma",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Filter unique array members",
        "description": "Let `arr` be an array. Create a function `unique(arr)` that should return an array with unique items of `arr`. For instance: ```js function unique(arr) { /* your code */ } let strings = [\"Hare\", \"Krishna\", \"Hare\", \"Krishna\", \"Krishna\", \"Krishna\", \"Hare\", \"Hare\", \":-O\" ]; alert( unique(strings) ); //",
        "starterCode": "function unique(arr) {\n  /* your code */\n}\n\nlet strings = [\"Hare\", \"Krishna\", \"Hare\", \"Krishna\",\n  \"Krishna\", \"Krishna\", \"Hare\", \"Hare\", \":-O\"\n];\n\nalert( unique(strings) ); // Hare, Krishna, :-O",
        "solution": "function unique(arr) {\n  /* your code */\n}\n\nlet strings = [\"Hare\", \"Krishna\", \"Hare\", \"Krishna\",\n  \"Krishna\", \"Krishna\", \"Hare\", \"Hare\", \":-O\"\n];\n\nalert( unique(strings) ); // Hare, Krishna, :-O",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Array Methods in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for array methods.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Array Methods is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Array Methods?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Array Methods is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying array methods.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "array-methods"
    ],
    "slug": "array-methods"
  },
  {
    "title": "Iterable",
    "description": "*Iterable* objects are a generalization of arrays. That's a concept that allows us to make any object useable in a `for..of` loop.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "*Iterable* objects are a generalization of arrays. That's a concept that allows us to make any object useable in a `for..of` loop.",
          "Of course, Arrays are iterable. But there are many other built-in objects, that are iterable as well. For instance, strings are also iterable.",
          "If an object isn't technically an array, but represents a collection (list, set) of something, then `for..of` is a great syntax to loop over it, so let's see how to make it work."
        ]
      },
      {
        "heading": "Symbol.iterator",
        "paragraphs": [
          "We can easily grasp the concept of iterables by making one of our own.",
          "For instance, we have an object that is not an array, but looks suitable for `for..of`.",
          "Like a `range` object that represents an interval of numbers:",
          "To make the `range` object iterable (and thus let `for..of` work) we need to add a method to the object named `Symbol.iterator` (a special built-in symbol just for that).",
          "1. When `for..of` starts, it calls that method once (or errors if not found). The method must return an *iterator* -- an object with the method `next`."
        ],
        "codeExamples": [
          {
            "title": "Symbol.iterator",
            "code": "let range = {\n  from: 1,\n  to: 5\n};\n\n// We want the for..of to work:\n// for(let num of range) ... num=1,2,3,4,5",
            "explanation": "Example demonstrating symbol.iterator."
          },
          {
            "title": "Symbol.iterator",
            "code": "let range = {\n  from: 1,\n  to: 5\n};\n\n// 1. call to for..of initially calls this\nrange[Symbol.iterator] = function() {\n\n  // ...it returns the iterator object:\n  // 2. Onward, for..of works only with the iterator object below, asking it for next values\n  return {\n    current: this.from,\n    last: this.to,\n\n    // 3. next() is called on each iteration by the for..of loop\n    next() {\n      // 4. it should return the value as an object {done:.., value :...}\n      if (this.current <= this.last) {\n        return { done: false, value: this.current++ };\n      } else {\n        return { done: true };\n      }\n    }\n  };\n};\n\n// now it works!\nfor (let num of range) {\n  alert(num); // 1, then 2, 3, 4, 5\n}",
            "explanation": "Example demonstrating symbol.iterator."
          }
        ],
        "bulletPoints": [
          "The `range` itself does not have the `next()` method.",
          "Instead, another object, a so-called \"iterator\" is created by the call to `range[Symbol.iterator]()`, and its `next()` generates values for the iteration."
        ]
      },
      {
        "heading": "String is iterable",
        "paragraphs": [
          "Arrays and strings are most widely used built-in iterables.",
          "For a string, `for..of` loops over its characters:",
          "And it works correctly with surrogate pairs!"
        ],
        "codeExamples": [
          {
            "title": "String is iterable",
            "code": "for (let char of \"test\") {\n  // triggers 4 times: once for each character\n  alert( char ); // t, then e, then s, then t\n}",
            "explanation": "Example demonstrating string is iterable."
          },
          {
            "title": "String is iterable",
            "code": "let str = '\ud835\udcb3\ud83d\ude02';\nfor (let char of str) {\n    alert( char ); // \ud835\udcb3, and then \ud83d\ude02\n}",
            "explanation": "Example demonstrating string is iterable."
          }
        ]
      },
      {
        "heading": "Calling an iterator explicitly",
        "paragraphs": [
          "For deeper understanding, let's see how to use an iterator explicitly.",
          "We'll iterate over a string in exactly the same way as `for..of`, but with direct calls. This code creates a string iterator and gets values from it \"manually\":",
          "That is rarely needed, but gives us more control over the process than `for..of`. For instance, we can split the iteration process: iterate a bit, then stop, do something else, and then resume later."
        ],
        "codeExamples": [
          {
            "title": "Calling an iterator explicitly",
            "code": "let str = \"Hello\";\n\n// does the same as\n// for (let char of str) alert(char);\n\n*!*\nlet iterator = str[Symbol.iterator]();\n*/!*\n\nwhile (true) {\n  let result = iterator.next();\n  if (result.done) break;\n  alert(result.value); // outputs characters one by one\n}",
            "explanation": "Example demonstrating calling an iterator explicitly."
          }
        ]
      },
      {
        "heading": "Iterables and array-likes [#array-like]",
        "paragraphs": [
          "Two official terms look similar, but are very different. Please make sure you understand them well to avoid the confusion.",
          "When we use JavaScript for practical tasks in a browser or any other environment, we may meet objects that are iterables or array-likes, or both.",
          "For instance, strings are both iterable (`for..of` works on them) and array-like (they have numeric indexes and `length`).",
          "But an iterable may not be array-like. And vice versa an array-like may not be iterable.",
          "For example, the `range` in the example above is iterable, but not array-like, because it does not have indexed properties and `length`."
        ],
        "codeExamples": [
          {
            "title": "Iterables and array-likes [#array-like]",
            "code": "let arrayLike = { // has indexes and length => array-like\n  0: \"Hello\",\n  1: \"World\",\n  length: 2\n};\n\n*!*\n// Error (no Symbol.iterator)\nfor (let item of arrayLike) {}\n*/!*",
            "explanation": "Example demonstrating iterables and array-likes [#array-like]."
          }
        ],
        "bulletPoints": [
          "*Iterables* are objects that implement the `Symbol.iterator` method, as described above.",
          "*Array-likes* are objects that have indexes and `length`, so they look like arrays."
        ]
      },
      {
        "heading": "Array.from",
        "paragraphs": [
          "There's a universal method Array.from that takes an iterable or array-like value and makes a \"real\" `Array` from it. Then we can call array methods on it.",
          "For instance:",
          "`Array.from` at the line `(*)` takes the object, examines it for being an iterable or array-like, then makes a new array and copies all items to it.",
          "The same happens for an iterable:",
          "The full syntax for `Array.from` also allows us to provide an optional \"mapping\" function:"
        ],
        "codeExamples": [
          {
            "title": "Array.from",
            "code": "let arrayLike = {\n  0: \"Hello\",\n  1: \"World\",\n  length: 2\n};\n\n*!*\nlet arr = Array.from(arrayLike); // (*)\n*/!*\nalert(arr.pop()); // World (method works)",
            "explanation": "Example demonstrating array.from."
          },
          {
            "title": "Array.from",
            "code": "// assuming that range is taken from the example above\nlet arr = Array.from(range);\nalert(arr); // 1,2,3,4,5 (array toString conversion works)",
            "explanation": "Example demonstrating array.from."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Objects that can be used in `for..of` are called *iterable*.",
          "Objects that have indexed properties and `length` are called *array-like*. Such objects may also have other properties and methods, but lack the built-in methods of arrays.",
          "If we look inside the specification -- we'll see that most built-in methods assume that they work with iterables or array-likes instead of \"real\" arrays, because that's more abstract.",
          "`Array.from(obj[, mapFn, thisArg])` makes a real `Array` from an iterable or array-like `obj`, and we can then use array methods on it. The optional arguments `mapFn` and `thisArg` allow us to apply a function to each item."
        ],
        "bulletPoints": [
          "Technically, iterables must implement the method named `Symbol.iterator`.",
          "The result of `obj[Symbol.iterator]()` is called an *iterator*. It handles further iteration process.",
          "An iterator must have the method named `next()` that returns an object `{done: Boolean, value: any}`, here `done:true` denotes the end of the iteration process, otherwise the `value` is the next value.",
          "The `Symbol.iterator` method is called automatically by `for..of`, but we also can do it directly.",
          "Built-in iterables like strings or arrays, also implement `Symbol.iterator`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Iterable",
        "description": "Apply your understanding of Iterable. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Iterable\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Iterable\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Iterable in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for iterable.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Iterable is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Iterable?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Iterable is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying iterable.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "iterable"
    ],
    "slug": "iterable"
  },
  {
    "title": "Map Set",
    "description": "Till now, we've learned about the following complex data structures:",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Till now, we've learned about the following complex data structures:",
          "But that's not enough for real life. That's why `Map` and `Set` also exist."
        ],
        "bulletPoints": [
          "Objects are used for storing keyed collections.",
          "Arrays are used for storing ordered collections."
        ]
      },
      {
        "heading": "Map",
        "paragraphs": [
          "Map is a collection of keyed data items, just like an `Object`. But the main difference is that `Map` allows keys of any type.",
          "Methods and properties are:",
          "For instance:",
          "As we can see, unlike objects, keys are not converted to strings. Any type of key is possible.",
          "**Map can also use objects as keys.**"
        ],
        "codeExamples": [
          {
            "title": "Map",
            "code": "let map = new Map();\n\nmap.set('1', 'str1');   // a string key\nmap.set(1, 'num1');     // a numeric key\nmap.set(true, 'bool1'); // a boolean key\n\n// remember the regular Object? it would convert keys to string\n// Map keeps the type, so these two are different:\nalert( map.get(1)   ); // 'num1'\nalert( map.get('1') ); // 'str1'\n\nalert( map.size ); // 3",
            "explanation": "Example demonstrating map."
          },
          {
            "title": "Map",
            "code": "Although `map[key]` also works, e.g. we can set `map[key] = 2`, this is treating `map` as a plain JavaScript object, so it implies all corresponding limitations (only string/symbol keys and so on).\n\nSo we should use `map` methods: `set`, `get` and so on.",
            "explanation": "Example demonstrating map."
          }
        ],
        "bulletPoints": [
          "`new Map()` -- creates the map.",
          "`map.set(key, value)` -- stores the value by the key.",
          "`map.get(key)` -- returns the value by the key, `undefined` if `key` doesn't exist in map.",
          "`map.has(key)` -- returns `true` if the `key` exists, `false` otherwise.",
          "`map.delete(key)` -- removes the element (the key/value pair) by the key."
        ]
      },
      {
        "heading": "Iteration over Map",
        "paragraphs": [
          "For looping over a `map`, there are 3 methods:",
          "For instance:",
          "Besides that, `Map` has a built-in `forEach` method, similar to `Array`:"
        ],
        "codeExamples": [
          {
            "title": "Iteration over Map",
            "code": "let recipeMap = new Map([\n  ['cucumber', 500],\n  ['tomatoes', 350],\n  ['onion',    50]\n]);\n\n// iterate over keys (vegetables)\nfor (let vegetable of recipeMap.keys()) {\n  alert(vegetable); // cucumber, tomatoes, onion\n}\n\n// iterate over values (amounts)\nfor (let amount of recipeMap.values()) {\n  alert(amount); // 500, 350, 50\n}\n\n// iterate over [key, value] entries\nfor (let entry of recipeMap) { // the same as of recipeMap.entries()\n  alert(entry); // cucumber,500 (and so on)\n}",
            "explanation": "Example demonstrating iteration over map."
          },
          {
            "title": "Iteration over Map",
            "code": "The iteration goes in the same order as the values were inserted. `Map` preserves this order, unlike a regular `Object`.",
            "explanation": "Example demonstrating iteration over map."
          }
        ],
        "bulletPoints": [
          "`map.keys()` -- returns an iterable for keys,",
          "`map.values()` -- returns an iterable for values,",
          "`map.entries()` -- returns an iterable for entries `[key, value]`, it's used by default in `for..of`."
        ]
      },
      {
        "heading": "Object.entries: Map from Object",
        "paragraphs": [
          "When a `Map` is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:",
          "If we have a plain object, and we'd like to create a `Map` from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.",
          "So we can create a map from an object like this:",
          "Here, `Object.entries` returns the array of key/value pairs: `[ [\"name\",\"John\"], [\"age\", 30] ]`. That's what `Map` needs."
        ],
        "codeExamples": [
          {
            "title": "Object.entries: Map from Object",
            "code": "// array of [key, value] pairs\nlet map = new Map([\n  ['1',  'str1'],\n  [1,    'num1'],\n  [true, 'bool1']\n]);\n\nalert( map.get('1') ); // str1",
            "explanation": "Example demonstrating object.entries: map from object."
          },
          {
            "title": "Object.entries: Map from Object",
            "code": "let obj = {\n  name: \"John\",\n  age: 30\n};\n\n*!*\nlet map = new Map(Object.entries(obj));\n*/!*\n\nalert( map.get('name') ); // John",
            "explanation": "Example demonstrating object.entries: map from object."
          }
        ]
      },
      {
        "heading": "Object.fromEntries: Object from Map",
        "paragraphs": [
          "We've just seen how to create `Map` from a plain object with `Object.entries(obj)`.",
          "There's `Object.fromEntries` method that does the reverse: given an array of `[key, value]` pairs, it creates an object from them:",
          "We can use `Object.fromEntries` to get a plain object from `Map`.",
          "E.g. we store the data in a `Map`, but we need to pass it to a 3rd-party code that expects a plain object.",
          "Here we go:"
        ],
        "codeExamples": [
          {
            "title": "Object.fromEntries: Object from Map",
            "code": "let prices = Object.fromEntries([\n  ['banana', 1],\n  ['orange', 2],\n  ['meat', 4]\n]);\n\n// now prices = { banana: 1, orange: 2, meat: 4 }\n\nalert(prices.orange); // 2",
            "explanation": "Example demonstrating object.fromentries: object from map."
          },
          {
            "title": "Object.fromEntries: Object from Map",
            "code": "let map = new Map();\nmap.set('banana', 1);\nmap.set('orange', 2);\nmap.set('meat', 4);\n\n*!*\nlet obj = Object.fromEntries(map.entries()); // make a plain object (*)\n*/!*\n\n// done!\n// obj = { banana: 1, orange: 2, meat: 4 }\n\nalert(obj.orange); // 2",
            "explanation": "Example demonstrating object.fromentries: object from map."
          }
        ]
      },
      {
        "heading": "Set",
        "paragraphs": [
          "A `Set` is a special type collection - \"set of values\" (without keys), where each value may occur only once.",
          "Its main methods are:",
          "The main feature is that repeated calls of `set.add(value)` with the same value don't do anything. That's the reason why each value appears in a `Set` only once.",
          "For example, we have visitors coming, and we'd like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be \"counted\" only once.",
          "`Set` is just the right thing for that:"
        ],
        "codeExamples": [
          {
            "title": "Set",
            "code": "let set = new Set();\n\nlet john = { name: \"John\" };\nlet pete = { name: \"Pete\" };\nlet mary = { name: \"Mary\" };\n\n// visits, some users come multiple times\nset.add(john);\nset.add(pete);\nset.add(mary);\nset.add(john);\nset.add(mary);\n\n// set keeps only unique values\nalert( set.size ); // 3\n\nfor (let user of set) {\n  alert(user.name); // John (then Pete and Mary)\n}",
            "explanation": "Example demonstrating set."
          }
        ],
        "bulletPoints": [
          "[`new Set([iterable])`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set) -- creates the set, and if an `iterable` object is provided (usually an array), copies values from it into the set.",
          "`set.add(value)` -- adds a value, returns the set itself.",
          "`set.delete(value)` -- removes the value, returns `true` if `value` existed at the moment of the call, otherwise `false`.",
          "`set.has(value)` -- returns `true` if the value exists in the set, otherwise `false`.",
          "`set.clear()` -- removes everything from the set."
        ]
      },
      {
        "heading": "Iteration over Set",
        "paragraphs": [
          "We can loop over a set either with `for..of` or using `forEach`:",
          "Note the funny thing. The callback function passed in `forEach` has 3 arguments: a `value`, then *the same value* `valueAgain`, and then the target object. Indeed, the same value appears in the arguments twice.",
          "That's for compatibility with `Map` where the callback passed `forEach` has three arguments. Looks a bit strange, for sure. But this may help to replace `Map` with `Set` in certain cases with ease, and vice versa.",
          "The same methods `Map` has for iterators are also supported:"
        ],
        "codeExamples": [
          {
            "title": "Iteration over Set",
            "code": "let set = new Set([\"oranges\", \"apples\", \"bananas\"]);\n\nfor (let value of set) alert(value);\n\n// the same with forEach:\nset.forEach((value, valueAgain, set) => {\n  alert(value);\n});",
            "explanation": "Example demonstrating iteration over set."
          }
        ],
        "bulletPoints": [
          "`set.keys()` -- returns an iterable object for values,",
          "`set.values()` -- same as `set.keys()`, for compatibility with `Map`,",
          "`set.entries()` -- returns an iterable object for entries `[value, value]`, exists for compatibility with `Map`."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "`Map` -- is a collection of keyed values.",
          "Methods and properties:",
          "The differences from a regular `Object`:",
          "`Set` -- is a collection of unique values.",
          "Methods and properties:"
        ],
        "bulletPoints": [
          "[`new Map([iterable])`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map) -- creates the map, with optional `iterable` (e.g. array) of `[key,value]` pairs for initialization.",
          "`map.set(key, value)` -- stores the value by the key, returns the map itself.",
          "`map.get(key)` -- returns the value by the key, `undefined` if `key` doesn't exist in map.",
          "`map.has(key)` -- returns `true` if the `key` exists, `false` otherwise.",
          "`map.delete(key)` -- removes the element by the key, returns `true` if `key` existed at the moment of the call, otherwise `false`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Filter unique array members",
        "description": "Let `arr` be an array. Create a function `unique(arr)` that should return an array with unique items of `arr`. For instance: ```js function unique(arr) { /* your code */ } let values = [\"Hare\", \"Krishna\", \"Hare\", \"Krishna\", \"Krishna\", \"Krishna\", \"Hare\", \"Hare\", \":-O\" ]; alert( unique(values) ); // H",
        "starterCode": "function unique(arr) {\n  /* your code */\n}\n\nlet values = [\"Hare\", \"Krishna\", \"Hare\", \"Krishna\",\n  \"Krishna\", \"Krishna\", \"Hare\", \"Hare\", \":-O\"\n];\n\nalert( unique(values) ); // Hare, Krishna, :-O",
        "solution": "function unique(arr) {\n  /* your code */\n}\n\nlet values = [\"Hare\", \"Krishna\", \"Hare\", \"Krishna\",\n  \"Krishna\", \"Krishna\", \"Hare\", \"Hare\", \":-O\"\n];\n\nalert( unique(values) ); // Hare, Krishna, :-O",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Filter anagrams",
        "description": "Anagrams are words that have the same number of same letters, but in different order. For instance: ``` nap - pan ear - are - era cheaters - hectares - teachers ``` Write a function `aclean(arr)` that returns an array cleaned from anagrams. For instance: ```js let arr = [\"nap\", \"teachers\", \"cheaters",
        "starterCode": "nap - pan\near - are - era\ncheaters - hectares - teachers",
        "solution": "nap, pan -> anp\near, era, are -> aer\ncheaters, hectares, teachers -> aceehrst\n...",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Iterable keys",
        "description": "We'd like to get an array of `map.keys()` in a variable and then apply array-specific methods to it, e.g. `.push`. But that doesn't work: ```js run let map = new Map(); map.set(\"name\", \"John\"); let keys = map.keys(); *!* // Error: keys.push is not a function keys.push(\"more\"); */!* ``` Why? How can ",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Map Set in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for map set.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Map Set is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Map Set?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Map Set is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying map set.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "map-set"
    ],
    "slug": "map-set"
  },
  {
    "title": "Weakmap Weakset",
    "description": "As we know from the chapter , JavaScript engine keeps a value in memory while it is \"reachable\" and can potentially be used.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "As we know from the chapter , JavaScript engine keeps a value in memory while it is \"reachable\" and can potentially be used.",
          "For instance:",
          "Usually, properties of an object or elements of an array or another data structure are considered reachable and kept in memory while that data structure is in memory.",
          "For instance, if we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it.",
          "Like this:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let john = { name: \"John\" };\n\n// the object can be accessed, john is the reference to it\n\n// overwrite the reference\njohn = null;\n\n*!*\n// the object will be removed from memory\n*/!*",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let john = { name: \"John\" };\n\nlet array = [ john ];\n\njohn = null; // overwrite the reference\n\n*!*\n// the object previously referenced by john is stored inside the array\n// therefore it won't be garbage-collected\n// we can get it as array[0]\n*/!*",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "WeakMap",
        "paragraphs": [
          "The first difference between `Map` and `WeakMap` is that keys must be objects, not primitive values:",
          "Now, if we use an object as the key in it, and there are no other references to that object -- it will be removed from memory (and from the map) automatically.",
          "Compare it with the regular `Map` example above. Now if `john` only exists as the key of `WeakMap` -- it will be automatically deleted from the map (and memory).",
          "`WeakMap` does not support iteration and methods `keys()`, `values()`, `entries()`, so there's no way to get all keys or values from it.",
          "`WeakMap` has only the following methods:"
        ],
        "codeExamples": [
          {
            "title": "WeakMap",
            "code": "let weakMap = new WeakMap();\n\nlet obj = {};\n\nweakMap.set(obj, \"ok\"); // works fine (object key)\n\n*!*\n// can't use a string as the key\nweakMap.set(\"test\", \"Whoops\"); // Error, because \"test\" is not an object\n*/!*",
            "explanation": "Example demonstrating weakmap."
          },
          {
            "title": "WeakMap",
            "code": "let john = { name: \"John\" };\n\nlet weakMap = new WeakMap();\nweakMap.set(john, \"...\");\n\njohn = null; // overwrite the reference\n\n// john is removed from memory!",
            "explanation": "Example demonstrating weakmap."
          }
        ],
        "bulletPoints": [
          "`weakMap.set(key, value)`",
          "`weakMap.get(key)`",
          "`weakMap.delete(key)`",
          "`weakMap.has(key)`"
        ]
      },
      {
        "heading": "Use case: additional data",
        "paragraphs": [
          "The main area of application for `WeakMap` is an *additional data storage*.",
          "If we're working with an object that \"belongs\" to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive - then `WeakMap` is exactly what's needed.",
          "We put the data to a `WeakMap`, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well.",
          "Let's look at an example.",
          "For instance, we have code that keeps a visit count for users. The information is stored in a map: a user object is the key and the visit count is the value. When a user leaves (its object gets garbage collected), we don't want to store their visit count anymore."
        ],
        "codeExamples": [
          {
            "title": "Use case: additional data",
            "code": "weakMap.set(john, \"secret documents\");\n// if john dies, secret documents will be destroyed automatically",
            "explanation": "Example demonstrating use case: additional data."
          },
          {
            "title": "Use case: additional data",
            "code": "// \ud83d\udcc1 visitsCount.js\nlet visitsCountMap = new Map(); // map: user => visits count\n\n// increase the visits count\nfunction countUser(user) {\n  let count = visitsCountMap.get(user) || 0;\n  visitsCountMap.set(user, count + 1);\n}",
            "explanation": "Example demonstrating use case: additional data."
          }
        ]
      },
      {
        "heading": "Use case: caching",
        "paragraphs": [
          "Another common example is caching. We can store (\"cache\") results from a function, so that future calls on the same object can reuse it.",
          "To achieve that, we can use `Map` (not optimal scenario):",
          "For multiple calls of `process(obj)` with the same object, it only calculates the result the first time, and then just takes it from `cache`. The downside is that we need to clean `cache` when the object is not needed any more.",
          "If we replace `Map` with `WeakMap`, then this problem disappears. The cached result will be removed from memory automatically after the object gets garbage collected."
        ],
        "codeExamples": [
          {
            "title": "Use case: caching",
            "code": "// \ud83d\udcc1 cache.js\nlet cache = new Map();\n\n// calculate and remember the result\nfunction process(obj) {\n  if (!cache.has(obj)) {\n    let result = /* calculations of the result for */ obj;\n\n    cache.set(obj, result);\n    return result;\n  }\n\n  return cache.get(obj);\n}\n\n*!*\n// Now we use process() in another file:\n*/!*\n\n// \ud83d\udcc1 main.js\nlet obj = {/* let's say we have an object */};\n\nlet result1 = process(obj); // calculated\n\n// ...later, from another place of the code...\nlet result2 = process(obj); // remembered result taken from cache\n\n// ...later, when the object is not needed any more:\nobj = null;\n\nalert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)",
            "explanation": "Example demonstrating use case: caching."
          },
          {
            "title": "Use case: caching",
            "code": "// \ud83d\udcc1 cache.js\n*!*\nlet cache = new WeakMap();\n*/!*\n\n// calculate and remember the result\nfunction process(obj) {\n  if (!cache.has(obj)) {\n    let result = /* calculate the result for */ obj;\n\n    cache.set(obj, result);\n    return result;\n  }\n\n  return cache.get(obj);\n}\n\n// \ud83d\udcc1 main.js\nlet obj = {/* some object */};\n\nlet result1 = process(obj);\nlet result2 = process(obj);\n\n// ...later, when the object is not needed any more:\nobj = null;\n\n// Can't get cache.size, as it's a WeakMap,\n// but it's 0 or soon be 0\n// When obj gets garbage collected, cached data will be removed as well",
            "explanation": "Example demonstrating use case: caching."
          }
        ]
      },
      {
        "heading": "WeakSet",
        "paragraphs": [
          "`WeakSet` behaves similarly:",
          "Being \"weak\", it also serves as additional storage. But not for arbitrary data, rather for \"yes/no\" facts. A membership in `WeakSet` may mean something about the object.",
          "For instance, we can add users to `WeakSet` to keep track of those who visited our site:",
          "The most notable limitation of `WeakMap` and `WeakSet` is the absence of iterations, and the inability to get all current content. That may appear inconvenient, but does not prevent `WeakMap/WeakSet` from doing their main job -- be an \"additional\" storage of data for objects which are stored/managed at another place."
        ],
        "codeExamples": [
          {
            "title": "WeakSet",
            "code": "let visitedSet = new WeakSet();\n\nlet john = { name: \"John\" };\nlet pete = { name: \"Pete\" };\nlet mary = { name: \"Mary\" };\n\nvisitedSet.add(john); // John visited us\nvisitedSet.add(pete); // Then Pete\nvisitedSet.add(john); // John again\n\n// visitedSet has 2 users now\n\n// check if John visited?\nalert(visitedSet.has(john)); // true\n\n// check if Mary visited?\nalert(visitedSet.has(mary)); // false\n\njohn = null;\n\n// visitedSet will be cleaned automatically",
            "explanation": "Example demonstrating weakset."
          }
        ],
        "bulletPoints": [
          "It is analogous to `Set`, but we may only add objects to `WeakSet` (not primitives).",
          "An object exists in the set while it is reachable from somewhere else.",
          "Like `Set`, it supports `add`, `has` and `delete`, but not `size`, `keys()` and no iterations."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "`WeakMap` is `Map`-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.",
          "`WeakSet` is `Set`-like collection that stores only objects and removes them once they become inaccessible by other means.",
          "Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.",
          "That comes at the cost of not having support for `clear`, `size`, `keys`, `values`...",
          "`WeakMap` and `WeakSet` are used as \"secondary\" data structures in addition to the \"primary\" object storage. Once the object is removed from the primary storage, if it is only found as the key of `WeakMap` or in a `WeakSet`, it will be cleaned up automatically."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Store \"unread\" flags",
        "description": "There's an array of messages: ```js let messages = [ {text: \"Hello\", from: \"John\"}, {text: \"How goes?\", from: \"John\"}, {text: \"See you soon\", from: \"Alice\"} ]; ``` Your code can access it, but the messages are managed by someone else's code. New messages are added, old ones are removed regularly by ",
        "starterCode": "let messages = [\n  {text: \"Hello\", from: \"John\"},\n  {text: \"How goes?\", from: \"John\"},\n  {text: \"See you soon\", from: \"Alice\"}\n];",
        "solution": "The `WeakSet` allows to store a set of messages and easily check for the existence of a message in it.\n\nIt cleans up itself automatically. The tradeoff is that we can't iterate over it,  can't get \"all read messages\" from it directly. But we can do it by iterating over all messages and filtering those that are in the set.\n\nAnother, different solution could be to add a property like `message.isRead=true` to a message after it's read. As messages objects are managed by another code, that's generally discouraged, but we can use a symbolic property to avoid conflicts.\n\nLike this:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Store read dates",
        "description": "There's an array of messages as in the previous task. The situation is similar. ```js let messages = [ {text: \"Hello\", from: \"John\"}, {text: \"How goes?\", from: \"John\"}, {text: \"See you soon\", from: \"Alice\"} ]; ``` The question now is: which data structure you'd suggest to store the information: \"whe",
        "starterCode": "let messages = [\n  {text: \"Hello\", from: \"John\"},\n  {text: \"How goes?\", from: \"John\"},\n  {text: \"See you soon\", from: \"Alice\"}\n];",
        "solution": "let messages = [\n  {text: \"Hello\", from: \"John\"},\n  {text: \"How goes?\", from: \"John\"},\n  {text: \"See you soon\", from: \"Alice\"}\n];\n\nlet readMap = new WeakMap();\n\nreadMap.set(messages[0], new Date(2017, 1, 1));\n// Date object we'll study later",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Weakmap Weakset in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for weakmap weakset.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Weakmap Weakset is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Weakmap Weakset?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Weakmap Weakset is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying weakmap weakset.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "weakmap-weakset"
    ],
    "slug": "weakmap-weakset"
  },
  {
    "title": "Keys Values Entries",
    "description": "Let's step away from the individual data structures and talk about the iterations over them.",
    "difficulty": "intermediate",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's step away from the individual data structures and talk about the iterations over them.",
          "In the previous chapter we saw methods `map.keys()`, `map.values()`, `map.entries()`.",
          "These methods are generic, there is a common agreement to use them for data structures. If we ever create a data structure of our own, we should implement them too.",
          "They are supported for:",
          "Plain objects also support similar methods, but the syntax is a bit different."
        ],
        "bulletPoints": [
          "`Map`",
          "`Set`",
          "`Array`"
        ]
      },
      {
        "heading": "Object.keys, values, entries",
        "paragraphs": [
          "For plain objects, the following methods are available:",
          "Please note the distinctions (compared to map for example):",
          "| | Map | Object |",
          "|-------------|------------------|--------------|",
          "| Call syntax | `map.keys()` | `Object.keys(obj)`, but not `obj.keys()` |"
        ],
        "codeExamples": [
          {
            "title": "Object.keys, values, entries",
            "code": "let user = {\n  name: \"John\",\n  age: 30\n};",
            "explanation": "Example demonstrating object.keys, values, entries."
          },
          {
            "title": "Object.keys, values, entries",
            "code": "let user = {\n  name: \"John\",\n  age: 30\n};\n\n// loop over values\nfor (let value of Object.values(user)) {\n  alert(value); // John, then 30\n}",
            "explanation": "Example demonstrating object.keys, values, entries."
          }
        ],
        "bulletPoints": [
          "Object.keys(obj) -- returns an array of keys.",
          "Object.values(obj) -- returns an array of values.",
          "Object.entries(obj) -- returns an array of `[key, value]` pairs.",
          "`Object.keys(user) = [\"name\", \"age\"]`",
          "`Object.values(user) = [\"John\", 30]`"
        ]
      },
      {
        "heading": "Transforming objects",
        "paragraphs": [
          "Objects lack many methods that exist for arrays, e.g. `map`, `filter` and others.",
          "If we'd like to apply them, then we can use `Object.entries` followed by `Object.fromEntries`:",
          "1. Use `Object.entries(obj)` to get an array of key/value pairs from `obj`.",
          "2. Use array methods on that array, e.g. `map`, to transform these key/value pairs.",
          "3. Use `Object.fromEntries(array)` on the resulting array to turn it back into an object."
        ],
        "codeExamples": [
          {
            "title": "Transforming objects",
            "code": "let prices = {\n  banana: 1,\n  orange: 2,\n  meat: 4,\n};\n\n*!*\nlet doublePrices = Object.fromEntries(\n  // convert prices to array, map each key/value pair into another pair\n  // and then fromEntries gives back the object\n  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])\n);\n*/!*\n\nalert(doublePrices.meat); // 8",
            "explanation": "Example demonstrating transforming objects."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Sum the properties",
        "description": "There is a `salaries` object with arbitrary number of salaries. Write the function `sumSalaries(salaries)` that returns the sum of all salaries using `Object.values` and the `for..of` loop. If `salaries` is empty, then the result must be `0`. For instance: ```js let salaries = { \"John\": 100, \"Pete\":",
        "starterCode": "let salaries = {\n  \"John\": 100,\n  \"Pete\": 300,\n  \"Mary\": 250\n};\n\nalert( sumSalaries(salaries) ); // 650",
        "solution": "Or, optionally, we could also get the sum using `Object.values` and `reduce`:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Count properties",
        "description": "Write a function `count(obj)` that returns the number of properties in the object: ```js let user = { name: 'John', age: 30 }; alert( count(user) ); // 2 ``` Try to make the code as short as possible. P.S. Ignore symbolic properties, count only \"regular\" ones.",
        "starterCode": "let user = {\n  name: 'John',\n  age: 30\n};\n\nalert( count(user) ); // 2",
        "solution": "let user = {\n  name: 'John',\n  age: 30\n};\n\nalert( count(user) ); // 2",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Keys Values Entries in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for keys values entries.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Keys Values Entries is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Keys Values Entries?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Keys Values Entries is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying keys values entries.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "keys-values-entries"
    ],
    "slug": "keys-values-entries"
  },
  {
    "title": "Destructuring Assignment",
    "description": "The two most used data structures in JavaScript are `Object` and `Array`.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The two most used data structures in JavaScript are `Object` and `Array`.",
          "However, when we pass these to a function, we may not need all of it. The function might only require certain elements or properties.",
          "*Destructuring assignment* is a special syntax that allows us to \"unpack\" arrays or objects into a bunch of variables, as sometimes that's more convenient.",
          "Destructuring also works well with complex functions that have a lot of parameters, default values, and so on. Soon we'll see that."
        ],
        "bulletPoints": [
          "Objects allow us to create a single entity that stores data items by key.",
          "Arrays allow us to gather data items into an ordered list."
        ]
      },
      {
        "heading": "Array destructuring",
        "paragraphs": [
          "Here's an example of how an array is destructured into variables:",
          "Now we can work with variables instead of array members.",
          "It looks great when combined with `split` or other array-returning methods:",
          "As you can see, the syntax is simple. There are several peculiar details though. Let's see more examples to understand it better.",
          "// let [firstName, surname] = arr;"
        ],
        "codeExamples": [
          {
            "title": "Array destructuring",
            "code": "// we have an array with a name and surname\nlet arr = [\"John\", \"Smith\"]\n\n*!*\n// destructuring assignment\n// sets firstName = arr[0]\n// and surname = arr[1]\nlet [firstName, surname] = arr;\n*/!*\n\nalert(firstName); // John\nalert(surname);  // Smith",
            "explanation": "Example demonstrating array destructuring."
          },
          {
            "title": "Array destructuring",
            "code": "let [firstName, surname] = \"John Smith\".split(' ');\nalert(firstName); // John\nalert(surname);  // Smith",
            "explanation": "Example demonstrating array destructuring."
          }
        ]
      },
      {
        "heading": "The rest '...'",
        "paragraphs": [
          "Usually, if the array is longer than the list at the left, the \"extra\" items are omitted.",
          "For example, here only two items are taken, and the rest is just ignored:",
          "If we'd like also to gather all that follows -- we can add one more parameter that gets \"the rest\" using three dots `\"...\"`:",
          "The value of `rest` is the array of the remaining array elements.",
          "We can use any other variable name in place of `rest`, just make sure it has three dots before it and goes last in the destructuring assignment."
        ],
        "codeExamples": [
          {
            "title": "The rest '...'",
            "code": "let [name1, name2] = [\"Julius\", \"Caesar\", \"Consul\", \"of the Roman Republic\"];\n\nalert(name1); // Julius\nalert(name2); // Caesar\n// Further items aren't assigned anywhere",
            "explanation": "Example demonstrating the rest '...'."
          },
          {
            "title": "The rest '...'",
            "code": "let [name1, name2, *!*...rest*/!*] = [\"Julius\", \"Caesar\", *!*\"Consul\", \"of the Roman Republic\"*/!*];\n\n*!*\n// rest is an array of items, starting from the 3rd one\nalert(rest[0]); // Consul\nalert(rest[1]); // of the Roman Republic\nalert(rest.length); // 2\n*/!*",
            "explanation": "Example demonstrating the rest '...'."
          }
        ]
      },
      {
        "heading": "Default values",
        "paragraphs": [
          "If the array is shorter than the list of variables on the left, there will be no errors. Absent values are considered undefined:",
          "If we want a \"default\" value to replace the missing one, we can provide it using `=`:",
          "Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided.",
          "For instance, here we use the `prompt` function for two defaults:",
          "Please note: the `prompt` will run only for the missing value (`surname`)."
        ],
        "codeExamples": [
          {
            "title": "Default values",
            "code": "*!*\nlet [firstName, surname] = [];\n*/!*\n\nalert(firstName); // undefined\nalert(surname); // undefined",
            "explanation": "Example demonstrating default values."
          },
          {
            "title": "Default values",
            "code": "*!*\n// default values\nlet [name = \"Guest\", surname = \"Anonymous\"] = [\"Julius\"];\n*/!*\n\nalert(name);    // Julius (from array)\nalert(surname); // Anonymous (default used)",
            "explanation": "Example demonstrating default values."
          }
        ]
      },
      {
        "heading": "Object destructuring",
        "paragraphs": [
          "The destructuring assignment also works with objects.",
          "The basic syntax is:",
          "We should have an existing object on the right side, that we want to split into variables. The left side contains an object-like \"pattern\" for corresponding properties. In the simplest case, that's a list of variable names in `{...}`.",
          "For instance:",
          "Properties `options.title`, `options.width` and `options.height` are assigned to the corresponding variables."
        ],
        "codeExamples": [
          {
            "title": "Object destructuring",
            "code": "let {var1, var2} = {var1:\u2026, var2:\u2026}",
            "explanation": "Example demonstrating object destructuring."
          },
          {
            "title": "Object destructuring",
            "code": "let options = {\n  title: \"Menu\",\n  width: 100,\n  height: 200\n};\n\n*!*\nlet {title, width, height} = options;\n*/!*\n\nalert(title);  // Menu\nalert(width);  // 100\nalert(height); // 200",
            "explanation": "Example demonstrating object destructuring."
          }
        ]
      },
      {
        "heading": "The rest pattern \"...\"",
        "paragraphs": [
          "What if the object has more properties than we have variables? Can we take some and then assign the \"rest\" somewhere?",
          "We can use the rest pattern, just like we did with arrays. It's not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.",
          "It looks like this:",
          "let title, width, height;",
          "// error in this line"
        ],
        "codeExamples": [
          {
            "title": "The rest pattern \"...\"",
            "code": "let options = {\n  title: \"Menu\",\n  height: 200,\n  width: 100\n};\n\n*!*\n// title = property named title\n// rest = object with the rest of properties\nlet {title, ...rest} = options;\n*/!*\n\n// now title=\"Menu\", rest={height: 200, width: 100}\nalert(rest.height);  // 200\nalert(rest.width);   // 100",
            "explanation": "Example demonstrating the rest pattern \"...\"."
          },
          {
            "title": "The rest pattern \"...\"",
            "code": "In the examples above variables were declared right in the assignment: `let {\u2026} = {\u2026}`. Of course, we could use existing variables too, without `let`. But there's a catch.\n\nThis won't work:",
            "explanation": "Example demonstrating the rest pattern \"...\"."
          }
        ]
      },
      {
        "heading": "Nested destructuring",
        "paragraphs": [
          "If an object or an array contains other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.",
          "In the code below `options` has another object in the property `size` and an array in the property `items`. The pattern on the left side of the assignment has the same structure to extract values from them:",
          "All properties of `options` object except `extra` which is absent in the left part, are assigned to corresponding variables:",
          "![](destructuring-complex.svg)",
          "Finally, we have `width`, `height`, `item1`, `item2` and `title` from the default value."
        ],
        "codeExamples": [
          {
            "title": "Nested destructuring",
            "code": "let options = {\n  size: {\n    width: 100,\n    height: 200\n  },\n  items: [\"Cake\", \"Donut\"],\n  extra: true\n};\n\n// destructuring assignment split in multiple lines for clarity\nlet {\n  size: { // put size here\n    width,\n    height\n  },\n  items: [item1, item2], // assign items here\n  title = \"Menu\" // not present in the object (default value is used)\n} = options;\n\nalert(title);  // Menu\nalert(width);  // 100\nalert(height); // 200\nalert(item1);  // Cake\nalert(item2);  // Donut",
            "explanation": "Example demonstrating nested destructuring."
          }
        ]
      },
      {
        "heading": "Smart function parameters",
        "paragraphs": [
          "There are times when a function has many parameters, most of which are optional. That's especially true for user interfaces. Imagine a function that creates a menu. It may have a width, a height, a title, an item list and so on.",
          "Here's a bad way to write such a function:",
          "In real-life, the problem is how to remember the order of arguments. Usually, IDEs try to help us, especially if the code is well-documented, but still... Another problem is how to call a function when most parameters are ok by default.",
          "Like this?",
          "That's ugly. And becomes unreadable when we deal with more parameters."
        ],
        "codeExamples": [
          {
            "title": "Smart function parameters",
            "code": "function showMenu(title = \"Untitled\", width = 200, height = 100, items = []) {\n  // ...\n}",
            "explanation": "Example demonstrating smart function parameters."
          },
          {
            "title": "Smart function parameters",
            "code": "// undefined where default values are fine\nshowMenu(\"My Menu\", undefined, undefined, [\"Item1\", \"Item2\"])",
            "explanation": "Example demonstrating smart function parameters."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "let {prop : varName = defaultValue, ...rest} = object",
          "This means that property `prop` should go into the variable `varName` and, if no such property exists, then the `default` value should be used.",
          "Object properties that have no mapping are copied to the `rest` object.",
          "let [item1 = defaultValue, item2, ...rest] = array",
          "The first item goes to `item1`; the second goes into `item2`, and all the rest makes the array `rest`."
        ],
        "bulletPoints": [
          "Destructuring assignment allows for instantly mapping an object or array onto many variables.",
          "The full object syntax:",
          "The full array syntax:",
          "It's possible to extract data from nested arrays/objects, for that the left side must have the same structure as the right one."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Destructuring assignment",
        "description": "We have an object: ```js let user = { name: \"John\", years: 30 }; ``` Write the destructuring assignment that reads: - `name` property into the variable `name`. - `years` property into the variable `age`. - `isAdmin` property into the variable `isAdmin` (false, if no such property) Here's an example ",
        "starterCode": "let user = {\n  name: \"John\",\n  years: 30\n};",
        "solution": "let user = {\n  name: \"John\",\n  years: 30\n};",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "The maximal salary",
        "description": "There is a `salaries` object: ```js let salaries = { \"John\": 100, \"Pete\": 300, \"Mary\": 250 }; ``` Create the function `topSalary(salaries)` that returns the name of the top-paid person. - If `salaries` is empty, it should return `null`. - If there are multiple top-paid persons, return any of them. P",
        "starterCode": "let salaries = {\n  \"John\": 100,\n  \"Pete\": 300,\n  \"Mary\": 250\n};",
        "solution": "let salaries = {\n  \"John\": 100,\n  \"Pete\": 300,\n  \"Mary\": 250\n};",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Destructuring Assignment in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for destructuring assignment.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Destructuring Assignment is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Destructuring Assignment?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Destructuring Assignment is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying destructuring assignment.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "destructuring-assignment"
    ],
    "slug": "destructuring-assignment"
  },
  {
    "title": "Date",
    "description": "Let's meet a new built-in object: Date. It stores the date, time and provides methods for date/time management.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's meet a new built-in object: Date. It stores the date, time and provides methods for date/time management.",
          "For instance, we can use it to store creation/modification times, to measure time, or just to print out the current date."
        ]
      },
      {
        "heading": "Creation",
        "paragraphs": [
          "To create a new `Date` object call `new Date()` with one of the following arguments:",
          "`new Date()`",
          ": Without arguments -- create a `Date` object for the current date and time:",
          "let now = new Date();",
          "alert( now ); // shows current date/time"
        ],
        "bulletPoints": [
          "The `year` should have 4 digits. For compatibility, 2 digits are also accepted and considered `19xx`, e.g. `98` is the same as `1998` here, but always using 4 digits is strongly encouraged.",
          "The `month` count starts with `0` (Jan), up to `11` (Dec).",
          "The `date` parameter is actually the day of month, if absent then `1` is assumed.",
          "If `hours/minutes/seconds/ms` is absent, they are assumed to be equal `0`."
        ]
      },
      {
        "heading": "Access date components",
        "paragraphs": [
          "There are methods to access the year, month and so on from the `Date` object:",
          "getFullYear()",
          ": Get the year (4 digits)",
          "getMonth()",
          ": Get the month, **from 0 to 11**."
        ],
        "codeExamples": [
          {
            "title": "Access date components",
            "code": "Many JavaScript engines implement a non-standard method `getYear()`. This method is deprecated. It returns 2-digit year sometimes. Please never use it. There is `getFullYear()` for the year.",
            "explanation": "Example demonstrating access date components."
          },
          {
            "title": "Access date components",
            "code": "// current date\nlet date = new Date();\n\n// the hour in your current time zone\nalert( date.getHours() );\n\n// the hour in UTC+0 time zone (London time without daylight savings)\nalert( date.getUTCHours() );",
            "explanation": "Example demonstrating access date components."
          }
        ]
      },
      {
        "heading": "Setting date components",
        "paragraphs": [
          "The following methods allow to set date/time components:",
          "Every one of them except `setTime()` has a UTC-variant, for instance: `setUTCHours()`.",
          "As we can see, some methods can set multiple components at once, for example `setHours`. The components that are not mentioned are not modified.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Setting date components",
            "code": "let today = new Date();\n\ntoday.setHours(0);\nalert(today); // still today, but the hour is changed to 0\n\ntoday.setHours(0, 0, 0, 0);\nalert(today); // still today, now 00:00:00 sharp.",
            "explanation": "Example demonstrating setting date components."
          }
        ],
        "bulletPoints": [
          "[`setFullYear(year, [month], [date])`](mdn:js/Date/setFullYear)",
          "[`setMonth(month, [date])`](mdn:js/Date/setMonth)",
          "`setDate(date)`",
          "[`setHours(hour, [min], [sec], [ms])`](mdn:js/Date/setHours)",
          "[`setMinutes(min, [sec], [ms])`](mdn:js/Date/setMinutes)"
        ]
      },
      {
        "heading": "Autocorrection",
        "paragraphs": [
          "The *autocorrection* is a very handy feature of `Date` objects. We can set out-of-range values, and it will auto-adjust itself.",
          "For instance:",
          "Out-of-range date components are distributed automatically.",
          "Let's say we need to increase the date \"28 Feb 2016\" by 2 days. It may be \"2 Mar\" or \"1 Mar\" in case of a leap-year. We don't need to think about it. Just add 2 days. The `Date` object will do the rest:",
          "That feature is often used to get the date after the given period of time. For instance, let's get the date for \"70 seconds after now\":"
        ],
        "codeExamples": [
          {
            "title": "Autocorrection",
            "code": "let date = new Date(2013, 0, *!*32*/!*); // 32 Jan 2013 ?!?\nalert(date); // ...is 1st Feb 2013!",
            "explanation": "Example demonstrating autocorrection."
          },
          {
            "title": "Autocorrection",
            "code": "let date = new Date(2016, 1, 28);\n*!*\ndate.setDate(date.getDate() + 2);\n*/!*\n\nalert( date ); // 1 Mar 2016",
            "explanation": "Example demonstrating autocorrection."
          }
        ]
      },
      {
        "heading": "Date to number, date diff",
        "paragraphs": [
          "When a `Date` object is converted to number, it becomes the timestamp same as `date.getTime()`:",
          "The important side effect: dates can be subtracted, the result is their difference in ms.",
          "That can be used for time measurements:"
        ],
        "codeExamples": [
          {
            "title": "Date to number, date diff",
            "code": "let date = new Date();\nalert(+date); // the number of milliseconds, same as date.getTime()",
            "explanation": "Example demonstrating date to number, date diff."
          },
          {
            "title": "Date to number, date diff",
            "code": "let start = new Date(); // start measuring time\n\n// do the job\nfor (let i = 0; i < 100000; i++) {\n  let doSomething = i * i * i;\n}\n\nlet end = new Date(); // end measuring time\n\nalert( `The loop took ${end - start} ms` );",
            "explanation": "Example demonstrating date to number, date diff."
          }
        ]
      },
      {
        "heading": "Date.now()",
        "paragraphs": [
          "If we only want to measure time, we don't need the `Date` object.",
          "There's a special method `Date.now()` that returns the current timestamp.",
          "It is semantically equivalent to `new Date().getTime()`, but it doesn't create an intermediate `Date` object. So it's faster and doesn't put pressure on garbage collection.",
          "It is used mostly for convenience or when performance matters, like in games in JavaScript or other specialized applications.",
          "So this is probably better:"
        ],
        "codeExamples": [
          {
            "title": "Date.now()",
            "code": "*!*\nlet start = Date.now(); // milliseconds count from 1 Jan 1970\n*/!*\n\n// do the job\nfor (let i = 0; i < 100000; i++) {\n  let doSomething = i * i * i;\n}\n\n*!*\nlet end = Date.now(); // done\n*/!*\n\nalert( `The loop took ${end - start} ms` ); // subtract numbers, not dates",
            "explanation": "Example demonstrating date.now()."
          }
        ]
      },
      {
        "heading": "Benchmarking",
        "paragraphs": [
          "If we want a reliable benchmark of CPU-hungry function, we should be careful.",
          "For instance, let's measure two functions that calculate the difference between two dates: which one is faster?",
          "Such performance measurements are often called \"benchmarks\".",
          "These two do exactly the same thing, but one of them uses an explicit `date.getTime()` to get the date in ms, and the other one relies on a date-to-number transform. Their result is always the same.",
          "So, which one is faster?"
        ],
        "codeExamples": [
          {
            "title": "Benchmarking",
            "code": "// we have date1 and date2, which function faster returns their difference in ms?\nfunction diffSubtract(date1, date2) {\n  return date2 - date1;\n}\n\n// or\nfunction diffGetTime(date1, date2) {\n  return date2.getTime() - date1.getTime();\n}",
            "explanation": "Example demonstrating benchmarking."
          },
          {
            "title": "Benchmarking",
            "code": "function diffSubtract(date1, date2) {\n  return date2 - date1;\n}\n\nfunction diffGetTime(date1, date2) {\n  return date2.getTime() - date1.getTime();\n}\n\nfunction bench(f) {\n  let date1 = new Date(0);\n  let date2 = new Date();\n\n  let start = Date.now();\n  for (let i = 0; i < 100000; i++) f(date1, date2);\n  return Date.now() - start;\n}\n\nalert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );\nalert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );",
            "explanation": "Example demonstrating benchmarking."
          }
        ]
      },
      {
        "heading": "Date.parse from a string",
        "paragraphs": [
          "The method Date.parse(str) can read a date from a string.",
          "The string format should be: `YYYY-MM-DDTHH:mm:ss.sssZ`, where:",
          "Shorter variants are also possible, like `YYYY-MM-DD` or `YYYY-MM` or even `YYYY`.",
          "The call to `Date.parse(str)` parses the string in the given format and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0). If the format is invalid, returns `NaN`.",
          "For instance:"
        ],
        "codeExamples": [
          {
            "title": "Date.parse from a string",
            "code": "let ms = Date.parse('2012-01-26T13:51:50.417-07:00');\n\nalert(ms); // 1327611110417  (timestamp)",
            "explanation": "Example demonstrating date.parse from a string."
          },
          {
            "title": "Date.parse from a string",
            "code": "let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );\n\nalert(date);",
            "explanation": "Example demonstrating date.parse from a string."
          }
        ],
        "bulletPoints": [
          "`YYYY-MM-DD` -- is the date: year-month-day.",
          "The character `\"T\"` is used as the delimiter.",
          "`HH:mm:ss.sss` -- is the time: hours, minutes, seconds and milliseconds.",
          "The optional `'Z'` part denotes the time zone in the format `+-hh:mm`. A single letter `Z` would mean UTC+0."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Note that unlike many other systems, timestamps in JavaScript are in milliseconds, not in seconds.",
          "Sometimes we need more precise time measurements. JavaScript itself does not have a way to measure time in microseconds (1 millionth of a second), but most environments provide it. For instance, browser has performance.now() that gives the number of milliseconds from the start of page loading with microsecond precision (3 digits after the point):",
          "Node.js has `microtime` module and other ways. Technically, almost any device and environment allows to get more precision, it's just not in `Date`."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "alert(`Loading started ${performance.now()}ms ago`);\n// Something like: \"Loading started 34731.26000000001ms ago\"\n// .26 is microseconds (260 microseconds)\n// more than 3 digits after the decimal point are precision errors, only the first 3 are correct",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "Date and time in JavaScript are represented with the Date object. We can't create \"only date\" or \"only time\": `Date` objects always carry both.",
          "Months are counted from zero (yes, January is a zero month).",
          "Days of week in `getDay()` are also counted from zero (that's Sunday).",
          "`Date` auto-corrects itself when out-of-range components are set. Good for adding/subtracting days/months/hours.",
          "Dates can be subtracted, giving their difference in milliseconds. That's because a `Date` becomes the timestamp when converted to a number."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Create a date",
        "description": "Create a `Date` object for the date: Feb 20, 2012, 3:12am. The time zone is local. Show it using `alert`.",
        "starterCode": "// Write your code here\n",
        "solution": "We could also create a date from a string, like this:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Show a weekday",
        "description": "Write a function `getWeekDay(date)` to show the weekday in short format: 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'. For instance: ```js no-beautify let date = new Date(2012, 0, 3); // 3 Jan 2012 alert( getWeekDay(date) ); // should output \"TU\" ```",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "European weekday",
        "description": "European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function `getLocalDay(date)` that returns the \"European\" day of week for `date`. ```js no-beautify let date = new Date(2012, 0, 3); // 3 Jan 2012 alert( getLocalDay(date)",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Date in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for date.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Date is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Date?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Date is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying date.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "date"
    ],
    "slug": "date"
  },
  {
    "title": "Json",
    "description": "Let's say we have a complex object, and we'd like to convert it into a string, to send it over a network, or just to output it for logging purposes.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's say we have a complex object, and we'd like to convert it into a string, to send it over a network, or just to output it for logging purposes.",
          "Naturally, such a string should include all important properties.",
          "We could implement the conversion like this:",
          "...But in the process of development, new properties are added, old properties are renamed and removed. Updating such `toString` every time can become a pain. We could try to loop over properties in it, but what if the object is complex and has nested objects in properties? We'd need to implement their conversion as well.",
          "Luckily, there's no need to write the code to handle all this. The task has been solved already."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let user = {\n  name: \"John\",\n  age: 30,\n\n*!*\n  toString() {\n    return `{name: \"${this.name}\", age: ${this.age}}`;\n  }\n*/!*\n};\n\nalert(user); // {name: \"John\", age: 30}",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "JSON.stringify",
        "paragraphs": [
          "The JSON (JavaScript Object Notation) is a general format to represent values and objects. It is described as in RFC 4627 standard. Initially it was made for JavaScript, but many other languages have libraries to handle it as well. So it's easy to use JSON for data exchange when the client uses JavaScript and the server is written on Ruby/PHP/Java/Whatever.",
          "JavaScript provides methods:",
          "For instance, here we `JSON.stringify` a student:",
          "The method `JSON.stringify(student)` takes the object and converts it into a string.",
          "The resulting `json` string is called a *JSON-encoded* or *serialized* or *stringified* or *marshalled* object. We are ready to send it over the wire or put into a plain data store."
        ],
        "codeExamples": [
          {
            "title": "JSON.stringify",
            "code": "let student = {\n  name: 'John',\n  age: 30,\n  isAdmin: false,\n  courses: ['html', 'css', 'js'],\n  spouse: null\n};\n\n*!*\nlet json = JSON.stringify(student);\n*/!*\n\nalert(typeof json); // we've got a string!\n\nalert(json);\n*!*\n/* JSON-encoded object:\n{\n  \"name\": \"John\",\n  \"age\": 30,\n  \"isAdmin\": false,\n  \"courses\": [\"html\", \"css\", \"js\"],\n  \"spouse\": null\n}\n*/\n*/!*",
            "explanation": "Example demonstrating json.stringify."
          },
          {
            "title": "JSON.stringify",
            "code": "// a number in JSON is just a number\nalert( JSON.stringify(1) ) // 1\n\n// a string in JSON is still a string, but double-quoted\nalert( JSON.stringify('test') ) // \"test\"\n\nalert( JSON.stringify(true) ); // true\n\nalert( JSON.stringify([1, 2, 3]) ); // [1,2,3]",
            "explanation": "Example demonstrating json.stringify."
          }
        ],
        "bulletPoints": [
          "`JSON.stringify` to convert objects into JSON.",
          "`JSON.parse` to convert JSON back into an object.",
          "Strings use double quotes. No single quotes or backticks in JSON. So `'John'` becomes `\"John\"`.",
          "Object property names are double-quoted also. That's obligatory. So `age:30` becomes `\"age\":30`.",
          "Objects `{ ... }`"
        ]
      },
      {
        "heading": "Excluding and transforming: replacer",
        "paragraphs": [
          "The full syntax of `JSON.stringify` is:",
          "value",
          ": A value to encode.",
          "replacer",
          ": Array of properties to encode or a mapping function `function(key, value)`."
        ],
        "codeExamples": [
          {
            "title": "Excluding and transforming: replacer",
            "code": "let json = JSON.stringify(value[, replacer, space])",
            "explanation": "Example demonstrating excluding and transforming: replacer."
          },
          {
            "title": "Excluding and transforming: replacer",
            "code": "let room = {\n  number: 23\n};\n\nlet meetup = {\n  title: \"Conference\",\n  participants: [{name: \"John\"}, {name: \"Alice\"}],\n  place: room // meetup references room\n};\n\nroom.occupiedBy = meetup; // room references meetup\n\nalert( JSON.stringify(meetup, *!*['title', 'participants']*/!*) );\n// {\"title\":\"Conference\",\"participants\":[{},{}]}",
            "explanation": "Example demonstrating excluding and transforming: replacer."
          }
        ]
      },
      {
        "heading": "Formatting: space",
        "paragraphs": [
          "The third argument of `JSON.stringify(value, replacer, space)` is the number of spaces to use for pretty formatting.",
          "Previously, all stringified objects had no indents and extra spaces. That's fine if we want to send an object over a network. The `space` argument is used exclusively for a nice output.",
          "Here `space = 2` tells JavaScript to show nested objects on multiple lines, with indentation of 2 spaces inside an object:",
          "The third argument can also be a string. In this case, the string is used for indentation instead of a number of spaces.",
          "The `space` parameter is used solely for logging and nice-output purposes."
        ],
        "codeExamples": [
          {
            "title": "Formatting: space",
            "code": "let user = {\n  name: \"John\",\n  age: 25,\n  roles: {\n    isAdmin: false,\n    isEditor: true\n  }\n};\n\nalert(JSON.stringify(user, null, 2));\n/* two-space indents:\n{\n  \"name\": \"John\",\n  \"age\": 25,\n  \"roles\": {\n    \"isAdmin\": false,\n    \"isEditor\": true\n  }\n}\n*/\n\n/* for JSON.stringify(user, null, 4) the result would be more indented:\n{\n    \"name\": \"John\",\n    \"age\": 25,\n    \"roles\": {\n        \"isAdmin\": false,\n        \"isEditor\": true\n    }\n}\n*/",
            "explanation": "Example demonstrating formatting: space."
          }
        ]
      },
      {
        "heading": "Custom \"toJSON\"",
        "paragraphs": [
          "Like `toString` for string conversion, an object may provide method `toJSON` for to-JSON conversion. `JSON.stringify` automatically calls it if available.",
          "For instance:",
          "Here we can see that `date` `(1)` became a string. That's because all dates have a built-in `toJSON` method which returns such kind of string.",
          "Now let's add a custom `toJSON` for our object `room` `(2)`:",
          "As we can see, `toJSON` is used both for the direct call `JSON.stringify(room)` and when `room` is nested in another encoded object."
        ],
        "codeExamples": [
          {
            "title": "Custom \"toJSON\"",
            "code": "let room = {\n  number: 23\n};\n\nlet meetup = {\n  title: \"Conference\",\n  date: new Date(Date.UTC(2017, 0, 1)),\n  room\n};\n\nalert( JSON.stringify(meetup) );\n/*\n  {\n    \"title\":\"Conference\",\n*!*\n    \"date\":\"2017-01-01T00:00:00.000Z\",  // (1)\n*/!*\n    \"room\": {\"number\":23}               // (2)\n  }\n*/",
            "explanation": "Example demonstrating custom \"tojson\"."
          },
          {
            "title": "Custom \"toJSON\"",
            "code": "let room = {\n  number: 23,\n*!*\n  toJSON() {\n    return this.number;\n  }\n*/!*\n};\n\nlet meetup = {\n  title: \"Conference\",\n  room\n};\n\n*!*\nalert( JSON.stringify(room) ); // 23\n*/!*\n\nalert( JSON.stringify(meetup) );\n/*\n  {\n    \"title\":\"Conference\",\n*!*\n    \"room\": 23\n*/!*\n  }\n*/",
            "explanation": "Example demonstrating custom \"tojson\"."
          }
        ]
      },
      {
        "heading": "JSON.parse",
        "paragraphs": [
          "To decode a JSON-string, we need another method named JSON.parse.",
          "The syntax:",
          "str",
          ": JSON-string to parse.",
          "reviver"
        ],
        "codeExamples": [
          {
            "title": "JSON.parse",
            "code": "let value = JSON.parse(str[, reviver]);",
            "explanation": "Example demonstrating json.parse."
          },
          {
            "title": "JSON.parse",
            "code": "// stringified array\nlet numbers = \"[0, 1, 2, 3]\";\n\nnumbers = JSON.parse(numbers);\n\nalert( numbers[1] ); // 1",
            "explanation": "Example demonstrating json.parse."
          }
        ]
      },
      {
        "heading": "Using reviver",
        "paragraphs": [
          "Imagine, we got a stringified `meetup` object from the server.",
          "It looks like this:",
          "...And now we need to *deserialize* it, to turn back into JavaScript object.",
          "Let's do it by calling `JSON.parse`:",
          "Whoops! An error!"
        ],
        "codeExamples": [
          {
            "title": "Using reviver",
            "code": "// title: (meetup title), date: (meetup date)\nlet str = '{\"title\":\"Conference\",\"date\":\"2017-11-30T12:00:00.000Z\"}';",
            "explanation": "Example demonstrating using reviver."
          },
          {
            "title": "Using reviver",
            "code": "let str = '{\"title\":\"Conference\",\"date\":\"2017-11-30T12:00:00.000Z\"}';\n\nlet meetup = JSON.parse(str);\n\n*!*\nalert( meetup.date.getDate() ); // Error!\n*/!*",
            "explanation": "Example demonstrating using reviver."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Understanding Summary in JavaScript."
        ],
        "bulletPoints": [
          "JSON is a data format that has its own independent standard and libraries for most programming languages.",
          "JSON supports plain objects, arrays, strings, numbers, booleans, and `null`.",
          "JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.",
          "Both methods support transformer functions for smart reading/writing.",
          "If an object has `toJSON`, then it is called by `JSON.stringify`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Turn the object into JSON and back",
        "description": "Turn the `user` into JSON and then read it back into another variable. ```js let user = { name: \"John Smith\", age: 35 }; ```",
        "starterCode": "let user = {\n  name: \"John Smith\",\n  age: 35\n};",
        "solution": "let user = {\n  name: \"John Smith\",\n  age: 35\n};\n\n*!*\nlet user2 = JSON.parse(JSON.stringify(user));\n*/!*",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Exclude backreferences",
        "description": "In simple cases of circular references, we can exclude an offending property from serialization by its name. But sometimes we can't just use the name, as it may be used both in circular references and normal properties. So we can check the property by its value. Write `replacer` function to stringif",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Json in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for json.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Json is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Json?",
        "options": [
          "Always test edge cases and understand the underlying execution model.",
          "Rely strictly on implicit type coercion.",
          "Avoid writing functions or modular code.",
          "Ignore browser console diagnostics and warnings."
        ],
        "correctIndex": 0,
        "explanation": "Understanding execution context, semantics, and testing edge cases ensures robust, maintainable JavaScript."
      }
    ],
    "keyTakeaways": [
      "Json is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying json.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "json"
    ],
    "slug": "json"
  }
];
