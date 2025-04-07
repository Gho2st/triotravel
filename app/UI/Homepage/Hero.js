import HeroButton from "../Buttons/HeroButton";

export default function Hero() {
  return (
    <section
      className="bg-img flex justify-center items-center min-h-screen overflow-hidden"
      style={{ backgroundImage: "url(baner/baner.png)" }}
    >
      <div className="bg-white inline-flex rounded-2xl shadow-2xl">
        <span className="text-3xl md:text-4xl p-3 md:p-6 w-64 xl:w-144 text-center">
          Spływ Dunajcem?
        </span>
        <HeroButton />
      </div>
    </section>
  );
}
