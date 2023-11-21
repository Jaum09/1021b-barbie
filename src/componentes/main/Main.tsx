import { useEffect, useState } from "react";
import Filme from "../filme/Filme";
import axios from 'axios'
import './Main.css'
type FilmesType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

const URL_API = "http://localhost:3000/filmes";

export default function Main() {
    const [texto,setTexto] = useState("")
    const [filmes,setFilmes] = useState<FilmesType[]>([])

    useEffect(() => {
        const buscarFilmes = async()=> {
            try {
                const resposta = await axios.get<FilmesType[]>(URL_API)
                setFilmes(resposta.data)
                } catch (error) {
                    console.log('Erro ao buscar filmes')
                }
            };
            buscarFilmes();
        }, []);
    


    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        //console.log(e.target.value)
        setTexto (e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                <p>Buscar Filme</p>
                <input type='text' 
                        className='barrapesquisa' 
                        onChange={mudaTexto}
                    />
                {texto && <p>Resultados Para: {texto}</p>}
            </div>

            <main className="content-main">
                {filmes.filter((filme)=>filme.titulo.toLowerCase().includes(texto.toLowerCase())).map((filme:FilmesType)=>
                    <Filme  key={filme.id}
                            titulo={filme.titulo} 
                            descricao={filme.descricao} 
                            imagem={filme.imagem}
                        />
                    )
                }
            </main>
        </>
    )
}