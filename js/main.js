const totCaselle = 10 * 10;
const squareContainer = document.querySelector(".square");

for (let i = 1; i <= totCaselle; i++) {

    if ( i % 3 === 0 && i % 5 === 0) {
        squareContainer.innerHTML += `<div class="subSquare bgRosso text-center align-center pt-5 m-3 fw-bold fs-5"> fizzbuzz </div>`;
    }  else if ( i % 3 === 0) {
        squareContainer.innerHTML += `<div class="subSquare bgVerde text-center align-center pt-5 m-3 fw-bold fs-5"> fizz</div>`;
    } else if ( i % 5 === 0) {
        squareContainer.innerHTML += `<div class="subSquare bgGiallo text-center align-center pt-5 m-3 fw-bold fs-5"> buzz </div>`;
    } else {
        squareContainer.innerHTML += `<div class="subSquare bgBlu text-center align-center pt-5 m-3 fw-bold fs-5">${i}</div>`;
    }
    

}