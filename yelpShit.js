// Request API access: http://www.yelp.com/developers/getting_started/api_access

var yelp = require("yelp").createClient({
  consumer_key: "lkmpngFNAbdRK4b8LmDb_g", 
  consumer_secret: "8EYgokqqGWnDvvigyp41r2mdRq8",
  token: "FQf9q2Wc3u6QowY1ywDkl7YLazHZQ3BJ",
  token_secret: "IFxwy7Md1lWT4gqQ3igZUmZ9Suo"
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({term: "chicken", location: "New York"}, function(error, data) {
  console.log(error);
  console.log(data);
});