const inputBox = document.getElementById('input-box');
const buttons = document.querySelectorAll('button');

console.log ("input box--->",inputBox)
let input = '';

buttons.forEach(button => {
    console.log("Button->>>",button)
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'AC') {
            input = ''
        }
        else if (value === 'DEL'){
            input = input.slice(0, -1);
            console.log("input--DEL-->",input)
        } 
        
        else if (value === '='){
            
            input = eval(input) || '';
            console.log("input---12345->",input)
        } 
        else {
            input = input + value;
        }

        inputBox.value = input;
    });
});








