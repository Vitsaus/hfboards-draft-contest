import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForBukwas(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "bukwas", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Jiricek
    6. CBJ: Kasper
    7. OTT: Savoie
    8. DET: Kemell
    9. BUF: Gauthier
    10. ANA: Korchinski
    11. SJS: Mintyukov
    12. CBJ: Lekkerimäki
    13. NYI: Lambert
    14. WIN: Pickering
    15. VAN: Chesley
    16. BUF: Nazar
    17. NSH: Östlund
    18. DAL: Mateychuk
    19. MIN: Miroshnichenko
    20. WSH: Geekie
    21. PIT: Gaucher
    22. ANA: Öhgren
    23. STL: McGroarty
    24. MIN: Del Bel Belluz
    25. TOR: Kulich
    26. MTL: Bichsel
    27. ARI: Mesar
    28. BUF: Howard
    29. EDM: Schaefer
    30. WIN: Firkus
    31. TBL: Snuggerud
    32. ARI: Hutson
    `)
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Jiricek
6. CBJ: Kasper
7. OTT: Savoie
8. DET: Kemell
9. BUF: Gauthier
10. ANA: Korchinski
11. SJS: Mintyukov
12. CBJ: Lekkerimaki
13. NYI: Lambert
14. WIN: Pickering
15. VAN: Chesley
16. BUF: Nazar
17. NSH: Ostlund
18. DAL: Mateychuk
19. MIN: Miroshnichenko
20. WSH: Geekie
21. PIT: Gaucher
22. ANA: Ohgren
23. STL: McGroarty
24. MIN: Del Bel Belluz
25. TOR: Kulich
26. MTL: Bichsel
27. ARI: Mesas
28. BUF: Howard
29. EDM: Schaefer
30. WIN: Firkus
31. TBL: Snuggerud
32. ARI: Hutson

*/