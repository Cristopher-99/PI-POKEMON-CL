
export default function validate(input) {
    let error ={}
    const onlyLetter = new RegExp('^[A-Z]+$', 'i');
    if (!input.name) error.name = "Nombre requerido"
    else if(input.name.length>15) error.name = "Maximo 15 Caracteres"
    else if(!onlyLetter.test(input.name)) error.name = "Solo Letras"
    
    if(input.health<0 || input.health>100) error.health = "Vida entre 0 y 100"

    if(input.attack<0 || input.attack>100) error.attack = "Ataque entre 0 y 100"

    if(input.attack<0 || input.attack>100) error.attack = "Ataque entre 0 y 100"

    if(input.defense<0 || input.defense>100) error.defense = "Defensa entre 0 y 100"

    if(input.speed<0 || input.speed>100) error.speed = "Velocidad entre 0 y 100"

    if(input.height<0 || input.height>100) error.height = "Altura entre 0 y 100"

    if(input.weight<0 || input.weight>100) error.weight = "Peso entre 0 y 100"

    if(!input.types.length) error.types = "selecciona 1 Tipo"

    if(input.types.length>2) error.types = "Maximo 2 tipos"
    return error
  };