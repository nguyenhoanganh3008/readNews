/**
 * Read News Website
 * author : suonran
 * version : 1.0.0
 * date : 12/06/2020
 */
const fetch = require('node-fetch');
const xml2json = require('xml2js');
const { response } = require('express');

 module.exports.Open = function(req,res){
    (async () => {
        const response = await fetch('https://vnexpress.net/rss/tin-moi-nhat.rss');
        // const json = await response.json();

        xml2json.parseString(response, (err, result) => {
            if(err) {
                throw err;
            }
    
            const json = JSON.stringify(result, null, 4);
        
            // log JSON string
            console.log(json);
        });
    
    })();

    res.render('./readNews');
 }