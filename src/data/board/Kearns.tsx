import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForKearns(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Kearns", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Jiricek
    6. CBJ: Kasper
    7. OTT: Mintyukov
    8. DET: Gauthier
    9. BUF: Kemell
    10. ANA: Korchinski
    11. SJS: Savoie
    12. CBJ: Lekkerimäki
    13. NYI: Lambert
    14. WIN: Geekie
    15. VAN: Öhgren
    16. BUF: Miro
    17. NSH: Nazar
    18. DAL: Mateychuk
    19. MIN: Bichsel
    20. WSH: Yurov
    21. PIT: Snuggerud
    22. ANA: Kulich
    23. STL: McGroarty
    24. MIN: Östlund
    25. TOR: Chesley
    26. MTL: Pickering
    27. ARI: Gaucher
    28. BUF: Howard
    29. EDM: Luneau
    30. WIN: Nelson
    31. TBL: Lamoureux
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
7. OTT: Mintyukov
8. DET: Gauthier
9. BUF: Kemell
10. ANA: Korchinski
11. SJS: Savoie
12. CBJ: Lekkerimaki
13. NYI: Lambert
14. WIN: Geekie
15. VAN: Ohgren
16. BUF: Miroschnichenko
17. NSH: Nazar
18. DAL: Mateychuk
19. MIN: Bichsel
20. WSH: Yurov
21. PIT: Snuggerud
22. ANA: Kulich
23. STL: McGroarty
24. MIN: Östlund
25. TOR: Chesley
26. MTL: Pickering
27. ARI: Gaucher
28. BUF: Howard
29. EDM: Luneau
30. WIN: Nelson
31. TBL: Lamoureux
32. ARI: Hutson

*/