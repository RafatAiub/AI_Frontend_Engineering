// src/pages/Home.jsx
import { useState } from "react";
import LifecycleLogger from "../components/LifecycleLogger";
import LifecycleLoggerClass from "../components/LifecycleLoggerClass";

const Home = () => {
  const [show, setShow] = useState(true);
  const [mode, setMode] = useState("functional");

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-4">
          🔬 React Lifecycle Visualizer
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          See how React components behave during Mounting, Updating, and
          Unmounting. Toggle between functional and class components. Every
          action is logged visually so you can truly understand what happens
          behind the scenes.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setShow(!show)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            {show ? "Unmount Component" : "Mount Component"}
          </button>
          <button
            onClick={() =>
              setMode(mode === "functional" ? "class" : "functional")
            }
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Switch to{" "}
            {mode === "functional" ? "Class Component" : "Functional Component"}
          </button>
        </div>

        <div className="mb-10">
          {show ? (
            mode === "functional" ? (
              <LifecycleLogger />
            ) : (
              <LifecycleLoggerClass />
            )
          ) : (
            <div className="text-center text-gray-500 py-10">
              Component is unmounted. Click "Mount Component" to visualize
              lifecycle again.
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">
            🧠 Lifecycle Phases Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <h3 className="font-bold text-green-700 mb-1">Mounting</h3>
              <ul className="list-disc list-inside">
                <li>constructor</li>
                <li>render</li>
                <li>componentDidMount</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-yellow-600 mb-1">Updating</h3>
              <ul className="list-disc list-inside">
                <li>shouldComponentUpdate</li>
                <li>render</li>
                <li>componentDidUpdate</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-red-600 mb-1">Unmounting</h3>
              <ul className="list-disc list-inside">
                <li>componentWillUnmount</li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-2 text-purple-700">
            🧩 Functional Hook Equivalents
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>
              <code>useEffect(() → {}, [])</code> → Mount (like
              componentDidMount)
            </li>
            <li>
              <code>useEffect(() → {}, [deps])</code> → Update (like
              componentDidUpdate)
            </li>
            <li>
              <code>useEffect(() → {` return () => {} `}, [])</code> → Unmount
              (like componentWillUnmount)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
