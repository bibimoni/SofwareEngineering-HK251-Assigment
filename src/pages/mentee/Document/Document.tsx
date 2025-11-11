import { useState } from "react";
import { PlusCircle, ChevronDown, X, Upload } from "lucide-react";

interface DocumentFiltersProps {
  onShareClick: () => void;
}

function DocumentFilters({ onShareClick }: DocumentFiltersProps) {
  return (
    <div className='relative'>
      <div className='h-[98px] rounded-t-lg border border-black bg-[#3758F9] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]' />

      <div className='absolute left-[13px] right-[13px] top-2 flex items-end justify-between'>
        <div className='flex w-[250px] flex-col gap-[5px]'>
          <label className='font-roboto text-sm font-medium leading-5 tracking-[0.1px] text-white'>Môn học</label>
          <input
            type='text'
            placeholder='Tên môn học/Mã môn học'
            className='font-inter h-[56px] rounded-md border-0 bg-white px-5 text-base text-[#9CA3AF] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3758F9]'
          />
        </div>

        <div className='flex w-[250px] flex-col gap-[10px]'>
          <label className='font-roboto text-sm font-semibold leading-5 tracking-[0.1px] text-white'>
            Loại tài liệu
          </label>
          <div className='relative'>
            <select className='font-inter h-[56px] w-full appearance-none rounded-md border-0 bg-white px-4 pr-10 text-base text-[#637381] focus:outline-none focus:ring-2 focus:ring-[#3758F9]'>
              <option>Tài liệu học</option>
              <option>Thi giữa học kì</option>
              <option>Thi cuối học kì</option>
            </select>
            <ChevronDown className='pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#637381]' />
          </div>
        </div>

        <div className='flex w-[250px] flex-col gap-[10px]'>
          <label className='font-roboto text-sm font-semibold leading-5 tracking-[0.1px] text-white'>Học kì</label>
          <div className='relative'>
            <select className='font-inter h-[56px] w-full appearance-none rounded-md border-0 bg-white px-4 pr-10 text-base text-[#637381] focus:outline-none focus:ring-2 focus:ring-[#3758F9]'>
              <option>251</option>
              <option>241</option>
              <option>232</option>
            </select>
            <ChevronDown className='pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#637381]' />
          </div>
        </div>

        <button
          onClick={onShareClick}
          className='flex items-center gap-2 rounded-md border border-white px-6 py-3 transition-colors hover:bg-white/10'
        >
          <PlusCircle className='h-5 w-5 text-white' />
          <span className='font-inter text-base font-medium leading-6 text-white'>Chia sẻ</span>
        </button>
      </div>
    </div>
  );
}

interface Document {
  id: string;
  title: string;
  courseCode: string;
  uploader: {
    name: string;
    email: string;
    avatar?: string;
  };
  uploadDate: string;
  size: string;
  version: string;
}

interface DocumentTableProps {
  documents: Document[];
}

