import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForNewdimension(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "newdimension", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: Cutter Gauthier
    6. CBJ: David Jiricek
    7. OTT: Jonathan Lekkerimäki
    8. DET: Marco Kasper
    9. BUF: Frank Nazar
    10. ANA: Kevin Korchinski
    11. SJS: Matthew Savoie
    12. CBJ: Conor Geekie
    13. NYI: Pavel Mintyukov
    14. WIN: Brad Lambert
    15. VAN: Lian Bichsel
    16. BUF: Rutger McGroarty
    17. NSH: Ryan Chesley
    18. DAL: Jiri Kulich
    19. MIN: Noah Östlund
    20. WSH: Denton Mateychuk
    21. PIT: Danila Yurov
    22. ANA: Isaac Howard
    23. STL: Owen Pickering
    24. MIN: Ivan Miroshnichenko
    25. TOR: Liam Öhgren
    26. MTL: Jimmy Snuggerud
    27. ARI: Nathan Gaucher
    28. BUF: Noah Warren
    29. EDM: Tristan Luneau
    30. WIN: Sam Rinzel
    31. TBL: Filip Mesar
    32. ARI: Jagger Firkus
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
9. BUF: Frank Nazar
10. ANA: Kevin Korchinski
11. SJS: Matthew Savoie
12. CBJ: Connor Geekie
13. NYI: Pavel Mintyukov
14. WIN: Brad Lambert
15. VAN: Lian Bichsel
16. BUF: Rutger Mcgroarty
17. NSH: Ryan Chesley
18. DAL: Jiri Kulich
19. MIN: Noah Ostlund
20. WSH: Denton Mateychuk
21. PIT: Danila Yurov
22. ANA: Isaac Howard
23. STL: Owen Pickering
24. MIN: Ivan Miroshnichenko
25. TOR: Liam Ohgren
26. MTL: Jimmy Snuggerud
27. ARI: Nathan Gaucher
28. BUF: Noah Warren
29. EDM: Tristan Luneau
30. WIN: Sam Rinzel
31. TBL: Filip Mesar
32. ARI: Jagger Firkus

*/