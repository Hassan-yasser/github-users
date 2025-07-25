import dynamic from "next/dynamic";

const ListUsersHeader = dynamic(
  () => import("@/components/users-layout/ListUsersHeader"),
  {
    loading: () => <div>Loading header...</div>,
    ssr: true,
  }
);

const Usersbody = dynamic(() => import("@/components/users-layout/Usersbody"), {
  loading: () => <div>Loading users...</div>,
  ssr: true,
});

export default function UsersHome() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen p-6 space-y-5">
      <ListUsersHeader />
      <Usersbody />
    </div>
  );
}
