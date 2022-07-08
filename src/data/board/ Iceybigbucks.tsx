import { TBoard, TPlayer } from "../../types";
import { getBoardFromSnippet } from "../boards";

export function createBoardForIceybigbucks(players: TPlayer[]): TBoard {
    return getBoardFromSnippet(players, "Iceybigbucks", `
    1. Montreal Canadiens: Wright
    2. New Jersey Devils: Slafkovsky
    3. Arizona Coyotes: Cooley
    4. Seattle Kraken: Jiricek
    5. Philadelphia Flyers: Kemell
    7. Ottawa Senators: Nemec
    6. Columbus Blue Jackets: Lekkerimäki
    8. Detroit Red Wings: Gauthier
    9. Buffalo Sabres: Savoie
    10. Anaheim Ducks: Korchinski
    11. San Jose Sharks: Kasper
    12. Columbus Blue Jackets: Nazar
    13. New York Islanders: Geekie
    14. Winnipeg Jets: Mintyukov
    15. Vancouver Canucks: Snuggerud
    16. Buffalo Sabres: Howard
    17. Nashville Predators: Lambert
    18. Dallas Stars: Pickering
    19. Minnesota Wild: Öhgren
    20. Washington Capitals: Kulich
    21. Pittsburgh Penguins: Mateychuk
    22. Anaheim Ducks: Bichsel
    23. St. Louis Blues: McGroarty
    24. Minnesota Wild: Östlund
    25. Toronto Maple Leafs: Belluz
    26. Montreal Canadiens: Lamoureux
    27. Arizona Coyotes: Firkus
    28. Buffalo Sabres: Hävelid
    29. Edmonton Oilers: Beck
    30. Winnipeg Jets: Mesar
    31. Tampa Bay Lightning: Goyette
    32. Arizona Coyotes: Schaefer
    `)
}

/*
1. Montreal Canadiens: Wright
2. New Jersey Devils: Slafkovsky
3. Arizona Coyotes: Cooley
4. Seattle Kraken: Jiricek
5. Philadelphia Flyers: Kemell
7. Ottawa Senators: Nemc
6. Columbus Blue Jackets: Lekkerimaki
8. Detroit Red Wings: Gauthier
9. Buffalo Sabres: Savoie
10. Anaheim Ducks: Korchiniski
11. San Jose Sharks: Kasper
12. Columbus Blue Jackets: Nazar the third lol
13. New York Islanders: Geekie
14. Winnipeg Jets: Mintyukov
15. Vancouver Canucks: Snuggerud
16. Buffalo Sabres: Howard
17. Nashville Predators: Lambert
18. Dallas Stars: Pickering
19. Minnesota Wild: Ogren
20. Washington Capitals: Kulich
21. Pittsburgh Penguins: Mateychuck
22. Anaheim Ducks: Bichsel
23. St. Louis Blues: Mcgroarty
24. Minnesota Wild: Ostlund
25. Toronto Maple Leafs: Belluz
26. Montreal Canadiens: Lamoureaux
27. Arizona Coyotes: Firkus
28. Buffalo Sabres: Havelid
29. Edmonton Oilers: Beck
30. Winnipeg Jets:Mesar
31. Tampa Bay Lightning: Goyette
32. Arizona Coyotes: Schaefer
*/