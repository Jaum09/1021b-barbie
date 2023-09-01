import './Filme.css'
type FilmeProps={
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Filme(props:FilmeProps){
    return(
        <div className="filme_content">
            <img src={props.imagem}></img>
                <h1>{props.titulo}</h1>
                <p className="sinopse">{props.sinopse}</p>
        </div>
    )
}