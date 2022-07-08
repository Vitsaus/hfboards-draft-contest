import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, } from "../boards";

export function createBoardForVildurson(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Vildurson", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Gauthier
    6. CBJ: Jiricek
    7. OTT: Kasper
    8. DET: Savoie
    9. BUF: Kemell
    10. ANA: Korchinski
    11. SJS: Lekkerimäki
    12. CBJ: Nazar
    13. NYI: Lambert
    14. WIN: Mintyukov
    15. VAN: Öhgren
    16. BUF: Yurov
    17. NSH: Östlund
    18. DAL: Howard
    19. MIN: Chesley
    20. WSH: Geekie
    21. PIT: Snuggerud
    22. ANA: Kulich
    23. STL: Mateychuk
    24. MIN: Miroshnichenko
    25. TOR: Del Bel Belluz
    26. MTL: Pickering
    27. ARI: McGroarty
    28. BUF: Bichsel
    29. EDM: Gaucher
    30. WIN: Beck
    31. TBL: Luneau
    32. ARI: Casey
    `);
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Gauthier
6. CBJ: Jiricek
7. OTT: Kasper
8. DET: Savoie
9. BUF: Kemell
10. ANA: Korchinski
11. SJS: Lekkerinmäki
12. CBJ: Nazar
13. NYI: Lambert
14. WIN: Mintyukov
15. VAN: Öhgren
16. BUF: Yurov
17. NSH: Östlund
18. DAL: Howard
19. MIN: Chesley
20. WSH: Geekie
21. PIT: Snuggerud
22. ANA: Kulich
23. STL: Mateychuk
24. MIN: Miroshnichenko
25. TOR: Del Bel Belluz
26. MTL: Pickering
27. ARI: McGroarty
28. BUF: Bischel
29. EDM: Gaucher
30. WIN: Beck
31. TBL: Luneau
32. ARI: Casey
*/