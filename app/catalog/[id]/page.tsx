import CarDetailsClient from "./CarDetails.client"
import { fetchCarById } from '@/lib/api';
import { Metadata } from 'next';

interface CarDetailsPageProps {
    params: Promise<{id: string}>;
}

export async function generateMetadata( { params}: CarDetailsPageProps): Promise<Metadata> {
    const {id} = await params;

    try {
        const car = await fetchCarById(id);
        const description = car.description.length > 100 ? car.description.substring(0, 100) : car.description;
        const title = `${car.brand} ${car.model}, ${car.year} | Rental Car`
        
        return {
            title: title,
            description: description,
            openGraph: {
                title: title,
                description: description,
                url: `${process.env.NEXT_PUBLIC_WEBSITE_VERCEL_URL || 'https://rental-car.vercel.app'}/catalog/${car.id}`,
                images: [
                    {
                        url: car.img,
                        width: 1200,
                        height: 630,
                        alt: title,
                    },
                ],
                type: 'website',
                siteName: 'Rental Car',
            },
            twitter: {
                card: 'summary_large_image',
                title: title,
                description: description,
                images: [car.img],
            },
        };
    } catch (error) {
        return {
            title: 'Car Not Found | Rental Car',
            description: 'The requested car could not be found.',
        };
    }
}

const CarDetailsPage = () => {
    return <CarDetailsClient />;
}
export default CarDetailsPage;