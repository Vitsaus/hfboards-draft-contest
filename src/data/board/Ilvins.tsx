// ilvins

import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function createBoardForIlvins(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "ilvins", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Jiricek
    6. CBJ: Kemell
    7. OTT: Gauthier
    8. DET: Lekkerimäki
    9. BUF: Savoie
    10. ANA: Mintyukov
    11. SJS: Korchinski
    12. CBJ: Yurov
    13. NYI: Kasper
    14. WIN: Nazar
    15. VAN: Lambert
    16. BUF: Geekie
    17. NSH: Snuggerud
    18. DAL: Miro
    19. MIN: Kulich
    20. WSH: Mateychuk
    21. PIT: Öhgren
    22. ANA: Pickering
    23. STL: Howard
    24. MIN: McGroarty
    25. TOR: Östlund
    26. MTL: Firkus
    27. ARI: Bichsel
    28. BUF: Trikozov
    29. EDM: Mesar
    30. WIN: Perevalov
    31. TBL: Chesley
    32. ARI: Del Bel Belluz
    `)
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Jiricek
6. CBJ: Kemell
7. OTT: Gauthier
8. DET: Lekkerimeki
9. BUF: Savoie
10. ANA: Mintyukov
11. SJS: Korchinski
12. CBJ: Yurov
13. NYI: Kasper
14. WIN: Nazar
15. VAN: Lambert
16. BUF: Geekie
17. NSH: Snuggerud
18. DAL: Miroshnichenko
19. MIN: Kulich
20. WSH: Mateychuk
21. PIT: Ohgren
22. ANA: Pickering
23. STL: Howard
24. MIN: McGroarty
25. TOR: Ostlund
26. MTL: Firkus
27. ARI: Bichsel
28. BUF: Trikozov
29. EDM: Mesar
30. WIN: Perevalov
31. TBL: Chesley
32. ARI: Del Bel Belluz
*/