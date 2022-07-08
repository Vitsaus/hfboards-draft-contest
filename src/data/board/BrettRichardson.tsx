import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForBrettRichardson(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Brett Richardson", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Gauthier
    5. PHI: Nemec
    6. CBJ: Kasper
    7. OTT: Jiricek
    8. DET: Nazar
    9. BUF: Savoie
    10. ANA: Korchinski
    11. SJS: Lekkerimäki
    12. CBJ: Mintyukov
    13. NYI: Kemel
    14. WIN: Geekie
    15. VAN: Lambert
    16. BUF: Chesley
    17. NSH: Mateychuk
    18. DAL: Kulich
    19. MIN: Bichsel
    20. WSH: Miroshnichenko
    21. PIT: Yurov
    22. ANA: Öhgren
    23. STL: Östlund
    24. MIN: Mesar
    25. TOR: Howard
    26. MTL: McGroarty
    27. ARI: Pickering
    28. BUF: Firkus
    29. EDM: Snuggerud
    30. WIN: Odelius
    31. TBL: Howard
    32. ARI: Goyette
    `)
}

/*
1. MTL: Wright
2. NJD: Slavkovsky
3. ARI: Cooley
4. SEA: Gauthier
5. PHI: Nemec
6. CBJ: Kaspar
7. OTT: Jiricek
8. DET: Nazar
9. BUF: Savoie
10. ANA: Korchinski
11. SJS: Lekkerimaki
12. CBJ: Mintyukov
13. NYI: Kemmel
14. WIN: Geekie
15. VAN: Lambert
16. BUF: Chesley
17. NSH: Mateychuk
18. DAL: Kulich
19. MIN: Bichsel
20. WSH: Miroshnichenko
21. PIT: Yurov
22. ANA: Öhgren
23. STL: Ostlund
24. MIN: Mesar
25. TOR: Howard
26. MTL: McGroarty
27. ARI: Pickering
28. BUF: Firkus
29. EDM: Snggerud
30. WIN: Odelius
31. TBL: Howard
32. ARI: Goyette
*/