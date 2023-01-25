import { getImageUrl } from "./Gallery";
const date = [
    {
        name: "Maria Skłodowska-Curie",
        id: "szV5sdG",
        pro: "physicist and chemist",
        awards:
            "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
        dis: "polonium (element)"
    },
    {
        name: "Katsuko Saruhashi",
        id: "YfeOqp2",
        pro: "geochemist",
        awards: " (Miyake Prize for geochemistry, Tanaka Prize)",
        dis: "a method for measuring carbon dioxide in seawater"
    }
];
function Profile(props) {
    const date = props.date;

    return (
        <section className="profile">
            <h2>{date.name}</h2>
            <img
                className="avatar"
                src={getImageUrl(date.id)}
                alt={date.name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {date.pro}
                </li>
                <li>
                    <b>Awards: </b>
                    {date.awards}
                </li>
                <li>
                    <b>Discovered: </b>
                    {date.dis}
                </li>
            </ul>
        </section>
    );
}
export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile date={date[0]} />
            <Profile date={date[1]} />
        </div>
    );
}