import Image from 'next/image';
import DateNow from './DateNow';

export default function MainWeatherInfo({ className }: {className?: string}) {
	return (
		<div className={`${className} relative`}>
			<div className='absolute w-full h-full flex flex-col items-center justify-center'>
                <div>
                <p className='text-neutral-0 text-4xl font-semibold'>Berlin, Germany</p>
				<DateNow />
                </div>
                <div className='flex items-center'>
                    <Image src={'/icon-sunny.webp'} alt='sunny icon' width={120} height={320} />
                    <p className='text-neutral-0 text-8xl font-semibold'>68°</p>
                </div>
				
			</div>

			<Image
				src={'bg-today-small.svg'}
				alt="card background"
				width={343}
				height={286}
			/>
		</div>
	);
}
