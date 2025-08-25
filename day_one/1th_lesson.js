/* // 1-misol
let x = parseInt(prompt('Nechta son kiritmoqchisiz: '))
let arr = []

for(let i=0; i<x; i++){
    arr.push(prompt(`${i+1} - elementni kiriting: `))
}
console.log(arr)

function get_first(x){
    return x[0]
}
console.log(get_first(arr))
*/


/* // 2-misol
while(true){
    var n = prompt('Uzunlikni kiriting: ')
    if(!isNaN(n) && n.trim() !== ''){
        n = parseInt(n)
        break
    }
    else{
        console.log('Uzunlik raqamda kiritiladi!')
    }
}
let arr = []
for(let i=0; i<n; i++){
    while(true){
        x = prompt(`${i+1} - elementni kiriting: `)
        if(!isNaN(x) && x.trim() !== ''){
            x = parseFloat(x)
            arr.push(x)
            break
        }
        else{
            console.log('Raqam kiriting!')
        }
    }
}
function pair(arr){
    let new_arr = []
    for(let i in arr){
        if(arr[i] % 2 === 0){
            new_arr.push(arr[i])
        }
    }
    return new_arr
}
console.log(pair(arr))
*/


/* // 3-misol
while(true){
    var uzunlik = prompt('Arrayni uzunligini kiriting: ')
    if(!isNaN(uzunlik) && uzunlik.trim() !== ''){
        uzunlik = parseInt(uzunlik)
        break
    }
    else{
        console.log('Uzunlik raqamlarda kiritiladi!')
    }
}
let arr = []
for(let i=0; i<uzunlik; i++){
    while(true){
        let x = prompt(`${i+1} - elementni kiriting: `)
        if(!isNaN(x) && x.trim() !== ''){
            arr.push(x)
            break
        }
        else{
            console.log('Faqat raqam kiriting!')
        }
    }
}
function one_more(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = parseFloat(arr[i]) + 1
    }
    return arr
}
console.log(`Birinchi array: ${arr}`)
console.log(`Ikkinchi array: ${one_more(arr)}`) 
*/

/* // 4-misol
while(true){
    var uzunlik = prompt('Uzunlikni kiriting: ')
    if(!isNaN(uzunlik) && uzunlik.trim() !== ''){
        uzunlik = parseInt(uzunlik)
        break
    }
    else{
        console.log('Uzunlik raqam bilan kiritiladi!')
    }
}
let arr = []
for(let i=0; i<uzunlik; i++){
    while(true){
        let element = prompt(`${i+1} - elementni kiriting: `)
        if(!isNaN(element) && element.trim() !== 0){
            arr.push(element)
            break
        }
        else{
            console.log('Iltimos raqam kiriting')
        }
    }
}
function last_index(arr){
    return arr[arr.length - 1]
}
console.log(`Bizning asosiy massivimiz: ${arr}`)
console.log(`Massivning oxirgi elementi: ${last_index(arr)}`)
*/

// 5-misol
// function get_index(arr, num){
//     for(let i in arr){
//         if(arr[i] == num){
//             return i
//         }
//         else{
//             return -1
//         }
//     }
// }

//6-misol
// function sum_arr(arr){
//     let sum = 0
//     for(let i=0; i<arr.length; i++){
//         sum += Number(arr[i])
//     }
//     return sum
// }



function protsent(x){
    return {
        ilm: x*0.5,
        xarajat: x*0.3,
        kelajak: x*0.2,
    }
}

function interval(son1, son2, arr){
    let new_arr = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] >= son1 && arr[i] <= son2){
            new_arr.push(arr[i])
        }
    }
    return new_arr
}

function exist(arr, num){
    for( let i=0; i<arr.length; i++){
        if(arr[i] === num){
            return true
        }
        else{
            return false
        }
    }
}

function type(arr){
    let arr_type = []
    for(let i=0; i<arr.lenth; i++){
        arr_type.push(typeof(arr[i]))
    }
    return arr_type
}

function cc(arr){
    let sum_j = 0
    let sum_t = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            sum_j += arr[i]
        }
        else{
            sum_t += arr[i]
        }
    }
    console.log(`Just: ${sum_j}, Toq: ${sum_t}`)
}

function del(arr){
    let new_arr = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== ' '){
            new_arr.push(arr[i])
        }
    }
    return new_arr.join('')
}

function get(num, leng, arr = [], i=1){
    if(arr.length === leng) return arr
    arr.push(num * i)
    get(num, leng, arr = [], i+1)
}