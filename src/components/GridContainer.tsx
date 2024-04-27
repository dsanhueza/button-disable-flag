import { FC } from 'react';

interface GridContainerI {
  children: any;
}

const GridContainer: FC<GridContainerI> = ({
  children
}) => {
  return (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "10px",
    }}
  >
    {children}
  </div>
  )
}

export default GridContainer