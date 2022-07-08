import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForJT3(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "JT3", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Cutter Gauthier
    4. SEA: Simon Nemec
    5. PHI: Logan Cooley
    6. CBJ: David Jiricek
    7. OTT: Jonathan Lekkerimäki
    8. DET: Marco Kasper
    9. BUF: Matthew Savoie
    10. ANA: Kevin Korchinski
    11. SJS: Pavel Mintyukov
    12. CBJ: Conor Geekie
    13. NYI: Joakim Kemell
    14. WIN: Denton Mateychuk
    15. VAN: Frank Nazar
    16. BUF: Rutger McGroarty
    17. NSH: Owen Pickering
    18. DAL: Ryan Chesley
    19. MIN: Nathan Gaucher
    20. WSH: Lian Bichsel
    21. PIT: Liam Öhgren
    22. ANA: Jiri Kulich
    23. STL: Danila Yurov
    24. MIN: Jimmy Snuggerud
    25. TOR: Noah Östlund
    26. MTL: Lane Hutson
    27. ARI: Brad Lambert
    28. BUF: Sam Rinzel
    29. EDM: Jagger Firkus
    30. WIN: Filip Mesar
    31. TBL: Reid Schaefer
    32. ARI: Ivan Miro
    `)
}

/*
1. MTL: Shane Wright
2. NJD: Juraj Slafkovsky
3. ARI: Cutter Gauthier
4. SEA: Simon Nemec
5. PHI: Logan Cooley
6. CBJ: David Jiricek
7. OTT: Jonathan Lekkerimaki
8. DET: Marco Kasper
9. BUF: Matthew Savoie
10. ANA: Kevin Korchinski
11. SJS: Pavel Mintyukov
12. CBJ: Connor Geekie
13. NYI: Joakim Kemell
14. WIN: Denton Mateychuk
15. VAN: Frank Nazar
16. BUF: Rutger Mcgroarty
17. NSH: Owen Pickering
18. DAL: Ryan Chesley
19. MIN: Nathan Gaucher
20. WSH: Lian Bischel
21. PIT: Liam Ohgren
22. ANA: Jiri Kulich
23. STL: Danila Yurov
24. MIN: Jimmy Snuggerud
25. TOR: Noah Ostlund
26. MTL: Lane Hutson
27. ARI: Brad Lambert
28. BUF: Sam Rinzel
29. EDM: Jagger Firkus
30. WIN: Filip Mesar
31. TBL: Reid Schaefer
32. ARI: Ivan Miroschnichenko
*/