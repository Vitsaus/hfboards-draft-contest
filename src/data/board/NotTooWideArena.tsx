import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function getBoardForNotTooWideArena(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "NotTooWideArena", `
    1. MTL: Wright
    2. NJD: Cooley
    3. ARI: Slafkovsky
    4. SEA: Jiricek
    5. PHI: Gauthier
    6. CBJ: Jiricek
    7. OTT: Savoie
    8. DET: Kasper
    9. BUF: Nazar
    10. ANA: Korchinski
    11. SJS: Kemell
    12. CBJ: Lambert
    13. NYI: Mintyukov
    14. WIN: Geekie
    15. VAN: Yurov
    16. BUF: Mateychuk
    17. NSH: Kulich
    18. DAL: Bichsel
    19. MIN: Östlund
    20. WSH: Miro
    21. PIT: McGroarty
    22. ANA: Chesley
    23. STL: Howard
    24. MIN: Mesar
    25. TOR: Firkus
    26. MTL: Del Bel Belluz
    27. ARI: Öhgren
    28. BUF: Pickering
    29. EDM: Snuggerud
    30. WIN: Rinzel
    31. TBL: Gaucher
    32. ARI: Beck
    `);
}

/*
1. MTL: Wright
2. NJD: Cooley
3. ARI: Slafkovsky
4. SEA: Jiricek
5. PHI: Gauthier
6. CBJ: Jiricek
7. OTT: Savoie
8. DET: Kasper
9. BUF: Nazar
10. ANA: Korchinski
11. SJS: Kemell
12. CBJ: Lambert
13. NYI: Mintyukov
14. WIN: Geekie
15. VAN: Yurov
16. BUF: Mateychuk
17. NSH: Kulich
18. DAL: Bichsel
19. MIN: Ostlund
20. WSH: Miroschnichenko
21. PIT: McGroarty
22. ANA: Chesley
23. STL: Howard
24. MIN: Mesar
25. TOR: Firkus
26. MTL: Del Bel Belluz
27. ARI: Ohgren
28. BUF: Pickering
29. EDM: Snuggerud
30. WIN: Rinzel
31. TBL: Gaucher
32. ARI: Beck

*/