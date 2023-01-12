const circleNode = document.querySelectorAll('.circl');
console.log(circleNode);
let activeLight = 0;

setInterval(() => {
    changeLight();
}, 1000);

function changeLight(){
    circleNode[activeLight].className = 'circl';
    activeLight++;

    if(activeLight > 2){
        activeLight = 0;
    }

    const currentLigth = circleNode[activeLight];
    currentLigth.classList.add(currentLigth.getAttribute("color"))
}