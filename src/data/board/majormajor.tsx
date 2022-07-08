import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function createBoardForMajormajor(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "majormajor", `
    1. MTL: Wright
    2. NJD: Slafkovsky
    3. ARI: Cooley
    4. SEA: Nemec
    5. PHI: Gauthier
    6. CBJ: Jiricek
    7. OTT: Kasper
    8. DET: Nazar
    9. BUF: Kemell
    10. ANA: Bichsel
    11. SJS: Mintyukov
    12. CBJ: Geekie
    13. NYI: Öhgren
    14. WIN: Savoie
    15. VAN: Pickering
    16. BUF: Chesley
    17. NSH: Lekkerimäki
    18. DAL: Mateychuk
    19. MIN: Korchinski
    20. WSH: Miroshnichenko
    21. PIT: McGroarty
    22. ANA: Lambert
    23. STL: Kulich
    24. MIN: Östlund
    25. TOR: Gaucher
    26. MTL: Yurov
    27. ARI: Snuggerud
    28. BUF: Beck
    29. EDM: Howard
    30. WIN: Rinzel
    31. TBL: Del Bel Belluz
    32. ARI: Schaefer
    `)
}
