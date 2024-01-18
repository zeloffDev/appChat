import "./App.css";
import { router } from "@/Router";
import { RouterProvider } from "react-router-dom";
import { connectSocket } from "./Socket";

function App() {
  connectSocket();
  return <RouterProvider router={router} />;
}

export default App;
