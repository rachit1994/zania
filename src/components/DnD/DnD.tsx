import React, { ReactNode } from "react";

interface DnDComponentProps {
  children: ReactNode;
  index: number;
  updated: (from: number, to: number) => void;
}

const DnDComponent = ({
  children,
  index,
  updated,
}: DnDComponentProps) => {
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    // Store the index in the DataTransfer object for cross-event access
    e.dataTransfer.setData("text/plain", index.toString());
    e.dataTransfer.effectAllowed = "move";
    e.currentTarget.setAttribute("aria-grabbed", "true");
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.setAttribute("aria-grabbed", "false");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Necessary to allow for dropping
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // Retrieve the index from the DataTransfer object
    const fromIndex = parseInt(e.dataTransfer.getData("text/plain"));
    const toIndex = parseInt(e.currentTarget.dataset.index!);
    if (!isNaN(fromIndex) && fromIndex !== toIndex) {
      updated(fromIndex, toIndex);
    }
  };

  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, index)}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      data-index={index}
      role="button" // Make it accessible as a button
      tabIndex={0} // Make it focusable
      className={`p-4 mb-2 bg-gray-200 rounded shadow cursor-move`}
    >
      {children}
    </div>
  );
};

export default DnDComponent;