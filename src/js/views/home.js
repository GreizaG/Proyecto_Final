import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="container-fluid">
		<div className="d-flex align-content-center justify-content-center mb-3 mt-3 py-4 jumbo rounded-3">
			<div className="container-fluid align-content-center">
				<h4 className="py-2 ps-5 ms-5 fs-2 fw-bold">Mis Cursos</h4>
			</div>
		</div>
		<div className="continer-fluid d-flex ps-5 ms-5">
			<div>
				<div className="card" style={{ width: '20rem' }}>
					<div className="card-header fw-bold">
						Guitarra Eléctrica
					</div>
					<img src="https://th.bing.com/th/id/OIP.nyAhZ9G7WJaZiFMpeW5GMQHaHV?rs=1&pid=ImgDetMain" className="card-img-top" />
					<div className="card-body">
						<table className="table table-borderless">
							<tr>
								<td className="text-secondary text-5 fw-semibold">Profesor</td>
								<td className="fw-lighter">Roberto Antillón</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
			<div className="mt-auto ms-3">
				<button type="button" className="btn btn-warning badge text-wrap fw-lighter text-dark text-start rounded-pill" style={{ width: '8rem' }}>Solicitar inscribir nuevo curso<i className="ms-2 fa-solid fa-angles-right"></i></button>
			</div>
		</div>
		<div className="d-flex align-content-center justify-content-center mb-3 mt-3 py-4 jumbo rounded-3">
			<div className="container-fluid align-content-center">
				<h4 className="py-2 ps-5 ms-5 fs-2 fw-bold">Mis Profesores</h4>
			</div>
		</div>
		<div className="continer-fluid d-flex ps-5 ms-5">
			<div className="card" style={{ width: '20rem' }}>
				<div className="container card-header fw-bold">
					<div className="row">
						<div className="col">
							<span>Roberto Antillón</span>
						</div>
						<div className="col">
							<button type="button" className="btn btn-small btn-warning badge fw-lighter text-dark text-start rounded-pill">Ver más<i className="ms-2 fa-solid fa-angles-right"></i></button>
						</div>
					</div>
				</div>
				<img src="https://i.imgur.com/mJV2l8W.jpeg" className="card-img-top" />
				<div className="card-body">
					<table className="table table-borderless">
						<tr>
							<td className="text-secondary text-5 fw-semibold">Curso</td>
							<td className="fw-lighter">Guitarra Eléctrica</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div className="d-flex align-content-center justify-content-center mb-3 mt-3 py-4 jumbo rounded-3">
			<div className="container-fluid align-content-center">
				<h4 className="py-2 ps-5 ms-5 fs-2 fw-bold">Mi próximo pago</h4>
			</div>
		</div>
		<div className="continer-fluid d-flex ps-5 ms-5">
			<div className="card" style={{ width: '20rem' }}>
				<div className="container d-flex card-body">
					<table className="table table-borderless">
						<tr className="mb-2">
							<td className="text-secondary text-5 fw-semibold">Fecha pago</td>
							<td className="fw-lighter">30 Junio 2024</td>
						</tr>
						<tr className="mb-2">
							<td className="text-secondary text-5 fw-semibold">Monto a pagar</td>
							<td className="fw-lighter">₡ 75.000</td>
						</tr>
						<tr>
							<td className="text-secondary text-5 fw-semibold">Fecha vencimiento</td>
							<td className="fw-lighter">05 Julio 2024</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
);
