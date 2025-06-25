import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Kien Nguyen's Portfolio",
	description: "Kien Nguyen's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lato.className} antialiased`}>{children}</body>
			<Analytics />
		</html>
	);
}
