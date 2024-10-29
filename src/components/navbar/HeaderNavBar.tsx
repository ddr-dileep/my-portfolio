import Link from "next/link";

export default function HeaderNavBar() {
  return (
    <div className="bg-rose-900 py-4">
      <div className="flex justify-between w-full mx-auto px-4 md:w-3/4 sm:w-full">
        <div>
          <h3 className="text-cyan-100 hover:text-cyan-50 hover:cursor-pointer">
            Logo
          </h3>
        </div>
        <div className="flex">
          <Link href="/" className="text-white mr-4 hover:text-sky-200">
            Home
          </Link>
          <Link href="/about" className="text-white mr-4 hover:text-sky-200">
            About
          </Link>
          <Link href="/contact" className="text-white mr-4 hover:text-sky-200">
            Contact
          </Link>
          <Link href="/blog" className="text-white hover:text-sky-200">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
