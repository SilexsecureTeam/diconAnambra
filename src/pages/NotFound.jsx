export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 md:px-16">
      <div className="text-7xl font-extrabold text-[#C08032] mb-4">404</div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">Sorry, the page you are looking for does not exist or has been moved.</p>
      <a href="/" className="inline-block bg-[#C08032] text-white px-6 py-2 rounded-md font-medium shadow hover:bg-[#9c805d] transition">Go Home</a>
    </div>
  );
}
