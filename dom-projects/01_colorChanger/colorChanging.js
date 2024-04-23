const buttons = document.querySelectorAll('.button');

buttons.forEach(function(button){
    button.addEventListener('click', (event) => {
        if(event.target.id === 'yellow'){
           document.body.style.backgroundColor = "yellow";
        }
        if(event.target.id === 'red'){
            document.body.style.backgroundColor = 'red';
        }
        if(event.target.id === 'green'){
            document.body.style.backgroundColor = 'green';
        }
        if(event.target.id === 'purple'){
            document.body.style.backgroundColor = 'purple';
        }
        if(event.target.id === 'hotpink'){
            document.body.style.backgroundColor = 'hotpink';
        }
    })
})