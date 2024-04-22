// creating elements using functions
function creatingElements(routineList){
    const ul = document.createElement('ul');
    routineList.map((listItem, index) => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${listItem}`));
        if(index === 2){
            // li.style.backgroundColor = "#f3f3f3";
            // li.style.color = '#00ff00';
            // li.style.listStyle = 'circle';
        }
        ul.appendChild(li);
        
    })
    document.querySelector('.daily-routine').appendChild(ul);
}

creatingElements(['Coding', 'Interview Question Practice', 'Speaking', 'Project']);

//editing any element
const thirdElement = document.querySelector('li:nth-child(3)');
// console.log(thirdElement);
// one way
// thirdElement.textContent = "Listening";

//optimized way
const newThirdElement = document.createElement('li');
newThirdElement.appendChild(document.createTextNode('Listening'));
// thirdElement.replaceWith(newThirdElement);

// using outerHTML
// thirdElement.outerHTML = `<li>Listening</li>`;

//removing any element
thirdElement.remove();