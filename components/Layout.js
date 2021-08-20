import Navbar from "@components/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto">{children}</main>
    </div>
  );
}

export default Layout;
