import "./App.css";
import InfiniteScrollerMain from "./components/InfiniteScroller/InfiniteScrollerMain";
// import TabMain from "./components/Tab/TabMain";

function App() {
  return (
    <div className="App">
      {/* <TabMain /> */}
      <InfiniteScrollerMain searchTerm="spy" />
    </div>
  );
}

export default App;
