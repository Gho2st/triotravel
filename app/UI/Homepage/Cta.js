export default function Cta() {
  return (
    <section
      className="bg-img flex justify-center items-center min-h-screen overflow-x-hidden "
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(others/kasprowy.png)",
      }}
    >
      <div className=" z-10 text-white text-center px-4 py-8">
        <h2 className="text-4xl md:text-7xl font-bold mb-4">Kasprowy Wierch</h2>
        <p className="text-xl md:text-3xl">Kup bilety już teraz</p>
      </div>
    </section>
  );
}
