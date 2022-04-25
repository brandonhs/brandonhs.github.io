export default function Home(props) {
    return (
        <div id="about" className="grid">
            <hgroup>
                <h1>{props.name}</h1>
                <h2>{props.bio}</h2>
            </hgroup>
            <div className="profile-circle-container">
                <a href={props.imageLink} target="_blank">
                    <img className="profile-circle" width="300px" src={props.imageSrc} />
                </a>
            </div>
        </div>
    )
}