function DocumentTable({ documents }: DocumentTableProps) {
  return (
    <div className='w-full overflow-hidden rounded-lg shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)]'>
      <div className='bg-white'>
        {/* === HEADER === */}
        <div className='font-inter flex items-center justify-between bg-white px-9 py-5 text-[15px] font-medium leading-[26px] text-[#111928]'>
          <div className='w-[198px]'>Tên tài liệu</div>
          <div className='w-[226px]'>Người đăng</div>
          <div className='w-[75px]'>Ngày đăng</div>
          <div className='w-[31px]'>Dung lượng</div>
          <div className='w-[76px]'>Miêu tả</div>
          <div className='w-[120px]' /> {/* Placeholder cho button */}
        </div>

        {/* === DANH SÁCH TÀI LIỆU === */}
        <div className='flex flex-col gap-2 p-2'>
          {documents.map((doc) => (
            <div
              key={doc.id}
              className='flex items-center justify-between rounded-lg bg-white px-9 py-[17px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'
            >
              <div className='flex w-[198px] flex-col gap-[3px]'>
                <div className='font-inter text-sm font-normal leading-[22px] text-[#404040]'>{doc.title}</div>
                <div className='font-inter text-sm font-normal leading-[22px] text-[#404040]'>{doc.courseCode}</div>
              </div>

              <div className='flex w-[226px] items-center gap-[13px]'>
                <div className='h-[52px] w-[52px] flex-shrink-0 rounded-full bg-gray-300' />
                <div className='flex flex-col'>
                  <div className='font-inter text-sm font-medium leading-[22px] text-[#111928]'>
                    {doc.uploader.name}
                  </div>
                  <div className='font-inter text-sm font-normal leading-[22px] text-[#637381]'>
                    {doc.uploader.email}
                  </div>
                </div>
              </div>

              <div className='font-inter w-[75px] text-sm font-normal leading-[22px] text-[#404040]'>
                {doc.uploadDate}
              </div>

              <div className='font-inter w-[31px] text-sm font-normal leading-[22px] text-[#404040]'>{doc.size}</div>

              <div className='font-inter w-[76px] text-sm font-normal leading-[22px] text-[#404040]'>{doc.version}</div>

              <button className='flex w-[120px] items-center justify-center gap-2 rounded-md border border-[#3758F9] bg-white px-5 py-[5px] transition-colors hover:bg-[#3758F9]/5'>
                <span className='font-inter text-base font-medium leading-6 text-[#3758F9]'>Tải xuống</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    semester: "251",
    course: "Giải tích 1",
    description: "",
  });

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
      <div className='h-[600px] w-[640px] rounded-[20px] border border-black bg-white shadow-lg'>
        <div className='relative flex h-[82px] items-center justify-center rounded-t-[10px] bg-[#3758F9]'>
          <h2 className='font-roboto text-[45px] font-medium leading-[52px] text-white'>Chia sẻ tài liệu</h2>
          <button
            onClick={onClose}
            className='absolute right-[29px] top-[29px] h-6 w-6 text-white transition-opacity hover:opacity-80'
          >
            <X className='h-full w-full' />
          </button>
        </div>

        <div className='px-[41px] pb-10 pt-8'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-[5px]'>
              <label className='font-roboto text-base font-medium leading-6 tracking-[0.15px] text-[#212B36]'>
                Tiêu đề
              </label>
              <input
                type='text'
                placeholder='Ôn tập cuối kì'
                value={formData.title}
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                }}
                className='font-inter h-[56px] rounded-md border border-[#DFE4EA] bg-white px-5 text-base text-[#9CA3AF] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3758F9]'
              />
            </div>

            <div className='flex gap-6'>
              <div className='flex flex-1 flex-col gap-[5px]'>
                <label className='font-roboto text-base font-medium leading-6 tracking-[0.15px] text-[#212B36]'>
                  Học kì
                </label>
                <input
                  type='text'
                  placeholder='251'
                  value={formData.semester}
                  onChange={(e) => {
                    setFormData({ ...formData, semester: e.target.value });
                  }}
                  className='font-inter h-[56px] rounded-md border border-[#DFE4EA] bg-white px-5 text-base text-[#9CA3AF] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3758F9]'
                />
              </div>

              <div className='flex flex-1 flex-col gap-[5px]'>
                <label className='font-roboto text-base font-medium leading-6 tracking-[0.15px] text-[#111928]'>
                  Môn học/Khoá học
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => {
                    setFormData({ ...formData, course: e.target.value });
                  }}
                  className='font-inter h-[56px] rounded-md border border-[#DFE4EA] bg-white px-5 text-base text-[#637381] focus:outline-none focus:ring-2 focus:ring-[#3758F9]'
                >
                  <option>Giải tích 1</option>
                  <option>Giải tích 2</option>
                  <option>Đại số tuyến tính</option>
                </select>
              </div>
            </div>

            <div className='flex flex-col gap-[5px]'>
              <label className='font-roboto text-base font-medium leading-6 tracking-[0.15px] text-[#212B36]'>
                File
              </label>
              <div className='relative flex h-[56px] items-center rounded-md border border-[#DFE4EA] bg-white px-5'>
                <span className='font-inter text-base text-[#9CA3AF]'>Drag your file here</span>
                <Upload className='absolute right-5 h-6 w-6 text-[#8C8C8C]' />
              </div>
            </div>

            <div className='flex flex-col gap-[10px]'>
              <label className='font-inter text-base font-medium leading-6 text-[#111928]'>Miêu tả</label>
              <textarea
                placeholder='Bài tập ôn tập tích phân đường loại 1 và loại 2'
                value={formData.description}
                onChange={(e) => {
                  setFormData({ ...formData, description: e.target.value });
                }}
                className='font-inter h-[80px] resize-none rounded-md border border-[#DFE4EA] bg-white p-5 text-base text-[#9CA3AF] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3758F9]'
              />
            </div>

            <button className='mx-auto mt-6 h-[50px] w-[143px] rounded-md bg-[#3758F9] px-7 py-[13px] transition-colors hover:bg-[#2947d6]'>
              <span className='font-inter text-base font-medium leading-6 text-white'>Chia sẻ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mockDocuments = [
  {
    id: "1",
    title: "Giáo trình BT Giải tích 1",
    courseCode: "MT1001",
    uploader: {
      name: "NGUYỄN VĂN A",
      email: "a.nguyen@hcmut.edu.vn",
    },
    uploadDate: "12/10/2025",
    size: "2MB",
    version: "Phiên bản 1",
  },
  {
    id: "2",
    title: "Giáo trình BT Giải tích 1",
    courseCode: "MT1001",
    uploader: {
      name: "NGUYỄN VĂN A",
      email: "a.nguyen@hcmut.edu.vn",
    },
    uploadDate: "12/10/2025",
    size: "2MB",
    version: "Phiên bản 1",
  },
  {
    id: "3",
    title: "Bài ôn tập Giải tích 1",
    courseCode: "MT1001",
    uploader: {
      name: "NGUYỄN ĐỨC TRUNG KIÊN",
      email: "kien.nguyen@hcmut.edu.vn",
    },
    uploadDate: "12/10/2025",
    size: "2MB",
    version: "Phiên bản 1",
  },
  {
    id: "4",
    title: "Đề thi cuối kì GT1 251",
    courseCode: "MT1001",
    uploader: {
      name: "Trường Đại học Bách Khoa -HCM",
      email: "bachkhoa@hcmut.edu.vn",
    },
    uploadDate: "12/10/2025",
    size: "2MB",
    version: "Phiên bản 1",
  },
];

export default function Document() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <>
      <div className='space-y-[33px]'>
        <DocumentFilters
          onShareClick={() => {
            setIsShareModalOpen(true);
          }}
        />
        <DocumentTable documents={mockDocuments} />
      </div>
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => {
          setIsShareModalOpen(false);
        }}
      />
    </>
  );
}
