var btn = document.querySelectorAll(`button`)
var scr = document.getElementById(`scr`)
var del = document.getElementById(`del`)

var string = ""
let arr = Array.from(btn)

arr.forEach(btn => {
    btn.addEventListener(`click`, (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            scr.value = string;
        }
        else if (e.target.innerHTML == `fa-solid fa-delete-left`)
         {
           string = string.slice(0,length-1)    
           scr.value = string
        }else if (e.target.value == `DEL`)
        {
          string = string.slice(0,length-1)    
          scr.value = string
       }
         else if (e.target.innerHTML == `AC`)
        {
            string = ``
            scr.value = string
        }

        else 
        {
            string += e.target.innerHTML;
            scr.value = string;
        }

    })
})
