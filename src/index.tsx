import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="bg-yellow-100">
      <h1 className="text-red-500">Hello World</h1>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
