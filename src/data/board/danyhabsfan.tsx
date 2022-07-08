import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForDanyhabsfan(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "danyhabsfan", `
    1. Montreal Canadiens: Wright
    2. New Jersey Devils: Slafkovsky
    3. Arizona Coyotes: Cooley
    4. Seattle Kraken: Gauthier
    5. Philadelphia Flyers: Nemec
    6. Columbus Blue Jackets: Jiricek
    7. Ottawa Senators: Savoie
    8. Detroit Red Wings: Lekkerimäki
    9. Buffalo Sabres: Geekie
    10. Anaheim Ducks: Kasper
    11. San Jose Sharks: Mintyukov
    12. Columbus Blue Jackets: Kemell
    13. New York Islanders: Korchinski
    14. Winnipeg Jets: Nazar
    15. Vancouver Canucks: Lambert
    16. Buffalo Sabres: Östlund
    17. Nashville Predators: Mateychuk
    18. Dallas Stars: Yurov
    19. Minnesota Wild: Howard
    20. Washington Capitals: Öhgren
    21. Pittsburgh Penguins: Miroshnichenko
    22. Anaheim Ducks: Firkus
    23. St. Louis Blues: Gaucher
    24. Minnesota Wild: Chesley
    25. Toronto Maple Leafs: Pickering
    26. Montreal Canadiens: McGroarty
    27. Arizona Coyotes: Bichsel
    28. Buffalo Sabres: Hävelid
    29. Edmonton Oilers: Odelius
    30. Winnipeg Jets: Del Bel Belluz
    31. Tampa Bay Lightning: Luneau
    32. Arizona Coyotes: Hutson
    `)
}

/*
1. Montreal Canadiens: Wright
2. New Jersey Devils: Slafkovsky
3. Arizona Coyotes: Cooley
4. Seattle Kraken: Gauthier
5. Philadelphia Flyers: Nemec
6. Columbus Blue Jackets: Jiricek
7. Ottawa Senators: Savoie
8. Detroit Red Wings: Lekkerimaki
9. Buffalo Sabres: Geekie
10. Anaheim Ducks: Kasper
11. San Jose Sharks: Mintyukov
12. Columbus Blue Jackets: Kemell
13. New York Islanders: Korchinski
14. Winnipeg Jets: Nazar
15. Vancouver Canucks: Lambert
16. Buffalo Sabres: Ostlund
17. Nashville Predators: Mateychuk
18. Dallas Stars: Yurov
19. Minnesota Wild: Howard
20. Washington Capitals: Ohgren
21. Pittsburgh Penguins: Miroshnichenko
22. Anaheim Ducks: Firkus
23. St. Louis Blues: Gaucher
24. Minnesota Wild: Chesley
25. Toronto Maple Leafs: Pickering
26. Montreal Canadiens: Mcgroarty
27. Arizona Coyotes: Bichsel
28. Buffalo Sabres: Havelid
29. Edmonton Oilers: Odelius
30. Winnipeg Jets: Del Bel Belluz
31. Tampa Bay Lightning: Luneau
32. Arizona Coyotes: Hutson
*/