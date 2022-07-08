import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForODoyle(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "ODoyle", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Jiricek
    6. CBJ: Gauthier
    7. OTT: Savoie
    8. DET: Nazar
    9. BUF: Kemell
    10. ANA: Lekkerimäki
    11. SJS: Kasper
    12. CBJ: Öhgren
    13. NYI: Mintyukov
    14. WIN: Geekie
    15. VAN: Korchinski
    16. BUF: Pickering
    17. NSH: Chesley
    18. DAL: Bichsel
    19. MIN: McGroarty
    20. WSH: Snuggerud
    21. PIT: Howard
    22. ANA: Lambert
    23. STL: Kulich
    24. MIN: Yurov
    25. TOR: Mateychuk
    26. MTL: Mesar
    27. ARI: Firkus
    28. BUF: Gaucher
    29. EDM: Östlund
    30. WIN: Miro
    31. TBL: Schaefer
    32. ARI: Rinzel
    `)
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Jiricek
6. CBJ: Gauthier
7. OTT: Savoie
8. DET: Nazar
9. BUF: Kemell
10. ANA: Lekkermakki
11. SJS: Kasper
12. CBJ: Ohgren
13. NYI: Mintyukov
14. WIN: Geekie
15. VAN: Korchinski
16. BUF: Pickering
17. NSH: Chesley
18. DAL: Bichsel
19. MIN: McGroarty
20. WSH: Snuggerud
21. PIT: Howard
22. ANA: Lambert
23. STL: Kulich
24. MIN: Yurov
25. TOR: Mateychuck
26. MTL: Mesar
27. ARI: Firkus
28. BUF: Gaucher
29. EDM: Ostlund
30. WIN: Miroschnichenko
31. TBL: Schaefer
32. ARI: Rinzel

*/