
export default function validate(input) {
    let error ={}
    const onlyLetter = new RegExp('^[A-Z]+$', 'i');
    if (!input.name) error.name = "Nombre requerido"
    else if(input.name.length>15) error.name = "Maximo 15 Caracteres"
    else if(!onlyLetter.test(input.name)) error.name = "Solo Letras"
    
    if(input.health<1 || input.health>150) error.health = "Vida entre 1 y 150"

    if(input.attack<1 || input.attack>150) error.attack = "Ataque entre 1 y 150"

    if(input.defense<1 || input.defense>150) error.defense = "Defensa entre 1 y 150"

    if(input.speed<1 || input.speed>150) error.speed = "Velocidad entre 1 y 150"

    if(input.height<1 || input.height>100) error.height = "Altura entre 1 y 100"

    if(input.weight<1 || input.weight>100) error.weight = "Peso entre 1 y 100"

    if(!input.types.length) error.types = "selecciona almenos 1 Tipo"

    if(input.types.length>2) error.types = "Maximo 2 tipos"
    return error
  };