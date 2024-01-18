import "./App.css";
import { router } from "@/Router";
import { RouterProvider } from "react-router-dom";
import { useConnectSocket } from "./Socket";

function App() {
  useConnectSocket();
  return <RouterProvider router={router} />;
}

export default App;
