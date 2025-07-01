export default function Header({ text }) {
  return (
    <div className="bg-customRed px-6 md:px-24 py-8 md:py-12 2xl:py-14">
      <h1 className="text-4xl font-medium leading-snug md:text-5xl md:leading-snug 2xl:text-6xl 2xl:leading-snug text-white">{text}</h1>
    </div>
  );
}
