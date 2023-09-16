const getValue = document.querySelector(".value");

function decrement(){
    let intValue = parseInt(getValue.textContent);
    intValue -= 1;
    getValue.textContent = intValue; 
}


function increment(){
    let intValue2 = parseInt(getValue.textContent);
    intValue2 += 1;
    getValue.textContent = intValue2; 
}

