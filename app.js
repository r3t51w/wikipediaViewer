function searchBox(){
  $('.container').text('');
  $('.container').append('<div id="form"><input id="searchBox" type="text"></input><div id="clear" class="glyphicon glyphicon-remove" onclick=clear1()></div></div></br><button onclick=search1($("#searchBox").val())>Search</button>');
}
function clear1(){
  console.log($('#searchBox').val());
  if($('#searchBox').val()){
    $('#searchBox').val('');
  }else{
  $('.container').text('');
  $('#result').html('');
  $('.container').append("<span class='glyphicon glyphicon-search' onclick=searchBox()></span><p id='instruction'>Click icon to search</p>");
  }
}
function search1(searchTerm){
  $.getJSON('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+searchTerm+'&format=json&callback=?', function(data){
    //console.log(data.query.pages);
console.log(data.query);
    console.log(data.query.search.length);
if(data.query.search.length>0){
  $('#result').html('');
  $.each(data.query.search, function(i,item){
    $('#result').append('<a href="http://en.wikipedia.org/wiki/'+item.title+'"><div id="results"><p><strong>'+item.title+'<strong></p>'+item.snippet+'</div></a></br>');

  });
}
else{
  $('#result').html("<p id='results' style='text-align:center'>No results found</p>");
}

//return data;
  });
}

//search1();
/*$("#searchBox").keyup(function(event){
console.log(event);
    //if(event.keyCode == 13){
    //console.log('enter has entered');
    //search();
    //}
  });*/
