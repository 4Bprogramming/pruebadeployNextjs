import Image from "next/image";
import NavBar from "../Navbar/NavBar";
import HomeP from "../Home/Home";
export default function App() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   
    <NavBar />
        <br/>
   <HomeP />
    </div>
  );
}
