import Header from "../components/Header"


const NotFound = () => {
  return (
    <>
    <Header/>
    <main className="p-3 space-y-5 text-center">
      <h1 className="text-5xl font-medium">Ups</h1>
      <p>La página solicitada no existe</p>
    </main>
    </>
  )
}

export default NotFound