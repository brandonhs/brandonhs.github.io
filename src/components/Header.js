export default function Header(props) {
    let pages = [];
    for (let page of props.pages) {
        pages.push(<a href={page.path}>{page.name}</a>)
    }
    let socials = [];
    
    return (
        <nav className="container-fluid">
            <ul>
                <li>
                    <a className="contrast" href={props.basePath}>
                        <strong>{props.title}</strong>
                    </a>
                </li>
                {pages}
            </ul>
        </nav>
    )
}
