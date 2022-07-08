import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForSlimnipsu(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "slimnipsu", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Kemell
    6. CBJ: Jiricek
    7. OTT: Gauthier
    8. DET: Lekkerimäki
    9. BUF: Savoie
    10. ANA: Nazar
    11. SJS: Kasper
    12. CBJ: Geekie
    13. NYI: Lambert
    14. WIN: McGroarty
    15. VAN: Öhgren
    16. BUF: Mintyukov
    17. NSH: Korchinski
    18. DAL: Kulich
    19. MIN: Snuggerud
    20. WSH: Yurov
    21. PIT: Howard
    22. ANA: Firkus
    23. STL: Pickering
    24. MIN: Mateychuk
    25. TOR: Yurov
    26. MTL: Östlund
    27. ARI: Bichsel
    28. BUF: Chesley
    29. EDM: Mesar
    30. WIN: Gaucher
    31. TBL: Miro
    32. ARI: Hävelid
    `)
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Kemell
6. CBJ: Jiricek
7. OTT: Gauthier
8. DET: Lekkerimäki
9. BUF: Savoie
10. ANA: Nazar
11. SJS: Kasper
12. CBJ: Geekie
13. NYI: Lambert
14. WIN: McGoarty
15. VAN: Öhgren
16. BUF: Mintyukov
17. NSH: Korchinski
18. DAL: Kulich
19. MIN: Snuggerud
20. WSH: Yurov
21. PIT: Howard
22. ANA: Firkus
23. STL: Pickering
24. MIN: Mateychuk
25. TOR: Yurov
26. MTL: Östlund
27. ARI: Bichsel
28. BUF: Chesley
29. EDM: Mesar
30. WIN: Gaucher
31. TBL: Miroshnichenko
32. ARI: Havelid

*/