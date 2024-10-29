import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/">
          <a className="px-6 py-3 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Go Back Home
          </a>
        </Link>
      </div>
    </div>
  );
}
