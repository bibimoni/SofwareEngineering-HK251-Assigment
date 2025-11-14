import { useState } from "react";

// --- TIỆN ÍCH (thay thế cho 'cn' utility) ---
// Hàm này dùng để gộp các class name của Tailwind lại với nhau
function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// --- INTERFACES ---
interface TutoringSession {
  id: number;
  courseName: string;
  courseCode: string;
  instructor: string;
  instructorEmail: string;
  instructorAvatar: string;
  date: string;
  time: string;
  location: string;
  responded: boolean;
}

// Interface này đã được cập nhật để dùng TutoringSession
interface FeedbackModalProps {
  session: TutoringSession | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// --- DỮ LIỆU ---

const sessions: TutoringSession[] = [
  {
    id: 1,
    courseName: "Nguyên lý ngôn ngữ lập trình",
    courseCode: "CO3005",
    instructor: "Jhon Smith",
    instructorEmail: "jhon.smith@hcmut.eu.vn",
    instructorAvatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/ecd1baadee67bf167b633a9094eba3999fbd3800?width=87",
    date: "12/10/2025",
    time: "8:00-10:00",
    location: "H6-202",
    responded: false,
  },
  {
    id: 2,
    courseName: "Cấu trúc dữ liệu và giải thuật",
    courseCode: "CO2003",
    instructor: "Humil Limition",
    instructorEmail: "limition@hcmut.eu.vn",
    instructorAvatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/e04ebb0a48eaee148ed155a0c16a94877acc4c65?width=87",
    date: "09/10/2025",
    time: "13:00-15:00",
    location: "H1-102",
    responded: false,
  },
  {
    id: 3,
    courseName: "Mạng máy tính",
    courseCode: "CO3093",
    instructor: "Jhon Smith",
    instructorEmail: "jhon.smith@hcmut.eu.vn",
    instructorAvatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/ecd1baadee67bf167b633a9094eba3999fbd3800?width=87",
    date: "01/10/2025",
    time: "7:00-9:00",
    location: "H2-305",
    responded: false,
  },
  {
    id: 4,
    courseName: "Giải tích 2",
    courseCode: "MT1005",
    instructor: "Sulium Keliym",
    instructorEmail: "suliym.info@hcmut.eu.vn",
    instructorAvatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/234bbcbab8125bd9bfeed48d2edcaff68389d705?width=87",
    date: "03/09/2025",
    time: "9:00-11:00",
    location: "H6-311",
    responded: false,
  },
  {
    id: 5,
    courseName: "Mô hình hóa toán học",
    courseCode: "CO2011",
    instructor: "Alex Semuyel",
    instructorEmail: "alex.semuel@hcmut.eu.vn",
    instructorAvatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/be343ac1cc0a582a822696672bc49b599fb2a8de?width=87",
    date: "30/08/2025",
    time: "13:00-15:00",
    location: "H3-203",
    responded: true,
  },
  {
    id: 6,
    courseName: "Cấu trúc Rời rạc",
    courseCode: "CO1007",
    instructor: "Humil Limition",
    instructorEmail: "limition@hcmut.eu.vn",
    instructorAvatar:
      "https://api.builder.io/api/v1/image/assets/TEMP/e04ebb0a48eaee148ed155a0c16a94877acc4c65?width=87",
    date: "11/08/2025",
    time: "8:00-10:00",
    location: "H2-205",
    responded: false,
  },
];

// --- COMPONENT MODAL PHẢN HỒI ---
function FeedbackModal({ session, isOpen, onClose, onSuccess }: FeedbackModalProps) {
  const [usefulness, setUsefulness] = useState<string>("");
  const [comments, setComments] = useState("");

  if (!isOpen || !session) return null;

  const handleSubmit = () => {
    if (!usefulness) {
      // Dùng console.warn thay vì alert()
      console.warn("Vui lòng chọn mức độ hữu ích của buổi học");
      return;
    }
    onSuccess();
    setUsefulness("");
    setComments("");
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      <div className='absolute inset-0 bg-black/60' onClick={onClose}></div>

      {/* NỘI DUNG MODAL */}
      <div
        className='shadow-modal relative max-h-[90vh] w-full max-w-[690px] overflow-y-auto rounded-[20px] bg-white p-6 md:p-10'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Nút đóng (X) */}
        <button
          onClick={onClose}
          aria-label='Đóng'
          className='absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100 md:right-6 md:top-6'
        >
          <span className='text-2xl leading-none text-gray-500 md:text-3xl'>&times;</span>
        </button>

        {/* Tiêu đề */}
        <h2 className='mb-6 text-xl font-semibold text-blue-500 md:mb-8 md:text-2xl'>Gửi phản hồi đến buổi học</h2>

        {/* Thông tin buổi học (Layout mới) */}
        <div className='mb-6 grid grid-cols-1 gap-x-8 gap-y-4 md:mb-8 md:grid-cols-2'>
          {/* Cột trái */}
          <div>
            <div className='font-medium text-gray-800'>{session.courseName}</div>
            <div className='text-sm text-gray-600'>{session.courseCode}</div>
            <div className='mt-2 text-sm text-gray-600'>Thời gian: {session.time}</div>
            <div className='text-sm text-gray-600'>Ngày: {session.date}</div>
          </div>
          {/* Cột phải */}
          <div>
            <div className='font-medium text-gray-800'>{session.instructor}</div>
            <div className='text-sm text-gray-600'>{session.instructorEmail}</div>
            <div className='mt-2 text-sm text-gray-600'>Địa điểm: {session.location}</div>
          </div>
        </div>

        {/* Mức độ hữu ích */}
        <div className='mb-6 md:mb-8'>
          <label className='mb-3 block text-sm font-medium leading-6 text-gray-800 md:text-base'>
            Mức độ hữu ích của buổi học <span className='text-red-500'>*</span>
          </label>
          <div className='flex flex-col gap-4 sm:flex-row sm:flex-wrap md:gap-6'>
            {[
              { value: "not-useful", label: "Không hữu ích" },
              { value: "somewhat-useful", label: "Chưa thực sự hữu ích" },
              { value: "useful", label: "Hữu ích" },
              { value: "very-useful", label: "Rất hữu ích" },
            ].map((option) => (
              <label key={option.value} className='flex cursor-pointer items-center gap-2.5'>
                <input
                  type='radio'
                  name='usefulness'
                  value={option.value}
                  checked={usefulness === option.value}
                  onChange={(e) => {
                    setUsefulness(e.target.value);
                  }}
                  // Giao diện radio button đã được cập nhật
                  className='h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500'
                />
                <span className='text-sm leading-6 text-gray-700 md:text-base'>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Ý kiến đóng góp */}
        <div className='mb-6 md:mb-10'>
          <label className='mb-2.5 block text-sm font-medium leading-6 text-gray-800 md:text-base'>
            Ý kiến đóng góp
          </label>
          <textarea
            value={comments}
            onChange={(e) => {
              setComments(e.target.value);
            }}
            placeholder='Nêu ý kiến...'
            className='h-[140px] w-full max-w-lg resize-none rounded-md border border-gray-300 bg-white p-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-base'
          />
        </div>

        {/* Nút gửi */}
        <div className='flex justify-start'>
          <button
            onClick={handleSubmit}
            className='w-full rounded-lg bg-blue-600 px-8 py-2.5 text-base font-medium leading-6 text-white transition-colors hover:bg-blue-700 sm:w-auto'
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
}

// --- COMPONENT MODAL THÀNH CÔNG ---
function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
      <div className='absolute inset-0 bg-black/60' onClick={onClose}></div>
      <div
        className='shadow-modal relative flex w-full max-w-md flex-col items-center rounded-lg bg-white px-6 py-10 md:px-8 md:py-12'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Tiêu đề (đã bỏ gạch chân) */}
        <h2 className='mb-8 text-center text-xl font-semibold leading-7 text-gray-800 md:text-2xl md:leading-[30px]'>
          Phản hồi đã được gửi thành công
        </h2>

        {/* Nút OK */}
        <button
          onClick={onClose}
          className='w-full rounded-lg bg-blue-600 px-10 py-2.5 text-base font-medium leading-6 text-white transition-colors hover:bg-blue-700 sm:w-auto'
        >
          OK
        </button>
      </div>
    </div>
  );
}

