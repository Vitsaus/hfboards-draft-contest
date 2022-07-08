import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function getBoardForAntonche(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Antonche", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Nemec
    4. SEA: Cooley
    5. PHI: Jiricek
    6. CBJ: Kemell
    7. OTT: Gauthier
    8. DET: Kasper
    9. BUF: Nazar
    10. ANA: Korchinski
    11. SJS: Lekkerimäki
    12. CBJ: Mintyukov
    13. NYI: Savoie
    14. WIN: Mateychuk
    15. VAN: Östlund
    16. BUF: Lambert
    17. NSH: Öhgren
    18. DAL: Howard
    19. MIN: Snuggerud
    20. WSH: Kulich
    21. PIT: Geekie
    22. ANA: Yurov
    23. STL: Pickering
    24. MIN: Rinzel
    25. TOR: Bichsel
    26. MTL: Gaucher
    27. ARI: Mesar
    28. BUF: Chesley
    29. EDM: Luneau
    30. WIN: Firkus
    31. TBL: Odelius
    32. ARI: Hutson
    `)
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Nemec
4. SEA: Cooley
5. PHI: Jiricek
6. CBJ: Kemell
7. OTT: Gauthier
8. DET: Kasper
9. BUF: Nazar
10. ANA: Korchinski
11. SJS: Lekkerimaki
12. CBJ: Mintyukov
13. NYI: Savoie
14. WIN: Mateychuk
15. VAN: Ostlund
16. BUF: Lambert
17. NSH: Ohgren
18. DAL: Howard
19. MIN: Snuggerud
20. WSH: Kulich
21. PIT: Geekie
22. ANA: Yurov
23. STL: Pickering
24. MIN: Rinzel
25. TOR: Bichsel
26. MTL: Gaucher
27. ARI: Mesar
28. BUF: Chesley
29. EDM: Luneau
30. WIN: Firkus
31. TBL: Odelius
32. ARI: Hutson

*/