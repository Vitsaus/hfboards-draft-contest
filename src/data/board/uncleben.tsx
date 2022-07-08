import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForUncleben(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "uncleben", `
    1. MTL: Shane Wright
    2. NJD: Logan Cooley
    3. ARI: Juraj Slafkovsky
    4. SEA: Simon Nemec
    5. PHI: David Jiricek
    6. CBJ: Matthew Savoie
    7. OTT: Joakim Kemell
    8. DET: Frank Nazar
    9. BUF: Jonathan Lekkerimäki
    10. ANA: Cutter Gauthier
    11. SJS: Brad Lambert
    12. CBJ: Danila Yurov
    13. NYI: Conor Geekie
    14. WIN: Pavel Mintyukov
    15. VAN: Marco Kasper
    16. BUF: Denton Mateychuk
    17. NSH: Kevin Korchinski
    18. DAL: Rutger McGroarty
    19. MIN: Liam Öhgren
    20. WSH: Ivan Miroshnichenko
    21. PIT: Isaac Howard
    22. ANA: Noah Östlund
    23. STL: Filip Mesar
    24. MIN: Ryan Chesley
    25. TOR: Jimmy Snuggerud
    26. MTL: Jiri Kulich
    27. ARI: Lian Bichsel
    28. BUF: Owen Pickering
    29. EDM: Tristan Luneau
    30. WIN: Seamus Casey
    31. TBL: Nathan Gaucher
    32. ARI: Gleb Trikozov
    `)
}

/*
1. MTL: Shane Wright (C)
2. NJD: Logan Cooley (C)
3. ARI: Juraj Slafkovsky (LW)
4. SEA: Simon Nemec (RD)
5. PHI: David Jiricek (RD)
6. CBJ: Matthew Savoie (C)
7. OTT: Joakim Kemell (RW)
8. DET: Frank Nazar (RW)
9. BUF: Jonathan Lekkerimaki (C)
10. ANA: Cutter Gauthier (LW)
11. SJS: Brad Lambert (RW)
12. CBJ: Danila Yurov (C)
13. NYI: Conor Geekie (C)
14. WIN: Pavel Mintyukov (LD)
15. VAN: Marco Kasper (C)
16. BUF: Denton Mateychuk (LD)
17. NSH: Kevin Korchinski (LD)
18. DAL: Rutger McGroarty (LW)
19. MIN: Liam Ohgren (LW)
20. WSH: Ivan Miroshnichenko (RW)
21. PIT: Isaac Howard (LW)
22. ANA: Noah Ostlund (C)
23. STL: Filip Mesar (RW)
24. MIN: Ryan Chesley (RD)
25. TOR: Jimmy Snuggerud (RW)
26. MTL: Jiri Kulich (C)
27. ARI: Lian Bichsel (LD)
28. BUF: Owen Pickering (LD)
29. EDM: Tristan Luneau (RD)
30. WIN: Seamus Casey (RD)
31. TBL: Nathan Gaucher (C)
32. ARI: Gleb Trikozov (C)
*/