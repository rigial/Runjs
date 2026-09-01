"""
Part 7: Browser: Events & Forms (21 lessons)
All content completely rewritten from scratch in simple, beginner-friendly English with original runnable examples.
"""

from .helpers import make_lesson, make_section, make_code_example, make_exercise, make_quiz

def get_part7_lessons():
    lessons = []

    # 1. introduction-browser-events
    lessons.append(make_lesson(
        slug="introduction-browser-events",
        title="Introduction to Browser Events",
        description="React to user actions: addEventListener, removing listeners, the Event object, and event handlers.",
        difficulty="beginner",
        reading_time=6,
        sections=[
            make_section(
                heading="Event Listeners and Handlers",
                paragraphs=[
                    "An event is a signal that something has occurred in the browser (like a mouse click, keypress, or page load).",
                    "The modern, universal way to react to events is using addEventListener(event, handler, [options]). This allows attaching multiple independent handlers to the same element."
                ],
                code_examples=[
                    make_code_example(
                        title="addEventListener in Action",
                        code="const button = document.createElement('button');\nbutton.textContent = 'Click me';\n\nfunction handleClick(event) {\n  console.log('Button clicked!');\n  console.log('Event type:', event.type);\n  console.log('Target element:', event.target.tagName);\n}\n\nbutton.addEventListener('click', handleClick);\n// button.removeEventListener('click', handleClick);",
                        explanation="The handler receives an Event object detailing coordinates, target element, and modifier keys.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Attach a Click Handler",
                description="Create a button, attach a click listener that logs 'Clicked', and trigger with button.click().",
                starter_code="const btn = document.createElement('button');\nbtn.addEventListener('click', () => console.log('Clicked'));\nbtn.click();",
                solution="const btn = document.createElement('button');\nbtn.addEventListener('click', () => console.log('Clicked'));\nbtn.click();",
                hints=["Use btn.addEventListener('click', handler) and btn.click()."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why is addEventListener preferred over assigning to onclick (e.g. elem.onclick = handler)?",
                options=[
                    "Because addEventListener allows adding multiple handlers to the same event without overwriting existing ones",
                    "Because onclick is not supported on mobile devices",
                    "Because addEventListener is synchronous and blocks the UI",
                    "Because onclick was deprecated in HTML4"
                ],
                correct_index=0,
                explanation="addEventListener supports multiple listeners on the same element and options like once, capture, and passive."
            )
        ],
        key_takeaways=[
            "Use addEventListener() to attach event handlers.",
            "Use removeEventListener() with the exact same function reference to clean up listeners.",
            "The Event object contains details about the triggered event."
        ],
        tags=["events", "event-listeners", "click", "dom"]
    ))

    # 2. bubbling-and-capturing
    lessons.append(make_lesson(
        slug="bubbling-and-capturing",
        title="Event Bubbling and Capturing",
        description="Understand the 3 phases of event propagation: capturing phase down the DOM, target phase, and bubbling up to window.",
        difficulty="intermediate",
        reading_time=6,
        sections=[
            make_section(
                heading="The 3 Phases of Event Propagation",
                paragraphs=[
                    "When an event occurs on an element, it passes through 3 distinct phases:",
                    "1. Capturing Phase: The event travels DOWN from window through ancestors to the target.",
                    "2. Target Phase: The event reaches the target element.",
                    "3. Bubbling Phase: The event bubbles UP from the target element back through ancestors to window.",
                    "By default, handlers assigned with addEventListener listen during the bubbling phase."
                ],
                code_examples=[
                    make_code_example(
                        title="Stopping Propagation",
                        code="const parent = document.createElement('div');\nconst child = document.createElement('button');\nparent.appendChild(child);\n\nparent.addEventListener('click', () => {\n  console.log('Parent caught bubbling click');\n});\n\nchild.addEventListener('click', (event) => {\n  console.log('Child clicked');\n  // event.stopPropagation(); // Prevents bubbling to parent!\n});",
                        explanation="stopPropagation() halts bubbling, preventing parent handlers from firing.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Test Event Bubbling",
                description="Simulate child clicking bubbling to parent by adding listeners and calling child.click().",
                starter_code="const parent = document.createElement('div');\nconst child = document.createElement('button');\nparent.appendChild(child);\n\nparent.addEventListener('click', () => console.log('Parent handled'));\nchild.click();",
                solution="const parent = document.createElement('div');\nconst child = document.createElement('button');\nparent.appendChild(child);\nparent.addEventListener('click', () => console.log('Parent handled'));\nchild.click();",
                hints=["Events bubble up from child to parent by default."]
            )
        ],
        quiz=[
            make_quiz(
                question="What method stops an event from bubbling further up the DOM tree?",
                options=[
                    "event.stopPropagation()",
                    "event.preventDefault()",
                    "event.stopImmediate()",
                    "event.cancel()"
                ],
                correct_index=0,
                explanation="event.stopPropagation() prevents the event from bubbling up to ancestor handlers."
            )
        ],
        key_takeaways=[
            "Events bubble upwards by default from child to parents.",
            "event.target is the element that originated the event.",
            "event.currentTarget (or 'this') is the element handling the event."
        ],
        tags=["events", "bubbling", "capturing", "propagation", "stoppropagation"]
    ))

    # 3. event-delegation
    lessons.append(make_lesson(
        slug="event-delegation",
        title="Event Delegation: High-Performance Handling",
        description="Leverage bubbling to manage hundreds of child elements with a single parent handler using event.target.closest().",
        difficulty="intermediate",
        reading_time=6,
        sections=[
            make_section(
                heading="What is Event Delegation?",
                paragraphs=[
                    "If you have a table with 1,000 rows or a list with dozens of buttons, attaching a separate listener to each element consumes unnecessary memory and complicates adding dynamic items.",
                    "Event Delegation places a SINGLE handler on the parent container. Thanks to bubbling, clicks on any child bubble up to the parent, where event.target is inspected."
                ],
                code_examples=[
                    make_code_example(
                        title="Event Delegation with closest()",
                        code="const menu = document.createElement('div');\nmenu.innerHTML = `\n  <button data-action=\"save\">Save</button>\n  <button data-action=\"load\">Load</button>\n  <button data-action=\"delete\">Delete</button>\n`;\n\nmenu.addEventListener('click', (event) => {\n  const button = event.target.closest('button[data-action]');\n  if (!button) return;\n  \n  const action = button.dataset.action;\n  console.log(`Performing action: ${action}`);\n});",
                        explanation="A single listener cleanly manages all buttons, including any added dynamically later.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Delegate Action from Container",
                description="Set up a container listener that reads dataset.action from clicked buttons.",
                starter_code="const container = document.createElement('div');\ncontainer.innerHTML = '<button data-action=\"run\">Run</button>';\ncontainer.addEventListener('click', (e) => {\n  const btn = e.target.closest('button');\n  if (btn) console.log(btn.dataset.action);\n});\ncontainer.firstElementChild.click();",
                solution="const container = document.createElement('div');\ncontainer.innerHTML = '<button data-action=\"run\">Run</button>';\ncontainer.addEventListener('click', (e) => {\n  const btn = e.target.closest('button');\n  if (btn) console.log(btn.dataset.action);\n});\ncontainer.firstElementChild.click();",
                hints=["Use e.target.closest('button')."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the primary performance benefit of Event Delegation?",
                options=[
                    "Attaching a single parent handler saves memory and automatically handles dynamically added child elements",
                    "It converts JavaScript to WebAssembly",
                    "It prevents garbage collection",
                    "It enables multithreading"
                ],
                correct_index=0,
                explanation="Event delegation minimizes memory overhead and eliminates the need to attach/detach listeners when DOM items change."
            )
        ],
        key_takeaways=[
            "Attach a single handler to a common ancestor instead of each child.",
            "Use event.target.closest(selector) to match intended target elements.",
            "Works automatically for dynamically added elements."
        ],
        tags=["event-delegation", "performance", "events", "patterns"]
    ))

    # 4. default-browser-action
    lessons.append(make_lesson(
        slug="default-browser-action",
        title="Browser Default Actions & preventDefault()",
        description="Override default browser behaviors like link navigation, form submissions, and context menus using event.preventDefault().",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Preventing Default Behaviors",
                paragraphs=[
                    "Many events trigger built-in browser actions: clicking an <a> link navigates to a URL, clicking a submit button reloads the page, and right-clicking opens a context menu.",
                    "Calling event.preventDefault() cancels the default browser behavior, allowing your custom JavaScript to handle the action instead."
                ],
                code_examples=[
                    make_code_example(
                        title="Preventing Form Submit Page Reload",
                        code="const form = document.createElement('form');\n\nform.addEventListener('submit', (event) => {\n  // Stop full page reload:\n  event.preventDefault();\n  \n  console.log('Handling form submission via AJAX / Fetch!');\n});",
                        explanation="preventDefault() prevents page navigation, essential for Single Page Applications (SPAs).",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Cancel Link Navigation",
                description="Create an <a> link, attach a click listener calling event.preventDefault(), and log 'Navigation prevented'.",
                starter_code="const link = document.createElement('a');\nlink.href = 'https://google.com';\nlink.addEventListener('click', (e) => {\n  e.preventDefault();\n  console.log('Navigation prevented');\n});\nlink.click();",
                solution="const link = document.createElement('a');\nlink.href = 'https://google.com';\nlink.addEventListener('click', (e) => {\n  e.preventDefault();\n  console.log('Navigation prevented');\n});\nlink.click();",
                hints=["Call e.preventDefault() in the click handler."]
            )
        ],
        quiz=[
            make_quiz(
                question="What does event.preventDefault() do on a form 'submit' event?",
                options=[
                    "It stops the browser from submitting the form and reloading the page",
                    "It deletes all input fields",
                    "It stops event bubbling to parent elements",
                    "It throws an exception"
                ],
                correct_index=0,
                explanation="preventDefault() cancels the browser's default submit behavior (page reload/navigation)."
            )
        ],
        key_takeaways=[
            "Use event.preventDefault() to cancel native browser actions.",
            "preventDefault() does not stop bubbling (use stopPropagation for that).",
            "Passive listeners ({ passive: true }) cannot call preventDefault(), optimizing scroll performance."
        ],
        tags=["preventdefault", "events", "forms", "navigation"]
    ))

    # 5. dispatch-events
    lessons.append(make_lesson(
        slug="dispatch-events",
        title="Dispatching Custom Events",
        description="Build decoupled event-driven architectures by creating and dispatching CustomEvent objects with custom detail data.",
        difficulty="intermediate",
        reading_time=5,
        sections=[
            make_section(
                heading="The CustomEvent API",
                paragraphs=[
                    "JavaScript allows you to generate and dispatch your own custom events using new CustomEvent(eventName, { detail, bubbles }).",
                    "Custom events allow independent UI components to communicate loosely without holding direct references to each other."
                ],
                code_examples=[
                    make_code_example(
                        title="Creating and Dispatching CustomEvent",
                        code="const userMenu = document.createElement('div');\n\n// Listen for custom event:\nuserMenu.addEventListener('user-login', (event) => {\n  console.log(`User logged in: ${event.detail.username}`);\n});\n\n// Dispatch custom event with data payload:\nconst loginEvent = new CustomEvent('user-login', {\n  detail: { username: 'Elena', role: 'admin' },\n  bubbles: true\n});\n\nuserMenu.dispatchEvent(loginEvent);",
                        explanation="CustomEvent accepts a detail property to pass arbitrary event payload data.",
                        output="User logged in: Elena"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Dispatch an Order Event",
                description="Dispatch a 'purchase' event on a cart element with detail: { total: 99 }. Listen and log event.detail.total.",
                starter_code="const cart = document.createElement('div');\ncart.addEventListener('purchase', (e) => {\n  console.log(e.detail.total);\n});\n\ncart.dispatchEvent(new CustomEvent('purchase', { detail: { total: 99 } }));",
                solution="const cart = document.createElement('div');\ncart.addEventListener('purchase', (e) => {\n  console.log(e.detail.total);\n});\ncart.dispatchEvent(new CustomEvent('purchase', { detail: { total: 99 } }));",
                hints=["Use elem.dispatchEvent(new CustomEvent('purchase', { detail: { total: 99 } }))."]
            )
        ],
        quiz=[
            make_quiz(
                question="Where should custom payload data be passed when constructing a CustomEvent?",
                options=[
                    "Inside the 'detail' property of the options object",
                    "Directly as the second string argument",
                    "Inside a global variable",
                    "On window.customData"
                ],
                correct_index=0,
                explanation="CustomEvent stores custom payload data under the 'detail' field."
            )
        ],
        key_takeaways=[
            "Use new CustomEvent('name', { detail, bubbles: true }) to create custom events.",
            "Dispatch events with elem.dispatchEvent(event).",
            "Enables clean decoupled architecture across UI components."
        ],
        tags=["customevent", "dispatchevent", "events", "architecture"]
    ))

    # 6. mouse-events-basics
    lessons.append(make_lesson(
        slug="mouse-events-basics",
        title="Mouse Events: click, dblclick, mousedown, contextmenu",
        description="Handle mouse clicks, distinguish left/right/middle buttons with event.button, and detect modifier keys (Shift, Alt, Ctrl, Cmd).",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Mouse Events and Buttons",
                paragraphs=[
                    "Mouse events occur when users interact with a pointing device: mousedown, mouseup, click, dblclick, and contextmenu (right click).",
                    "The event.button property identifies which mouse button was pressed: 0 for primary (left), 1 for middle (wheel), and 2 for secondary (right)."
                ],
                code_examples=[
                    make_code_example(
                        title="Detecting Modifier Keys",
                        code="function handleMouseAction(event) {\n  console.log('Button index:', event.button); // 0 = left\n  \n  // Checking modifier keys:\n  if (event.shiftKey) console.log('Shift was held!');\n  if (event.ctrlKey || event.metaKey) console.log('Ctrl/Cmd was held!');\n}",
                        explanation="event.shiftKey, ctrlKey, altKey, and metaKey enable multi-select and keyboard shortcut behaviors.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Detect Primary Button",
                description="Write a check inside a mousedown handler verifying event.button === 0 and logging 'Left click'.",
                starter_code="function checkButton(e) {\n  if (e.button === 0) console.log('Left click');\n}\ncheckButton({ button: 0 });",
                solution="function checkButton(e) {\n  if (e.button === 0) console.log('Left click');\n}\ncheckButton({ button: 0 });",
                hints=["event.button === 0 corresponds to the primary/left button."]
            )
        ],
        quiz=[
            make_quiz(
                question="What does event.button return for a right-click mousedown event?",
                options=[
                    "2",
                    "0",
                    "1",
                    "right"
                ],
                correct_index=0,
                explanation="0 = Left, 1 = Middle, 2 = Right."
            )
        ],
        key_takeaways=[
            "Mouse events: click, mousedown, mouseup, contextmenu.",
            "Use event.button to identify which mouse button was clicked.",
            "Check shiftKey, ctrlKey, and metaKey for power-user interactions."
        ],
        tags=["mouse-events", "click", "mousedown", "contextmenu"]
    ))

    # 7. mousemove-mouseover-mouseout-mouseenter-mouseleave
    lessons.append(make_lesson(
        slug="mousemove-mouseover-mouseout-mouseenter-mouseleave",
        title="Moving the Mouse: mouseover/out vs mouseenter/leave",
        description="Track mouse cursor coordinates and understand the critical bubbling differences between mouseover and mouseenter.",
        difficulty="intermediate",
        reading_time=6,
        sections=[
            make_section(
                heading="mouseover/mouseout vs mouseenter/mouseleave",
                paragraphs=[
                    "Tracking mouse movement is essential for hover cards, tooltips, and canvas painting.",
                    "A critical distinction exists between hover event pairs:",
                    "1. mouseover / mouseout: BUBBLE. They trigger when moving between parent and child elements.",
                    "2. mouseenter / mouseleave: DO NOT BUBBLE. They only trigger when the cursor enters or leaves the parent boundary."
                ],
                code_examples=[
                    make_code_example(
                        title="Clean Hover with mouseenter/mouseleave",
                        code="const card = document.createElement('div');\n\n// mouseenter does not fire when moving over child elements inside card:\ncard.addEventListener('mouseenter', () => {\n  card.classList.add('highlighted');\n});\ncard.addEventListener('mouseleave', () => {\n  card.classList.remove('highlighted');\n});",
                        explanation="mouseenter and mouseleave are ideal for tooltips and hover cards because they do not bubble.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Track Mouse Coordinates",
                description="Write an onmousemove handler that logs `X: ${e.clientX}, Y: ${e.clientY}`.",
                starter_code="function onMove(e) {\n  console.log(`X: ${e.clientX}, Y: ${e.clientY}`);\n}\nonMove({ clientX: 150, clientY: 200 });",
                solution="function onMove(e) {\n  console.log(`X: ${e.clientX}, Y: ${e.clientY}`);\n}\nonMove({ clientX: 150, clientY: 200 });",
                hints=["clientX and clientY give viewport coordinates."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why is 'mouseenter' preferred over 'mouseover' for dropdown menus and cards?",
                options=[
                    "Because mouseenter does not bubble and does not trigger when moving between child elements",
                    "Because mouseover only works with images",
                    "Because mouseenter runs on the GPU",
                    "Because mouseover is deprecated"
                ],
                correct_index=0,
                explanation="mouseenter does not bubble, preventing flickering when crossing child borders."
            )
        ],
        key_takeaways=[
            "Use mouseenter/mouseleave for hover state without child flickering.",
            "Use mouseover/mouseout when you need event delegation on children.",
            "clientX/Y provide viewport cursor position."
        ],
        tags=["mouse-events", "hover", "mouseenter", "mouseover", "cursor"]
    ))

    # 8. mouse-drag-and-drop
    lessons.append(make_lesson(
        slug="mouse-drag-and-drop",
        title="Drag'n'Drop with Mouse Events",
        description="Build fluid custom drag-and-drop interactions using mousedown, mousemove, and mouseup events.",
        difficulty="intermediate",
        reading_time=6,
        sections=[
            make_section(
                heading="The 3-Step Custom Drag Algorithm",
                paragraphs=[
                    "While the HTML5 Drag and Drop API exists, it has severe limitations for complex games, canvases, and sliders. Building custom drag-and-drop with mouse events gives complete visual control.",
                    "The algorithm:",
                    "1. On mousedown: Prepare element for moving (position: absolute, zIndex: 1000).",
                    "2. On mousemove on document: Update element left and top coordinates.",
                    "3. On mouseup on document: Clean up listeners and place the element."
                ],
                code_examples=[
                    make_code_example(
                        title="Drag Algorithm Structure",
                        code="function makeDraggable(element) {\n  element.addEventListener('mousedown', (e) => {\n    const shiftX = e.clientX - element.getBoundingClientRect().left;\n    const shiftY = e.clientY - element.getBoundingClientRect().top;\n    \n    function onMouseMove(moveEvent) {\n      element.style.position = 'absolute';\n      element.style.left = moveEvent.pageX - shiftX + 'px';\n      element.style.top = moveEvent.pageY - shiftY + 'px';\n    }\n    \n    document.addEventListener('mousemove', onMouseMove);\n    document.addEventListener('mouseup', () => {\n      document.removeEventListener('mousemove', onMouseMove);\n    }, { once: true });\n  });\n}",
                        explanation="Listening for mousemove on document prevents losing the drag when moving the cursor quickly.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Calculate Drag Shift Offset",
                description="Write a function getShift(e, rect) returning { x: e.clientX - rect.left, y: e.clientY - rect.top }.",
                starter_code="function getShift(e, rect) {\n  return { x: e.clientX - rect.left, y: e.clientY - rect.top };\n}\n\nconsole.log(getShift({ clientX: 100, clientY: 50 }, { left: 80, top: 40 }));",
                solution="function getShift(e, rect) {\n  return { x: e.clientX - rect.left, y: e.clientY - rect.top };\n}\nconsole.log(getShift({ clientX: 100, clientY: 50 }, { left: 80, top: 40 }));",
                hints=["Subtract rect.left from clientX and rect.top from clientY."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why should the 'mousemove' listener during drag-and-drop be attached to 'document' rather than the dragged element itself?",
                options=[
                    "Because fast mouse movements can leave the element bounds, which would interrupt dragging if attached only to the element",
                    "Because elements cannot listen to mousemove",
                    "Because document events run on another thread",
                    "To disable CSS styles"
                ],
                correct_index=0,
                explanation="Attaching to document ensures smooth tracking even when the cursor moves faster than the DOM element can redraw."
            )
        ],
        key_takeaways=[
            "Custom drag-and-drop combines mousedown, document mousemove, and document mouseup.",
            "Record cursor shift offsets so the element doesn't snap to its top-left corner upon drag.",
            "Disable native drag with elem.ondragstart = () => false."
        ],
        tags=["drag-and-drop", "mouse-events", "ui", "algorithms"]
    ))

    # 9. pointer-events
    lessons.append(make_lesson(
        slug="pointer-events",
        title="Pointer Events: Touch, Pen, and Mouse",
        description="Unify mouse, touchscreen, and digital stylus inputs under modern Pointer Events with pointerId and setPointerCapture().",
        difficulty="intermediate",
        reading_time=6,
        sections=[
            make_section(
                heading="One API for All Input Devices",
                paragraphs=[
                    "Historically, web developers had to handle both mouse events (mousedown) and touch events (touchstart) separately for mobile support.",
                    "Pointer Events unify all pointing hardware (mouse, touchscreen, digital stylus pen) into a single modern API: pointerdown, pointermove, and pointerup.",
                    "Pointer events include hardware details: pointerType ('mouse', 'touch', 'pen'), pressure, and width/height contact radius."
                ],
                code_examples=[
                    make_code_example(
                        title="setPointerCapture()",
                        code="// Retarget all subsequent pointer events directly to this element (even outside browser window!):\nfunction handlePointerDown(event) {\n  event.target.setPointerCapture(event.pointerId);\n  console.log(`Captured pointer: ${event.pointerId}, type: ${event.pointerType}`);\n}",
                        explanation="setPointerCapture guarantees the element receives all pointer events until pointerup.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Detect Input Device Type",
                description="Write a function getDevice(event) that returns event.pointerType ('mouse', 'touch', or 'pen').",
                starter_code="function getDevice(event) {\n  return event.pointerType;\n}\n\nconsole.log(getDevice({ pointerType: 'touch' }));",
                solution="function getDevice(event) {\n  return event.pointerType;\n}\nconsole.log(getDevice({ pointerType: 'touch' }));",
                hints=["Return event.pointerType."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the advantage of using Pointer Events over separate Mouse and Touch events?",
                options=[
                    "A single unified codebase handles mouse, touchscreen taps, and digital stylus input automatically",
                    "Pointer events only run on mobile phones",
                    "They eliminate CSS requirements",
                    "They run faster than native code"
                ],
                correct_index=0,
                explanation="Pointer events unify all pointing hardware into a single consistent API."
            )
        ],
        key_takeaways=[
            "Pointer Events replace separate mouse and touch handlers.",
            "Use elem.setPointerCapture(pointerId) for robust multi-touch and drag interactions.",
            "Inspect event.pointerType for device-specific tailoring."
        ],
        tags=["pointer-events", "touch", "mobile", "mouse", "pen"]
    ))

    # 10. keyboard-events
    lessons.append(make_lesson(
        slug="keyboard-events",
        title="Keyboard Events: keydown and keyup",
        description="Handle user keystrokes: event.key (character value) vs event.code (physical key code) and hotkeys.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="keydown and keyup",
                paragraphs=[
                    "Keyboard events occur when keys are pressed (keydown) or released (keyup).",
                    "Always use event.key and event.code:",
                    "1. event.key: The character generated (e.g. 'a', 'A', 'Enter', 'Escape'). Changes based on keyboard layout and Shift.",
                    "2. event.code: The physical hardware key on the keyboard (e.g. 'KeyA', 'Digit1', 'Enter'). Never changes regardless of language layout."
                ],
                code_examples=[
                    make_code_example(
                        title="Handling Keyboard Shortcuts",
                        code="document.addEventListener('keydown', (event) => {\n  // Close modal on Escape:\n  if (event.key === 'Escape') {\n    console.log('Escape pressed: Closing modal');\n  }\n  \n  // Save shortcut (Ctrl+S or Cmd+S):\n  if ((event.ctrlKey || event.metaKey) && event.key === 's') {\n    event.preventDefault(); // Stop browser Save Dialog!\n    console.log('Saved project shortcut triggered!');\n  }\n});",
                        explanation="Checking event.key === 'Escape' and event.metaKey creates accessible keyboard workflows.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Detect Enter Key",
                description="Write an event handler function that checks if event.key === 'Enter' and logs 'Submitted'.",
                starter_code="function onKey(e) {\n  if (e.key === 'Enter') console.log('Submitted');\n}\nonKey({ key: 'Enter' });",
                solution="function onKey(e) {\n  if (e.key === 'Enter') console.log('Submitted');\n}\nonKey({ key: 'Enter' });",
                hints=["Check e.key === 'Enter'."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the difference between event.key and event.code?",
                options=[
                    "event.key is the character produced (accounting for language/Shift); event.code is the physical hardware key identifier",
                    "event.key is deprecated; event.code is modern",
                    "event.code only works with number keys",
                    "There is no difference"
                ],
                correct_index=0,
                explanation="event.key gives the symbol produced, while event.code gives the physical key on the keyboard."
            )
        ],
        key_takeaways=[
            "Use event.key for character inputs and navigation keys ('Escape', 'Enter').",
            "Use event.code for game controls ('KeyW', 'KeyA') independent of language layout.",
            "Call event.preventDefault() to intercept native shortcuts like Ctrl+S."
        ],
        tags=["keyboard", "keydown", "keyup", "hotkeys", "shortcuts"]
    ))

    # 11. onscroll
    lessons.append(make_lesson(
        slug="onscroll",
        title="Scroll Events: Infinite Scroll & Parallax",
        description="Handle page and container scrolling with the scroll event, prevent scroll jank with throttling, and passive listeners.",
        difficulty="intermediate",
        reading_time=5,
        sections=[
            make_section(
                heading="The scroll Event",
                paragraphs=[
                    "The scroll event fires whenever an element or the window is scrolled. It powers lazy-loading images, infinite scroll feeds, and progress indicators.",
                    "Because scroll events fire dozens of times per second, heavy DOM work inside a scroll listener causes frame drops ('jank'). Always throttle scroll handlers or use IntersectionObserver."
                ],
                code_examples=[
                    make_code_example(
                        title="Reading Scroll Progress",
                        code="function calculateScrollProgress() {\n  const scrollTop = window.scrollY;\n  const docHeight = document.documentElement.scrollHeight - window.innerHeight;\n  const progressPercent = (scrollTop / docHeight) * 100;\n  return Math.min(100, Math.max(0, progressPercent));\n}\n\nconsole.log('Scroll percent:', calculateScrollProgress());",
                        explanation="Calculates page reading progress for sticky progress bars.",
                        output="Scroll percent: 0"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Check Near Bottom",
                description="Write a function isNearBottom(scrollY, maxScroll) returning true if scrollY > maxScroll - 100.",
                starter_code="function isNearBottom(scrollY, maxScroll) {\n  return scrollY > maxScroll - 100;\n}\n\nconsole.log(isNearBottom(950, 1000));",
                solution="function isNearBottom(scrollY, maxScroll) {\n  return scrollY > maxScroll - 100;\n}\nconsole.log(isNearBottom(950, 1000));",
                hints=["Return scrollY > maxScroll - 100."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why should developers avoid heavy calculations directly inside scroll event handlers?",
                options=[
                    "Because scroll events fire at high frequency, blocking the main thread and causing visible stutter (jank)",
                    "Because scroll events cannot access variables",
                    "Because scroll events disable CSS",
                    "Scroll events are asynchronous"
                ],
                correct_index=0,
                explanation="High-frequency events must be throttled or offloaded to avoid dropping below 60fps."
            )
        ],
        key_takeaways=[
            "Listen to window.addEventListener('scroll', handler, { passive: true }).",
            "Throttle handlers or use IntersectionObserver for performant scroll-based reveals."
        ],
        tags=["scroll", "performance", "infinite-scroll", "intersection-observer"]
    ))

    # 12. form-elements
    lessons.append(make_lesson(
        slug="form-elements",
        title="Form Properties and Methods",
        description="Access form controls easily with document.forms, form.elements, and manage input, select, and textarea values.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Navigating Forms and Controls",
                paragraphs=[
                    "HTML forms have special navigation properties in the DOM:",
                    "1. document.forms: A collection of all forms on the page.",
                    "2. form.elements: Accesses form controls by name or index (e.g. form.elements.username).",
                    "3. element.form: References the enclosing form from any input control."
                ],
                code_examples=[
                    make_code_example(
                        title="Reading Input and Select Values",
                        code="const form = document.createElement('form');\nform.innerHTML = `\n  <input name=\"email\" value=\"user@test.com\">\n  <select name=\"role\">\n    <option value=\"user\">User</option>\n    <option value=\"admin\" selected>Admin</option>\n  </select>\n`;\n\nconsole.log('Email:', form.elements.email.value); // 'user@test.com'\nconsole.log('Role:', form.elements.role.value);   // 'admin'",
                        explanation="Form controls are accessible directly by name on form.elements.",
                        output="Email: user@test.com\nRole: admin"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Read Form Value by Name",
                description="Given form.elements.age, set value to '30' and log it.",
                starter_code="const form = document.createElement('form');\nform.innerHTML = '<input name=\"age\">';\nform.elements.age.value = '30';\nconsole.log(form.elements.age.value);",
                solution="const form = document.createElement('form');\nform.innerHTML = '<input name=\"age\">';\nform.elements.age.value = '30';\nconsole.log(form.elements.age.value);",
                hints=["Set form.elements.age.value = '30'."]
            )
        ],
        quiz=[
            make_quiz(
                question="How can you access an input element named 'username' inside a form element 'myForm'?",
                options=[
                    "myForm.elements.username",
                    "myForm.find('username')",
                    "myForm.get('username')",
                    "myForm.controls.username"
                ],
                correct_index=0,
                explanation="form.elements allows direct property access by the input's name attribute."
            )
        ],
        key_takeaways=[
            "Access form controls via form.elements[name].",
            "Read and set input values with input.value.",
            "Checkboxes use input.checked (boolean)."
        ],
        tags=["forms", "form-elements", "inputs", "controls"]
    ))

    # 13. focus-blur
    lessons.append(make_lesson(
        slug="focus-blur",
        title="Focusing: focus and blur",
        description="Manage element focus states, programmatic elem.focus(), tabindex for accessibility, and focusin/focusout bubbling.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Focus and Blur Events",
                paragraphs=[
                    "An element receives focus when a user clicks it or navigates to it with the Tab key. When focus is lost, blur occurs.",
                    "Interactive elements (<input>, <button>, <a>) receive focus naturally. Non-interactive elements (like <div>) can be made focusable using the tabindex attribute."
                ],
                code_examples=[
                    make_code_example(
                        title="Programmatic Focus and tabindex",
                        code="const input = document.createElement('input');\ninput.placeholder = 'Type here...';\n\ninput.addEventListener('focus', () => {\n  input.classList.add('focused-ring');\n});\ninput.addEventListener('blur', () => {\n  input.classList.remove('focused-ring');\n});\n\n// Programmatic focus:\n// input.focus();",
                        explanation="focus and blur do not bubble; use focusin and focusout if you need event delegation.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Make a Div Focusable",
                description="Set tabindex = 0 on a div so that it can be focused with the Tab key. Log div.tabIndex.",
                starter_code="const div = document.createElement('div');\ndiv.tabIndex = 0;\nconsole.log(div.tabIndex);",
                solution="const div = document.createElement('div');\ndiv.tabIndex = 0;\nconsole.log(div.tabIndex);",
                hints=["Set div.tabIndex = 0."]
            )
        ],
        quiz=[
            make_quiz(
                question="Do native 'focus' and 'blur' events bubble up the DOM?",
                options=[
                    "No, but focusin and focusout bubble",
                    "Yes, both bubble to window",
                    "Only in strict mode",
                    "Only on mobile"
                ],
                correct_index=0,
                explanation="focus and blur do not bubble. Use focusin/focusout for delegated focus management."
            )
        ],
        key_takeaways=[
            "focus and blur indicate keyboard and selection focus.",
            "Use tabindex='0' to make custom widgets keyboard accessible.",
            "Use focusin/focusout when delegation is required."
        ],
        tags=["focus", "blur", "tabindex", "accessibility"]
    ))

    # 14. events-change-input
    lessons.append(make_lesson(
        slug="events-change-input",
        title="Events: change, input, cut, copy, paste",
        description="Capture real-time user typing with input, form changes with change, and clipboard interactions.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="input vs change",
                paragraphs=[
                    "Handling text input requires knowing the difference between two primary events:",
                    "1. input: Fires IMMEDIATELY on every keystroke, cut, paste, or speech recognition update. Ideal for live search and instant character counting.",
                    "2. change: Fires only when the user finishes editing and leaves the input (loses focus), or selects a dropdown option."
                ],
                code_examples=[
                    make_code_example(
                        title="Real-Time Input vs Change",
                        code="const searchInput = document.createElement('input');\n\n// Real-time live filtering:\nsearchInput.addEventListener('input', (event) => {\n  console.log('Live query:', event.target.value);\n});\n\n// Triggered only after user finishes editing (blur):\nsearchInput.addEventListener('change', (event) => {\n  console.log('Final committed value:', event.target.value);\n});",
                        explanation="Use input for live reactivity and change for completed input validation.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Listen to Live Input",
                description="Simulate typing into an input by creating an input and dispatching an 'input' event.",
                starter_code="const inp = document.createElement('input');\ninp.addEventListener('input', (e) => console.log('Typed:', e.target.value));\ninp.value = 'Hello';\ninp.dispatchEvent(new Event('input'));",
                solution="const inp = document.createElement('input');\ninp.addEventListener('input', (e) => console.log('Typed:', e.target.value));\ninp.value = 'Hello';\ninp.dispatchEvent(new Event('input'));",
                hints=["Set inp.value and dispatch an 'input' Event."]
            )
        ],
        quiz=[
            make_quiz(
                question="Which event fires synchronously on every single character keystroke inside a text input?",
                options=[
                    "input",
                    "change",
                    "blur",
                    "submit"
                ],
                correct_index=0,
                explanation="The input event triggers immediately on any value change, including typing, pasting, and deletion."
            )
        ],
        key_takeaways=[
            "Use input for real-time reactivity and live search.",
            "Use change for committing finalized values on blur.",
            "Intercept clipboard events with copy, cut, and paste."
        ],
        tags=["input", "change", "events", "forms", "clipboard"]
    ))

    # 15. forms-submit
    lessons.append(make_lesson(
        slug="forms-submit",
        title="Forms: The 'submit' Event & Validation",
        description="Handle form submissions, validate required inputs, and prevent page reloads with event.preventDefault().",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Handling Form Submission",
                paragraphs=[
                    "The submit event fires on the <form> element when a user clicks a submit button (<button type=\"submit\">) or presses Enter inside an input field.",
                    "In Single Page Applications (SPAs), always call event.preventDefault() to cancel browser page reloading, validate fields, and submit data via fetch()."
                ],
                code_examples=[
                    make_code_example(
                        title="Modern Form Submission Pattern",
                        code="function setupForm(formElement) {\n  formElement.addEventListener('submit', async (e) => {\n    e.preventDefault();\n    \n    const formData = new FormData(formElement);\n    const payload = Object.fromEntries(formData.entries());\n    \n    console.log('Sending JSON payload to API:', payload);\n    // await fetch('/api/submit', { method: 'POST', body: JSON.stringify(payload) });\n  });\n}",
                        explanation="Combining FormData with Object.fromEntries turns form inputs into a clean JavaScript object.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Extract FormData Object",
                description="Given a form with inputs name='Alice' and age='25', convert to an object using Object.fromEntries(new FormData(form)). Log it.",
                starter_code="const form = document.createElement('form');\nform.innerHTML = '<input name=\"name\" value=\"Alice\"><input name=\"age\" value=\"25\">';\nconst data = Object.fromEntries(new FormData(form));\nconsole.log(data.name, data.age);",
                solution="const form = document.createElement('form');\nform.innerHTML = '<input name=\"name\" value=\"Alice\"><input name=\"age\" value=\"25\">';\nconst data = Object.fromEntries(new FormData(form));\nconsole.log(data.name, data.age);",
                hints=["Object.fromEntries(new FormData(form)) creates a plain key-value object."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why is it better to listen to the 'submit' event on the <form> rather than a 'click' event on the submit button?",
                options=[
                    "Because 'submit' triggers whether the user clicks the button OR presses Enter inside an input field",
                    "Because submit buttons do not support click events",
                    "Because click events are asynchronous",
                    "To disable validation"
                ],
                correct_index=0,
                explanation="Listening to form 'submit' handles keyboard Enter presses and mobile submit buttons properly."
            )
        ],
        key_takeaways=[
            "Listen to submit on the <form>, not click on the button.",
            "Use event.preventDefault() to prevent page reload.",
            "Use new FormData(form) to easily collect all input values."
        ],
        tags=["forms", "submit", "formdata", "validation"]
    ))

    # 16. onload-ondomcontentloaded
    lessons.append(make_lesson(
        slug="onload-ondomcontentloaded",
        title="Page Lifecycle: DOMContentLoaded, load, beforeunload",
        description="Understand page lifecycle events: when the DOM is ready, when all external images load, and warning before leaving.",
        difficulty="intermediate",
        reading_time=6,
        sections=[
            make_section(
                heading="The 4 Page Lifecycle Stages",
                paragraphs=[
                    "An HTML document moves through distinct lifecycle stages:",
                    "1. DOMContentLoaded: The browser has fully parsed the HTML and built the DOM tree. External resources (images, stylesheets) may not have finished loading yet.",
                    "2. load: The entire page including all external resources (images, styles, iframes) has fully finished loading.",
                    "3. beforeunload: The user is about to leave the page; you can prompt to save unsaved form changes.",
                    "4. unload: The user has left the page; useful for sending background analytics beacons via navigator.sendBeacon()."
                ],
                code_examples=[
                    make_code_example(
                        title="Lifecycle Listeners",
                        code="document.addEventListener('DOMContentLoaded', () => {\n  console.log('DOM is fully built and interactive!');\n});\n\nwindow.addEventListener('load', () => {\n  console.log('All images and resources finished loading!');\n});\n\nwindow.addEventListener('beforeunload', (e) => {\n  // Warn user if form is dirty:\n  // e.preventDefault();\n  // e.returnValue = '';\n});",
                        explanation="DOMContentLoaded allows initializing UI components immediately without waiting for heavy images.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Attach DOMContentLoaded Listener",
                description="Write document.addEventListener('DOMContentLoaded', () => console.log('Ready')).",
                starter_code="document.addEventListener('DOMContentLoaded', () => {\n  console.log('Ready');\n});",
                solution="document.addEventListener('DOMContentLoaded', () => {\n  console.log('Ready');\n});",
                hints=["Pass 'DOMContentLoaded' to document.addEventListener."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the key difference between 'DOMContentLoaded' and window 'load'?",
                options=[
                    "DOMContentLoaded fires as soon as HTML is parsed; window 'load' waits for all external images, fonts, and stylesheets to finish downloading",
                    "DOMContentLoaded is only for mobile",
                    "window 'load' runs before HTML is parsed",
                    "There is no difference"
                ],
                correct_index=0,
                explanation="DOMContentLoaded is faster because it does not block on external media assets."
            )
        ],
        key_takeaways=[
            "Initialize UI widgets on DOMContentLoaded for faster responsiveness.",
            "Use window load when image dimensions must be measured.",
            "Use navigator.sendBeacon in unload for reliable analytics."
        ],
        tags=["lifecycle", "domcontentloaded", "load", "beforeunload"]
    ))

    # 17. script-async-defer
    lessons.append(make_lesson(
        slug="script-async-defer",
        title="Scripts: async and defer Attributes",
        description="Stop render blocking: how async and defer script attributes download files in the background without freezing the HTML parser.",
        difficulty="intermediate",
        reading_time=5,
        sections=[
            make_section(
                heading="Eliminating Render-Blocking Scripts",
                paragraphs=[
                    "By default, when an HTML parser encounters <script src=\"...\">, it pauses HTML parsing, downloads the script, executes it, and only then resumes HTML parsing.",
                    "Modern browsers provide two attributes to download scripts in the background:",
                    "1. defer: Downloads in the background, executes after HTML parsing is complete (just before DOMContentLoaded), maintaining execution order. (Recommended!)",
                    "2. async: Downloads in the background, executes IMMEDIATELY when downloaded, ignoring HTML parsing and execution order (best for independent analytics)."
                ],
                code_examples=[
                    make_code_example(
                        title="defer vs async in HTML",
                        code="<!-- defer: Perfect for application scripts, preserves execution order: -->\n<!-- <script defer src=\"app.js\"></script> -->\n\n<!-- async: Great for independent third-party trackers (Google Analytics): -->\n<!-- <script async src=\"https://analytics.com/tag.js\"></script> -->",
                        explanation="defer scripts never block HTML parsing and execute in source code order.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Create a Deferred Script Element",
                description="Create a script element dynamically and set script.defer = true. Log script.defer.",
                starter_code="const script = document.createElement('script');\nscript.src = 'app.js';\nscript.defer = true;\nconsole.log(script.defer);",
                solution="const script = document.createElement('script');\nscript.src = 'app.js';\nscript.defer = true;\nconsole.log(script.defer);",
                hints=["Set script.defer = true."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why is 'defer' preferred over normal scripts for application JavaScript?",
                options=[
                    "It downloads in parallel without blocking HTML parsing and runs in exact document order once HTML is parsed",
                    "It encrypts the JavaScript code",
                    "It only downloads if the user clicks a button",
                    "It deletes CSS"
                ],
                correct_index=0,
                explanation="defer avoids render blocking while preserving the execution order of your dependencies."
            )
        ],
        key_takeaways=[
            "Always use defer for application scripts in HTML <head>.",
            "Use async for independent analytics scripts.",
            "Both attributes prevent render blocking."
        ],
        tags=["scripts", "defer", "async", "performance", "html"]
    ))

    # 18. onload-onerror
    lessons.append(make_lesson(
        slug="onload-onerror",
        title="Resource Loading: onload and onerror",
        description="Handle successful and failed resource loading for dynamic scripts, images, and stylesheets using onload and onerror.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Tracking External Resource Loading",
                paragraphs=[
                    "When loading external resources dynamically (like third-party scripts, images, or iframes), you can track their status using onload and onerror.",
                    "onload fires when the resource has finished loading successfully; onerror fires if the resource fails to load (404, network error, or CORS issue)."
                ],
                code_examples=[
                    make_code_example(
                        title="Dynamically Loading a Script with Promise",
                        code="function loadScript(src) {\n  return new Promise((resolve, reject) => {\n    const script = document.createElement('script');\n    script.src = src;\n    script.onload = () => resolve(script);\n    script.onerror = () => reject(new Error(`Failed to load ${src}`));\n    document.head.append(script);\n  });\n}\n\n// Usage:\n// loadScript('https://cdn.com/library.js').then(...);",
                        explanation="Wrapping onload and onerror in a Promise makes dynamic resource loading clean and awaitable.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Preload an Image with Promise",
                description="Write a function preloadImage(url) that returns a Promise resolving on img.onload and rejecting on img.onerror.",
                starter_code="function preloadImage(url) {\n  return new Promise((resolve, reject) => {\n    const img = new Image();\n    img.onload = () => resolve(img);\n    img.onerror = () => reject(new Error('Image load failed'));\n    img.src = url;\n  });\n}\n\nconsole.log(typeof preloadImage === 'function');",
                solution="function preloadImage(url) {\n  return new Promise((resolve, reject) => {\n    const img = new Image();\n    img.onload = () => resolve(img);\n    img.onerror = () => reject(new Error('Image load failed'));\n    img.src = url;\n  });\n}\nconsole.log(typeof preloadImage === 'function');",
                hints=["Attach img.onload and img.onerror before setting img.src."]
            )
        ],
        quiz=[
            make_quiz(
                question="What event handler fires on a <img> or <script> tag if the server returns a 404 Not Found?",
                options=[
                    "onerror",
                    "onload",
                    "onfail",
                    "onabort"
                ],
                correct_index=0,
                explanation="The onerror callback is triggered whenever an external resource cannot be fetched or parsed."
            )
        ],
        key_takeaways=[
            "Use onload and onerror to monitor dynamic script and image loading.",
            "Wrap external asset loaders in Promises for clean async orchestration."
        ],
        tags=["resources", "onload", "onerror", "images", "scripts"]
    ))

    # 19. mutation-observer
    lessons.append(make_lesson(
        slug="mutation-observer",
        title="MutationObserver: Watching the DOM",
        description="Observe and react to DOM changes: added/removed nodes, attribute updates, and subtree modifications.",
        difficulty="advanced",
        reading_time=6,
        sections=[
            make_section(
                heading="What is a MutationObserver?",
                paragraphs=[
                    "MutationObserver is a built-in browser API that watches for changes in the DOM tree and invokes a callback with batch records when mutations occur.",
                    "It replaces old, inefficient DOM mutation events with performant, asynchronous batching."
                ],
                code_examples=[
                    make_code_example(
                        title="Observing DOM Changes",
                        code="const targetNode = document.createElement('div');\n\nconst observer = new MutationObserver((mutationsList) => {\n  for (const mutation of mutationsList) {\n    if (mutation.type === 'childList') {\n      console.log('A child node was added or removed!');\n    } else if (mutation.type === 'attributes') {\n      console.log(`Attribute ${mutation.attributeName} was modified!`);\n    }\n  }\n});\n\nobserver.observe(targetNode, {\n  childList: true,\n  attributes: true,\n  subtree: true\n});\n\ntargetNode.appendChild(document.createElement('span'));",
                        explanation="MutationObserver batches multiple mutations and delivers them efficiently.",
                        output="A child node was added or removed!"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Create a MutationObserver",
                description="Instantiate a MutationObserver with a callback and verify observer.observe is a function.",
                starter_code="const obs = new MutationObserver(() => {});\nconsole.log(typeof obs.observe === 'function');\nobs.disconnect();",
                solution="const obs = new MutationObserver(() => {});\nconsole.log(typeof obs.observe === 'function');\nobs.disconnect();",
                hints=["Call obs.disconnect() to stop observing."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why is MutationObserver preferred over deprecated Mutation Events?",
                options=[
                    "MutationObserver is asynchronous and batches changes, preventing severe performance bottlenecks",
                    "MutationObserver works without JavaScript",
                    "MutationObserver was designed by Apple",
                    "Mutation Events were renamed to click events"
                ],
                correct_index=0,
                explanation="MutationObserver batches updates asynchronously to avoid thrashing browser layouts."
            )
        ],
        key_takeaways=[
            "MutationObserver watches for additions, removals, and attribute changes in DOM nodes.",
            "Use observer.disconnect() when observation is no longer needed."
        ],
        tags=["mutation-observer", "dom", "reactivity", "monitoring"]
    ))

    # 20. selection-range
    lessons.append(make_lesson(
        slug="selection-range",
        title="Selection and Range: Text Manipulation",
        description="Inspect and manipulate highlighted text selections using Range and the window.getSelection() API.",
        difficulty="advanced",
        reading_time=5,
        sections=[
            make_section(
                heading="The Range and Selection Objects",
                paragraphs=[
                    "The Range object represents a contiguous fragment of a document that can start and end at arbitrary points inside text nodes or element boundaries.",
                    "The Selection object represents the portion of the document currently highlighted by the user (window.getSelection())."
                ],
                code_examples=[
                    make_code_example(
                        title="Reading Selected Text",
                        code="function getSelectedText() {\n  const selection = window.getSelection();\n  return selection ? selection.toString() : '';\n}\n\nconsole.log('Selected text length:', getSelectedText().length);",
                        explanation="window.getSelection().toString() returns highlighted text across elements.",
                        output="Selected text length: 0"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Create a Range Object",
                description="Create a new Range object using document.createRange() and verify its collapsed property is true.",
                starter_code="const range = document.createRange();\nconsole.log(range.collapsed);",
                solution="const range = document.createRange();\nconsole.log(range.collapsed);",
                hints=["document.createRange() creates an empty range."]
            )
        ],
        quiz=[
            make_quiz(
                question="What method returns the user's current highlighted selection in the window?",
                options=[
                    "window.getSelection()",
                    "document.getSelected()",
                    "document.querySelection()",
                    "window.selectText()"
                ],
                correct_index=0,
                explanation="window.getSelection() returns the active Selection object."
            )
        ],
        key_takeaways=[
            "Range represents a pair of boundary points in the DOM.",
            "Selection represents the user's active highlight.",
            "Essential for rich text editors (WYSIWYG)."
        ],
        tags=["selection", "range", "text", "wysiwyg"]
    ))

    # 21. event-loop
    lessons.append(make_lesson(
        slug="event-loop",
        title="The Event Loop: Microtasks & Macrotasks",
        description="Master the browser execution model: call stack, task queues, requestAnimationFrame, and how the browser renders UI.",
        difficulty="advanced",
        reading_time=6,
        sections=[
            make_section(
                heading="How the Browser Event Loop Ticks",
                paragraphs=[
                    "The Event Loop is the heart of JavaScript's concurrency model. The loop constantly checks:",
                    "1. Execute the oldest Macrotask from the task queue (e.g. script, click, setTimeout).",
                    "2. Execute ALL Microtasks in the microtask queue (Promise callbacks, queueMicrotask) until empty.",
                    "3. Render changes to the screen (recalculate styles, layout, paint).",
                    "4. If queues are empty, wait for incoming tasks."
                ],
                code_examples=[
                    make_code_example(
                        title="Visualizing the Loop Order",
                        code="console.log('1. Script start');\n\nsetTimeout(() => console.log('5. Macrotask (setTimeout)'), 0);\n\nPromise.resolve().then(() => console.log('3. Microtask 1'));\nPromise.resolve().then(() => console.log('4. Microtask 2'));\n\nconsole.log('2. Script end');",
                        explanation="All microtasks drain immediately before the next macrotask runs.",
                        output="1. Script start\n2. Script end\n3. Microtask 1\n4. Microtask 2\n5. Macrotask (setTimeout)"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Order of Execution",
                description="Predict the output order of sync vs microtask vs macrotask.",
                starter_code="console.log('A');\nsetTimeout(() => console.log('C'), 0);\nPromise.resolve().then(() => console.log('B'));",
                solution="console.log('A');\nsetTimeout(() => console.log('C'), 0);\nPromise.resolve().then(() => console.log('B'));",
                hints=["Sync (A) -> Microtask (B) -> Macrotask (C)."]
            )
        ],
        quiz=[
            make_quiz(
                question="Can the browser render UI changes to the screen while a microtask queue is running?",
                options=[
                    "No, the browser must completely drain the microtask queue before rendering",
                    "Yes, rendering happens in parallel on another thread",
                    "Only on Safari",
                    "Only inside canvas"
                ],
                correct_index=0,
                explanation="UI rendering only occurs between macrotask ticks, after the microtask queue is completely drained."
            )
        ],
        key_takeaways=[
            "The event loop coordinates code execution, events, and rendering.",
            "Microtasks run before rendering and before subsequent macrotasks.",
            "Keep tasks short to avoid blocking UI frame rendering (aim for < 16ms)."
        ],
        tags=["event-loop", "microtasks", "macrotasks", "rendering", "concurrency"]
    ))

    return lessons
