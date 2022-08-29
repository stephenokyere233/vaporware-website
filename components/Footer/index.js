const Footer = () => {
  return (
    <>
      <footer className="p-10 text-center font-medium">
        &copy;{Date().substr(11, 4)} All Rights Reserved Vapourware Studios
      </footer>
    </>
  );
};

export default Footer;
