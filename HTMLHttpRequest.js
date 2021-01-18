let req = new XMLHttpRequest();
req.open('GET','friends.json');      //prepare request
req.send();
req.onreadystatechange = function(){
    if(req.readyState === 4 && req.status === 200){
        var data = JSON.parse(req.responseText);
        console.log(data);
    }
}


// if you want to send data using GET method
// Syntax:-
// req.open('METHOD','URL','TRUE/FALSE')        code works synchronously when false
// req.open('GET','friends.json?id=10&&age=18')
// req.send()


// if you want to send data using POST method
// req.open('POST','friends.json')
// req.send("id=10&&age=18")