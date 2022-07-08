import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForSaabman0508(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Saabman0508", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Gauthier
    6. CBJ: Jiricek
    7. CHI: Kemell
    8. DET: Kasper
    9. BUF: Savoie
    10. ANA: Lekkerimäki
    11. SJS: Geekie
    12. CBJ: Korchinski
    13. NYI: Nazar
    14. WIN: Howard
    15. VAN: Mintyukov
    16. BUF: Yurov
    17. NSH: Snuggerud
    18. DAL: Kulich
    19. MIN: Öhgren
    20. WSH: Mateychuk
    21. PIT: Pickering
    22. ANA: Östlund
    23. STL: Miro
    24. MIN: Chesley
    25. TOR: McGroarty
    26. MTL: Gaucher
    27. ARI: Firkus
    28. BUF: Lambert
    29. EDM: Bichsel
    30. WIN: Schaefer
    31. TBL: Hughes
    32. ARI: Luneau
    `)
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Gauthier
6. CBJ: Jiricek
7. CHI: Kemell
8. DET: Kasper
9. BUF: Savoie
10. ANA: Lekkerimaki
11. SJS: Geekie
12. CBJ: Korchinski
13. NYI: Nazar
14. WIN: Howard
15. VAN: Mintyukov
16. BUF: Yurov
17. NSH: Snuggerud
18. DAL: Kulich
19. MIN: Ohlund
20. WSH: Mateychuk
21. PIT: Pickering
22. ANA: Ostlund
23. STL: Miroshnichenko
24. MIN: Chesley
25. TOR: Mcgroarty
26. MTL: Gaucher
27. ARI: Firkus
28. BUF: Lambert
29. EDM: Bichsel
30. WIN: Schaefer
31. TBL: Hughes
32. ARI: Luneau
*/