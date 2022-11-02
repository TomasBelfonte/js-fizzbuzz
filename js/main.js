const totCaselle = 10 * 10;
const squareContainer = document.querySelector(".square");

for (let i = 1; i <= totCaselle; i++) {
    squareContainer.innerHTML += `<div class="subSquare bgBlu text-center align-center pt-5 m-3 fw-bold fs-5">${i}</div>`;

    if ( i % 3 == 0) {
        squareContainer.innerHTML += `<div class="subSquare bgVerde text-center align-center pt-5 m-3 fw-bold fs-5">${i}</div>`;
    }  
    

}