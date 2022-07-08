import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet, Picker } from "../boards";

export function createBoardForYotes4Cup(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Yotes4Cup", `
    1. Montreal Canadiens: Wright
    2. New Jersey Devils: Slafkovsky
    3. Arizona Coyotes: Cooley
    4. Seattle Kraken: Nemec
    5. Philadelphia Flyers: Jiricek
    7. Ottawa Senators: Mcgroarty
    6. Columbus Blue Jackets: Kasper
    8. Detroit Red Wings: Lekkerimäki
    9. Buffalo Sabres: Gauthier
    10. Anaheim Ducks: Kemell
    11. San Jose Sharks: Mintyukov
    12. Columbus Blue Jackets: Savoie
    13. New York Islanders: Lambert
    14. Winnipeg Jets: Korchinski
    15. Vancouver Canucks: Geekie
    16. Buffalo Sabres: Howard
    17. Nashville Predators: Mateychuk
    18. Dallas Stars: Yurov
    19. Minnesota Wild: Nazar
    20. Washington Capitals: Gaucher
    21. Pittsburgh Penguins: Chesley
    22. Anaheim Ducks: Firkus
    23. St. Louis Blues: Öhgren
    24. Minnesota Wild: Miroshnichenko
    25. Toronto Maple Leafs: Pickering
    26. Montreal Canadiens: Östlund
    27. Arizona Coyotes: Bichsel
    28. Buffalo Sabres: Hävelid
    29. Edmonton Oilers: Odelius
    30. Winnipeg Jets: Del Bel Belluz
    31. Tampa Bay Lightning: Goyette
    32. Arizona Coyotes: Schaefer
    `)
}

/*
1. Montreal Canadiens: Wright
2. New Jersey Devils: Slafkovsky
3. Arizona Coyotes: Cooley
4. Seattle Kraken: Nemec
5. Philadelphia Flyers: Jiricek
7. Ottawa Senators: Mcgroarty
6. Columbus Blue Jackets: Kasper
8. Detroit Red Wings: Lekkerimaki
9. Buffalo Sabres: Gauthier
10. Anaheim Ducks: Kemell
11. San Jose Sharks: Mintyukov
12. Columbus Blue Jackets: Savoie
13. New York Islanders: Lambert
14. Winnipeg Jets: Korchinski
15. Vancouver Canucks: Geekie
16. Buffalo Sabres: Howard
17. Nashville Predators: Mateychuk
18. Dallas Stars: Yurov
19. Minnesota Wild: Nazar
20. Washington Capitals: Gaucher
21. Pittsburgh Penguins: Chesley
22. Anaheim Ducks: Firkus
23. St. Louis Blues: Ohgren
24. Minnesota Wild: Miroshnichenko
25. Toronto Maple Leafs: Pickering
26. Montreal Canadiens: Ostlund
27. Arizona Coyotes: Bichsel
28. Buffalo Sabres: Havelid
29. Edmonton Oilers: Odelius
30. Winnipeg Jets: Del Bel Belluz
31. Tampa Bay Lightning: Goyette
32. Arizona Coyotes: Schaefer
*/