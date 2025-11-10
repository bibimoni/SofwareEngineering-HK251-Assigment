import { useState } from "react";
import TutorCard from "../../../components/TutorCard/TutorCard";

interface Tutor {
  id: number;
  name: string;
  email: string;
  description: string;
  subjects: string[];
}

const mockTutors: Tutor[] = [
  {
    id: 1,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "Sinh viên năm 3 ngành Khoa học máy tính thành tích tốt với GPA 3.2, có kinh nghiệm trong giảng dạy.",
    subjects: ["Giải tích 1", "Vật lý 1", "Kĩ thuật lập trình", "DSA"],
  },
  {
    id: 2,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "SInh viên ngành Cơ khí hiện đang là năm 4, nếu bạn có vấn đề gì hãy liên hệ ngay cho tôi",
    subjects: ["Giải tích 2", "Vật lý 1", "Sức bền vật liệu", "Vẽ kĩ thuật"],
  },
  {
    id: 3,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "SInh viên năm 3 ngành hoá chuyên ngành hoá vô cơ, GPA 4.0 và kinh nghiệm ôn thi nước rút",
    subjects: ["Hoá dầu", "Hoá vô cơ", "Quá trình thiết bị", "Hoá hữu cơ"],
  },
  {
    id: 4,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "Sinh viên năm 3 ngành Khoa học máy tính thành tích tốt với GPA 3.2, có kinh nghiệm trong giảng dạy.",
    subjects: ["Giải tích 1", "Vật lý 1", "Kĩ thuật lập trình", "DSA"],
  },
  {
    id: 5,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "Sinh viên năm 3 ngành Khoa học máy tính thành tích tốt với GPA 3.2, có kinh nghiệm trong giảng dạy.",
    subjects: ["Giải tích 1", "Vật lý 1", "Kĩ thuật lập trình", "DSA"],
  },
  {
    id: 6,
    name: "NGUYỄN ĐỨC TRUNG KIÊN",
    email: "kien.nguyen@hcmut.edu.vn",
    description: "Sinh viên năm 3 ngành Khoa học máy tính thành tích tốt với GPA 3.2, có kinh nghiệm trong giảng dạy.",
    subjects: ["Giải tích 1", "Vật lý 1", "Kĩ thuật lập trình", "DSA"],
  },
];

export default function Tutor() {
  const [searchSubject, setSearchSubject] = useState("");
  const [searchInstructor, setSearchInstructor] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchTime, setSearchTime] = useState("");
  return (
    <>
      <div className='px-4 py-8 sm:px-6 lg:px-[42px]'>
        <div className='relative mx-auto w-full max-w-[1125px]'>
          <div className='rounded-md bg-[#3758F9] px-[13px] py-2 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <div className='flex flex-col gap-[5px]'>
                <label className='font-roboto text-sm font-medium leading-5 tracking-[0.1px] text-white'>Môn học</label>
                <input
                  type='text'
                  placeholder='Tên môn học/Mã môn học'
                  value={searchSubject}
                  onChange={(e) => {
                    setSearchSubject(e.target.value);
                  }}
                  className='h-[48px] rounded-md border-2 border-[#3758F9] px-5 text-base transition-colors placeholder:text-[#9CA3AF] focus:border-[#3758F9] focus:outline-none'
                />
              </div>

              <div className='flex flex-col gap-[5px]'>
                <label className='font-roboto text-sm font-medium leading-5 tracking-[0.1px] text-white'>
                  Giảng viên
                </label>
                <input
                  type='text'
                  placeholder='Tên giảng viên muốn tìm'
                  value={searchInstructor}
                  onChange={(e) => {
                    setSearchInstructor(e.target.value);
                  }}
                  className='h-[48px] rounded-md border-2 border-[#3758F9] px-5 text-base transition-colors placeholder:text-[#9CA3AF] focus:border-[#3758F9] focus:outline-none'
                />
              </div>

              <div className='flex flex-col gap-[5px]'>
                <label className='font-roboto text-sm font-medium leading-5 tracking-[0.1px] text-white'>Ngày</label>
                <input
                  type='text'
                  placeholder='dd/mm/yyyy'
                  value={searchDate}
                  onChange={(e) => {
                    setSearchDate(e.target.value);
                  }}
                  className='h-[48px] rounded-md border-2 border-[#3758F9] px-5 text-base transition-colors placeholder:text-[#9CA3AF] focus:border-[#3758F9] focus:outline-none'
                />
              </div>

              <div className='flex flex-col gap-[5px]'>
                <label className='font-roboto text-sm font-medium leading-5 tracking-[0.1px] text-white'>
                  Thời gian
                </label>
                <input
                  type='text'
                  placeholder='GMT+7'
                  value={searchTime}
                  onChange={(e) => {
                    setSearchTime(e.target.value);
                  }}
                  className='h-[48px] rounded-md border-2 border-[#3758F9] px-5 text-base transition-colors placeholder:text-[#9CA3AF] focus:border-[#3758F9] focus:outline-none'
                />
              </div>
            </div>
          </div>

          <div className='mt-[54px] grid grid-cols-1 justify-items-center gap-x-[23px] gap-y-[28px] md:grid-cols-2 md:justify-items-start xl:grid-cols-3'>
            {mockTutors.map((tutor) => (
              <TutorCard
                key={tutor.id}
                name={tutor.name}
                email={tutor.email}
                description={tutor.description}
                subjects={tutor.subjects}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
