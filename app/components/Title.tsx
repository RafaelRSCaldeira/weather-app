import { Bricolage_Grotesque } from "next/font/google";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export default function Title() {
    return <p className={`text-neutral-0 text-6xl font-semibold text-center ${bricolageGrotesque.className}`}>How&rsquo;s the sky looking today?</p>
}