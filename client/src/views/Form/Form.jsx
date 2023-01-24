import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState} from "react";
import { createPokemon, getAllTypes ,clearCreatePokemon, clearAllPokes,clearTypes} from "../../redux/actions";
import validate from "../../functions/validate";
import "./Form.css";
const Form = (props) =>{

    const dispatch= useDispatch();
    const Alltypes= useSelector((state)=> state.types)
    const pokesDb= useSelector((state)=> state.pokeCreated)

    useEffect(()=>{
        // if(pokesDb.name)alert(`Pokemon${pokesDb.name} creado`)
        // if(pokesDb.message)alert(pokesDb.message)
        dispatch(clearCreatePokemon())
        dispatch(getAllTypes())
        return()=>{
            dispatch(clearAllPokes())
            dispatch(clearTypes())

        }
        
    },[ dispatch])

    /// estados locales
    const [form, setForm] = useState({
        name:"",
        health:0 ,
        attack:0 ,
        defense:0 ,
        speed:0 ,
        height:0 ,
        weight:0 ,
        types: [],
    })
    /// handler btn
    const handleInputChange = function(e) {
        if(e.target.name === "types"){
            if(e.target.checked){
                setForm({
                    ...form,
                    [e.target.name] : [...form[e.target.name],e.target.value]
                })
            } else {
                setForm({
                    ...form,
                    [e.target.name] : form[e.target.name].filter(element=>element!==e.target.value)
                })
            }
        } else {
            setForm({
            ...form,
            [e.target.name]: e.target.value
       })}
    }

    const handleSubmit = function(e) {
       e.preventDefault();
       dispatch(clearCreatePokemon())
       let error = validate(form)
       if(Object.keys(error).length === 0){
        //setRenderDetails(true)
        dispatch(createPokemon({
            ...form,
            name:form.name.toLowerCase()}));
            alert(`Pokemon ${form.name} creado`)
        setForm({
            name: "",
            health:0,
            attack:0,
            defense:0,
            speed:0,
            height:0,
            weight:0,
            types:[],
        })
       } else {
        alert('Completa los campos requeridos')
       } 
       
    }
    ///

    return (
        <div className="FormContainer">
            <div>
                <NavBar/>
            </div>

            <form className="form_create" onSubmit={(e)=> handleSubmit(e)}>
                
                <div>
                    <div>
                        <label className="label_create">Nombre: </label>
                        <input type="text" name="name" id="name_l" onChange={(e)=> handleInputChange(e)} value={form.name} />
                        {validate(form).name ? (<p className="danger">{validate(form).name}</p>) : (<p></p>)}

                    </div>
                    <div>
                        <label className="label_create">Vida: </label>
                        <input type="range" min="0" max="100" name="health" id="health_l" onChange={(e)=> handleInputChange(e)} value={form.health} />
                        <p>{form.health}</p>
                        {validate(form).health ? (<p className="danger">{validate(form).health}</p>) : (<p></p>)}

                    </div>
                    <div>
                        <label className="label_create">Ataque: </label>
                        <input type="range" min="0" max="100" name="attack" id="attack_l" onChange={(e)=> handleInputChange(e)} value={form.attack} />
                        <p>{form.attack}</p>
                        {validate(form).attack ? (<p className="danger">{validate(form).attack}</p>) : (<></>)}

                    </div>
                    <div>
                        <label className="label_create">Defensa: </label>
                        <input type="range" min="0" max="100" name="defense" id="defense_l" onChange={(e)=> handleInputChange(e)} value={form.defense} />
                        <p>{form.defense}</p>
                        {validate(form).defense ? (<p className="danger">{validate(form).defense}</p>) : (<></>)}
                    </div>
                    <div>
                        <label className="label_create">Velocidad: </label>
                        <input type="range" min="0" max="100" name="speed" id="speed_l" onChange={(e)=> handleInputChange(e)} value={form.speed} />
                        <p>{form.speed}</p>
                        {validate(form).speed ? (<p className="danger">{validate(form).speed}</p>) : (<></>)}

                    </div>
                    <div>
                        <label className="label_create">Altura: </label>
                        <input type="range" min="0" max="100" name="height" id="height_l" onChange={(e)=> handleInputChange(e)} value={form.height} />
                        <p>{form.height}</p> 
                    </div>           
                    <div>
                        <label className="label_create">Peso: </label>
                        <input type="range" min="0" max="100" name="weight" id="weight_l" onChange={(e)=> handleInputChange(e)} value={form.weight} />
                        <p>{form.weight}</p>
                        {validate(form).height ? (<p className="danger">{validate(form).height}</p>) : (<></>)}

                    </div>
                    <h2 className="types">Tipos: </h2>
                    <div className="form_types">
                        {Alltypes?.map((type)=> (
                           <div className="infoType">
                                <input type="checkbox" name="types" id={type} value={type} onChange={(e)=> handleInputChange(e)} />
                                <label htmlFor={type}> {type}</label>
                            </div> 
                        ))}
                        {validate(form).types ? (<p className="danger">{validate(form).types}</p>) : (<></>)}

                    </div>
                    <button type='submit' onClick={(e) => handleSubmit(e)} className="btn-create">
                        <span>Crear pokemon</span>
                    </button>
                </div>

            </form>

        </div>
        
    )
}

export default Form;