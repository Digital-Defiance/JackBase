const fs = require('fs');

function transformInputFile(inputFilePath, outputFilePath) {
  // First, read the file
  fs.readFile(inputFilePath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Parse JSON data
    let games;
    try {
      games = JSON.parse(data);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return;
    }

    // Process each game entry
    const transformed = games.map((game) => {
      // Extracting and splitting the players field into min and max
      const [minPlayers, maxPlayers] = game.Players.split('-').map((num) => parseInt(num, 10));

      // Removing the 'm' from the Time field and converting it to a number
      const timeInMinutes = game.Time ? parseInt(game.Time.replace('m', ''), 10) : null;

      // Creating a new object with the processed fields
      return {
        ...game,  // copying other properties from the original object
        minPlayers,
        maxPlayers,
        Time: timeInMinutes,  // replacing "Time" with the integer value
      };
    });

    // Writing the transformed data back to a new file
    fs.writeFile(outputFilePath, JSON.stringify(transformed, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing file:', writeErr);
        return;
      }
      console.log(`Transformed data written to "${outputFilePath}"`);
    });
  });
}

// Adjust the following paths to the actual paths of your input and desired output files
const inputFilePath = 'jackbase-in.json';
const outputFilePath = 'jackbase.json';

transformInputFile(inputFilePath, outputFilePath);

