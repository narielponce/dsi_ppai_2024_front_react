import React from "react";

const Listado = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Calificación sommelier</th>
                <th scope="col">Calificación general</th>
                <th scope="col">Precio sugerido</th>
                <th scope="col">Bodega</th>
                <th scope="col">Varietal</th>
                <th scope="col">Región</th>
                <th scope="col">País</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Otro loco más</td>
                <td>4.2</td>
                <td>4.3</td>
                <td>3500,00</td>
                <td>Don Bosco</td>
                <td>Malbec</td>
                <td>Cuyo</td>
                <td>Argentina</td>
              </tr>
              <tr>
                <td>Cordero con piel de lobo</td>
                <td>4.1</td>
                <td>4.0</td>
                <td>4500,00</td>
                <td>Mosquita muerta</td>
                <td>Cabernet sauvignon</td>
                <td>Cuyo</td>
                <td>Argentina</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Listado;
