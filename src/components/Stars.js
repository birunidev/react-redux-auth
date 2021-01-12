import React from "react";

export default function Stars({ num }) {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= num) {
      stars.push(
        <img
          key={i}
          id="star-filled"
          className="star-icon"
          src="/assets/star.svg"
          alt=""
        />
      );
    } else {
      stars.push(
        <img
          key={i}
          id="star-outlined"
          className="star-icon"
          src="/assets/star-outlined.svg"
          alt=""
        />
      );
    }
  }

  return (
    <div className="flex items-center justify-center sm:justify-start mt-2">
      {stars}
    </div>
  );
}
