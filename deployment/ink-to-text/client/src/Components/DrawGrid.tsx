import React, { Fragment, useRef, useEffect, useState } from "react";

interface IProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const DrawGrid: React.FC<IProps> = ({ canvasRef }) => {
  const width = 400,
    height = 400,
    boxSize = 10;
  // const [xPos, setxPos] = useState<number>(0);
  // const [yPos, setyPos] = useState<number>(0);

  // Draw a grid layout on load
  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.strokeStyle = "gray";
    for (let x = 0; x < width; x += boxSize) {
      for (let y = 0; y < height; y += boxSize) {
        ctx.strokeRect(x, y, boxSize, boxSize);
      }
    }
  }, []);

  const fillGridSquare = (xPos: number, yPos: number) => {
    const canvas: HTMLCanvasElement = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = 'gray';
    ctx.fillRect(xPos, yPos, boxSize, boxSize);
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => draw(e);
  const handleMouseClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => draw(e);

  const draw = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (e.buttons === 1) {
      const canvas: HTMLCanvasElement = canvasRef.current!;
      const canvasX = canvas.getBoundingClientRect().x;
      const canvasY = canvas.getBoundingClientRect().y;
      const xPos = Math.floor((e.clientX - canvasX) / boxSize) * boxSize;
      const yPos = Math.floor((e.clientY - canvasY) / boxSize) * boxSize;
      fillGridSquare(xPos, yPos);
    }
  };

  return (
    <Fragment>
      <canvas
        style={{ border: "2px solid #8B8B8B" }}
        ref={canvasRef}
        width={400}
        height={400}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseClick}
      />
    </Fragment>
  );
};

export default DrawGrid;
