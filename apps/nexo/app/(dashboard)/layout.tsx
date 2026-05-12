'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className={`
        flex flex-col justify-between fixed lg:static min-h-full
        ${openMenu ? 'min-w-1/2 md:min-w-2/5 opacity-100' : 'w-0 overflow-x-hidden opacity-0'}
        lg:opacity-100 lg:min-w-[220px]
        text-white bg-[#0f172a]
        transition-all duration-500 ease-in-out z-20
      `}>
        <div>
          {/* Botón cerrar en móvil */}
          <div className="lg:hidden my-2 mr-4 text-2xl text-right">
            <button onClick={() => setOpenMenu(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Logo */}
          <h2 className="pb-8 lg:py-8 text-center text-xl
                         border-b border-b-slate-700 font-bold">
            Nexo
          </h2>

          {/* Navegación */}
          <nav className="mt-4">
            <ul>
              <li className="px-3 py-4 mx-4 rounded-lg
                             hover:bg-slate-700 cursor-pointer">
                <Link href="/dashboard/admin" className="flex items-center gap-2">
                  <i className="fa-solid fa-house-user"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li className="px-3 py-4 mx-4 rounded-lg
                             hover:bg-slate-700 cursor-pointer">
                <Link href="/dashboard/admin/usuarios" className="flex items-center gap-2">
                  <i className="fa-solid fa-users"></i>
                  <span>Usuarios</span>
                </Link>
              </li>
              <li className="px-3 py-4 mx-4 rounded-lg
                             hover:bg-slate-700 cursor-pointer">
                <Link href="/dashboard/admin/propiedades" className="flex items-center gap-2">
                  <i className="fa-solid fa-building"></i>
                  <span>Propiedades</span>
                </Link>
              </li>
              <li className="px-3 py-4 mx-4 rounded-lg
                             hover:bg-slate-700 cursor-pointer">
                <Link href="/dashboard/admin/tickets" className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span>Tickets</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer */}
        <div>
          <p className="py-8 border-t border-t-slate-700
                        text-center font-bold text-sm text-slate-400">
            Nexo © 2026
          </p>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col bg-gray-50">

        {/* Topbar móvil */}
        <header className="lg:hidden flex items-center
                           justify-between px-4 py-3
                           bg-[#0f172a] text-white">
          <span className="font-bold">Nexo</span>
          <button onClick={() => setOpenMenu(true)} className="text-xl">
            <i className="fa-solid fa-bars"></i>
          </button>
        </header>

        {/* Contenido */}
        <main className="flex-1 p-6">
          {children}
        </main>

      </div>
    </div>
  )
}