import { toPairs } from "lodash";
import * as classical from "classical.dip.js";

const Region = ({
  id,
  path,
  children,
  ...restProps
}) => (
  <path
    id={id}
    stroke="#000000"
    strokeWidth="1"
    {...restProps}
    d={path}
  />
);

ReactDOM.render(
  <svg viewBox="0 0 610 560">
    {toPairs(classical.provinces).map(([key, value]) => {
      return <Region
        key={key}
        id={key}
        style={{
          fill: (
            value.land ? "green" :
            value.sea  ? "blue"  :
            "black"
          )
        }}
        path={value.path}
      />
    })}
  </svg>,
  document.getElementById("root"),
);
