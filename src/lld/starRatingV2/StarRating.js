import { useState } from "react";
import { MdStar, MdOutlineStarBorder } from "react-icons/md";

const StarRating = ({
  max = 5,
  defaultRating = 0,
  activeColor = "#ffc107",
  inactiveColor = "#e4e5e9",
}) => {
  const [clickRating, setClickRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (id) => {
    setClickRating(id);
  };

  return (
    <>
      <div onMouseLeave={() => setHoverRating(0)}>
        {Array.from({ length: max }, (_, index) => {
          const value = index + 1;
          const active = value <= (hoverRating || clickRating);
          const Icon = active ? MdStar : MdOutlineStarBorder;
          return (
            <span
              onClick={() => handleClick(value)}
              onMouseEnter={() => setHoverRating(value)}
              style={{ cursor: "pointer" }}
            >
              <Icon size={28} color={active ? activeColor : inactiveColor} />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default StarRating;
