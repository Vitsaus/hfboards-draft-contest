import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForLJ7(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "LJ7", `
    1. MTL: Slafkovsky
    2. NJD: Jiricek
    3. ARI: Gauthier
    4. SEA: Wright
    5. PHI: Nemec
    6. CBJ: Cooley
    7. OTT: Kasper
    8. DET: Nazar
    9. BUF: Lekkerimäki
    10. ANA: Mintyukov
    11. SJS: Korchinski
    12. CBJ: Mateychuk
    13. NYI: Bichsel
    14. WIN: Savoie
    15. VAN: Odelius
    16. BUF: Geekie
    17. NSH: Howard
    18. DAL: Yurov
    19. MIN: Öhgren
    20. WSH: Howard
    21. PIT: Snuggerud
    22. ANA: Miroshnichenko
    23. STL: Östlund
    24. MIN: Lambert
    25. TOR: Firkus
    26. MTL: Beck
    27. ARI: Pickering
    28. BUF: Chesley
    29. EDM: McGroarty
    30. WIN: Nelson
    31. TBL: Kulich
    32. ARI: Luneau
    `)
}

/*
1. MTL: Slafkovsky
2. NJD: Jiricek
3. ARI: Gauthier
4. SEA: Wright
5. PHI: Nemec
6. CBJ: Cooley
7. OTT: Kasper
8. DET: Nazar
9. BUF: Lekkerimaki
10. ANA: Mintyukov
11. SJS: Korchinski
12. CBJ: Mateychuk
13. NYI: Bischel
14. WIN: Savoie
15. VAN: Odelius
16. BUF: Geekie
17. NSH: Howard
18. DAL: Yurov
19. MIN: Ohgren
20. WSH: Howard
21. PIT: Snuggerud
22. ANA: Miroshnichenko
23. STL: Ostlund
24. MIN: Lambert
25. TOR: Firkus
26. MTL: Beck
27. ARI: Pickering
28. BUF: Chesley
29. EDM: McGroarty
30. WIN: Nelson
31. TBL: Kulich
32. ARI: Luneau

*/