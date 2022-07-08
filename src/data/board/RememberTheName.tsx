import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForRememberTheName(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "RememberTheName", `
    1. MTL: Shane Wright
    2. NJD: Juraj SLafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: Cutter Gauthier
    6. CBJ: David Jiricek
    7. OTT: Jonathan Lekkerimäki
    8. DET: Marco Kasper
    9. BUF: Frank Nazar
    10. ANA: Joakim Kemell
    11. SJS: Pavel Mintyukov
    12. CBJ: Ivan Miroshnichenko
    13. NYI: Conor Geekie
    14. WIN: Matthew Savoie
    15. VAN: Liam Öhgren
    16. BUF: Danila Yurov
    17. NSH: Kevin Korchinski
    18. DAL: Brad Lambert
    19. MIN: Isaac Howard
    20. WSH: Owen Pickering
    21. PIT: Jimmy Snuggerud
    22. ANA: Denton Mateychuk
    23. STL: Lian Bichsel
    24. MIN: Calle Odelius
    25. TOR: Jiri Kulich
    26. MTL: Tristan Luneau
    27. ARI: Gleb Trikozov
    28. BUF: Ryan Chesley
    29. EDM: Reid Schaefer
    30. WIN: Jack Hughes
    31. TBL: Adam Sykora
    32. ARI: Lane Hutson
    `)
}

/*
1. MTL: Shane Wright
2. NJD: Juraj SLafkovsky
3. ARI: Logan Cooley
4. SEA: Simon Nemec
5. PHI: Cutter Gauthier
6. CBJ: David Jiricek
7. OTT: Jonathan Lekkerimaki
8. DET: Marco Kasper
9. BUF: Frank Nazar
10. ANA: Joakim Kemell
11. SJS: Pavel Mintyukov
12. CBJ: Ivan Miroshnichenko
13. NYI: Conor Geekie
14. WIN: Matt Savoie
15. VAN: Liam Ohgren
16. BUF: Danila Yurov
17. NSH: Kevin Korchinski
18. DAL: Brad Lambert
19. MIN: Isaac Howard
20. WSH: Owen Pickering
21. PIT: Jimmy Snuggerud
22. ANA: Denton Mateychuk
23. STL: Lian Bichsel
24. MIN: Calle Odelius
25. TOR: Jiri Kulich
26. MTL: Tristan Luneau
27. ARI: Gleb Trikozov
28. BUF: Ryan Chesley
29. EDM: Reid Schaeffer
30. WIN: Jack Hughes
31. TBL: Adam Sykora
32. ARI: Lane Hutson

*/