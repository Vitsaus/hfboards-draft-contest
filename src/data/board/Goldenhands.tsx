import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForGoldenhands(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Goldenhands", `
    1. MTL: Slafkovsky
    2. NJD: Jiricek
    3. ARI: Gauthier
    4. SEA: Nemec
    5. PHI: Cooley
    6. CBJ: Kasper
    7. OTT: Kemell
    8. DET: Lekkerimäki
    9. BUF: Geekie
    10. ANA: Savoie
    11. SJS: Mintyukov
    12. CBJ: Yurov
    13. NYI: Nazar
    14. WIN: Bichsel
    15. VAN: Kulich
    16. BUF: Lambert
    17. NSH: Mesar
    18. DAL: Snuggerud
    19. MIN: Korchinski
    20. WSH: McGroarty
    21. PIT: Miro
    22. ANA: Howard
    23. STL: Gaucher
    24. MIN: Öhgren
    25. TOR: Hughes
    26. MTL: Sykora
    27. ARI: Odelius
    28. BUF: Östlund
    29. EDM: Mateychuk
    30. WIN: Pickering
    31. TBL: Rinzel
    32. ARI: Firkus
    `)
}