import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function createBoardForMattEllis(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "MattEllis", `
    1. Montreal Canadiens: Juraj Slafkovsky
    2. New Jersey Devils: Shane Wright
    3. Arizona Coyotes: Logan Cooley
    4. Seattle Kraken: Simon Nemec
    5. Philadelphia Flyers: Cutter Gauthier
    6. Columbus Blue Jackets: David Jiricek
    7. Ottawa Senators: Jonathan Lekkerimäki
    8. Detroit Red Wings: Frank Nazar
    9. Buffalo Sabres: Marco Kasper
    10. Anaheim Ducks: Joakim Kemell
    11. San Jose Sharks: Matthew Savoie
    12. Columbus Blue Jackets: Conor Geekie
    13. New York Islanders: Pavel Mintyukov
    14. Winnipeg Jets: Brad Lambert
    15. Vancouver Canucks: Kevin Korchinski
    16. Buffalo Sabres: Danila Yurov
    17. Nashville Predators: Isaac Howard
    18. Dallas Stars: Ivan Miroshnichenko
    19. Minnesota Wild: Noah Östlund
    20. Washington Capitals: Jiri Kulich
    21. Pittsburgh Penguins: Jimmy Snuggerud
    22. Anaheim Ducks: Lian Bichsel
    23. St. Louis Blues: Owen Pickering
    24. Minnesota Wild: Liam Öhgren
    25. Toronto Maple Leafs: Rutger McGroarty
    26. Montreal Canadiens: Sam Rinzel
    27. Arizona Coyotes: Ryan Chesley
    28. Buffalo Sabres: Nathan Gaucher
    29. Edmonton Oilers: Denton Mateychuk
    30. Winnipeg Jets: Calle Odelius
    31. Tampa Bay Lightning: Jagger Firkus
    32. Arizona Coyotes: Filip Mesar
    `)
}

/*
1. Montreal Canadiens: Juraj Slafkovsky
2. New Jersey Devils: Shane Wright
3. Arizona Coyotes: Logan Cooley
4. Seattle Kraken: Simon Nemec
5. Philadelphia Flyers: Cutter Gauthier
6. Columbus Blue Jackets: David Jiricek
7. Ottawa Senators: Jonathan Lekkerimaki
8. Detroit Red Wings: Frank Nazar
9. Buffalo Sabres: Marco Kasper
10. Anaheim Ducks: Joakim Kemell
11. San Jose Sharks: Matthew Savoie
12. Columbus Blue Jackets: Conor Geekie
13. New York Islanders: Pavel Mintyukov
14. Winnipeg Jets: Brad Lambert
15. Vancouver Canucks: Kevin Korchinski
16. Buffalo Sabres: Danila Yurov
17. Nashville Predators: Isaac Howard
18. Dallas Stars: Ivan Miroshnichenko
19. Minnesota Wild: Noah Ostlund
20. Washington Capitals: Jiri Kulich
21. Pittsburgh Penguins: Jimmy Snuggerud
22. Anaheim Ducks: Lian Bischel
23. St. Louis Blues: Owen Pickering
24. Minnesota Wild: Liam Ohgren
25. Toronto Maple Leafs: Rutger McGroarty
26. Montreal Canadiens: Sam Rinzel
27. Arizona Coyotes: Ryan Chesley
28. Buffalo Sabres: Nathan Gaucher
29. Edmonton Oilers: Denton Mateychuk
30. Winnipeg Jets: Calle Odellius
31. Tampa Bay Lightning: Jagger Firkus
32. Arizona Coyotes: Filip Mesar
*/