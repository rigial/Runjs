"""
Part 6: Browser: Document & DOM (11 lessons)
All content completely rewritten from scratch in simple, beginner-friendly English with original runnable examples.
"""

from .helpers import make_lesson, make_section, make_code_example, make_exercise, make_quiz

def get_part6_lessons():
    lessons = []

    # 1. browser-environment
    lessons.append(make_lesson(
        slug="browser-environment",
        title="Browser Environment, Specs & Window",
        description="Understand the browser execution model: the window object, DOM, BOM (navigator, location, history), and CSSOM.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="The Three Pillars of Browser JavaScript",
                paragraphs=[
                    "When JavaScript runs in a web browser, it operates within a host environment provided by the window object.",
                    "The environment is structured into three primary specifications: DOM (Document Object Model), BOM (Browser Object Model), and ECMAScript."
                ],
                code_examples=[
                    make_code_example(
                        title="Inspecting the BOM (Browser Object Model)",
                        code="// Location: current URL information\nconsole.log('Current Protocol:', location.protocol);\nconsole.log('Current Host:', location.host);\n\n// Navigator: platform and browser details\nconsole.log('User Agent:', navigator.userAgent.slice(0, 50) + '...');\n\n// History: navigation history\nconsole.log('History length:', history.length);",
                        explanation="BOM objects expose browser host features like URL routing, user agent, and screen dimensions.",
                        output=""
                    )
                ],
                bullet_points=[
                    "DOM: Represents all page content as live objects that can be modified.",
                    "BOM: Objects representing the browser host environment (navigator, location, history, screen).",
                    "window: The global object that houses both ECMAScript built-ins and host APIs."
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Inspect Browser Location",
                description="Write code that checks if location.href is a string and logs true.",
                starter_code="const isString = typeof location.href === 'string';\nconsole.log(isString);",
                solution="const isString = typeof location.href === 'string';\nconsole.log(isString);",
                hints=["Check typeof location.href === 'string'."]
            )
        ],
        quiz=[
            make_quiz(
                question="Which object represents the live webpage document structure that JavaScript can manipulate?",
                options=[
                    "document (DOM)",
                    "navigator",
                    "history",
                    "screen"
                ],
                correct_index=0,
                explanation="The document object is the root entry point for DOM manipulation."
            )
        ],
        key_takeaways=[
            "The browser provides DOM, BOM, and core ECMAScript APIs.",
            "window is both the global object and the container for browser APIs."
        ],
        tags=["dom", "bom", "window", "browser-environment"]
    ))

    # 2. dom-nodes
    lessons.append(make_lesson(
        slug="dom-nodes",
        title="DOM Tree & Node Types",
        description="Learn how browsers parse HTML into a tree of nodes: elements, text nodes, comment nodes, and the document root.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="The Document Object Model (DOM)",
                paragraphs=[
                    "The DOM represents an HTML document as a hierarchical tree of objects. Every HTML tag is an element node, nested tags are children, and text inside tags becomes text nodes.",
                    "The backbone of the DOM consists of 12 node types, primarily: Element nodes, Text nodes, and Comment nodes."
                ],
                code_examples=[
                    make_code_example(
                        title="Inspecting DOM Nodes",
                        code="// In a webpage with <body><h1>Title</h1></body>:\nconst root = document.documentElement; // <html> tag\nconst body = document.body;            // <body> tag\n\nconsole.log('Root node name:', root.nodeName); // 'HTML'\nconsole.log('Root node type:', root.nodeType); // 1 (Node.ELEMENT_NODE)",
                        explanation="nodeType === 1 identifies element tags like <div>, <p>, and <button>.",
                        output="Root node name: HTML\nRoot node type: 1"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Check Node Type Constant",
                description="Verify that Node.ELEMENT_NODE === 1 and Node.TEXT_NODE === 3. Log both results.",
                starter_code="console.log(Node.ELEMENT_NODE === 1);\nconsole.log(Node.TEXT_NODE === 3);",
                solution="console.log(Node.ELEMENT_NODE === 1);\nconsole.log(Node.TEXT_NODE === 3);",
                hints=["Node.ELEMENT_NODE is 1; Node.TEXT_NODE is 3."]
            )
        ],
        quiz=[
            make_quiz(
                question="What is the numeric nodeType for standard HTML elements (e.g. <div>, <p>)?",
                options=[
                    "1 (Node.ELEMENT_NODE)",
                    "3 (Node.TEXT_NODE)",
                    "8 (Node.COMMENT_NODE)",
                    "9 (Node.DOCUMENT_NODE)"
                ],
                correct_index=0,
                explanation="Element nodes have a nodeType value of 1."
            )
        ],
        key_takeaways=[
            "The DOM is an inverted tree structure representing HTML elements.",
            "Tags are element nodes (type 1); raw text is represented as text nodes (type 3)."
        ],
        tags=["dom", "nodes", "dom-tree", "html"]
    ))

    # 3. dom-navigation
    lessons.append(make_lesson(
        slug="dom-navigation",
        title="Walking the DOM: Parent, Children & Siblings",
        description="Traverse the DOM tree smoothly using parentElement, children, firstElementChild, and nextElementSibling.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Navigating Element Nodes",
                paragraphs=[
                    "There are two sets of navigation properties in the DOM:",
                    "1. All Nodes (includes text whitespace and comments): parentNode, childNodes, firstChild, nextSibling.",
                    "2. Element Only (pure HTML elements, ignoring whitespace): parentElement, children, firstElementChild, nextElementSibling."
                ],
                code_examples=[
                    make_code_example(
                        title="Element-Only Traversal",
                        code="// Suppose a list: <ul id=\"list\"><li>One</li><li>Two</li></ul>\nconst list = document.getElementById('list');\n\nif (list) {\n  const firstLi = list.firstElementChild;\n  console.log('First Li:', firstLi.textContent);\n  \n  const secondLi = firstLi.nextElementSibling;\n  console.log('Second Li:', secondLi?.textContent);\n}",
                        explanation="Element-only properties (children, firstElementChild) skip invisible text nodes and whitespace.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Navigate Siblings",
                description="Write code that retrieves firstElementChild and finds its nextElementSibling.",
                starter_code="const parent = document.createElement('div');\nparent.innerHTML = '<span>A</span><span>B</span>';\n\nconst first = parent.firstElementChild;\nconst second = first.nextElementSibling;\nconsole.log(second.textContent);",
                solution="const parent = document.createElement('div');\nparent.innerHTML = '<span>A</span><span>B</span>';\nconst first = parent.firstElementChild;\nconst second = first.nextElementSibling;\nconsole.log(second.textContent);",
                hints=["first.nextElementSibling retrieves the next sibling element."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why should developers prefer 'children' over 'childNodes' when traversing layout elements?",
                options=[
                    "Because 'children' only includes HTML element nodes, ignoring newline and space text nodes",
                    "Because 'children' is an array with map and filter",
                    "Because childNodes throws errors in Chrome",
                    "There is no difference"
                ],
                correct_index=0,
                explanation="children filters out whitespace and comment nodes, returning only genuine HTML element children."
            )
        ],
        key_takeaways=[
            "Use element navigation properties (parentElement, children, nextElementSibling) to ignore whitespace.",
            "childNodes returns a live NodeList containing all node types."
        ],
        tags=["dom", "traversal", "navigation", "children", "siblings"]
    ))

    # 4. searching-elements-dom
    lessons.append(make_lesson(
        slug="searching-elements-dom",
        title="Searching Elements: querySelector & querySelectorAll",
        description="Master modern CSS selector queries: querySelector, querySelectorAll, getElementById, and closest().",
        difficulty="beginner",
        reading_time=6,
        sections=[
            make_section(
                heading="Modern CSS Selectors in JavaScript",
                paragraphs=[
                    "Finding elements on the page is the first step of interactive web development. Modern JavaScript provides powerful CSS selector search methods:",
                    "1. document.querySelector(cssSelector): Returns the FIRST element matching the CSS selector, or null.",
                    "2. document.querySelectorAll(cssSelector): Returns a static NodeList of ALL matching elements.",
                    "3. elem.closest(cssSelector): Searches UP the ancestor tree for the closest matching ancestor."
                ],
                code_examples=[
                    make_code_example(
                        title="Querying the DOM",
                        code="// Find by class:\nconst submitBtn = document.querySelector('.btn-primary');\n\n// Find all list items inside #nav:\nconst navLinks = document.querySelectorAll('#nav a.active');\n\n// Upward search for closest card container:\n// const card = event.target.closest('.card');",
                        explanation="querySelector accepts any valid CSS selector (classes, IDs, attributes, pseudo-classes).",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Find Active Buttons",
                description="Simulate selecting elements by creating a container with two buttons and querying for button.active.",
                starter_code="const container = document.createElement('div');\ncontainer.innerHTML = '<button>One</button><button class=\"active\">Two</button>';\n\nconst activeBtn = container.querySelector('button.active');\nconsole.log(activeBtn.textContent);",
                solution="const container = document.createElement('div');\ncontainer.innerHTML = '<button>One</button><button class=\"active\">Two</button>';\nconst activeBtn = container.querySelector('button.active');\nconsole.log(activeBtn.textContent);",
                hints=["Use container.querySelector('button.active')."]
            )
        ],
        quiz=[
            make_quiz(
                question="What does document.querySelector() return if no element matches the selector?",
                options=[
                    "null",
                    "undefined",
                    "An empty array []",
                    "Throws a NotFoundError"
                ],
                correct_index=0,
                explanation="querySelector returns null when no matching elements are found."
            )
        ],
        key_takeaways=[
            "querySelector and querySelectorAll are the standard tools for element lookup.",
            "Use closest() to search upwards through ancestor elements.",
            "querySelectorAll returns a static NodeList that can be iterated with forEach."
        ],
        tags=["dom", "querySelector", "selectors", "searching", "closest"]
    ))

    # 5. basic-dom-node-properties
    lessons.append(make_lesson(
        slug="basic-dom-node-properties",
        title="Node Properties: innerHTML, textContent, and hidden",
        description="Inspect and update element contents using innerHTML, textContent (safe against XSS), and the hidden attribute.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="Reading and Writing Content",
                paragraphs=[
                    "Once you have an element, you can read or update its contents:",
                    "1. innerHTML: Reads or inserts HTML markup as text. Warning: Inserting user input via innerHTML creates Cross-Site Scripting (XSS) vulnerabilities.",
                    "2. textContent: Reads or writes plain text only, automatically escaping all HTML tags safely.",
                    "3. hidden: A boolean attribute that hides elements visually (display: none)."
                ],
                code_examples=[
                    make_code_example(
                        title="innerHTML vs textContent",
                        code="const div = document.createElement('div');\n\n// textContent is safe against HTML injection:\ndiv.textContent = '<script>alert(1)</script>';\nconsole.log(div.innerHTML); // &lt;script&gt;alert(1)&lt;/script&gt; (Safely escaped!)\n\n// Toggle visibility with hidden:\ndiv.hidden = true;\nconsole.log('Is hidden:', div.hidden); // true",
                        explanation="Always default to textContent when displaying dynamic user text to prevent XSS attacks.",
                        output="&lt;script&gt;alert(1)&lt;/script&gt;\nIs hidden: true"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Safely Set Text Content",
                description="Create a paragraph element, set its textContent to 'Safe text', and log it.",
                starter_code="const p = document.createElement('p');\np.textContent = 'Safe text';\nconsole.log(p.textContent);",
                solution="const p = document.createElement('p');\np.textContent = 'Safe text';\nconsole.log(p.textContent);",
                hints=["Assign p.textContent = 'Safe text'."]
            )
        ],
        quiz=[
            make_quiz(
                question="Why is textContent preferred over innerHTML for inserting user-submitted data?",
                options=[
                    "Because textContent treats input as plain text, preventing Cross-Site Scripting (XSS) code injection",
                    "Because innerHTML is deprecated in HTML5",
                    "Because textContent is only available in Chrome",
                    "Because textContent runs on a background thread"
                ],
                correct_index=0,
                explanation="textContent automatically escapes HTML characters, preventing malicious scripts from executing."
            )
        ],
        key_takeaways=[
            "Use textContent for safe text insertion.",
            "Use innerHTML only when you explicitly need to render trusted HTML markup.",
            "The hidden boolean property toggles element visibility cleanly."
        ],
        tags=["dom", "innerhtml", "textcontent", "xss", "security"]
    ))

    # 6. dom-attributes-and-properties
    lessons.append(make_lesson(
        slug="dom-attributes-and-properties",
        title="Attributes and Properties: dataset & data-*",
        description="Understand the difference between HTML attributes and DOM properties, and manage custom data-* attributes.",
        difficulty="intermediate",
        reading_time=5,
        sections=[
            make_section(
                heading="Attributes vs Properties",
                paragraphs=[
                    "HTML attributes are written in HTML markup (e.g. <input id=\"user\" type=\"text\" value=\"init\">).",
                    "When the browser parses the HTML, it creates DOM object properties (elem.id, elem.value). Standard properties synchronize with attributes, but non-standard attributes require getAttribute() or the dataset API."
                ],
                code_examples=[
                    make_code_example(
                        title="Using dataset for Custom data-* Attributes",
                        code="// In HTML: <div id=\"order\" data-order-id=\"1042\" data-status=\"shipped\"></div>\nconst div = document.createElement('div');\ndiv.dataset.orderId = '1042';\ndiv.dataset.status = 'shipped';\n\nconsole.log('Order ID:', div.dataset.orderId); // '1042'\nconsole.log('Status:', div.dataset.status);   // 'shipped'\nconsole.log(div.outerHTML);",
                        explanation="data-* attributes map to camelCase keys on the elem.dataset object.",
                        output="Order ID: 1042\nStatus: shipped\n<div data-order-id=\"1042\" data-status=\"shipped\"></div>"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Read a Dataset Attribute",
                description="Create a button element, set dataset.userId = '99', and log button.dataset.userId.",
                starter_code="const btn = document.createElement('button');\nbtn.dataset.userId = '99';\nconsole.log(btn.dataset.userId);",
                solution="const btn = document.createElement('button');\nbtn.dataset.userId = '99';\nconsole.log(btn.dataset.userId);",
                hints=["btn.dataset.userId sets data-user-id."]
            )
        ],
        quiz=[
            make_quiz(
                question="How does HTML attribute 'data-user-role=\"admin\"' appear in JavaScript DOM?",
                options=[
                    "elem.dataset.userRole",
                    "elem.dataUserRole",
                    "elem.getAttributeRole",
                    "elem.userRole"
                ],
                correct_index=0,
                explanation="HTML hyphenated data-* attributes are automatically converted to camelCase on elem.dataset."
            )
        ],
        key_takeaways=[
            "Attributes are in HTML source; properties are in DOM objects.",
            "Use elem.dataset for custom data-* attributes.",
            "Use getAttribute, setAttribute, and hasAttribute for non-standard attributes."
        ],
        tags=["dom", "attributes", "properties", "dataset", "data-attributes"]
    ))

    # 7. modifying-document
    lessons.append(make_lesson(
        slug="modifying-document",
        title="Modifying the Document: append, prepend, remove",
        description="Create elements dynamically with createElement, insert them using append/prepend/before/after, and remove nodes.",
        difficulty="beginner",
        reading_time=6,
        sections=[
            make_section(
                heading="DOM Mutation Methods",
                paragraphs=[
                    "Creating and inserting new elements dynamically is central to modern interactive applications.",
                    "Modern JavaScript provides clean insertion methods:",
                    "1. elem.append(...nodes/strings): Inserts at the end of elem.",
                    "2. elem.prepend(...nodes/strings): Inserts at the beginning of elem.",
                    "3. elem.before(...nodes/strings): Inserts before elem.",
                    "4. elem.after(...nodes/strings): Inserts after elem.",
                    "5. node.remove(): Removes the node from the document."
                ],
                code_examples=[
                    make_code_example(
                        title="Creating and Appending Cards",
                        code="const card = document.createElement('div');\ncard.className = 'card';\n\nconst heading = document.createElement('h3');\nheading.textContent = 'Notification';\n\nconst body = document.createElement('p');\nbody.textContent = 'Your report has generated successfully.';\n\ncard.append(heading, body);\nconsole.log(card.outerHTML);",
                        explanation="append() accepts multiple nodes and strings at once, simplifying DOM assembly.",
                        output="<div class=\"card\"><h3>Notification</h3><p>Your report has generated successfully.</p></div>"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Create and Append a List Item",
                description="Create a <ul> list, append an <li> item with textContent 'Learn DOM', and log list.outerHTML.",
                starter_code="const list = document.createElement('ul');\nconst item = document.createElement('li');\nitem.textContent = 'Learn DOM';\nlist.append(item);\n\nconsole.log(list.outerHTML);",
                solution="const list = document.createElement('ul');\nconst item = document.createElement('li');\nitem.textContent = 'Learn DOM';\nlist.append(item);\nconsole.log(list.outerHTML);",
                hints=["Call list.append(item)."]
            )
        ],
        quiz=[
            make_quiz(
                question="What method removes a DOM node directly from the document?",
                options=[
                    "node.remove()",
                    "node.delete()",
                    "document.destroy(node)",
                    "node.detach()"
                ],
                correct_index=0,
                explanation="node.remove() removes the node from its parent in the DOM."
            )
        ],
        key_takeaways=[
            "Use document.createElement('tag') to create new elements.",
            "Use append(), prepend(), before(), and after() for insertion.",
            "Use node.remove() to cleanly delete elements."
        ],
        tags=["dom", "mutation", "createelement", "append", "remove"]
    ))

    # 8. styles-and-classes
    lessons.append(make_lesson(
        slug="styles-and-classes",
        title="Styles and Classes: classList & style",
        description="Control styles dynamically using classList (add, remove, toggle) and modify inline styles with elem.style.",
        difficulty="beginner",
        reading_time=5,
        sections=[
            make_section(
                heading="classList vs Inline Styles",
                paragraphs=[
                    "There are two primary ways to style DOM elements in JavaScript:",
                    "1. Modifying Classes (Recommended): Best practice is to define CSS classes in stylesheets and toggle them via elem.classList.",
                    "2. Inline Styles: Used for dynamic calculated coordinates, colors, or animations via elem.style."
                ],
                code_examples=[
                    make_code_example(
                        title="classList Methods",
                        code="const button = document.createElement('button');\n\n// Adding and toggling classes:\nbutton.classList.add('btn', 'btn-primary');\nbutton.classList.toggle('active');\n\nconsole.log(button.classList.contains('active')); // true\n\n// Computed inline styles (camelCased!):\nbutton.style.backgroundColor = 'royalblue';\nbutton.style.fontSize = '14px';\n\nconsole.log(button.style.backgroundColor); // 'royalblue'",
                        explanation="CSS properties with hyphens (background-color) become camelCased (backgroundColor) on elem.style.",
                        output="true\nroyalblue"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Toggle an Active Class",
                description="Create a div element and use classList.toggle('open') to add the class. Check with classList.contains('open').",
                starter_code="const div = document.createElement('div');\ndiv.classList.toggle('open');\nconsole.log(div.classList.contains('open'));",
                solution="const div = document.createElement('div');\ndiv.classList.toggle('open');\nconsole.log(div.classList.contains('open'));",
                hints=["div.classList.toggle('open') returns true if added."]
            )
        ],
        quiz=[
            make_quiz(
                question="How is the CSS property 'font-size' written when styling via elem.style in JavaScript?",
                options=[
                    "elem.style.fontSize",
                    "elem.style['font-size']",
                    "elem.style.font_size",
                    "elem.style.sizeFont"
                ],
                correct_index=0,
                explanation="CSS properties with hyphens are camelCased on the style object (e.g. fontSize, backgroundColor)."
            )
        ],
        key_takeaways=[
            "Prefer CSS classes and classList (add, remove, toggle, contains) over inline styles.",
            "elem.style properties are camelCased (e.g. zIndex, marginTop).",
            "Use getComputedStyle(elem) to read resolved CSS values."
        ],
        tags=["dom", "styles", "css", "classlist", "computed-style"]
    ))

    # 9. size-and-scroll
    lessons.append(make_lesson(
        slug="size-and-scroll",
        title="Element Size and Scrolling",
        description="Inspect element metrics: offsetWidth, clientWidth, scrollWidth, scrollTop, and scrollLeft.",
        difficulty="intermediate",
        reading_time=6,
        sections=[
            make_section(
                heading="Element Geometry and Metric Properties",
                paragraphs=[
                    "To build custom scrollbars, sticky headers, or tooltips, you need to measure element dimensions accurately:",
                    "1. offsetWidth / offsetHeight: Full outer size including content, padding, and border.",
                    "2. clientWidth / clientHeight: Inner size including content and padding (excluding border and scrollbar).",
                    "3. scrollWidth / scrollHeight: Total scrollable content size.",
                    "4. scrollTop / scrollLeft: Number of pixels scrolled vertically or horizontally."
                ],
                code_examples=[
                    make_code_example(
                        title="Geometry Metrics",
                        code="// Measuring an element:\nconst box = document.createElement('div');\nbox.style.width = '200px';\nbox.style.padding = '10px';\nbox.style.border = '2px solid black';\n\n// Metric properties provide exact numbers in pixels without 'px' units:",
                        explanation="Metric properties return raw numeric pixel values for fast arithmetic calculation.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Check Scroll Bottom Position",
                description="Write an expression to check if an element is scrolled to the bottom: (scrollHeight - scrollTop === clientHeight).",
                starter_code="function isScrolledToBottom(elem) {\n  return elem.scrollHeight - elem.scrollTop === elem.clientHeight;\n}\n\nconsole.log(typeof isScrolledToBottom === 'function');",
                solution="function isScrolledToBottom(elem) {\n  return elem.scrollHeight - elem.scrollTop === elem.clientHeight;\n}\nconsole.log(typeof isScrolledToBottom === 'function');",
                hints=["Return elem.scrollHeight - elem.scrollTop === elem.clientHeight."]
            )
        ],
        quiz=[
            make_quiz(
                question="Which property gives the height of an element including its content and padding, but excluding its borders and scrollbars?",
                options=[
                    "clientHeight",
                    "offsetHeight",
                    "scrollHeight",
                    "style.height"
                ],
                correct_index=0,
                explanation="clientHeight measures the visible inner viewport height of the element."
            )
        ],
        key_takeaways=[
            "Metric properties return clean numbers in pixels.",
            "offsetWidth/Height include borders; clientWidth/Height exclude borders.",
            "scrollTop is mutable: assigning elem.scrollTop = 0 scrolls to top."
        ],
        tags=["dom", "geometry", "clientheight", "scrolltop", "dimensions"]
    ))

    # 10. size-and-scroll-window
    lessons.append(make_lesson(
        slug="size-and-scroll-window",
        title="Window Sizes and Scrolling",
        description="Measure window viewport width/height, read scroll offsets with window.scrollY, and scroll with window.scrollTo().",
        difficulty="intermediate",
        reading_time=5,
        sections=[
            make_section(
                heading="Window Viewport and Page Scroll",
                paragraphs=[
                    "To read the visible viewport dimensions of the browser window, use document.documentElement.clientWidth and clientHeight.",
                    "To read the current scroll offset, use window.scrollX and window.scrollY (or pageXOffset and pageYOffset).",
                    "To scroll programmatically, call window.scrollTo({ top: 0, behavior: 'smooth' })."
                ],
                code_examples=[
                    make_code_example(
                        title="Programmatic Smooth Scroll",
                        code="// Scroll smoothly to top of page:\nfunction scrollToTop() {\n  window.scrollTo({\n    top: 0,\n    left: 0,\n    behavior: 'smooth'\n  });\n}\n\n// Read current vertical scroll position:\nconsole.log('Scroll Y:', window.scrollY);",
                        explanation="window.scrollTo supports smooth animated scrolling natively.",
                        output="Scroll Y: 0"
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Check Window Scroll Capability",
                description="Write a function that returns { x: window.scrollX, y: window.scrollY }. Test it.",
                starter_code="function getScroll() {\n  return { x: window.scrollX, y: window.scrollY };\n}\n\nconsole.log(getScroll());",
                solution="function getScroll() {\n  return { x: window.scrollX, y: window.scrollY };\n}\nconsole.log(getScroll());",
                hints=["Return { x: window.scrollX, y: window.scrollY }."]
            )
        ],
        quiz=[
            make_quiz(
                question="How do you enable native smooth scrolling when calling window.scrollTo?",
                options=[
                    "Pass options object { top: 0, behavior: 'smooth' }",
                    "Call window.smoothScroll()",
                    "Wrap in a CSS transition",
                    "Use requestAnimationFrame"
                ],
                correct_index=0,
                explanation="Passing behavior: 'smooth' activates browser-native animated scrolling."
            )
        ],
        key_takeaways=[
            "Use document.documentElement.clientHeight for visible browser viewport height.",
            "Use window.scrollY to check current vertical scroll depth.",
            "Use window.scrollTo({ behavior: 'smooth' }) for smooth navigation."
        ],
        tags=["window", "viewport", "scroll", "scrollto", "scrolly"]
    ))

    # 11. coordinates
    lessons.append(make_lesson(
        slug="coordinates",
        title="Coordinates: getBoundingClientRect & Page vs Viewport",
        description="Position tooltips and popups accurately: clientX/clientY (viewport-relative) vs pageX/pageY (document-relative).",
        difficulty="intermediate",
        reading_time=6,
        sections=[
            make_section(
                heading="Window Coordinates vs Document Coordinates",
                paragraphs=[
                    "Positioning elements requires understanding the two coordinate systems:",
                    "1. Viewport Coordinates (client): Relative to the top-left corner of the browser window. Measured via elem.getBoundingClientRect().",
                    "2. Document Coordinates (page): Relative to the top-left corner of the whole page (includes scrolled-away content).",
                    "Formula: pageY = clientY + window.scrollY."
                ],
                code_examples=[
                    make_code_example(
                        title="getBoundingClientRect()",
                        code="const button = document.createElement('button');\ndocument.body.appendChild(button);\n\nconst rect = button.getBoundingClientRect();\nconsole.log('Top:', rect.top);\nconsole.log('Left:', rect.left);\nconsole.log('Width:', rect.width);\nconsole.log('Height:', rect.height);\n\nbutton.remove();",
                        explanation="getBoundingClientRect returns floating-point coordinates and dimensions relative to the visible viewport.",
                        output=""
                    )
                ]
            )
        ],
        exercises=[
            make_exercise(
                title="Calculate Document Y",
                description="Write a function getDocTop(elem) that returns elem.getBoundingClientRect().top + window.scrollY.",
                starter_code="function getDocTop(elem) {\n  return elem.getBoundingClientRect().top + window.scrollY;\n}\n\nconsole.log(typeof getDocTop === 'function');",
                solution="function getDocTop(elem) {\n  return elem.getBoundingClientRect().top + window.scrollY;\n}\nconsole.log(typeof getDocTop === 'function');",
                hints=["Combine getBoundingClientRect().top with window.scrollY."]
            )
        ],
        quiz=[
            make_quiz(
                question="What method returns the size of an element and its position relative to the browser viewport?",
                options=[
                    "elem.getBoundingClientRect()",
                    "elem.getCoordinates()",
                    "elem.getPosition()",
                    "document.locate(elem)"
                ],
                correct_index=0,
                explanation="getBoundingClientRect() returns a DOMRect with top, left, right, bottom, width, and height relative to the viewport."
            )
        ],
        key_takeaways=[
            "Viewport coordinates (client) shift as the page scrolls.",
            "Document coordinates (page) remain constant relative to page origin.",
            "getBoundingClientRect() is essential for positioning tooltips and popovers."
        ],
        tags=["coordinates", "boundingclientrect", "viewport", "tooltips", "positioning"]
    ))

    return lessons
