import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function getBoardForKaprizovSaveUs(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "KaprizovSaveUs", `
    1. MTL: Wright
    2. NJD: Slaf
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Gauthier
    6. CBJ: Kasper
    7. OTT: Jiricek
    8. DET: Lekkerimäki
    9. BUF: Savoie
    10. ANA: Korchinski
    11. SJS: Kemell
    12. CBJ: Mintyukov
    13. NYI: Geekie
    14. WIN: Nazar
    15. VAN: Östlund
    16. BUF: Yurov
    17. NSH: Mateychuk
    18. DAL: McGroarty
    19. MIN: Kulich
    20. WSH: Pickering
    21. PIT: Gaucher
    22. ANA: Snuggerud
    23. STL: Chesley
    24. MIN: Lambert
    25. TOR: Bichsel
    26. MTL: Öhgren
    27. ARI: Howard
    28. BUF: Schaefer
    29. EDM: Bystedt
    30. WIN: Luneau
    31. TBL: Firkus
    32. ARI: Rinzel
    `)

}

/*
1. MTL: Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Gauthier
6. CBJ: Kasper
7. OTT: Jiricek
8. DET: Lekkerimaki
9. BUF: Savoie
10. ANA: Korchinski
11. SJS: Kemell
12. CBJ: Mintyukov
13. NYI: Geekie
14. WIN: Nazar
15. VAN: Ostlund
16. BUF: Yurov
17. NSH: Mateychuk
18. DAL: McGroarty
19. MIN: Kulich
20. WSH: Pickering
21. PIT: Gaucher
22. ANA: Jimmy Snuggerud
23. STL: Ryan Chesley
24. MIN: Brad Lambert
25. TOR: Liam Bischel
26. MTL: Ohgren
27. ARI: Howard
28. BUF: Schaefer
29. EDM: Bystedt
30. WIN: Luneau
31. TBL: Firkus
32. ARI: Rinzel
*/