import './Filme.css'
type FilmeProps={
    titulo:string,
    descricao:string,
    imagem:string
}

function Filme(props:FilmeProps){
    return(
        <div className="filme_content">
            <div className="foto_filme">
                <img src={props.imagem}></img>
            </div>
                <h1>{props.titulo}</h1>
                <p className="descricao">{props.descricao}</p>
        </div>
    )
}
export default Filme