import { Card, CardContent, CardTitle } from '@/components/ui/card';

const weatherInfo = [
	{ title: 'Feels Like', content: '64°' },
	{ title: 'Humidity', content: '46%' },
    {title: "Wind", content: "9 mph"}, 
    {title: "Precipitation", content: "0 in"}, 
];

export default function ExtraWeatherInfo() {
	return (
		<div className="grid grid-cols-2 w-full h-60 gap-4">
			{weatherInfo.map((item) => (
                <Card key={item.title} className="p-6">
                    <CardTitle text={item.title} />
                    <CardContent text={item.content} />
                </Card>
            ))}
		</div>
	);
}
