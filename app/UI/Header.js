export default function Header({ text }) {
  return (
    <div className="bg-customRed px-6 md:px-24 py-8 md:py-10 2xl:py-14">
      <h1 className="text-3xl sm:text-4xl font-medium leading-snug  md:leading-snug 2xl:text-6xl 2xl:leading-snug text-white">
        {text}
      </h1>
    </div>
  );
}
