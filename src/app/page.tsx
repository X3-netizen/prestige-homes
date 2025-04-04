import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-gray-900 text-center">X3 Homes</h1>
        <Image
          className="rounded-lg shadow-md"
          src="/luxury-home.jpg"
          alt="Luxury Home"
          width={600}
          height={400}
          priority
        />
        <p className="text-lg text-gray-600 text-center max-w-lg">
          Discover the best properties in New York City. We help you find your dream home with ease.
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/listings"
          >
            Browse Listings
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/contact"
          >
            Contact Us
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} X3 Homes. All rights reserved.</p>
      </footer>
    </div>
  );
}
