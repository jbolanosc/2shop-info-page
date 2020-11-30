import React from "react";

export default function index() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
      <h1 className="covered mb-2">Beneficios para vendedores</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-primary ">Abierto 24/7</h5>
              <p className="card-text">
                No te preocupes por las restricciones o por un horario, tu
                tienda estará disponible en todo momento para que tus ventas
                nunca bajen.
              </p>
            </div>
          </div>

          <div className="card mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-primary ">Mayor alcance</h5>
              <p className="card-text">
                Podrás llegar a clientes de partes donde nunca imaginaste,
                locales e internacionales.
              </p>
            </div>
          </div>

          <div className="card mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-primary ">
                Herramientas para tu crecimiento
              </h5>
              <p className="card-text">
                Te ofrecemos las mejores herramientas para que manejes tus
                inventarios, ventas y equipo de la mejor manera.
              </p>
            </div>
          </div>

          <div className="card mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-primary ">Tiendas Fantasma</h5>
              <p className="card-text">
                Ofrecemos las herramientas necesarias para que gestiones tu
                dienda solo online, reduciendo tus costos de una tienda formal,
                solo para que almacenes tu inventario y vendas.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-primary ">
                Personaliza tu tienda
              </h5>
              <p className="card-text">
                Te ofrecemos un diseño personalizado y un dominio URL
                personalizado para que tengas tu tienda online 100% propia, con
                todas las herramientas implementadas para vender.
              </p>
            </div>
          </div>
          <div className="card mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-primary ">Reduce costos</h5>
              <p className="card-text">
                Con unos cuantos clicks tendrás tu tienda 100% funcional,
                reduciendo costos de terceros y si quieres te puedes dedicar
                solo a vender online.
              </p>
            </div>
          </div>
          <div className="card mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-primary ">
                Preocupate solo por vender
              </h5>
              <p className="card-text">
                Te ofrecemos una plataforma completamente equipada para que solo
                te preocupes por crear tu tienda, productos y vender de una
                manera ultra sencilla, nos encargamos de todo lo demás.
              </p>
            </div>
          </div>

          <div className="card mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title text-primary ">
                Aceptamos todo tipo de tienda o producto
              </h5>
              <p className="card-text">
                Ayudamos a cualqueir emprendedor o negocio que desee vender su
                producto
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
