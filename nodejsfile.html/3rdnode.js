
console.log(" Good morning");
const http=require("http");
const fs=require("fs");

const filecontent=fs.readFileSync("1stfile.js");

 const server=http.createServer((req,res) =>{
    res.writeHead(200,{"content-type":"text/js"});
    res.end(filecontent)
 })
 server.listen(80,"127.0.0.1",()=>{
    console.log(" listening at port 80");
 })
