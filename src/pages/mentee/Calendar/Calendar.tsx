import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

// --- INTERFACES ---

interface Schedule {
  id: number;
  subject: string;
  description: string[];
  date: string;
  time: string;
  location: string;
}

interface ScheduleTableProps {
  onBookClick: () => void;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- DATA ---

const schedules: Schedule[] = [
  {
    id: 1,
    subject: "Cấu trúc dữ liệu và giải thuật",
    description: ["Mô tả 1", "Mô tả 2"],
    date: "12/12/2069",
    time: "13:00-15:00",
    location: "H6-106",
  },
  {
    id: 2,
    subject: "Đồ án tốt nghiệp",
    description: ["Mô tả 3", "Mô tả 4"],
    date: "01/01/2069",
    time: "13:00-15:00",
    location: "H6-106",
  },
  {
    id: 3,
    subject: "Lập trình web",
    description: ["Hi", "Mô tả 3"],
    date: "01/01/2069",
    time: "14:00-14:30",
    location: "H6-106",
  },
  {
    id: 4,
    subject: "Vi xử lí",
    description: ["Vi xử lí", "hi"],
    date: "01/01/2069",
    time: "15:00-16:00",
    location: "H6-506",
  },
  {
    id: 5,
    subject: "Lập trình nâng cao",
    description: ["Applications Engineer"],
    date: "01/01/2069",
    time: "16:00-17:00",
    location: "H6-304",
  },
  {
    id: 6,
    subject: "Kĩ thuật lập trình",
    description: ["Dành cho mấy thằng gà"],
    date: "01/01/2069",
    time: "7:00-10:30",
    location: "H6-106",
  },
];

// --- CHILD COMPONENTS ---

function ScheduleTable({ onBookClick }: ScheduleTableProps) {
  return (
    <div className='w-full min-w-[1120px] rounded-[10px] bg-white shadow-[0_3px_8px_0_rgba(0,0,0,0.08)]'>
      <div className='flex h-[60px] items-center rounded-t-[10px] border-b border-[#EEE] bg-[#F9FAFB] px-[43px]'>
        <div className='w-[240px]'>
          <span className='font-inter text-[15px] font-medium leading-[26px] text-[#111928]'>Môn học</span>
        </div>
        <div className='flex-1'>
          <span className='font-inter text-[15px] font-medium leading-[26px] text-[#111928]'>Mô tả</span>
        </div>
        <div className='w-[100px]'>
          <span className='font-inter text-[15px] font-medium leading-[26px] text-[#111928]'>Ngày</span>
        </div>
        <div className='w-[120px]'>
          <span className='font-inter text-[15px] font-medium leading-[26px] text-[#111928]'>Thời gian</span>
        </div>
        <div className='w-[100px]'>
          <span className='font-inter text-[15px] font-medium leading-[26px] text-[#111928]'>Địa điểm</span>
        </div>
        <div className='w-[79px]'></div>
      </div>

      {schedules.map((schedule, index) => (
        <div
          key={schedule.id}
          className={`flex h-[80px] items-center border-b border-[#EEE] px-[43px] ${
            index === schedules.length - 1 ? "rounded-b-[10px] border-b-0" : ""
          }`}
        >
          <div className='w-[240px]'>
            <span className='font-inter text-[14px] font-medium leading-[22px] text-[#111928]'>{schedule.subject}</span>
          </div>
          <div className='flex-1'>
            {schedule.description.map((desc, i) => (
              <div key={i} className='font-inter text-[14px] font-normal leading-[22px] text-[#637381]'>
                {desc}
              </div>
            ))}
          </div>
          <div className='w-[100px]'>
            <span className='font-inter text-[14px] font-normal leading-[22px] text-[#637381]'>{schedule.date}</span>
          </div>
          <div className='w-[120px]'>
            <span className='font-inter text-[14px] font-normal leading-[22px] text-[#637381]'>{schedule.time}</span>
          </div>
          <div className='w-[100px]'>
            <span className='font-inter text-[14px] font-normal leading-[22px] text-[#637381]'>
              {schedule.location}
            </span>
          </div>
          <div className='flex w-[79px] justify-end'>
            <button
              onClick={onBookClick}
              className='font-inter rounded-[50px] border border-[#3758F9] bg-white px-[20px] py-[5px] text-[16px] font-medium leading-[24px] text-[#3758F9] transition-colors hover:bg-[#3758F9] hover:text-white'
            >
              Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formType, setFormType] = useState<"individual" | "group">("group");

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4' onClick={onClose}>
      <div
        className='max-h-[90vh] w-full max-w-[641px] overflow-y-auto rounded-[10px] bg-white shadow-lg'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='relative flex h-[82px] items-center justify-center rounded-t-[10px] bg-[#3758F9]'>
          <h2 className='font-roboto text-[45px] font-medium leading-[52px] text-white'>Đặt lịch</h2>
          <button
            onClick={onClose}
            className='absolute right-[29px] top-[29px] h-[24px] w-[24px] text-white hover:opacity-80'
          >
            <X className='h-full w-full' />
          </button>
        </div>

        <div className='p-[48px]'>
          <div className='mb-[24px]'>
            <div className='flex items-center gap-[18px] rounded-[8px] border border-[#DFE4EA] bg-white p-[15px_20px] shadow-[0_1px_3px_0_rgba(166,175,195,0.40)]'>
              <div className='h-[54px] w-[54px] rounded-full bg-gradient-to-br from-gray-300 to-gray-400' />
              <div>
                <div className='font-inter text-[16px] font-medium leading-[24px] text-[#111928]'>Nguyễn Văn A</div>
                <div className='font-inter text-[14px] font-normal leading-[22px] text-[#637381]'>Môn: Giải tích 1</div>
              </div>
            </div>
            <div className='font-inter ml-[281px] mt-[8px] text-[14px] leading-[22px] text-[#637381]'>
              Gmail: NguyenVanA@gmail.com
            </div>
          </div>

          <div className='mb-[20px]'>
            <label className='font-roboto mb-[10px] block text-[16px] font-medium leading-[24px] tracking-[0.15px] text-[#111928]'>
              Hình thức
            </label>
            <div className='flex items-center gap-[142px]'>
              <button
                onClick={() => {
                  setFormType("individual");
                }}
                className='flex items-center gap-[3px]'
              >
                <div
                  className={`flex h-[16px] w-[16px] items-center justify-center rounded-full border-2 ${
                    formType === "individual" ? "border-[#0D6FFF]" : "border-black/5"
                  }`}
                >
                  {formType === "individual" && <div className='h-[4.8px] w-[4.8px] rounded-full bg-white' />}
                </div>
                <span className="font-['SF_Pro'] text-[13px] font-medium leading-[16px] text-[#4C4C4C]">Cá nhân</span>
              </button>
              <button
                onClick={() => {
                  setFormType("group");
                }}
                className='flex items-center gap-[3px]'
              >
                <div
                  className={`flex h-[16px] w-[16px] items-center justify-center rounded-full ${
                    formType === "group" ? "bg-[#0D6FFF]" : "border-2 border-black/5"
                  }`}
                >
                  {formType === "group" && <div className='h-[4.8px] w-[4.8px] rounded-full bg-white' />}
                </div>
                <span className="font-['SF_Pro'] text-[13px] font-medium leading-[16px] text-[#4C4C4C]">Nhóm</span>
              </button>
            </div>
          </div>

          <div className='mb-[20px]'>
            <label className='font-roboto mb-[10px] block text-[16px] font-medium leading-[24px] tracking-[0.15px] text-[#111928]'>
              Môn học
            </label>
            <div className='relative'>
              <input
                type='text'
                value='Giải tích 1'
                className='font-inter w-full rounded-[6px] border border-[#DFE4EA] bg-white px-[20px] py-[12px] text-[16px] leading-[24px] text-[#637381] focus:outline-none focus:ring-2 focus:ring-[#3758F9]'
                readOnly
              />
              <ChevronDown className='absolute right-[20px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#637381]' />
            </div>
          </div>

          <div className='mb-[20px]'>
            <label className='font-roboto mb-[10px] block text-[16px] font-medium leading-[24px] tracking-[0.15px] text-[#111928]'>
              Buổi học
            </label>
            <div className='relative'>
              <input
                type='text'
                value='Thứ 2 (tiết 2-3)'
                className='font-inter w-full rounded-[6px] border border-[#DFE4EA] bg-white px-[20px] py-[12px] text-[16px] leading-[24px] text-[#637381] focus:outline-none focus:ring-2 focus:ring-[#3758F9]'
                readOnly
              />
              <ChevronDown className='absolute right-[20px] top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#637381]' />
            </div>
          </div>

          {formType === "group" && (
            <div className='mb-[25px]'>
              <label className='font-inter mb-[10px] block text-[16px] font-medium leading-[24px] text-[#111928]'>
                Thêm thành viên
              </label>
              <textarea
                placeholder='Nhập mã số thành viên (cách nhau bởi dấu phẩy)'
                className='font-inter h-[62px] w-full resize-none rounded-[6px] border border-[#DFE4EA] bg-white px-[20px] py-[20px] text-[16px] leading-[24px] text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3758F9]'
              />
            </div>
          )}

          <div className='flex justify-center'>
            <button className='font-inter rounded-[6px] bg-[#3758F9] px-[28px] py-[13px] text-[16px] font-medium leading-[24px] text-white transition-colors hover:bg-[#2d47d1]'>
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function Calendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleBookClick() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div className='min-h-screen bg-white'>
      <div className=''>
        <div className='px-4 py-[25px] md:px-[42px]'>
          {/* --- FILTER SECTION ĐÃ ĐƯỢC THÊM VÀO --- */}
          <div className='mb-[32px] rounded-[5px] bg-[#3758F9] p-4 md:p-[20px]'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <div>
                <label className='font-roboto mb-[10px] block text-[14px] font-medium leading-[20px] tracking-[0.1px] text-white'>
                  Môn học
                </label>
                <input
                  type='text'
                  placeholder='Tên môn học/Mã môn học'
                  className='font-inter w-full rounded-[6px] border-2 border-[#3758F9] bg-white px-[20px] py-[12px] text-[16px] leading-[24px] text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-white'
                />
              </div>

              <div>
                <label className='font-roboto mb-[10px] block text-[14px] font-medium leading-[20px] tracking-[0.1px] text-white'>
                  Ngày
                </label>
                <input
                  type='text'
                  placeholder='dd/mm/yyyy'
                  className='font-inter w-full rounded-[6px] border-2 border-[#3758F9] bg-white px-[20px] py-[12px] text-[16px] leading-[24px] text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-white'
                />
              </div>

              <div>
                <label className='font-roboto mb-[10px] block text-[14px] font-medium leading-[20px] tracking-[0.1px] text-white'>
                  Thời gian
                </label>
                <input
                  type='text'
                  placeholder='GMT+7'
                  className='font-inter w-full rounded-[6px] border-2 border-[#3758F9] bg-white px-[20px] py-[12px] text-[16px] leading-[24px] text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-white'
                />
              </div>

              <div>
                <label className='font-roboto mb-[10px] block text-[14px] font-medium leading-[20px] tracking-[0.1px] text-white'>
                  Thời lượng
                </label>
                <input
                  type='text'
                  placeholder='50 phút, 1 giờ, ...'
                  className='font-inter w-full rounded-[6px] border-2 border-[#3758F9] bg-white px-[20px] py-[12px] text-[16px] leading-[24px] text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-white'
                />
              </div>
            </div>
          </div>
          {/* --- KẾT THÚC FILTER SECTION --- */}

          {/* --- TIÊU ĐỀ MỚI --- */}
          <div className='mb-[30px]'>
            <h1 className='font-inter text-center text-[24px] font-bold italic leading-[38px] text-[#111928] md:text-[30px]'>
              Thời gian biểu của <span>John Witch</span>
            </h1>
          </div>
          {/* --- KẾT THÚC TIÊU ĐỀ MỚI --- */}

          <div className='overflow-x-auto'>
            <ScheduleTable onBookClick={handleBookClick} />
          </div>
        </div>
      </div>

      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}
