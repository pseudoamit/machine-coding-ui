import AccordionList from "./lld/accordion/AccordionList";
import FileLists from "./lld/fileExplorer/FileLists";
import InfiniteScroll from "./lld/infiniteScroll/infiniteScroll";
import VsCodeFileStructure from "./lld/vsCodeStructure/VsCodeFileStructure";
import { vsCodeMockStructure } from "./mock/vsCode.mock";

function App() {
  return (
    <>
      {/* <AccordionList /> */}
      {/* <InfiniteScroll /> */}
      {/* <FileLists /> */}
      <VsCodeFileStructure data={vsCodeMockStructure} />
    </>
  );
}

export default App;
