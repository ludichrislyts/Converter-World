// WORD REPLAYSSR
var findAndReplace = function(phrase, word, replace){
	var reg = new RegExp(word, "gi");
	var new_phrase = phrase.replace(reg, replace);
	return new_phrase;	
}
// NUMBER BASE CONVERRTR
var converter = function(raw, base){
  var decimal = 0;
  var value = 1;
  var hex = {
    "a":10,
    "b":11,
    "c":12,
    "d":13,
    "e":14,
    "f":15
  };
  for(var i = raw.length - 1; i >= 0; i--) {
    if(raw[i] in hex){
      decimal += (hex[raw[i]] * value);
    } else{
      decimal += (raw[i] * value);
    }
    value *= base;
  }
  return decimal;
}
$(document).ready(function(){
	$("form#find_and_replace").submit(function(event){
		var phrase = ($("input#phrase").val());
		var word_to_find = ($("input#word_to_find").val());
		var replacement = ($("input#replacement").val());
		var result = findAndReplace(phrase, word_to_find, replacement);
		
		$(".new_phrase").text(result);
		$("#result").show();
		
		event.preventDefault();
	});
});


$(document).ready(function(){
  $("form#num_converter").submit(function(event){
    var num_string = ($("input#num_string").val());
    var base = parseInt($("select#base").val());
    var result = converter(num_string, base);
    $(".decimal").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
