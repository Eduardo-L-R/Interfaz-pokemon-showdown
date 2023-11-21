export function LegendInput() {
	return (
		<div className='flex gap-4 justify-center'>
			<input
				id='legend'
				type='checkbox'
			/>
			<label htmlFor='legend'>Legend</label>
		</div>
	);
}
