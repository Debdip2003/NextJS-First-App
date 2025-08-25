import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/">
            <p className="hover:text-blue-700">Home</p>
          </Link>
          <Link href="/about">
            <p className="hover:text-blue-700">About</p>
          </Link>
          <Link href="/blogs">
            <p className="hover:text-blue-700">Blogs</p>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/signup">
            <p className="hover:text-blue-700">Sign Up</p>
          </Link>
          <Link href="/login">
            <p className="hover:text-blue-700">Login</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
