const News = (props) => {
  const { label } = props;
  return (
    <>
      <div className="bg-[#f1f1f111] p-3">
        <div className="max-w-7xl m-auto opacity-60">
          {label}
        </div>
      </div>
    </>
  );
};

export default News;
