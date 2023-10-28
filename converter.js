const fs = require('fs');
const csv = require('csv-parser');  // Importing the csv-parser library

// Function to convert TSV file to JSON
function tsvToJson(filePath) {
  // Check if file path is provided
  if (!filePath) {
    console.error("Please provide a file path.");
    process.exit(1);
  }

  // Arrays to hold the headers and the records
  const results = [];

  // Create a readable stream from the TSV file and parse it as CSV with tab delimiter
  fs.createReadStream(filePath)
    .pipe(csv({
      separator: '\t'  // specify the separator as a tab character
    }))
    .on('data', (data) => results.push(data))  // Push each row of data into the array
    .on('end', () => {
      // When the stream ends, log the results to the console or do something else with it.
      console.log(results);

      // If you want to write this to a file, you can do so here.
      fs.writeFileSync('output.json', JSON.stringify(results, null, 2), 'utf8', (err) => {
        if (err) {
          console.error("Error writing file", err);
        } else {
          console.log("Successfully wrote JSON output to file");
        }
      });
    })
    .on('error', (error) => {
      // Log any error that occurs while reading/parsing the file
      console.error("Error processing file:", error);
    });
}

// Pass the path of your file here
tsvToJson('JackBox.tsv');

