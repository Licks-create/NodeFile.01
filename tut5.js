f=[1,2,3,4].map((x)=>x%2==0)
// console.log(f);
// s=[{tital:"vivek1",key:"ojha1"},{tital:"vivek2",key:"ojha2"}]
// passing destructured object as argument
// cb=({tital,key})=>console.log(tital,key)
// cb(s[0])

// console.log(s.map(object=>({['foo']:object.key})));
// console.log(s.map(({tital,key})=>({['foo']:tital,['naam']:key})));
// // use paranthesis ()for returning object in arrow
// // to pass direct objects property use {} and pass proparties through this if you dont want to use dot op like below
// console.log(s.map((tital)=>{return {['foo']:tital.key}}));

// child1.addEventListener('click',()=>{
//     console.log(this)
// })

// document.getElementById("child2").addEventListener("click",fun);
// function fun(e)
// {
//     console.log(e.target.nodeName,this)
// }
// module.exports=s;

const http=require("http")
const fs=require("fs");
// const url  = require("inspector");
const hostname= '0.0.0.0';
const port=3000;
const home=fs.readFileSync("index.html")
const about=fs.readFileSync("about.html")
const contact=fs.readFileSync("contact.html")
const services=fs.readFileSync("services.html")
const server=http.createServer((req,res)=>{
    console.log(req.url);
    
    res.statusCode=404;
    res.setHeader("Content-Type","text/html")
    if(req.url=='/index.html'||req.url=='/')
    res.end(home)
    else if(req.url=='/contact.html')
   {res.end(contact)
    console.log(req.url)}
    else if(req.url=='/services.html')
   res.end(services)
    else if(req.url=='/about.html')
   res.end(about)
   else
     res.end("<h1>404 not found</h1>")
})
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})