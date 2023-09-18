let kmInput = document.querySelector('#kilometer > input');
let miInput = document.querySelector('#miles > input');
let feInput = document.querySelector('#feet > input');

let btn = document.querySelector('.button button');

function roundNumber(number){
    return Math.round(number*100)/100;
};

/* km to miles and feet */
kmInput.addEventListener('input', function(){
    let kmDist = parseFloat(kmInput.value);
    let miDist = kmDist*0.621371192;
    let feDist = kmDist*3280.839895;

    miInput.value = roundNumber(miDist);
    feInput.value = roundNumber(feDist);

});

/* miles to feet and km */
miInput.addEventListener('input', function(){
    let miDist = parseFloat(miInput.value);
    let feDist = miDist*5280;
    let kmDist = miDist*1.609;

    feInput.value = roundNumber(feDist);
    kmInput.value = roundNumber(kmDist);
})

/* feet to miles and km */
feInput.addEventListener('input', function(){
    let feDist = parseFloat(feInput.value);
    let miDist = feDist/5280;
    let kmDist = feDist/3280.8399;

    miInput.value = roundNumber(miDist);
    kmInput.value = roundNumber(kmDist);
})

btn.addEventListener('click', ()=>{
    kmInput.value = "";
    miInput.value = "";
    feInput.value = "";
});