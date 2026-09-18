import type {Metadata} from "next";
import 'modern-normalize';
import {Manrope, Inter} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/TanStackProvider/TanStackProvider";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {Toaster} from "react-hot-toast";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
})

export const metadata: Metadata = {
    title: "Rental Car - Find Your Perfect Rental",
    icons: {
        icon: '/favicon.svg',
    },
    description: "Browse and rent cars easily. Reliable and budget-friendly rentals for any journey.",
    openGraph: {
        title: "Rental Car - Find Your Perfect Rental",
        description: "Browse and rent cars easily. Reliable and budget-friendly rentals for any journey.",
        url: process.env.NEXT_PUBLIC_WEBSITE_VERCEL_URL || "https://rental-car.vercel.app",
        siteName: "Rental Car",
        type: "website",
        images: [
            {
                url: "/images/Hero.png",
                width: 1200,
                height: 630,
                alt: "Rental Car - Hero Image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rental Car - Find Your Perfect Rental",
        description: "Browse and rent cars easily. Reliable and budget-friendly rentals for any journey.",
        images: ["/images/Hero.png"],
    },
};

export default function RootLayout({children}: Readonly<{ children: ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${manrope.variable} ${inter.variable}`}
            data-scroll-behavior="smooth"
        >
        <body>
        <TanStackProvider>
            <Header />
            <main>{children}</main>
            <Toaster/>
            <ReactQueryDevtools initialIsOpen={false} />
        </TanStackProvider>
        </body>
        </html>
    );
}
