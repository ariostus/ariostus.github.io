const testata = document.getElementById('testata')
const hline = document.getElementById('hline')
const lateral1 = document.getElementById('lateral1')
const lateral2 = document.getElementById('lateral2')
const central = document.getElementById('central')
const spanner = document.getElementById('spanner')
const container1 = document.getElementById('container1')
const svgTestata = document.getElementById('svgTestata')
const articlebar = document.getElementById('articlebar')
const info = document.getElementById('info')
const footer_page = document.getElementById('footer_page')
const articleTitles = document.getElementsByClassName('articleTitle')
const title = document.getElementsByTagName('title')[0].innerHTML
const previous_button = document.getElementById('previous')
const next_button = document.getElementById('next')

var extract_num = ''
for(t in title){
    let tmp = parseInt(title[t])
    
    if(isNaN(parseInt(tmp)) == 0){
        // console.log(tmp)
        extract_num += title[t]
        
    }
}
var page_num = parseInt(extract_num)

articleTitles[page_num-1].style.fontWeight = 600
footer_page.innerHTML = 'Pagina ' + extract_num + ' di ' + articleTitles.length

prev_page = page_num - 1
if(page_num == 1){
    prev_page = articleTitles.length
}

next_page = page_num + 1
if(page_num == articleTitles.length){
    next_page = 1
}

newlink0 = 'pagina' + prev_page.toString() + '.html'
newlink1 = 'pagina' + next_page.toString() + '.html'

previous_button.href = newlink0
next_button.href = newlink1


let a = 0;
while(a < articleTitles.length){
    let art = articleTitles[a]
    let parent = art.parentElement
    let b = a+1
    let index = b.toString()
    console.log(index)
    parent.href = 'pagina' + index + '.html'
    a+=1
}







var height = window.innerHeight
var vh = height/100
var topT = vh*20






var topMax = topT
function calculator(self){

    s = self
    if(self >= topMax){
        s = topMax
    }
    let p = (100*s)/topMax
    let per = p/100

    let max1 = 15
    let min1 = 8

    let max2 = 16
    let min2 = 12

    let max3 = 6
    let min3 = 3

    let el1 = max1-min1
    let plus1 = per*el1
    let vhs = max1 - plus1

    let el2 = max2-min2
    let plus2 = per*el2
    let points = max2 - plus2

    let el3 = max3-min3
    let plus3 = per*el3
    let padd = max3-plus3
    
    return [vhs, points, per, plus1, padd]

}




function scroller(){
    var top = document.querySelector('html').scrollTop
    var part = calculator(top)

    // console.log(top, part)



    newH = part[0].toString() + 'vh'
    newP = part[1].toString() + 'pt'
    newPd = part[4].toString() + 'vh'

    container1.style.height = newH
    central.style.height = newH
    
    lateral1.style.fontSize = newP
    lateral2.style.fontSize = newP

    lateral1.style.paddingTop = newPd
    lateral2.style.paddingTop = newPd

    let cur = 20
    let newV = cur - part[3]
    articlebar.style.top = newV.toString() + 'vh'

    

}








window.onscroll = function(){scroller()}