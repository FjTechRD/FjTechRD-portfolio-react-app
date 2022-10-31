import React, { useState } from "react";

import { FaStar } from "react-icons/fa";

const RatingStar = () => {
  const [ratingStar, setRatingStar] = useState(null);
  const [hoverStar, setHoverStar] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRatingStar(ratingValue)}
            />
            <FaStar
              size={20}
              className="star__rating"
              color={
                ratingValue <= (hoverStar || ratingStar) ? "#ffae00" : "#030218"
              }
              onMouseEnter={() => setHoverStar(ratingValue)}
              onMouseLeave={() => setHoverStar(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStar;
