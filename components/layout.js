import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="outer-wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
