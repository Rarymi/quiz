import {useEffect, useState} from 'react'

import './App.css'
import axios from "./utils/axios.ts";
import {Category} from "./modules/Home/Category/types/Category.ts";


function App() {
    const [categories, setCategories] = useState<Category[]>([]);

    // const teste = axios.get('api.php', {
    //     params: {
    //         amount: 10
    //     }
    // }).then(function (response) {
    //     console.log({oi:  response.data})
    // })


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('api_category.php');
                setCategories(response.data.trivia_categories);
                console.log({dada: response.data})
            } catch (error) {
                console.error('Erro ao obter categorias:', error);
            }
        };

        fetchCategories();
    }, []);


    console.log({categories})
    return (

        <div
            className={`h-screen w-screen bg-gradient-to-l from-indigo-950 to-fuchsia-900 flex justify-center flex-col items-center`}>
            <h1> Escolha seu tema</h1>

            <div className={`grid grid-cols-6 gap-2  w-2/3  h-2/3 p-5 `}>
                {categories?.map(categorie => <div
                    className={` cursor-pointer h-2/3 rounded-md p-2  bg-white/40 font-semibold flex justify-center items-center hover:backdrop-brightness-[1.75] `}>
                    <p className={`text-sm text-center `}>{categorie.name}</p>
                </div>)}

            </div>

        </div>

    )
}

export default App
