import Link from "next/link";

function CardblogBox() {
  return (
    <>
      <div className="flex-1 p-8 bg-[#f0f0f0] duration-300 hover:bg-white  hover:shadow-xl">
        <p className="font-bold mb-2 text-xl">All about machine learning.</p>
        <p>lorem ipsum dolar lorem ipsum dolar</p>
        <Link href="/blogs/[slug]" as="/blogs/machine-learning">
          <a className="inline-block mt-4 font-bold">Read more</a>
        </Link>
      </div>
    </>
  );
}

export default CardblogBox;
