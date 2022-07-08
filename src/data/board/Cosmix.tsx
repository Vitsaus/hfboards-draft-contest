import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForCosmix(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Cosmix", `
    1: Wright
    2: Slafkovsky
    3: Cooley
    4: Nemec
    5: Jiricek
    6: Gauthier
    7: Kasper
    8: Kemell
    9: Lekkerimäki
    10: Mintyukov
    11: Savoie
    12: Korchinski
    13: Kasper
    14: Yurov
    15: Öhgren
    16: Geekie
    17: Bichsel
    18: Lambert
    19: Mateychuk
    20: Howard
    21: Kulich
    22: Snuggerud
    23: Pickering
    24: Miroshnichenko
    25: Östlund
    26: McGroarty
    27: Luneau
    28: Chesley
    29: Warren
    30: Beck
    31: Mesar
    32: Hughes
    `)
}

/*
1: Wright
2: Slafkovsky
3: Cooley
4: Nemec
5: Jiricek
6: Gauthier
7: Kasper
8: Kemell
9: Lekkerimaki
10: Mintyukov
11: Savoie
12: Korchinski
13: Kaspar
14: Yurov
15: Ohgren
16: Geekie
17: Bichsel
18: Lambert
19: Mateychuk
20: Howard
21: Kulich
22: Snuggerud
23: Pickering
24: Miroshnichenko
25: Ostlund
26: McGroarty
27: Luneau
28: Chesley
29: Warren
30: Beck
31: Mesar
32: Hughes
*/