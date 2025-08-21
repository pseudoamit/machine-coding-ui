import React from "react";
import FileItems from "./FileItems";
import { explorer } from "../../mock/fileStructure.mock";

const FileLists = () => {
  return (
    <>
      <FileItems data={explorer} />
    </>
  );
};

export default FileLists;
