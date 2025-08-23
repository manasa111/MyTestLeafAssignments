
//occurance of the letter

let letter = "t"
count = 0
let cName= "testleaf"
length = cName.length
for (i=0;i<length;i++){
    if (cName[i]==letter){
        console.log("Letter found at index " + i)
        count++
        
    }
}
console.log("Total Occurance of letter " + letter + " is " + count)
