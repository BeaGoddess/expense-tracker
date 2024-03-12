import "@/assets/index.css";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return <section className="h-screen bg-white">{children}</section>;
}
