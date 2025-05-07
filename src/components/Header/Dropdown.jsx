import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Dropdown = ({ label, links }) => (
  <div className="relative group">
    <button className="flex items-center text-emerald-900 hover:text-emerald-600 font-medium transition-colors">
      {label} <ChevronDown className="ml-1 h-4 w-4" />
    </button>
    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
      <div className="py-2">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Dropdown;
