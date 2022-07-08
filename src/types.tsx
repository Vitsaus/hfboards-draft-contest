export type TBoard = {
    user: string;
    picks: TPick[];
}

export type TPlayer = {
    position: number;
    name: string;
}

export type TPick = {
    player: TPlayer;
}