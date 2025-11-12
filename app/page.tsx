import { BasicInput } from '@/components/ui/input';
import Title from './components/Title';
import { PrimaryButton } from '@/components/ui/button';
import Navbar from './components/Navbar';
import MainWeatherInfo from './components/MainWeatherInfo';

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="flex flex-col items-center overflow-hidden w-[90%] mx-auto">
				<Title />
				<BasicInput
					id="search-bar"
					placeholder="Search for a place..."
					containerClassName="mt-12 w-full"
				/>
				<PrimaryButton className="w-full mt-4">Search</PrimaryButton>
				<MainWeatherInfo className='mt-8'/>
			</div>
		</>
	);
}
