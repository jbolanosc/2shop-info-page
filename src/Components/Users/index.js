import React from "react";

export default function index() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center">
      <h1 className="covered mb-2 text-center">Beneficios para usuarios</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card bg-primary text-light mb-3">
            <div className="card-body">
              <h5 className="card-title text-center">
                Encontras especificamente lo que buscas
              </h5>
              <p className="card-text text-center">
                Cansado de dar vueltas en un centro comercial sin encontrar lo
                que buscas, acá lo tendrás a un par de clicks.
              </p>
            </div>
          </div>

          <div className="card bg-primary text-light mb-3">
            <div className="card-body">
              <h5 className="card-title text-center">
                Desde la comodidad de donde estes
              </h5>
              <p className="card-text text-center">
                ¿Cansado de presas, aglomeraciones, estres o tenes que ir de un
                lugar a otro para comprar lo que deseas?. Aca tenes el mundo
                desde la comodidad de tu hogar.
              </p>
            </div>
          </div>

          <div className="card bg-primary text-light mb-3">
            <div className="card-body">
              <h5 className="card-title text-center">Seguridad y rapidez</h5>
              <p className="card-text text-center">
                Compra de la manera más segura, sin salir de casa, con tiendas
                locales recibís el pedido el mismo día.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-primary text-light mb-3">
            <div className="card-body">
              <h5 className="card-title text-center">
                Compras programables o recurrentes
              </h5>
              <p className="card-text text-center">
                ¿Compras algo regularmente?. Acá podes crear una orden
                recurrente que llegará a tu casa al momento que desees.
              </p>
            </div>
          </div>
          <div className="card bg-primary text-light  mb-3">
            <div className="card-body">
              <h5 className="card-title text-center">
                Compras local o internacionalmente
              </h5>
              <p className="card-text text-center">
                Podes encontrar tiendas alrededor de tu ciudad, asi como también
                productos y tiendas internacionales para que no falte de donde
                elegir.
              </p>
            </div>
          </div>
          <div className="card bg-primary text-light  mb-3">
            <div className="card-body">
              <h5 className="card-title text-center">
                Encontras las mejores ofertas
              </h5>
              <p className="card-text text-center">
                Semanal y mensualmente lanzamos una revista con todas las
                mejores ofertas de acuerdo a tus gustos, para que siempre
                encuentres lo mejor y ahorres.
              </p>
            </div>
          </div>

          <div className="card bg-primary text-light  mb-3">
            <div className="card-body">
              <h5 className="card-title text-center">Suministros</h5>
              <p className="card-text text-center">
                Podés encontrar todos los suministros necesarios para la
                operación de tu empresa, te los llevamos hasta la puerta de tu
                casa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
