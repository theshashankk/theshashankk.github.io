import Footer from "@/components/Footer";

export const metadata = {
  title: "Shashank | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
