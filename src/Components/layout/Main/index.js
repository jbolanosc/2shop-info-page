import React from "react";

export default function index() {
  return (
    <div className="landing bg-primary mb-5 container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="col-xl">
          <div className="d-flex flex-column">
            <img
              src="./assets/clip-984.png"
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
        </div>
        <div className="col-xl d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center font-weight-bold transform-uppercase">
            Bienvenido a <span className="covered text-light">2shop</span>
          </h2>
          <div className="content">
            <p className="m-2 p-2">
              Somos la solución para cada uno de los emprendedores, negocios y
              tiendas que desean mostrar sus productos por internet. Acá podes
              crear tu tienda con unos cuantos clicks y mostrarte al mundo
              entero.
            </p>
            <p className="m-2 p-2">
              Los usuarios también podrán encontrar cualquier producto en
              específico que deseen, sin presas, sin caminar, sin estrés,
              tendrás a tu alcance tiendas locales cerca de tu hogar y tiendas
              internacionales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
