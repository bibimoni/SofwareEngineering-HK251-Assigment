import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
export default function MenteeLayout() {
  return (
    <>
      <div className='flex h-screen bg-gray-50'>
        {/* Sidebar cố định bên trái */}
        <aside className='w-64 border-r border-gray-200 bg-white shadow-md'>
          <Sidebar />
        </aside>

        {/* Phần nội dung chính */}
        <div className='flex flex-1 flex-col'>
          {/* Header */}
          <header className='flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm'>
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
