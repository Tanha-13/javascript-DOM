//console.log(window)
//output: it will display/print the window object properties.
//console.log(window.document)
//output: will display/print the page content.
//imp: window.document == document. both generate same output.
//console.dir(document)
//output: will display the hidden properties too.
//console.log(document.baseURI)
//console.log(document.links);

// DOM
/**
 * The Document Object Model(DOM) is a programming interface for HTML and XML documents. It defines the logical structure of documents. IT is basically the representation of the same HTML document but in a tree like structure composed of objects. 
 * 
 * "The W3C Document Object Model is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."
 * The W3C DOM standard is separated into 3 different parts:
 *  i. Core DOM: standard model for all document types
 *  ii. XML DOM: standard model for XML documents
 * iii. HTML DOM: The HTML DOM is a standard object model and programming interface for HTML(web documents) documents. In other words, the HTML DOM is a standard for how to get, change, add or delete HTML elements. It allows JavaScript to access and modify all the elements in an HTML document. HTML DOM is a way to represent the webpage in a structured hierarchical way so that it will become easier for programmers and users to glide through the document. We can easily access and manipulate tags, IDs, classes, attributes, or elements of HTML using commands or methods provided by the document object.
 * 
 * question: What is HTML DOM?
 * question: why DOM is required?
 * i. dynamic interactivity: JS interacts with HTML elements and manipulate using the DOM.
 * ii. client-side scripting
 * iii. cross-browser compatibility
 * iv. accessibility
 * v. dynamic content loading
 * 
 * todo: properties of a DOM (window, document)
 * 
 */

// DOM Selectors or methods(actions)
/**
 * 01.selectors are methods followed by parenthesis. This method requires a parameter to understand which element to target.
 * 02. class == className. behind the scene, in DOM, class is portrayed as className. 
 * 03. setAttribute('class', 'class list using space'). If we set one class, it will override the existing class. so include the existing class while setting attribute.
 * 04. // imp: document.getElementById('').textContent vd document.getElementById('').innerText : innerText provides the visible text/content whereas textContent returns hidden content.
 * 
 * 05. innerHTML: innerHTML provides the whole content including inner tags, styles.
 * 
 * 06. document.querySelector(''): to get element using class use dot(.) followed by the class name and to get element using id, use hash(#) followed by the id name. It supports all css selectors.
 * 
 * 07. querySelector vs querySelectorAll: querySelector selects one element whereas querySelectorAll gives a nodeList[] with all the available elements. You can manipulate directly the element that is taken by querySelector. In querySelectorAll, you have access the element using index.
 * 
 * 07. nodeList vs HTMLCollection: they are not pure array list. In nodeList,  forEach is accessible but in HTMLCollection, there is no way to loop the collection.
 * 
 * 
 * 
 * 
 */

// todo: 01. querySelector vs querySelectorAll 
//todo: 02. querySelector vs getElementById. why using querySelector is preferable instead of getElementById
//todo: 03. querySelectorAll vs getElementsByClassName
//todo: 04. nodeList vs HTMLCollection
//todo: 05. static nodeList vs live nodeList


// Creating new elements and node traversal
/**
 * 01. childNodes is a complex tree of DOM. line breaks is also part of child nodes. they are text nodes. Browser takes one line break at a time. 
 * 
 * 02. //info: className and id overrides existing value. First, it collects the existing value, then overrides. but setAttribute() method directly overrides the existing one. So it saves one round.
 * 
 * 03. innerText also does the same as className and id. use createTextNode instead of innerText.
 */

