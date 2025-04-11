export default function LineHeader({ text }) {
  return (
    <div className="flex px-6 items-center justify-center gap-10">
      <div className="h-1 bg-customBlue w-full"></div>
      <h2 className="uppercase text-customBlue text-3xl md:text-4xl text-center font-bold md:whitespace-nowrap">
        {text}
      </h2>
      <div className="h-1 bg-customBlue w-full"></div>
    </div>
  );
}
