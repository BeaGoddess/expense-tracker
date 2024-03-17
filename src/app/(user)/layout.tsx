import "@/assets/index.css";
import NavBar from "@/components/Navbar/Navbar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen min-w-fit text-black bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate sm:flex-row flex-col">
      <NavBar />
      {children}
    </section>
  );
}
