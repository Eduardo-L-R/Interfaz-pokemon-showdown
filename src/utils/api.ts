const apiUrl = 'https://pokeapi.co/api/v2/';

interface PokemonSpecies {
	name: string;
	is_legendary: boolean;
}

export async function fetchData<T>(endpoint: string): Promise<T> {
	const url = apiUrl + endpoint;
	const response = await fetch(url);
	const data: T = await response.json();
	return data;
}

export async function getGenerations(): Promise<string[]> {
	const response = await fetchData<{ results: { name: string }[] }>(
		'generation/'
	);
	const generations = response.results.map(result => result.name);
	return generations;
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

export async function fetchPokemonByGeneration(generation: string) {
	const endpoint = `generation/${generation}`;

	try {
		const data = await fetchData(endpoint);
		console.log(data);
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

