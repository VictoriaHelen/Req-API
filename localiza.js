const https = require('https');
https.get("https://api.hgbrasil.com/geoip?key=8f7a2270&address=remote&precision=false",
(resp) => {
let dados = '';
resp.on('data', (chunk) => { dados += chunk; });
resp.on('end', () => {

console.log(dados);

});
}).on("error", (err) => {
console.log("Error: " + err.message);
});