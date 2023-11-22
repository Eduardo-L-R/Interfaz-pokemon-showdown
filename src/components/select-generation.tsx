import React from 'react';
import { getGenerations, fetchPokemonByGeneration } from '@/utils/api';

export function SelectGeneration() {
	const [generations, setGenerations] = React.useState<string[]>([]);
	const [selectedOption, setSelectedOption] = React.useState('');

	const handleOptionClick = (option: string) => {
		setSelectedOption(option);
	};

	React.useEffect(() => {
		const fetchGenerations = async () => {
			try {
				const data = await getGenerations();
				setGenerations(['None', ...data]);
			} catch (error) {
				console.error('Error fetching generations:', error);
			}
		};

		fetchGenerations();
	}, []);

	// Import and use fetchPokemonByGe˜˜˜åneration function
	React.useEffect(() => {
		const fetchPokemon = async () => {
			try {
				await fetchPokemonByGeneration(selectedOption);
			} catch (error) {
				console.error('Error fetching pokemon:', error);
			}
		};

		fetchPokemon();
	}, [selectedOption]);

	return (
		<div className='mt-4'>
			<label
				className='mr-4'
				htmlFor='generations'>
				Select Generation:
			</label>
			<select
				className='text-black'
				id='generations'
				name='generations'
				value={selectedOption}
				onChange={e => setSelectedOption(e.target.value)}>
				{generations.map(generation => (
					<option
						key={generation}
						value={generation}
						onClick={() => handleOptionClick(generation)}>
						{generation}
					</option>
				))}
			</select>
		</div>
	);
}
