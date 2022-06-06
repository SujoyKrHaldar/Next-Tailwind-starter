import Link from "next/link";
import Container from "../layout/Container";
import VideoList from "./components/VideoList";

function Videos({ data }) {
  return (
    <>
      <div className="w-full h-full py-16">
        <Container>
          <p>Videos</p>
          <h2 className="mb-2">
            Latest <span className="font-bold">YT uploads</span>.
          </h2>
          <p className="mb-8">
            I love to create videos on machine learning related topics. Check it
            out.
          </p>

          <VideoList data={data} />

          <div className="mt-8 flex gap-2">
            <Link href="/videos">
              <a className="btn  bg-[#eeeeee] text-black">View all</a>
            </Link>
            <Link href="/blogs">
              <a className="btn  bg-[#eeeeee] text-black">View youtube</a>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Videos;
