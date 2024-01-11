let string = ''
let input = document.querySelector('input')
let buttons = document.querySelectorAll('.btn')

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', function(data){ 
        if(data.target.innerHTML == '='){
            string = eval(string)
            input.value = string
        } else if(data.target.innerHTML == 'C'){
            string = '';
            input.value = string
        } else{      
        string = string + data.target.innerHTML
        input.value = string
}})
})