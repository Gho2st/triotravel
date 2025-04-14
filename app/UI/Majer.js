import Image from "next/image";
import LineHeader from "./LineHeader";

export default function Majer() {
  return (
    <div className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24">
      <LineHeader text="Organizator Wyjazdu" />
      <div className="w-1/5 mx-auto mt-16">
        <Image
          src={"/logo/majer.png"}
          width={500}
          height={500}
          layout="responsive"
          alt="logo firmy Majer"
        />
      </div>
    </div>
  );
}
