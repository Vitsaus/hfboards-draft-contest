import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForStanleyjub(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Stanleyjub", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: Matthew Savoie
    6. CBJ: David Jiricek
    7. CHI: Cutter Gauthier
    8. DET: Joakim Kemell
    9. BUF: Jonathan Lekkerimäki
    10. ANA: Frank Nazar
    11. SJS: Brad Lambert
    12. CBJ: Conor Geekie
    13. NYI: Marco Kasper
    14. WIN: Denton Mateychuk
    15. VAN: Pavel Mintyukov
    16. BUF: Rutger McGroarty
    17. NSH: Kevin Korchinski
    18. DAL: Ryan Chesley
    19. MIN: Owen Pickering
    20. WSH: Danila Yurov
    21. PIT: Isaac Howard
    22. ANA: Gleb Trikozov
    23. STL: Ivan Miro
    24. MIN: Jimmy Snuggerud
    25. TOR: Liam Öhgren
    26. MTL: Noah Östlund
    27. ARI: Lian Bichsel
    28. BUF: Tristan Luneau
    29. EDM: Nathan Gaucher
    30. WIN: Sam Rinzel
    31. TBL: Filip Mesar
    32. ARI: Jiri Kulich
    `)
}

/*
1. MTL: Shane Wright
2. NJD: Juraj Slafkovsky
3. ARI: Logan Cooley
4. SEA: Simon Nemec
5. PHI: Matthew Savoie
6. CBJ: David Jiricek
7. CHI: Cutter Gauthier
8. DET: Joakim Kemell
9. BUF: Jonathan Lekkerimäki
10. ANA: Frank Nazar
11. SJS: Brad Lambert
12. CBJ: Conor Geekie
13. NYI: Marco Kasper
14. WIN: Denton Mateychuk
15. VAN: Pavel Mintyukov
16. BUF: Rutger McGroarty
17. NSH: Kevin Korchinski
18. DAL: Ryan Chesley
19. MIN: Owen Pickering
20. WSH: Danila Yurov
21. PIT: Isaac Howard
22. ANA: Gleb Trizokov
23. STL: Ivan Mirosnichenko
24. MIN: Jimmy Snuggerud
25. TOR: Liam Öhgren
26. MTL: Noah Östlund
27. ARI: Lian Bichsel
28. BUF: Tristan Luneau
29. EDM: Nathan Gaucher
30. WIN: Sam Rinzel
31. TBL: Filip Mesar
32. ARI: Jiri Kulich
*/