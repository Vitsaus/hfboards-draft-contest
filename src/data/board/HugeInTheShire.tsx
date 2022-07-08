import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForHugeInTheShire(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "HugeInTheShire", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: David Jiricek
    5. PHI: Cutter Gauthier
    6. CBJ: Simon Nemec
    7. OTT: Frank Nazar
    8. DET: Joakim Kemell
    9. BUF: Matthew Savoie
    10. ANA: Conor Geekie
    11. SJS: Jonathan Lekkerimäki
    12. CBJ: Kevin Korchinski
    13. NYI: Pavel Mintyukov
    14. WIN: Owen Pickering
    15. VAN: Marco Kasper
    16. BUF: Denton Mateychuk
    17. NSH: Owen Beck
    18. DAL: Rutger McGroarty
    19. MIN: Jimmy Snuggerud
    20. WSH: Conor Geekie
    21. PIT: Jiri Kulich
    22. ANA: Isaac Howard
    23. STL: Liam Öhgren
    24. MIN: Brad Lambert
    25. TOR: Filip Mesar
    26. MTL: Danila Yurov
    27. ARI: Lian Bichsel
    28. BUF: Ryan Chesley
    29. EDM: Jagger Firkus
    30. WIN: Reid Schaefer
    31. TBL: Tristan Luneau
    32. ARI: Luca Del Bel Belluz
    `)
}

/*
1. MTL: Shane Wright
2. NJD: Juraj Slafkovsky
3. ARI: Logan Cooley
4. SEA: David Jiricek
5. PHI: Cutter Gauthier
6. CBJ: Simon Nemec
7. OTT: Frank Nazar
8. DET: Jaokim Kemell
9. BUF: Matthew Savoie
10. ANA: Conor Geekie
11. SJS: Jonathan Lekkerimaki
12. CBJ: Kevin Korchinski
13. NYI: Pavel Mintyukov
14. WIN: Owen Pickering
15. VAN: Marco Kasper
16. BUF: Denton Mateychuk
17. NSH: Owen Beck
18. DAL: Rutger McGroarty
19. MIN: Jimmy Snuggerud
20. WSH: Conor Geekie
21. PIT: Juri Kuliich
22. ANA: Issac Howard
23. STL: Liam Ohgren
24. MIN: Brad Lambert
25. TOR: Filip Mesar
26. MTL: Danila Yurov
27. ARI: Lian Bichsel
28. BUF: Ryan Chesley
29. EDM: Jagger Firkus
30. WIN: Reid Schaefer
31. TBL: Tristan Luneau
32. ARI: Luca Del Bel Belluz
*/