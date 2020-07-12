const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });


const Infomoney = async () => {
    const NUMBER_OF_CLICKS = 5
    const url = "https://www.infomoney.com.br/ultimas-noticias/"
    await nightmare.goto(url);

    for (let countClicks = 0; countClicks < NUMBER_OF_CLICKS; countClicks++) {
        await nightmare.evaluate(selector => {
            const element = document.querySelector(selector)
            if(element){
                element.scrollIntoView(false);
                element.querySelector('button').click()
            }
            
          }, '#infinite-handle').wait(1000);
    }

    const results = await nightmare.evaluate(() => {
        const searchResults = [];
        const main_content = document.getElementById('infiniteScroll')
        const results = main_content.querySelectorAll('span.hl-title a');
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

module.exports = Infomoney;