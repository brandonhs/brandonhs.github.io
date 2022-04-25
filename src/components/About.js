import profileSrc from "../images/profile-circle.png"

export default function About(props) {
    return (
        <div id="about" className="grid">
            <hgroup>
                <h1>{props.name}</h1>
                <h2>{props.bio}</h2>
            </hgroup>
            <div className="profile-circle-container">
                <a href={props.imageLink} rel="noreferrer" target="_blank">
                    <img alt="profile" className="profile-circle" width="300px" src={profileSrc} />
                </a>
            </div>
        </div>
    )
}
