import Link from "next/link";
import { useRouter } from "next/router";

function Navbar_Desktop({ navLinks }) {
  const router = useRouter();

  return (
    <>
      <div className="hidden md:flex items-center justify-between gap-12">
        {navLinks.map((links, index) => (
          <Link href={links.url} key={index}>
            <a
              className={`py-4  ${
                router.pathname == links.url
                  ? "before:absolute before:bottom-[-9px] before:left-0 before:bg-black before:w-full before:h-[2px]"
                  : ""
              }`}
            >
              {links.link}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar_Desktop;
