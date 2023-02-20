import CardCharacter from "../../components/CardCharacter/CarCharacter"
import style from "./Home.module.css";

const Home = () => {
    const characters = [
        {
            "id": 1,
            "name": "Rick Sanchez",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "location": "Citadel of Ricks",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "created": false
        },
        {
            "id": 2,
            "name": "Morty Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "location": "Citadel of Ricks",
            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            "created": false
        },
        {
            "id": 3,
            "name": "Summer Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Female",
            "location": "Earth (Replacement Dimension)",
            "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            "created": false
        },
        {
            "id": 4,
            "name": "Beth Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Female",
            "location": "Earth (Replacement Dimension)",
            "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            "created": false
        },
        {
            "id": 5,
            "name": "Jerry Smith",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "location": "Earth (Replacement Dimension)",
            "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            "created": false
        },
        {
            "id": 6,
            "name": "Abadango Cluster Princess",
            "status": "Alive",
            "species": "Alien",
            "gender": "Female",
            "location": "Abadango",
            "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
            "created": false
        },
        {
            "id": 7,
            "name": "Abradolf Lincler",
            "status": "unknown",
            "species": "Human",
            "gender": "Male",
            "location": "Testicle Monster Dimension",
            "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
            "created": false
        },
        {
            "id": 8,
            "name": "Adjudicator Rick",
            "status": "Dead",
            "species": "Human",
            "gender": "Male",
            "location": "Citadel of Ricks",
            "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            "created": false
        },
        {
            "id": 9,
            "name": "Agency Director",
            "status": "Dead",
            "species": "Human",
            "gender": "Male",
            "location": "Earth (Replacement Dimension)",
            "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
            "created": false
        },
        {
            "id": 10,
            "name": "Alan Rails",
            "status": "Dead",
            "species": "Human",
            "gender": "Male",
            "location": "Worldender's lair",
            "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
            "created": false
        },
        {
            "id": 11,
            "name": "Albert Einstein",
            "status": "Dead",
            "species": "Human",
            "gender": "Male",
            "location": "Earth (Replacement Dimension)",
            "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
            "created": false
        },
        {
            "id": 12,
            "name": "Alexander",
            "status": "Dead",
            "species": "Human",
            "gender": "Male",
            "location": "Anatomy Park",
            "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
            "created": false
        },
        {
            "id": 13,
            "name": "Alien Googah",
            "status": "unknown",
            "species": "Alien",
            "gender": "unknown",
            "location": "Earth (Replacement Dimension)",
            "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
            "created": false
        },
        {
            "id": 14,
            "name": "Alien Morty",
            "status": "unknown",
            "species": "Alien",
            "gender": "Male",
            "location": "Citadel of Ricks",
            "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
            "created": false
        },
        {
            "id": 15,
            "name": "Alien Rick",
            "status": "unknown",
            "species": "Alien",
            "gender": "Male",
            "location": "Citadel of Ricks",
            "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
            "created": false
        },
        {
            "id": 16,
            "name": "Amish Cyborg",
            "status": "Dead",
            "species": "Alien",
            "gender": "Male",
            "location": "Earth (Replacement Dimension)",
            "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
            "created": false
        },
        {
            "id": 17,
            "name": "Annie",
            "status": "Alive",
            "species": "Human",
            "gender": "Female",
            "location": "Anatomy Park",
            "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
            "created": false
        },
        {
            "id": 18,
            "name": "Antenna Morty",
            "status": "Alive",
            "species": "Human",
            "gender": "Male",
            "location": "Citadel of Ricks",
            "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
            "created": false
        },
        {
            "id": 19,
            "name": "Antenna Rick",
            "status": "unknown",
            "species": "Human",
            "gender": "Male",
            "location": "unknown",
            "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
            "created": false
        },
        {
            "id": 20,
            "name": "Ants in my Eyes Johnson",
            "status": "unknown",
            "species": "Human",
            "gender": "Male",
            "location": "Interdimensional Cable",
            "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
            "created": false
        }
    ]
    return (
       <div className={style.bg}>
        <div className={style.card}>
            <div className={style.card1}>
        {
        characters.map((element)=>{
            return(
                <div key={element.id}>
                    <CardCharacter
                    id={element.id}
                    name={element.name}
                    img={element.image}
                    gender={element.gender}
                    location={element.location}
                    />
                </div>
            )})}
            </div>
        </div>
       </div>
    )
}

export default Home;