import { Outlet } from "react-router-dom";
import SidebarMentor from "../../components/Sidebar/components/SidebarMentor";
import Header from "../../components/Header/Header";
export default function MentorLayout() {
  return (
    <>
      <div className='flex h-screen bg-gray-50'>
        {/* Sidebar cố định bên trái */}
        <aside className='w-64 border-r border-gray-200 bg-white shadow-md'>
          <SidebarMentor />
        </aside>

        {/* Phần nội dung chính */}
        <div className='flex flex-1 flex-col'>
          {/* Header */}
          <header className='flex h-16'>
            <Header />
          </header>

          {/* Nội dung động (render bởi Router) */}
          <main className='flex-1 overflow-y-auto p-6'>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
