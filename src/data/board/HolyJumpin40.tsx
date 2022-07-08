import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForHolyJumpin40(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "HolyJumpin40", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: Cutter Gauthier
    6. CBJ: David Jiricek
    7. OTT: Jonathan Lekkerimäki
    8. DET: Marco Kasper
    9. BUF: Joakim Kemell
    10. ANA: Kevin Korchinski
    11. SJS: Matthew Savoie
    12. CBJ: Brad Lambert
    13. NYI: Noah Östlund
    14. WIN: Denton Mateychuk
    15. VAN: Lian Bichsel
    16. BUF: Frank Nazar
    17. NSH: Pavel Mintyukov
    18. DAL: Owen Pickering
    19. MIN: Conor Geekie
    20. WSH: Danila Yurov
    21. PIT: Ryan Chesley
    22. ANA: Nathan Gaucher
    23. STL: Filip Mesar
    24. MIN: Jiri Kulich
    25. TOR: Rutger McGroarty
    26. MTL: Liam Öhgren
    27. ARI: Isaac Howard
    28. BUF: Reid Schaefer
    29. EDM: Vladimir Grudinin
    30. WIN: Ivan Miro
    31. TBL: Gleb Trikozov
    32. ARI: Owen Beck
    `)
}

/*
1. MTL: Shane Wright
2. NJD: Juraj Slafkovsky
3. ARI: Logan Cooley
4. SEA: Simon Nemec
5. PHI: Cutter Gauthier
6. CBJ: David Jiricek
7. OTT: Jonathan Lekkerimaki
8. DET: Marco Kasper
9. BUF: Joakim Kemell
10. ANA: Kevin Korchinski
11. SJS: Matthew Savoie
12. CBJ: Brad Lambert
13. NYI: Noah Ostlund
14. WIN: Denton Mateychuk
15. VAN: Lian Bichsel
16. BUF: Frank Nazar
17. NSH: Pavel Mintyukov
18. DAL: Owen Pickering
19. MIN: Conor Geekie
20. WSH: Danila Yurov
21. PIT: Ryan Chesley
22. ANA: Nathan Gaucher
23. STL: Filip Mesar
24. MIN: Jiri Kulich
25. TOR: Rutger McGroarty
26. MTL: Liam Ohgren
27. ARI: Isaac Howard
28. BUF: Reid Schaefer
29. EDM: Vladimir Grudinin
30. WIN: Ivan Miroschnichenko
31. TBL: Gleb Trikozov
32. ARI: Owen Beck

*/