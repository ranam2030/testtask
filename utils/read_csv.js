const fs = require('fs');
const csv = require('csv-parser');
const path = require('path')


const csvFilePath = path.join(process.cwd(),"./data/data.csv"); 

const results = [];

const fileStream = fs.createReadStream(csvFilePath);

fileStream.on('error', (error) => {
  console.error('File Read Error:', error);
});

fileStream
  .pipe(csv())
  .on('data', (data) => {
    results.push(data);
  })
  .on('end', () => {
    console.log(results);
    return results;
  })
  .on('error', (error) => {
    console.error('CSV Parsing Error:', error);
  });
