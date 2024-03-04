import AppDetails from "@/components/AppDetails";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-screen bg-gradient-to-r from-[#8E8CDA] to-[#C0BAFF] flex items-center justify-center">
      <div className="w-full flex flex-col md:flex-row md:max-w-[900px] md:m-2 m-2">
        <AppDetails />
        {children}
      </div>
    </section>
  );
}
