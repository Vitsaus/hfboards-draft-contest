import { TBoard, TPick } from "./types"

type Props = {
    board: TBoard;
}

export const getPoints = (pick: TPick, position: number): number => {
    const difference = getDifference(position, pick.player.position);
    if (difference === 0) {
        return 3;
    }
    if (difference === 1) {
        return 2;
    }
    if (difference === 2) {
        return 1;
    }
    return 0;
}

export function getDifference(a: number, b: number): number {
    return Math.abs(a - b);
}

export function Board(props: Props) {
    const {
        board
    } = props;

    let total = 0;

    return (
        <div>
            <div>
                {board.user}
            </div>
            <div>
                {board.picks.map((pick, i) => {
                    const position = i + 1;
                    const points = getPoints(pick, position);
                    total += points;
                    return (
                        <div key={i}>{position} / {points}: {pick.player.name}</div>
                    )
                })}
            </div>
            <div>
                Total: {total}
            </div>
        </div>
    )
}