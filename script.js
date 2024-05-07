const viewBox = document.querySelector('.game .display .view .box');
const exampleBox = document.querySelector('.game .display .example .box');
const point = document.querySelector('.game .display .point');
const btn = document.querySelectorAll('.marketing .container .btn');
const control = document.querySelector('.marketing');
const descr = document.querySelector('.marketing .descr');
const button = document.querySelector('.marketing .descr button');


let audio = new Audio('song1.mp3');




button.onclick = () => {
    descr.style.left = "150%";
};

btn[0].onclick = () => {
    control.style.marginLeft = '100%';
    audio.currentTime = 1
    audio.play();
    audio.volume = .5;
    audio.onended = () => audio.play();
};
btn[2].onclick = () => close();
btn[1].onclick = () => {
    descr.style.left = "50%";
};

let room = 0;
editor.oninput = () => {
    let val = editor.value;
    exampleBox.style = val;
    if (room == 0) {
        if (val.includes('width: 200px;') &&
            val.includes('height: 200px;') &&
            val.includes('background-color: red;')
        ) {
            Control('width: 250px; background-color: green;');
        }

    }
    else if (room == 1) {
        if (val.includes('width: 250px;') &&
            val.includes('height: 200px;') &&
            val.includes('background-color: green;')
        ) {
            Control('width: 200px; background-color: orange; border-radius: 50%;');
        }
    }
    else if (room == 2) {
        if (val.includes('width: 200px;') &&
            val.includes('height: 200px;') &&
            val.includes('background-color: orange;') &&
            val.includes('border-radius: 50%;')
        ) {
            Control('width: 0;height: 0;  border-left: 100px solid transparent;  border-bottom: 100px solid red; clip-path: polygon(50% 0%, 100% 100%, 0% 100%);');
        }
    }
    else if (room == 3) {
        if (val.includes('width: 0;') &&
            val.includes('height: 0;') &&
            val.includes('border-left: 50px solid transparent;') &&
            val.includes('border-right: 50px solid transparent;') &&
            val.includes('border-bottom: 100px solid blue;')
        ) {
            Control();
        }
    }
}
const Control = x => {
    room++;
    point.innerHTML = room + '</br>Point';
    editor.style.color = 'green';
    exampleBox.style = null;
    viewBox.style = x;
    if (room == 4) {
        winner.style.opacity = 1;
        editor.style.pointerEvents = 'none';
    }
    setTimeout(() => {
        editor.style.color = null;
        editor.value = '';
    }, 1000);
}


// "width: 0;height: 0;  border-left: 100px solid transparent;  border-bottom: 100px solid red; clip-path: polygon(50% 0%, 100% 100%, 0% 100%)"


//  height: 200px;
//  width: 250px;
//  background-color: green

// width: 200px;
// height: 200px;
// background-color: orange;
// border-radius: 50%;

// width: 0;
//   height: 0;
//   border-left: 50px solid transparent;
//   border-right: 50px solid transparent;
//   border-bottom: 100px solid blue;