import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForLavarBall(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "LavarBall", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: Frank Nazar
    6. CBJ: David Jiricek
    7. OTT: Cutter Gauthier
    8. DET: Marco Kasper
    9. BUF: Jonathan Lekkerimäki
    10. ANA: Pavel Mintyukov
    11. SJS: Matthew Savoie
    12. CBJ: Joakim Kemell
    13. NYI: Conor Geekie
    14. WIN: Kevin Korchinski
    15. VAN: Danila Yurov
    16. BUF: Liam Öhgren
    17. NSH: Lian Bichsel
    18. DAL: Jimmy Snuggerud
    19. MIN: Jiri Kulich
    20. WSH: Denton Mateychuk
    21. PIT: Rutger McGroarty
    22. ANA: Noah Östlund
    23. STL: Ivan Miroshnichenko
    24. MIN: Owen Pickering
    25. TOR: Brad Lambert
    26. MTL: Tristan Luneau
    27. ARI: Gleb Trikozov
    28. BUF: Ryan Chesley
    29. EDM: Owen Beck
    30. WIN: Isaac Howard
    31. TBL: Filip Mesar
    32. ARI: Calle Odelius
    `)
}

/*
1. MTL: Shane Wright
2. NJD: Juraj Slafkovsky
3. ARI: Logan Cooley
4. SEA: Simon Nemec
5. PHI: Frank Nazar
6. CBJ: David Jiricek
7. OTT: Cutter Gauthier
8. DET: Marco Kasper
9. BUF: Jonathan Lekkerimaki
10. ANA: Pavel Mintyukov
11. SJS: Matthew Savoie
12. CBJ: Joakim Kemell
13. NYI: Conor Geekie
14. WIN: Kevin Korchinski
15. VAN: Danila Yurov
16. BUF: Liam Ohgren
17. NSH: Lian Bichsel
18. DAL: Jimmy Snuggerud
19. MIN: Jiri Kulich
20. WSH: Denton Mateychuk
21. PIT: Rutger McGroarty
22. ANA: Noah Ostlund
23. STL: Ivan Miroshnichenko
24. MIN: Owen Pickering
25. TOR: Brad Lambert
26. MTL: Tristan Luneau
27. ARI: Gleb Trikozov
28. BUF: Ryan Chesley
29. EDM: Owen Beck
30. WIN: Isaac Howard
31. TBL: Filip Mesar
32. ARI: Calle Odelius

*/