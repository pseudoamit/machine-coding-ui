import { useState } from "react";

export default function StarRating() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  const handleStarClick = (index) => {
    if (selectedIndex === index + 1) {
      setSelectedIndex(0); // toggle off if same star is clicked
    } else {
      setSelectedIndex(index + 1);
    }
  };

  const handleStarEnter = (index) => {
    setHoverIndex(index + 1); // temporary preview
  };

  const handleStarLeave = () => {
    setHoverIndex(0); // reset preview when mouse leaves
  };

  return (
    <div className="App">
      {new Array(10).fill(0).map((_, index) => {
        const isFilled =
          hoverIndex > 0
            ? index < hoverIndex // show hover preview
            : index < selectedIndex; // fallback to selected value

        return (
          <span
            key={index}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarEnter(index)}
            onMouseLeave={handleStarLeave}
            style={{ fontSize: "24px", cursor: "pointer" }}
          >
            {isFilled ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
}
