var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const url = req.url;
    console.log(url)
    if (url == '/welcome') {

        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.write('Welcome to Dominos!')
        res.end()
    } else if (url == '/contact') {

        res.writeHead(200, { 'Content-type': 'application/json ' })
        let data={
            "phone": '18602100000',
            "email": 'guestcaredominos@jublfood.com'
        }
        res.write(JSON.stringify(data))
       res.end()
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }

}



httpServer.listen(8081, () => {
    console.log('shhs')
})

// module.exports = httpServer;

