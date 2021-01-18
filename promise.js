let promise1 = new Promise((resolve, reject) => {
    let response = fetch("friends.json").then((data)=>{return data.json()});
    resolve(response);
});
promise1.then(function(data){
    console.log(data);
}).catch(function(err){
console.log(err);
}).finally(function(){
    console.log('done');
});