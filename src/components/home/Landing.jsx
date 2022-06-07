import BackgroundImage from "../designs/others/BackgroundImage";
import Container from "../layout/Container";

function Landing() {
  return (
    <>
      <div className="w-full h-[90vh]">
        <BackgroundImage
          src="https://images.unsplash.com/photo-1587713714775-fa70364f6445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=482&q=80"
          alt=""
        />
        <Container className="flex items-center justify-start">
          <div className="max-w-xl mx-auto text-center py-4">
            <h1 className="bg-white px-8 py-4 font-bold">
              Next.js Tailwind Starter
            </h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Landing;
