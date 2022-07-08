// GermanSpitfire

import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function getBoardForGermanSpitfire(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "GermanSpitfire", `
    1. MTL: Slafkovsky
    2. NJD: Cooley
    3. ARI: Gauthier
    4. SEA: Wright
    5. PHI: Nemec
    6. CBJ: Kasper
    7. OTT: Jiricek
    8. DET: Lambert
    9. BUF: Kemell
    10. ANA: Korchinski
    11. SJS: Savoie
    12. CBJ: Lekkerimäki
    13. NYI: Geekie
    14. WIN: Nazar
    15. VAN: Chesley
    16. BUF: Mateychuk
    17. NSH: Mintyukov
    18. DAL: Miro
    19. MIN: Firkus
    20. WSH: McGroarty
    21. PIT: Öhgren
    22. ANA: Kulich
    23. STL: Hutson
    24. MIN: Howard
    25. TOR: Goyette
    26. MTL: Warren
    27. ARI: Mesar
    28. BUF: Bichsel
    29. EDM: Lorenz
    30. WIN: Snuggerud
    31. TBL: Lutz
    32. ARI: Östlund
    `)
}

/*
1. MTL: Slafkovsky
2. NJD: Cooley
3. ARI: Gauthier
4. SEA: Wright
5. PHI: Nemec
6. CBJ: Kasper
7. OTT: Jiricek
8. DET: Lambert
9. BUF: Kemell
10. ANA: Korchinski
11. SJS: Savoie
12. CBJ: Lekkerimaki
13. NYI: Geekie
14. WIN: Nazar
15. VAN: Chesley
16. BUF: Mateychuk
17. NSH: Mintyukov
18. DAL: Miroshnichnko
19. MIN: Firkus
20. WSH: McGroatry
21. PIT: Ohgren
22. ANA: Kulich
23. STL: Hutson
24. MIN: Howard
25. TOR: Goyette
26. MTL: Warren
27. ARI: Mesar
28. BUF: Bischel
29. EDM: Lorenz
30. WIN: Snuggerud
31. TBL: Lutz
32. ARI: Ostlund
*/