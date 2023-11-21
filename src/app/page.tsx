'use client';
import React from 'react';
import Image from 'next/image';
import { getGenerations } from '../utils/api';

export default function Home() {
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
		<main className='flex min-h-screen flex-col items-center pt-10'>
			<div>
				<Image
					className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mb-10'
					src='https://pbs.twimg.com/media/FJWC5nCWYAQkjS0.png'
					alt='Next.js Logo'
					width={200}
					height={100}
					priority
				/>
			</div>
			<h3 className='mb-8 font-semibold text-2xl'>
				Interfaz Component Showdown
			</h3>
			<form className='flex flex-col justify-center'>
				<div className='flex gap-4 justify-center'>
					<input
						id='legend'
						type='checkbox'
					/>
					<label htmlFor='legend'>Legend</label>
				</div>
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
			</form>
		</main>
	);
}
