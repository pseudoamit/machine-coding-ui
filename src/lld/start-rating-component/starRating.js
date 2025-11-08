import { useState } from "react";
// import "./styles.css";

export default function App() {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // If the index is already selected which you clicked means you want to deselect it, so setting the previous index of the selected one
  const handleStarClick = (index) => {
    if (selectedIndex === index + 1) {
      setSelectedIndex(index);
    } else {
      setSelectedIndex(index + 1);
    }
  };

  //on mouse enter
  const handleMouseEnter = (index) => {
    setHoverIndex(index + 1);
  };

  // on mouse leave
  const handleMouseLeave = () => {
    setHoverIndex(0);
  };

  return (
    <div className="App">
      {new Array(10).fill(0).map((_, index) => {
        const isEnabled =
          hoverIndex > 0 ? index < hoverIndex : index < selectedIndex;

        return (
          <span
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {isEnabled ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
}
