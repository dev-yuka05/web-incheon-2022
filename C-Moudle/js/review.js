const get = (element) => {
    return document.querySelector(element)
};

get('.write').addEventListener('click',()=>{
    document.querySelector('.modal').style.display = 'block';
});

get('.modal-close').addEventListener('click',()=>{
    document.querySelector('.modal').style.display = 'none';
});

window.addEventListener('keydown',(element)=>{
    if(element.code == "Escape"){
        document.querySelector('.modal').style.display = 'none';
    }else if(element.code == "KeyP"){
        document.querySelector('.modal').style.display = 'block';
    }
});

document.querySelector('.').addEventListener('click',(e) => {
    console.log(e);
});