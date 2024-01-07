var menu = document.getElementById('menu')


all_links = ['../numero1/pagina1.html', '../index.html', '../all.html']
all_icons = ['full_coverage', 'alternate_email', 'newsstand']

//LINKERS
for(l in all_links){
    let curr_link = all_links[l]
    let curr_icon = all_icons[l]

    let div0 = document.createElement('div')
    div0.classList.add('ycon')
    div0.id = 'menu' + l.toString()

    let href0 = document.createElement('a')
    href0.href = curr_link

    let span0 = document.createElement('span')
    span0.classList.add('material-symbols-outlined')
    span0.innerHTML = curr_icon

    div0.appendChild(span0)
    href0.appendChild(div0)
    menu.appendChild(href0)

}

// SPECIAL ONE
var div1 = document.createElement('div')
div1.classList.add('ycon')
div1.id = 'menuM'



span1 = document.createElement('span')
span1.id = 'icon0'
span1.classList.add('material-symbols-outlined')
span1.innerHTML = 'expand_circle_up'


div1.appendChild(span1)
menu.appendChild(div1)






////////////////////////////////////////////////////////////////
menuM.style.opacity = 1
menuM.style.display = 'block'

var expanded = 0

var menu = document.getElementById('menu')
const menu0 = document.getElementById('menu0')
const menu1 = document.getElementById('menu1')
const menu2 = document.getElementById('menu2')
const icon0 = document.getElementById('icon0')






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
