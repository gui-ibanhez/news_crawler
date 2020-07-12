const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });

const Moneytimes = async () => {
    const url = "https://www.moneytimes.com.br/ultimas-noticias/"
    await nightmare.goto(url);

    let currentHeight = 0;
    while (currentHeight < 30000) {
        currentHeight = await nightmare.evaluate(() => {
            return document.body.scrollHeight;
        });
        await nightmare.scrollTo(currentHeight, 0).wait(1000);
    }

    const results = await nightmare.evaluate(() => {
        const searchResults = [];
        const main_content = document.getElementsByTagName('main')[0]
        const results = main_content.querySelectorAll('h2 a');
        results.forEach((result) => {
            if (result.hasAttribute('href') && result.href !== "#") {
                let row = {
                    'title': result.innerText,
                    'url': result.href
                }
                searchResults.push(row);
            }
        })
        return searchResults;
    })
    await nightmare.end()
    return results;
};

module.exports = Moneytimes;