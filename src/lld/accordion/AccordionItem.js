import React from "react";

const AccordionItem = ({
  accordionHeader,
  accordionContent,
  index,
  openIndexes,
  setOpenIndexes,
}) => {
  const isOpen = openIndexes.includes(index);

  const handleAccordionClick = () => {
    if (isOpen) {
      setOpenIndexes(openIndexes?.filter((item) => item !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };
  return (
    <>
      <div
        style={{
          padding: "1rem 1rem",
          backgroundColor: "#777",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          onClick={handleAccordionClick}
        >
          <span>{accordionHeader}</span>
          <span>
            <i class="fa-solid fa-chevron-down"></i>
          </span>
        </div>
        {isOpen && <div>{accordionContent}</div>}
      </div>
    </>
  );
};

export default AccordionItem;
