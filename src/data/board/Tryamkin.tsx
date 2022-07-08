import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForTryamkin(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Tryamkin", `
    1. MTL: Wright
    2. NJD: Jiricek
    3. ARI: Slafkovsky
    4. SEA: Nemec
    5. PHI: Cooley
    6. CBJ: Gauthier
    7. CHI: Kasper
    8. DET: Savoie
    9. BUF: Kemell
    10. ANA: Korchinski
    11. SJS: Lekkerimäki
    12. CBJ: Mintyukov
    13. NYI: Mateychuk
    14. WIN: Lambert
    15. VAN: Nazar
    16. BUF: Yurov
    17. NSH: Geekie
    18. DAL: Chesley
    19. MIN: Öhgren
    20. WSH: Pickering
    21. PIT: Östlund
    22. ANA: Kulich
    23. STL: Bichsel
    24. MIN: Miroshnichenko
    25. TOR: Mesar
    26. MTL: Rinzel
    27. ARI: Snuggerud
    28. BUF: Firkus
    29. EDM: Howard
    30. WIN: McGroarty
    31. TBL: Del Bel Belluz
    32. ARI: Hutson
    `)
}

/*
1. MTL: Wright
2. NJD: Jiricek
3. ARI: Slafkovsky
4. SEA: Nemec
5. PHI: Cooley
6. CBJ: Gauthier
7. CHI: Kasper
8. DET: Savoie
9. BUF: Kemell
10. ANA: Korchinski
11. SJS: Lekkerimaki
12. CBJ: Mintyukov
13. NYI: Mateychuk
14. WIN: Lambert
15. VAN: Nazar
16. BUF: Yurov
17. NSH: Geekie
18. DAL: Chelsey
19. MIN: Ohgren
20. WSH: Pickering
21. PIT: Ostlund
22. ANA: Kulich
23. STL: Bischel
24. MIN: Miroshnichenko
25. TOR: Mesar
26. MTL: Rinzel
27. ARI: Snuggerud
28. BUF: Firkus
29. EDM: Howard
30. WIN: McGroarty
31. TBL: Del Bel Belluz
32. ARI: Hutson
*/