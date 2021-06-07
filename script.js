function gerar() {
    let num = document.getElementById('num');
    let tabuadas = document.getElementById('tabuadas');

    if (num.value.length == 0) {
        alert('ERRO Digite um número')
    }
    else {
        let qtd = Number(num.value);

        let html = "";
        for (c = 1; c <= qtd; c++) {
            if (c%2 == 1 ){
                html += "<div class=tabuada1>";

            }
            else {
                html += "<div class=tabuada2>";

            }
            for (n = 1; n <= 10; n++) {
                html += `${c} X ${n} = ${c * n}<br>`;
            }
            html += "</div>";
        }
        tabuadas.innerHTML = html;
    }
}