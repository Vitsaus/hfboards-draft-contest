import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForDollardStLaurent(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "DollardStLaurent", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: David Jiricek
    6. CBJ: Joakim Kemell
    7. OTT: Matthew Savoie
    8. DET: Jonathan Lekkerimäki
    9. BUF: Cutter Gauthier
    10. ANA: Frank Nazar
    11. SJS: Pavel Mintyukov
    12. CBJ: Danila Yurov
    13. NYI: Kevin Korchinski
    14. WIN: Denton Mateychuk
    15. VAN: Brad Lambert
    16. BUF: Marco Kasper
    17. NSH: Liam Öhgren
    18. DAL: Conor Geekie
    19. MIN: Owen Pickering
    20. WSH: Noah Östlund
    21. PIT: Isaac Howard
    22. ANA: Ivan Miroshnichenko
    23. STL: Gleb Trikozov
    24. MIN: Jagger Firkus
    25. TOR: Filip Mesar
    26. MTL: Rutger McGroarty
    27. ARI: Jimmy Snuggerud
    28. BUF: Jiri Kulich
    29. EDM: Calle Odelius
    30. WIN: Ryan Chesley
    31. TBL: Mattias Hävelid
    32. ARI: Seamus Casey

    `)
}

/*

*/