import { TPlayer } from "../types";

export function createPlayer(position: number, name: string): TPlayer {
    return {
        position,
        name
    }
}

export function getPlayers(): TPlayer[] {
    return [
        createPlayer(4, "Shane Wright"),
        createPlayer(1, "Juraj Slafkovsky"),
        createPlayer(3, "Logan Cooley"),
        createPlayer(2, "Simon Nemec"),
        createPlayer(6, "David Jiricek"),
        createPlayer(5, "Cutter Gauthier"),
        createPlayer(17, "Joakim Kemell"),
        createPlayer(15, "Jonathan Lekkerimäki"),
        createPlayer(9, "Matthew Savoie"),
        createPlayer(8, "Marco Kasper"),
        createPlayer(7, "Kevin Korchinski"),
        createPlayer(10, "Pavel Mintyukov"),
        createPlayer(11, "Conor Geekie"),
        createPlayer(24, "Danila Yurov"),
        createPlayer(13, "Frank Nazar"),
        createPlayer(30, "Brad Lambert"),
        createPlayer(23, "Jimmy Snuggerud"),
        createPlayer(28, "Jiri Kulich"),
        createPlayer(20, "Ivan Miroshnichenko"),
        createPlayer(31, "Isaac Howard"),
        createPlayer(19, "Liam Öhgren"),
        createPlayer(16, "Noah Östlund"),
        createPlayer(21, "Owen Pickering"),
        createPlayer(12, "Denton Mateychuk"),
        createPlayer(0, "Ryan Chesley"),
        createPlayer(18, "Lian Bichsel"),
        createPlayer(14, "Rutger McGroarty"),
        createPlayer(22, "Nathan Gaucher"),
        createPlayer(0, "Luca Del Bel Belluz"),
        createPlayer(26, "Filip Mesar"),
        createPlayer(25, "Sam Rinzel"),
        createPlayer(0, "Tristan Luneau"),
        createPlayer(0, "Owen Beck"),
        createPlayer(0, "Seamus Casey"),
        createPlayer(0, "Calle Odelius"),
        createPlayer(0, "Jagger Firkus"),
        createPlayer(0, "Jack Hughes"),
        createPlayer(0, "Lane Hutson"),
        createPlayer(0, "Mattias Hävelid"),
        createPlayer(29, "Maveric Lamoureux"),
        createPlayer(32, "Reid Schaefer"),
        createPlayer(0, "David Goyette"),
        createPlayer(0, "Logan Morrison"),
        createPlayer(0, "Elias Salomonsson"),
        createPlayer(0, "Gleb Trikozov"),
        createPlayer(0, "Jani Nyman"),
        createPlayer(0, "Alexander Perevalov"),
        createPlayer(27, "Filip Bystedt"),
        createPlayer(0, "Noah Warren"),
        createPlayer(0, "Julian Lutz"),
        createPlayer(0, "Rieger Lorenz"),
        createPlayer(0, "Ty Nelson"),
        createPlayer(0, "Adam Sykora"),
        createPlayer(0, "Vladimir Grudinin"),
        createPlayer(0, "Tyler Brennan"),
    ];
}

