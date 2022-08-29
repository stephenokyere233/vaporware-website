const Footer = () => {
  return (
    <>
      <footer className="p-10 lg:p-20 text-center font-medium small">
        <p className="opacity-40">&copy;{Date().substr(11, 4)} Vapourware Studios</p>
      </footer>
    </>
  );
};

export default Footer;
