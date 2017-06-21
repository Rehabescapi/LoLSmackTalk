var fs = require('fs');
var fd , key;

fs.readFile('./api.txt','utf8', function (err, fd)  {
if (err) {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }

    throw err;
  }
  key = fd;
  
  
  var lolapi = require('lolapi')(key, 'na');

var summonerName = 'wickd';
lolapi.Summoner.getByName(summonerName, function (error, summoner) {
  if (error) throw error;
  /* summoner object
  { wickd:
    {
      id: 71500,
      name: 'Wickd',
      profileIconId: 613,
      summonerLevel: 30,
      revisionDate: 1408199475000
    }
  } */
  
  var summonerId = summoner[summonerName].id;
  lolapi.Summoner.getRunes(summonerId, function (error, runes) {
    if (error) throw error;
    // do something with runes
    console.log(runes);
  })
});

});


