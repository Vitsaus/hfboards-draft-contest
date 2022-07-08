import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForPKSpecialist(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "PKSpecialist", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: David Jiricek
    6. CBJ: Cutter Gauthier
    7. OTT: Joakim Kemell
    8. DET: Marco Kasper
    9. BUF: Frank Nazar
    10. ANA: Kevin Korchinski
    11. SJS: Jiri Kulich
    12. CBJ: Ivan Miroshnichenko
    13. NYI: Pavel Mintyukov
    14. WIN: Denton Mateychuk
    15. VAN: Jonathan Lekkerimäki
    16. BUF: Matthew Savoie
    17. NSH: Conor Geekie
    18. DAL: Danila Yurov
    19. MIN: Rutger McGroarty
    20. WSH: Isaac Howard
    21. PIT: Jimmy Snuggerud
    22. ANA: Brad Lambert
    23. STL: Lian Bichsel
    24. MIN: Liam Öhgren
    25. TOR: Tristan Luneau
    26. MTL: Owen Pickering
    27. ARI: Luca Del Bel Belluz
    28. BUF: Jagger Firkus
    29. EDM: Ryan Chesley
    30. WIN: Owen Beck
    31. TBL: Noah Östlund
    32. ARI: Ty Nelson
    `)
}

/*
1. MTL: Shane Wright
2. NJD: Juraj Slafkovsky
3. ARI: Logan Cooley
4. SEA: Simon Nemec
5. PHI: David Jiricek
6. CBJ: Cutter Gauthier
7. OTT: Joakim Kemell
8. DET: Marco Kasper
9. BUF: Frank Nazar
10. ANA: Kevin Korchinski
11. SJS: Jiri Kulich
12. CBJ: Ivan Miroshnichenko
13. NYI: Pavel Mintyukov
14. WIN: Denton Mateychuk
15. VAN: Jonathan Lekkerimaki
16. BUF: Matthew Savoie
17. NSH: Conor Geekie
18. DAL: Danila Yurov
19. MIN: Rutger McGroarty
20. WSH: Isaac Howard
21. PIT: Jimmy Snuggerud
22. ANA: Brad Lambert
23. STL: Lian Bichsel
24. MIN: Liam Ohgren
25. TOR: Tristan Luneau
26. MTL: Owen Pickering
27. ARI: Luca Del Bel Belluz
28. BUF: Jagger Firkus
29. EDM: Ryan Chesley
30. WIN: Owen Beck
31. TBL: Noah Ostlund
32. ARI: Ty Nelson
*/