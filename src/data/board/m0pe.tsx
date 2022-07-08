import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForM0pe(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "m0pe", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: Cutter Gauthier
    6. CBJ: David Jiricek
    7. OTT: Joakim Kemell
    8. DET: Marco Kasper
    9. BUF: Jonathan Lekkerimäki
    10. ANA: Pavel Mintyukov
    11. SJS: Kevin Korchinski
    12. CBJ: Matthew Savoie
    13. NYI: Liam Öhgren
    14. WIN: Conor Geekie
    15. VAN: Owen Pickering
    16. BUF: Lian Bichsel
    17. NSH: Frank Nazar
    18. DAL: Jimmy Snuggerud
    19. MIN: Ryan Chesley
    20. WSH: Jiri Kulich
    21. PIT: Isaac Howard
    22. ANA: Danila Yurov
    23. STL: Rutger McGroarty
    24. MIN: Brad Lambert
    25. TOR: Denton Mateychuk
    26. MTL: Jagger Firkus
    27. ARI: Nathan Gaucher
    28. BUF: Filip Mesar
    29. EDM: Reid Schaefer
    30. WIN: Ivan Miro
    31. TBL: Noah Östlund
    32. ARI: Sam Rinzel
    `);
}

/*
1. MTL: Shane Wright
2. NJD: Juraj Slafkovsky
3. ARI: Logan Cooley
4. SEA: Simon Nemec
5. PHI: Cutter Gauthier
6. CBJ: David Jiricek
7. OTT: Joakim Kemell
8. DET: Marco Kasper
9. BUF: Jonathan Lekkerimaki
10. ANA: Pavel Mintyukov
11. SJS: Kevin Korchinski
12. CBJ: Matthew Savoie
13. NYI: Liam Ohgren
14. WIN: Connor Geekie
15. VAN: Owen Pickering
16. BUF: Lian Bichsel
17. NSH: Frank Nazar
18. DAL: Jimmy Snuggerud
19. MIN: Ryan Chesley
20. WSH: Jiri Kulich
21. PIT: Isaac Howard
22. ANA: Danila Yurov
23. STL: Rutger McGroarty
24. MIN: Brad Lambert
25. TOR: Denton Mateychuk
26. MTL: Jagger Firkus
27. ARI: Nathan Gaucher
28. BUF: Filip Mesar
29. EDM: Reid Schaefer
30. WIN: Ivan Miroschnichenko
31. TBL: Noah Ostlund
32. ARI: Sam Rinzel
*/