const HTMLParser = require('node-html-parser');
const fetch = require('node-fetch');

const Valor = async () => {
    const url = "https://valor.globo.com/";
    const resp = await fetch(url);
    const data = await resp.text()

    const main_content = HTMLParser.parse(data).querySelector('main')
    const results = main_content.querySelectorAll('a');

    const parsedData = results.map((result) => {
        let title = result.structuredText;
        let attrs = result.rawAttrs;
        return {
            'title': title,
            'url': attrs.slice(0, attrs.indexOf(' '))
        };
    });
    const searchResults = parsedData.filter(data => {
        return(data.title != '' && data.url.endsWith('ghtml"'))
    })

    //return results;
    return searchResults;
};

module.exports = Valor;