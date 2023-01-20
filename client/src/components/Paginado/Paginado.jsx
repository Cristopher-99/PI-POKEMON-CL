import "./Paginado.css"
const Paginado =(props)=>{
    const numeroPagina=[]

    for (let i = 0; i < Math.ceil(props.AllPokes/props.cardsPerPage); i++) {
        numeroPagina.push(i+1)
        
    }
    return(
        <div className="PaginadoContainer">
            <ul className="paginas">
                {numeroPagina?.map((page)=>{
                    return (
                        <button key={page} onClick={()=>{props.paginado(page)}} className={page == props.currentPage ? "active" : ""}>{page}</button>
                    )
                })}
            </ul>
        </div>
    )

}

export default Paginado;