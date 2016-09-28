var prevButton;
var nextButton;
var pokemonAPI = "http://pokeapi.co/api/v2/pokemon/?limit=20";

function addPokemon(apiurl) {
    $(`
        <li class="poke-card">
            <h3 class="name">${name}</h3>
        </li>
    `).appendTo("#pokemon").click(function(){
      pokemonDetails(apiurl);
		});
};


// 1.0) Use the PokéAPI from http://pokeapi.co along with jQuery's getJSON function to retrieve the first 20 Pokémon.
// 1.1) Use the addPokemon function to show each of the Pokémon names that were retrieved.  
// Hint: Learn how to access resources via the documentation http://pokeapi.co/docsv2/#resource-lists
function listPokemon(apiurl) {
	$.getJSON(apiurl, function (data) {
		$(data.results).each(function (key, pokemon) {
			addPokemon(pokemon.name, pokemon.url);
		});
		prevButton = data.previous;
		nextButton = data.next;
	});
}


// 2.0) Use jQuery to create a click handler for the next and previous buttons.
// 2.1) Use the "next" and "previous" properties of the pokemon resource object to get the next or previous list of Pokémon.
// 2.2) When a user clicks next or previous, remove all existing Pokémon from the ul element and add the new list of Pokémon.  
// 2.3) Use jQuery to disable the next/previous buttons if there are no more Pokémon to retrieve in that direction.
(function navButtons () {
	if(prevButton === null) {
		$("#previous").hide();
	} else {
		$("#previous").show();
	}
	
	if(nextButton === null) {
		$("#next").hide();
	} else {
		$("#next").show();
	}
	$('#previous').click(function(){
		$('#pokemon').html('');
		listPokemon(prevButton);
	});

	$('#next').click(function(){
		$('#pokemon').html('');
		listPokemon(nextButton);
	});
})();


// Running the show!
listPokemon(pokemonAPI);


/*  Super Awesome Bonus!
    When you click on a Pokémon name, hide all the names and show a larger card that contains details about that Pokémon such as their sprite (picture), name,
    type or anything else you would like to include.  Add a way to go back to the list when your're done looking at the detail.
    Be creative, you can style/arrange the detail information however you like! 
*/