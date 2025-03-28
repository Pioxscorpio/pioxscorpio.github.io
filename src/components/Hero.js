'use client'

import Social from "./Social"

export default function Hero() {

  return (
    <div>
      <Social />
      <div className="text-center flex flex-col mt-12">
        <img src="https://avatars.githubusercontent.com/u/37488041?v=4" alt="" className="mx-auto w-64 rounded-full" />
        <div>
          <h1 className="mt-20 text-7xl sm:text-8xl bg-gradient-to-r from-indigo-600 to-red-600 bg-clip-text text-transparent font-semibold tracking-tight text-balance text-slate-300">
            Jose Valerio
          </h1>
          <h2 className="text-3xl font-semibold text-balance">
            Desarrollador Full-Stack
          </h2>
        </div>
        <p className="text-lg font-medium text-justify mt-8">
          Soy un desarrollador web fullstack autodidacta con más de 7 años de experiencia en el diseño y desarrollo de soluciones digitales. Desde 2017, he trabajado en la construcción y configuración de servidores Linux, donde monté un servidor web Apache, MySQL y un servidor de archivos Samba, implementando además un sistema de respaldo incremental y discos en espejo para garantizar la seguridad y disponibilidad de los datos.
        </p>
      </div>
    </div>
  )
}