import { MOVIE_ADD, MOVIE_DELETE, MOVIE_EDIT } from "../types";

const intialState={
    movies:[
        {
            id: Math.random(),
            Title: "Spirit: Stallion of the Cimarron",
            Url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyOTUzNDA1N15BMl5BanBnXkFtZTYwNjgwMDM3._V1_SX300.jpg",
            description: "A wild stallion is captured by humans and slowly loses the will to resist training. Yet throughout his struggles for freedom, the stallion refuses to let go of the hope of one day returning home to his herd.",
            Rating: 3,
            year: "2002",
            trailer: "https://www.youtube.com/embed/-vGpe_8XiNk"
          },
          {
            id: Math.random(),
            Title: "The Addams Family 2",
            Url: "https://m.media-amazon.com/images/M/MV5BNzQ5NzJjMDgtNzhjMC00NTQ2LTgzOTUtZThiMWMwYmYwMGYxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
            description: "The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters. Sequel to the 2019 animated film, 'The Addams Family'.",
            Rating: 3,
            year: "2021",
            trailer: "https://www.youtube.com/embed/Kd82bSBDE84"
          },
          {
            id: Math.random(),
            Title: "Harry Potter and the Half-Blood Prince",
            Url: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
            description: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as the property of the Half-Blood Prince and begins to learn more about Lord Voldemort's dark past.",
            Rating: 3,
            year: " 2009",
            trailer: "https://www.youtube.com/embed/sg81Lts5kYY"
          },
          {
            id: Math.random(),
            Title: "1917",
            Url: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg",
            description: "Two young British soldiers during the First World War are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men, and one of the soldiers' brothers, from walking straight into a deadly trap.",
            Rating: 5,
            year: " 2020",
            trailer: "https://www.youtube.com/embed/AzWSHM9rYCo"
          },
          {
            id: Math.random(),
            Title: "Miss Bala",
            Url: "https://m.media-amazon.com/images/M/MV5BMTcxNzY3Mzk5OF5BMl5BanBnXkFtZTgwNjQwODU1NjM@._V1_SX300.jpg",
            description: "Gloria finds a power she never knew she had when she is drawn into a dangerous world of cross-border crime.",
            Rating: 2,
            year: " 2019",
            trailer: "https://www.youtube.com/embed/e-kPf-n4Mto"
          },
          {
            id: Math.random(),
            Title: "The Boss Baby: Family Business",
            Url: "https://m.media-amazon.com/images/M/MV5BYWY1N2I5MGUtZTBmNS00MWZmLWEyNzAtZjliNzk0ZDVkYzI1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
            description: "The Templeton brothers have become adults and drifted away from each other,",
            Rating: 3,
            year: " 2021",
            trailer: "https://www.youtube.com/embed/ii2HvtsrUbU" 
          },
          {
            id:Math.random(),
            Title: "Black Sails",
            Url:
              "https://m.media-amazon.com/images/M/MV5BZmExNzU1M2YtNGUzOC00MmM0LWEwYzYtZWJiYjYxNDcwY2E0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
              Rating: 3.9,
              year: " 2021",
            description:
              "Follows Captain Flint and his pirates twenty years prior to Robert Louis Stevenson's classic novel Treasure Island",
            trailer: "https://www.youtube.com/embed/rT2Y5jjBNpQ"
          },
          {
            id:Math.random(),
            Title: "Black List",
            Url:
              "https://i2.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2018/11/203AD589-D9BC-4842-BE7A-3FAC786F49EA.jpeg?fit=750%2C947&ssl=1",
              Rating: 3.9,
              year: " 2019",
            description:
              "A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.",
            trailer: "https://www.youtube.com/embed/XihA6GWIBdM"
          },
          {
            id:Math.random(),
            Title: "The Walking deads",
            Url:
              "https://fr.web.img2.acsta.net/c_216_288/medias/nmedia/18/78/35/82/20303823.jpg",
              Rating: 4.1,
              year: " 2021",
            description:
              "Series overview. The Walking Dead takes place after the onset of a worldwide zombie apocalypse. The zombies, colloquially referred to as walkers, shamble towards living humans and other creatures to eat them; they are attracted to noise, such as gunshots, and to different scents, e.g. humans",
            trailer: "https://www.youtube.com/embed/sfAc2U20uyg"
          },
          {
            id:Math.random(),
            Title: "Vis A Vis",
            Url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1DBIEAneCfzyHa1-xYPa2oMCulo6mken_9Q&usqp=CAU",
              Rating: 3.8,
              year: " 2020",
            description:
              "Locked Up, originally titled in Spanish as Vis A Vis.",
             trailer: "https://www.youtube.com/embed/ceNKwOvSVm8"
          }
    ]
}
const ReducerMovie = (state=intialState,{type,payload})=>{
switch (type) {
    case MOVIE_ADD:
        return {...state, movies: [...state.movies,payload]}
        case MOVIE_DELETE:
            return {...state, movies: state.movies.filter(movie => movie.id !== payload)}
            case MOVIE_EDIT:
                return {...state, movies: state.movies.map(elt => elt.id === payload.id ? {...elt,...payload} : elt)}

    default:
        return state;
}
}
export default ReducerMovie