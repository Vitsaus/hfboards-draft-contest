import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
    children: ReactNode;
    title: string;
}

export function Layout(props: Props) {
    const {
        title
    } = props;
    return (
        <div>
            <div>
                <Link to="/">Boards</Link>
                {" - "}
                <Link to="/players">Players</Link>
                <br /><br />
            </div>
            <div>
                {title}
                <br /><br />
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}