import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForPavelBuchnevich(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Pavel Buchnevich", `
    1. MTL: Juraj Slafkovsky
    2. NJD: Shane Wright
    3. ARI: Cutter Gauthier
    4. SEA: Simon Nemec
    5. PHI: Logan Cooley
    6. CBJ: Marco Kasper
    7. OTT: David Jiricek
    8. DET: Matthew Savoie
    9. BUF: Jonathan Lekkerimäki
    10. ANA: Kevin Korchinski
    11. SJS: Pavel Mintyukov
    12. CBJ: Joakim Kemell
    13. NYI: Nathan Gaucher
    14. WIN: Conor Geekie
    15. VAN: Frank Nazar
    16. BUF: Danila Yurov
    17. NSH: Jimmy Snuggerud
    18. DAL: Liam Öhgren
    19. MIN: Noah Östlund
    20. WSH: Jiri Kulich
    21. PIT: Lian Bichsel
    22. ANA: Rutger McGroarty
    23. STL: Reid Schaefer
    24. MIN: Ryan Chesley
    25. TOR: Isaac Howard
    26. MTL: Filip Bystedt
    27. ARI: Sam Rinzel
    28. BUF: Lane Hutson
    29. EDM: Luca Del Bel Belluz
    30. WIN: Owen Pickering
    31. TBL: Ivan Miro
    32. ARI: Denton Mateychuk
    `)
}

/*
1. MTL: Juraj Slafkovsky
2. NJD: Shane Wright
3. ARI: Cutter Gauthier
4. SEA: Simon Nemec
5. PHI: Logan Cooley
6. CBJ: Marco Kasper
7. OTT: David Jiricek
8. DET: Matt Savoie
9. BUF: Jonathan Lekkerimaki
10. ANA: Kevin Korchinski
11. SJS: Pavel Mintyukov
12. CBJ: Joakim Kemell
13. NYI: Nathan Gaucher
14. WIN: Conor Geekie
15. VAN: Frank Nazar
16. BUF: Danila Yurov
17. NSH: Jimmy Snuggerud
18. DAL: Liam Oehgren
19. MIN: Noah Oestlund
20. WSH: Jiri Kulich
21. PIT: Lian Bichsel
22. ANA: Rutger McGroarty
23. STL: Reid Schaefer
24. MIN: Ryan Chesley
25. TOR: Isaac Howard
26. MTL: Filip Bystedt
27. ARI: Sam Rinzel
28. BUF: Lane Hutson
29. EDM: Luca Del Bel Belluz
30. WIN: Owen Pickering
31. TBL: Ivan Miroshnichenko
32. ARI: Denton Mateychuk
*/