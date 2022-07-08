import { useParams } from "react-router-dom"
import { Board } from "../../Board";
import { getBoard } from "../../data/boards";
import { Layout } from "../../Layout";

export function BoardPage() {

    const {
        user
    } = useParams<{
        user: string | undefined
    }>();

    if (!user) {
        return (<div>User param is required</div>)
    }

    return (
        <Layout title="Board">
            <Board board={getBoard(user)} />
        </Layout>
    )
}