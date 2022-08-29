import Link from "next/link";
import styles from "./styles";

const GetStarted = () => {
  return (
    <>
      <section className="bg-[#f1f1f111] p-32 -mt-2">
        <div className="max-w-5xl m-auto">
          <h2 className="text-5xl font-bold">
            We bring your ideas to life. Let’s make it happen.
          </h2>
          <div className="border-b lg:text-2xl my-10 mb-0 w-max">
            <p className={styles.link}>
              <Link href="/">Let&apos;s talk</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
