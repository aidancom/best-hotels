import Header from "../components/Header"


const PointsOfInterest = () => {
  return (
    <>
    <Header/>
    <main className="p-3 space-y-3">
      <h1 className="text-2xl font-medium">Puntos de interés</h1>
      <div className="space-y-3">
        <img src="../public/section_things_to_see.jpg" alt="Experiencias para nuestros clientes" />
        <div>
          <p className="font-medium">Aeropuerto</p>
          <p>Tenerife Sur Reina Sofia (a 26 km)</p>
          <p className="font-medium">Núcleo urbano más cercano</p>
          <p>Adeje (6 km)</p>
          <p className="font-medium">Playa más cercana</p>
          <p>Playa de Ajabo (550 m)</p>
          <p className="font-medium">Parada de autobús más cercana</p>
          <p>Números línea 471 y 473 (5 min)</p>
        </div>
      </div>
    </main>
    </>
  )
}

export default PointsOfInterest
