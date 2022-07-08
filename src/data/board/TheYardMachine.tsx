// TheYardMachine

import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function getBoardForTheYardMachine(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "TheYardMachine", `
    1. MTL : Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Savoie
    6. CBJ: Jiricek
    7. OTT: Kemell
    8. DET: Lekkerimäki
    9. BUF: Gauthier
    10. ANA: Mintyukov
    11. SJS: Kasper
    12. CBJ: Geekie
    13. NYI: Nazar
    14. WIN: Öhgren
    15. VAN: Lambert
    16. BUF: Miroshnichenko
    17. NSH: Snuggerud
    18. DAL: McGroarty
    19. MIN: Yurov
    20. WSH: Korchinski
    21. PIT: Kulich
    22. ANA: Chesley
    23. STL: Pickering
    24. MIN: Bichsel
    25. TOR: Mateychuk
    26. MTL: Östlund
    27. ARI: Howard
    28. BUF: Gaucher
    29. EDM: Firkus
    30. WIN : Odelius
    31. TBL : Hutson
    32. ARI : Rinzel
    `);
}

/*
1. MTL : Wright
2. NJD: Slafkovsky
3. ARI: Cooley
4. SEA: Nemec
5. PHI: Savoie
6. CBJ: Jiricek
7. OTT: Kemell
8. DET: Lekkerimaki
9. BUF: Gauthier
10. ANA: Mintyukov
11. SJS: Kasper
12. CBJ: Geekie
13. NYI: Nazar
14. WIN: Ohgren
15. VAN: Lambert
16. BUF: Miroshnichenko
17. NSH: Snuggerud
18. DAL: McGroarty
19. MIN: Yurov
20. WSH: Korchinski
21. PIT: Kulich
22. ANA: Chesley
23. STL: Pickering
24. MIN: Bichsel
25. TOR: Mateychuk
26. MTL: Ostlund
27. ARI: Howard
28. BUF: Gaucher
29. EDM: Firkus
30. WIN : Odelius
31. TBL : Hutson
32. ARI : Rinzel
*/