import { addingNewPersons, getRandomAge } from './utils.mjs';
import data from './data.mjs';
import fs from 'fs';


addingNewPersons(data,50);
const output=JSON.stringify(data.persons,null,'');

fs.writeFile('outputfile.txt', output, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }
);

