function Soma(){
    var n1 = document.getElementById('txtnumero1').value; /* read first field number 1 */
    var n2 = document.getElementById('txtnumero2').value; /* read second field number 2 */
    var resultado = parseInt(n1) + parseInt(n2); /* Result display field and sum up two numbers */
    document.getElementById('txtresultado').value = resultado; /* display result*/

    return
}

function Subtrai(){
    var n1 = document.getElementById('txtnumero1').value; /* read first field number 1 */
    var n2 = document.getElementById('txtnumero2').value; /* read second field number 2 */
    var resultado = parseInt(n1) - parseInt(n2); /* Result display field and subtract two numbers */
    document.getElementById('txtresultado').value = resultado; /* display result*/

    return
}

function Multiplica(){
    var n1 = document.getElementById('txtnumero1').value; /* read first field number 1 */
    var n2 = document.getElementById('txtnumero2').value; /* read second field number 2 */
    var resultado = parseInt(n1) * parseInt(n2); /* Result display field and multiply two numbers */
    document.getElementById('txtresultado').value = resultado; /* display result*/

    return
}


function Divide(){
    var n1 = document.getElementById('txtnumero1').value; /* read first field number 1 */
    var n2 = document.getElementById('txtnumero2').value; /* read second field number 2 */
    var resultado = parseInt(n1) / parseInt(n2); /* Result display field and divide two numbers */
    document.getElementById('txtresultado').value = resultado; /* display result*/

    return
}
