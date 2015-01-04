var express = require('express');
var app = express();



// describe('OAuth2',function(){
//   var OAuth = require('oauth');
//
//   it('gets bearer token', function(done){
//     var OAuth2 = OAuth.OAuth2;
//     var twitterConsumerKey = '36f732b4f3ce4f7082ccb4f91ff6afa0';
//     var twitterConsumerSecret = '67da39cfca1040cebc5c0ecfba978cf2';
//     var oauth2 = new OAuth2(server.config.keys.twitter.consumerKey,
//       twitterConsumerSecret,
//       'https://api.twitter.com/',
//       null,
//       'oauth2/token',
//       null);
//       oauth2.getOAuthAccessToken(
//         '',
//       {'grant_type':'client_credentials'},
//       function (e, access_token, refresh_token, results){
//         console.log('bearer: ',access_token);
//         done();
//       });
//     });
// });

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
