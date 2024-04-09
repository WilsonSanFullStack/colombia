import Link from "next/link";
export default async function Home() {
  return (
    <main className="h-custom flex items-center justify-center flex-col m-8 text-justify">
      <h1 className="text-6xl uppercase font-bold">
        web page created to obtain information about Colombia in general. You
        want to know more about Colombia, then press the button
      </h1>
      <Link className="bg-gray-700 text-4xl uppercase p-2 rounded-xl 
      hover:bg-white hover:text-black font-bold 
      active:bg-emerald-500"
      href='/home'>
        get start
      </Link>
    </main>
  );
}
