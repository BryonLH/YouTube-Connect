// var youtubeAPIKey = "AIzaSyA7qkLvUXJLWyyZl97iOw5z7VNDjMzlh40";




// console.log("hello");
// var youtubeQueryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + youtubeAPIKey + "&maxResults=10&q=lady+gaga";
// axios({
//     url: youtubeQueryURL,
//     method: "GET"
//   }).then(function(response) {

//     console.log(response.data.data);

// });


$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    // prepare the request
    var request = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
      maxResults: 3,
      order: "viewCount"
    });
    //execute this request
    request.execute(function(response) {
      var results = respnose.result;
      $.each(results.items, function(index, item) {
        console.log(item);
      });
    });
  });
});

function init() {
  gapi.client.setApiKey("AIzaSyA7qkLvUXJLWyyZl97iOw5z7VNDjMzlh40");
  gapi.client.load("youtube", "v3", function() {
    // yt api is ready
  });
}




/**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

  // function authenticate() {
  //   return gapi.auth2.getAuthInstance()
  //       .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
  //       .then(function() { console.log("Sign-in successful"); },
  //             function(err) { console.error("Error signing in", err); });
  // }
  // function loadClient() {
  //   gapi.client.setApiKey("AIzaSyA7qkLvUXJLWyyZl97iOw5z7VNDjMzlh40");
  //   return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
  //       .then(function() { console.log("GAPI client loaded for API"); },
  //             function(err) { console.error("Error loading GAPI client for API", err); });
  // }
  // // Make sure the client is loaded and sign-in is complete before calling this method.
  // function execute() {
  //   return gapi.client.youtube.search.list({
  //     "part": "snippet",
  //     "q": "lady gaga"
  //   })
  //       .then(function(response) {
  //               // Handle the results here (response.result has the parsed body).
  //               console.log("Response", response);
  //             },
  //             function(err) { console.error("Execute error", err); });
  // }
  // gapi.load("client:auth2", function() {
  //   gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  // });