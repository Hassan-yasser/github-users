import dynamic from "next/dynamic";

const Favorites = dynamic(
  () => import("@/components/favorites-layout/Favorites"),
  {
    ssr: true,
  }
);
const page = () => {
  return (
    <div className="bg-[#f4f4f4] dark:bg-[#111827] min-h-screen p-6 space-y-5 transition-colors duration-300">
      <Favorites />;
    </div>
  );
};

export default page;
