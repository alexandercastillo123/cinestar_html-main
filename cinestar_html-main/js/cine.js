const getCine = async () => {
    const id = new URLSearchParams(window.location.search).get('id')
	console.log("id:", id)
    const data = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}`)
	console.log
    const dataExtra = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/tarifas`)
	console.log
	const dataExtra2 = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/peliculas`)
	console.log
	if (data.status == 200 && dataExtra.status == 200 && dataExtra2.status == 200) {
        const cine = (await data.json()).data
		const cineExtra = (await dataExtra.json()).data
		const cineExtra2 = (await dataExtra2.json()).data
        let html=`
                <h2>${cine.RazonSocial}</h2>
				<div class="cine-info">
					<div class="cine-info datos">
						<p>${cine.Direccion}</p>
						<p>Teléfono: ${cine.Telefonos}</p>
						<br/>
						<div class="tabla">
							<div class="fila">
								<div class="celda-titulo">${cineExtra.DiasSemanas}</div>
								<div class="celda">${cine.Precio}</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">${cineExtra.DiasSemana}</div>
								<div class="celda">${cine.Precio}</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">${cineExtra.DiasSemana}</div>
								<div class="celda">${cine.Precio}</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">${cineExtra.DiasSemana}</div>
								<div class="celda">${cine.Precio}</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">${cineExtra.DiasSemana}</div>
								<div class="celda">${cineExtra.Precio}</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">${cineExtra.DiasSemana}</div>
								<div class="celda">${cineExtra.Precio}</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">${cineExtra.DiasSemana}</div>
								<div class="celda">${cineExtra.Precio}</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">${cineExtra.DiasSemana}</div>
								<div class="celda">${cineExtra.Precio}</div>
							</div>
						</div>
						<div class="aviso">
							<p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
						</div>
					</div>
					<img src="img/cine/1.2.jpg"/>
					<br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
					<div class="cine-info peliculas">
						<div class="tabla">
							<div class="fila">
								<div class="celda-cabecera">Películas</div>
								<div class="celda-cabecera">Horarios</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">${cineExtra2.Titulo}</div>
								<div class="celda">${cineExtra2.Horarios}</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">${cineExtra2.Titulo}</div>
								<div class="celda">${cineExtra2.Horarios}</div>
							</div>
							<div class="fila impar">
								<div class="celda-titulo">${cineExtra2.Titulo}</div>
								<div class="celda">${cineExtra2.Horarios}</div>
							</div>
							<div class="fila">
								<div class="celda-titulo">${cineExtra2.Titulo}</div>
								<div class="celda">${cineExtra2.Horarios}</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<img style="float:left;" src="img/cine/1.3.jpg" alt="Imagen del cine"/>
					<span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
						Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
						<br/><br/>
						Visitános y diviértete con nosotros. 
						<br/><br/>
						<b>CINESTAR</b>, siempre pensando en tí. 
					</span>		
				</div>        
        `
        document.getElementById('contenido-interno').innerHTML = html
    }
	

}
getCine()