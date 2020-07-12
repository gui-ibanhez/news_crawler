const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });

const Exame = async () => {
    const url = "https://exame.com/"
    await nightmare.goto(url)

    const results = await nightmare.evaluate(() => {
        let searchResults = [];

        const results = document.querySelectorAll('.widget-home-box-list-item-title a');
        results.forEach(function (result) {
            if (result.hasAttribute('href') && result.className !== 'continuar') {
                let row = {
                    'title': result.textContent.trim(),
                    'url': result.href
                }
                searchResults.push(row);
            }
        });
        return searchResults;
    })
    await nightmare.end()

    return results;
};

module.exports = Exame;