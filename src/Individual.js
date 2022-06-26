import './Individual.css';

export const Individual = ({ position }) => {
  return (
    <span
      data-testid='individual'
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}></span>
  );
};

Individual.defaultProps = {
  position: {
    x: 0,
    y: 0,
  },
};
