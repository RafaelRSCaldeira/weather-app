import Title from './components/Title';
import Navbar from './components/Navbar';
import MainWeatherInfo from './components/MainWeatherInfo';
import SearchPlace from './components/SearchPlace';
import ExtraWeatherInfo from './components/ExtraWeatherInfo';
import Footer from './components/Footer';

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="flex flex-col items-center overflow-hidden w-[90%] mx-auto gap-12">
				<Title />
				<SearchPlace />
				<MainWeatherInfo />
				<ExtraWeatherInfo />
			</div>
			<Footer />
		</>
	);
}
