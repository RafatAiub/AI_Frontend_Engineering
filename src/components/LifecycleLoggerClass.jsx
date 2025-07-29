import React from "react";
import { motion } from "framer-motion";

class LifecycleLoggerClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, logs: ["🟢 constructor"] };
    this.updateCount = this.updateCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  componentDidMount() {
    this.setState((prev) => ({ logs: [...prev.logs, "✅ componentDidMount"] }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.setState((prev) => ({
        logs: [...prev.logs, `🔄 componentDidUpdate - count is ${this.state.count}`],
      }));
    }
  }

  componentWillUnmount() {
    console.log("❌ componentWillUnmount");
  }

  updateCount() {
    this.setState({ count: this.state.count + 1 });
  }

  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">React Lifecycle Visualizer</h1>
        <p className="text-sm text-gray-600 mb-4">(Class Component)</p>
        <div className="flex flex-wrap gap-4 mb-4">
          <button
            onClick={this.updateCount}
            className="bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-600"
          >
            Update State
          </button>
          <button
            onClick={this.resetCount}
            className="bg-gray-500 text-white px-4 py-2 rounded-xl hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
        <div className="bg-black text-white p-4 rounded-xl h-72 overflow-y-auto">
          {this.state.logs.map((log, index) => (
            <motion.div
              key={index}
              className="text-sm mb-1"
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
  }
}

export default LifecycleLoggerClass;