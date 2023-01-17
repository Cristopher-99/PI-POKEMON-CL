
const Card = (props) =>{
    
    return (
        <div>
            <h1>Nombre:{props.name} </h1>
            <img src={props.img} alt="cover" />
            <h2>Tipos: {props.types?.toString().split(",").join(" / ")}</h2>

        </div>

    )
}
export default Card;