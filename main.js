
// Adding button 
// Adding If or else statement to add or remove class

function customClassName(name) {
    name = name.split("");
    let char = null;
    let idx = null;
    let className
    for (var i = 0; i < name.length; i++) {
        char = name[i];
        idx = i;
        if (char == "-") {
            className = name.slice(0, idx);
            break;
        };
    }
    return className.join('');
}


const boxModelDom = (btnId) => {
    let btn = document.getElementById(btnId);
    let box = document.getElementById(customClassName(btnId) + '-box');
    let text = document.getElementById(customClassName(btnId) + '-text');


    btn.addEventListener('click', () => {
        if(box.classList.contains('gameboard-remove')) {
            text.classList.remove('display-none');
            btn.innerText = `Remove ${customClassName(btnId)}`;
            box.classList.remove("gameboard-remove")
        } else {
            btn.innerText = `Add ${customClassName(btnId)}`;
            box.classList.add('gameboard-remove')
            text.classList.add('display-none');
        }
    })
};

boxModelDom('margin-btn');
boxModelDom('border-btn');
boxModelDom('padding-btn');

(function(){
        let btn = document.getElementById('popUp-btn');
        btn.addEventListener('click', () => {
          
            let popUp = document.getElementById("pop-up");
            popUp.parentNode.removeChild(popUp); 
        })
    })()
