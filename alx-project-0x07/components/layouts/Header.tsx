import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 sm:px-8 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">ImageGen</h1>
        </div>
        <nav className="space-x-4 hidden md:flex"> {/* Navigation links for medium screens and above */}
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden flex items-center">
          <button className="text-white">☰</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
