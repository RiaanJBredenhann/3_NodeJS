// export an object containing a getFile function
// the function looks for a file at the provided path

const fs = require("fs"),
    httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes");

module.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end("There wa an error serving content!")
            }
            res.end(data);
        });
    }
};