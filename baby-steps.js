arr=process.argv
i=2
sum=0
while(i<arr.length){
    sum+=parseInt(arr[i]);
    i+=1;
}
console.log(sum)