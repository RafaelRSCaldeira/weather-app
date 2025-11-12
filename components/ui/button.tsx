'use client';

import { Check } from 'lucide-react';
import React, { MouseEventHandler, useState } from 'react';

function DropdownSection({
	title,
	items,
}: {
	title: string;
	items: React.ReactNode;
}) {
	return (
		<div>
			<p>{title}</p>
			{items}
		</div>
	);
}

function DropdownButton({
	button,
	sections,
}: {
	button: React.ReactNode;
	sections: React.ReactNode[];
}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="text-neutral-0 relative">
			<SecondaryButton onClick={() => setIsOpen(!isOpen)}>
				{button}
			</SecondaryButton>
			{isOpen && (
				<div className="absolute right-0 w-55 flex flex-col bg-neutral-700 gap-2 mt-2 rounded-xl p-2">
					{sections.map((item) => item)}
				</div>
			)}
		</div>
	);
}

function DropdownItem({ children }: { children?: React.ReactNode }) {
    const [isSelected, setIsSelected] = useState(false);

	return (
		<SecondaryButton onClick={() => setIsSelected(!isSelected)}>
			{children}
            {isSelected && <Check />}
		</SecondaryButton>
	);
}

function SecondaryButton({
	onClick,
	children,
}: {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
}) {
	return (
		<button
			onClick={onClick}
			className="text-start flex items-center justify-between gap-1 bg-neutral-700 hover:bg-neutral-800 rounded-xl p-3 hover:cursor-pointer"
		>
			{children}
		</button>
	);
}

function PrimaryButton({
	className,
	onClick,
	children,
}: {
	className?: string,
	onClick?: MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
}) {
	return (
		<button
			onClick={onClick}
			className={`${className} w-full text-center text-lg flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-800 text-neutral-0 rounded-xl p-3 hover:cursor-pointer`}
		>
			{children}
		</button>
	);
}



export { DropdownButton, DropdownSection, DropdownItem, SecondaryButton, PrimaryButton };
