import { Instagram } from "lucide-react";
import Image from "next/image";

export default function SocialLink({ t }) {
  return (
    <div className="flex justify-center mt-10">
      <a
        href="https://www.instagram.com/ebike.story/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 px-5 py-2.5 bg-gray-900/80 backdrop-blur-md text-white font-medium rounded-full border border-transparent hover:border-cyan-400/50 hover:bg-gray-800/90 transition-all duration-300 ease-out group shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transform hover:-translate-y-0.5"
      >
        <Image
          src="/wycieczki/rowery-elektryczne/logo.jpg"
          alt={t("alt.logo")}
          width={28}
          height={28}
          className="rounded-full object-cover border border-cyan-500/30 group-hover:border-cyan-400 transition-colors duration-300"
        />
        <Instagram className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 group-hover:rotate-6" />
        <span className="relative text-sm tracking-wide">
          {t("insta.text")}
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
        </span>
        <span className="text-sm font-semibold text-cyan-200/90 group-hover:text-cyan-100">
          @ebike.story
        </span>
      </a>
    </div>
  );
}
