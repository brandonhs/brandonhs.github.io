import About from "../components/About";
import aboutData from '../data/about.json';

export default function Home(props) {
    return (
        <>
            <About name={aboutData.name} bio={aboutData.bio} imageLink={aboutData.link} />
        </>
    )
}
