import { useState } from "react";

interface Course {
  id: number;
  name: string;
  date: string;
  time: string;
  room: string;
  selected: boolean;
}

const mockSchedule: Course[] = [
  { id: 1, name: "CÔNG NGHỆ PHẦN MỀM", date: "29/10/2025", time: "7:00 - 8:50", room: "H6-201", selected: false },
  { id: 2, name: "HỆ CƠ SỞ DỮ LIỆU", date: "29/10/2025", time: "9:00 - 10:50", room: "H6-405", selected: false },
  { id: 3, name: "MẠNG MÁY TÍNH", date: "29/10/2025", time: "10:00 - 11:50", room: "H6-201", selected: false },
  { id: 4, name: "CẤU TRÚC RỜI RẠC", date: "31/10/2025", time: "9:00 - 11:50", room: "H6-201", selected: true },
  { id: 5, name: "KIẾN TRÚC MÁY TÍNH", date: "29/10/2025", time: "7:00 - 8:50", room: "H6-201", selected: false },
  {
    id: 6,
    name: "CẤU TRÚC DỮ LIỆU VÀ GIẢI THUẬT",
    date: "01/11/2025",
    time: "7:00 - 8:50",
    room: "H6-201",
    selected: false,
  },
  { id: 7, name: "HỆ THỐNG SỐ", date: "01/11/2025", time: "9:00 - 10:50", room: "H6-201", selected: false },
];

export default function MyCalendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const openModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  const handleConfirmDelete = () => {
    console.log("Xóa:", selectedCourse);
    // TODO: actually remove or update the schedule item if required
    closeModal();
  };

  return (
    <div className='flex h-screen min-h-screen w-full justify-center bg-[#FAFAFA] font-sans'>
      {/* Schedule Grid */}
      <div className='grid grid-cols-3 gap-6'>
        {mockSchedule.map((course) => (
          <div
            key={course.id}
            className={`rounded-xl border p-5 shadow-sm transition ${
              course.selected ? "border-[#3B5BDB] bg-[#F7F9FF] shadow-md" : "border-gray-300"
            } `}
          >
            <div className='mb-2 text-[17px] font-semibold'>{course.name}</div>

            <div className='space-y-1 text-[15px] text-gray-700'>
              <p>📅 Ngày: {course.date}</p>
              <p>⏱️ Giờ: {course.time}</p>
              <p>📍 Phòng học: {course.room}</p>
            </div>

            <button
              onClick={() => {
                openModal(course);
              }}
              className='mt-4 rounded-lg border border-red-500 px-4 py-2 text-red-500 transition hover:bg-red-500 hover:text-white'
            >
              Hủy
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-30'>
          <div className='w-[450px] rounded-2xl bg-white p-8 shadow-lg'>
            {/* Warning Icon */}
            <div className='mb-4 flex justify-center'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-red-100'>
                <span className='text-2xl text-red-500'>⚠️</span>
              </div>
            </div>

            <h3 className='mb-6 text-center text-[18px] font-semibold'>
              Bạn có chắc chắn muốn hủy lịch hẹn này không?
            </h3>

            {/* Buttons */}
            <div className='flex justify-center space-x-4'>
              <button
                onClick={closeModal}
                className='rounded-lg border border-gray-400 px-6 py-2 transition hover:bg-gray-200'
              >
                Hủy
              </button>

              <button
                onClick={handleConfirmDelete}
                className='rounded-lg bg-red-500 px-6 py-2 text-white transition hover:bg-red-600'
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
