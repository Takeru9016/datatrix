import Image from "next/image";

import { images } from "@/assets";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-[150px] py-2 bg-white shadow-[0px_8px_20px_5px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-1">
        <Image className="w-20" src={images.logo} alt="logo" />
        <p className="text-3xl font-bold text-tgreen">DataTrix</p>
      </div>
      <div className="flex items-center gap-16 uppercase">
        <p className="flex text-base text-tgreen">Home</p>
        <p className="flex text-base text-tgreen">About</p>
        <p className="flex text-base text-tgreen">Services</p>
        <p className="flex text-base text-tgreen">Our Work</p>
        <div className="flex items-start gap-1">
          <Button className="uppercase">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
