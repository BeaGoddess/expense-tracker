export default function AppDetails() {
  return (
    <div className="bg-[#7574C7] rounded-t-xl p-6 md:rounded-l-xl md:rounded-tr-none md:p-16 md:w-full md:max-w-[50%]">
      <div className="my-5 md:text-[50px] font-bold text-[32px] leading-tight md:pt-10">
        <span className="text-[#AEA9F2]">E</span>xpense{" "}
        <span className="text-[#AEA9F2]">T</span>racker
      </div>

      <div className="text-justify my-5 md:text-base text-sm font-light md:pb-10">
        Welcome! This is a personal project created for easily manage your
        finances by tracking your expenses. Sign in to start taking control of
        your financial journey.
      </div>
    </div>
  );
}
