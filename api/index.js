const server = require("./src/app");
const { sequelize } = require("./src/db");



    server.listen(3001, () => {
        sequelize.sync({force: true});
        console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
 