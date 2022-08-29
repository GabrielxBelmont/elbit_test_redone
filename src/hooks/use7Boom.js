import * as React from 'react';



/**
 * Hook para contagem de tempo semelhante a setInteval
 * @param callback função a ser execultada a cada intervalo de tempo
 * @param time tempo dos intervalos em milisegundos
*/
function use7Boom(
    initialNumber = 0
){

    const [boom, setBoom] = React.useState([])
    const [current, setCurrent] = React.useState(1)
    function sequence(num) {
        let arr = []
        for(let i = initialNumber; i <= num; i++) {
            arr.push(i)
            if (checkBoom(arr[i])){
                arr.pop()
                arr.push(-1)
            }

        }
        setCurrent(num)
        setBoom(arr)
    }

    function add1 () {
        console.log("adding")
        sequence(current + 1)
    }
    function checkBoom(current) {
        if (current % 7 == 0 || (current + '').endsWith('7')) return true
      }

    return { initialNumber, boom, sequence, add1, current, checkBoom }

}


export default use7Boom;