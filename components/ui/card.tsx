function Card({
	children,
	className,
}: {
	children?: React.ReactNode;
	className: string;
}) {
	return <div className={`${className} bg-[#242440] rounded-xl`}>{children}</div>;
}

function CardTitle({ text, className }: { text: string, className?: string }) {
	return <p className={`${className} text-neutral-0 opacity-60`}>{text}</p>;
}

function CardContent({ text, className }: { text: string, className?: string }) {
	return <p className={`${className} text-neutral-0 opacity-90 text-4xl`}>{text}</p>;
}

export { Card, CardTitle, CardContent };
