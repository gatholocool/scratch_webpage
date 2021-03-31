function createParagraph(){

    let para = document.createElement('p');
    para.textContent='You clicked the button';
    document.body.appendChild(para);
}

const button = document.querySelectorAll('button');

for (let i = 0 ; i < button.length; i++){
    button[i].addEventListener('click', createParagraph);
   
}