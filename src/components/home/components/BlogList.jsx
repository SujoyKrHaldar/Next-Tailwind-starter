import CardblogBox from "../../designs/cards/Card_blog_Box";

function BlogList() {
  return (
    <>
      <div className="flex items-center flex-wrap gap-4">
        <CardblogBox />
        <CardblogBox />
        <CardblogBox />
        <CardblogBox />
      </div>
    </>
  );
}

export default BlogList;
