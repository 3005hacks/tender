
document.getElementById("populate_button").onclick = function go(){

  q = "chicken wings"; // search query

  request = new XMLHttpRequest;
  request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
  
  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme").innerHTML = '<center><img STYLE = "text-align: center; max-height: 328px;" src = "'+data+'"  title="GIF via Giphy"></center>';
    } else {
      console.log('reached giphy, but API returned an error');
     }
  };
 
  request.onerror = function() {
    console.log('connection error');
  };
 
  request.send();

  document.getElementById("meet").innerHTML = names();
}

function names(){
 var n = Math.floor((Math.random() * 14) + 1);
 var names = ['Brianna', 'Harriet', 'Walter', 'David', 'Larry', 'Josh', 'Sophie', 'Sarah', 'Mehar', 'Doug', 'Chicken', 'Amol', 'Adrian', 'Amy', 'Miles'];
 return names[n];

}