// --- COMPONENT CHÍNH (DEFAULT EXPORT) ---
export default function Response() {
  const [selectedSession, setSelectedSession] = useState<TutoringSession | null>(null);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [sessionList, setSessionList] = useState(sessions);

  const handleFeedbackClick = (session: TutoringSession) => {
    setSelectedSession(session);
    setShowFeedbackModal(true);
  };

  const handleFeedbackSuccess = () => {
    setShowFeedbackModal(false);
    setShowSuccessModal(true);
    if (selectedSession) {
      setSessionList((prev) => prev.map((s) => (s.id === selectedSession.id ? { ...s, responded: true } : s)));
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    setSelectedSession(null);
  };

  // Các class Tailwind tùy chỉnh (màu sắc) đã được thay thế bằng màu mặc định
  // (ví dụ: bg-primary -> bg-blue-600, text-primary -> text-blue-600)
  // Bạn có thể cần thêm file tailwind.config.js nếu muốn dùng màu tùy chỉnh

  return (
    <div className='min-h-screen font-sans'>
      <div className='px-4 py-6 md:px-8 md:py-[10px] lg:px-[43px]'>
        <div className='mx-auto max-w-[1125px]'>
          <div className='overflow-hidden rounded-[10px] bg-white shadow-lg'>
            {/* Header của bảng */}
            <div className='hidden min-h-[60px] items-center border-b border-gray-200 bg-gray-50 px-[43px] lg:flex'>
              <div className='grid w-full grid-cols-[minmax(200px,1fr)_minmax(200px,1fr)_100px_120px_100px_120px] gap-4'>
                <div className='text-[15px] font-medium leading-[26px] text-gray-700'>Môn học</div>
                <div className='text-[15px] font-medium leading-[26px] text-gray-700'>Giảng viên</div>
                <div className='text-[15px] font-medium leading-[26px] text-gray-700'>Ngày</div>
                <div className='text-[15px] font-medium leading-[26px] text-gray-700'>Thời gian</div>
                <div className='text-[15px] font-medium leading-[26px] text-gray-700'>Địa điểm</div>
                <div></div>
              </div>
            </div>

            {/* Danh sách các hàng */}
            {sessionList.map((session, index) => (
              <div
                key={session.id}
                className={cn(
                  "border-b border-gray-200 py-4 last:border-0 lg:flex lg:min-h-[80px] lg:items-center lg:py-0", // Đã thêm lg:flex và lg:items-center
                  index === sessionList.length - 1 && "rounded-b-[10px]"
                )}
              >
                <div className='h-full w-full items-center gap-4 space-y-3 px-4 md:px-6 lg:grid lg:grid-cols-[minmax(200px,1fr)_minmax(200px,1fr)_100px_120px_100px_120px] lg:space-y-0 lg:px-[43px]'>
                  {" "}
                  {/* Đã thêm w-full */}
                  {/* Môn học */}
                  <div className='flex flex-col gap-0.5'>
                    <div className='mb-1 text-xs font-medium text-gray-500 lg:hidden'>Môn học</div>
                    <div className='text-sm font-medium leading-[22px] text-gray-800 lg:font-normal'>
                      {session.courseName}
                    </div>
                    <div className='text-sm leading-[22px] text-gray-600'>{session.courseCode}</div>
                  </div>
                  {/* Giảng viên */}
                  <div className='flex items-center gap-3'>
                    <div className='w-20 flex-shrink-0 text-xs font-medium text-gray-500 lg:hidden'>Giảng viên</div>
                    <img
                      src={session.instructorAvatar}
                      alt={session.instructor}
                      className='h-10 w-10 flex-shrink-0 rounded-full object-cover'
                      // Thêm fallback image
                      onError={(e) => (e.currentTarget.src = "https://placehold.co/40x40/EBF0FF/7F8FA4?text=AV")}
                    />
                    <div className='flex min-w-0 flex-col'>
                      <div className='truncate text-sm font-medium leading-[22px] text-gray-800'>
                        {session.instructor}
                      </div>
                      <div className='truncate text-sm leading-[22px] text-gray-600'>{session.instructorEmail}</div>
                    </div>
                  </div>
                  {/* Ngày, Thời gian, Địa điểm (Responsive) */}
                  <div className='grid grid-cols-2 gap-4 lg:contents'>
                    <div>
                      <div className='mb-1 text-xs font-medium text-gray-500 lg:hidden'>Ngày</div>
                      <div className='text-sm leading-[22px] text-gray-700'>{session.date}</div>
                    </div>
                    <div>
                      <div className='mb-1 text-xs font-medium text-gray-500 lg:hidden'>Thời gian</div>
                      <div className='text-sm leading-[22px] text-gray-700'>{session.time}</div>
                    </div>
                    <div>
                      <div className='mb-1 text-xs font-medium text-gray-500 lg:hidden'>Địa điểm</div>
                      <div className='text-sm leading-[22px] text-gray-700'>{session.location}</div>
                    </div>
                  </div>
                  {/* Nút Phản hồi */}
                  <div className='lg:col-start-6'>
                    {session.responded ? (
                      <button
                        disabled
                        className='w-full cursor-not-allowed rounded-lg bg-gray-200 px-5 py-1.5 text-sm font-medium leading-6 text-gray-500 lg:w-auto'
                      >
                        Đã phản hồi
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleFeedbackClick(session);
                        }}
                        className='w-full rounded-lg border border-blue-600 bg-white px-5 py-1.5 text-sm font-medium leading-6 text-blue-600 transition-colors hover:bg-blue-50 lg:w-auto'
                      >
                        Phản hồi
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Các modal được gọi ở đây */}
      <FeedbackModal
        session={selectedSession}
        isOpen={showFeedbackModal}
        onClose={() => {
          setShowFeedbackModal(false);
        }}
        onSuccess={handleFeedbackSuccess}
      />

      <SuccessModal isOpen={showSuccessModal} onClose={handleSuccessClose} />
    </div>
  );
}
