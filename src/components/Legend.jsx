import React from 'react';

export default function Legend({ items }) {
  return (
    <div className="legend">
      <svg>
        {items.map((item, index, arr) => {
          if (index < arr.length() - 1) {
            return (
              <>
                <line />
                <line />
                <line />
              </>
            );
          } else {
            return (
              <>
                <line />
                <line />
                <line />
              </>
            );
          }
        })}
      </svg>
    </div>
  );
}
