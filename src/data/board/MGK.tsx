// MGK

import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function getBoardForMGK(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "MGK", `
    1: Cooley
    2: Slaf
    3: Wright
    4: Nemec
    5: Gauthier
    6: Jiricek
    7: Kemell
    8: Lekkerimäki
    9: Savoie
    10: Kasper
    11: Korchinski
    12: Geekie
    13: Mintyukov
    14: Nazar
    15: Lambert
    16: Snuggerud
    17: Kulich
    18: Yurov
    19: Howard
    20: Öhgren
    21: Östlund
    22: Pickering
    23: Mateychuk
    24: Chesley
    25: Miro
    26: Bichsel
    27: McGroarty
    28: Gaucher
    29: Belluz
    30: Mesar
    31: Rinzel
    32: Luneau
    `)
}

/*
Cooley
Slafovsky
Wright
Nemec
Gauthier
Jiricek
Kemell
Lekkerimaki
Savoie
Kasper
Korchinski
Geekie
Mintyukov
Nazar
Lambert
Snuggerud
Kulich
Yurov
Howard
Ohgren
Ostlund
Pickering
Mateychuk
Chesley
Miroschnichenko
Bichsel
McGroarty
Gaucher
Belluz
Mesar
Rinzel
Luneau
*/