export default function GameBoard({ onSquareSelect, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSquareSelect(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedGameBoard = [
  //         ...prevGameBoard.map((innerArray) => {
  //           return [...innerArray];
  //         }),
  //       ];
  //       updatedGameBoard[rowIndex][colIndex] = playerActive;
  //       return updatedGameBoard;
  //     });
  //     onSquareSelect();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => {
                        return onSquareSelect(rowIndex, colIndex);
                      }}
                      disabled={playerSymbol}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
