import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForPuckProspects(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "PuckProspects", `
    MON: Slafkovsky
    NJD: Wright
    ARI: Cooley
    SEA: Nemec
    PHI: Gauthier
    CBJ: Jiricek
    CHI: Kemell
    DET: Kasper
    BUF: Lekkerimäki
    ANA: Korchinski
    SJS: Savoie
    CBJ: Mintyukov
    NYI: Geekie
    WPG: Bichsel
    VAN: Pickering
    BUF: Gaucher
    NAS: Mateychuk
    DAL: Nazar
    Min: Snuggerud
    WAS: Lambert
    PIT: McGroarty
    ANA: Östlund
    STL: Chesley
    MIN: Öhgren
    TOR: Kulich
    MON: Yurov
    ARI: Warren
    BUF: Howard
    EDM: Belluz
    WPG: Schaefer
    TBL: Mesar
    ARI: Rinzel
    `)
}

/*
MON	Slafkovsky
NJD	Wright
ARI	Cooley
SEA	Nemec
PHI	Gauthier
CBJ	Jiricek
CHI	Kemell
DET	Kasper
BUF	Lekkermaki
ANA	Korchinski
SJS	Savoie
CBJ	Mintyukov
NYI	Geekie
WPG	Bichsel
VAN	Pickering
BUF	Gaucher
NAS	Mateychuk
DAL	Nazar
Min	Snuggerud
WAS	Lambert
PIT	McGroarty
ANA	Ostlund
STL	Chesley
MIN	Ohgren
TOR	Kulich
MON	Yurov
ARI	Warren
BUF	Howard
EDM	Belluz
WPG	Schaefer
TBL	Mesar
ARI	Rinzel
*/