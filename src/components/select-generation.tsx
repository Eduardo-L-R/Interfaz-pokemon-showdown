import React from 'react';
import { getGenerations } from '@/utils/api';

export function SelectGeneration() {
	const [generations, setGenerations] = React.useState<string[]>([]);
	const [selectedGeneration, setSelectedGeneration] =
		React.useState<string>('');

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

	const handleGenerationChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedGeneration(event.target.value);
	};

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
				value={selectedGeneration}
				onChange={handleGenerationChange}>
				{generations.map(generation => (
					<option
						key={generation}
						value={generation}>
						{generation}
					</option>
				))}
			</select>
		</div>
	);
}
