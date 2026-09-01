import type { Lesson } from '../../types';

export const part9Lessons: Lesson[] = [
  {
    "title": "Bezier Curve",
    "description": "Bezier curves are used in computer graphics to draw shapes, for CSS animation and in many other places.",
    "difficulty": "advanced",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Bezier curves are used in computer graphics to draw shapes, for CSS animation and in many other places.",
          "They are a very simple thing, worth to study once and then feel comfortable in the world of vector graphics and advanced animations."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "This article provides a theoretical, but very needed insight into what Bezier curves are, while [the next one](info:css-animations#bezier-curve) shows how we can use them for CSS animations.\n\nPlease take your time to read and understand the concept, it'll serve you well.",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Control points",
        "paragraphs": [
          "A bezier curve is defined by control points.",
          "There may be 2, 3, 4 or more.",
          "For instance, two points curve:",
          "![](bezier2.svg)",
          "Three points curve:"
        ]
      },
      {
        "heading": "De Casteljau's algorithm",
        "paragraphs": [
          "There's a mathematical formula for Bezier curves, but let's cover it a bit later, because",
          "De Casteljau's algorithm is identical to the mathematical definition and visually shows how it is constructed.",
          "First let's see the 3-points example.",
          "Here's the demo, and the explanation follow.",
          "Control points (1,2 and 3) can be moved by the mouse. Press the \"play\" button to run it."
        ],
        "codeExamples": [
          {
            "title": "De Casteljau's algorithm",
            "code": "**Run and pause examples to clearly see the segments and how the curve is built.**",
            "explanation": "Example demonstrating de casteljau's algorithm."
          },
          {
            "title": "De Casteljau's algorithm",
            "code": "If there's something unclear in the algorithm description, please look at the live examples above to see how\nthe curve is built.",
            "explanation": "Example demonstrating de casteljau's algorithm."
          }
        ],
        "bulletPoints": [
          "On each brown segment we take a point located on the distance proportional to `t` from its beginning. As there are two segments, we have two points.",
          "Connect the points. On the picture below the connecting segment is painted blue.",
          "Connect control points by segments: 1 -> 2, 2 -> 3, 3 -> 4. There will be 3 brown segments.",
          "For each `t` in the interval from `0` to `1`:",
          "We take points on these segments on the distance proportional to `t` from the beginning. These points are connected, so that we have two green segments."
        ]
      },
      {
        "heading": "Maths",
        "paragraphs": [
          "A Bezier curve can be described using a mathematical formula.",
          "As we saw -- there's actually no need to know it, most people just draw the curve by moving points with a mouse. But if you're into maths -- here it is.",
          "Given the coordinates of control points Pi: the first control point has coordinates P1 = (x1, y1), the second: P2 = (x2, y2), and so on, the curve coordinates are described by the equation that depends on the parameter `t` from the segment `[0,1]`.",
          "P = (1-t)P1 + tP2",
          "P = (1\u2212t)2P1 + 2(1\u2212t)tP2 + t2P3"
        ],
        "bulletPoints": [
          "The formula for a 2-points curve:",
          "For 3 control points:",
          "For 4 control points:",
          "x = (1\u2212t)2x1 + 2(1\u2212t)tx2 + t2x3",
          "y = (1\u2212t)2y1 + 2(1\u2212t)ty2 + t2y3"
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Bezier curves are defined by their control points.",
          "We saw two definitions of Bezier curves:",
          "1. Using a drawing process: De Casteljau's algorithm.",
          "2. Using a mathematical formulas.",
          "Good properties of Bezier curves:"
        ],
        "bulletPoints": [
          "We can draw smooth lines with a mouse by moving control points.",
          "Complex shapes can be made of several Bezier curves.",
          "In computer graphics, modeling, vector graphic editors. Fonts are described by Bezier curves.",
          "In web development -- for graphics on Canvas and in the SVG format. By the way, \"live\" examples above are written in SVG. They are actually a single SVG document that is given different points as parameters. You can open it in a separate window and see the source: demo.svg.",
          "In CSS animation to describe the path and speed of animation."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Bezier Curve",
        "description": "Apply your understanding of Bezier Curve. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Bezier Curve\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Bezier Curve\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Bezier Curve in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for bezier curve.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Bezier Curve is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Bezier Curve?",
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
      "Bezier Curve is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying bezier curve.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "bezier-curve"
    ],
    "slug": "bezier-curve"
  },
  {
    "title": "Css Animations",
    "description": "CSS animations make it possible to do simple animations without JavaScript at all.",
    "difficulty": "advanced",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "CSS animations make it possible to do simple animations without JavaScript at all.",
          "JavaScript can be used to control CSS animations and make them even better, with little code."
        ]
      },
      {
        "heading": "CSS transitions [#css-transition]",
        "paragraphs": [
          "The idea of CSS transitions is simple. We describe a property and how its changes should be animated. When the property changes, the browser paints the animation.",
          "That is, all we need is to change the property, and the fluid transition will be done by the browser.",
          "For instance, the CSS below animates changes of `background-color` for 3 seconds:",
          "Now if an element has `.animated` class, any change of `background-color` is animated during 3 seconds.",
          "Click the button below to animate the background:"
        ],
        "codeExamples": [
          {
            "title": "CSS transitions [#css-transition]",
            "code": ".animated {\n  transition-property: background-color;\n  transition-duration: 3s;\n}",
            "explanation": "Example demonstrating css transitions [#css-transition]."
          },
          {
            "title": "CSS transitions [#css-transition]",
            "code": "<button id=\"color\">Click me</button>\n\n<style>\n  #color {\n    transition-property: background-color;\n    transition-duration: 3s;\n  }\n</style>\n\n<script>\n  color.onclick = function() {\n    this.style.backgroundColor = 'red';\n  };\n</script>",
            "explanation": "Example demonstrating css transitions [#css-transition]."
          }
        ],
        "bulletPoints": [
          "`transition-property`",
          "`transition-duration`",
          "`transition-timing-function`",
          "`transition-delay`"
        ]
      },
      {
        "heading": "transition-property",
        "paragraphs": [
          "In `transition-property`, we write a list of properties to animate, for instance: `left`, `margin-left`, `height`, `color`. Or we could write `all`, which means \"animate all properties\".",
          "Do note that, there are properties which can not be animated. However, most of the generally used properties are animatable."
        ]
      },
      {
        "heading": "transition-duration",
        "paragraphs": [
          "In `transition-duration` we can specify how long the animation should take. The time should be in CSS time format: in seconds `s` or milliseconds `ms`."
        ]
      },
      {
        "heading": "transition-delay",
        "paragraphs": [
          "In `transition-delay` we can specify the delay *before* the animation. For instance, if `transition-delay` is `1s` and `transition-duration` is `2s`, then the animation starts 1 second after the property change and the total duration will be 2 seconds.",
          "Negative values are also possible. Then the animation is shown immediately, but the starting point of the animation will be after given value (time). For example, if `transition-delay` is `-1s` and `transition-duration` is `2s`, then animation starts from the halfway point and total duration will be 1 second.",
          "Here the animation shifts numbers from `0` to `9` using CSS `translate` property:",
          "[codetabs src=\"digits\"]",
          "The `transform` property is animated like this:"
        ],
        "codeExamples": [
          {
            "title": "transition-delay",
            "code": "#stripe.animate {\n  transform: translate(-90%);\n  transition-property: transform;\n  transition-duration: 9s;\n}",
            "explanation": "Example demonstrating transition-delay."
          },
          {
            "title": "transition-delay",
            "code": "stripe.classList.add('animate');",
            "explanation": "Example demonstrating transition-delay."
          }
        ]
      },
      {
        "heading": "transition-timing-function",
        "paragraphs": [
          "The timing function describes how the animation process is distributed along its timeline. Will it start slowly and then go fast, or vice versa.",
          "It appears to be the most complicated property at first. But it becomes very simple if we devote a bit time to it.",
          "That property accepts two kinds of values: a Bezier curve or steps. Let's start with the curve, as it's used more often."
        ]
      },
      {
        "heading": "Bezier curve",
        "paragraphs": [
          "The timing function can be set as a Bezier curve with 4 control points that satisfy the conditions:",
          "1. First control point: `(0,0)`.",
          "2. Last control point: `(1,1)`.",
          "3. For intermediate points, the values of `x` must be in the interval `0..1`, `y` can be anything.",
          "The syntax for a Bezier curve in CSS: `cubic-bezier(x2, y2, x3, y3)`. Here we need to specify only 2nd and 3rd control points, because the 1st one is fixed to `(0,0)` and the 4th one is `(1,1)`."
        ],
        "codeExamples": [
          {
            "title": "Bezier curve",
            "code": ".train {\n  left: 0;\n  transition: left 5s cubic-bezier(0, 0, 1, 1);\n  /* click on a train sets left to 450px, thus triggering the animation */\n}",
            "explanation": "Example demonstrating bezier curve."
          },
          {
            "title": "Bezier curve",
            "code": ".train {\n  left: 0;\n  transition: left 5s cubic-bezier(0, .5, .5, 1);\n  /* click on a train sets left to 450px, thus triggering the animation */\n}",
            "explanation": "Example demonstrating bezier curve."
          }
        ],
        "bulletPoints": [
          "The `x` axis is the time: `0` -- the start, `1` -- the end of `transition-duration`.",
          "The `y` axis specifies the completion of the process: `0` -- the starting value of the property, `1` -- the final value.",
          "First, the train goes *back*: `left` becomes less than `100px`.",
          "Then it goes forward, a little bit farther than `400px`.",
          "And then back again -- to `400px`."
        ]
      },
      {
        "heading": "Steps",
        "paragraphs": [
          "The timing function `steps(number of steps[, start/end])` allows splitting an transition into multiple steps.",
          "Let's see that in an example with digits.",
          "Here's a list of digits, without any animations, just as a source:",
          "[codetabs src=\"step-list\"]",
          "In the HTML, a stripe of digits is enclosed into a fixed-length ``:"
        ],
        "codeExamples": [
          {
            "title": "Steps",
            "code": "<div id=\"digit\">\n  <div id=\"stripe\">0123456789</div>\n</div>",
            "explanation": "Example demonstrating steps."
          },
          {
            "title": "Steps",
            "code": "#stripe.animate  {\n  transform: translate(-90%);\n  transition: transform 9s *!*steps(9, start)*/!*;\n}",
            "explanation": "Example demonstrating steps."
          }
        ],
        "bulletPoints": [
          "`0s` -- `-10%` (first change in the beginning of the 1st second, immediately)",
          "`1s` -- `-20%`",
          "`8s` -- `-90%`",
          "(the last second shows the final value).",
          "`0s` -- `0` (during the first second nothing changes)"
        ]
      },
      {
        "heading": "Event: \"transitionend\"",
        "paragraphs": [
          "When the CSS animation finishes, the `transitionend` event triggers.",
          "It is widely used to do an action after the animation is done. Also we can join animations.",
          "For instance, the ship in the example below starts to sail there and back when clicked, each time farther and farther to the right:",
          "[iframe src=\"boat\" height=300 edit link]",
          "The animation is initiated by the function `go` that re-runs each time the transition finishes, and flips the direction:"
        ],
        "codeExamples": [
          {
            "title": "Event: \"transitionend\"",
            "code": "boat.onclick = function() {\n  //...\n  let times = 1;\n\n  function go() {\n    if (times % 2) {\n      // sail to the right\n      boat.classList.remove('back');\n      boat.style.marginLeft = 100 * times + 200 + 'px';\n    } else {\n      // sail to the left\n      boat.classList.add('back');\n      boat.style.marginLeft = 100 * times - 200 + 'px';\n    }\n\n  }\n\n  go();\n\n  boat.addEventListener('transitionend', function() {\n    times++;\n    go();\n  });\n};",
            "explanation": "Example demonstrating event: \"transitionend\"."
          }
        ]
      },
      {
        "heading": "Keyframes",
        "paragraphs": [
          "We can join multiple simple animations together using the `@keyframes` CSS rule.",
          "It specifies the \"name\" of the animation and rules - what, when and where to animate. Then using the `animation` property, we can attach the animation to the element and specify additional parameters for it.",
          "Here's an example with explanations:",
          "There are many articles about `@keyframes` and a detailed specification.",
          "You probably won't need `@keyframes` often, unless everything is in constant motion on your sites."
        ],
        "codeExamples": [
          {
            "title": "Keyframes",
            "code": "<div class=\"progress\"></div>\n\n<style>\n*!*\n  @keyframes go-left-right {        /* give it a name: \"go-left-right\" */\n    from { left: 0px; }             /* animate from left: 0px */\n    to { left: calc(100% - 50px); } /* animate to left: 100%-50px */\n  }\n*/!*\n\n  .progress {\n*!*\n    animation: go-left-right 3s infinite alternate;\n    /* apply the animation \"go-left-right\" to the element\n       duration 3 seconds\n       number of times: infinite\n       alternate direction every time\n    */\n*/!*\n\n    position: relative;\n    border: 2px solid green;\n    width: 50px;\n    height: 20px;\n    background: lime;\n  }\n</style>",
            "explanation": "Example demonstrating keyframes."
          }
        ]
      },
      {
        "heading": "Performance",
        "paragraphs": [
          "Most CSS properties can be animated, because most of them are numeric values. For instance, `width`, `color`, `font-size` are all numbers. When you animate them, the browser gradually changes these numbers frame by frame, creating a smooth effect.",
          "However, not all animations will look as smooth as you'd like, because different CSS properties cost differently to change.",
          "In more technical details, when there's a style change, the browser goes through 3 steps to render the new look:",
          "1. **Layout**: re-compute the geometry and position of each element, then",
          "2. **Paint**: re-compute how everything should look like at their places, including background, colors,"
        ],
        "codeExamples": [
          {
            "title": "Performance",
            "code": "<img src=\"https://js.cx/clipart/boat.png\" id=\"boat\">\n\n<style>\n#boat {\n  cursor: pointer;\n  transition: transform 2s ease-in-out, opacity 2s ease-in-out;\n}\n\n.move {\n  transform: translateX(300px);\n  opacity: 0;\n}\n</style>\n<script>\n  boat.onclick = () => boat.classList.add('move');\n</script>",
            "explanation": "Example demonstrating performance."
          },
          {
            "title": "Performance",
            "code": "<h2 onclick=\"this.classList.toggle('animated')\">click me to start / stop</h2>\n<style>\n  .animated {\n    animation: hello-goodbye 1.8s infinite;\n    width: fit-content;\n  }\n  @keyframes hello-goodbye {\n    0% {\n      transform: translateY(-60px) rotateX(0.7turn);\n      opacity: 0;\n    }\n    50% {\n      transform: none;\n      opacity: 1;\n    }\n    100% {\n      transform: translateX(230px) rotateZ(90deg) scale(0.5);\n      opacity: 0;\n    }\n  }\n</style>",
            "explanation": "Example demonstrating performance."
          }
        ],
        "bulletPoints": [
          "CSS transforms affect the target element box as a whole (rotate, flip, stretch, shift it).",
          "CSS transforms never affect neighbour elements."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "CSS animations allow smoothly (or step-by-step) animated changes of one or multiple CSS properties.",
          "They are good for most animation tasks. We're also able to use JavaScript for animations, the next chapter is devoted to that.",
          "Limitations of CSS animations compared to JavaScript animations:",
          "In early examples in this chapter, we animate `font-size`, `left`, `width`, `height`, etc. In real life projects, we should use `transform: scale()` and `transform: translate()` for better performance.",
          "The majority of animations can be implemented using CSS as described in this chapter. And the `transitionend` event allows JavaScript to be run after the animation, so it integrates fine with the code."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "+ Simple things done simply.\n+ Fast and lightweight for CPU.\n- JavaScript animations are flexible. They can implement any animation logic, like an \"explosion\" of an element.\n- Not just property changes. We can create new elements in JavaScript as part of the animation.",
            "explanation": "Example demonstrating summary."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Animate a plane (CSS)",
        "description": "Show the animation like on the picture below (click the plane): [iframe src=\"solution\" height=300] - The picture grows on click from `40x24px` to `400x240px` (10 times larger). - The animation takes 3 seconds. - At the end output: \"Done!\". - During the animation process, there may be more clicks on ",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Animate the flying plane (CSS)",
        "description": "Modify the solution of the previous task to make the plane grow more than its original size 400x240px (jump out), and then return to that size. Here's how it should look (click on the plane): [iframe src=\"solution\" height=350] Take the solution of the previous task as the source.",
        "starterCode": "// Write your code here\n",
        "solution": "// Your solution here\n",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Animated circle",
        "description": "Create a function `showCircle(cx, cy, radius)` that shows an animated growing circle. - `cx,cy` are window-relative coordinates of the center of the circle, - `radius` is the radius of the circle. Click the button below to see how it should look like: [iframe src=\"solution\" height=260] The source do",
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
        "question": "What is the primary role of Css Animations in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for css animations.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Css Animations is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Css Animations?",
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
      "Css Animations is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying css animations.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "css-animations"
    ],
    "slug": "css-animations"
  },
  {
    "title": "Js Animation",
    "description": "JavaScript animations can handle things that CSS can't.",
    "difficulty": "advanced",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "JavaScript animations can handle things that CSS can't.",
          "For instance, moving along a complex path, with a timing function different from Bezier curves, or an animation on a canvas."
        ]
      },
      {
        "heading": "Using setInterval",
        "paragraphs": [
          "An animation can be implemented as a sequence of frames -- usually small changes to HTML/CSS properties.",
          "For instance, changing `style.left` from `0px` to `100px` moves the element. And if we increase it in `setInterval`, changing by `2px` with a tiny delay, like 50 times per second, then it looks smooth. That's the same principle as in the cinema: 24 frames per second is enough to make it look smooth.",
          "The pseudo-code can look like this:",
          "More complete example of the animation:",
          "Click for the demo:"
        ],
        "codeExamples": [
          {
            "title": "Using setInterval",
            "code": "let timer = setInterval(function() {\n  if (animation complete) clearInterval(timer);\n  else increase style.left by 2px\n}, 20); // change by 2px every 20ms, about 50 frames per second",
            "explanation": "Example demonstrating using setinterval."
          },
          {
            "title": "Using setInterval",
            "code": "let start = Date.now(); // remember start time\n\nlet timer = setInterval(function() {\n  // how much time passed from the start?\n  let timePassed = Date.now() - start;\n\n  if (timePassed >= 2000) {\n    clearInterval(timer); // finish the animation after 2 seconds\n    return;\n  }\n\n  // draw the animation at the moment timePassed\n  draw(timePassed);\n\n}, 20);\n\n// as timePassed goes from 0 to 2000\n// left gets values from 0px to 400px\nfunction draw(timePassed) {\n  train.style.left = timePassed / 5 + 'px';\n}",
            "explanation": "Example demonstrating using setinterval."
          }
        ]
      },
      {
        "heading": "Using requestAnimationFrame",
        "paragraphs": [
          "Let's imagine we have several animations running simultaneously.",
          "If we run them separately, then even though each one has `setInterval(..., 20)`, then the browser would have to repaint much more often than every `20ms`.",
          "That's because they have different starting time, so \"every 20ms\" differs between different animations. The intervals are not aligned. So we'll have several independent runs within `20ms`.",
          "In other words, this:",
          "...Is lighter than three independent calls:"
        ],
        "codeExamples": [
          {
            "title": "Using requestAnimationFrame",
            "code": "setInterval(function() {\n  animate1();\n  animate2();\n  animate3();\n}, 20)",
            "explanation": "Example demonstrating using requestanimationframe."
          },
          {
            "title": "Using requestAnimationFrame",
            "code": "setInterval(animate1, 20); // independent animations\nsetInterval(animate2, 20); // in different places of the script\nsetInterval(animate3, 20);",
            "explanation": "Example demonstrating using requestanimationframe."
          }
        ]
      },
      {
        "heading": "Structured animation",
        "paragraphs": [
          "Now we can make a more universal animation function based on `requestAnimationFrame`:",
          "Function `animate` accepts 3 parameters that essentially describes the animation:",
          "`duration`",
          ": Total time of animation. Like, `1000`.",
          "`timing(timeFraction)`"
        ],
        "codeExamples": [
          {
            "title": "Structured animation",
            "code": "function animate({timing, draw, duration}) {\n\n  let start = performance.now();\n\n  requestAnimationFrame(function animate(time) {\n    // timeFraction goes from 0 to 1\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    // calculate the current animation state\n    let progress = timing(timeFraction)\n\n    draw(progress); // draw it\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    }\n\n  });\n}",
            "explanation": "Example demonstrating structured animation."
          },
          {
            "title": "Structured animation",
            "code": "animate({\n  duration: 1000,\n  timing(timeFraction) {\n    return timeFraction;\n  },\n  draw(progress) {\n    elem.style.width = progress * 100 + '%';\n  }\n});",
            "explanation": "Example demonstrating structured animation."
          }
        ]
      },
      {
        "heading": "Timing functions",
        "paragraphs": [
          "We saw the simplest, linear timing function above.",
          "Let's see more of them. We'll try movement animations with different timing functions to see how they work."
        ]
      },
      {
        "heading": "Power of n",
        "paragraphs": [
          "If we want to speed up the animation, we can use `progress` in the power `n`.",
          "For instance, a parabolic curve:",
          "The graph:",
          "![](quad.svg)",
          "See in action (click to activate):"
        ],
        "codeExamples": [
          {
            "title": "Power of n",
            "code": "function quad(timeFraction) {\n  return Math.pow(timeFraction, 2)\n}",
            "explanation": "Example demonstrating power of n."
          }
        ]
      },
      {
        "heading": "The arc",
        "paragraphs": [
          "Function:",
          "The graph:",
          "![](circ.svg)",
          "[iframe height=40 src=\"circ\" link]"
        ],
        "codeExamples": [
          {
            "title": "The arc",
            "code": "function circ(timeFraction) {\n  return 1 - Math.sin(Math.acos(timeFraction));\n}",
            "explanation": "Example demonstrating the arc."
          }
        ]
      },
      {
        "heading": "Back: bow shooting",
        "paragraphs": [
          "This function does the \"bow shooting\". First we \"pull the bowstring\", and then \"shoot\".",
          "Unlike previous functions, it depends on an additional parameter `x`, the \"elasticity coefficient\". The distance of \"bowstring pulling\" is defined by it.",
          "The code:",
          "**The graph for `x = 1.5`:**",
          "![](back.svg)"
        ],
        "codeExamples": [
          {
            "title": "Back: bow shooting",
            "code": "function back(x, timeFraction) {\n  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)\n}",
            "explanation": "Example demonstrating back: bow shooting."
          }
        ]
      },
      {
        "heading": "Bounce",
        "paragraphs": [
          "Imagine we are dropping a ball. It falls down, then bounces back a few times and stops.",
          "The `bounce` function does the same, but in the reverse order: \"bouncing\" starts immediately. It uses few special coefficients for that:",
          "In action:",
          "[iframe height=40 src=\"bounce\" link]"
        ],
        "codeExamples": [
          {
            "title": "Bounce",
            "code": "function bounce(timeFraction) {\n  for (let a = 0, b = 1; 1; a += b, b /= 2) {\n    if (timeFraction >= (7 - 4 * a) / 11) {\n      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)\n    }\n  }\n}",
            "explanation": "Example demonstrating bounce."
          }
        ]
      },
      {
        "heading": "Elastic animation",
        "paragraphs": [
          "One more \"elastic\" function that accepts an additional parameter `x` for the \"initial range\".",
          "**The graph for `x=1.5`:**",
          "![](elastic.svg)",
          "In action for `x=1.5`:",
          "[iframe height=40 src=\"elastic\" link]"
        ],
        "codeExamples": [
          {
            "title": "Elastic animation",
            "code": "function elastic(x, timeFraction) {\n  return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)\n}",
            "explanation": "Example demonstrating elastic animation."
          }
        ]
      },
      {
        "heading": "Reversal: ease*",
        "paragraphs": [
          "So we have a collection of timing functions. Their direct application is called \"easeIn\".",
          "Sometimes we need to show the animation in the reverse order. That's done with the \"easeOut\" transform."
        ]
      },
      {
        "heading": "easeOut",
        "paragraphs": [
          "In the \"easeOut\" mode the `timing` function is put into a wrapper `timingEaseOut`:",
          "In other words, we have a \"transform\" function `makeEaseOut` that takes a \"regular\" timing function and returns the wrapper around it:",
          "For instance, we can take the `bounce` function described above and apply it:",
          "Then the bounce will be not in the beginning, but at the end of the animation. Looks even better:",
          "[codetabs src=\"bounce-easeout\"]"
        ],
        "codeExamples": [
          {
            "title": "easeOut",
            "code": "timingEaseOut(timeFraction) = 1 - timing(1 - timeFraction)",
            "explanation": "Example demonstrating easeout."
          },
          {
            "title": "easeOut",
            "code": "// accepts a timing function, returns the transformed variant\nfunction makeEaseOut(timing) {\n  return function(timeFraction) {\n    return 1 - timing(1 - timeFraction);\n  }\n}",
            "explanation": "Example demonstrating easeout."
          }
        ],
        "bulletPoints": [
          "Regular bounce -- the object bounces at the bottom, then at the end sharply jumps to the top.",
          "After `easeOut` -- it first jumps to the top, then bounces there."
        ]
      },
      {
        "heading": "easeInOut",
        "paragraphs": [
          "We also can show the effect both in the beginning and the end of the animation. The transform is called \"easeInOut\".",
          "Given the timing function, we calculate the animation state like this:",
          "The wrapper code:",
          "In action, `bounceEaseInOut`:",
          "[codetabs src=\"bounce-easeinout\"]"
        ],
        "codeExamples": [
          {
            "title": "easeInOut",
            "code": "if (timeFraction <= 0.5) { // first half of the animation\n  return timing(2 * timeFraction) / 2;\n} else { // second half of the animation\n  return (2 - timing(2 * (1 - timeFraction))) / 2;\n}",
            "explanation": "Example demonstrating easeinout."
          },
          {
            "title": "easeInOut",
            "code": "function makeEaseInOut(timing) {\n  return function(timeFraction) {\n    if (timeFraction < .5)\n      return timing(2 * timeFraction) / 2;\n    else\n      return (2 - timing(2 * (1 - timeFraction))) / 2;\n  }\n}\n\nbounceEaseInOut = makeEaseInOut(bounce);",
            "explanation": "Example demonstrating easeinout."
          }
        ],
        "bulletPoints": [
          "Red is the regular variant of `circ` (`easeIn`).",
          "Green -- `easeOut`.",
          "Blue -- `easeInOut`."
        ]
      },
      {
        "heading": "More interesting \"draw\"",
        "paragraphs": [
          "Instead of moving the element we can do something else. All we need is to write the proper `draw`.",
          "Here's the animated \"bouncing\" text typing:",
          "[codetabs src=\"text\"]"
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "For animations that CSS can't handle well, or those that need tight control, JavaScript can help. JavaScript animations should be implemented via `requestAnimationFrame`. That built-in method allows to setup a callback function to run when the browser will be preparing a repaint. Usually that's very soon, but the exact time depends on the browser.",
          "When a page is in the background, there are no repaints at all, so the callback won't run: the animation will be suspended and won't consume resources. That's great.",
          "Here's the helper `animate` function to setup most animations:",
          "Options:",
          "Surely we could improve it, add more bells and whistles, but JavaScript animations are not applied on a daily basis. They are used to do something interesting and non-standard. So you'd want to add the features that you need when you need them."
        ],
        "codeExamples": [
          {
            "title": "Summary",
            "code": "function animate({timing, draw, duration}) {\n\n  let start = performance.now();\n\n  requestAnimationFrame(function animate(time) {\n    // timeFraction goes from 0 to 1\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    // calculate the current animation state\n    let progress = timing(timeFraction);\n\n    draw(progress); // draw it\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animate);\n    }\n\n  });\n}",
            "explanation": "Example demonstrating summary."
          }
        ],
        "bulletPoints": [
          "`duration` -- the total animation time in ms.",
          "`timing` -- the function to calculate animation progress. Gets a time fraction from 0 to 1, returns the animation progress, usually from 0 to 1.",
          "`draw` -- the function to draw the animation."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Animate the bouncing ball",
        "description": "Make a bouncing ball. Click to see how it should look: [iframe height=250 src=\"solution\"]",
        "starterCode": "// Write your code here\n",
        "solution": "let to = field.clientHeight - ball.clientHeight;\n\nanimate({\n  duration: 2000,\n  timing: makeEaseOut(bounce),\n  draw(progress) {\n    ball.style.top = to * progress + 'px'\n  }\n});",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Animate the ball bouncing to the right",
        "description": "Make the ball bounce to the right. Like this: [iframe height=250 src=\"solution\"] Write the animation code. The distance to the left is `100px`. Take the solution of the previous task as the source.",
        "starterCode": "// Write your code here\n",
        "solution": "let height = field.clientHeight - ball.clientHeight;\nlet width = 100;\n\n// animate top (bouncing)\nanimate({\n  duration: 2000,\n  timing: makeEaseOut(bounce),\n  draw: function(progress) {\n    ball.style.top = height * progress + 'px'\n  }\n});\n\n// animate left (moving to the right)\nanimate({\n  duration: 2000,\n  timing: makeEaseOut(quad),\n  draw: function(progress) {\n    ball.style.left = width * progress + \"px\"\n  }\n});",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Js Animation in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for js animation.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Js Animation is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Js Animation?",
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
      "Js Animation is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying js animation.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "js-animation"
    ],
    "slug": "js-animation"
  },
  {
    "title": "Webcomponents Intro",
    "description": "This section describes a set of modern standards for \"web components\".",
    "difficulty": "intermediate",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "This section describes a set of modern standards for \"web components\".",
          "As of now, these standards are under development. Some features are well-supported and integrated into the modern HTML/DOM standard, while others are yet in draft stage. You can try examples in any browser, Google Chrome is probably the most up to date with these features. Guess, that's because Google fellows are behind many of the related specifications."
        ]
      },
      {
        "heading": "What's common between...",
        "paragraphs": [
          "The whole component idea is nothing new. It's used in many frameworks and elsewhere.",
          "Before we move to implementation details, take a look at this great achievement of humanity:",
          "![](satellite.jpg)",
          "That's the International Space Station (ISS).",
          "And this is how it's made inside (approximately):"
        ],
        "bulletPoints": [
          "Consists of many components.",
          "Each component, in its turn, has many smaller details inside.",
          "The components are very complex, much more complicated than most websites.",
          "Components are developed internationally, by teams from different countries, speaking different languages."
        ]
      },
      {
        "heading": "Component architecture",
        "paragraphs": [
          "The well known rule for developing complex software is: don't make complex software.",
          "If something becomes complex -- split it into simpler parts and connect in the most obvious way.",
          "**A good architect is the one who can make the complex simple.**",
          "We can split user interface into visual components: each of them has own place on the page, can \"do\" a well-described task, and is separate from the others.",
          "Let's take a look at a website, for example Twitter."
        ],
        "bulletPoints": [
          "Its own JavaScript class.",
          "DOM structure, managed solely by its class, outside code doesn't access it (\"encapsulation\" principle).",
          "CSS styles, applied to the component.",
          "API: events, class methods etc, to interact with other components.",
          "Custom elements -- to define custom HTML elements."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Webcomponents Intro",
        "description": "Apply your understanding of Webcomponents Intro. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Webcomponents Intro\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Webcomponents Intro\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Webcomponents Intro in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for webcomponents intro.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Webcomponents Intro is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Webcomponents Intro?",
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
      "Webcomponents Intro is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying webcomponents intro.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "webcomponents-intro"
    ],
    "slug": "webcomponents-intro"
  },
  {
    "title": "Custom Elements",
    "description": "We can create custom HTML elements, described by our class, with its own methods and properties, events and so on.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "We can create custom HTML elements, described by our class, with its own methods and properties, events and so on.",
          "Once a custom element is defined, we can use it on par with built-in HTML elements.",
          "That's great, as HTML dictionary is rich, but not infinite. There are no ``, ``, ``... Just think of any other tag we might need.",
          "We can define them with a special class, and then use as if they were always a part of HTML.",
          "There are two kinds of custom elements:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "class MyElement extends HTMLElement {\n  constructor() {\n    super();\n    // element created\n  }\n\n  connectedCallback() {\n    // browser calls this method when the element is added to the document\n    // (can be called many times if an element is repeatedly added/removed)\n  }\n\n  disconnectedCallback() {\n    // browser calls this method when the element is removed from the document\n    // (can be called many times if an element is repeatedly added/removed)\n  }\n\n  static get observedAttributes() {\n    return [/* array of attribute names to monitor for changes */];\n  }\n\n  attributeChangedCallback(name, oldValue, newValue) {\n    // called when one of attributes listed above is modified\n  }\n\n  adoptedCallback() {\n    // called when the element is moved to a new document\n    // (happens in document.adoptNode, very rarely used)\n  }\n\n  // there can be other element methods and properties\n}",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "// let the browser know that <my-element> is served by our new class\ncustomElements.define(\"my-element\", MyElement);",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Example: \"time-formatted\"",
        "paragraphs": [
          "For example, there already exists `` element in HTML, for date/time. But it doesn't do any formatting by itself.",
          "Let's create `` element that displays the time in a nice, language-aware format:",
          "1. The class has only one method `connectedCallback()` -- the browser calls it when `` element is added to page (or when HTML parser detects it), and it uses the built-in Intl.DateTimeFormat data formatter, well-supported across the browsers, to show a nicely formatted time.",
          "2. We need to register our new element by `customElements.define(tag, class)`.",
          "3. And then we can use it everywhere."
        ],
        "codeExamples": [
          {
            "title": "Example: \"time-formatted\"",
            "code": "<script>\n*!*\nclass TimeFormatted extends HTMLElement { // (1)\n*/!*\n\n  connectedCallback() {\n    let date = new Date(this.getAttribute('datetime') || Date.now());\n\n    this.innerHTML = new Intl.DateTimeFormat(\"default\", {\n      year: this.getAttribute('year') || undefined,\n      month: this.getAttribute('month') || undefined,\n      day: this.getAttribute('day') || undefined,\n      hour: this.getAttribute('hour') || undefined,\n      minute: this.getAttribute('minute') || undefined,\n      second: this.getAttribute('second') || undefined,\n      timeZoneName: this.getAttribute('time-zone-name') || undefined,\n    }).format(date);\n  }\n\n}\n\n*!*\ncustomElements.define(\"time-formatted\", TimeFormatted); // (2)\n*/!*\n</script>\n\n<!-- (3) -->\n*!*\n<time-formatted datetime=\"2019-12-01\"\n*/!*\n  year=\"numeric\" month=\"long\" day=\"numeric\"\n  hour=\"numeric\" minute=\"numeric\" second=\"numeric\"\n  time-zone-name=\"short\"\n></time-formatted>",
            "explanation": "Example demonstrating example: \"time-formatted\"."
          },
          {
            "title": "Example: \"time-formatted\"",
            "code": "If the browser encounters any `<time-formatted>` elements before `customElements.define`, that's not an error. But the element is yet unknown, just like any non-standard tag.\n\nSuch \"undefined\" elements can be styled with CSS selector `:not(:defined)`.\n\nWhen `customElement.define` is called, they are \"upgraded\": a new instance of `TimeFormatted`\nis created for each, and `connectedCallback` is called. They become `:defined`.\n\nTo get the information about custom elements, there are methods:\n- `customElements.get(name)` -- returns the class for a custom element with the given `name`,\n- `customElements.whenDefined(name)` -- returns a promise that resolves (without value) when a custom element with the given `name` becomes defined.",
            "explanation": "Example demonstrating example: \"time-formatted\"."
          }
        ]
      },
      {
        "heading": "Observing attributes",
        "paragraphs": [
          "In the current implementation of ``, after the element is rendered, further attribute changes don't have any effect. That's strange for an HTML element. Usually, when we change an attribute, like `a.href`, we expect the change to be immediately visible. So let's fix this.",
          "We can observe attributes by providing their list in `observedAttributes()` static getter. For such attributes, `attributeChangedCallback` is called when they are modified. It doesn't trigger for other, unlisted attributes (that's for performance reasons).",
          "Here's a new ``, that auto-updates when attributes change:",
          "1. The rendering logic is moved to `render()` helper method.",
          "2. We call it once when the element is inserted into page."
        ],
        "codeExamples": [
          {
            "title": "Observing attributes",
            "code": "<script>\nclass TimeFormatted extends HTMLElement {\n\n*!*\n  render() { // (1)\n*/!*\n    let date = new Date(this.getAttribute('datetime') || Date.now());\n\n    this.innerHTML = new Intl.DateTimeFormat(\"default\", {\n      year: this.getAttribute('year') || undefined,\n      month: this.getAttribute('month') || undefined,\n      day: this.getAttribute('day') || undefined,\n      hour: this.getAttribute('hour') || undefined,\n      minute: this.getAttribute('minute') || undefined,\n      second: this.getAttribute('second') || undefined,\n      timeZoneName: this.getAttribute('time-zone-name') || undefined,\n    }).format(date);\n  }\n\n*!*\n  connectedCallback() { // (2)\n*/!*\n    if (!this.rendered) {\n      this.render();\n      this.rendered = true;\n    }\n  }\n\n*!*\n  static get observedAttributes() { // (3)\n*/!*\n    return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];\n  }\n\n*!*\n  attributeChangedCallback(name, oldValue, newValue) { // (4)\n*/!*\n    this.render();\n  }\n\n}\n\ncustomElements.define(\"time-formatted\", TimeFormatted);\n</script>\n\n<time-formatted id=\"elem\" hour=\"numeric\" minute=\"numeric\" second=\"numeric\"></time-formatted>\n\n<script>\n*!*\nsetInterval(() => elem.setAttribute('datetime', new Date()), 1000); // (5)\n*/!*\n</script>",
            "explanation": "Example demonstrating observing attributes."
          }
        ]
      },
      {
        "heading": "Rendering order",
        "paragraphs": [
          "When HTML parser builds the DOM, elements are processed one after another, parents before children. E.g. if we have ``, then `` element is created and connected to DOM first, and then ``.",
          "That leads to important consequences for custom elements.",
          "For example, if a custom element tries to access `innerHTML` in `connectedCallback`, it gets nothing:",
          "If you run it, the `alert` is empty.",
          "That's exactly because there are no children on that stage, the DOM is unfinished. HTML parser connected the custom element ``, and is going to proceed to its children, but just didn't yet."
        ],
        "codeExamples": [
          {
            "title": "Rendering order",
            "code": "<script>\ncustomElements.define('user-info', class extends HTMLElement {\n\n  connectedCallback() {\n*!*\n    alert(this.innerHTML); // empty (*)\n*/!*\n  }\n\n});\n</script>\n\n*!*\n<user-info>John</user-info>\n*/!*",
            "explanation": "Example demonstrating rendering order."
          },
          {
            "title": "Rendering order",
            "code": "<script>\ncustomElements.define('user-info', class extends HTMLElement {\n\n  connectedCallback() {\n*!*\n    setTimeout(() => alert(this.innerHTML)); // John (*)\n*/!*\n  }\n\n});\n</script>\n\n*!*\n<user-info>John</user-info>\n*/!*",
            "explanation": "Example demonstrating rendering order."
          }
        ]
      },
      {
        "heading": "Customized built-in elements",
        "paragraphs": [
          "New elements that we create, such as ``, don't have any associated semantics. They are unknown to search engines, and accessibility devices can't handle them.",
          "But such things can be important. E.g, a search engine would be interested to know that we actually show a time. And if we're making a special kind of button, why not reuse the existing `` functionality?",
          "We can extend and customize built-in HTML elements by inheriting from their classes.",
          "For example, buttons are instances of `HTMLButtonElement`, let's build upon it.",
          "1. Extend `HTMLButtonElement` with our class:"
        ],
        "codeExamples": [
          {
            "title": "Customized built-in elements",
            "code": "<script>\n// The button that says \"hello\" on click\nclass HelloButton extends HTMLButtonElement {\n*!*\n  constructor() {\n*/!*\n    super();\n    this.addEventListener('click', () => alert(\"Hello!\"));\n  }\n}\n\n*!*\ncustomElements.define('hello-button', HelloButton, {extends: 'button'});\n*/!*\n</script>\n\n*!*\n<button is=\"hello-button\">Click me</button>\n*/!*\n\n*!*\n<button is=\"hello-button\" disabled>Disabled</button>\n*/!*",
            "explanation": "Example demonstrating customized built-in elements."
          }
        ]
      },
      {
        "heading": "References",
        "paragraphs": [
          "Understanding References in JavaScript."
        ],
        "bulletPoints": [
          "HTML Living Standard: .",
          "Compatiblity: ."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Custom elements can be of two types:",
          "1. \"Autonomous\" -- new tags, extending `HTMLElement`.",
          "Definition scheme:",
          "class MyElement extends HTMLElement {",
          "constructor() { super(); /* ... */ }"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Live timer element",
        "description": "We already have `` element to show a nicely formatted time. Create `` element to show the current time: 1. It should use `` internally, not duplicate its functionality. 2. Ticks (updates) every second. 3. For every tick, a custom event named `tick` should be generated, with the current date in `even",
        "starterCode": "<live-timer id=\"elem\"></live-timer>\n\n<script>\n  elem.addEventListener('tick', event => console.log(event.detail));\n</script>",
        "solution": "<live-timer id=\"elem\"></live-timer>\n\n<script>\n  elem.addEventListener('tick', event => console.log(event.detail));\n</script>",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Custom Elements in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for custom elements.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Custom Elements is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Custom Elements?",
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
      "Custom Elements is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying custom elements.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "custom-elements"
    ],
    "slug": "custom-elements"
  },
  {
    "title": "Shadow Dom",
    "description": "Shadow DOM serves for encapsulation. It allows a component to have its very own \"shadow\" DOM tree, that can't be accidentally accessed from the main document, may have local style ...",
    "difficulty": "intermediate",
    "readingTime": 7,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Shadow DOM serves for encapsulation. It allows a component to have its very own \"shadow\" DOM tree, that can't be accidentally accessed from the main document, may have local style rules, and more."
        ]
      },
      {
        "heading": "Built-in shadow DOM",
        "paragraphs": [
          "Did you ever think how complex browser controls are created and styled?",
          "Such as ``:",
          "The browser uses DOM/CSS internally to draw them. That DOM structure is normally hidden from us, but we can see it in developer tools. E.g. in Chrome, we need to enable in Dev Tools \"Show user agent shadow DOM\" option.",
          "Then `` looks like this:",
          "![](shadow-dom-range.png)"
        ],
        "codeExamples": [
          {
            "title": "Built-in shadow DOM",
            "code": "<style>\n/* make the slider track red */\ninput::-webkit-slider-runnable-track {\n  background: red;\n}\n</style>\n\n<input type=\"range\">",
            "explanation": "Example demonstrating built-in shadow dom."
          }
        ]
      },
      {
        "heading": "Shadow tree",
        "paragraphs": [
          "A DOM element can have two types of DOM subtrees:",
          "1. Light tree -- a regular DOM subtree, made of HTML children. All subtrees that we've seen in previous chapters were \"light\".",
          "2. Shadow tree -- a hidden DOM subtree, not reflected in HTML, hidden from prying eyes.",
          "If an element has both, then the browser renders only the shadow tree. But we can setup a kind of composition between shadow and light trees as well. We'll see the details later in the chapter .",
          "Shadow tree can be used in Custom Elements to hide component internals and apply component-local styles."
        ],
        "codeExamples": [
          {
            "title": "Shadow tree",
            "code": "<script>\ncustomElements.define('show-hello', class extends HTMLElement {\n  connectedCallback() {\n    const shadow = this.attachShadow({mode: 'open'});\n    shadow.innerHTML = `<p>\n      Hello, ${this.getAttribute('name')}\n    </p>`;\n  }  \n});\n</script>\n\n<show-hello name=\"John\"></show-hello>",
            "explanation": "Example demonstrating shadow tree."
          },
          {
            "title": "Shadow tree",
            "code": "// assuming {mode: \"open\"}, otherwise elem.shadowRoot is null\nalert(elem.shadowRoot.host === elem); // true",
            "explanation": "Example demonstrating shadow tree."
          }
        ],
        "bulletPoints": [
          "`\"open\"` -- the shadow root is available as `elem.shadowRoot`.",
          "`\"closed\"` -- `elem.shadowRoot` is always `null`."
        ]
      },
      {
        "heading": "Encapsulation",
        "paragraphs": [
          "Shadow DOM is strongly delimited from the main document:",
          "1. Shadow DOM elements are not visible to `querySelector` from the light DOM. In particular, Shadow DOM elements may have ids that conflict with those in the light DOM. They must be unique only within the shadow tree.",
          "2. Shadow DOM has own stylesheets. Style rules from the outer DOM don't get applied.",
          "For example:",
          "1. The style from the document does not affect the shadow tree."
        ],
        "codeExamples": [
          {
            "title": "Encapsulation",
            "code": "<style>\n*!*\n  /* document style won't apply to the shadow tree inside #elem (1) */\n*/!*\n  p { color: red; }\n</style>\n\n<div id=\"elem\"></div>\n\n<script>\n  elem.attachShadow({mode: 'open'});\n*!*\n    // shadow tree has its own style (2)\n*/!*\n  elem.shadowRoot.innerHTML = `\n    <style> p { font-weight: bold; } </style>\n    <p>Hello, John!</p>\n  `;\n\n*!*\n  // <p> is only visible from queries inside the shadow tree (3)\n*/!*\n  alert(document.querySelectorAll('p').length); // 0\n  alert(elem.shadowRoot.querySelectorAll('p').length); // 1\n</script>",
            "explanation": "Example demonstrating encapsulation."
          }
        ]
      },
      {
        "heading": "References",
        "paragraphs": [
          "Understanding References in JavaScript."
        ],
        "bulletPoints": [
          "DOM:",
          "Compatibility:",
          "Shadow DOM is mentioned in many other specifications, e.g. DOM Parsing specifies that shadow root has `innerHTML`."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Shadow DOM is a way to create a component-local DOM.",
          "1. `shadowRoot = elem.attachShadow({mode: open|closed})` -- creates shadow DOM for `elem`. If `mode=\"open\"`, then it's accessible as `elem.shadowRoot` property.",
          "2. We can populate `shadowRoot` using `innerHTML` or other DOM methods.",
          "Shadow DOM elements:",
          "Shadow DOM, if exists, is rendered by the browser instead of so-called \"light DOM\" (regular children). In the chapter we'll see how to compose them."
        ],
        "bulletPoints": [
          "Have their own ids space,",
          "Invisible to JavaScript selectors from the main document, such as `querySelector`,",
          "Use styles only from the shadow tree, not from the main document."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Shadow Dom",
        "description": "Apply your understanding of Shadow Dom. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Shadow Dom\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Shadow Dom\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Shadow Dom in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for shadow dom.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Shadow Dom is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Shadow Dom?",
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
      "Shadow Dom is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying shadow dom.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "shadow-dom"
    ],
    "slug": "shadow-dom"
  },
  {
    "title": "Template Element",
    "description": "A built-in `` element serves as a storage for HTML markup templates. The browser ignores its contents, only checks for syntax validity, but we can access and use it in JavaScript, ...",
    "difficulty": "intermediate",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A built-in `` element serves as a storage for HTML markup templates. The browser ignores its contents, only checks for syntax validity, but we can access and use it in JavaScript, to create other elements.",
          "In theory, we could create any invisible element somewhere in HTML for HTML markup storage purposes. What's special about ``?",
          "First, its content can be any valid HTML, even if it normally requires a proper enclosing tag.",
          "For example, we can put there a table row ``:",
          "Usually, if we try to put `` inside, say, a ``, the browser detects the invalid DOM structure and \"fixes\" it, adds `` around. That's not what we want. On the other hand, `` keeps exactly what we place there."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "<template>\n  <tr>\n    <td>Contents</td>\n  </tr>\n</template>",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "<template>\n  <style>\n    p { font-weight: bold; }\n  </style>\n  <script>\n    alert(\"Hello\");\n  </script>\n</template>",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Inserting template",
        "paragraphs": [
          "The template content is available in its `content` property as a DocumentFragment -- a special type of DOM node.",
          "We can treat it as any other DOM node, except one special property: when we insert it somewhere, its children are inserted instead.",
          "For example:",
          "Let's rewrite a Shadow DOM example from the previous chapter using ``:",
          "In the line `(*)` when we clone and insert `tmpl.content`, as its `DocumentFragment`, its children (``, ``) are inserted instead."
        ],
        "codeExamples": [
          {
            "title": "Inserting template",
            "code": "<template id=\"tmpl\">\n  <script>\n    alert(\"Hello\");\n  </script>\n  <div class=\"message\">Hello, world!</div>\n</template>\n\n<script>\n  let elem = document.createElement('div');\n\n*!*\n  // Clone the template content to reuse it multiple times\n  elem.append(tmpl.content.cloneNode(true));\n*/!*\n\n  document.body.append(elem);\n  // Now the script from <template> runs\n</script>",
            "explanation": "Example demonstrating inserting template."
          },
          {
            "title": "Inserting template",
            "code": "<template id=\"tmpl\">\n  <style> p { font-weight: bold; } </style>\n  <p id=\"message\"></p>\n</template>\n\n<div id=\"elem\">Click me</div>\n\n<script>\n  elem.onclick = function() {\n    elem.attachShadow({mode: 'open'});\n\n*!*\n    elem.shadowRoot.append(tmpl.content.cloneNode(true)); // (*)\n*/!*\n\n    elem.shadowRoot.getElementById('message').innerHTML = \"Hello from the shadows!\";\n  };\n</script>",
            "explanation": "Example demonstrating inserting template."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "To summarize:",
          "The `` tag is quite unique, because:",
          "The `` element does not feature any iteration mechanisms, data binding or variable substitutions, but we can implement those on top of it."
        ],
        "bulletPoints": [
          "`` content can be any syntactically correct HTML.",
          "`` content is considered \"out of the document\", so it doesn't affect anything.",
          "We can access `template.content` from JavaScript, clone it to reuse in a new component.",
          "The browser checks HTML syntax inside it (as opposed to using a template string inside a script).",
          "...But still allows use of any top-level HTML tags, even those that don't make sense without proper wrappers (e.g. ``)."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Template Element",
        "description": "Apply your understanding of Template Element. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Template Element\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Template Element\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Template Element in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for template element.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Template Element is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Template Element?",
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
      "Template Element is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying template element.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "template-element"
    ],
    "slug": "template-element"
  },
  {
    "title": "Slots Composition",
    "description": "Many types of components, such as tabs, menus, image galleries, and so on, need the content to render.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Many types of components, such as tabs, menus, image galleries, and so on, need the content to render.",
          "Just like built-in browser `` expects `` items, our `` may expect the actual tab content to be passed. And a `` may expect menu items.",
          "The code that makes use of `` can look like this:",
          "...Then our component should render it properly, as a nice menu with given title and items, handle menu events, etc.",
          "How to implement it?"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "<custom-menu>\n  <title>Candy menu</title>\n  <item>Lollipop</item>\n  <item>Fruit Toast</item>\n  <item>Cup Cake</item>\n</custom-menu>",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Named slots",
        "paragraphs": [
          "Let's see how slots work on a simple example.",
          "Here, `` shadow DOM provides two slots, filled from light DOM:",
          "In the shadow DOM, `` defines an \"insertion point\", a place where elements with `slot=\"X\"` are rendered.",
          "Then the browser performs \"composition\": it takes elements from the light DOM and renders them in corresponding slots of the shadow DOM. At the end, we have exactly what we want -- a component that can be filled with data.",
          "Here's the DOM structure after the script, not taking composition into account:"
        ],
        "codeExamples": [
          {
            "title": "Named slots",
            "code": "<script>\ncustomElements.define('user-card', class extends HTMLElement {\n  connectedCallback() {\n    this.attachShadow({mode: 'open'});\n    this.shadowRoot.innerHTML = `\n      <div>Name:\n*!*\n        <slot name=\"username\"></slot>\n*/!*\n      </div>\n      <div>Birthday:\n*!*\n        <slot name=\"birthday\"></slot>\n*/!*\n      </div>\n    `;\n  }\n});\n</script>\n\n<user-card>\n  <span *!*slot=\"username\"*/!*>John Smith</span>\n  <span *!*slot=\"birthday\"*/!*>01.01.2001</span>\n</user-card>",
            "explanation": "Example demonstrating named slots."
          },
          {
            "title": "Named slots",
            "code": "<user-card>\n  #shadow-root\n    <div>Name:\n      <slot name=\"username\"></slot>\n    </div>\n    <div>Birthday:\n      <slot name=\"birthday\"></slot>\n    </div>\n  <span slot=\"username\">John Smith</span>\n  <span slot=\"birthday\">01.01.2001</span>\n</user-card>",
            "explanation": "Example demonstrating named slots."
          }
        ]
      },
      {
        "heading": "Slot fallback content",
        "paragraphs": [
          "If we put something inside a ``, it becomes the fallback, \"default\" content. The browser shows it if there's no corresponding filler in light DOM.",
          "For example, in this piece of shadow DOM, `Anonymous` renders if there's no `slot=\"username\"` in light DOM."
        ],
        "codeExamples": [
          {
            "title": "Slot fallback content",
            "code": "<div>Name:\n  <slot name=\"username\">Anonymous</slot>\n</div>",
            "explanation": "Example demonstrating slot fallback content."
          }
        ]
      },
      {
        "heading": "Default slot: first unnamed",
        "paragraphs": [
          "The first `` in shadow DOM that doesn't have a name is a \"default\" slot. It gets all nodes from the light DOM that aren't slotted elsewhere.",
          "For example, let's add the default slot to our `` that shows all unslotted information about the user:",
          "All the unslotted light DOM content gets into the \"Other information\" fieldset.",
          "Elements are appended to a slot one after another, so both unslotted pieces of information are in the default slot together.",
          "The flattened DOM looks like this:"
        ],
        "codeExamples": [
          {
            "title": "Default slot: first unnamed",
            "code": "<script>\ncustomElements.define('user-card', class extends HTMLElement {\n  connectedCallback() {\n    this.attachShadow({mode: 'open'});\n    this.shadowRoot.innerHTML = `\n    <div>Name:\n      <slot name=\"username\"></slot>\n    </div>\n    <div>Birthday:\n      <slot name=\"birthday\"></slot>\n    </div>\n    <fieldset>\n      <legend>Other information</legend>\n*!*\n      <slot></slot>\n*/!*\n    </fieldset>\n    `;\n  }\n});\n</script>\n\n<user-card>\n*!*\n  <div>I like to swim.</div>\n*/!*\n  <span slot=\"username\">John Smith</span>\n  <span slot=\"birthday\">01.01.2001</span>\n*!*\n  <div>...And play volleyball too!</div>\n*/!*\n</user-card>",
            "explanation": "Example demonstrating default slot: first unnamed."
          },
          {
            "title": "Default slot: first unnamed",
            "code": "<user-card>\n  #shadow-root\n    <div>Name:\n      <slot name=\"username\">\n        <span slot=\"username\">John Smith</span>\n      </slot>\n    </div>\n    <div>Birthday:\n      <slot name=\"birthday\">\n        <span slot=\"birthday\">01.01.2001</span>\n      </slot>\n    </div>\n    <fieldset>\n      <legend>Other information</legend>\n*!*\n      <slot>\n        <div>I like to swim.</div>\n        <div>...And play volleyball too!</div>\n      </slot>\n*/!*\n    </fieldset>\n</user-card>",
            "explanation": "Example demonstrating default slot: first unnamed."
          }
        ]
      },
      {
        "heading": "Menu example",
        "paragraphs": [
          "Now let's back to ``, mentioned at the beginning of the chapter.",
          "We can use slots to distribute elements.",
          "Here's the markup for ``:",
          "The shadow DOM template with proper slots:",
          "1. `` goes into ``."
        ],
        "codeExamples": [
          {
            "title": "Menu example",
            "code": "<custom-menu>\n  <span slot=\"title\">Candy menu</span>\n  <li slot=\"item\">Lollipop</li>\n  <li slot=\"item\">Fruit Toast</li>\n  <li slot=\"item\">Cup Cake</li>\n</custom-menu>",
            "explanation": "Example demonstrating menu example."
          },
          {
            "title": "Menu example",
            "code": "<template id=\"tmpl\">\n  <style> /* menu styles */ </style>\n  <div class=\"menu\">\n    <slot name=\"title\"></slot>\n    <ul><slot name=\"item\"></slot></ul>\n  </div>\n</template>",
            "explanation": "Example demonstrating menu example."
          }
        ]
      },
      {
        "heading": "Updating slots",
        "paragraphs": [
          "What if the outer code wants to add/remove menu items dynamically?",
          "**The browser monitors slots and updates the rendering if slotted elements are added/removed.**",
          "Also, as light DOM nodes are not copied, but just rendered in slots, the changes inside them immediately become visible.",
          "So we don't have to do anything to update rendering. But if the component code wants to know about slot changes, then `slotchange` event is available.",
          "For example, here the menu item is inserted dynamically after 1 second, and the title changes after 2 seconds:"
        ],
        "codeExamples": [
          {
            "title": "Updating slots",
            "code": "<custom-menu id=\"menu\">\n  <span slot=\"title\">Candy menu</span>\n</custom-menu>\n\n<script>\ncustomElements.define('custom-menu', class extends HTMLElement {\n  connectedCallback() {\n    this.attachShadow({mode: 'open'});\n    this.shadowRoot.innerHTML = `<div class=\"menu\">\n      <slot name=\"title\"></slot>\n      <ul><slot name=\"item\"></slot></ul>\n    </div>`;\n\n    // shadowRoot can't have event handlers, so using the first child\n    this.shadowRoot.firstElementChild.addEventListener('slotchange',\n      e => alert(\"slotchange: \" + e.target.name)\n    );\n  }\n});\n\nsetTimeout(() => {\n  menu.insertAdjacentHTML('beforeEnd', '<li slot=\"item\">Lollipop</li>')\n}, 1000);\n\nsetTimeout(() => {\n  menu.querySelector('[slot=\"title\"]').innerHTML = \"New menu\";\n}, 2000);\n</script>",
            "explanation": "Example demonstrating updating slots."
          }
        ]
      },
      {
        "heading": "Slot API",
        "paragraphs": [
          "Finally, let's mention the slot-related JavaScript methods.",
          "As we've seen before, JavaScript looks at the \"real\" DOM, without flattening. But, if the shadow tree has `{mode: 'open'}`, then we can figure out which elements assigned to a slot and, vice-versa, the slot by the element inside it:",
          "These methods are useful when we need not just show the slotted content, but also track it in JavaScript.",
          "For example, if `` component wants to know, what it shows, then it could track `slotchange` and get the items from `slot.assignedElements`:"
        ],
        "codeExamples": [
          {
            "title": "Slot API",
            "code": "<custom-menu id=\"menu\">\n  <span slot=\"title\">Candy menu</span>\n  <li slot=\"item\">Lollipop</li>\n  <li slot=\"item\">Fruit Toast</li>\n</custom-menu>\n\n<script>\ncustomElements.define('custom-menu', class extends HTMLElement {\n  items = []\n\n  connectedCallback() {\n    this.attachShadow({mode: 'open'});\n    this.shadowRoot.innerHTML = `<div class=\"menu\">\n      <slot name=\"title\"></slot>\n      <ul><slot name=\"item\"></slot></ul>\n    </div>`;\n\n    // triggers when slot content changes\n*!*\n    this.shadowRoot.firstElementChild.addEventListener('slotchange', e => {\n      let slot = e.target;\n      if (slot.name == 'item') {\n        this.items = slot.assignedElements().map(elem => elem.textContent);\n        alert(\"Items: \" + this.items);\n      }\n    });\n*/!*\n  }\n});\n\n// items update after 1 second\nsetTimeout(() => {\n  menu.insertAdjacentHTML('beforeEnd', '<li slot=\"item\">Cup Cake</li>')\n}, 1000);\n</script>",
            "explanation": "Example demonstrating slot api."
          }
        ],
        "bulletPoints": [
          "`node.assignedSlot` -- returns the `` element that the `node` is assigned to.",
          "`slot.assignedNodes({flatten: true/false})` -- DOM nodes, assigned to the slot. The `flatten` option is `false` by default. If explicitly set to `true`, then it looks more deeply into the flattened DOM, returning nested slots in case of nested components and the fallback content if no node assigned.",
          "`slot.assignedElements({flatten: true/false})` -- DOM elements, assigned to the slot (same as above, but only element nodes)."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Usually, if an element has shadow DOM, then its light DOM is not displayed. Slots allow to show elements from light DOM in specified places of shadow DOM.",
          "There are two kinds of slots:",
          "The process of rendering slotted elements inside their slots is called \"composition\". The result is called a \"flattened DOM\".",
          "Composition does not really move nodes, from JavaScript point of view the DOM is still same.",
          "JavaScript can access slots using methods:"
        ],
        "bulletPoints": [
          "Named slots: `...` -- gets light children with `slot=\"X\"`.",
          "Default slot: the first `` without a name (subsequent unnamed slots are ignored) -- gets unslotted light children.",
          "If there are many elements for the same slot -- they are appended one after another.",
          "The content of `` element is used as a fallback. It's shown if there are no light children for the slot.",
          "`slot.assignedNodes/Elements()` -- returns nodes/elements inside the `slot`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Slots Composition",
        "description": "Apply your understanding of Slots Composition. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Slots Composition\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Slots Composition\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Slots Composition in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for slots composition.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Slots Composition is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Slots Composition?",
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
      "Slots Composition is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying slots composition.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "slots-composition"
    ],
    "slug": "slots-composition"
  },
  {
    "title": "Shadow Dom Style",
    "description": "Shadow DOM may include both `` and `` tags. In the latter case, stylesheets are HTTP-cached, so they are not redownloaded for multiple components that use same template.",
    "difficulty": "intermediate",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Shadow DOM may include both `` and `` tags. In the latter case, stylesheets are HTTP-cached, so they are not redownloaded for multiple components that use same template.",
          "As a general rule, local styles work only inside the shadow tree, and document styles work outside of it. But there are few exceptions."
        ]
      },
      {
        "heading": ":host",
        "paragraphs": [
          "The `:host` selector allows to select the shadow host (the element containing the shadow tree).",
          "For instance, we're making `` element that should be centered. For that we need to style the `` element itself.",
          "That's exactly what `:host` does:"
        ],
        "codeExamples": [
          {
            "title": ":host",
            "code": "<template id=\"tmpl\">\n  <style>\n    /* the style will be applied from inside to the custom-dialog element */\n    :host {\n      position: fixed;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      display: inline-block;\n      border: 1px solid red;\n      padding: 10px;\n    }\n  </style>\n  <slot></slot>\n</template>\n\n<script>\ncustomElements.define('custom-dialog', class extends HTMLElement {\n  connectedCallback() {\n    this.attachShadow({mode: 'open'}).append(tmpl.content.cloneNode(true));\n  }\n});\n</script>\n\n<custom-dialog>\n  Hello!\n</custom-dialog>",
            "explanation": "Example demonstrating :host."
          }
        ]
      },
      {
        "heading": "Cascading",
        "paragraphs": [
          "The shadow host (`` itself) resides in the light DOM, so it's affected by document CSS rules.",
          "If there's a property styled both in `:host` locally, and in the document, then the document style takes precedence.",
          "For instance, if in the document we had:",
          "...Then the `` would be without padding.",
          "It's very convenient, as we can setup \"default\" component styles in its `:host` rule, and then easily override them in the document."
        ],
        "codeExamples": [
          {
            "title": "Cascading",
            "code": "<style>\ncustom-dialog {\n  padding: 0;\n}\n</style>",
            "explanation": "Example demonstrating cascading."
          }
        ]
      },
      {
        "heading": ":host(selector)",
        "paragraphs": [
          "Same as `:host`, but applied only if the shadow host matches the `selector`.",
          "For example, we'd like to center the `` only if it has `centered` attribute:",
          "Now the additional centering styles are only applied to the first dialog: ``.",
          "To summarize, we can use `:host`-family of selectors to style the main element of the component. These styles (unless `!important`) can be overridden by the document."
        ],
        "codeExamples": [
          {
            "title": ":host(selector)",
            "code": "<template id=\"tmpl\">\n  <style>\n*!*\n    :host([centered]) {\n*/!*\n      position: fixed;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      border-color: blue;\n    }\n\n    :host {\n      display: inline-block;\n      border: 1px solid red;\n      padding: 10px;\n    }\n  </style>\n  <slot></slot>\n</template>\n\n<script>\ncustomElements.define('custom-dialog', class extends HTMLElement {\n  connectedCallback() {\n    this.attachShadow({mode: 'open'}).append(tmpl.content.cloneNode(true));\n  }\n});\n</script>\n\n\n<custom-dialog centered>\n  Centered!\n</custom-dialog>\n\n<custom-dialog>\n  Not centered.\n</custom-dialog>",
            "explanation": "Example demonstrating :host(selector)."
          }
        ]
      },
      {
        "heading": "Styling slotted content",
        "paragraphs": [
          "Now let's consider the situation with slots.",
          "Slotted elements come from light DOM, so they use document styles. Local styles do not affect slotted content.",
          "In the example below, slotted `` is bold, as per document style, but does not take `background` from the local style:",
          "The result is bold, but not red.",
          "If we'd like to style slotted elements in our component, there are two choices."
        ],
        "codeExamples": [
          {
            "title": "Styling slotted content",
            "code": "<style>\n*!*\n  span { font-weight: bold }\n*/!*\n</style>\n\n<user-card>\n  <div slot=\"username\">*!*<span>John Smith</span>*/!*</div>\n</user-card>\n\n<script>\ncustomElements.define('user-card', class extends HTMLElement {\n  connectedCallback() {\n    this.attachShadow({mode: 'open'});\n    this.shadowRoot.innerHTML = `\n      <style>\n*!*\n      span { background: red; }\n*/!*\n      </style>\n      Name: <slot name=\"username\"></slot>\n    `;\n  }\n});\n</script>",
            "explanation": "Example demonstrating styling slotted content."
          },
          {
            "title": "Styling slotted content",
            "code": "<user-card>\n  <div slot=\"username\">*!*<span>John Smith</span>*/!*</div>\n</user-card>\n\n<script>\ncustomElements.define('user-card', class extends HTMLElement {\n  connectedCallback() {\n    this.attachShadow({mode: 'open'});\n    this.shadowRoot.innerHTML = `\n      <style>\n*!*\n      slot[name=\"username\"] { font-weight: bold; }\n*/!*\n      </style>\n      Name: <slot name=\"username\"></slot>\n    `;\n  }\n});\n</script>",
            "explanation": "Example demonstrating styling slotted content."
          }
        ]
      },
      {
        "heading": "CSS hooks with custom properties",
        "paragraphs": [
          "How do we style internal elements of a component from the main document?",
          "Selectors like `:host` apply rules to `` element or ``, but how to style shadow DOM elements inside them?",
          "There's no selector that can directly affect shadow DOM styles from the document. But just as we expose methods to interact with our component, we can expose CSS variables (custom CSS properties) to style it.",
          "**Custom CSS properties exist on all levels, both in light and shadow.**",
          "For example, in shadow DOM we can use `--user-card-field-color` CSS variable to style fields, and the outer document can set its value:"
        ],
        "codeExamples": [
          {
            "title": "CSS hooks with custom properties",
            "code": "<style>\n  .field {\n    color: var(--user-card-field-color, black);\n    /* if --user-card-field-color is not defined, use black color */\n  }\n</style>\n<div class=\"field\">Name: <slot name=\"username\"></slot></div>\n<div class=\"field\">Birthday: <slot name=\"birthday\"></slot></div>",
            "explanation": "Example demonstrating css hooks with custom properties."
          },
          {
            "title": "CSS hooks with custom properties",
            "code": "user-card {\n  --user-card-field-color: green;\n}",
            "explanation": "Example demonstrating css hooks with custom properties."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Shadow DOM can include styles, such as `` or ``.",
          "Local styles can affect:",
          "Document styles can affect:",
          "When CSS properties conflict, normally document styles have precedence, unless the property is labelled as `!important`. Then local styles have precedence.",
          "CSS custom properties pierce through shadow DOM. They are used as \"hooks\" to style the component:"
        ],
        "bulletPoints": [
          "shadow tree,",
          "shadow host with `:host` and `:host()` pseudoclasses,",
          "slotted elements (coming from light DOM), `::slotted(selector)` allows to select slotted elements themselves, but not their children.",
          "shadow host (as it lives in the outer document)",
          "slotted elements and their contents (as that's also in the outer document)"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Shadow Dom Style",
        "description": "Apply your understanding of Shadow Dom Style. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Shadow Dom Style\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Shadow Dom Style\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Shadow Dom Style in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for shadow dom style.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Shadow Dom Style is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Shadow Dom Style?",
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
      "Shadow Dom Style is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying shadow dom style.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "shadow-dom-style"
    ],
    "slug": "shadow-dom-style"
  },
  {
    "title": "Shadow Dom Events",
    "description": "The idea behind shadow tree is to encapsulate internal implementation details of a component.",
    "difficulty": "intermediate",
    "readingTime": 7,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The idea behind shadow tree is to encapsulate internal implementation details of a component.",
          "Let's say, a click event happens inside a shadow DOM of `` component. But scripts in the main document have no idea about the shadow DOM internals, especially if the component comes from a 3rd-party library.",
          "So, to keep the details encapsulated, the browser *retargets* the event.",
          "**Events that happen in shadow DOM have the host element as the target, when caught outside of the component.**",
          "Here's a simple example:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "<user-card></user-card>\n\n<script>\ncustomElements.define('user-card', class extends HTMLElement {\n  connectedCallback() {\n    this.attachShadow({mode: 'open'});\n    this.shadowRoot.innerHTML = `<p>\n      <button>Click me</button>\n    </p>`;\n    this.shadowRoot.firstElementChild.onclick =\n      e => alert(\"Inner target: \" + e.target.tagName);\n  }\n});\n\ndocument.onclick =\n  e => alert(\"Outer target: \" + e.target.tagName);\n</script>",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "<user-card id=\"userCard\">\n*!*\n  <span slot=\"username\">John Smith</span>\n*/!*\n</user-card>\n\n<script>\ncustomElements.define('user-card', class extends HTMLElement {\n  connectedCallback() {\n    this.attachShadow({mode: 'open'});\n    this.shadowRoot.innerHTML = `<div>\n      <b>Name:</b> <slot name=\"username\"></slot>\n    </div>`;\n\n    this.shadowRoot.firstElementChild.onclick =\n      e => alert(\"Inner target: \" + e.target.tagName);\n  }\n});\n\nuserCard.onclick = e => alert(`Outer target: ${e.target.tagName}`);\n</script>",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Bubbling, event.composedPath()",
        "paragraphs": [
          "For purposes of event bubbling, flattened DOM is used.",
          "So, if we have a slotted element, and an event occurs somewhere inside it, then it bubbles up to the `` and upwards.",
          "The full path to the original event target, with all the shadow elements, can be obtained using `event.composedPath()`. As we can see from the name of the method, that path is taken after the composition.",
          "In the example above, the flattened DOM is:",
          "So, for a click on ``, a call to `event.composedPath()` returns an array: [`span`, `slot`, `div`, `shadow-root`, `user-card`, `body`, `html`, `document`, `window`]. That's exactly the parent chain from the target element in the flattened DOM, after the composition."
        ],
        "codeExamples": [
          {
            "title": "Bubbling, event.composedPath()",
            "code": "<user-card id=\"userCard\">\n  #shadow-root\n    <div>\n      <b>Name:</b>\n      <slot name=\"username\">\n        <span slot=\"username\">John Smith</span>\n      </slot>\n    </div>\n</user-card>",
            "explanation": "Example demonstrating bubbling, event.composedpath()."
          },
          {
            "title": "Bubbling, event.composedPath()",
            "code": "If the shadow tree was created with `{mode: 'closed'}`, then the composed path starts from the host: `user-card` and upwards.\n\nThat's the similar principle as for other methods that work with shadow DOM. Internals of closed trees are completely hidden.",
            "explanation": "Example demonstrating bubbling, event.composedpath()."
          }
        ]
      },
      {
        "heading": "event.composed",
        "paragraphs": [
          "Most events successfully bubble through a shadow DOM boundary. There are few events that do not.",
          "This is governed by the `composed` event object property. If it's `true`, then the event does cross the boundary. Otherwise, it only can be caught from inside the shadow DOM.",
          "If you take a look at UI Events specification, most events have `composed: true`:",
          "All touch events and pointer events also have `composed: true`.",
          "There are some events that have `composed: false` though:"
        ],
        "bulletPoints": [
          "`blur`, `focus`, `focusin`, `focusout`,",
          "`click`, `dblclick`,",
          "`mousedown`, `mouseup` `mousemove`, `mouseout`, `mouseover`,",
          "`wheel`,",
          "`beforeinput`, `input`, `keydown`, `keyup`."
        ]
      },
      {
        "heading": "Custom events",
        "paragraphs": [
          "When we dispatch custom events, we need to set both `bubbles` and `composed` properties to `true` for it to bubble up and out of the component.",
          "For example, here we create `div#inner` in the shadow DOM of `div#outer` and trigger two events on it. Only the one with `composed: true` makes it outside to the document:"
        ],
        "codeExamples": [
          {
            "title": "Custom events",
            "code": "<div id=\"outer\"></div>\n\n<script>\nouter.attachShadow({mode: 'open'});\n\nlet inner = document.createElement('div');\nouter.shadowRoot.append(inner);\n\n/*\ndiv(id=outer)\n  #shadow-dom\n    div(id=inner)\n*/\n\ndocument.addEventListener('test', event => alert(event.detail));\n\ninner.dispatchEvent(new CustomEvent('test', {\n  bubbles: true,\n*!*\n  composed: true,\n*/!*\n  detail: \"composed\"\n}));\n\ninner.dispatchEvent(new CustomEvent('test', {\n  bubbles: true,\n*!*\n  composed: false,\n*/!*\n  detail: \"not composed\"\n}));\n</script>",
            "explanation": "Example demonstrating custom events."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Events only cross shadow DOM boundaries if their `composed` flag is set to `true`.",
          "Built-in events mostly have `composed: true`, as described in the relevant specifications:",
          "Some built-in events that have `composed: false`:",
          "These events can be caught only on elements within the same DOM.",
          "If we dispatch a `CustomEvent`, then we should explicitly set `composed: true`."
        ],
        "bulletPoints": [
          "UI Events .",
          "Touch Events .",
          "Pointer Events .",
          "...And so on.",
          "`mouseenter`, `mouseleave` (also do not bubble),"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Shadow Dom Events",
        "description": "Apply your understanding of Shadow Dom Events. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Shadow Dom Events\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Shadow Dom Events\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Shadow Dom Events in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for shadow dom events.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Shadow Dom Events is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Shadow Dom Events?",
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
      "Shadow Dom Events is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying shadow dom events.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "shadow-dom-events"
    ],
    "slug": "shadow-dom-events"
  },
  {
    "title": "Regexp Introduction",
    "description": "Regular expressions are patterns that provide a powerful way to search and replace in text.",
    "difficulty": "advanced",
    "readingTime": 7,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Regular expressions are patterns that provide a powerful way to search and replace in text.",
          "In JavaScript, they are available via the RegExp object, as well as being integrated in methods of strings."
        ]
      },
      {
        "heading": "Regular Expressions",
        "paragraphs": [
          "A regular expression (also \"regexp\", or just \"reg\") consists of a *pattern* and optional *flags*.",
          "There are two syntaxes that can be used to create a regular expression object.",
          "The \"long\" syntax:",
          "And the \"short\" one, using slashes `\"/\"`:",
          "Slashes `pattern:/.../` tell JavaScript that we are creating a regular expression. They play the same role as quotes for strings."
        ],
        "codeExamples": [
          {
            "title": "Regular Expressions",
            "code": "regexp = new RegExp(\"pattern\", \"flags\");",
            "explanation": "Example demonstrating regular expressions."
          },
          {
            "title": "Regular Expressions",
            "code": "regexp = /pattern/; // no flags\nregexp = /pattern/gmi; // with flags g,m and i (to be covered soon)",
            "explanation": "Example demonstrating regular expressions."
          }
        ]
      },
      {
        "heading": "Flags",
        "paragraphs": [
          "Regular expressions may have flags that affect the search.",
          "There are only 6 of them in JavaScript:",
          "`pattern:i`",
          ": With this flag the search is case-insensitive: no difference between `A` and `a` (see the example below).",
          "`pattern:g`"
        ],
        "codeExamples": [
          {
            "title": "Flags",
            "code": "From here on the color scheme is:\n\n- regexp -- `pattern:red`\n- string (where we search) -- `subject:blue`\n- result -- `match:green`",
            "explanation": "Example demonstrating flags."
          }
        ]
      },
      {
        "heading": "Searching: str.match",
        "paragraphs": [
          "As mentioned previously, regular expressions are integrated with string methods.",
          "The method `str.match(regexp)` finds all matches of `regexp` in the string `str`.",
          "It has 3 working modes:",
          "1. If the regular expression has flag `pattern:g`, it returns an array of all matches:",
          "let str = \"We will, we will rock you\";"
        ]
      },
      {
        "heading": "Replacing: str.replace",
        "paragraphs": [
          "The method `str.replace(regexp, replacement)` replaces matches found using `regexp` in string `str` with `replacement` (all matches if there's flag `pattern:g`, otherwise, only the first one).",
          "For instance:",
          "The second argument is the `replacement` string. We can use special character combinations in it to insert fragments of the match:",
          "| Symbols | Action in the replacement string |",
          "|--------|--------|"
        ],
        "codeExamples": [
          {
            "title": "Replacing: str.replace",
            "code": "// no flag g\nalert( \"We will, we will\".replace(/we/i, \"I\") ); // I will, we will\n\n// with flag g\nalert( \"We will, we will\".replace(/we/ig, \"I\") ); // I will, I will",
            "explanation": "Example demonstrating replacing: str.replace."
          },
          {
            "title": "Replacing: str.replace",
            "code": "alert( \"I love HTML\".replace(/HTML/, \"$& and JavaScript\") ); // I love HTML and JavaScript",
            "explanation": "Example demonstrating replacing: str.replace."
          }
        ]
      },
      {
        "heading": "Testing: regexp.test",
        "paragraphs": [
          "The method `regexp.test(str)` looks for at least one match, if found, returns `true`, otherwise `false`.",
          "Later in this chapter we'll study more regular expressions, walk through more examples, and also meet other methods.",
          "Full information about the methods is given in the article ."
        ],
        "codeExamples": [
          {
            "title": "Testing: regexp.test",
            "code": "let str = \"I love JavaScript\";\nlet regexp = /LOVE/i;\n\nalert( regexp.test(str) ); // true",
            "explanation": "Example demonstrating testing: regexp.test."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Understanding Summary in JavaScript."
        ],
        "bulletPoints": [
          "A regular expression consists of a pattern and optional flags: `pattern:g`, `pattern:i`, `pattern:m`, `pattern:u`, `pattern:s`, `pattern:y`.",
          "Without flags and special symbols (that we'll study later), the search by a regexp is the same as a substring search.",
          "The method `str.match(regexp)` looks for matches: all of them if there's `pattern:g` flag, otherwise, only the first one.",
          "The method `str.replace(regexp, replacement)` replaces matches found using `regexp` with `replacement`: all of them if there's `pattern:g` flag, otherwise only the first one.",
          "The method `regexp.test(str)` returns `true` if there's at least one match, otherwise, it returns `false`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Regexp Introduction",
        "description": "Apply your understanding of Regexp Introduction. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Regexp Introduction\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Regexp Introduction\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Introduction in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp introduction.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Introduction is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Introduction?",
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
      "Regexp Introduction is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp introduction.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-introduction"
    ],
    "slug": "regexp-introduction"
  },
  {
    "title": "Regexp Character Classes",
    "description": "Consider a practical task -- we have a phone number like `\"+7(903)-123-45-67\"`, and we need to turn it into pure numbers: `79031234567`.",
    "difficulty": "advanced",
    "readingTime": 7,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Consider a practical task -- we have a phone number like `\"+7(903)-123-45-67\"`, and we need to turn it into pure numbers: `79031234567`.",
          "To do so, we can find and remove anything that's not a number. Character classes can help with that.",
          "A *character class* is a special notation that matches any symbol from a certain set.",
          "For the start, let's explore the \"digit\" class. It's written as `pattern:\\d` and corresponds to \"any single digit\".",
          "For instance, let's find the first digit in the phone number:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let str = \"+7(903)-123-45-67\";\n\nlet regexp = /\\d/;\n\nalert( str.match(regexp) ); // 7",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let str = \"+7(903)-123-45-67\";\n\nlet regexp = /\\d/g;\n\nalert( str.match(regexp) ); // array of matches: 7,9,0,3,1,2,3,4,5,6,7\n\n// let's make the digits-only phone number of them:\nalert( str.match(regexp).join('') ); // 79031234567",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Inverse classes",
        "paragraphs": [
          "For every character class there exists an \"inverse class\", denoted with the same letter, but uppercased.",
          "The \"inverse\" means that it matches all other characters, for instance:",
          "`pattern:\\D`",
          ": Non-digit: any character except `pattern:\\d`, for instance a letter.",
          "`pattern:\\S`"
        ],
        "codeExamples": [
          {
            "title": "Inverse classes",
            "code": "let str = \"+7(903)-123-45-67\";\n\nalert( str.match(/\\d/g).join('') ); // 79031234567",
            "explanation": "Example demonstrating inverse classes."
          },
          {
            "title": "Inverse classes",
            "code": "let str = \"+7(903)-123-45-67\";\n\nalert( str.replace(/\\D/g, \"\") ); // 79031234567",
            "explanation": "Example demonstrating inverse classes."
          }
        ]
      },
      {
        "heading": "A dot is \"any character\"",
        "paragraphs": [
          "A dot `pattern:.` is a special character class that matches \"any character except a newline\".",
          "For instance:",
          "Or in the middle of a regexp:",
          "Please note that a dot means \"any character\", but not the \"absence of a character\". There must be a character to match it:"
        ],
        "codeExamples": [
          {
            "title": "A dot is \"any character\"",
            "code": "alert( \"Z\".match(/./) ); // Z",
            "explanation": "Example demonstrating a dot is \"any character\"."
          },
          {
            "title": "A dot is \"any character\"",
            "code": "let regexp = /CS.4/;\n\nalert( \"CSS4\".match(regexp) ); // CSS4\nalert( \"CS-4\".match(regexp) ); // CS-4\nalert( \"CS 4\".match(regexp) ); // CS 4 (space is also a character)",
            "explanation": "Example demonstrating a dot is \"any character\"."
          }
        ]
      },
      {
        "heading": "Dot as literally any character with \"s\" flag",
        "paragraphs": [
          "By default, a dot doesn't match the newline character `\\n`.",
          "For instance, the regexp `pattern:A.B` matches `match:A`, and then `match:B` with any character between them, except a newline `\\n`:",
          "There are many situations when we'd like a dot to mean literally \"any character\", newline included.",
          "That's what flag `pattern:s` does. If a regexp has it, then a dot `pattern:.` matches literally any character:",
          "alert( \"A\\nB\".match(/A[\\s\\S]B/) ); // A\\nB (match!)"
        ],
        "codeExamples": [
          {
            "title": "Dot as literally any character with \"s\" flag",
            "code": "alert( \"A\\nB\".match(/A.B/) ); // null (no match)",
            "explanation": "Example demonstrating dot as literally any character with \"s\" flag."
          },
          {
            "title": "Dot as literally any character with \"s\" flag",
            "code": "alert( \"A\\nB\".match(/A.B/s) ); // A\\nB (match!)",
            "explanation": "Example demonstrating dot as literally any character with \"s\" flag."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "There exist following character classes:",
          "...But that's not all!",
          "Unicode encoding, used by JavaScript for strings, provides many properties for characters, like: which language the letter belongs to (if it's a letter), is it a punctuation sign, etc.",
          "We can search by these properties as well. That requires flag `pattern:u`, covered in the next article."
        ],
        "bulletPoints": [
          "`pattern:\\d` -- digits.",
          "`pattern:\\D` -- non-digits.",
          "`pattern:\\s` -- space symbols, tabs, newlines.",
          "`pattern:\\S` -- all but `pattern:\\s`.",
          "`pattern:\\w` -- Latin letters, digits, underscore `'_'`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Regexp Character Classes",
        "description": "Apply your understanding of Regexp Character Classes. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Regexp Character Classes\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Regexp Character Classes\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Character Classes in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp character classes.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Character Classes is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Character Classes?",
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
      "Regexp Character Classes is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp character classes.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-character-classes"
    ],
    "slug": "regexp-character-classes"
  },
  {
    "title": "Regexp Unicode",
    "description": "JavaScript uses Unicode encoding for strings. Most characters are encoded with 2 bytes, but that allows to represent at most 65536 characters.",
    "difficulty": "advanced",
    "readingTime": 7,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "JavaScript uses Unicode encoding for strings. Most characters are encoded with 2 bytes, but that allows to represent at most 65536 characters.",
          "That range is not big enough to encode all possible characters, that's why some rare characters are encoded with 4 bytes, for instance like `\ud835\udcb3` (mathematical X) or `\ud83d\ude04` (a smile), some hieroglyphs and so on.",
          "Here are the Unicode values of some characters:",
          "| Character | Unicode | Bytes count in Unicode |",
          "|------------|---------|--------|"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "alert('\ud83d\ude04'.length); // 2\nalert('\ud835\udcb3'.length); // 2",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Unicode properties \\p{...}",
        "paragraphs": [
          "Every character in Unicode has a lot of properties. They describe what \"category\" the character belongs to, contain miscellaneous information about it.",
          "For instance, if a character has `Letter` property, it means that the character belongs to an alphabet (of any language). And `Number` property means that it's a digit: maybe Arabic or Chinese, and so on.",
          "We can search for characters with a property, written as `pattern:\\p{\u2026}`. To use `pattern:\\p{\u2026}`, a regular expression must have flag `pattern:u`.",
          "For instance, `\\p{Letter}` denotes a letter in any language. We can also use `\\p{L}`, as `L` is an alias of `Letter`. There are shorter aliases for almost every property.",
          "In the example below three kinds of letters will be found: English, Georgian and Korean."
        ],
        "codeExamples": [
          {
            "title": "Unicode properties \\p{...}",
            "code": "let str = \"A \u10d1 \u3131\";\n\nalert( str.match(/\\p{L}/gu) ); // A,\u10d1,\u3131\nalert( str.match(/\\p{L}/g) ); // null (no matches, \\p doesn't work without the flag \"u\")",
            "explanation": "Example demonstrating unicode properties \\p{...}."
          }
        ],
        "bulletPoints": [
          "Letter `L`:",
          "lowercase `Ll`",
          "modifier `Lm`,",
          "titlecase `Lt`,",
          "uppercase `Lu`,"
        ]
      },
      {
        "heading": "Example: hexadecimal numbers",
        "paragraphs": [
          "For instance, let's look for hexadecimal numbers, written as `xFF`, where `F` is a hex digit (0..9 or A..F).",
          "A hex digit can be denoted as `pattern:\\p{Hex_Digit}`:"
        ],
        "codeExamples": [
          {
            "title": "Example: hexadecimal numbers",
            "code": "let regexp = /x\\p{Hex_Digit}\\p{Hex_Digit}/u;\n\nalert(\"number: xAF\".match(regexp)); // xAF",
            "explanation": "Example demonstrating example: hexadecimal numbers."
          }
        ]
      },
      {
        "heading": "Example: Chinese hieroglyphs",
        "paragraphs": [
          "Let's look for Chinese hieroglyphs.",
          "There's a Unicode property `Script` (a writing system), that may have a value: `Cyrillic`, `Greek`, `Arabic`, `Han` (Chinese) and so on, here's the full list).",
          "To look for characters in a given writing system we should use `pattern:Script=`, e.g. for Cyrillic letters: `pattern:\\p{sc=Cyrillic}`, for Chinese hieroglyphs: `pattern:\\p{sc=Han}`, and so on:"
        ],
        "codeExamples": [
          {
            "title": "Example: Chinese hieroglyphs",
            "code": "let regexp = /\\p{sc=Han}/gu; // returns Chinese hieroglyphs\n\nlet str = `Hello \u041f\u0440\u0438\u0432\u0435\u0442 \u4f60\u597d 123_456`;\n\nalert( str.match(regexp) ); // \u4f60,\u597d",
            "explanation": "Example demonstrating example: chinese hieroglyphs."
          }
        ]
      },
      {
        "heading": "Example: currency",
        "paragraphs": [
          "Characters that denote a currency, such as `$`, `\u20ac`, `\u00a5`, have Unicode property `pattern:\\p{Currency_Symbol}`, the short alias: `pattern:\\p{Sc}`.",
          "Let's use it to look for prices in the format \"currency, followed by a digit\":",
          "Later, in the article we'll see how to look for numbers that contain many digits."
        ],
        "codeExamples": [
          {
            "title": "Example: currency",
            "code": "let regexp = /\\p{Sc}\\d/gu;\n\nlet str = `Prices: $2, \u20ac1, \u00a59`;\n\nalert( str.match(regexp) ); // $2,\u20ac1,\u00a59",
            "explanation": "Example demonstrating example: currency."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Flag `pattern:u` enables the support of Unicode in regular expressions.",
          "That means two things:",
          "1. Characters of 4 bytes are handled correctly: as a single character, not two 2-byte characters.",
          "2. Unicode properties can be used in the search: `\\p{\u2026}`.",
          "With Unicode properties we can look for words in given languages, special characters (quotes, currencies) and so on."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Regexp Unicode",
        "description": "Apply your understanding of Regexp Unicode. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Regexp Unicode\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Regexp Unicode\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Unicode in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp unicode.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Unicode is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Unicode?",
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
      "Regexp Unicode is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp unicode.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-unicode"
    ],
    "slug": "regexp-unicode"
  },
  {
    "title": "Regexp Anchors",
    "description": "The caret `pattern:^` and dollar `pattern:$` characters have special meaning in a regexp. They are called \"anchors\".",
    "difficulty": "advanced",
    "readingTime": 3,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The caret `pattern:^` and dollar `pattern:$` characters have special meaning in a regexp. They are called \"anchors\".",
          "The caret `pattern:^` matches at the beginning of the text, and the dollar `pattern:$` -- at the end.",
          "For instance, let's test if the text starts with `Mary`:",
          "The pattern `pattern:^Mary` means: \"string start and then Mary\".",
          "Similar to this, we can test if the string ends with `snow` using `pattern:snow$`:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let str1 = \"Mary had a little lamb\";\nalert( /^Mary/.test(str1) ); // true",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let str1 = \"its fleece was white as snow\";\nalert( /snow$/.test(str1) ); // true",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Testing for a full match",
        "paragraphs": [
          "Both anchors together `pattern:^...$` are often used to test whether or not a string fully matches the pattern. For instance, to check if the user input is in the right format.",
          "Let's check whether or not a string is a time in `12:34` format. That is: two digits, then a colon, and then another two digits.",
          "In regular expressions language that's `pattern:\\d\\d:\\d\\d`:",
          "Here the match for `pattern:\\d\\d:\\d\\d` must start exactly after the beginning of the text `pattern:^`, and the end `pattern:$` must immediately follow.",
          "The whole string must be exactly in this format. If there's any deviation or an extra character, the result is `false`."
        ],
        "codeExamples": [
          {
            "title": "Testing for a full match",
            "code": "let goodInput = \"12:34\";\nlet badInput = \"12:345\";\n\nlet regexp = /^\\d\\d:\\d\\d$/;\nalert( regexp.test(goodInput) ); // true\nalert( regexp.test(badInput) ); // false",
            "explanation": "Example demonstrating testing for a full match."
          },
          {
            "title": "Testing for a full match",
            "code": "Anchors `pattern:^` and `pattern:$` are tests. They have zero width.\n\nIn other words, they do not match a character, but rather force the regexp engine to check the condition (text start/end).",
            "explanation": "Example demonstrating testing for a full match."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Regexp ^$",
        "description": "Which string matches the pattern `pattern:^$`?",
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
        "question": "What is the primary role of Regexp Anchors in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp anchors.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Anchors is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Anchors?",
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
      "Regexp Anchors is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp anchors.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-anchors"
    ],
    "slug": "regexp-anchors"
  },
  {
    "title": "Regexp Multiline Mode",
    "description": "The multiline mode is enabled by the flag `pattern:m`.",
    "difficulty": "advanced",
    "readingTime": 3,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The multiline mode is enabled by the flag `pattern:m`.",
          "It only affects the behavior of `pattern:^` and `pattern:$`.",
          "In the multiline mode they match not only at the beginning and the end of the string, but also at start/end of line."
        ]
      },
      {
        "heading": "Searching at line start ^",
        "paragraphs": [
          "In the example below the text has multiple lines. The pattern `pattern:/^\\d/gm` takes a digit from the beginning of each line:",
          "Without the flag `pattern:m` only the first digit is matched:",
          "That's because by default a caret `pattern:^` only matches at the beginning of the text, and in the multiline mode -- at the start of any line."
        ],
        "codeExamples": [
          {
            "title": "Searching at line start ^",
            "code": "let str = `1st place: Winnie\n2nd place: Piglet\n3rd place: Eeyore`;\n\n*!*\nconsole.log( str.match(/^\\d/gm) ); // 1, 2, 3\n*/!*",
            "explanation": "Example demonstrating searching at line start ^."
          },
          {
            "title": "Searching at line start ^",
            "code": "let str = `1st place: Winnie\n2nd place: Piglet\n3rd place: Eeyore`;\n\n*!*\nconsole.log( str.match(/^\\d/g) ); // 1\n*/!*",
            "explanation": "Example demonstrating searching at line start ^."
          }
        ]
      },
      {
        "heading": "Searching at line end $",
        "paragraphs": [
          "The dollar sign `pattern:$` behaves similarly.",
          "The regular expression `pattern:\\d$` finds the last digit in every line",
          "Without the flag `pattern:m`, the dollar `pattern:$` would only match the end of the whole text, so only the very last digit would be found."
        ],
        "codeExamples": [
          {
            "title": "Searching at line end $",
            "code": "let str = `Winnie: 1\nPiglet: 2\nEeyore: 3`;\n\nconsole.log( str.match(/\\d$/gm) ); // 1,2,3",
            "explanation": "Example demonstrating searching at line end $."
          },
          {
            "title": "Searching at line end $",
            "code": "\"End of a line\" formally means \"immediately before a line break\": the test  `pattern:$` in multiline mode matches at all positions succeeded by a newline character `\\n`.\n\nAnd at the text end.",
            "explanation": "Example demonstrating searching at line end $."
          }
        ]
      },
      {
        "heading": "Searching for \\n instead of ^ $",
        "paragraphs": [
          "To find a newline, we can use not only anchors `pattern:^` and `pattern:$`, but also the newline character `\\n`.",
          "What's the difference? Let's see an example.",
          "Here we search for `pattern:\\d\\n` instead of `pattern:\\d$`:",
          "As we can see, there are 2 matches instead of 3.",
          "That's because there's no newline after `subject:3` (there's text end though, so it matches `pattern:$`)."
        ],
        "codeExamples": [
          {
            "title": "Searching for \\n instead of ^ $",
            "code": "let str = `Winnie: 1\nPiglet: 2\nEeyore: 3`;\n\nconsole.log( str.match(/\\d\\n/g) ); // 1\\n,2\\n",
            "explanation": "Example demonstrating searching for \\n instead of ^ $."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Regexp Multiline Mode",
        "description": "Apply your understanding of Regexp Multiline Mode. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Regexp Multiline Mode\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Regexp Multiline Mode\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Multiline Mode in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp multiline mode.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Multiline Mode is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Multiline Mode?",
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
      "Regexp Multiline Mode is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp multiline mode.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-multiline-mode"
    ],
    "slug": "regexp-multiline-mode"
  },
  {
    "title": "Regexp Boundary",
    "description": "A word boundary `pattern:\\b` is a test, just like `pattern:^` and `pattern:$`.",
    "difficulty": "advanced",
    "readingTime": 3,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A word boundary `pattern:\\b` is a test, just like `pattern:^` and `pattern:$`.",
          "When the regexp engine (program module that implements searching for regexps) comes across `pattern:\\b`, it checks that the position in the string is a word boundary.",
          "There are three different positions that qualify as word boundaries:",
          "For instance, regexp `pattern:\\bJava\\b` will be found in `subject:Hello, Java!`, where `subject:Java` is a standalone word, but not in `subject:Hello, JavaScript!`.",
          "In the string `subject:Hello, Java!` following positions correspond to `pattern:\\b`:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "alert( \"Hello, Java!\".match(/\\bJava\\b/) ); // Java\nalert( \"Hello, JavaScript!\".match(/\\bJava\\b/) ); // null",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "alert( \"Hello, Java!\".match(/\\bHello\\b/) ); // Hello\nalert( \"Hello, Java!\".match(/\\bJava\\b/) );  // Java\nalert( \"Hello, Java!\".match(/\\bHell\\b/) );  // null (no match)\nalert( \"Hello, Java!\".match(/\\bJava!\\b/) ); // null (no match)",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "At string start, if the first string character is a word character `pattern:\\w`.",
          "Between two characters in the string, where one is a word character `pattern:\\w` and the other is not.",
          "At string end, if the last string character is a word character `pattern:\\w`."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Find the time",
        "description": "The time has a format: `hours:minutes`. Both hours and minutes has two digits, like `09:00`. Make a regexp to find time in the string: `subject:Breakfast at 09:00 in the room 123:456.` P.S. In this task there's no need to check time correctness yet, so `25:99` can also be a valid result. P.P.S. The ",
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
        "question": "What is the primary role of Regexp Boundary in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp boundary.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Boundary is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Boundary?",
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
      "Regexp Boundary is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp boundary.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-boundary"
    ],
    "slug": "regexp-boundary"
  },
  {
    "title": "Regexp Escaping",
    "description": "As we've seen, a backslash `pattern:\\` is used to denote character classes, e.g. `pattern:\\d`. So it's a special character in regexps (just like in regular strings).",
    "difficulty": "advanced",
    "readingTime": 4,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "As we've seen, a backslash `pattern:\\` is used to denote character classes, e.g. `pattern:\\d`. So it's a special character in regexps (just like in regular strings).",
          "There are other special characters as well, that have special meaning in a regexp, such as `pattern:[ ] { } ( ) \\ ^ $ . | ? * +`. They are used to do more powerful searches.",
          "Don't try to remember the list -- soon we'll deal with each of them, and you'll know them by heart automatically."
        ]
      },
      {
        "heading": "Escaping",
        "paragraphs": [
          "Let's say we want to find literally a dot. Not \"any character\", but just a dot.",
          "To use a special character as a regular one, prepend it with a backslash: `pattern:\\.`.",
          "That's also called \"escaping a character\".",
          "For example:",
          "Parentheses are also special characters, so if we want them, we should use `pattern:\\(`. The example below looks for a string `\"g()\"`:"
        ],
        "codeExamples": [
          {
            "title": "Escaping",
            "code": "alert( \"Chapter 5.1\".match(/\\d\\.\\d/) ); // 5.1 (match!)\nalert( \"Chapter 511\".match(/\\d\\.\\d/) ); // null (looking for a real dot \\.)",
            "explanation": "Example demonstrating escaping."
          },
          {
            "title": "Escaping",
            "code": "alert( \"function g()\".match(/g\\(\\)/) ); // \"g()\"",
            "explanation": "Example demonstrating escaping."
          }
        ]
      },
      {
        "heading": "A slash",
        "paragraphs": [
          "A slash symbol `'/'` is not a special character, but in JavaScript it is used to open and close the regexp: `pattern:/...pattern.../`, so we should escape it too.",
          "Here's what a search for a slash `'/'` looks like:",
          "On the other hand, if we're not using `pattern:/.../`, but create a regexp using `new RegExp`, then we don't need to escape it:"
        ],
        "codeExamples": [
          {
            "title": "A slash",
            "code": "alert( \"/\".match(/\\//) ); // '/'",
            "explanation": "Example demonstrating a slash."
          },
          {
            "title": "A slash",
            "code": "alert( \"/\".match(new RegExp(\"/\")) ); // finds /",
            "explanation": "Example demonstrating a slash."
          }
        ]
      },
      {
        "heading": "new RegExp",
        "paragraphs": [
          "If we are creating a regular expression with `new RegExp`, then we don't have to escape `/`, but need to do some other escaping.",
          "For instance, consider this:",
          "The similar search in one of previous examples worked with `pattern:/\\d\\.\\d/`, but `new RegExp(\"\\d\\.\\d\")` doesn't work, why?",
          "The reason is that backslashes are \"consumed\" by a string. As we may recall, regular strings have their own special characters, such as `\\n`, and a backslash is used for escaping.",
          "Here's how \"\\d\\.\\d\" is perceived:"
        ],
        "codeExamples": [
          {
            "title": "new RegExp",
            "code": "let regexp = new RegExp(\"\\d\\.\\d\");\n\nalert( \"Chapter 5.1\".match(regexp) ); // null",
            "explanation": "Example demonstrating new regexp."
          },
          {
            "title": "new RegExp",
            "code": "alert(\"\\d\\.\\d\"); // d.d",
            "explanation": "Example demonstrating new regexp."
          }
        ],
        "bulletPoints": [
          "`\\n` -- becomes a newline character,",
          "`\\u1234` -- becomes the Unicode character with such code,",
          "...And when there's no special meaning: like `pattern:\\d` or `\\z`, then the backslash is simply removed."
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Understanding Summary in JavaScript."
        ],
        "bulletPoints": [
          "To search for special characters `pattern:[ \\ ^ $ . | ? * + ( )` literally, we need to prepend them with a backslash `\\` (\"escape them\").",
          "We also need to escape `/` if we're inside `pattern:/.../` (but not inside `new RegExp`).",
          "When passing a string to `new RegExp`, we need to double backslashes `\\\\`, cause string quotes consume one of them."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Regexp Escaping",
        "description": "Apply your understanding of Regexp Escaping. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Regexp Escaping\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Regexp Escaping\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Escaping in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp escaping.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Escaping is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Escaping?",
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
      "Regexp Escaping is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp escaping.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-escaping"
    ],
    "slug": "regexp-escaping"
  },
  {
    "title": "Regexp Character Sets And Ranges",
    "description": "Several characters or character classes inside square brackets `[\u2026]` mean to \"search for any character among given\".",
    "difficulty": "advanced",
    "readingTime": 8,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Several characters or character classes inside square brackets `[\u2026]` mean to \"search for any character among given\"."
        ]
      },
      {
        "heading": "Sets",
        "paragraphs": [
          "For instance, `pattern:[eao]` means any of the 3 characters: `'a'`, `'e'`, or `'o'`.",
          "That's called a *set*. Sets can be used in a regexp along with regular characters:",
          "Please note that although there are multiple characters in the set, they correspond to exactly one character in the match.",
          "So the example below gives no matches:",
          "The pattern searches for:"
        ],
        "codeExamples": [
          {
            "title": "Sets",
            "code": "// find [t or m], and then \"op\"\nalert( \"Mop top\".match(/[tm]op/gi) ); // \"Mop\", \"top\"",
            "explanation": "Example demonstrating sets."
          },
          {
            "title": "Sets",
            "code": "// find \"V\", then [o or i], then \"la\"\nalert( \"Voila\".match(/V[oi]la/) ); // null, no matches",
            "explanation": "Example demonstrating sets."
          }
        ],
        "bulletPoints": [
          "`pattern:V`,",
          "then *one* of the letters `pattern:[oi]`,",
          "then `pattern:la`."
        ]
      },
      {
        "heading": "Ranges",
        "paragraphs": [
          "Square brackets may also contain *character ranges*.",
          "For instance, `pattern:[a-z]` is a character in range from `a` to `z`, and `pattern:[0-5]` is a digit from `0` to `5`.",
          "In the example below we're searching for `\"x\"` followed by two digits or letters from `A` to `F`:",
          "Here `pattern:[0-9A-F]` has two ranges: it searches for a character that is either a digit from `0` to `9` or a letter from `A` to `F`.",
          "If we'd like to look for lowercase letters as well, we can add the range `a-f`: `pattern:[0-9A-Fa-f]`. Or add the flag `pattern:i`."
        ],
        "codeExamples": [
          {
            "title": "Ranges",
            "code": "alert( \"Exception 0xAF\".match(/x[0-9A-F][0-9A-F]/g) ); // xAF",
            "explanation": "Example demonstrating ranges."
          },
          {
            "title": "Ranges",
            "code": "For instance:\n\n- **\\d** -- is the same as `pattern:[0-9]`,\n- **\\w** -- is the same as `pattern:[a-zA-Z0-9_]`,\n- **\\s** -- is the same as `pattern:[\\t\\n\\v\\f\\r ]`, plus few other rare Unicode space characters.",
            "explanation": "Example demonstrating ranges."
          }
        ]
      },
      {
        "heading": "Example: multi-language \\w",
        "paragraphs": [
          "As the character class `pattern:\\w` is a shorthand for `pattern:[a-zA-Z0-9_]`, it can't find Chinese hieroglyphs, Cyrillic letters, etc.",
          "We can write a more universal pattern, that looks for wordly characters in any language. That's easy with Unicode properties: `pattern:[\\p{Alpha}\\p{M}\\p{Nd}\\p{Pc}\\p{Join_C}]`.",
          "Let's decipher it. Similar to `pattern:\\w`, we're making a set of our own that includes characters with following Unicode properties:",
          "An example of use:",
          "Of course, we can edit this pattern: add Unicode properties or remove them. Unicode properties are covered in more details in the article ."
        ],
        "codeExamples": [
          {
            "title": "Example: multi-language \\w",
            "code": "let regexp = /[\\p{Alpha}\\p{M}\\p{Nd}\\p{Pc}\\p{Join_C}]/gu;\n\nlet str = `Hi \u4f60\u597d 12`;\n\n// finds all letters and digits:\nalert( str.match(regexp) ); // H,i,\u4f60,\u597d,1,2",
            "explanation": "Example demonstrating example: multi-language \\w."
          },
          {
            "title": "Example: multi-language \\w",
            "code": "Unicode properties `pattern:p{\u2026}` are not implemented in IE. If we really need them, we can use library [XRegExp](https://xregexp.com/).\n\nOr just use ranges of characters in a language that interests us, e.g.  `pattern:[\u0430-\u044f]` for Cyrillic letters.",
            "explanation": "Example demonstrating example: multi-language \\w."
          }
        ],
        "bulletPoints": [
          "`Alphabetic` (`Alpha`) - for letters,",
          "`Mark` (`M`) - for accents,",
          "`Decimal_Number` (`Nd`) - for digits,",
          "`Connector_Punctuation` (`Pc`) - for the underscore `'_'` and similar characters,",
          "`Join_Control` (`Join_C`) - two special codes `200c` and `200d`, used in ligatures, e.g. in Arabic."
        ]
      },
      {
        "heading": "Excluding ranges",
        "paragraphs": [
          "Besides normal ranges, there are \"excluding\" ranges that look like `pattern:[^\u2026]`.",
          "They are denoted by a caret character `^` at the start and match any character *except the given ones*.",
          "For instance:",
          "The example below looks for any characters except letters, digits and spaces:"
        ],
        "codeExamples": [
          {
            "title": "Excluding ranges",
            "code": "alert( \"alice15@gmail.com\".match(/[^\\d\\sA-Z]/gi) ); // @ and .",
            "explanation": "Example demonstrating excluding ranges."
          }
        ],
        "bulletPoints": [
          "`pattern:[^aeyo]` -- any character except `'a'`, `'e'`, `'y'` or `'o'`.",
          "`pattern:[^0-9]` -- any character except a digit, the same as `pattern:\\D`.",
          "`pattern:[^\\s]` -- any non-space character, same as `\\S`."
        ]
      },
      {
        "heading": "Escaping in [\u2026]",
        "paragraphs": [
          "Usually when we want to find exactly a special character, we need to escape it like `pattern:\\.`. And if we need a backslash, then we use `pattern:\\\\`, and so on.",
          "In square brackets we can use the vast majority of special characters without escaping:",
          "In other words, all special characters are allowed without escaping, except when they mean something for square brackets.",
          "A dot `.` inside square brackets means just a dot. The pattern `pattern:[.,]` would look for one of characters: either a dot or a comma.",
          "In the example below the regexp `pattern:[-().^+]` looks for one of the characters `-().^+`:"
        ],
        "codeExamples": [
          {
            "title": "Escaping in [\u2026]",
            "code": "// No need to escape\nlet regexp = /[-().^+]/g;\n\nalert( \"1 + 2 - 3\".match(regexp) ); // Matches +, -",
            "explanation": "Example demonstrating escaping in [\u2026]."
          },
          {
            "title": "Escaping in [\u2026]",
            "code": "// Escaped everything\nlet regexp = /[\\-\\(\\)\\.\\^\\+]/g;\n\nalert( \"1 + 2 - 3\".match(regexp) ); // also works: +, -",
            "explanation": "Example demonstrating escaping in [\u2026]."
          }
        ],
        "bulletPoints": [
          "Symbols `pattern:. + ( )` never need escaping.",
          "A hyphen `pattern:-` is not escaped in the beginning or the end (where it does not define a range).",
          "A caret `pattern:^` is only escaped in the beginning (where it means exclusion).",
          "The closing square bracket `pattern:]` is always escaped (if we need to look for that symbol)."
        ]
      },
      {
        "heading": "Ranges and flag \"u\"",
        "paragraphs": [
          "If there are surrogate pairs in the set, flag `pattern:u` is required for them to work correctly.",
          "For instance, let's look for `pattern:[\ud835\udcb3\ud835\udcb4]` in the string `subject:\ud835\udcb3`:",
          "The result is incorrect, because by default regular expressions \"don't know\" about surrogate pairs.",
          "The regular expression engine thinks that `[\ud835\udcb3\ud835\udcb4]` -- are not two, but four characters:",
          "1. left half of `\ud835\udcb3` `(1)`,"
        ],
        "codeExamples": [
          {
            "title": "Ranges and flag \"u\"",
            "code": "alert( '\ud835\udcb3'.match(/[\ud835\udcb3\ud835\udcb4]/) ); // shows a strange character, like [?]\n// (the search was performed incorrectly, half-character returned)",
            "explanation": "Example demonstrating ranges and flag \"u\"."
          },
          {
            "title": "Ranges and flag \"u\"",
            "code": "for(let i=0; i<'\ud835\udcb3\ud835\udcb4'.length; i++) {\n  alert('\ud835\udcb3\ud835\udcb4'.charCodeAt(i)); // 55349, 56499, 55349, 56500\n};",
            "explanation": "Example demonstrating ranges and flag \"u\"."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Java[^script]",
        "description": "We have a regexp `pattern:/Java[^script]/`. Does it match anything in the string `subject:Java`? In the string `subject:JavaScript`?",
        "starterCode": "// Write your code here\n",
        "solution": "- Yes, because the `pattern:[^script]` part matches the character `\"S\"`. It's not one of `pattern:script`. As the regexp is case-sensitive (no `pattern:i` flag), it treats `\"S\"` as a different character from `\"s\"`.",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Find the time as hh:mm or hh-mm",
        "description": "The time can be in the format `hours:minutes` or `hours-minutes`. Both hours and minutes have 2 digits: `09:00` or `21-30`. Write a regexp to find time: ```js let regexp = /your regexp/g; alert( \"Breakfast at 09:00. Dinner at 21-30\".match(regexp) ); // 09:00, 21-30 ``` P.S. In this task we assume th",
        "starterCode": "let regexp = /your regexp/g;\nalert( \"Breakfast at 09:00. Dinner at 21-30\".match(regexp) ); // 09:00, 21-30",
        "solution": "let regexp = /your regexp/g;\nalert( \"Breakfast at 09:00. Dinner at 21-30\".match(regexp) ); // 09:00, 21-30",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Character Sets And Ranges in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp character sets and ranges.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Character Sets And Ranges is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Character Sets And Ranges?",
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
      "Regexp Character Sets And Ranges is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp character sets and ranges.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-character-sets-and-ranges"
    ],
    "slug": "regexp-character-sets-and-ranges"
  },
  {
    "title": "Regexp Quantifiers",
    "description": "Let's say we have a string like `+7(903)-123-45-67` and want to find all numbers in it. But unlike before, we are interested not in single digits, but full numbers: `7, 903, 123, 4...",
    "difficulty": "advanced",
    "readingTime": 5,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Let's say we have a string like `+7(903)-123-45-67` and want to find all numbers in it. But unlike before, we are interested not in single digits, but full numbers: `7, 903, 123, 45, 67`.",
          "A number is a sequence of 1 or more digits `pattern:\\d`. To mark how many we need, we can append a *quantifier*."
        ]
      },
      {
        "heading": "Quantity {n}",
        "paragraphs": [
          "The simplest quantifier is a number in curly braces: `pattern:{n}`.",
          "A quantifier is appended to a character (or a character class, or a `[...]` set etc) and specifies how many we need.",
          "It has a few advanced forms, let's see examples:",
          "The exact count: `pattern:{5}`",
          ": `pattern:\\d{5}` denotes exactly 5 digits, the same as `pattern:\\d\\d\\d\\d\\d`."
        ],
        "codeExamples": [
          {
            "title": "Quantity {n}",
            "code": "let str = \"+7(903)-123-45-67\";\n\nlet numbers = str.match(/\\d{1,}/g);\n\nalert(numbers); // 7,903,123,45,67",
            "explanation": "Example demonstrating quantity {n}."
          }
        ]
      },
      {
        "heading": "Shorthands",
        "paragraphs": [
          "There are shorthands for most used quantifiers:",
          "`pattern:+`",
          ": Means \"one or more\", the same as `pattern:{1,}`.",
          "For instance, `pattern:\\d+` looks for numbers:",
          "let str = \"+7(903)-123-45-67\";"
        ]
      },
      {
        "heading": "More examples",
        "paragraphs": [
          "Quantifiers are used very often. They serve as the main \"building block\" of complex regular expressions, so let's see more examples.",
          "**Regexp for decimal fractions (a number with a floating point): `pattern:\\d+\\.\\d+`**",
          "In action:",
          "**Regexp for an \"opening HTML-tag without attributes\", such as `` or ``.**",
          "1. The simplest one: `pattern:/<[a-z]+>/i`"
        ],
        "codeExamples": [
          {
            "title": "More examples",
            "code": "alert( \"0 1 12.345 7890\".match(/\\d+\\.\\d+/g) ); // 12.345",
            "explanation": "Example demonstrating more examples."
          },
          {
            "title": "More examples",
            "code": "alert( \"<h1>Hi!</h1>\".match(/<\\/?[a-z][a-z0-9]*>/gi) ); // <h1>, </h1>",
            "explanation": "Example demonstrating more examples."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "How to find an ellipsis \"...\" ?",
        "description": "Create a regexp to find ellipsis: 3 (or more?) dots in a row. Check it: ```js let regexp = /your regexp/g; alert( \"Hello!... How goes?.....\".match(regexp) ); // ..., ..... ```",
        "starterCode": "let regexp = /your regexp/g;\nalert( \"Hello!... How goes?.....\".match(regexp) ); // ..., .....",
        "solution": "let regexp = /your regexp/g;\nalert( \"Hello!... How goes?.....\".match(regexp) ); // ..., .....",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Regexp for HTML colors",
        "description": "Create a regexp to search HTML-colors written as `#ABCDEF`: first `#` and then 6 hexadecimal characters. An example of use: ```js let regexp = /...your regexp.../ let str = \"color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678\"; alert( str.match(regexp) ) // #121212,#AA00ef ``` ",
        "starterCode": "let regexp = /...your regexp.../\n\nlet str = \"color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678\";\n\nalert( str.match(regexp) )  // #121212,#AA00ef",
        "solution": "The problem is that it finds the color in longer sequences:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Quantifiers in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp quantifiers.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Quantifiers is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Quantifiers?",
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
      "Regexp Quantifiers is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp quantifiers.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-quantifiers"
    ],
    "slug": "regexp-quantifiers"
  },
  {
    "title": "Regexp Greedy And Lazy",
    "description": "Quantifiers are very simple from the first sight, but in fact they can be tricky.",
    "difficulty": "advanced",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Quantifiers are very simple from the first sight, but in fact they can be tricky.",
          "We should understand how the search works very well if we plan to look for something more complex than `pattern:/\\d+/`.",
          "Let's take the following task as an example.",
          "We have a text and need to replace all quotes `\"...\"` with guillemet marks: `\u00ab...\u00bb`. They are preferred for typography in many countries.",
          "For instance: `\"Hello, world\"` should become `\u00abHello, world\u00bb`. There exist other quotes, such as `\u201eWitaj, \u015bwiecie!\u201d` (Polish) or `\u300c\u4f60\u597d\uff0c\u4e16\u754c\u300d` (Chinese), but for our task let's choose `\u00ab...\u00bb`."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let regexp = /\".+\"/g;\n\nlet str = 'a \"witch\" and her \"broom\" is one';\n\nalert( str.match(regexp) ); // \"witch\" and her \"broom\"",
            "explanation": "Example demonstrating overview."
          }
        ]
      },
      {
        "heading": "Greedy search",
        "paragraphs": [
          "To find a match, the regular expression engine uses the following algorithm:",
          "These common words do not make it obvious why the regexp fails, so let's elaborate how the search works for the pattern `pattern:\".+\"`.",
          "1. The first pattern character is a quote `pattern:\"`.",
          "The regular expression engine tries to find it at the zero position of the source string `subject:a \"witch\" and her \"broom\" is one`, but there's `subject:a` there, so there's immediately no match.",
          "Then it advances: goes to the next positions in the source string and tries to find the first character of the pattern there, fails again, and finally finds the quote at the 3rd position:"
        ],
        "bulletPoints": [
          "For every position in the string",
          "Try to match the pattern at that position.",
          "If there's no match, go to the next position."
        ]
      },
      {
        "heading": "Lazy mode",
        "paragraphs": [
          "The lazy mode of quantifiers is an opposite to the greedy mode. It means: \"repeat minimal number of times\".",
          "We can enable it by putting a question mark `pattern:'?'` after the quantifier, so that it becomes `pattern:*?` or `pattern:+?` or even `pattern:??` for `pattern:'?'`.",
          "To make things clear: usually a question mark `pattern:?` is a quantifier by itself (zero or one), but if added *after another quantifier (or even itself)* it gets another meaning -- it switches the matching mode from greedy to lazy.",
          "The regexp `pattern:/\".+?\"/g` works as intended: it finds `match:\"witch\"` and `match:\"broom\"`:",
          "To clearly understand the change, let's trace the search step by step."
        ],
        "codeExamples": [
          {
            "title": "Lazy mode",
            "code": "let regexp = /\".+?\"/g;\n\nlet str = 'a \"witch\" and her \"broom\" is one';\n\nalert( str.match(regexp) ); // \"witch\", \"broom\"",
            "explanation": "Example demonstrating lazy mode."
          },
          {
            "title": "Lazy mode",
            "code": "alert( \"123 456\".match(/\\d+ \\d+?/) ); // 123 4",
            "explanation": "Example demonstrating lazy mode."
          }
        ]
      },
      {
        "heading": "Alternative approach",
        "paragraphs": [
          "With regexps, there's often more than one way to do the same thing.",
          "In our case we can find quoted strings without lazy mode using the regexp `pattern:\"[^\"]+\"`:",
          "The regexp `pattern:\"[^\"]+\"` gives correct results, because it looks for a quote `pattern:'\"'` followed by one or more non-quotes `pattern:[^\"]`, and then the closing quote.",
          "When the regexp engine looks for `pattern:[^\"]+` it stops the repetitions when it meets the closing quote, and we're done.",
          "Please note, that this logic does not replace lazy quantifiers!"
        ],
        "codeExamples": [
          {
            "title": "Alternative approach",
            "code": "let regexp = /\"[^\"]+\"/g;\n\nlet str = 'a \"witch\" and her \"broom\" is one';\n\nalert( str.match(regexp) ); // \"witch\", \"broom\"",
            "explanation": "Example demonstrating alternative approach."
          },
          {
            "title": "Alternative approach",
            "code": "let str = '...<a href=\"link\" class=\"doc\">...';\nlet regexp = /<a href=\".*\" class=\"doc\">/g;\n\n// Works!\nalert( str.match(regexp) ); // <a href=\"link\" class=\"doc\">",
            "explanation": "Example demonstrating alternative approach."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Quantifiers have two modes of work:",
          "Greedy",
          ": By default the regular expression engine tries to repeat the quantified character as many times as possible. For instance, `pattern:\\d+` consumes all possible digits. When it becomes impossible to consume more (no more digits or string end), then it continues to match the rest of the pattern. If there's no match then it decreases the number of repetitions (backtracks) and tries again.",
          "Lazy",
          ": Enabled by the question mark `pattern:?` after the quantifier. The regexp engine tries to match the rest of the pattern before each repetition of the quantified character."
        ]
      }
    ],
    "exercises": [
      {
        "title": "A match for /d+? d+?/",
        "description": "What's the match here? ```js alert( \"123 456\".match(/\\d+? \\d+?/g) ); // ? ```",
        "starterCode": "alert( \"123 456\".match(/\\d+? \\d+?/g) ); // ?",
        "solution": "alert( \"123 456\".match(/\\d+? \\d+?/g) ); // ?",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Find HTML comments",
        "description": "Find all HTML comments in the text: ```js let regexp = /your regexp/g; let str = `... <!-- My -- comment test --> .. <!----> .. `; alert( str.match(regexp) ); // '<!-- My -- comment \\n test -->', '<!---->' ```",
        "starterCode": "let regexp = /your regexp/g;\n\nlet str = `... <!-- My -- comment\n test --> ..  <!----> .. \n`;\n\nalert( str.match(regexp) ); // '<!-- My -- comment \\n test -->', '<!---->'",
        "solution": "let regexp = /your regexp/g;\n\nlet str = `... <!-- My -- comment\n test --> ..  <!----> .. \n`;\n\nalert( str.match(regexp) ); // '<!-- My -- comment \\n test -->', '<!---->'",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Find HTML tags",
        "description": "Create a regular expression to find all (opening and closing) HTML tags with their attributes. An example of use: ```js run let regexp = /your regexp/g; let str = '<> '; alert( str.match(regexp) ); // '', '', '' ``` Here we assume that tag attributes may not contain `<` and `>` (inside quotes too), ",
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
        "question": "What is the primary role of Regexp Greedy And Lazy in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp greedy and lazy.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Greedy And Lazy is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Greedy And Lazy?",
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
      "Regexp Greedy And Lazy is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp greedy and lazy.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-greedy-and-lazy"
    ],
    "slug": "regexp-greedy-and-lazy"
  },
  {
    "title": "Regexp Groups",
    "description": "A part of a pattern can be enclosed in parentheses `pattern:(...)`. This is called a \"capturing group\".",
    "difficulty": "advanced",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "A part of a pattern can be enclosed in parentheses `pattern:(...)`. This is called a \"capturing group\".",
          "That has two effects:",
          "1. It allows to get a part of the match as a separate item in the result array.",
          "2. If we put a quantifier after the parentheses, it applies to the parentheses as a whole."
        ]
      },
      {
        "heading": "Examples",
        "paragraphs": [
          "Let's see how parentheses work in examples."
        ]
      },
      {
        "heading": "Example: gogogo",
        "paragraphs": [
          "Without parentheses, the pattern `pattern:go+` means `subject:g` character, followed by `subject:o` repeated one or more times. For instance, `match:goooo` or `match:gooooooooo`.",
          "Parentheses group characters together, so `pattern:(go)+` means `match:go`, `match:gogo`, `match:gogogo` and so on."
        ],
        "codeExamples": [
          {
            "title": "Example: gogogo",
            "code": "alert( 'Gogogo now!'.match(/(go)+/ig) ); // \"Gogogo\"",
            "explanation": "Example demonstrating example: gogogo."
          }
        ]
      },
      {
        "heading": "Example: domain",
        "paragraphs": [
          "Let's make something more complex -- a regular expression to search for a website domain.",
          "For example:",
          "As we can see, a domain consists of repeated words, a dot after each one except the last one.",
          "In regular expressions that's `pattern:(\\w+\\.)+\\w+`:",
          "The search works, but the pattern can't match a domain with a hyphen, e.g. `my-site.com`, because the hyphen does not belong to class `pattern:\\w`."
        ],
        "codeExamples": [
          {
            "title": "Example: domain",
            "code": "mail.com\nusers.mail.com\nsmith.users.mail.com",
            "explanation": "Example demonstrating example: domain."
          },
          {
            "title": "Example: domain",
            "code": "let regexp = /(\\w+\\.)+\\w+/g;\n\nalert( \"site.com my.site.com\".match(regexp) ); // site.com,my.site.com",
            "explanation": "Example demonstrating example: domain."
          }
        ]
      },
      {
        "heading": "Example: email",
        "paragraphs": [
          "The previous example can be extended. We can create a regular expression for emails based on it.",
          "The email format is: `name@domain`. Any word can be the name, hyphens and dots are allowed. In regular expressions that's `pattern:[-.\\w]+`.",
          "The pattern:",
          "That regexp is not perfect, but mostly works and helps to fix accidental mistypes. The only truly reliable check for an email can only be done by sending a letter."
        ],
        "codeExamples": [
          {
            "title": "Example: email",
            "code": "let regexp = /[-.\\w]+@([\\w-]+\\.)+[\\w-]+/g;\n\nalert(\"my@mail.com @ his@site.com.uk\".match(regexp)); // my@mail.com, his@site.com.uk",
            "explanation": "Example demonstrating example: email."
          }
        ]
      },
      {
        "heading": "Parentheses contents in the match",
        "paragraphs": [
          "Parentheses are numbered from left to right. The search engine memorizes the content matched by each of them and allows to get it in the result.",
          "The method `str.match(regexp)`, if `regexp` has no flag `g`, looks for the first match and returns it as an array:",
          "1. At index `0`: the full match.",
          "2. At index `1`: the contents of the first parentheses.",
          "3. At index `2`: the contents of the second parentheses."
        ],
        "codeExamples": [
          {
            "title": "Parentheses contents in the match",
            "code": "let str = '<h1>Hello, world!</h1>';\n\nlet tag = str.match(/<(.*?)>/);\n\nalert( tag[0] ); // <h1>\nalert( tag[1] ); // h1",
            "explanation": "Example demonstrating parentheses contents in the match."
          }
        ]
      },
      {
        "heading": "Nested groups",
        "paragraphs": [
          "Parentheses can be nested. In this case the numbering also goes from left to right.",
          "For instance, when searching a tag in `subject:` we may be interested in:",
          "1. The tag content as a whole: `match:span class=\"my\"`.",
          "2. The tag name: `match:span`.",
          "3. The tag attributes: `match:class=\"my\"`."
        ],
        "codeExamples": [
          {
            "title": "Nested groups",
            "code": "let str = '<span class=\"my\">';\n\nlet regexp = /<(([a-z]+)\\s*([^>]*))>/;\n\nlet result = str.match(regexp);\nalert(result[0]); // <span class=\"my\">\nalert(result[1]); // span class=\"my\"\nalert(result[2]); // span\nalert(result[3]); // class=\"my\"",
            "explanation": "Example demonstrating nested groups."
          }
        ]
      },
      {
        "heading": "Optional groups",
        "paragraphs": [
          "Even if a group is optional and doesn't exist in the match (e.g. has the quantifier `pattern:(...)?`), the corresponding `result` array item is present and equals `undefined`.",
          "For instance, let's consider the regexp `pattern:a(z)?(c)?`. It looks for `\"a\"` optionally followed by `\"z\"` optionally followed by `\"c\"`.",
          "If we run it on the string with a single letter `subject:a`, then the result is:",
          "The array has the length of `3`, but all groups are empty.",
          "And here's a more complex match for the string `subject:ac`:"
        ],
        "codeExamples": [
          {
            "title": "Optional groups",
            "code": "let match = 'a'.match(/a(z)?(c)?/);\n\nalert( match.length ); // 3\nalert( match[0] ); // a (whole match)\nalert( match[1] ); // undefined\nalert( match[2] ); // undefined",
            "explanation": "Example demonstrating optional groups."
          },
          {
            "title": "Optional groups",
            "code": "let match = 'ac'.match(/a(z)?(c)?/)\n\nalert( match.length ); // 3\nalert( match[0] ); // ac (whole match)\nalert( match[1] ); // undefined, because there's nothing for (z)?\nalert( match[2] ); // c",
            "explanation": "Example demonstrating optional groups."
          }
        ]
      },
      {
        "heading": "Searching for all matches with groups: matchAll",
        "paragraphs": [
          "When we search for all matches (flag `pattern:g`), the `match` method does not return contents for groups.",
          "For example, let's find all tags in a string:",
          "The result is an array of matches, but without details about each of them. But in practice we usually need contents of capturing groups in the result.",
          "To get them, we should search using the method `str.matchAll(regexp)`.",
          "It was added to JavaScript language long after `match`, as its \"new and improved version\"."
        ],
        "codeExamples": [
          {
            "title": "Searching for all matches with groups: matchAll",
            "code": "The method `matchAll` is not supported in old browsers.\n\nA polyfill may be required, such as <https://github.com/ljharb/String.prototype.matchAll>.",
            "explanation": "Example demonstrating searching for all matches with groups: matchall."
          },
          {
            "title": "Searching for all matches with groups: matchAll",
            "code": "let str = '<h1> <h2>';\n\nlet tags = str.match(/<(.*?)>/g);\n\nalert( tags ); // <h1>,<h2>",
            "explanation": "Example demonstrating searching for all matches with groups: matchall."
          }
        ]
      },
      {
        "heading": "Named groups",
        "paragraphs": [
          "Remembering groups by their numbers is hard. For simple patterns it's doable, but for more complex ones counting parentheses is inconvenient. We have a much better option: give names to parentheses.",
          "That's done by putting `pattern:?` immediately after the opening paren.",
          "For example, let's look for a date in the format \"year-month-day\":",
          "As you can see, the groups reside in the `.groups` property of the match.",
          "To look for all dates, we can add flag `pattern:g`."
        ],
        "codeExamples": [
          {
            "title": "Named groups",
            "code": "*!*\nlet dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;\n*/!*\nlet str = \"2019-04-30\";\n\nlet groups = str.match(dateRegexp).groups;\n\nalert(groups.year); // 2019\nalert(groups.month); // 04\nalert(groups.day); // 30",
            "explanation": "Example demonstrating named groups."
          },
          {
            "title": "Named groups",
            "code": "let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;\n\nlet str = \"2019-10-30 2020-01-01\";\n\nlet results = str.matchAll(dateRegexp);\n\nfor(let result of results) {\n  let {year, month, day} = result.groups;\n\n  alert(`${day}.${month}.${year}`);\n  // first alert: 30.10.2019\n  // second: 01.01.2020\n}",
            "explanation": "Example demonstrating named groups."
          }
        ]
      },
      {
        "heading": "Capturing groups in replacement",
        "paragraphs": [
          "Method `str.replace(regexp, replacement)` that replaces all matches with `regexp` in `str` allows to use parentheses contents in the `replacement` string. That's done using `pattern:$n`, where `pattern:n` is the group number.",
          "For example,",
          "For named parentheses the reference will be `pattern:$`.",
          "For example, let's reformat dates from \"year-month-day\" to \"day.month.year\":"
        ],
        "codeExamples": [
          {
            "title": "Capturing groups in replacement",
            "code": "let str = \"John Bull\";\nlet regexp = /(\\w+) (\\w+)/;\n\nalert( str.replace(regexp, '$2, $1') ); // Bull, John",
            "explanation": "Example demonstrating capturing groups in replacement."
          },
          {
            "title": "Capturing groups in replacement",
            "code": "let regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;\n\nlet str = \"2019-10-30, 2020-01-01\";\n\nalert( str.replace(regexp, '$<day>.$<month>.$<year>') );\n// 30.10.2019, 01.01.2020",
            "explanation": "Example demonstrating capturing groups in replacement."
          }
        ]
      },
      {
        "heading": "Non-capturing groups with ?:",
        "paragraphs": [
          "Sometimes we need parentheses to correctly apply a quantifier, but we don't want their contents in results.",
          "A group may be excluded by adding `pattern:?:` in the beginning.",
          "For instance, if we want to find `pattern:(go)+`, but don't want the parentheses contents (`go`) as a separate array item, we can write: `pattern:(?:go)+`.",
          "In the example below we only get the name `match:John` as a separate member of the match:"
        ],
        "codeExamples": [
          {
            "title": "Non-capturing groups with ?:",
            "code": "let str = \"Gogogo John!\";\n\n*!*\n// ?: excludes 'go' from capturing\nlet regexp = /(?:go)+ (\\w+)/i;\n*/!*\n\nlet result = str.match(regexp);\n\nalert( result[0] ); // Gogogo John (full match)\nalert( result[1] ); // John\nalert( result.length ); // 2 (no more items in the array)",
            "explanation": "Example demonstrating non-capturing groups with ?:."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Parentheses group together a part of the regular expression, so that the quantifier applies to it as a whole.",
          "Parentheses groups are numbered left-to-right, and can optionally be named with `(?...)`.",
          "The content, matched by a group, can be obtained in the results:",
          "If the parentheses have no name, then their contents is available in the match array by its number. Named parentheses are also available in the property `groups`.",
          "We can also use parentheses contents in the replacement string in `str.replace`: by the number `$n` or the name `$`."
        ],
        "bulletPoints": [
          "The method `str.match` returns capturing groups only without flag `pattern:g`.",
          "The method `str.matchAll` always returns capturing groups."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Check MAC-address",
        "description": "MAC-address of a network interface consists of 6 two-digit hex numbers separated by a colon. For instance: `subject:'01:32:54:67:89:AB'`. Write a regexp that checks whether a string is MAC-address. Usage: ```js let regexp = /your regexp/; alert( regexp.test('01:32:54:67:89:AB') ); // true alert( reg",
        "starterCode": "let regexp = /your regexp/;\n\nalert( regexp.test('01:32:54:67:89:AB') ); // true\n\nalert( regexp.test('0132546789AB') ); // false (no colons)\n\nalert( regexp.test('01:32:54:67:89') ); // false (5 numbers, must be 6)\n\nalert( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ at the end)",
        "solution": "let regexp = /your regexp/;\n\nalert( regexp.test('01:32:54:67:89:AB') ); // true\n\nalert( regexp.test('0132546789AB') ); // false (no colons)\n\nalert( regexp.test('01:32:54:67:89') ); // false (5 numbers, must be 6)\n\nalert( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ at the end)",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Find color in the format #abc or #abcdef",
        "description": "Write a RegExp that matches colors in the format `#abc` or `#abcdef`. That is: `#` followed by 3 or 6 hexadecimal digits. Usage example: ```js let regexp = /your regexp/g; let str = \"color: #3f3; background-color: #AA00ef; and: #abcd\"; alert( str.match(regexp) ); // #3f3 #AA00ef ``` P.S. This should",
        "starterCode": "let regexp = /your regexp/g;\n\nlet str = \"color: #3f3; background-color: #AA00ef; and: #abcd\";\n\nalert( str.match(regexp) ); // #3f3 #AA00ef",
        "solution": "There's a minor problem here: the pattern found `match:#abc` in `subject:#abcd`. To prevent that we can add `pattern:\\b` to the end:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Find all numbers",
        "description": "Write a regexp that looks for all decimal numbers including integer ones, with the floating point and negative ones. An example of use: ```js let regexp = /your regexp/g; let str = \"-1.5 0 2 -123.4.\"; alert( str.match(regexp) ); // -1.5, 0, 2, -123.4 ```",
        "starterCode": "let regexp = /your regexp/g;\n\nlet str = \"-1.5 0 2 -123.4.\";\n\nalert( str.match(regexp) ); // -1.5, 0, 2, -123.4",
        "solution": "let regexp = /your regexp/g;\n\nlet str = \"-1.5 0 2 -123.4.\";\n\nalert( str.match(regexp) ); // -1.5, 0, 2, -123.4",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Groups in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp groups.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Groups is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Groups?",
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
      "Regexp Groups is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp groups.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-groups"
    ],
    "slug": "regexp-groups"
  },
  {
    "title": "Regexp Backreferences",
    "description": "We can use the contents of capturing groups `pattern:(...)` not only in the result or in the replacement string, but also in the pattern itself.",
    "difficulty": "advanced",
    "readingTime": 3,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "We can use the contents of capturing groups `pattern:(...)` not only in the result or in the replacement string, but also in the pattern itself."
        ]
      },
      {
        "heading": "Backreference by number: \\N",
        "paragraphs": [
          "A group can be referenced in the pattern using `pattern:\\N`, where `N` is the group number.",
          "To make clear why that's helpful, let's consider a task.",
          "We need to find quoted strings: either single-quoted `subject:'...'` or a double-quoted `subject:\"...\"` -- both variants should match.",
          "How to find them?",
          "We can put both kinds of quotes in the square brackets: `pattern:'\"['\"]`, but it would find strings with mixed quotes, like `match:\"...'` and `match:'...\"`. That would lead to incorrect matches when one quote appears inside other ones, like in the string `subject:\"She's the one!\"`:"
        ],
        "codeExamples": [
          {
            "title": "Backreference by number: \\N",
            "code": "let str = `He said: \"She's the one!\".`;\n\nlet regexp = /['\"](.*?)['\"]/g;\n\n// The result is not what we'd like to have\nalert( str.match(regexp) ); // \"She'",
            "explanation": "Example demonstrating backreference by number: \\n."
          },
          {
            "title": "Backreference by number: \\N",
            "code": "let str = `He said: \"She's the one!\".`;\n\n*!*\nlet regexp = /(['\"])(.*?)\\1/g;\n*/!*\n\nalert( str.match(regexp) ); // \"She's the one!\"",
            "explanation": "Example demonstrating backreference by number: \\n."
          }
        ]
      },
      {
        "heading": "Backreference by name: `\\k`",
        "paragraphs": [
          "If a regexp has many parentheses, it's convenient to give them names.",
          "To reference a named group we can use `pattern:\\k`.",
          "In the example below the group with quotes is named `pattern:?`, so the backreference is `pattern:\\k`:"
        ],
        "codeExamples": [
          {
            "title": "Backreference by name: `\\k`",
            "code": "let str = `He said: \"She's the one!\".`;\n\n*!*\nlet regexp = /(?<quote>['\"])(.*?)\\k<quote>/g;\n*/!*\n\nalert( str.match(regexp) ); // \"She's the one!\"",
            "explanation": "Example demonstrating backreference by name: `\\k`."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Regexp Backreferences",
        "description": "Apply your understanding of Regexp Backreferences. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Regexp Backreferences\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Regexp Backreferences\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Backreferences in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp backreferences.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Backreferences is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Backreferences?",
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
      "Regexp Backreferences is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp backreferences.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-backreferences"
    ],
    "slug": "regexp-backreferences"
  },
  {
    "title": "Regexp Alternation",
    "description": "Alternation is the term in regular expression that is actually a simple \"OR\".",
    "difficulty": "advanced",
    "readingTime": 3,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Alternation is the term in regular expression that is actually a simple \"OR\".",
          "In a regular expression it is denoted with a vertical line character `pattern:|`.",
          "For instance, we need to find programming languages: HTML, PHP, Java or JavaScript.",
          "The corresponding regexp: `pattern:html|php|java(script)?`.",
          "A usage example:"
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let regexp = /html|php|css|java(script)?/gi;\n\nlet str = \"First HTML appeared, then CSS, then JavaScript\";\n\nalert( str.match(regexp) ); // 'HTML', 'CSS', 'JavaScript'",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "`pattern:gr(a|e)y` means exactly the same as `pattern:gr[ae]y`.",
          "`pattern:gra|ey` means `match:gra` or `match:ey`.",
          "`pattern:I love HTML|CSS` matches `match:I love HTML` or `match:CSS`.",
          "`pattern:I love (HTML|CSS)` matches `match:I love HTML` or `match:I love CSS`."
        ]
      },
      {
        "heading": "Example: regexp for time",
        "paragraphs": [
          "In previous articles there was a task to build a regexp for searching time in the form `hh:mm`, for instance `12:00`. But a simple `pattern:\\d\\d:\\d\\d` is too vague. It accepts `25:99` as the time (as 99 minutes match the pattern, but that time is invalid).",
          "How can we make a better pattern?",
          "We can use more careful matching. First, the hours:",
          "We can write both variants in a regexp using alternation: `pattern:[01]\\d|2[0-3]`.",
          "Next, minutes must be from `00` to `59`. In the regular expression language that can be written as `pattern:[0-5]\\d`: the first digit `0-5`, and then any digit."
        ],
        "codeExamples": [
          {
            "title": "Example: regexp for time",
            "code": "[01]\\d  |  2[0-3]:[0-5]\\d",
            "explanation": "Example demonstrating example: regexp for time."
          },
          {
            "title": "Example: regexp for time",
            "code": "let regexp = /([01]\\d|2[0-3]):[0-5]\\d/g;\n\nalert(\"00:00 10:10 23:59 25:99 1:2\".match(regexp)); // 00:00,10:10,23:59",
            "explanation": "Example demonstrating example: regexp for time."
          }
        ],
        "bulletPoints": [
          "If the first digit is `0` or `1`, then the next digit can be any: `pattern:[01]\\d`.",
          "Otherwise, if the first digit is `2`, then the next must be `pattern:[0-3]`.",
          "(no other first digit is allowed)"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Find programming languages",
        "description": "There are many programming languages, for instance Java, JavaScript, PHP, C, C++. Create a regexp that finds them in the string `subject:Java JavaScript PHP C++ C`: ```js let regexp = /your regexp/g; alert(\"Java JavaScript PHP C++ C\".match(regexp)); // Java JavaScript PHP C++ C ```",
        "starterCode": "let regexp = /your regexp/g;\n\nalert(\"Java JavaScript PHP C++ C\".match(regexp)); // Java JavaScript PHP C++ C",
        "solution": "The regular expression engine looks for alternations one-by-one. That is: first it checks if we have  `match:Java`, otherwise -- looks for `match:JavaScript` and so on.\n\nAs a result, `match:JavaScript` can never be found, just because `match:Java` is checked first.\n\nThe same with `match:C` and `match:C++`.\n\nThere are two solutions for that problem:\n\n1. Change the order to check the longer match first: `pattern:JavaScript|Java|C\\+\\+|C|PHP`.\n2. Merge variants with the same start: `pattern:Java(Script)?|C(\\+\\+)?|PHP`.\n\nIn action:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Find bbtag pairs",
        "description": "A \"bb-tag\" looks like `[tag]...[/tag]`, where `tag` is one of: `b`, `url` or `quote`. For instance: ``` [b]text[/b] [url]http://google.com[/url] ``` BB-tags can be nested. But a tag can't be nested into itself, for instance: ``` Normal: [url] [b]http://google.com[/b] [/url] [quote] [b]text[/b] [/quo",
        "starterCode": "[b]text[/b]\n[url]http://google.com[/url]",
        "solution": "[b]text[/b]\n[url]http://google.com[/url]",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Find quoted strings",
        "description": "Create a regexp to find strings in double quotes `subject:\"...\"`. The strings should support escaping, the same way as JavaScript strings do. For instance, quotes can be inserted as `subject:\\\"` a newline as `subject:\\n`, and the backslash itself as `subject:\\\\`. ```js let str = \"Just like \\\"here\\\".",
        "starterCode": "let str = \"Just like \\\"here\\\".\";",
        "solution": "let str = \"Just like \\\"here\\\".\";",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Alternation in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp alternation.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Alternation is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Alternation?",
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
      "Regexp Alternation is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp alternation.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-alternation"
    ],
    "slug": "regexp-alternation"
  },
  {
    "title": "Regexp Lookahead Lookbehind",
    "description": "Sometimes we need to find only those matches for a pattern that are followed or preceded by another pattern.",
    "difficulty": "advanced",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Sometimes we need to find only those matches for a pattern that are followed or preceded by another pattern.",
          "There's a special syntax for that, called \"lookahead\" and \"lookbehind\", together referred to as \"lookaround\".",
          "For the start, let's find the price from the string like `subject:1 turkey costs 30\u20ac`. That is: a number, followed by `subject:\u20ac` sign."
        ]
      },
      {
        "heading": "Lookahead",
        "paragraphs": [
          "The syntax is: `pattern:X(?=Y)`, it means \"look for `pattern:X`, but match only if followed by `pattern:Y`\". There may be any pattern instead of `pattern:X` and `pattern:Y`.",
          "For an integer number followed by `subject:\u20ac`, the regexp will be `pattern:\\d+(?=\u20ac)`:",
          "Please note: the lookahead is merely a test, the contents of the parentheses `pattern:(?=...)` is not included in the result `match:30`.",
          "When we look for `pattern:X(?=Y)`, the regular expression engine finds `pattern:X` and then checks if there's `pattern:Y` immediately after it. If it's not so, then the potential match is skipped, and the search continues.",
          "More complex tests are possible, e.g. `pattern:X(?=Y)(?=Z)` means:"
        ],
        "codeExamples": [
          {
            "title": "Lookahead",
            "code": "let str = \"1 turkey costs 30\u20ac\";\n\nalert( str.match(/\\d+(?=\u20ac)/) ); // 30, the number 1 is ignored, as it's not followed by \u20ac",
            "explanation": "Example demonstrating lookahead."
          },
          {
            "title": "Lookahead",
            "code": "let str = \"1 turkey costs 30\u20ac\";\n\nalert( str.match(/\\d+(?=\\s)(?=.*30)/) ); // 1",
            "explanation": "Example demonstrating lookahead."
          }
        ]
      },
      {
        "heading": "Negative lookahead",
        "paragraphs": [
          "Let's say that we want a quantity instead, not a price from the same string. That's a number `pattern:\\d+`, NOT followed by `subject:\u20ac`.",
          "For that, a negative lookahead can be applied.",
          "The syntax is: `pattern:X(?!Y)`, it means \"search `pattern:X`, but only if not followed by `pattern:Y`\"."
        ],
        "codeExamples": [
          {
            "title": "Negative lookahead",
            "code": "let str = \"2 turkeys cost 60\u20ac\";\n\nalert( str.match(/\\d+\\b(?!\u20ac)/g) ); // 2 (the price is not matched)",
            "explanation": "Example demonstrating negative lookahead."
          }
        ]
      },
      {
        "heading": "Lookbehind",
        "paragraphs": [
          "Lookahead allows to add a condition for \"what follows\".",
          "Lookbehind is similar, but it looks behind. That is, it allows to match a pattern only if there's something before it.",
          "The syntax is:",
          "For example, let's change the price to US dollars. The dollar sign is usually before the number, so to look for `$30` we'll use `pattern:(?<=\\$)\\d+` -- an amount preceded by `subject:$`:",
          "And, if we need the quantity -- a number, not preceded by `subject:$`, then we can use a negative lookbehind `pattern:(?<!\\$)\\d+`:"
        ],
        "codeExamples": [
          {
            "title": "Lookbehind",
            "code": "Please Note: Lookbehind is not supported in non-V8 browsers, such as Safari, Internet Explorer.",
            "explanation": "Example demonstrating lookbehind."
          },
          {
            "title": "Lookbehind",
            "code": "let str = \"1 turkey costs $30\";\n\n// the dollar sign is escaped \\$\nalert( str.match(/(?<=\\$)\\d+/) ); // 30 (skipped the sole number)",
            "explanation": "Example demonstrating lookbehind."
          }
        ],
        "bulletPoints": [
          "Positive lookbehind: `pattern:(?<=Y)X`, matches `pattern:X`, but only if there's `pattern:Y` before it.",
          "Negative lookbehind: `pattern:(?<!Y)X`, matches `pattern:X`, but only if there's no `pattern:Y` before it."
        ]
      },
      {
        "heading": "Capturing groups",
        "paragraphs": [
          "Generally, the contents inside lookaround parentheses does not become a part of the result.",
          "E.g. in the pattern `pattern:\\d+(?=\u20ac)`, the `pattern:\u20ac` sign doesn't get captured as a part of the match. That's natural: we look for a number `pattern:\\d+`, while `pattern:(?=\u20ac)` is just a test that it should be followed by `subject:\u20ac`.",
          "But in some situations we might want to capture the lookaround expression as well, or a part of it. That's possible. Just wrap that part into additional parentheses.",
          "In the example below the currency sign `pattern:(\u20ac|kr)` is captured, along with the amount:",
          "And here's the same for lookbehind:"
        ],
        "codeExamples": [
          {
            "title": "Capturing groups",
            "code": "let str = \"1 turkey costs 30\u20ac\";\nlet regexp = /\\d+(?=(\u20ac|kr))/; // extra parentheses around \u20ac|kr\n\nalert( str.match(regexp) ); // 30, \u20ac",
            "explanation": "Example demonstrating capturing groups."
          },
          {
            "title": "Capturing groups",
            "code": "let str = \"1 turkey costs $30\";\nlet regexp = /(?<=(\\$|\u00a3))\\d+/;\n\nalert( str.match(regexp) ); // 30, $",
            "explanation": "Example demonstrating capturing groups."
          }
        ]
      },
      {
        "heading": "Summary",
        "paragraphs": [
          "Lookahead and lookbehind (commonly referred to as \"lookaround\") are useful when we'd like to match something depending on the context before/after it.",
          "For simple regexps we can do the similar thing manually. That is: match everything, in any context, and then filter by context in the loop.",
          "Remember, `str.match` (without flag `pattern:g`) and `str.matchAll` (always) return matches as arrays with `index` property, so we know where exactly in the text it is, and can check the context.",
          "But generally lookaround is more convenient.",
          "Lookaround types:"
        ]
      }
    ],
    "exercises": [
      {
        "title": "Find non-negative integers",
        "description": "There's a string of integer numbers. Create a regexp that looks for only non-negative ones (zero is allowed). An example of use: ```js let regexp = /your regexp/g; let str = \"0 12 -5 123 -18\"; alert( str.match(regexp) ); // 0, 12, 123 ```",
        "starterCode": "let regexp = /your regexp/g;\n\nlet str = \"0 12 -5 123 -18\";\n\nalert( str.match(regexp) ); // 0, 12, 123",
        "solution": "As you can see, it matches `match:8`, from `subject:-18`. To exclude it, we need to ensure that the regexp starts matching a number not from the middle of another (non-matching) number.\n\nWe can do it by specifying another negative lookbehind: `pattern:(?<!-)(?<!\\d)\\d+`. Now `pattern:(?<!\\d)` ensures that a match does not start after another digit, just what we need.\n\nWe can also join them into a single lookbehind here:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      },
      {
        "title": "Insert After Head",
        "description": "We have a string with an HTML Document. Write a regular expression that inserts `Hello` immediately after `` tag. The tag may have attributes. For instance: ```js let regexp = /your regular expression/; let str = ` ... `; str = str.replace(regexp, `Hello`); ``` After that the value of `str` should b",
        "starterCode": "let regexp = /your regular expression/;\n\nlet str = `\n<html>\n  <body style=\"height: 200px\">\n  ...\n  </body>\n</html>\n`;\n\nstr = str.replace(regexp, `<h1>Hello</h1>`);",
        "solution": "In the replacement string `$&` means the match itself, that is, the part of the source text that corresponds to `pattern:<body.*?>`. It gets replaced by itself plus `<h1>Hello</h1>`.\n\nAn alternative is to use lookbehind:",
        "hints": [
          "Break the problem down into smaller operations."
        ],
        "difficulty": "intermediate"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Lookahead Lookbehind in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp lookahead lookbehind.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Lookahead Lookbehind is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Lookahead Lookbehind?",
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
      "Regexp Lookahead Lookbehind is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp lookahead lookbehind.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-lookahead-lookbehind"
    ],
    "slug": "regexp-lookahead-lookbehind"
  },
  {
    "title": "Regexp Catastrophic Backtracking",
    "description": "Some regular expressions are looking simple, but can execute a veeeeeery long time, and even \"hang\" the JavaScript engine.",
    "difficulty": "advanced",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "Some regular expressions are looking simple, but can execute a veeeeeery long time, and even \"hang\" the JavaScript engine.",
          "Sooner or later most developers occasionally face such behavior. The typical symptom -- a regular expression works fine sometimes, but for certain strings it \"hangs\", consuming 100% of CPU.",
          "In such case a web-browser suggests to kill the script and reload the page. Not a good thing for sure.",
          "For server-side JavaScript such a regexp may hang the server process, that's even worse. So we definitely should take a look at it."
        ]
      },
      {
        "heading": "Example",
        "paragraphs": [
          "Let's say we have a string, and we'd like to check if it consists of words `pattern:\\w+` with an optional space `pattern:\\s?` after each.",
          "An obvious way to construct a regexp would be to take a word followed by an optional space `pattern:\\w+\\s?` and then repeat it with `*`.",
          "That leads us to the regexp `pattern:^(\\w+\\s?)*$`, it specifies zero or more such words, that start at the beginning `pattern:^` and finish at the end `pattern:$` of the line.",
          "In action:",
          "The regexp seems to work. The result is correct. Although, on certain strings it takes a lot of time. So long that JavaScript engine \"hangs\" with 100% CPU consumption."
        ],
        "codeExamples": [
          {
            "title": "Example",
            "code": "let regexp = /^(\\w+\\s?)*$/;\n\nalert( regexp.test(\"A good string\") ); // true\nalert( regexp.test(\"Bad characters: $@#\") ); // false",
            "explanation": "Example demonstrating example."
          },
          {
            "title": "Example",
            "code": "let regexp = /^(\\w+\\s?)*$/;\nlet str = \"An input string that takes a long time or even makes this regexp hang!\";\n\n// will take a very long time\nalert( regexp.test(str) );",
            "explanation": "Example demonstrating example."
          }
        ]
      },
      {
        "heading": "Simplified example",
        "paragraphs": [
          "What's the matter? Why does the regular expression hang?",
          "To understand that, let's simplify the example: remove spaces `pattern:\\s?`. Then it becomes `pattern:^(\\w+)*$`.",
          "And, to make things more obvious, let's replace `pattern:\\w` with `pattern:\\d`. The resulting regular expression still hangs, for instance:",
          "So what's wrong with the regexp?",
          "First, one may notice that the regexp `pattern:(\\d+)*` is a little bit strange. The quantifier `pattern:*` looks extraneous. If we want a number, we can use `pattern:\\d+`."
        ],
        "codeExamples": [
          {
            "title": "Simplified example",
            "code": "let regexp = /^(\\d+)*$/;\n\nlet str = \"012345678901234567890123456789z\";\n\n// will take a very long time (careful!)\nalert( regexp.test(str) );",
            "explanation": "Example demonstrating simplified example."
          }
        ],
        "bulletPoints": [
          "For `123456789` we have `n=9`, that gives 511 combinations.",
          "For a longer sequence with `n=20` there are about one million (1048575) combinations.",
          "For `n=30` - a thousand times more (1073741823 combinations)."
        ]
      },
      {
        "heading": "Back to words and strings",
        "paragraphs": [
          "The similar thing happens in our first example, when we look for words by pattern `pattern:^(\\w+\\s?)*$` in the string `subject:An input that hangs!`.",
          "The reason is that a word can be represented as one `pattern:\\w+` or many:",
          "For a human, it's obvious that there may be no match, because the string ends with an exclamation sign `!`, but the regular expression expects a wordly character `pattern:\\w` or a space `pattern:\\s` at the end. But the engine doesn't know that.",
          "It tries all combinations of how the regexp `pattern:(\\w+\\s?)*` can \"consume\" the string, including variants with spaces `pattern:(\\w+\\s)*` and without them `pattern:(\\w+)*` (because spaces `pattern:\\s?` are optional). As there are many such combinations (we've seen it with digits), the search takes a lot of time.",
          "What to do?"
        ],
        "codeExamples": [
          {
            "title": "Back to words and strings",
            "code": "(input)\n(inpu)(t)\n(inp)(u)(t)\n(in)(p)(ut)\n...",
            "explanation": "Example demonstrating back to words and strings."
          }
        ]
      },
      {
        "heading": "How to fix?",
        "paragraphs": [
          "There are two main approaches to fixing the problem.",
          "The first is to lower the number of possible combinations.",
          "Let's make the space non-optional by rewriting the regular expression as `pattern:^(\\w+\\s)*\\w*$` - we'll look for any number of words followed by a space `pattern:(\\w+\\s)*`, and then (optionally) a final word `pattern:\\w*`.",
          "This regexp is equivalent to the previous one (matches the same) and works well:",
          "Why did the problem disappear?"
        ],
        "codeExamples": [
          {
            "title": "How to fix?",
            "code": "let regexp = /^(\\w+\\s)*\\w*$/;\nlet str = \"An input string that takes a long time or even makes this regex hang!\";\n\nalert( regexp.test(str) ); // false",
            "explanation": "Example demonstrating how to fix?."
          },
          {
            "title": "How to fix?",
            "code": "\\w+  \\w+\n(inp)(ut)",
            "explanation": "Example demonstrating how to fix?."
          }
        ]
      },
      {
        "heading": "Preventing backtracking",
        "paragraphs": [
          "It's not always convenient to rewrite a regexp though. In the example above it was easy, but it's not always obvious how to do it.",
          "Besides, a rewritten regexp is usually more complex, and that's not good. Regexps are complex enough without extra efforts.",
          "Luckily, there's an alternative approach. We can forbid backtracking for the quantifier.",
          "The root of the problem is that the regexp engine tries many combinations that are obviously wrong for a human.",
          "E.g. in the regexp `pattern:(\\d+)*$` it's obvious for a human, that `pattern:+` shouldn't backtrack. If we replace one `pattern:\\d+` with two separate `pattern:\\d+\\d+`, nothing changes:"
        ],
        "codeExamples": [
          {
            "title": "Preventing backtracking",
            "code": "\\d+........\n(123456789)!\n\n\\d+...\\d+....\n(1234)(56789)!",
            "explanation": "Example demonstrating preventing backtracking."
          }
        ]
      },
      {
        "heading": "Lookahead to the rescue!",
        "paragraphs": [
          "So we've come to real advanced topics. We'd like a quantifier, such as `pattern:+` not to backtrack, because sometimes backtracking makes no sense.",
          "The pattern to take as many repetitions of `pattern:\\w` as possible without backtracking is: `pattern:(?=(\\w+))\\1`. Of course, we could take another pattern instead of `pattern:\\w`.",
          "That may seem odd, but it's actually a very simple transform.",
          "Let's decipher it:",
          "That is: we look ahead - and if there's a word `pattern:\\w+`, then match it as `pattern:\\1`."
        ],
        "codeExamples": [
          {
            "title": "Lookahead to the rescue!",
            "code": "alert( \"JavaScript\".match(/\\w+Script/)); // JavaScript\nalert( \"JavaScript\".match(/(?=(\\w+))\\1Script/)); // null",
            "explanation": "Example demonstrating lookahead to the rescue!."
          },
          {
            "title": "Lookahead to the rescue!",
            "code": "There's more about the relation between possessive quantifiers and lookahead in articles [Regex: Emulate Atomic Grouping (and Possessive Quantifiers) with LookAhead](https://instanceof.me/post/52245507631/regex-emulate-atomic-grouping-with-lookahead) and [Mimicking Atomic Groups](https://blog.stevenlevithan.com/archives/mimic-atomic-groups).",
            "explanation": "Example demonstrating lookahead to the rescue!."
          }
        ],
        "bulletPoints": [
          "Lookahead `pattern:?=` looks forward for the longest word `pattern:\\w+` starting at the current position.",
          "The contents of parentheses with `pattern:?=...` isn't memorized by the engine, so wrap `pattern:\\w+` into parentheses. Then the engine will memorize their contents",
          "...And allow us to reference it in the pattern as `pattern:\\1`.",
          "Rewrite the regexp to lower the possible combinations count.",
          "Prevent backtracking."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Regexp Catastrophic Backtracking",
        "description": "Apply your understanding of Regexp Catastrophic Backtracking. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Regexp Catastrophic Backtracking\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Regexp Catastrophic Backtracking\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Catastrophic Backtracking in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp catastrophic backtracking.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Catastrophic Backtracking is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Catastrophic Backtracking?",
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
      "Regexp Catastrophic Backtracking is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp catastrophic backtracking.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-catastrophic-backtracking"
    ],
    "slug": "regexp-catastrophic-backtracking"
  },
  {
    "title": "Regexp Sticky",
    "description": "The flag `pattern:y` allows to perform the search at the given position in the source string.",
    "difficulty": "advanced",
    "readingTime": 6,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "The flag `pattern:y` allows to perform the search at the given position in the source string.",
          "To grasp the use case of `pattern:y` flag, and better understand the ways of regexps, let's explore a practical example.",
          "One of common tasks for regexps is \"lexical analysis\": we get a text, e.g. in a programming language, and need to find its structural elements. For instance, HTML has tags and attributes, JavaScript code has functions, variables, and so on.",
          "Writing lexical analyzers is a special area, with its own tools and algorithms, so we don't go deep in there, but there's a common task: to read something at the given position.",
          "E.g. we have a code string `subject:let varName = \"value\"`, and we need to read the variable name from it, that starts at position `4`."
        ],
        "codeExamples": [
          {
            "title": "Overview",
            "code": "let str = 'let varName'; // Let's find all words in this string\nlet regexp = /\\w+/g;\n\nalert(regexp.lastIndex); // 0 (initially lastIndex=0)\n\nlet word1 = regexp.exec(str);\nalert(word1[0]); // let (1st word)\nalert(regexp.lastIndex); // 3 (position after the match)\n\nlet word2 = regexp.exec(str);\nalert(word2[0]); // varName (2nd word)\nalert(regexp.lastIndex); // 11 (position after the match)\n\nlet word3 = regexp.exec(str);\nalert(word3); // null (no more matches)\nalert(regexp.lastIndex); // 0 (resets at search end)",
            "explanation": "Example demonstrating overview."
          },
          {
            "title": "Overview",
            "code": "let str = 'let varName';\nlet regexp = /\\w+/g;\n\nlet result;\n\nwhile (result = regexp.exec(str)) {\n  alert( `Found ${result[0]} at position ${result.index}` );\n  // Found let at position 0, then\n  // Found varName at position 4\n}",
            "explanation": "Example demonstrating overview."
          }
        ],
        "bulletPoints": [
          "A call to `str.match(/\\w+/)` will find only the first word in the line (`let`). That's not it.",
          "We can add the flag `pattern:g`. But then the call `str.match(/\\w+/g)` will look for all words in the text, while we need one word at position `4`. Again, not what we need."
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Regexp Sticky",
        "description": "Apply your understanding of Regexp Sticky. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Regexp Sticky\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Regexp Sticky\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Sticky in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp sticky.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Sticky is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Sticky?",
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
      "Regexp Sticky is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp sticky.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-sticky"
    ],
    "slug": "regexp-sticky"
  },
  {
    "title": "Regexp Methods",
    "description": "In this article we'll cover various methods that work with regexps in-depth.",
    "difficulty": "advanced",
    "readingTime": 10,
    "sections": [
      {
        "heading": "Overview",
        "paragraphs": [
          "In this article we'll cover various methods that work with regexps in-depth."
        ]
      },
      {
        "heading": "str.match(regexp)",
        "paragraphs": [
          "The method `str.match(regexp)` finds matches for `regexp` in the string `str`.",
          "It has 3 modes:",
          "1. If the `regexp` doesn't have flag `pattern:g`, then it returns the first match as an array with capturing groups and properties `index` (position of the match), `input` (input string, equals `str`):",
          "let str = \"I love JavaScript\";",
          "let result = str.match(/Java(Script)/);"
        ]
      },
      {
        "heading": "str.matchAll(regexp)",
        "paragraphs": [
          "[recent browser=\"new\"]",
          "The method `str.matchAll(regexp)` is a \"newer, improved\" variant of `str.match`.",
          "It's used mainly to search for all matches with all groups.",
          "There are 3 differences from `match`:",
          "1. It returns an iterable object with matches instead of an array. We can make a regular array from it using `Array.from`."
        ],
        "codeExamples": [
          {
            "title": "str.matchAll(regexp)",
            "code": "let str = '<h1>Hello, world!</h1>';\nlet regexp = /<(.*?)>/g;\n\nlet matchAll = str.matchAll(regexp);\n\nalert(matchAll); // [object RegExp String Iterator], not array, but an iterable\n\nmatchAll = Array.from(matchAll); // array now\n\nlet firstMatch = matchAll[0];\nalert( firstMatch[0] );  // <h1>\nalert( firstMatch[1] );  // h1\nalert( firstMatch.index );  // 0\nalert( firstMatch.input );  // <h1>Hello, world!</h1>",
            "explanation": "Example demonstrating str.matchall(regexp)."
          }
        ]
      },
      {
        "heading": "str.split(regexp|substr, limit)",
        "paragraphs": [
          "Splits the string using the regexp (or a substring) as a delimiter.",
          "We can use `split` with strings, like this:",
          "But we can split by a regular expression, the same way:"
        ],
        "codeExamples": [
          {
            "title": "str.split(regexp|substr, limit)",
            "code": "alert('12-34-56'.split('-')) // array of ['12', '34', '56']",
            "explanation": "Example demonstrating str.split(regexp|substr, limit)."
          },
          {
            "title": "str.split(regexp|substr, limit)",
            "code": "alert('12, 34, 56'.split(/,\\s*/)) // array of ['12', '34', '56']",
            "explanation": "Example demonstrating str.split(regexp|substr, limit)."
          }
        ]
      },
      {
        "heading": "str.search(regexp)",
        "paragraphs": [
          "The method `str.search(regexp)` returns the position of the first match or `-1` if none found:",
          "**The important limitation: `search` only finds the first match.**",
          "If we need positions of further matches, we should use other means, such as finding them all with `str.matchAll(regexp)`."
        ],
        "codeExamples": [
          {
            "title": "str.search(regexp)",
            "code": "let str = \"A drop of ink may make a million think\";\n\nalert( str.search( /ink/i ) ); // 10 (first match position)",
            "explanation": "Example demonstrating str.search(regexp)."
          }
        ]
      },
      {
        "heading": "str.replace(str|regexp, str|func)",
        "paragraphs": [
          "This is a generic method for searching and replacing, one of most useful ones. The swiss army knife for searching and replacing.",
          "We can use it without regexps, to search and replace a substring:",
          "There's a pitfall though.",
          "**When the first argument of `replace` is a string, it only replaces the first match.**",
          "You can see that in the example above: only the first `\"-\"` is replaced by `\":\"`."
        ],
        "codeExamples": [
          {
            "title": "str.replace(str|regexp, str|func)",
            "code": "// replace a dash by a colon\nalert('12-34-56'.replace(\"-\", \":\")) // 12:34-56",
            "explanation": "Example demonstrating str.replace(str|regexp, str|func)."
          },
          {
            "title": "str.replace(str|regexp, str|func)",
            "code": "// replace all dashes by a colon\nalert( '12-34-56'.replace( *!*/-/g*/!*, \":\" ) )  // 12:34:56",
            "explanation": "Example demonstrating str.replace(str|regexp, str|func)."
          }
        ]
      },
      {
        "heading": "str.replaceAll(str|regexp, str|func)",
        "paragraphs": [
          "This method is essentially the same as `str.replace`, with two major differences:",
          "1. If the first argument is a string, it replaces *all occurrences* of the string, while `replace` replaces only the *first occurrence*.",
          "2. If the first argument is a regular expression without the `g` flag, there'll be an error. With `g` flag, it works the same as `replace`.",
          "The main use case for `replaceAll` is replacing all occurrences of a string.",
          "Like this:"
        ],
        "codeExamples": [
          {
            "title": "str.replaceAll(str|regexp, str|func)",
            "code": "// replace all dashes by a colon\nalert('12-34-56'.replaceAll(\"-\", \":\")) // 12:34:56",
            "explanation": "Example demonstrating str.replaceall(str|regexp, str|func)."
          }
        ]
      },
      {
        "heading": "regexp.exec(str)",
        "paragraphs": [
          "The `regexp.exec(str)` method returns a match for `regexp` in the string `str`. Unlike previous methods, it's called on a regexp, not on a string.",
          "It behaves differently depending on whether the regexp has flag `pattern:g`.",
          "If there's no `pattern:g`, then `regexp.exec(str)` returns the first match exactly as `str.match(regexp)`. This behavior doesn't bring anything new.",
          "But if there's flag `pattern:g`, then:",
          "So, repeated calls return all matches one after another, using property `regexp.lastIndex` to keep track of the current search position."
        ],
        "codeExamples": [
          {
            "title": "regexp.exec(str)",
            "code": "let str = 'More about JavaScript at https://javascript.info';\nlet regexp = /javascript/ig;\n\nlet result;\n\nwhile (result = regexp.exec(str)) {\n  alert( `Found ${result[0]} at position ${result.index}` );\n  // Found JavaScript at position 11, then\n  // Found javascript at position 33\n}",
            "explanation": "Example demonstrating regexp.exec(str)."
          },
          {
            "title": "regexp.exec(str)",
            "code": "let str = 'Hello, world!';\n\nlet regexp = /\\w+/g; // without flag \"g\", lastIndex property is ignored\nregexp.lastIndex = 5; // search from 5th position (from the comma)\n\nalert( regexp.exec(str) ); // world",
            "explanation": "Example demonstrating regexp.exec(str)."
          }
        ],
        "bulletPoints": [
          "A call to `regexp.exec(str)` returns the first match and saves the position immediately after it in the property `regexp.lastIndex`.",
          "The next such call starts the search from position `regexp.lastIndex`, returns the next match and saves the position after it in `regexp.lastIndex`.",
          "...And so on.",
          "If there are no matches, `regexp.exec` returns `null` and resets `regexp.lastIndex` to `0`."
        ]
      },
      {
        "heading": "regexp.test(str)",
        "paragraphs": [
          "The method `regexp.test(str)` looks for a match and returns `true/false` whether it exists.",
          "For instance:",
          "An example with the negative answer:",
          "If the regexp has flag `pattern:g`, then `regexp.test` looks from `regexp.lastIndex` property and updates this property, just like `regexp.exec`.",
          "So we can use it to search from a given position:"
        ],
        "codeExamples": [
          {
            "title": "regexp.test(str)",
            "code": "let str = \"I love JavaScript\";\n\n// these two tests do the same\nalert( *!*/love/i*/!*.test(str) ); // true\nalert( str.search(*!*/love/i*/!*) != -1 ); // true",
            "explanation": "Example demonstrating regexp.test(str)."
          },
          {
            "title": "regexp.test(str)",
            "code": "let str = \"Bla-bla-bla\";\n\nalert( *!*/love/i*/!*.test(str) ); // false\nalert( str.search(*!*/love/i*/!*) != -1 ); // false",
            "explanation": "Example demonstrating regexp.test(str)."
          }
        ]
      }
    ],
    "exercises": [
      {
        "title": "Practice: Regexp Methods",
        "description": "Apply your understanding of Regexp Methods. Write code demonstrating the core concepts learned in this lesson.",
        "starterCode": "// Practice: Regexp Methods\nfunction solution() {\n  // Write your code here\n  return true;\n}\n\nconsole.log(solution());",
        "solution": "// Solution: Regexp Methods\nfunction solution() {\n  return true;\n}\n\nconsole.log(solution());",
        "hints": [
          "Review the code examples in the Overview section above."
        ],
        "difficulty": "beginner"
      }
    ],
    "quiz": [
      {
        "question": "What is the primary role of Regexp Methods in JavaScript?",
        "options": [
          "It provides standard behavior and patterns for regexp methods.",
          "It disables strict mode across the script.",
          "It is a legacy feature that should never be used in modern JavaScript.",
          "It converts all variables into global scope automatically."
        ],
        "correctIndex": 0,
        "explanation": "Regexp Methods is an essential concept in modern JavaScript designed to write clean, predictable code."
      },
      {
        "question": "Which of the following is a recommended practice when working with Regexp Methods?",
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
      "Regexp Methods is a core building block of modern JavaScript applications.",
      "Always adhere to clean code conventions and modern ES standards when applying regexp methods.",
      "Be mindful of browser compatibility and execution environments."
    ],
    "tags": [
      "javascript",
      "web-development",
      "regexp-methods"
    ],
    "slug": "regexp-methods"
  }
];
