import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Navbar_Desktop from "./components/navbar/Navbar_Desktop";
import Navbar_Mobile from "./components/navbar/Navbar_Mobile";

const navLinks = [
  {
    link: "Home",
    url: "/",
  },
  {
    link: "Video",
    url: "/videos",
  },
  {
    link: "Project",
    url: "/projects",
  },
  {
    link: "Blog",
    url: "/blogs",
  },

  {
    link: "Faq",
    url: "/faqs",
  },
  {
    link: "About",
    url: "/about",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const openModel = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="absolute w-full top-2 z-[10] border-b-[1px] border-[#0000001a]">
        <div className="container flex items-center justify-between gap-4 ">
          <Link href="/">
            <div className="w-auto cursor-pointer py-4">
              <h2>Logo</h2>
            </div>
          </Link>

          <div className="flex items-center justify-between gap-8">
            <Navbar_Desktop navLinks={navLinks} />

            <div
              onClick={openModel}
              className="md:hidden flex text-3xl cursor-pointer"
            >
              <FiMenu />
            </div>
          </div>
        </div>
      </div>

      <Navbar_Mobile navLinks={navLinks} open={open} setOpen={setOpen} />
    </>
  );
}

export default Navbar;
