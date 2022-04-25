export default function Header(props) {
    return (
        <nav className="container-fluid">
            <ul>
                <li>
                    <a className="contrast" href={props.basePath}>
                        <strong>{props.title}</strong>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
