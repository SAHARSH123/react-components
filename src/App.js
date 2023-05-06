import "./App.css";
import CounterMain from "./components/CountDownTimer/CounterMain";
import Fetch from "./components/Fetch/Fetch";
import InfiniteScrollerMain from "./components/Final/InfiniteScroller/InfiniteScrollerMain";
import Folder from "./components/Folders/Folder";
import { data } from "./components/Folders/FolderData";
import Test from "./components/Practice/Test";
// import InfiniteScrollerMain from "./components/InfiniteScroller/InfiniteScrollerMain";
// import TabMain from "./components/Tab/TabMain";

function App() {
  return (
    <div className="App">
      {/* <TabMain /> */}
      {/* <InfiniteScrollerMain searchTerm="spy" /> */}
      {/* <InfiniteScrollerMain /> */}
      {/* <Test /> */}
      {/* <Folder explorerData={data} /> */}
      {/* <Fetch /> */}
      <CounterMain />
    </div>
  );
}

export default App;
