import React from "react";

export default function index() {
  return (
    <div className="landing bg-primary mb-5 container-fluid d-flex flex-column justify-content-center align-items-center">
      <h3 className="font-weight-bold text-uppercase text-light mb-5">
        Usuarios
      </h3>
      <div className="row text-light">
        <div className="col-lg-4">
          <div className="row">
            <div className="col-6">
              <div className="card text-center h-100 w-100 d-flex align-items-center">
                <h2>
                  <i className="fa fa-globe fa-3x text-primary"></i>
                </h2>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <h3 className="font-weight-bold">Compra donde sea</h3>
                <p>
                  Podés apoyar comprando a tiendas locales cerca de ti, o buscar
                  productos internacionales.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-6">
              <div className="card text-center h-100 w-100 d-flex align-items-center">
                <h2>
                  <i className="fa fa-shopping-cart fa-3x text-primary"></i>
                </h2>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <h3 className="font-weight-bold">Todo en un mismo lugar</h3>
                <p>
                  No tendrás que visitar diferentes lugares para encontrar lo
                  que buscas, acá encontrás lo que necesitas fácilmente.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-6">
              <div className="card text-center h-100 w-100 d-flex align-items-center">
                <h2>
                  <i className="fa fa-smile-o fa-3x text-primary"></i>
                </h2>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-column">
                <h3 className="font-weight-bold">Ahorro de tiempo</h3>
                <p>
                  Aquí encontras todo en único lugar, no tenés que hacer largos
                  viajes para encontrar lo que buscas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
