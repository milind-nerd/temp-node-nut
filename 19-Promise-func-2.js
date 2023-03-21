
const {readFile, writeFile} = require('fs');
const { reject } = require('lodash');

//new module
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)



// for promise function, you can give then and catch

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        await writeFilePromise('./content/result.txt', 'Magic Moments'+first+second);
        console.log(first);
        console.log(second);
    } catch (error) {
        console.log(error);
    }

}

start();


/*
getText('./content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err));
*/

/*
const getText = (path) =>
{
    return new Promise( (resolve, reject) =>
    {
        readFile(path, 'utf-8', (err, data) =>
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        }

        );
    }
    );
}
*/