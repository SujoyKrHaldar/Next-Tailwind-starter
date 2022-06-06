import Container from "./Container";

function Footer() {
  return (
    <>
      <div className="bg-[#f0f0f0] text-[#000000] py-6  mt-auto">
        <Container className="flex items-center justify-between gap-4">
          <p>Copyright ©{new Date().getFullYear()} - All rights reserved.</p>
          <p>Normalized Nerd</p>
        </Container>
      </div>
    </>
  );
}

export default Footer;
