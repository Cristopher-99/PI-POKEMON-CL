const order= (array,type) =>{
    let SortedArray = array;
    if(type=== "asc"){
        SortedArray.sort(function(a,b){
           if(a.name > b.name) return 1;
           if (b.name > a.name) return -1;
           return 0;
       })
    }
    if(type === "desc")
        SortedArray.sort(function(a,b){
            if(a.name > b.name) return -1;
            if (b.name > a.name) return 1;
            return 0;
    })
    if (type==="max") SortedArray.sort((a, b) => b.attack - a.attack);
    if (type==="min") SortedArray.sort((a, b) => a.attack - b.attack);

    return SortedArray;
}

export default order;