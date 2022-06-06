import Link from "next/link";
import Container from "../layout/Container";
import BlogList from "./components/BlogList";

function Blog() {
  return (
    <>
      <div className="w-full h-full py-16">
        <Container>
          <p>Blogs</p>
          <h2 className="mb-2">
            Latest <span className="font-bold">Articles</span>.
          </h2>
          <p className="mb-8">
            Read my latest blogs and let me know is it helpfull or not!
          </p>

          <BlogList />

          <Link href="/blogs">
            <a className="btn mt-8 bg-[#eeeeee] text-black">Read more</a>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Blog;
