let string = 'This is my testing string lets try'
// function to count the words 
function wordcount(string){
    string = string.tolowercase();
    const words = string.split('');
    const wordcounts = {};
    for(let i = 0; i<words.length; i++){
        if(wordcounts[words[i]]){
            wordcounts[words[i]]++;
        }
        else{wordcounts[words[i]]=1;
        }
    }
    return new Map(object.entries(wordcounts))

}
// to show the output in console
console.log(wordcount(string))