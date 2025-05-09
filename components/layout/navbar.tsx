import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[var(--white)] w-screen shadow-2xl z-10 fixed">
      <div className="mx-auto w-4/5 py-4 flex justify-between items-center">
        <Link href="/" className="text-[var(--black)] text-2xl md:text-3xl ">
          InfoLand
        </Link>
        <ul className=" hidden md:flex items-center gap-4 text-[var(--black)]">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/"}>Blogs</Link></li>
          <li><Link href={"/"}>Questions</Link></li>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <Button type="button" className="cursor-pointer hover:bg-black hover:text-white" variant="outline">Login</Button>
          <Button type="button" className="cursor-pointer bg-black text-white hover:bg-white hover:text-black" variant="outline">Register</Button>
        </div>
        <Sheet>
          <SheetTrigger className="md:hidden cursor-pointer">
            <Menu />
          </SheetTrigger>
          <SheetContent className="bg-white">
            <SheetHeader>
              <SheetDescription>
                <ul className="flex flex-col gap-4 mt-5">
                  <li><Link href={"/"}>Home</Link></li>
                  <li><Link href={"/"}>Blogs</Link></li>
                  <li><Link href={"/"}>Questions</Link></li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;