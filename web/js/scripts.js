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
// PIGGIFY
function pigLatinConvert(phrase) {
  phrase = phrase.toLowerCase();
  var alphaPhrase = phrase.replace(/[^A-Za-z\s]/g, "");
  console.log("phrase to lower with regex and keep spaces? " + alphaPhrase);
  var array_of_converted_words = [];

  if (phrase.match(/\s/)) {
    console.log("it matched");
    var array_of_words = phrase.split(" ");

    for (var i = 0; i < array_of_words.length; i++) {
      array_of_converted_words[i] = pigLatinConvertWord(array_of_words[i]);
    }
    phrase = array_of_converted_words.join(" ");
  }
  else {
    phrase = pigLatinConvertWord(phrase);
  }
  return phrase;
}

function pigLatinConvertWord(word) {
  var letters_to_cut = "";


  for (var i = 0; i < (word.length); i++) {
    var letter = word.slice(i, i+1);
    // flag to check if first letter is a vowel (append 'way' instead of 'ay')
    var starts_with_vowel = false;
    // check if the letter is a vowel
    if ((letter.match(/[aeiou]/)) && (letters_to_cut === "")) {
      starts_with_vowel = true;
    }
    if((letter.match(/[aeiou]/)) || (letter.match(/[y]/) && (letters_to_cut))){
      // if the letter is a 'u', check if previous letter was a q
      if (letter === "u"){
        // if a 'u', take the u and q
        if (letters_to_cut[i-1] === "q") {
          letters_to_cut += word.substr(i, 1);
          word = word.slice(1,word.length);
        }
      }// if not, treat as normal
      word = word.slice(i,word.length);
      word += letters_to_cut;
      if(starts_with_vowel){ word += 'way';}
        else{word += 'ay';}      
      return word;
    }
    else { // if letter is a consonant, put letter into letters_to_cut and shorten word by that letter
      letters_to_cut += word.substr(i, 1);
    }
  }

  return word;
}
// ROMANIZERR
var romanize = function(unit){
  var output = "";
  if(unit >= 4000) {
    return output = "Sorry the Romans couldn't Count higher than 3,999 Try again.";
  } else if (unit === 0) {
    return "It's exacty the same! Zero!";
  } else {
    if((Math.floor(unit / 1000) > 0) && (Math.floor(unit / 1000) < 4)) {
      return Array((Math.floor(unit / 1000) + 1)).join("M") + romanize((unit % 1000));

    }else if((Math.floor(unit / 900) === 1)) {
      return "CM" + romanize((unit % 100));

    } else if((Math.floor(unit / 500) > 0) && (Math.floor(unit / 500) < 4)) {
      return Array((Math.floor(unit / 500) + 1)).join("D") + romanize((unit % 500));

    } else if((Math.floor(unit / 400) === 1)) {
      return "CD" + romanize((unit % 100));

    } else if((Math.floor(unit / 100) > 0) && (Math.floor(unit / 100) < 4)) {
      return Array((Math.floor(unit / 100) + 1)).join("C") + romanize((unit % 100));

    } else if((Math.floor(unit / 90) === 1)) {
      return "XC" + romanize((unit % 10));

    } else if((Math.floor(unit / 50) > 0) && (Math.floor(unit / 50) < 4)) {
      return Array((Math.floor(unit / 50) + 1)).join("L") + romanize((unit % 50));

    } else if((Math.floor(unit / 40) === 1)) {
      return "XL" + romanize((unit % 10));

    } else if((Math.floor(unit / 10) > 0) && (Math.floor(unit / 10) < 4)) {
      return Array((Math.floor(unit / 10) + 1)).join("X") + romanize((unit % 10));

    } else if((Math.floor(unit / 9) === 1)) {
      return "IX";

    } else if((Math.floor(unit / 5) > 0) && (Math.floor(unit / 5) < 4)) {
      return Array((Math.floor(unit / 5) + 1)).join("V") + romanize((unit % 5));

    } else if((Math.floor(unit / 4) === 1)) {
      return "IV";

    } else if ((Math.floor(unit / 1) > 0) && (Math.floor(unit / 1) < 4)) {
      return Array((Math.floor(unit / 1) + 1)).join("I") + romanize((unit % 1));
    }
    else if(unit == 0){
      return "";
    }
  }
};
// WORD REPLAYSSR
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

// BASE NUMBER CONVERRTR
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
// PIGGIFY
$(document).ready(function(){
  $("form#pigLatinConvert").submit(function(event){
    var phrase = $("input#phrase").val();
    var result = pigLatinConvert(phrase);
    $("input#phrase").val('');

    $(".pig_latin_words").text(result);
    $(".pig_latin").show();
    event.preventDefault();
  });
});
// ROMANIZERR
$(document).ready(function(){
  $("form#romanize").submit(function(event){
    var num = parseInt($("input#num").val());
    var result = romanize(num);

    $(".num").text(num);
    $(".roman").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
