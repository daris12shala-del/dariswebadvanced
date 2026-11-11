var butoni=document.getElementById('btn1')
var butoni2=document.getElementById('btn2')
var butoni3=document.getElementById('btn3')
var teksti=document.getElementById('teskti')
var butoni4=document.getElementById('btn4')


butoni.onclick=function(){

    alert('blerje e suksesshme')
}

butoni.onmouseover=function(){

    alert('pershendetje')
}



butoni.onmouseleave=function(){

    alert('diten e mir')
}

    
butoni.onclick=function(){
  teksti.style.color='red'
  teksti.style.background='grey'
  teksti.style.fontSize='40px'

}


