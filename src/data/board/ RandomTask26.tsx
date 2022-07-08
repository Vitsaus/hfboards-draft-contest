import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForRandomTask26(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "RandomTask26", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Gauthier
    6. CBJ: Jiricek
    7. OTT: Mintyukov
    8. DET: Lambert
    9. BUF: Nazar
    10. ANA: Korchinski
    11. SJS: Geekie
    12. CBJ: Lekkerimäki
    13. NYI: Kasper
    14. WIN: Savoie
    15. VAN: Öhgren
    16. BUF: Pickering
    17. NSH: Chesley
    18. DAL: Kemell
    19. MIN: McGroarty
    20. WSH: Kulich
    21. PIT: Snuggerud
    22. ANA: Bichsel
    23. STL: Howard
    24. MIN: Mateychuk
    25. TOR: Yurov
    26. MTL: Östlund
    27. ARI: Miro
    28. BUF: Firkus
    29. EDM: Rinzel
    30. WIN: Gaucher
    31. TBL: Odelius
    32. ARI: Schaefer
    `)
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Gauthier
6. CBJ: Jiricek
7. OTT: Mintyukov
8. DET: Lambert
9. BUF: Nazar
10. ANA: Korchinski
11. SJS: Geekie
12. CBJ: Lekkerimaki
13. NYI: Kasper
14. WIN: Savoie
15. VAN: Ohgren
16. BUF: Pickering
17. NSH: Chesley
18. DAL: Kemell
19. MIN: McGroarty
20. WSH: Kulich
21. PIT: Snuggerud
22. ANA: Bichsel
23. STL: Howard
24. MIN: Mateychuk
25. TOR: Yurov
26. MTL: Ostlund
27. ARI: Miroschnichenko
28. BUF: Firkus
29. EDM: Rinzel
30. WIN: Gaucher
31. TBL: Odelius
32. ARI: Schaefer
*/