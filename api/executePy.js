const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

const executePy = (filePath, input) => {
    if(input != undefined){
        fs.writeFile('./outputs/input.txt',input, (err) => {
            if (err) throw err;
            else{
               console.log("The file is updated with the given data")
            }
         });
    }
    return new Promise((resolve, reject) => {
        exec(`python ${filePath} < ./outputs/input.txt`,
        (error, stdout, stderr) => {
            error && reject({ error, stderr });
            stderr && reject(stderr);
            resolve(stdout);            
        });
    });
};

module.exports = {
    executePy,
};