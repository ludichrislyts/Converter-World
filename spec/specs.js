describe("findAndReplace", function(){
	it("Takes a one word input and finds and replaces the word", function(){
		expect(findAndReplace("happy", "Happy", "pappy")).to.eql(["pappy", 1])
	});
	
	it("Takes a two word input and finds and replaces one word", function(){
		expect(findAndReplace("Happy pappy", "happy", "pappy")).to.eql(["pappy pappy", 1])
	});
	
	it("Takes a multiple word input with duplicate words and finds and replaces the duplicate word", function(){
		expect(findAndReplace("happy happy pappy", "Happy", "pappy")).to.eql(["pappy pappy pappy", 2])
	});

	it("Takes a multiple phrase and finds and replaces the duplicate words, case insensitive", function(){
		expect(findAndReplace("Super happy Slap Happy Pappy loves the happy flappy clappy clowns", "Happy", "pappy")).to.eql(["Super pappy Slap pappy Pappy loves the pappy flappy clappy clowns", 3])
	});	
	
	it("Takes a multiple phrase with symbols and still finds and replaces the duplicate words, case insensitive", function(){
		expect(findAndReplace("\"Super-happy\" Slap Happy Pappy loves the happy, flappy clappy clowns", "Happy", "pappy")).to.eql
							 (["\"Super-pappy\" Slap pappy Pappy loves the pappy, flappy clappy clowns", 3])
	});
	
	it("Takes a one word input with the search word contained in another word and finds and replaces the word", function(){
		expect(findAndReplace("happypappy", "Happy", "pappy")).to.eql(["pappypappy", 1])
	});
	
	it("Takes a one word input with the search word contained twice in another word and finds and replaces the word", function(){
		expect(findAndReplace("happypappyhappy", "Happy", "pappy")).to.eql(["pappypappypappy", 2])
	});
});

describe("converter", function(){
	it("detects bad input", function(){
		expect(converter("100", 2)).to.equal(4)
	});
});