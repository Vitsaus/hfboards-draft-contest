import { getPlayers } from "../../data/players";
import { Layout } from "../../Layout";

export function PlayersPage() {
    const players = getPlayers();
    return (
        <Layout title={`Players: ${players.length}`}>
            {players.map((player, i) => {
                return (
                    <div key={i}>
                        {player.position}: {player.name}
                    </div>
                )
            })}
        </Layout>
    )
}