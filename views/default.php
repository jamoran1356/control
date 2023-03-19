<div class="container contenedor-ppal">
<div class="row">
	<div class="col-md-12">
		<h1>Sistema de control de Válvulas </h1>

		<div id="grafico" class="grafico"></div>

		<table class="table table-striped table-hover">
			<thead class="table-dark">
			<th># Control</th>	
			<th>Fecha</th>
			<th>Hora</th>
			<th>Pozo</th>
			<th>PSI</th>
			</thead>
			<tbody id="tblResultados">
			</tbody>	
		</table>	
	</div>	

</div>	
<div class="row cont-form">
	<div class="col-md-12">
		<form class="form">
			<div class="input-container">
				<input placeholder="Fecha" type="text" id="fecha">
			</div>
			<div class="input-container">
				<input placeholder="Hora" type="time" min="00:00" max="23:59" id="hora">
			</div>
			<div class="input-container">
				<input placeholder="Pozo" type="text" id="pozo">
			</div>
			<div class="input-container">
				<input placeholder="Valor PSI" type="text" id="psi">
			</div>
			<button class="submit" type="submit" id="btnreporte">
			Continuar
			</button>
		</form>
	</div>
</div>	
		
</div>

