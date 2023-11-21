import React from 'react';
import { getGenerations } from '@/utils/api';

export function SelectGeneration() {
	const [generations, setGenerations] = React.useState<string[]>([]);
	const [selectedOption, setSelectedOption] = React.useState('');

	const handleOptionClick = (option: any) => {
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
