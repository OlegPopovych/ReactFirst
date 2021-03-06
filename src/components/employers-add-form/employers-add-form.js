import React from 'react';
import './employers-add-form.css';

const EmployersAddForm = () => {
	return (
		<div className="app-add-form">
			<h3>Добавьте нового сотрудника</h3>
			<form
				className="add-form d-flex">
				<input type="text"
					className="form-control new-post-label"
					placeholder="Ім'я співробітника?" />
				<input type="number"
					className="form-control new-post-label"
					placeholder="ЗП в $?" />

				<button type="submit"
					className="btn btn-outline-light">Додати</button>
			</form>
		</div>
	)
}

export default EmployersAddForm;