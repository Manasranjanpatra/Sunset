// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World   manas');
res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table,tr,th{
            text-align:center;
            border:5px solid black;
            border-collapse:collapse;
            padding:70px;
            background-color: wheat;
        }
        p{
            color:blue;
            text-align: center;
        }
        @media all and (width:844px){
            body{
                flex-wrap: wrap;
            }
        }
    </style>
</head>
<body>
    <p>manas rajan patra finally workn in  is ok or not for me</p>
    <table>
<tr>
    <th>Table 1</th>
    <th>Table 2</th>
    <th>Table 3</th>
    <th>Table 4</th>
  </tr>
    </table>
</body>
</html> `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
