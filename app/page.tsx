import LeftSide from "./components/LeftSide";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="w-full h-screen font-bodyFont bg-bodycolor text-textLight overflow-x-hidden overflow-y-scroll">
      <NavBar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
