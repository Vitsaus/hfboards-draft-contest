import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForGretzkys99Problems(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Gretzkys99Problems", `
    1. MTL: Shane Wright
    2. NJD: Logan Cooley
    3. ARI: Juraj Slafkovsky
    4. SEA: David Jiricek
    5. PHI: Cutter Gauthier
    6. CBJ: Joakim Kemell
    7. OTT: Simon Nemec
    8. DET: Jonathan Lekkerimäki
    9. BUF: Matthew Savoie
    10. ANA: Frank Nazar
    11. SJS: Marco Kasper
    12. CBJ: Kevin Korchinski
    13. NYI: Owen Pickering
    14. WIN: Pavel Mintyukov
    15. VAN: Jimmy Snuggerud
    16. BUF: Isaac Howard
    17. NSH: Jiri Kulich
    18. DAL: Conor Geekie
    19. MIN: Denton Mateychuk
    20. WSH: Ivan Miroshnichenko
    21. PIT: Rutger McGroarty
    22. ANA: Lian Bichsel
    23. STL: Owen Beck
    24. MIN: Brad Lambert
    25. TOR: Liam Öhgren
    26. MTL: Ryan Chesley
    27. ARI: Noah Östlund
    28. BUF: Jagger Firkus
    29. EDM: Luca Del Bel Belluz
    30. WIN: Reid Schaefer
    31. TBL: Filip Mesar
    32. ARZ: Lane Hutson
    `)
}

/*
1. MTL: Shane Wright
2. NJD: Logan Cooley
3. ARI: Juraj Slafkovsky
4. SEA: David Jiricek
5. PHI: Cutter Gauthier
6. CBJ: Jaokim Kemell
7. OTT: Simon Nemec
8. DET: Jonathan Lekkerimaki
9. BUF: Matthew Savoie
10. ANA: Frank Nazar lll
11. SJS: Marco Kasper
12. CBJ: Kevin Korchinski
13. NYI: Owen Pickering
14. WIN: Pavel Mintyukov
15. VAN: Jimmy Snuggerud
16. BUF: Issac Howard
17. NSH: Jiri Kulich
18. DAL: Conor Geekie
19. MIN: Denton Mateychuk
20. WSH: Ivan Miroshnichenko
21. PIT: Rutger McGroarty
22. ANA: Lian Bichsel
23. STL: Owen Beck
24. MIN: Brad Lambert
25. TOR: Liam Ohgren
26. MTL: Ryan Chesley
27. ARI: Noah Ostlund
28. BUF: Jagger Firkus
29. EDM: Luca Del Bel Belluz
30. WIN: Reid Schaefer
31. TBL: Filip Mesar
32. ARZ: Lane Hutson
*/