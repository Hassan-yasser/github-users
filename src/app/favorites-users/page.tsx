import dynamic from "next/dynamic";

const Favorites = dynamic(
  () => import("@/components/favorites-layout/Favorites"),
  {
    ssr: true,
  }
);
const page = () => {
  return (
    <div className="bg-[#f4f4f4] min-h-screen p-6 space-y-5">
      <Favorites />;
    </div>
  );
};

export default page;
