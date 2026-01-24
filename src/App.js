import { useState } from "react";
import useTraverseTree from "./hooks/use-traverse-tree";
import AccordionList from "./lld/accordion/AccordionList";
import FileLists from "./lld/fileExplorer/FileLists";
import InfiniteScroll from "./lld/infiniteScroll/infiniteScroll";
import VsCodeFileStructure from "./lld/vsCodeStructure/VsCodeFileStructure";
import { vsCodeMockStructure } from "./mock/vsCode.mock";
import MultiForm from "./lld/multiTabForm/multi-form";
import AutoComplete from "./lld/autocomplete/auto-complete";
import ProgressBar from "./lld/progressBar/progressBar";
import StarRating from "./lld/start-rating-component/starRating";
import CommentList from "./lld/nestedComment/CommentList";
import { commentList } from "./mock/commentList.mock";
import ProductList from "./lld/infinite-scroll-intersection-observer/productList";
import StartResetPauseTimer from "./lld/timer/startResetPauseTimer";
import CounterReset from "./lld/timer/counterReset";
import TimerNto0 from "./lld/timer/timerNto0";
import { ProductList as ProductFetch } from "./lld/product-list-fetching/ProductList";
import StartResetPauseTimerUsingHook from "./lld/timer/startResetPauseTimerUsingHook";
import VirtualizedList from "./lld/virtualization/virtualizedList";
import Modal from "./lld/modal/Modal";
import Notification from "./lld/notification/Notification";

function App() {
  const [explorerData, setExplorerData] = useState(vsCodeMockStructure);
  const { insertNode } = useTraverseTree();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInsertNode = (newFolderId, isFolder, itemName) => {
    const finalTree = insertNode(newFolderId, explorerData, isFolder, itemName);
    setExplorerData(finalTree);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <AccordionList /> */}
      {/* <InfiniteScroll /> */}
      {/* <FileLists /> */}
      {/* <VsCodeFileStructure
        data={explorerData}
        handleInsertNode={handleInsertNode}
      /> */}
      {/* <MultiForm /> */}
      {/* <AutoComplete /> */}
      {/* <ProgressBar /> */}
      {/* <StarRating /> */}
      {/* <CommentList commentList={commentList} /> */}
      {/* <ProductList /> */}
      {/* <ProductList /> */}

      {/* <StartResetPauseTimer /> */}
      {/* <CounterReset /> */}
      {/* <TimerNto0 /> */}
      {/* <StartResetPauseTimerUsingHook /> */}
      {/* <VirtualizedList /> */}
      {/* <button onClick={() => setIsModalOpen(true)}>Show Modal</button>
      <Modal isOpen={isModalOpen} closeModal={handleCloseModal} /> */}
      {/* <Notification /> */}
    </>
  );
}

export default App;
