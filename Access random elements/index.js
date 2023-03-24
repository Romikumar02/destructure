let arr = [ 2,4,6,7,5]
function extractelements(arr){
    const [one,two,...rest] =arr;
    return [one,two,rest.pop()]
}
console.log(extractelements(arr));