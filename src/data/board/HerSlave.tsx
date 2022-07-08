import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function createBoardForHer_Slave(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Her Slave", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Jiricek
    5. PHI: Nemec
    6. CBJ: Gauthier
    7. OTT: Korchinski
    8. DET: Lekkerimäki
    9. BUF: Nazar
    10. ANA: Kemell
    11. SJS: Mintyukov
    12. CBJ: Savoie
    13. NYI: Lambert
    14. WIN: Kasper
    15. VAN: Östlund
    16. BUF: Geekie
    17. NSH: Yurov
    18. DAL: Öhgren
    19. MIN: Mateychuk
    20. WSH: Kulich
    21. PIT: Snuggerud
    22. ANA: McGroarty
    23. STL: Pickering
    24. MIN: Miro
    25. TOR: Bichsel
    26. MTL: Luneau
    27. ARI: Hutson
    28. BUF: Chesley
    29. EDM: Mesar
    30. WIN: Beck
    31. TBL: Gaucher
    32. ARI: Salomonsson
    `)
}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Jiricek
5. PHI: Nemec
6. CBJ: Gauthier
7. OTT: Korchinski
8. DET: Lekkerimaki
9. BUF: Nazar
10. ANA: Kemell
11. SJS: Mintyukov
12. CBJ: Savoie
13. NYI: Lambert
14. WIN: Kasper
15. VAN: Ostlund
16. BUF: Geekie
17. NSH: Yurov
18. DAL: Ohgren
19. MIN: Mateychuk
20. WSH: Kulich
21. PIT: Snuggerud
22. ANA: McGroarity
23. STL: Pickering
24. MIN: Miroshnichenko.
25. TOR: Bichsel
26. MTL: Luneau
27. ARI: Hutson
28. BUF: Chesley
29. EDM: Mesar
30. WIN: Beck
31. TBL: Gaucher
32. ARI: Salomonsson
*/