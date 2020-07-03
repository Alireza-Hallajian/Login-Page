const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');
const { Script } = require('vm');



http.createServer(function (req, res)
{
    if (req.url === "/" && req.method === "GET")
    {
        fs.readFile('public/index.html', function (err, file) 
        {  
          if (err) throw err;
          res.end(file);  
        });
    }
    
    else if (req.url === "/public/style.css" && req.method === "GET")
    {
        fs.readFile('public/style.css', function (err, file) 
        {  
          if (err) throw err;
          res.end(file);  
        });
    }

    else if (req.url === "/public/partials/pic.jpg" && req.method === "GET")
    {
        fs.readFile('public/partials/pic.jpg', function (err, file) 
        {  
          if (err) throw err;
          res.end(file);  
        });
    }

    else if (req.url === "/public/partials/myfont.TTF" && req.method === "GET")
    {
        fs.readFile('public/partials/myfont.TTF', function (err, file) 
        {  
          if (err) throw err;
          res.end(file);  
        });
    }

    else if (req.url === "/public/IndexJavaScript.js" && req.method === "GET")
    {
        fs.readFile('public/IndexJavaScript.js', function (err, file) 
        {  
          if (err) throw err;
          res.end(file);  
        });
    }

    else if (req.url === "/public/jQuery-Uncompressedv3.4.1.js" && req.method === "GET")
    {
        fs.readFile('public/jQuery-Uncompressedv3.4.1.js', function (err, file) 
        {  
          if (err) throw err;
          res.end(file);  
        });
    }

    else if (req.url === "/" && req.method === "POST")
    {
        let body = '';

        //convert recieved data to string
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });


        //parse the recieved data to readable JSON
        let parsedBody;
        
        req.on('end', () => {
            parsedBody = parse(body);

           

            fs.readFile('public/userInfo.json', 'utf8', function (err, data) 
            {  
                let parsedJSONFile = JSON.parse(data);
                

                for (let i = 0; i < parsedJSONFile.length; i++) 
                {    
                    if (parsedJSONFile[i].username === parsedBody.username && 
                        parsedJSONFile[i].password === parsedBody.password)
                    {
                        res.write("<script>alert('Entered Successful!')</script>");
                        res.end("<h1>Entered Successful!</h1>");
                        return console.log('Entered Successful!');
                    }

                    //if 'username' or 'password; didn't math - if i counter arrived to the end
                    //and the condition was not true
                    else if (i === parsedJSONFile.length - 1) { 
                        res.write("<script>alert('There is no user with this information!')</script>");
                        res.end("<h1>There is no user with this information!</h1>");
                        return console.log('There is no user with this information!');
                    }
                }
            });

        });
    }

}).listen(3000);


console.log("server started lisining on port 3000");