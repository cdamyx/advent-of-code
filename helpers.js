module.exports = {
    data: (input) => {
        const fs = require("fs");
        return fs.readFileSync(input, { encoding: "utf8" }).split('\n');
    }
}