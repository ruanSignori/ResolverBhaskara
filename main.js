const form = document.querySelector('form#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    

    //Receber o valor do input A
    let value_A = event.target.querySelector('input#value-a');
    value_A = Number(value_A.value);
    if (value_A === 0) {value_A = 1}

    //Receber o valor do input B
    let value_B = event.target.querySelector('input#value-b');
    value_B = Number(value_B.value);

    //Receber o valor do input C
    let value_C = event.target.querySelector('input#value-c');
    value_C = Number(value_C.value);

    answer(value_A, value_B, value_C);

});

//Receber os valores e calcular toda a bhaskara
function answer(valueA, valueB, valueC) {
    clearP();

    //Variáveis para guardar e calcular os valores necessários
    const delta = isTheDelta(valueA, valueB, valueC);
    let raiz = Math.sqrt(delta);
    let x1;
    let x2;
    !raiz ? raiz = '∄' : raiz
    if (typeof raiz !== 'number'){
        x1 = (- valueB) / (2 * valueA);
        x2 = (- valueB) / (2 * valueA);
    } else {
        x1 = (- valueB + raiz) / (2 * valueA);
        x2 = (- valueB - raiz) / (2 * valueA);
    }

    //Calcular função de segundo grau
    addAnswer(`A = ${valueA} B = ${valueB} C = ${valueC}`);
    addAnswer(`∆ = (b)² - 4ac`);
    addAnswer(`∆ = (${valueB})² - 4 × (${valueA}) × (${valueC})`);
    addAnswer(`∆ = ${valueB}² - 4 × ${valueA} × ${valueC}`);
    addMore(valueA, valueB, valueC);
    addAnswer(`<strong> ∆ = ${delta} </strong>`)
    addAnswer(`x = <ins>-b ± √∆ </ins><br>2a`);
    addAnswer(`x = <ins> -(${valueB}) ± √(${delta})</ins><br> 2×(${valueA})`);
    addAnswer(`x =  <ins>${-valueB} ± √${delta} <br></ins> 2×${valueA}`)
    addAnswer(`x = <ins> ${-valueB} ± ${raiz} </ins><br> ${2 * valueA}`)

    //Mostrar o x1 e x2
    notInteger(x1,x2)
};

//Adicionar valores para o delta
function addMore(valueA, valueB, valueC) {
    let value = -4 * valueA * valueC;
    if (value >= 0) {
        addAnswer(`∆ = ${valueB ** 2} + ${value}`);
    } else {
        addAnswer(`∆ = ${valueB ** 2} ${value}`);
    }
};

//Salvar o valor de delta
function isTheDelta(valueA, valueB, valueC) {
    let value = -4 * valueA * valueC;
    var delta = valueB ** 2 + value;
    return (delta);
};

//Adicionar um paragrafo dentro da div answer
function addAnswer(msg) {
    let answer = document.querySelector('div#answer');
    let p = document.createElement('p');
    p.classList.add('p-answer');
    answer.style.display = 'block';
    answer.appendChild(p);

    p.innerHTML = `${msg}`;
};

//Limpar a resposta
function clearP() {
    const clear = document.querySelector('div#answer');
    clear.innerHTML = '';
}

//Função para corrigir o resultado final
function notInteger(x1, x2){
    if (Number.isInteger(x1) === false && Number.isInteger(x2) === false){
        addAnswer(`<strong> x¹ = ${x1.toFixed(2)} </strong>`)
        addAnswer(`<strong> x² = ${x2.toFixed(2)} </strong>`)
        return;
    }
    if (Number.isInteger(x1) === true && Number.isInteger(x2) === true){
        addAnswer(`<strong> x¹ = ${x1} </strong>`)
        addAnswer(`<strong> x² = ${x2} </strong>`)
        return;
    }
    if (Number.isInteger(x1) === false){
        addAnswer(`<strong> x¹ = ${x1.toFixed(2)} </strong>`)
        addAnswer(`<strong> x² = ${x2} </strong>`)
        return;
    }
    if (Number.isInteger(x2) === false){
        addAnswer(`<strong> x¹ = ${x1} </strong>`)
        addAnswer(`<strong> x² = ${x2.toFixed(2)} </strong>`)
    }
};
