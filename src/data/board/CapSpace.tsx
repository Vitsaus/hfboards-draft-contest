import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForCapSpace(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "CapSpace", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Gauthier
    6. CBJ: Savoie
    7. OTT: Jiricek
    8. DET: Lekkerimäki
    9. BUF: Geekie
    10. ANA: Korchinski
    11. SJS: Mintyukov
    12. CBJ: Mateychuk
    13. NYI: Kemell
    14. WIN: Bichsel
    15. VAN: Nazar
    16. BUF: Hutson
    17. NSH: Kasper
    18. DAL: Chesley
    19. MIN: Yurov
    20. WSH: Miro
    21. PIT: Lambert
    22. ANA: Kulich
    23. STL: Pickering
    24. MIN: Snuggerud
    25. TOR: Gaucher
    26. MTL: Sykora
    27. ARI: Howard
    28. BUF: McGroarty
    29. EDM: Öhgren
    30. WIN: Östlund
    31. TBL: Luneau
    32. ARI: Firkus
    `)
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Gauthier
6. CBJ: Savoie
7. OTT: Jiricek
8. DET: Lekkerimaki
9. BUF: Geekie
10. ANA: Korchinski
11. SJS: Mintyukov
12. CBJ: Mateychuk
13. NYI: Kemell
14. WIN: Bichsel
15. VAN: Nazar
16. BUF: Hutson
17. NSH: Kaspar
18. DAL: Chesley
19. MIN: Yurov
20. WSH: Miroshnichenko
21. PIT: Lambert
22. ANA: Kulich
23. STL: Pickering
24. MIN: Snuggerug
25. TOR: Gaucher
26. MTL: Sykora
27. ARI: Howard
28. BUF: McGroarty
29. EDM: Ohgren
30. WIN: Ostlund
31. TBL: Luneau
32. ARI: Firkus
*/