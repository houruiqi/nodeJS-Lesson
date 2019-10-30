const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const cheerio = require("cheerio");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    switch(pathName){
        case '/':
            showIndex(res);
            break;
        case '/getspider':
            showSpider(res);
            break;

    }
}).listen(8082);
console.log("server is listening 8081");
function showIndex(res){
    var indexPath = path.join(__dirname,"index.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Tyoe":"text/html"});
    res.write(fileContent);
    res.end();
}
function showSpider(res){
    res.on("end",() => {
        var $ = cheerio.load(result);
        var movieList = [];
        $(".movie-item-title-a").each(function(){
            var movie = {};
            movie.movieId = $(this).attr("data-val").slice();//
            movie.movieName = $(this).text();
        })
    })
}