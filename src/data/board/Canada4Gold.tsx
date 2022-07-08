import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForCanada4Gold(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Canada4Gold", `
    1. MTL: Wright
    2. NJD: Slaf
    3. ARI: Cooley
    4. SEA: Jiricek
    5. PHI: Nemec
    6. CBJ: Savoie
    7. CHI: Kemell
    8. DET: Gauthier
    9. BUF: Kasper
    10. ANA: Korchinski
    11. SJS: Lekkerimäki
    12. CBJ: Geekie
    13. NYI: Mintyukov
    14. WIN: Snuggerud
    15. VAN: Nazar
    16. BUF: Öhgren
    17. NSH: Howard
    18. DAL: Lambert
    19. MIN: Yurov
    20. WSH: Miro
    21. PIT: Pickering
    22. ANA: Kulich
    23. STL: Bichsel
    24. MIN: Östlund
    25. TOR: Mateychuk
    26. MTL: Hughes
    27. ARI: Mesar
    28. BUF: Chesley
    29. EDM: McGroarty
    30. WIN: Del Bel Belluz
    31. TBL: Bystedt
    32. ARI: Beck
    `)
}

/*
1. MTL: Wright
2. NJD: Slakhovsky
3. ARI: Cooley
4. SEA: Jiricek
5. PHI: Nemec
6. CBJ: Savoie
7. CHI: Kemell
8. DET: Gauthier
9. BUF: Kasper
10. ANA: Korchinski
11. SJS: Lekkerimaki
12. CBJ: Geekie
13. NYI: Mintyukov
14. WIN: Snuggerud
15. VAN: Nazar
16. BUF: Ohgren
17. NSH: Howard
18. DAL: Lambert
19. MIN: Yurov
20. WSH: Miroschnichenko
21. PIT: Pickering
22. ANA: Kulich
23. STL: Bichsel
24. MIN: Ostlund
25. TOR: Mateychuk
26. MTL: Hughes
27. ARI: Mesar
28. BUF: Chesley
29. EDM: McGroarty
30. WIN: Del Bel Belluz
31. TBL: Bystedt
32. ARI: Beck
*/