const fs = require('fs')

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
       });
       req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const msg = parsedBody.split('=')[2];
        console.log("start")
        fs.writeFile('message.txt', msg, (err)=>{
            res.statusCode = 400;
            console.log(err);
            
            return res.end();
        });
        console.log("end");
        
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
    // res.setHeader('Content-Type', 'application/json');
    res.write('<html>');
    res.write('<head><title>Hey my name is Gunjan</title></head>');
    res.write('<div>Hii, good morning</div>')
    res.write('</html>');
    // res.write(JSON.stringify({ msg: 'Hii' }));
    res.end();

}

module.exports = requestHandler;