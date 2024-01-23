import skills from "./skills.js";

const getHabilidad = document.getElementById("my-skills")

let htmlARenderizar = ""

skills.habilidades.forEach((habilidad)=>{
    htmlARenderizar += `
            <div class="row-skills__div" id="my-skills">
                <ul class="lista-skills">
                    <li class="items-lista-skills">
                        <div class="img-skills">
                            <img src="${habilidad.imagen}" alt="img skills">
                        </div> 
                            <p>${habilidad.nombre}</p>
                    </li>
                </ul>
            </div>
            `
})

getHabilidad.innerHTML = htmlARenderizar