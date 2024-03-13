import "@/assets/index.css";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen text-black bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate">
      {children}
    </section>
  );
}
