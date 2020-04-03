const fs = require('fs');

const logServer = (action, req) => {

    const itemLog = [{"action_cart": action, "name": req.body.product_name, "data": new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })},];

    fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
        if (err) {

            fs.writeFile('./server/db/stats.json', JSON.stringify(itemLog, null, 4), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Create logFile and add message');
                }
            });

        } else {
            const logList = JSON.parse(data);
            logList.push(itemLog);

            fs.writeFile('./server/db/stats.json', JSON.stringify(logList, null, 4), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Add message logFile');
                }
            });
        }
    });

}

module.exports = logServer;