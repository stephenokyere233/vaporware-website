import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" passHref>
        <h2 className="text-xl font-bold cursor-pointer select-none hover:opacity-80">vapourware</h2>
      </Link>
    </>
  );
};

export default Logo;
