import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function getBoardForHamilton_Bulldogs(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Hamilton Bulldogs", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: David Jiricek
    6. CBJ: Cutter Gauthier
    7. OTT: Matthew Savoie
    8. DET: Jonathan Lekkerimäki
    9. BUF: Joakim Kemell
    10. ANA: Kevin Korchinski
    11. SJS: Frank Nazar
    12. CBJ: Pavel Mintyukov
    13. NYI: Conor Geekie
    14. WIN: Marco Kasper
    15. VAN: Liam Öhgren
    16. BUF: Jimmy Snuggerud
    17. NSH: Brad Lambert
    18. DAL: Jiri Kulich
    19. MIN: Denton Mateychuk
    20. WSH: Danila Yurov
    21. PIT: Rutger McGroarty
    22. ANA: Owen Pickering
    23. STL: Isaac Howard
    24. MIN: Jagger Firkus
    25. TOR: Lian Bichsel
    26. MTL: Noah Östlund
    27. ARI: Owen Beck
    28. BUF: Noah Östlund
    29. EDM: Ryan Chesley
    30. WIN: Seamus Casey
    31. TBL: Logan Morrison
    32. ARI: Luca Del Bel Belluz
    `)

}

/*
1. MTL: Shane Wright
2. NJD: Juraj Slafkovsky
3. ARI: Logan Cooley
4. SEA: Simon Nemec
5. PHI: David Jiricek
6. CBJ: Cutter Gauthier
7. OTT: Matthew Savoie
8. DET: Jonathan Lekkerimaki
9. BUF: Joakim Kemell
10. ANA: Kevin Korchinski
11. SJS: Frank Nazar
12. CBJ: Pavel Mintyukov
13. NYI: Conor Geekie
14. WIN: Marco Kasper
15. VAN: Liam Ohgren
16. BUF: Jimmy Snuggerud
17. NSH: Brad Lambert
18. DAL: Jiri Kulich
19. MIN: Denton Mateychuk
20. WSH: Danila Yurov
21. PIT: Rutger McGroarty
22. ANA: Owen Pickering
23. STL: Issac Howard
24. MIN: Jagger Firkus
25. TOR: Lian Bichsel
26. MTL: Noah Ostlund
27. ARI: Owen Beck
28. BUF: Noah Ostlund
29. EDM: Ryan Chesley
30. WIN: Seamus Casey
31. TBL: Logan Morrison
32. ARI: Luca Del Bel Belluz
*/