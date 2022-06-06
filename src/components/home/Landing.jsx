import Container from "../layout/Container";

function Landing() {
  return (
    <>
      <div className="w-full h-[90vh]">
        <Container className="flex items-center justify-start">
          <div className="max-w-xl py-4">
            <p className="mt-4 text-xl">Hello, People from the future</p>
            <h1>
              I am <span className="font-bold">Sujan Dutta</span>{" "}
              <span className="block">
                aka the <span className="font-bold">Normalized Nerd</span>.
              </span>
            </h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Landing;
