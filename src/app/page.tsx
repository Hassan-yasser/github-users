import ReusebleHeader from "@/components/header/ReusebleHeader";
import LoaderPage from "@/components/Loader-Errors/LoaderPage";
import dynamic from "next/dynamic";

const UserContanier = dynamic(
  () => import("@/components/users-layout/UserContanier"),
  {
    loading: () => <LoaderPage />,
    ssr: true,
  }
);

export default function UsersHome() {
  return <UserContanier />;
}
