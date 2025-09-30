export default function QuienesSomos(){
    return (<>
        <h1>Contacto</h1>
        <p>Por dudas o atención al cliente, rellene el siguiente formulario:</p>
        <div className="form">
            <input style={{marginBottom: 8}} type="text" placeholder="Nombre"/>
            <input style={{marginBottom: 8}} type="text" placeholder="Apellido"/>
            <input style={{marginBottom: 8}} type="email" placeholder="E-mail"/>
            <select style={{marginBottom: 8}} defaultValue="">
                <option value="" disabled>Razón de contacto</option>
                <option value="1">Dudas</option>
                <option value="2">Propuestas</option>
                <option value="3">Atención al cliente</option>
                <option value="4">Compras mayoristas/directo al galpón</option>
                <option value="5">Otros</option>
            </select>
            <textarea style={{marginBottom: 8}} placeholder="Escriba su mensaje acá..."></textarea>
            <button>Enviar</button>
        </div>
    </>);
}