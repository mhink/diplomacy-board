import {
  INITIAL_VALUE,
  ReactSVGPanZoom,
  TOOL_AUTO,
  POSITION_NONE,
} from 'react-svg-pan-zoom';
import useResizeObserver from "use-resize-observer";

const SVGMap = ({
  children,
}) => {
  const [panZoomNode, setPanZoomNode] = React.useState(null);
  const [panZoomValue, setPanZoomValue] = React.useState(INITIAL_VALUE);
  const [panZoomTool, setPanZoomTool] = React.useState(TOOL_AUTO)
  const [viewInitialized, setViewInitialized] = React.useState(false);
  const {
    ref:    containerRef,
    width:  containerWidth,
    height: containerHeight,
  } = useResizeObserver();

  React.useEffect(() => {
    if (viewInitialized) return;
    if (!panZoomNode) return;
    panZoomNode.fitToViewer("center", "center");
    setViewInitialized(true);
  }, [viewInitialized, panZoomNode]);

  return (
    <div
      ref={containerRef}
      style={{
        width:  "100%",
        height: "100%",
      }}
    >
      {containerRef.current &&
        <ReactSVGPanZoom
          ref={setPanZoomNode}
          width={containerWidth}
          height={containerHeight}
          value={panZoomValue}
          onChangeValue={setPanZoomValue}
          tool={panZoomTool}
          onChangeTool={setPanZoomTool}
          scaleFactorMin={0.75}
          scaleFactorMax={4}
          scaleFactorOnWheel={1.03}
          toolbarProps={{
            position: POSITION_NONE
          }}
        >
          { children }
        </ReactSVGPanZoom>
      }
    </div>
  );

};

export default SVGMap;
