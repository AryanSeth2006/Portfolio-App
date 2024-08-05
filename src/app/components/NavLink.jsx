import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#6B645C] sm:text-xl rounded md:p-0 hover:text-[#3F3C3B]"
    >
      {title}
    </Link>
  );
};

export default NavLink;