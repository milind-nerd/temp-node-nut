const {readFile} = require('fs');
const { reject } = require('lodash');


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

// for promise function, you can give then and catch
getText('./content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err));