const get = (element) => {
    return document.querySelector(element)
};

get('.write').addEventListener('click',()=>{
    document.querySelector('.modal').style.display = 'block';
});

get('.modal-close').addEventListener('click',()=>{
    document.querySelector('.modal').style.display = 'none';
});