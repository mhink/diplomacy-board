import polylabel from "polylabel";

import { BoardContext } from "./BoardView";

const Region = ({
  id,
  path,
  name,
  children,
  ...restProps
}) => {
  const board = React.useContext(BoardContext);
  const [pathNode, setPathNode] = React.useState(null);
  const handleClick = React.useCallback(() => {
    console.log("clicked:", id);
  }, [id]);

  const [center, setCenter] = React.useState(null);
  
  React.useEffect(() => {
    if (!pathNode)  return;
    if (center)     return;
    const points      = [];
    const totalLength = pathNode.getTotalLength();
    for (let i = 0; i < 100; i++) {
      const distance = (totalLength / 100) * i;
      const { x, y } = pathNode.getPointAtLength(distance);
      points.push([x, y]);
    }
    const p = polylabel([points]);
    setCenter(p);
  }, [pathNode, center]);

  if (!board) return null;

  const province = board.getProvinceById(id);

  return (
    <>
      <path
        id={id}
        ref={setPathNode}
        style={{
          fill: (
            province.hasFlag("land") ? "green" :
            province.hasFlag("sea") ? "blue" :
            "black"
          )
        }}
        stroke="#000000"
        strokeWidth="1"
        {...restProps}
        d={path}
        onClick={handleClick}
      />
      {center && (
        <text
          style={{
            textAnchor: "middle",
            fontSize:   "8px",
            textDecoration: province.hasFlag("supply-center") ? "underline" : "normal",
          }}
          x={center[0]}
          y={center[1]}
          r={1}
        >
          { id.toUpperCase() }
        </text>
      )}
    </>
  );
};

export default Region;
