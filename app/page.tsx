import LeftSide from "./components/LeftSide";
import NavBar from "./components/NavBar";
import RightSide from "./components/RightSide";

export default function Home() {
  return (
    <div className="w-full mx-7 h-screen font-bodyFont bg-bodycolor text-textLight overflow-x-hidden overflow-y-scroll">
      <NavBar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <div className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide />
        </div>
        <div>Middle</div>
        <div className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide />
        </div>
      </div>
    </div>
  );
}
