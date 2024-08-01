import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export default function RootLayout() {
  return (
    <div className="flex flex-col m-h-screen">
      <Header />
    <main className="flex-grow flex items-center justify-center w-full mt-20">   
        <Outlet />
    </main>
      <Footer />
  </div>
  )
}