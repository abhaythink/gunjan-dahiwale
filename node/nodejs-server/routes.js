const { log } = require('console');
const fs = require('fs')
const path = require('path')
const os = require('os')

const pathFile = path.join(__dirname + "message.txt");
console.log(pathFile);
console.log(path.basename(pathFile));
console.log(path.dirname(pathFile));

console.log('CPU Architecture',os.arch());
console.log('Host name',os.hostname());
console.log('Machine type', os.machine());
console.log('Os platform', os.platform());
console.log('Total memory', os.totalmem());
console.log('Free mem', os.freemem());


const requestHandler = (req, res) => {
    // console.log(req.url, req.headers, req.method);
    // res.setHeader('Content-Type', 'text/html');
    // const url = require('url')
    const method = req.method;
    
    if(req.url === '/message' && method == 'POST')
    {
       const body = [];
       req.on('data',(chunk) => {
        console.log(chunk);
        body.push(chunk);
        console.log(body);
        
        // console.log("data");
        
       });
       
       req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const msg = parsedBody.split('=')[1];
        console.log("start")
        fs.writeFileSync('message.txt', msg, (err)=>{
            res.statusCode = 400;
            console.log(err);
            
            return res.end();
        });
        console.log("end");
        
        const data = fs.readFileSync('message.txt', 'utf8');
        console.log('File Content:', data);
       })  
       return res.end();  
    }
    if (req.url === '/message') {
        res.write('<html>')
        res.write('<head><title>This is nodejs</title></head>')
        res.write('<body><form method="POST" action="/message"><input type="text" name="message"><button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
     console.log(res.getHeader('Content-Type'));
    res.setHeader('Content-Type', 'application/json');
    console.log(res.getHeader('Content-Type'));
    res.write('<html>');
    res.write('<head><title>Hey my name is Gunjan</title></head>');
    res.write('<div>Hii, good morning</div>')
    res.write('</html>');
    // res.write(JSON.stringify({ msg: 'Hii' }));
    res.end();

}

module.exports = requestHandler;