import { useState } from "react";
import useTraverseTree from "./hooks/use-traverse-tree";
import AccordionList from "./lld/accordion/AccordionList";
import FileLists from "./lld/fileExplorer/FileLists";
import InfiniteScroll from "./lld/infiniteScroll/infiniteScroll";
import VsCodeFileStructure from "./lld/vsCodeStructure/VsCodeFileStructure";
import { vsCodeMockStructure } from "./mock/vsCode.mock";
import MultiForm from "./lld/multiTabForm/multi-form";

function App() {
  const [explorerData, setExplorerData] = useState(vsCodeMockStructure);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (newFolderId, isFolder, itemName) => {
    const finalTree = insertNode(newFolderId, explorerData, isFolder, itemName);
    setExplorerData(finalTree);
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
      <MultiForm />
    </>
  );
}

export default App;
