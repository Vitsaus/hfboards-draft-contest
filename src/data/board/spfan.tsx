import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForSpfan(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "spfan", `
    1: Shane Wright
    2: Juraj Slafkovsky
    3: Logan Cooley
    4: Simon Nemec
    5: David Jiricek
    6: Cutter Gauthier
    7: Joakim Kemell
    8: Matthew Savoie
    9: Jonathan Lekkerimäki
    10: Kevin Korchinski
    11: Marco Kasper
    12: Pavel Mintyukov
    13: Frank Nazar
    14: Conor Geekie
    15: Liam Öhgren
    16: Nathan Gaucher
    17: Denton Mateychuk
    18: Danila Yurov
    19: Brad Lambert
    20: Ivan Miro
    21: Jimmy Snuggerud
    22: Lian Bichsel
    23: Owen Pickering
    24: Jagger Firkus
    25: Ryan Chesley
    26: Jiri Kulich
    27: Rutger McGroarty
    28: Noah Östlund
    29: Filip Mesar
    30: Isaac Howard
    31: Sam Rinzel
    32: Seamus Casey
    `)
}

/*
Shane Wright
Juraj Slafkovsky
Logan Cooley
Simon Nemec
David Jiricek
Cutter Gauthier
Joakim Kemell
Matt Savoie
Jonathan Lekkerimaki
Kevin Korchinski
Marco Kasper
Pavel Mintyukov
Frank Nazar
Connor Geekie
Liam Ohgren
Nathan Gaucher
Denton Mateychuk
Danila Yurov
Brad Lambert
Ivan Miroshnichenko
Jimmy Snuggerud
Lian Bichsel
Owen Pickering
Jagger Firkus
Ryan Chesley
Jiri Kulich
Rutger McGroarty
Noah Ostlund
Filip Mesar
Isaac Howard
Sam Rinzel
Seamus Casey
*/