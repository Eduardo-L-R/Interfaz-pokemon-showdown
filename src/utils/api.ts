const apiUrl = 'https://pokeapi.co/api/v2/';

interface PokemonSpecies {
	name: string;
	is_legendary: boolean;
}

export async function fetchData<T>(endpoint: string): Promise<T> {
	const response = await fetch(apiUrl + endpoint);
	const data: T = await response.json();
	return data;
}

export async function getGenerations(): Promise<string[]> {
	const data = await fetchData<{ results: { name: string }[] }>('generation/');
	return data.results.map(generation => generation.name);
}

export async function getLegendaryPokemon(): Promise<PokemonSpecies[]> {
	const data = await fetchData<{ results: PokemonSpecies[] }>(
		'pokemon-species/'
	);
	const legendaryPokemon = data.results.filter(
		species => species.is_legendary === true
	);
	return legendaryPokemon;
}
