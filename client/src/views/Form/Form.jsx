import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState} from "react";
import { createPokemon, getAllTypes, clearAllPokes,clearTypes} from "../../redux/actions";
import validate from "./validate.js";
import "./Form.css";
const Form = (props) =>{

    const dispatch= useDispatch();
    const Alltypes= useSelector((state)=> state.types)

    useEffect(()=>{
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
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }
    const handleSelect= function(e){
        setForm({
            ...form,
            types:[...form.types , e.target.value]
        })
    }
    const handleDelete = function(i){
        setForm({
            ...form,
            types: form.types.filter((el)=> el !== i)
        })
    }

    const handleSubmit = function(e) {
       e.preventDefault();
    //    dispatch(clearCreatePokemon())
       let error = validate(form)
       if(Object.keys(error).length === 0){
        dispatch(createPokemon({
            ...form, name:form.name.toLowerCase()}));
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
                    <h1 className="title">Creando Pokemon</h1>
                    <div>
                        <label className="label_create">Nombre: </label>
                        <input type="text" name="name" id="name_l" onChange={(e)=> handleInputChange(e)} value={form.name} />
                        {validate(form).name ? (<p className="danger">{validate(form).name}</p>) : (<p></p>)}

                    </div>
                    <div>
                        <label className="label_create">Vida: {form.health}</label>
                        <input type="range" min="0" max="200" name="health" id="health_l" onChange={(e)=> handleInputChange(e)} value={form.health} />
                        {validate(form).health ? (<p className="danger">{validate(form).health}</p>) : (<p></p>)}

                    </div>
                    <div>
                        <label className="label_create">Ataque: {form.attack}</label>
                        <input type="range" min="0" max="200" name="attack" id="attack_l" onChange={(e)=> handleInputChange(e)} value={form.attack} />
                        {validate(form).attack ? (<p className="danger">{validate(form).attack}</p>) : (<></>)}

                    </div>
                    <div>
                        <label className="label_create">Defensa: {form.defense}</label>
                        <input type="range" min="0" max="200" name="defense" id="defense_l" onChange={(e)=> handleInputChange(e)} value={form.defense} />
                        {validate(form).defense ? (<p className="danger">{validate(form).defense}</p>) : (<></>)}
                    </div>
                    <div>
                        <label className="label_create">Velocidad: {form.speed}</label>
                        <input type="range" min="0" max="200" name="speed" id="speed_l" onChange={(e)=> handleInputChange(e)} value={form.speed} />
                        {validate(form).speed ? (<p className="danger">{validate(form).speed}</p>) : (<></>)}

                    </div>
                    <div>
                        <label className="label_create">Altura: {form.height}</label>
                        <input type="range" min="0" max="100" name="height" id="height_l" onChange={(e)=> handleInputChange(e)} value={form.height} />
                        {validate(form).height ? (<p className="danger">{validate(form).height}</p>) : (<></>)}

                    </div>           
                    <div>
                        <label className="label_create">Peso: {form.weight}</label>
                        <input type="range" min="0" max="100" name="weight" id="weight_l" onChange={(e)=> handleInputChange(e)} value={form.weight} />
                        {validate(form).weight ? (<p className="danger">{validate(form).weight}</p>) : (<></>)}

                    </div>
                    <h2 className="h_types">Tipos: </h2> 
                    <div className="form_types">
                        <div className="selectMain">
                            <select className="selectTypes" onChange={(e)=> handleSelect(e)} value={form.types}>
                                <option>Selecciona los tipos:</option>
                                    {Alltypes?.map((type)=> (
                                        <option id={type} value={type} >{type}</option>
                                    ))}
                            </select>
                        </div>
                        <div className="panel_types">
                                {form.types.map((t)=>(
                                    <div className="box_type">
                                        <input  className="btn_delete" type="button" value="X" onClick={()=>handleDelete(t)}/>
                                        <p>{t}</p>
                                    </div>
                                ))}
                            </div> 
                        {validate(form).types ? (<p className="danger">{validate(form).types}</p>) : (<></>)}
                            
                    </div>
                    <button type='submit' onClick={(e) => handleSubmit(e)} disabled={Object.keys(validate(form)).length === 0 ? false : true} className="btn-create">
                        <span>Crear pokemon</span>
                    </button>
                </div>

            </form>

        </div>
        
    )
}

export default Form;