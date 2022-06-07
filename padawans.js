const fs = require('fs');

function getPadawanNames() {
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
  return padawans;
};

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return scores.map((el) => +el);
};

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  let result = [];
  for (let i = 0; i < padawans.length; i++) {
    let prom = [];
    prom.push(padawans[i])
    prom.push(scores[i])
    result.push(prom)
  };  
  return result
};

function writeStats() {
  const padawansWithScore = getStats().join('\n').split(',').join(' ')
  fs.writeFileSync(`./data/stats.txt`, `${padawansWithScore}`)
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
