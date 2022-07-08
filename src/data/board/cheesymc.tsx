import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForCheesymc(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "cheesymc", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: David Jiricek
    6. CBJ: Cutter Gauthier
    7. OTT: Joakim Kemell
    8. DET: Frank Nazar
    9. BUF: Kevin Korchinski
    10. ANA: Marco Kasper
    11. SJS: Denton Mateychuk
    12. CBJ: Matthew Savoie
    13. NYI: Jonathan Lekkerimäki
    14. WIN: Isaac Howard
    15. VAN: Jiri Kulich
    16. BUF: Danila Yurov
    17. NSH: Jagger Firkus
    18. DAL: Pavel Mintyukov
    19. MIN: Ivan Miroshnichenko
    20. WSH: Conor Geekie
    21. PIT: Noah Östlund
    22. ANA: Lian Bichsel
    23. STL: Owen Pickering
    24. MIN: Ryan Chesley
    25. TOR: Rutger McGroarty
    26. MTL: Tristan Luneau
    27. ARI: Brad Lambert
    28. BUF: Liam Öhgren
    29. EDM: Jimmy Snuggerud
    30. WIN: Lane Hutson
    31. TBL: Nathan Gaucher
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
8. DET: Frank Nazar
9. BUF: Kevin Korchinski
10. ANA: Marco Kasper
11. SJS: Denton Mateychuk
12. CBJ: Matthew Savoie
13. NYI: Jonathan Lekkerimaki
14. WIN: Isaac Howard
15. VAN: Jiri Kulich
16. BUF: Danila Yurov
17. NSH: Jagger Firkus
18. DAL: Pavel Mintyukov
19. MIN: Ivan Miroshnichenko
20. WSH: Conor Geekie
21. PIT: Noah Ostlund
22. ANA: Lian Bichsel
23. STL: Owen Pickering
24. MIN: Ryan Chesley
25. TOR: Rutger McGroarty
26. MTL: Tristan Luneau
27. ARI: Brad Lambert
28. BUF: Liam Ohgren
29. EDM: Jimmy Snuggerud
30. WIN: Lane Hutson
31. TBL: Nathan Gaucher
32. ARI: Ty Nelson
*/