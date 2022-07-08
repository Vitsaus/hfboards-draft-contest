import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForMichaelFarrell(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "MichaelFarrell", `
    1. Montreal: Shane Wright
    2. New Jersey: Logan Cooley
    3. Arizona: David Jiricek
    4. Seattle: Simon Nemec
    5. Philadelphia: Juraj Slafkovsky
    6. Columbus: Matthew Savoie
    7. Chicago: Frank Nazar
    8. Detroit: Jonathan Lekkerimäki
    9. Buffalo: Cutter Gauthier
    10. Anaheim: Kevin Korchinski
    11. San Jose: Denton Mateychuk
    12. Columbus: Pavel Mintyukov
    13. Islanders: Conor Geekie
    14. Winnipeg: Joakim Kemell
    15. Vancouver: Danila Yurov
    16. Buffalo: Brad Lambert
    17. Nashville: Noah Östlund
    18. Dallas: Rutger McGroarty
    19.Minnesota: Filip Mesar
    20. Washington: Isaac Howard
    21. Pittsburgh: Marco Kasper
    22. Anaheim: Owen Pickering
    23. St. Louis: Jack Hughes
    24. Minnesota: Seamus Casey
    25. Toronto: Gleb Trikozov
    26. Montreal: Lian Bichsel
    27. Arizona: Lane Hutson
    28. Buffalo: Jagger Firkus
    29. Edmonton: Calle Odelius
    30. Winnipeg: Nathan Gaucher
    31. Arizona/Tampa: Julian Lutz
    32. Tampa/Arizona: Ryan Chesley
    `)
}

/*
1. Montreal: Shane Wright
2. New Jersey: Logan Cooley
3. Arizona: David Jiricek
4. Seattle: Simon Nemec
5. Philadelphia: Juraj Slafkovsky
6. Columbus: Matthew Savoie
7. Chicago: Frank Nazar
8. Detroit: Jonathan Lekkerimaki
9. Buffalo: Cutter Gauthier
10. Anaheim: Kevin Korchinski
11. San Jose: Denton Mateychuk
12. Columbus: Pavel Mintyukov
13. Islanders: Connor Geekie
14. Winnipeg: Joakim Kemell
15. Vancouver: Danila Yurov
16. Buffalo: Brad Lambert
17. Nashville: Noah Oslund
18. Dallas: Rutger McGroarty
19.Minnesota: Filip Mesar
20. Washington: Isaac Howard
21. Pittsburgh: Marco Kasper
22. Anaheim: Owen Pickering
23. St. Louis: Jack Hughes
24. Minnesota: Seamus Casey
25. Toronto: Gleb Trikozov
26. Montreal: Lian Bichsel
27. Arizona: Lane Hudston
28. Buffalo: Jagger Firkus
29. Edmonton: Calle Odelius
30. Winnipeg: Nathan Gaucher
31. Arizona/Tampa: Julian Lutz
32. Tampa/Arizona: Ryan Chesley

*/