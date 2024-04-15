//console.log(window)
//output: it will display/print the window object properties.
//console.log(window.document)
//output: will display/print the page content.
//imp: window.document == document. both generate same output.
//console.dir(document)
//output: will display the hidden properties too.
//console.log(document.baseURI)
//console.log(document.links);

// DOM Selectors
/**
 * 01.selectors are methods followed by parenthesis. This method requires a parameter to understand which element to target.
 * 02. class == className. behind the scene, in DOM, class is portrayed as className. 
 * 03. setAttribute('class', 'class list using space'). If we set one class, it will override the existing class. so include the existing class while setting attribute.
 * 04. //imp: document.getElementById('').textContent vd document.getElementById('').innerText : innerText provides the visible text/content whereas textContent returns hidden content.
 * 
 * 05. innerHTML: innerHTML provides the whole content including inner tags, styles.
 * 
 * 06. document.querySelector(''): to get element using class use dot(.) followed by the class name and to get element using id, use hash(#) followed by the id name. It supports all css selectors.
 * 
 * 07. querySelector vs querySelectorAll: querySelector selects one element whereas querySelectorAll gives a nodeList[] with all the available elements. You can manipulate directly the element that is taken by querySelector. In querySelectorAll, you have access the element using index.
 * 
 * 07. nodeList vs HTMLCollection: they are not pure array list. In nodeList,  forEach is accessible but in HTMLCollection, there is no way to loop the collection.
 */

//todo: 01. querySelector vs querySelectorAll 
//todo: 02. querySelector vs getElementById. why using querySelector is preferable instead of getElementById
//todo: 03. querySelectorAll vs getElementsByClassName
//todo: 04. nodeList vs HTMLCollection
//todo: 05. static nodeList vs live nodeList


// Creating new elements and node traversal
/**
 * 01. childNodes is a complex tree of DOM. line breaks is also part of child nodes. they are text nodes. Browser takes one line break at a time. 
 */

