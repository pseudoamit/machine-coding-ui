import React, { useState } from "react";
import { accordionData } from "../../mock/accordion.mock";
import AccordionItem from "./AccordionItem";

const AccordionList = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        {accordionData &&
          accordionData?.length > 0 &&
          accordionData?.map((item, index) => (
            <AccordionItem
              accordionHeader={item.title}
              accordionContent={item.content}
              index={index}
              openIndexes={openIndexes}
              setOpenIndexes={setOpenIndexes}
            />
          ))}
      </div>
    </>
  );
};

export default AccordionList;
