import React from "react";

const invitedMembers = [
  {
    id: 1,
    name: "Nguyễn Đức Trung Kiên",
    mssv: "2311734",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Đặng Nguyên Bảo",
    mssv: "2310211",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Trần Gia Bảo Anh",
    mssv: "2310148",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Nguyễn Phan Việt Anh",
    mssv: "2310117",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

interface CreateGroupModalProps {
  onClose: () => void;
}

export default function CreateGroupModal({ onClose }: CreateGroupModalProps) {
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity'
      onClick={onClose}
    >
      {/* Khung nội dung modal */}
      <div
        className='w-full max-w-md transform overflow-hidden rounded-lg bg-white shadow-xl transition-all'
        onClick={handleModalContentClick}
      >
        <div className='bg-blue-600 px-6 py-4'>
          <h2 className='text-center text-xl font-semibold text-white'>Tạo nhóm</h2>
        </div>

        {/* Nội dung form */}
        <div className='space-y-4 p-6'>
          {/* Tên nhóm */}
          <div>
            <label htmlFor='groupName' className='block text-sm font-medium text-gray-700'>
              Tên
            </label>
            <input
              type='text'
              id='groupName'
              placeholder='Tên nhóm'
              className='mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
            />
          </div>

          {/* Mã số sinh viên */}
          <div>
            <label htmlFor='studentId' className='block text-sm font-medium text-gray-700'>
              Mã số sinh viên
            </label>
            <div className='mt-1 flex space-x-2'>
              <input
                type='text'
                id='studentId'
                placeholder='e.g. 2310211...'
                className='block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm'
              />
              <button className='rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700'>
                Mời
              </button>
            </div>
          </div>

          {/* Danh sách thành viên đã mời */}
          <div className='h-48 space-y-2 overflow-y-auto rounded-md border border-gray-200 p-2'>
            {invitedMembers.map((member) => (
              <div key={member.id} className='flex items-center justify-between rounded p-2 hover:bg-gray-50'>
                <div className='flex items-center space-x-3'>
                  <img src={member.avatar} alt={member.name} className='h-8 w-8 rounded-full' />
                  <div>
                    <div className='text-sm font-medium text-gray-900'>{member.name}</div>
                    <div className='text-xs text-gray-500'>{member.mssv}</div>
                  </div>
                </div>
                <button className='text-gray-400 hover:text-gray-600'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <circle cx='12' cy='12' r='1'></circle>
                    <circle cx='19' cy='12' r='1'></circle>
                    <circle cx='5' cy='12' r='1'></circle>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Nút Tạo */}
          <div className='flex justify-center pt-2'>
            <button className='rounded-md bg-blue-600 px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700'>
              Tạo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
