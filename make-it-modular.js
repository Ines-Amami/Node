var mymodules=require('./mymodule');
var directory=process.argv[2];
var extension=process.argv[3];
mymodules(directory,extension,(err,List)=>{
    if(err)return console.error(err);
    List.forEach(file => {
        console.log(file);
        
    });
})