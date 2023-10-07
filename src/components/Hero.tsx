import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="flex justify-between items-start pt-[300px] pb-[200px] px-[150px]">
      <div className="flex flex-col justify-center items-start font-extrabold">
        <p className="relative w-[500px] text-[76px]">
          <span>We help to Create</span>
          <span>&nbsp;</span>
          <span className="bg-[#0D908B] text-white">Brands</span>
          <span>&nbsp;</span>
          <span>With Coffee</span>
        </p>
        <div className="flex items-start gap-1">
          <Button className="text-[18px] font-bold">See our work</Button>
        </div>
      </div>
      <div className="relative w-[592px] h-[508px] bg-[#dbeae9] rounded-[500px]" />
    </div>
  );
}
