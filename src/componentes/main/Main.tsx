import { useState } from "react";
import Filme from "../filme/Filme";
import './Main.css'
type filmesType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main(){
    const [texto,setTexto] = useState("Jão")

    const filmes:filmesType[] = [
        {
            id:1,
            titulo:"Barbie",
            sinopse:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade. “Você não reconhece seu corpo, sua aparência ou suas próprias emoções”. No filme, Barbie enfrenta uma crise existencial após se aventurar no “Mundo Real”, questionando quem ela é, experimentando os desafios do perfeccionismo e as armadilhas das expectativas de tentar ser alguém melhor.",
            imagem:"/Barbie.png"
        },
        {
            id:2,
            titulo:"Interestelar",
            sinopse:"As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
            imagem:"/Interestelar.png"
        }
        
    ]

    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto (e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                <p>Buscar Filme</p>

                <input className='barrapesquisa' type='text' onChange={mudaTexto}></input>

                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
                </div>
            </div>
            <main className="content-main">
                <Filme titulo="Barbie" sinopse="Depois de ser expulsa da Barbieland por ser uma boneca 
                de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da 
                verdadeira felicidade. “Você não reconhece seu corpo, sua aparência ou suas próprias 
                emoções”. No filme, Barbie enfrenta uma crise existencial após se aventurar no “Mundo Real”, 
                questionando quem ela é, experimentando os desafios do perfeccionismo e as armadilhas das 
                expectativas de tentar ser alguém melhor."
                imagem="/Barbie.png"/>
                <Filme titulo="Interestelar" sinopse="As reservas naturais da Terra estão chegando ao 
                fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, 
                possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode 
                nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar."
                imagem="/Interestelar.png"/>
                <Filme titulo="Interestelar" sinopse="As reservas naturais da Terra estão chegando ao 
                fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, 
                possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode 
                nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar."
                imagem="/Interestelar.png"/>
                <Filme titulo="Interestelar" sinopse="As reservas naturais da Terra estão chegando ao 
                fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, 
                possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode 
                nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar."
                imagem="/Interestelar.png"/>
                <Filme titulo="Interestelar" sinopse="As reservas naturais da Terra estão chegando ao 
                fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, 
                possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode 
                nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar."
                imagem="/Interestelar.png"/>
            </main>
        </>
    )
}