//  Min and max values function

let arr = [ 4,6,7,7,3,8,9,5,3]

function minmax(arr){
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    console.log(`max:${max} min:${min}`)

}
minmax(arr)
