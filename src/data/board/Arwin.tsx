import { TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForArwin(players: TPlayer[]) {
    return getBoardFromSnippet(players, "Arwin", `
    1. MTL: Shane Wright
    2. NJD: Juraj Slafkovsky
    3. ARI: Logan Cooley
    4. SEA: Simon Nemec
    5. PHI: David Jiricek
    6. CBJ: Cutter Gauthier
    7. OTT: Marco Kasper
    8. DET: Frank Nazar
    9. BUF: Matthew Savoie
    10. ANA: Pavel Mintyukov
    11. SJS: Jonathan Lekkerimäki
    12. CBJ: Kevin Korchinski
    13. NYI: Brad Lambert
    14. WIN: Denton Mateychuk
    15. VAN: Joakim Kemell
    16. BUF: Conor Geekie
    17. NSH: Danila Yurov
    18. DAL: Ivan Miroshnichenko
    19. MIN: Isaac Howard
    20. WSH: Liam Öhgren
    21. PIT: Rutger McGroarty
    22. ANA: Jagger Firkus
    23. STL: Jimmy Snuggerud
    24. MIN: Jiri Kulich
    25. TOR: Noah Östlund
    26. MTL: Nathan Gaucher
    27. ARI: Lian Bichsel
    28. BUF: Ryan Chesley
    29. EDM: Filip Mesar
    30. WIN: Owen Pickering
    31. TBL: Gleb Trikozov
    32. ARI: Lane Hutson
    `)
}

/*
1. MTL: Shane Wright
2. NJD: Juraj Slafkovský
3. ARI: Logan Cooley
4. SEA: Simon Nemec
5. PHI: David Jiricek
6. CBJ: Cutter Gauthier
7. OTT: Marco Kasper
8. DET: Frank Nazar
9. BUF: Matthew Savoie
10. ANA: Pavel Mintyukov
11. SJS: Jonathan Lekkerimäki
12. CBJ: Kevin Korchinski
13. NYI: Brad Lambert
14. WIN: Denton Mateychuk
15. VAN: Joakim Kemell
16. BUF: Conor Geekie
17. NSH: Daniel Yurov
18. DAL: Ivan Miroshnichenko
19. MIN: Isaac Howard
20. WSH: Liam Öhgren
21. PIT: Rutger McGroarty
22. ANA: Jagger Firkus
23. STL: Jimmy Snuggerud
24. MIN: Jiri Kulich
25. TOR: Noah Östlund
26. MTL: Nathan Gaucher
27. ARI: Lian Bichsel
28. BUF: Ryan Chesley
29. EDM: Filip Mesar
30. WIN: Owen Pickering
31. TBL: Gleb Trikozov
32. ARI: Lane Hutson

*/