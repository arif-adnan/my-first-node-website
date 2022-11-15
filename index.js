const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
   if(req.url === '/'){
       const data = fs.readFileSync('home.html', 'utf8');
       res.end(data);
   }
   else if(req.url === '/services'){
       const data = fs.readFileSync('services.html', 'utf8');
       res.end(data);
   }
   else if(req.url === '/industries'){
       const data = fs.readFileSync('industries.html', 'utf8');
       res.end(data);
   }
   else if(req.url === '/case-studies'){
       const data = fs.readFileSync('case-studies.html', 'utf8');
       res.end(data);
   }
   else if(req.url === '/about'){
       const data = fs.readFileSync('about.html', 'utf8');
       res.end(data);
   }
   else if(req.url === '/blog'){
       const data = fs.readFileSync('blog.html', 'utf8');
       res.end(data);
   }
   else if(req.url === '/contact'){
       const data = fs.readFileSync('contact.html', 'utf8');
       res.end(data);
   }
});

server.listen(8080);
console.log("Server run success!");
