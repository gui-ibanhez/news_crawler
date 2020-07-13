const  HTMLParser  = require('node-html-parser');
const fetch = require('node-fetch');

const Exame = async () => {
    const url = "https://exame.com/";
    const resp = await fetch(url);
    const data = await resp.text()
    
   let searchResults = [];

    const main_content = HTMLParser.parse(data).querySelector('body')
    const results =  main_content.querySelectorAll('.widget-home-box-list-item-title a');

    results.forEach((result) => {
        let title = result.structuredText
        let row = { 
            'title':title,
            'url':result.getAttribute('href')
        }
    searchResults.push(row);
    })

    //return results;
    return searchResults;
};

module.exports = Exame;