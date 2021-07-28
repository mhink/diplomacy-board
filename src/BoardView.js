import Board from "Board";

export const BoardContext = React.createContext();

const BoardView = ({
  boardConfig,
  children,
}) => {
  console.log("boardConfig", boardConfig);
  const board = React.useMemo(() => new Board());

  console.log("board:", board);
  React.useEffect(() => {
    if (board.initialized) return;
    board.initialize(boardConfig);
  }, [boardConfig]);

  console.log("children:", children);

  return (
    <BoardContext.Provider value={board}>
      { children }
    </BoardContext.Provider>
  );
};

export default BoardView;
