import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForBizz(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Bizz", `
    1. MTL: Slaf
    2. NJD: Wright
    3. ARI: Cooley
    4. SEA: Gauthier
    5. PHI: Nemec
    6. CBJ: Lambert
    7. CHI: Jiricek
    8. DET: Kemell
    9. BUF: Kasper
    10. ANA: Savoie
    11. SJS: Lekkerimäki
    12. CBJ: Geekie
    13. NYI: Korchinski
    14. WIN: Mintyukov
    15. VAN: Öhgren
    16. BUF: Pickering
    17. NSH: Östlund
    18. DAL: Nazar
    19. MIN: Howard
    20. WSH: Yurov
    21. PIT: Bichsel
    22. ANA: Snuggerud
    23. STL: Miro
    24. MIN: Chesley
    25. TOR: Belluz
    26. MTL: Rinzel
    27. ARI: Kulich
    28. BUF: Mateychuk
    29. EDM: Brennan
    30. WIN: Beck
    31. TBL: McGroarty
    32. ARI: Firkus
    `)
}

/*
1. MTL: Slakovsky
2. NJD: pick traded (team the pick is traded to picks Wright)
3. ARI: Cooley
4. SEA: Gauthier
5. PHI: Nemec
6. CBJ: Lambert
7. CHI: Jiricek
8. DET: Kemell
9. BUF: Kasper
10. ANA: Savoie
11. SJS: Lekkerimaki
12. CBJ: Geekie
13. NYI: Korchinski
14. WIN: Mintyukov
15. VAN: Ohgren
16. BUF: Pickering
17. NSH: Ostlund
18. DAL: Nazar
19. MIN: Howard
20. WSH: Yurov
21. PIT: Bischel
22. ANA: Snuggerud
23. STL: Miroschnichenko
24. MIN: Chelsey
25. TOR: Belluz
26. MTL: Rinzel
27. ARI: Kulich
28. BUF: Mateychuk
29. EDM: Brennan
30. WIN: Beck
31. TBL: McGroarty
32. ARI: Firkus
*/