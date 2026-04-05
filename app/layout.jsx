import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Pulse",
  keywords: "real estate, property, listings, agents, market trends",
  description: "Find the perfect rental property.",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <head></head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
