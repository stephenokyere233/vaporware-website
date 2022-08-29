import Image from "next/image";
import Link from "next/link";
import img1 from "../../assets/1.png";

const Flex = () => {
  return (
    <>
      <section className="bg-[#f1f1f111]">
        <div className="flex items-center justify-between">
          <div className="flex-1 p-10">
            <p className="text-7xl font-bold">
              Vapourware menu We bring your ideas to Life
            </p>
            <p className="border-b text-2xl my-10 mb-0 w-max">
              <Link href="/">Let&apos;s talk</Link>
            </p>
          </div>
          <div className="flex-1">
            <Image src={img1} alt="..." />
          </div>
        </div>
      </section>
    </>
  );
};

export default Flex;
