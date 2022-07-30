const http = require('http');

http.createServer((req,res)=>{
    res.write("Hi Vijay");
    res.end();
}).listen(9000);
