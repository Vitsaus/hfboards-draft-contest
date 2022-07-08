import { TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForObtenebris(players: TPlayer[]) {
    return getBoardFromSnippet(players, "Obtenebris", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Jiricek
    6. CBJ: Savoie
    7. OTT: Kemell
    8. DET: Gauthier
    9. BUF: Lekkerimäki
    10. ANA: Korchinski
    11. SJS: Mintyukov
    12. CBJ: Lambert
    13. NYI: Geekie
    14. WIN: Nazar
    15. VAN: Chesley
    16. BUF: Öhgren
    17. NSH: Kasper
    18. DAL: Snuggerud
    19. MIN: Yurov
    20. WSH: Miro
    21. PIT: Kulich
    22. ANA: Howard
    23. STL: McGroarty
    24. MIN: Mateychuk
    25. TOR: Mesar
    26. MTL: Östlund
    27. ARI: Casey
    28. BUF: Nelson
    29. EDM: Firkus
    30. WIN: Bichsel
    31. TBL: Trikozov
    32. ARI: Hutson
    `)
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Jiricek
6. CBJ: Savoie
7. OTT: Kemell
8. DET: Gauthier
9. BUF: Lekkerimaki
10. ANA: Korchinski
11. SJS: Mintyukov
12. CBJ: Lambert
13. NYI: Geekie
14. WIN: Nazar
15. VAN: Chesley
16. BUF: Ohgren
17. NSH: Kasper
18. DAL: Snuggerud
19. MIN: Yurov
20. WSH: Miroshnichenko
21. PIT: Kulich
22. ANA: Howard
23. STL: McGroarty
24. MIN: Mateychuk
25. TOR: Mesar
26. MTL: Ostlund
27. ARI: Casey
28. BUF: Nelson
29. EDM: Firkus
30. WIN: Bischel
31. TBL: Trikozov
32. ARI: Hutson

*/