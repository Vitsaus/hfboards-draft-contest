// rmx3466

import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function getBoardForRmx3466(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "rmx3466", `
    1. MTL: Wright
    2. NJD: Slaf
    3. ARI: Nemec
    4. SEA: Jiricek
    5. PHI: Cooley
    6. CBJ: Gauthier
    7. OTT: Lekkerimäki
    8. DET: Kasper
    9. BUF: Kemell
    10. ANA: Mateychuk
    11. SJS: Savoie
    12. CBJ: Geekie
    13. NYI: Nazar
    14. WIN: Korchin
    15. VAN: Mintyukov
    16. BUF: Lambert
    17. NSH: Öhgren
    18. DAL: Snuggerud
    19. MIN: Pickering
    20. WSH: Chesley
    21. PIT: Yurov
    22. ANA: Firkus
    23. STL: Bichsel
    24. MIN: Kulich
    25. TOR: Howard
    26. MTL: Gaucher
    27. ARI: Östlund
    28. BUF: McGroarty
    29. EDM: Mesar
    30. WIN: Hughes
    31. TBL: Lamoureux
    32. ARI: Odelius
    `)
}

/*
1. MTL: Wright
2. NJD: Slavkovsky
3. ARI: Nemec
4. SEA:Jiricek
5. PHI: Cooley
6. CBJ: Gauthier
7. OTT: Lekkerimaki
8. DET: Kasper
9. BUF: Kemell
10. ANA: Mateychuk
11. SJS: Savoie
12. CBJ: Geekie
13. NYI: Nazar
14. WIN: Korchinsky
15. VAN: Mintyukov
16. BUF: Lambert
17. NSH: Ohgren
18. DAL: Snuggerud
19. MIN: Pickering
20. WSH: Chesley
21. PIT: Yurov
22. ANA: Firkus
23. STL: Bichsel
24. MIN: Kulich
25. TOR: Howard
26. MTL: Gaucher
27. ARI: Ostlund
28. BUF: Mc Groarty
29. EDM: Mesar
30. WIN: Hughes
31. TBL: Lamoureux
32. ARI: Odelius

*/