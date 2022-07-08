import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForWandering_Cynic(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Wandering Cynic", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: Cutter Gauthier
    6. CBJ: David Jiricek
    7. OTT: Joakim Kemell
    8. DET: Marco Kasper
    9. BUF: Danila Yurov
    10. ANA: Kevin Korchinski
    11. SJS: Jonathan Lekkerimäki
    12. CBJ: Ivan Miro
    13. NYI: Brad Lambert
    14. WIN: Pavel Mintyukov
    15. VAN: Matthew Savoie
    16. BUF: Conor Geekie
    17. NSH: Frank Nazar
    18. DAL: Jimmy Snuggerud
    19. MIN: Liam Öhgren
    20. WSH: Jiri Kulich
    21. PIT: Noah Östlund
    22. ANA: Isaac Howard
    23. STL: Lian Bichsel
    24. MIN: Owen Pickering
    25. TOR: Denton Mateychuk
    26. MTL: Ryan Chesley
    27. ARI: Rutger McGroarty
    28. BUF: Nathan Gaucher
    29. EDM: Luca Del Bel Belluz
    30. WIN: Gleb Trikozov
    31. TBL: Filip Mesar
    32. ARI: Lane Hutson
    `)
}

/*
1. MTL: Shane Wright
2. NJD: Juraj Slafkovksy
3. ARI: Logan Cooley
4. SEA: Simon Nemec
5. PHI: Cutter Gauthier
6. CBJ: David Jiricek
7. OTT: Joakim Kemell
8. DET: Marco Kasper
9. BUF: Danila Yurov
10. ANA: Kevin Korchinski
11. SJS: Jonathan Lekkerimaki
12. CBJ: Ivan Miroschnichenko
13. NYI: Brad Lambert
14. WIN: Pavel Mintyukov
15. VAN: Matthew Savoie
16. BUF: Conor Geekie
17. NSH: Frank Nazar
18. DAL: Jimmy Snuggerud
19. MIN: Liam Ohgren
20. WSH: Jiri Kulich
21. PIT: Noah Ostlund
22. ANA: Isaac Howard
23. STL: Lian Bichsel
24. MIN: Owen Pickering
25. TOR: Denton Mateychuk
26. MTL: Ryan Chesley
27. ARI: Rutger McGroarty
28. BUF: Nathan Gaucher
29. EDM: Luca Del Bel Belluz
30. WIN: Gleb Trikozov
31. TBL: Filip Mesar
32. ARI: Lane Hutson

*/