import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForPatmac40(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Patmac40", `
    1: Juraj Slafkovsky
    2: Shane Wright
    3: Logan Cooley
    4: Simon Nemec
    5: Cutter Gauthier
    6: David Jiricek
    7: Joakim Kemell
    8: Marco Kasper
    9: Jonathan Lekkerimäki
    10: Kevin Korchinski
    11: Matthew Savoie
    12: Frank Nazar
    13: Nathan Gaucher
    14: Conor Geekie
    15: Liam Öhgren
    16: Pavel Mintyukov
    17: Jimmy Snuggerud
    18: Lian Bichsel
    19: Jagger Firkus
    20: Danila Yurov
    21: Noah Östlund
    22: Jiri Kulich
    23: Rutger McGroarty
    24: Denton Mateychuk
    25: Brad Lambert
    26: Filip Mesar
    27: Ivan Miro
    28: Lane Hutson
    29: Owen Pickering
    30: Sam Rinzel
    31: Owen Beck
    32: Ryan Chesley
    `)
}

/*
Juraj Slafkovsky
Shane Wright
Logan Cooley
Simon Nemec
Cutter Gauthier
David Jiricek
Joakim Kemell
Marco Kasper
Jonathan Lekkerimaki
Kevin Korchinski
Matt Savoie
Frank Nazar
Nathan Gaucher
Connor Geekie
Liam Ohgren
Pavel Mintyukov
Jimmy Snuggerund
Lian Bischel
Jagger Firkus
Danila Yurov
Noah Ostlund
Jiri Kulich
Rutger McGroarty
Denton Mateychuk
Brad Lambert
Filip Mesar
Ivan Miroshnichenko
Lane Hutson
Owen Pickering
Sam Rinzel
Owen Beck
Ryan Chesley

*/
