import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForTrick9(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "trick9", `
    MTL #1: Wright
    NJD #2: Slafkovsky
    ARI #3: Nemec
    SEA #4: Cooley
    PHI #5: Kasper
    CBJ #6: Gauthier
    OTT #7: Kemell
    DET #8: Lekkerimäki
    BUF #9: Jiricek
    ANA #10: Korchinski
    SJS #11: Savoie
    CBJ #12: Mintyukov
    NYI #13: Kulich
    WIN #14: Geekie
    VAN #15: Nazar
    BUF #16: Yurov
    NSH #17: Mateychuk
    DAL #18: Östlund
    MIN #19: Öhgren
    WSH #20: Lambert
    PIT #21: Snuggerud
    ANA #22: Howard
    STL# 23: Bichsel
    MIN #24: Chesley
    TOR #25: Del Bel Belluz
    MTL #26: Pickering
    ARI #27: Miro
    BUF #28: McGroarty
    EDM #29: Luneau
    WIN #30: Schaefer
    TBL #31: Firkus
    ARI #32: Hutson
    `)
}

/*
MTL #1: Wright
NJD #2: Slafkovsky
ARI #3: Nemec
SEA #4: Cooley
PHI #5: Kasper
CBJ #6: Gauthier
OTT #7: Kemell
DET #8: Lekkerimaki
BUF #9: Jiricek
ANA #10: Korchinski
SJS #11: Savoie
CBJ #12: Mintyukov
NYI #13: Kulich
WIN #14: Geekie
VAN #15: Nazar
BUF #16: Yurov
NSH #17: Mateychuk
DAL #18: Ostlund
MIN #19: Ohlgren
WSH #20: Lambert
PIT #21: Snuggerud
ANA #22: Howard
STL# 23: Bischel
MIN #24: Chesley
TOR #25: Del Bel Belluz
MTL #26: Pickering
ARI #27: Miroshnichenko
BUF #28: McGroarty
EDM #29: Luneau
WIN #30: Schaefer
TBL #31: Firkus
ARI #32: Hutson
*/