import Thala from "./Components/Thala";
import Snowfall from "react-snowfall";
export default function App() {
  return (
    <>
      <div className="flex h-screen w-full justify-center align-middle items-center bg-gradient-to-r  from-black to-gray-900">
        <Snowfall/>
        <Thala />
      </div>
    </>
  )
}