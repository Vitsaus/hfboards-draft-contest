import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardFor57special(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "57special", `
    1. MTL: Slaf
    2. NJD: Wright
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Gauthier
    6. CBJ: Jiricek
    7. CHI: Kemell
    8. DET: Lekkerimäki
    9. BUF: Kasper
    10. ANA: Mintyukov
    11. SJS: Savoie
    12. CBJ: Nazar
    13. NYI: Geekie
    14. WIN: Korchinski
    15. VAN: Yurov
    16. BUF: Chesley
    17. NSH: Öhgren
    18. DAL: Mateychuk
    19. MIN: Nazar
    20. WSH: Miro
    21. PIT: Howard
    22. ANA: Lambert
    23. STL: Pickering
    24. MIN: Snuggerud
    25. TOR: Östlund
    26. MTL: Luneau
    27. ARI: McGroarty
    28. BUF: Rinzel
    29. EDM: Kulich
    30. WIN: Warren
    31. TBL: Öhgren
    32. ARI: Lamoureux
    `)
}

/*
1. MTL: Slaf
2. NJD: Wright
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Gauthier
6. CBJ: Jiricek
7. CHI: Kemell
8. DET: Lekkerimaki
9. BUF: Kasper
10. ANA: Mintyukov
11. SJS: Savoie
12. CBJ: Nazar
13. NYI: Geekie
14. WIN: Korchinski
15. VAN: Yurov
16. BUF: Chesley
17. NSH: Ohgren
18. DAL: Mateychuk
19. MIN: Nazar
20. WSH: Miro
21. PIT: Howard
22. ANA: Lambert
23. STL: Pickering
24. MIN: Snuggerud
25. TOR: Ostlund
26. MTL: Luneau
27. ARI: McGroarty
28. BUF: Rinzel
29. EDM: Kulich
30. WIN: Warren
31. TBL: Ohgren
32. ARI: Lamoureux
*/