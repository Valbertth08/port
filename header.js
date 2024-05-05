window.addEventListener("scroll",function(){
    let header= this.document.querySelector('.header')
    header.classList.toggle('scrol',this.window.scrollY>0)
})
function clickMenu(){
    if( elementos.style.display== 'block'){
        menu.style.display='none';
    }
    else{
        menu.style.display='block';
    }
}
