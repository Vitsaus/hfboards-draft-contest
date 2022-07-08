// Beauterham

import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function createBoardForBeauterham(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Beauterham", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Savoie
    6. CBJ: Jiricek
    7. OTT: Gauthier
    8. DET: Lekkerimäki
    9. BUF: Kemell
    10. ANA: Mintyukov
    11. SJS: Yurov
    12. CBJ: Nazar
    13. NYI: Mateychuk
    14. WIN: Kasper
    15. VAN: Korchinski
    16. BUF: Öhgren
    17. NSH: Östlund
    18. DAL: Pickering
    19. MIN: McGroarty
    20. WSH: Kulich
    21. PIT: Geekie
    22. ANA: Howard
    23. STL: Snuggerud
    24. MIN: Miro
    25. TOR: Mesar
    26. MTL: Odelius
    27. ARI: Firkus
    28. BUF: Chesley
    29. EDM: Lambert
    30. WIN: Nyman
    31. TBL: Trikozov
    32. ARI: Salomonsson
    `)

}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Savoie
6. CBJ: Jiricek
7. OTT: Gauthier
8. DET: Lekkermaki
9. BUF: Kemell
10. ANA: Mintyukov
11. SJS: Yurov
12. CBJ: Nazar
13. NYI: Mateychuk
14. WIN: Kasper
15. VAN: Korchinski
16. BUF: Ohgren
17. NSH: Ostlund
18. DAL: Pickering
19. MIN: McGroarty
20. WSH: Kulich
21. PIT: Geekie
22. ANA: Howard
23. STL: Snuggerud
24. MIN: Miroschnichenko
25. TOR: Mesar
26. MTL: Odelius
27. ARI: Firkus
28. BUF: Chesley
29. EDM: Lambert
30. WIN: Nyman
31. TBL: Trikozov
32. ARI: Salomonsson

*/