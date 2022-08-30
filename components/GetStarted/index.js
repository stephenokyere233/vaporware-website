import StartLink from "../StartLink";

const GetStarted = () => {
  return (
    <>
      <section className="bg-[#f1f1f111] lg:p-32 p-10 py-20">
        <div className="max-w-5xl m-auto">
          <h2 className="lg:text-6xl text-5xl font-bold">
            Let&apos;s work together to make your ideas a reality.
          </h2>
          <StartLink />
        </div>
      </section>
    </>
  );
};

export default GetStarted;
