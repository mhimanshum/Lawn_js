import React from 'react';

function Node({ item, selected, hasChildren, level, onToggle }) {
  return (
    <div style={{ paddingLeft: `${level * 16}px` }}>
      {item.label}
      {hasChildren && (
        <button
          onClick={onToggle}
          className={`${
            selected
              ? 'bg-black text-white px-5 py-1.5 rotate-180'
              : 'bg-black text-white px-5 py-1.5 '
          }`}
        >
          v
        </button>
      )}
    </div>
  );
}

export default Node;
