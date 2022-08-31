import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png"

const Logo = () => {
  return (
    <>
      <Link href="/" passHref>
       <Image width={50} height={50} src={logo} alt="vapourware_logo" />
      </Link>
    </>
  );
};

export default Logo;
