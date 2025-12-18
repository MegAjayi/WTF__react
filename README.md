The Summary of My reading 

The Complete Introduction to React

React is a JavaScript library for building user interfaces declaratively. It uses a virtual DOM to efficiently update browser interfaces by comparing versions and applying minimal changes. React follows the Unix philosophy of doing one thing well. Developers describe UI outcomes based on state rather than manual DOM manipulation. Components can be created using functions or classes, with function components and hooks being the modern approach. The useState hook manages component state, while useEffect handles side effects. Components receive data through props and can be reused and composed together. React's reconciliation algorithm and component-based architecture make it efficient and maintainable for building dynamic web applications.


JavaScript HTML DOM Document

The DOM provides methods to manipulate HTML elements programmatically. You can change element content using innerHTML, modify attributes and styles, and create or delete elements using createElement and removeChild. Event handlers like onclick enable user interaction. The document object offers properties to access elements like body, forms, and images, plus methods to find and select specific elements throughout the page.

JavaScript HTML DOM Elements


JavaScript provides multiple methods to find HTML elements in the DOM. The easiest is getElementById() which selects elements by their unique ID. You can also use getElementsByTagName() to find all elements with a specific tag like paragraphs or divs. Other methods include finding elements by class name, CSS selectors, or through HTML object collections. These selection methods return element objects that can be manipulated, or null if not found.

React Hooks Cheat Sheet: The 7 Hooks You Need To Know

React Hooks enable function components to manage state and side effects. useState creates and updates state variables. useEffect handles side effects like API calls and DOM manipulation, running after renders based on dependencies. useRef references DOM elements directly. useCallback memoizes callback functions to prevent unnecessary re-renders. useMemo caches expensive computation results. useContext accesses shared data without prop drilling through component trees. useReducer manages complex state using reducer functions, similar to Redux but simpler. These seven hooks provide powerful tools for building React applications, replacing class component lifecycle methods with cleaner, reusable function-based patterns.