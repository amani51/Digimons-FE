import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between bg-gray-800">
      <div className="px-10 pt-2">
        <Link  href="/">
          <Image
            src="/assets/digimon.png"
            width={120}
            height={90}
            alt="Digimons logo"
          ></Image>
        </Link>
      </div>
      <div className="px-20 pt-6 ">
        <nav>
        <ul className="flex-col md:flex-row flex md:space-x-8 md:mt-0 md:text-sm md:font-medium ml-6 gap-8">
            <li>
              <a
                href="/"
                className="text-[#D6B712] text-xl pl-3 pr-4 py-2 md:hover:text-[#C32B38] md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/myDigimons"
                className="text-[#D6B712] text-xl pl-3 pr-4 py-2 md:hover:text-[#C32B38] md:p-0"
              >
                My Digimons
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
