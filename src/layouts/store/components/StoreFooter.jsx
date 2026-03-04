import footerImg from '/public/footer.jpg'

const StoreFooter = () => {
  return (
    <footer className='w-full py-8 px-10 bg-black/65 bg-cover bg-center bg-no-repeat bg-blend-multiply' style={{
      backgroundImage: `url(${footerImg})`
    }} >
      <div className="w-full px-2 text-center text-white py-20 flex flex-col items-center justify-center">
        {/* <p className="text-indigo-500 font-medium">Get updated</p> */}
        <h1 className="max-w-lg font-semibold text-4xl/[44px] mt-2">Si necesitas atención personalizada, escribenos.</h1>
        <div className="flex items-center justify-center mt-10 border-2 focus-within:outline focus-within:outline-primary text-sm rounded-full h-14 max-w-md w-full">
          <input type="text" className="flex-1 bg-transparent outline-none rounded-full px-4 h-full" placeholder="Agrega tu correo" />
          <button className="bg-secondary text-white rounded-full text-sm h-11 mr-1 px-8 flex items-center justify-center">
            Escribenos
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-white p-6'>
        <div className='lg:col-span-2'>
          <div className='space-y-3'>
            <div>
              <p>Llamanos</p>
              <p>+52 123 456 7890</p>
            </div>
            <div className=''>
              <p>Nuestras redes</p>
            </div>
          </div>
        </div>
        <ul className='space-y-3'>
          <li>Nuestras pasarelas de pagos</li>
          <li>Nuestras paqueterías</li>
        </ul>
        <ul className='space-y-3'>
          <li>Politica de devolución</li>
          <li>Terminos y condiciones</li>
          <li>Garantía</li>
          <li>Envíos</li>
        </ul>
      </div>
    </footer>
  )
}

export default StoreFooter