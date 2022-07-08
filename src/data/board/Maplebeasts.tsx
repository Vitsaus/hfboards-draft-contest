import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function getBoardForMaplebeasts(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Maplebeasts", `
    1: Wright
    2: Slafkovsky
    3: Cooley
    4: Nemec
    5: Jiricek
    6: Gauthier
    7: Savoie
    8: Nazar
    9: Lekkerimäki
    10: Mintyukov
    11: Kemell
    12: Kasper
    13: Korchinski
    14: Yurov
    15: Öhgren
    16: Geekie
    17: Bichsel
    18: Howard
    19: Mateychuk
    20: Lambert
    21: Kulich
    22: Snuggerud
    23: Pickering
    24: Miroshnichenko
    25: Östlund
    26: McGroarty
    27: Gaucher
    28: Chesley
    29: Odelius
    30: Beck
    31: Mesar
    32: Firkus
    `)
}

/*
1: Wright
2: Slafkovsky
3: Cooley
4: Nemec
5: Jiricek
6: Gauthier
7: Savoie
8: Nazar
9: Lekkerimaki
10: Mintyukov
11: Kemell
12: Kasper
13: Korchinski
14: Yurov
15: Ohgren
16: Geekie
17: Bichsel
18: Howard
19: Mateychuk
20: Lambert
21: Kulich
22: Snuggerud
23: Pickering
24: Miroshnichenko
25: Ostlund
26: McGroarty
27: Gaucher
28: Chesley
29: Odelius
30: Beck
31: Mesar
32: Firkus
*/