import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForPostBradMalone(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "PostBradMalone", `
    1. NJ (via MTL): Slafkovsky
    2. MTL (via NJ): Wright
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Gauthier
    6. CBJ: Jiricek
    7. OTT: Korchinski
    8. DET: Kasper
    9. BUF: Mintyukov
    10. ANH: Nazar
    11. SJS: Lekkerimäki
    12. CBJ: Kemell
    13. NYI: Lambert
    14. WPG: Savoie
    15. VAN: Öhgren
    16. BUF: McGroarty
    17. NSH: Mateychuk
    18. DAL: Howard
    19. LAK: Miro
    20. WSH: Yurov
    21. PIT: Östlund
    22. ANH: Geekie
    23. STL: Casey
    24. MIN: Mesar
    25. TOR: Bichsel
    26. MTL: Chesley
    27. ARI: Hutson
    28. BUF: Pickering
    29. EDM: Firkus
    30. WPG: Snuggerud
    31. TBL: Trikozov
    32. ARI: Kulich

    `)
}

/*
1. NJ (via MTL): Slafkovsky
2. MTL (via NJ): Wright
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Gauthier
6. CBJ: Jiricek
7. OTT: Korchinski
8. DET: Kasper
9. BUF: Mintyukov
10. ANH: Nazar
11. SJS: Lekkerimaki
12. CBJ: Kemell
13. NYI: Lambert
14. WPG: Savoie
15. VAN: Ohgren
16. BUF: McGroarty
17. NSH: Mateychuk
18. DAL: Howard
19. LAK: Miroshnichenko
20. WSH: Yurov
21. PIT: Ostlund
22. ANH: Geekie
23. STL: Casey
24. MIN: Mesar
25. TOR: Bichsel
26. MTL: Chesley
27. ARI: Hutson
28. BUF: Pickering
29. EDM: Firkus
30. WPG: Snuggerud
31. TBL: Trikozov
32. ARI: Kulich

*/