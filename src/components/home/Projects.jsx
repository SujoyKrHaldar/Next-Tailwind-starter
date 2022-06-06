import Link from "next/link";
import Container from "../layout/Container";

function Projects() {
  return (
    <>
      <div className="w-full h-full py-16">
        <Container>
          <p>Projects</p>
          <h2 className="mb-2">
            Featured <span className="font-bold">Projects</span>.
          </h2>
          <p>
            I love to create projects on machine learning related topics. Check
            it
          </p>

          <Link href="/projects">
            <a className="btn mt-8 bg-[#eeeeee] text-black">View all</a>
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Projects;
