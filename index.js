const http = require('http');
const fs = require('fs');



// create server and req and res pages
const server = http.createServer(function(req,res){
   
   if(req.url == "/"){
    res.write("This is the Home Page");
    res.end();
   }
   if(req.url == "/about"){
    res.write("This is the About Page");
    res.end();
   }
   if(req.url == "/contact"){
    res.write("This is the Contact Page");
    res.end();
   }
   if (req.url == '/file-write') {
    // File Write Operation
    fs.writeFile('demo.txt', 'hello world', (err) => {
        if (err) {
            res.write('Failed to write to file.');
        } else {
            res.write('File written successfully.');
        }
        res.end();
    });
}
});


// server port listen
server.listen(5500,function(){
    console.log("Listening on port 5500 ");
});