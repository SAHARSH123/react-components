import "./App.css";
// import CounterMain from "./components/CountDownTimer/CounterMain";
// import Fetch from "./components/Fetch/Fetch";
// import InfiniteScrollerMain from "./components/Final/InfiniteScroller/InfiniteScrollerMain";
// import Folder from "./components/Folders/Folder";
// import { data } from "./components/Folders/FolderData";
// import Test from "./components/Practice/Test";
// import TableMain from "./components/Table/TableMain";
// import Tabs from "./components/Tabs/Tabs";
// import InfiniteScrollerMain from "./components/InfiniteScroller/InfiniteScrollerMain";
// import TabMain from "./components/Tab/TabMain";
// import BoxMain from "./components/BoxChallange/BoxMain";
import CarouselMain from "./components/ImageCarousel/CarouselMain";

function App() {
  return (
    <div className="App">
      {/* <TabMain /> */}
      {/* <InfiniteScrollerMain searchTerm="spy" /> */}
      {/* <InfiniteScrollerMain /> */}
      {/* <Test /> */}
      {/* <Folder explorerData={data} /> */}
      {/* <Fetch /> */}
      {/* <CounterMain /> */}
      {/* <Tabs /> */}
      {/* <TableMain /> */}
      {/* {<BoxMain />} */}
      <CarouselMain />
    </div>
  );
}

export default App;
