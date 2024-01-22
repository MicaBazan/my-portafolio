import skills from "./skills.js";

const getHabilidad = document.getElementById("my-skills")

let htmlARenderizar = ""

skills.habilidades.forEach((habilidad)=>{
    htmlARenderizar += `
            <div class="row-skills__div" id="my-skills">
                <ul>
                    <li>
                        <img src="${habilidad.imagen}" alt="img skills">
                        <p>${habilidad.nombre}</p>
                    </li>
                </ul>
            </div>
            `
})

getHabilidad.innerHTML = htmlARenderizar