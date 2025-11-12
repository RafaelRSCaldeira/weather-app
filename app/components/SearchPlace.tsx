import { PrimaryButton } from '@/components/ui/button';
import { BasicInput } from '@/components/ui/input';

export default function SearchPlace() {
	return (
		<div className='w-full'>
			<BasicInput
				id="search-bar"
				placeholder="Search for a place..."
			/>
			<PrimaryButton className="mt-4">Search</PrimaryButton>
		</div>
	);
}
