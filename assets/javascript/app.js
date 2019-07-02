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
      console.log(response);
    });
  });
});

function init() {
  gapi.client.setApiKey("AIzaSyA7qkLvUXJLWyyZl97iOw5z7VNDjMzlh40");
  gapi.client.load("youtube", "v3", function() {
    // yt api is ready
  });
}





// $(".gif-button").on("click", function () {
//   var character = $(this).attr("data-character");
//   var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + giphyAPIKey + "&q=" + character + "+disney&limit=10&lang=en";
//   axios({
//       url: queryURL,
//       method: "GET"
//   }).then(function (response) {
//       console.log(response);
//       console.log(response.data.data);
//       var results = response.data.data;
//       var animationState = "still";