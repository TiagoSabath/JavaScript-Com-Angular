class TituloDinamico extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode: "open"})

        //base do component
        const componentRoot = document.createElement("h1")
        componentRoot.textContent = this.getAttribute("Titulo")

        //estilizar o component
        const style = document.createElement("style")
        style.textContent = `
        h1{
            color: red;
        }
        `

        //enviar para o shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);