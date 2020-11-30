import React from "react";

export default function index() {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center">
        Por qué usar <span className="covered">2shop</span>
      </h2>
      <h3 className="text-center">Vendedores</h3>
      <div className="row text-center">
        <div className="col-xl mb-2">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="../assets/iwona-castiello-d-antonio-lic9jjcFSDc-unsplash.jpg"
              alt="tienda digital"
            />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">
                No necesitas de una tienda física
              </h5>
              <p className="card-text">
                Puedes dedicarte a vender por internet de manera local o global,
                reduciendo tus costos de alquiler, manutención del local y
                logística entre diferentes tiendas.
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl mb-2">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="../assets/blake-wisz-Xn5FbEM9564-unsplash.jpg"
              alt="Crea facil"
            />
            <div className="card-body">
              <h5 className="card-title">Creas tu tienda de manera sencilla</h5>
              <p className="card-text">
                Nuestra aplicación te ayudará a crear tu tienda online de manera
                ultra rápida y ultra sencilla, podrás también elegir si quieres
                un diseño personalizado para tu tienda.
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl mb-2">
          <div className="card h-100">
            <img
              className="card-img-top"
              src="../assets/mike-petrucci-c9FQyqIECds-unsplash.jpg"
              alt="Abierto siempre"
            />
            <div className="card-body">
              <h5 className="card-title">Siempre Abierto</h5>
              <p className="card-text">
                No tendrás que preocuparte por cierres, tu tienda online siempre
                estará abierta a los pedidos y no perderás ventas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
