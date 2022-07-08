import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function getBoardForMaffew(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Maffew", `
    1. MTL: Wright
    2. NJD: Slaf
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Jiricek
    6. CBJ: Savoie
    7. OTT: Kemell
    8. DET: Gauthier
    9. BUF: Lekkerimäki
    10. ANA: Nazar
    11. SJS: Mintyukov
    12. CBJ: Korchinski
    13. NYI: Yurov
    14. WIN: Kasper
    15. VAN: Mateychuk
    16. BUF: Lambert
    17. NSH: Geekie
    18. DAL: Öhgren
    19. MIN: Pickering
    20. WSH: Miro
    21. PIT: Howard
    22. ANA: Snuggerud
    23. STL: Firkus
    24. MIN: McGroarty
    25. TOR: Östlund
    26. MTL: Kulich
    27. ARI: Trikozov
    28. BUF: Mesar
    29. EDM: Odelius
    30. WIN: Chesley
    31. TBL: Bichsel
    32. ARI: Gaucher
    `)
}

/*
1. MTL: Wright
2. NJD: Slafkovski
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Jiricek
6. CBJ: Savoie
7. OTT: Kemell
8. DET: Gauthier
9. BUF: Lekkerimaki
10. ANA: Nazar
11. SJS: Mintyukov
12. CBJ: Korchinski
13. NYI: Yurov
14. WIN: Kasper
15. VAN: Mateychuk
16. BUF: Lambert
17. NSH: Geekie
18. DAL: Ohgren
19. MIN: Pickering
20. WSH: Miroshnickenko
21. PIT: Howard
22. ANA: Snuggerud
23. STL: Firkus
24. MIN: McGroarty
25. TOR: Ostlund
26. MTL: Kulich
27. ARI: Trikozov
28. BUF: Mesar
29. EDM: Odelius
30. WIN: Chesley
31. TBL: Bichsel
32. ARI: Gaucher
*/