import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white shadow-md  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <h1 className="font-extrabold text-2xl text-transparent bg-gradient-to-r from-fuchsia-700 to-red-600  bg-clip-text">
                AMRYTT
              </h1>
            </Link>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/dashboard"
                  className="bg-transparent hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 border border-gray-300 rounded"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded "
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
