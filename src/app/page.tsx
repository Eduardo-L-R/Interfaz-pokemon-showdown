import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
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
			<h3 className='mb-4'>Interfaz Component Showdown</h3>
			<form>
				<div className='flex gap-4'>
					<input
						id='legend'
						type='checkbox'
					/>
					<label htmlFor='legend'>Legend</label>
				</div>
			</form>
		</main>
	);
}
