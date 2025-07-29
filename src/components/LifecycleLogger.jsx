// src/components/LifecycleLogger.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LifecycleLogger = () => {
  const [count, setCount] = useState(0);
  const [logs, setLogs] = useState(["🟢 Component is mounting..."]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLogs((prev) => [...prev, "✅ componentDidMount (useEffect with [])"]);
    setLoading(true);
    setLogs((prev) => [...prev, "📡 Fetching data from fake API..."]);

    const timer = setTimeout(() => {
      setData({ message: "Fake API data loaded!" });
      setLoading(false);
      setLogs((prev) => [...prev, "✅ Data fetched successfully!"]);
    }, 2000); // simulate 2s delay

    return () => {
      clearTimeout(timer);
      setLogs((prev) => [...prev, "❌ Cleanup: API call aborted (unmounted)"]);
    };
  }, []);

  useEffect(() => {
    if (count !== 0) {
      setLogs((prev) => [...prev, `🔄 componentDidUpdate - count changed to ${count}`]);
    }
  }, [count]);

  return (
    <div className="p-6 max-w-3xl mx-auto border border-green-400 rounded-xl bg-white shadow">
      <h1 className="text-3xl font-bold text-green-600 mb-2">React Lifecycle Visualizer</h1>
      <p className="text-sm text-gray-600 mb-4">(Functional Component)</p>

      <div className="flex flex-wrap gap-4 mb-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
        >
          Update State
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-gray-600"
        >
          Reset
        </button>
      </div>

      {loading ? (
        <div className="text-center text-sm text-yellow-600 animate-pulse mb-4">⏳ Loading data...</div>
      ) : data ? (
        <div className="text-center text-green-700 text-sm mb-4">✅ {data.message}</div>
      ) : null}

      <div className="bg-black text-white p-4 rounded-xl h-72 overflow-y-auto text-sm">
        {logs.map((log, index) => (
          <motion.div
            key={index}
            className="mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {log}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LifecycleLogger;
