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
	const generationMap: { [key: string]: string } = {
		'generation-i': '1',
		'generation-ii': '2',
		'generation-iii': '3',
		'generation-iv': '4',
		'generation-v': '5',
		'generation-vi': '6',
		'generation-vii': '7',
		'generation-viii': '8',
		'generation-ix': '9'
	};

	const mappedGeneration = generationMap[generation];
	const endpoint = `generation/${mappedGeneration}`;

	try {
		const data = await fetchData(endpoint);
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}
