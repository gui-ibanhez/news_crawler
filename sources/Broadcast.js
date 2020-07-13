const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });

const Broadcast = async () => {
    const NUMBER_OF_CLICKS = 5
    const url = "http://www.broadcast.com.br/"
    await nightmare.goto(url)

    for (let countClicks = 0; countClicks < NUMBER_OF_CLICKS; countClicks++) {
        await nightmare.evaluate(selector => {
            const element = document.querySelector(selector)
            if(element){
                element.scrollIntoView(false);
                element.querySelector('button').click()
            }
            
          }, '.carrega-mais').wait(1000);
    }

    const results = await nightmare.evaluate(() => {
        let searchResults = [];

        const results = document.querySelectorAll('div.materia a');
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

module.exports = Broadcast;