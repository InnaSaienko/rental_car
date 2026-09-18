# Rental Car

A modern web application for browsing and renting cars, built with Next.js, TypeScript, and TanStack Query.

## Description

Rental Car is a frontend application for a car rental company that allows users to:
- Browse available cars with filtering options
- View detailed information about each car
- Book cars through a simple form

The application consumes a backend API to fetch car data, filters, and handle booking requests.

## Features

### Home Page
- Hero section with a call-to-action button
- Navigation to the car catalog

### Catalog Page
- Display a list of available cars with images and basic information
- Filter cars by:
  - Brand (single selection)
  - Price per hour (single selection)
  - Mileage range (from and/or to)
- Infinite scroll with "Load More" button
- Responsive card layout

### Car Details Page
- Full car information display
- High-quality car image
- Detailed specifications (engine, fuel consumption, mileage, etc.)
- Rental conditions and features list
- Booking form with validation
- Success notification upon booking

### Technical Features
- Next.js 16 with App Router
- TypeScript for type safety
- TanStack Query for data fetching and caching
- useInfiniteQuery for paginated car loading
- Zustand for client-side state management
- Tailwind CSS for styling
- Custom SVG icons
- Form validation with error handling
- Toast notifications for user feedback
- Loading states for async operations

## Tech Stack

- **Framework**: Next.js 16.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query v5)
- **UI Components**: Custom components with CSS Modules
- **Icons**: Custom SVG sprite
- **Notifications**: react-hot-toast
- **HTTP Client**: Axios

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rental_car.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rental_car
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```env
   NEXT_PUBLIC_API_BASE_URL=https://car-rental-api.goit.study/
   ```

## Running the Application

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
rental_car/
├── app/                    # Next.js App Router pages
│   ├── catalog/
│   │   ├── [id]/           # Car details page
│   │   │   ├── page.tsx
│   │   │   └── CarDetails.client.tsx
│   │   ├── page.tsx        # Catalog page
│   │   └── CatalogClient.tsx
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── error.tsx           # Error boundary
│   └── not-found.tsx       # 404 page
├── components/             # Reusable UI components
│   ├── BookingForm/        # Car booking form
│   ├── Button/             # Custom button component
│   ├── CarCard/            # Car card for catalog
│   ├── CarDetailsInfo/     # Car details information
│   ├── CarList/            # List of car cards
│   ├── CustomInput/        # Custom input with dropdown
│   ├── Header/             # Site header
│   ├── Loader/             # Loading spinner
│   ├── NavBar/             # Navigation bar
│   ├── NoCarsFound/        # Empty state component
│   └── SearchBar/          # Filter search bar
├── hooks/                  # Custom React hooks
│   └── useToaster.ts       # Toast notification hook
├── lib/                    # Utility functions and API
│   ├── api.ts              # API client and endpoints
│   ├── store/              # Zustand stores
│   │   └── bookingFormStore.ts
│   └── utils/              # Validation utilities
│       └── validation.ts
├── public/                 # Static assets
│   ├── images/             # Image assets
│   └── sprite.svg          # SVG icon sprite
├── TanStackProvider/       # TanStack Query provider
│   └── TanStackProvider.tsx
├── types/                  # TypeScript type definitions
│   └── car.ts              # Car and filter types
├── .env                    # Environment variables
├── .gitignore              # Git ignore rules
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## API Endpoints

The application uses the following API endpoints:

- `GET /cars` - Fetch paginated list of cars with filters
- `GET /cars/filters` - Fetch available filter options (brands, price range)
- `POST /cars/:id/booking-requests` - Submit a booking request

## Deployment

The application is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Add the environment variable `NEXT_PUBLIC_API_BASE_URL` with value `https://car-rental-api.goit.study/`
4. Deploy

Alternatively, you can deploy to Netlify with similar configuration.

## Author

Inna - Frontend Developer

## License

This project is private and intended for educational purposes.
