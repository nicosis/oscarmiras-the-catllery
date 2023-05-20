import React, { useState, useEffect } from "react";
import catImageUrl from "../../img/cat-gallery.jpg";
import "../../styles/home.css";

export const Home = () => {
	const [tokenExists, setTokenExists] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("miTokenJWT");
		if (token) {
			setTokenExists(true);
		} else {
			setTokenExists(false);
		}
	}, []);
	return (
		<div className="text-center mt-5">
			<h1>The CatGallery</h1>
			<p>
				<img className="w-25" src={catImageUrl} />
			</p>
			{tokenExists && (<h3>¡Ejercicio 3 resuelto! Para enviar datos a un endpoint, sobretodo si son sensibles, utilizamos el método POST. Además, las URLs de la API de Flask estan prejiadas con la URL /api. Puesto que ahora disponemos del token JWT, nuestra aplicación React renderiza una información diferente de cuando no teníamos el token. Por ejemplo, en el menú de navegación estamos mostrando unas opciones diferente. Abre navbar.js y tómate un tiempo para entender porque ahora se muestran unos botones diferentes. Luego, pasa al ejercicio 4.</h3>)}
		</div>
	);
};
