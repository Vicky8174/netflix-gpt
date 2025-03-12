
import { API_OPTION, GEMNI_KEY } from "./constant";
import { addGptMovies, addGptName } from "./gptSlice";



const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(GEMNI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const searchMovieTmdb = async(movie)=>{

    const data =  await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTION);
    

    const json =  await data.json();


    return json.results;

      

}





const gemni  = async(searchQuery,dispatch)=>{
          

  const prompt = searchQuery;

  const result = await model.generateContent([prompt]);
  
  const gemniMovie  =  result.response.text().split(',')
  console.log(gemniMovie)

  const tmdbResults  = gemniMovie.map((movie)=>searchMovieTmdb(movie))


  const promiseArayy =  await  Promise.all(tmdbResults);

  dispatch(addGptMovies(promiseArayy))
  dispatch(addGptName(gemniMovie))

  console.log(promiseArayy);

      


}


export default gemni ;


