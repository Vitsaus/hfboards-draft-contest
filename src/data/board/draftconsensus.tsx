import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForDraftconsensus(players:  TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "draftconsensus", `
    1. MTL: Juraj Slafkovsky
    2. NJD: David Jiricek
    3. ARI: Shane Wright
    4. SEA: Simon Nemec
    5. PHI: Logan Cooley
    6. CBJ: Frank Nazar
    7. OTT: Conor Geekie
    8. DET: Brad Lambert
    9. BUF: Cutter Gauthier
    10. ANA: Matthew Savoie
    11. SJS: Pavel Mintyukov
    12. CBJ: Kevin Korchinski
    13. NYI: Marco Kasper
    14. WIN: Jonathan Lekkerimäki
    15. VAN: Ryan Chesley
    16. BUF: Joakim Kemell
    17. NSH: Danila Yurov
    18. DAL: Lian Bichsel
    19. MIN: Jagger Firkus
    20. WSH: Ivan Miroshnichenko
    21. PIT: Nathan Gaucher
    22. ANA: Owen Pickering
    23. STL: Liam Öhgren
    24. MIN: Denton Mateychuk
    25. TOR: Isaac Howard
    26. MTL: Noah Östlund
    27. ARI: Lane Hutson
    28. BUF: Maveric Lamoureux
    29. EDM: Filip Mesar
    30. WIN: Rutger Mcgroarty
    31. TBL: Mattias Hävelid
    32. ARI: Jimmy Snuggerud
    `)
}

/*
1. MTL: Juraj Slafkovsky
2. NJD: David Jiricek
3. ARI: Shane Wright
4. SEA: Simon Nemec
5. PHI: Logan Cooley
6. CBJ: Frank Nazar
7. OTT: Connor Geekie
8. DET: Brad Lambert
9. BUF: Cutter Gauthier
10. ANA: Matthew Savoie
11. SJS: Pavel Mintyukov
12. CBJ: Kevin Korchinski
13. NYI: Marco Kasper
14. WIN: Jonathan Lekkerimaki
15. VAN: Ryan Chesley
16. BUF: Joakim Kemell
17. NSH: Danila Yurov
18. DAL: Lian Bichsel
19. MIN: Jagger Firkus
20. WSH: Ivan Miroshnichenko
21. PIT: Nathan Gaucher
22. ANA: Owen Pickering
23. STL: Liam Ohgren
24. MIN: Denton Mateychuk
25. TOR: Isaac Howard
26. MTL: Noah Ostlund
27. ARI: Lane Hutson
28. BUF: Maveric Lamoureux
29. EDM: Filip Mesar
30. WIN: Rutger Mcgroarty
31. TBL: Mattias Havelid
32. ARI: Jimmy Snuggerud

*/