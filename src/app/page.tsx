'use client';
import React from 'react';
import Image from 'next/image';

import { LegendInput } from '../components/legend-input';
import { SelectGeneration } from './../components/select-generation';

export default function Home() {
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
				<LegendInput />
				<SelectGeneration />
			</form>
		</main>
	);
}
