import { Board, getPoints } from "./Board"
import { getBoards } from "./data/boards"
import { getPlayers } from "./data/players";
import { TBoard } from "./types";

export const getTotalPoints = (board: TBoard): number => {
    let result = 0;
    board.picks.forEach((pick, i) => {
        result += getPoints(pick, i + 1);
    })
    return result;
}

export function Boards() {
    return (
        <div>
            {getBoards(getPlayers()).map((board, i) => {
                return (
                <div key={i}>
                    <div>{board.user} / {getTotalPoints(board)}</div>
                    <Board board={board} />
                </div>
                )
            })}
        </div>
    )
}