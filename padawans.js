const fs = require('fs');
function getPadawanNames() {
  let padawans = fs.readFileSync('data/padawans.txt', 'utf-8')
  padawans = padawans.split('\n')
  padawans.pop()
  return padawans
}

function getLightsaberScores() {
  let scores = fs.readFileSync('data/scores.txt', 'utf-8')
  return scores.split(' ').slice(0, scores.length - 1);
}

function getStats() {
  
}

function writeStats() {
  
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
