import { Link } from "react-router-dom";
import { getPoints } from "../../Board";
import { getBoards } from "../../data/boards";
import { getPlayers } from "../../data/players";
import { Layout } from "../../Layout";
import { TBoard } from "../../types";

export const getTotalPoints = (board: TBoard): number => {
    let result = 0;
    board.picks.forEach((pick, i) => {
        result += getPoints(pick, i + 1);
    })
    return result;
}

export function HomePage() {
    const boards = getBoards(getPlayers());
    console.log("got boards", boards)
    return (
        <Layout title={`Boards: ${boards.length}`}>
            {boards.sort((a, b) => {
                return getTotalPoints(a) - getTotalPoints(b);
            }).reverse().map((board, i) => {
                return (
                    <div key={i}>
                        {i + 1}: <Link to={`/board/${board.user}`}>{board.user} ({getTotalPoints(board)})</Link>
                    </div>
                )
            })}
        </Layout>
    )
}