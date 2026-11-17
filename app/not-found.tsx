import Link from "next/link";
import Container from "components/shared/Container";

const NotFound = () => {
  return (
    <Container className="text-center my-16 sm:my-20 flex flex-col gap-4 justify-center items-center text-[#132841] pt-12 md:pt-24">
      <h1 className="font-extrabold text-7xl lg:text-9xl text-[#132841]">
        Oops
      </h1>
      <p className="mt-5 font-bold text-lg">404 - PAGE NOT FOUND</p>
      <div>
        <p>The page you looking for might have been removed, or</p>
        <p>{`had it's name changed or is temporarily unavailable`}</p>
      </div>
      <Link href={"/"}>
        <button className="btn-slide-primary rounded-lg px-6 py-3 font-semibold">
          GO TO HOMEPAGE
        </button>
      </Link>
    </Container>
  );
};

export default NotFound;
