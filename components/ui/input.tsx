import { Search } from 'lucide-react';

export function BasicInput({
	id,
	placeholder,
	containerClassName,
	className,
}: {
	id: string;
	placeholder: string;
	containerClassName?: string;
	className?: string;
}) {
	return (
		<div className={`${containerClassName} relative`}>
			<input
				id={id}
				placeholder={placeholder}
				className={`${className} bg-neutral-700 text-neutral-0 placeholder:text-neutral-0 placeholder:opacity-60 p-4 rounded-xl gap pl-12 text-xl w-full`}
			/>
			<Search className="text-neutral-0 opacity-60 absolute top-[50%] translate-y-[-50%] left-4" />
		</div>
	);
}
