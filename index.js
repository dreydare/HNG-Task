// const http = require("node:http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello, World!\n");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// const http = require('http');
// const url = require('url');
// const requestIp = require('request-ip');
// const geoip = require('geoip-lite');
// const axios = require('axios');

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   if (parsedUrl.pathname === '/api/hello') {
//     const visitorName = parsedUrl.query.visitor_name;
//     const clientIp = requestIp.getClientIp(req);
//     const location = geoip.lookup(clientIp);

//     // Replace this with the actual weather API endpoint
//     const weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location.city}&units=metric&appid=YOUR_API_KEY`;

//     axios.get(weatherApiUrl)
//       .then(response => {
//         const temperature = response.data.main.temp;
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({
//           client_ip: clientIp,
//           location: location.city,
//           greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location.city}`
//         }));
//       })
//       .catch(error => {
//         console.error(error);
//         res.writeHead(500, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify({ error: 'Failed to fetch weather data' }));
//       });
//   } else {
//     res.writeHead(404, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify({ error: 'Not found' }));
//   }
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });



// const http = require('http');
// const url = require('url');
// const geoip = require('geoip-lite');
// const httpGet = require('http');

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   if (parsedUrl.pathname === '/api/hello') {
//     const visitorName = parsedUrl.query.visitor_name;

//     // Get client IP address from request headers
//     const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

//     // Using geoip-lite to get location based on IP (assuming IPv4)
//     const location = geoip.lookup(clientIp.replace('::ffff:', ''));

//     // Assuming you have a weather API endpoint that returns JSON
//     const weatherApiUrl = `http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${location.city}`;

//     httpGet.get(weatherApiUrl, (weatherResponse) => {
//       let data = '';
//       weatherResponse.on('data', (chunk) => {
//         data += chunk;
//       });

//       const weatherLocationResponse() => {

//       }
//       weatherResponse.on('end', () => {
//         try {
//           const weatherData = JSON.parse(data);
//           const temperature = weatherData.current.temp_c;
//           res.writeHead(200, {'Content-Type': 'application/json'});
//           res.end(JSON.stringify({
//             client_ip: clientIp,
//             location: location.city,
//             greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location.city}`
//           }));
//         } catch (error) {
//           console.error(error);
//           res.writeHead(500, {'Content-Type': 'application/json'});
//           res.end(JSON.stringify({ error: 'Failed to parse weather data' }));
//         }
//       });

//     }).on('error', (error) => {
//       console.error(error);
//       res.writeHead(500, {'Content-Type': 'application/json'});
//       res.end(JSON.stringify({ error: 'Failed to fetch weather data' }));
//     });

//   } else {
//     res.writeHead(404, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify({ error: 'Not found' }));
//   }
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });


const http = require('http');
const { URL } = require('url');

const server = http.createServer()

server.on("listening", () => console.log("listening on port 8080"))

server.on("request", (req, res) => {
    if (req.method === "GET") {
// code to check query param and send response here
} 
    
    
    res.end("Not found")
		
})


server.listen(8080)