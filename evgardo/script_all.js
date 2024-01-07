const expander = document.getElementById('menuM')
const menu = document.getElementById('menu')
const menu0 = document.getElementById('menu0')
const menu1 = document.getElementById('menu1')
const menu2 = document.getElementById('menu2')
const icon0 = document.getElementById('icon0')

var expanded = 0



menuM.style.opacity = 1
menuM.style.display = 'block'












function reduce(){
    // console.log('reduce')

    icon0.innerHTML = 'expand_circle_up';
    menu0.style.display = 'none';
    menu1.style.display = 'none';
    menu2.style.display = 'none';

    
    expanded = 0
    
    }

function expand(){
    
    // console.log('expand')

    icon0.innerHTML = 'expand_circle_down';
    menu0.style.display = 'block';
    menu1.style.display = 'block';
    menu2.style.display = 'block';

    expanded = 1
}


menuM.onclick = function(){
    if(expanded){
        reduce()
    }
    else{
        expand()
    }
}

