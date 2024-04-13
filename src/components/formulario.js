import React from "react";

const Formulario = () => {
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <h2>Ranking de vinos</h2>
                    <form>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="dateField" className="form-label">Desde fecha</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="fechaDesde"
                                    name="date"
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="dateField" className="form-label">Hasta fecha</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="fechaHasta"
                                    name="date"
                                />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="dateField" className="form-label">Tipo de reseña</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Seleccione</option>
                                    <option value={1}>Normal</option>
                                    <option value={2}>Sommelier</option>
                                    <option value={3}>Amigos</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary mt-1">Consultar</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Formulario;
