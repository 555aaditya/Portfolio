import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const pages = ['Home', 'Projects', 'Experience', 'Skills', 'Info'];

function Navbar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname.substring(1) || 'Home');

  return (
    <nav className="fixed left-8 md:left-12 top-[calc(50%+320px)] -translate-y-1/2 z-50 font-['Space_Mono']">
      <ul className="flex space-x-8 rotate-[-90deg] origin-left translate-y-[-50%]">
        {pages.map((page) => (
          <li key={page}>
            <Link 
              to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
              onClick={() => setActiveItem(page)}
              className="group flex items-center"
            >
              <span className={`text-xl ${activeItem === page 
                ? 'text-white font-bold text-3xl' 
                : 'text-gray-500 font-medium hover:text-white'} 
                transition-colors tracking-tight`}>
                {page}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Layout({ children }) {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';
  
  return (
    <div className="h-screen overflow-hidden font-['Space_Mono']">
      <div className="fixed top-[21px] left-[21px] right-[21px] bottom-[21px] border-[2px] border-white/70">
      </div>
      <div className="h-full p-8 md:p-16 relative z-20">
        <header className="fixed top-8 md:top-16 left-8 md:left-16 z-40">
          <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Aaditya Sinha</h1>
          <p className="text-sm text-gray-500 mt-1 font-medium tracking-tight">Software Developer & Data Engineer</p>
        </header>
        <Navbar />
        <main className="h-full flex items-end justify-end">
          <div className={`${isProjectsPage ? 'w-[200px]' : 'w-[150px]'} absolute bottom-[60px] right-[60px] max-h-[60vh]`}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout; 