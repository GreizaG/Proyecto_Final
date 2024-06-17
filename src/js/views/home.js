import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="container-fluid">
		<div className="mb-3 mt-3 bg-light rounded-3">
			<div className="container-fluid">
				<h4 className="py-2 fw-bold">Mis Cursos</h4>
			</div>
		</div>
		<div className="continer-fluid d-flex">
			<div>
				<div className="card" style={{ width: '16rem' }}>
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
				<button type="button" className="btn btn-warning badge text-wrap fw-lighter text-dark text-start" style={{ width: '8rem' }}>Solicitar inscribir nuevo curso<i className="ms-2 fa-solid fa-angles-right"></i></button>
			</div>
		</div>
		<div className="mb-3 mt-3 bg-light rounded-3">
			<div className="container-fluid">
				<h4 className="py-2 fw-bold">Mis Profesores</h4>
			</div>
		</div>
		<div>
			<div className="card" style={{ width: '16rem' }}>
				<div className="container card-header fw-bold">
					<div className="row">
						<div className="col">
							<span>Roberto Antillón</span>
						</div>
						<div className="col">
							<button type="button" className="btn btn-small btn-warning badge fw-lighter text-dark text-start">Ver más<i className="ms-2 fa-solid fa-angles-right"></i></button>
						</div>
					</div>
				</div>
				<img src="https://i.pinimg.com/236x/31/9b/08/319b08d0fe5624ca5078ac762fb78634.jpg?nii=t" className="card-img-top" />
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
	</div>
);
