
var settings = {
  "url": "http://localhost:3000/posts",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "content-type": "application/json"
  },
};

$.ajax(settings).done(function (response) {
  //console.log(response);
  setCards(response);
});






function setCards(json){
  let str = '';
  let i = 0;
  json.forEach(element => {
    if (i%3 == 0){
      str += '<div class = "row">';  
    }
    str += '<div class = "col-4">';
    str += '<div class="card mb-3" >';
    str += '  <div class="card-body">';
    str += '    <h5 class="card-title">'+ element.title +'</h5>';
    str += '    <h6 class="card-subtitle mb-2 text-muted">Post No. '+ element.id +'</h6>';
    str += '  <p class="card-text">'+ element.description +'</p>';
    str += '  <a href="#" class="card-link">Card link</a>';
    str += '  <a href="#" class="card-link">Another link</a>';
    str += '</div>';
    str += '</div>';
    str += '</div>';

    if (i%3 == 2){
      str += '</div>';  
    }
    i++;
  
  });

  if (i%3 !== 0){
    str += '</div>';  
  }
  
  $("#mainDivId").html(str);
}

