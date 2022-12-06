function tabuada() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        
        res.innerText = ''
     
        for(let c=1 ; c<=10; c++) {
            let calc = `${n} x ${c} = ${n*c}`

            let resultado = document.createElement('p')
           
            resultado.innerText = calc
           
            res.appendChild(resultado)

        }
         
}}

 