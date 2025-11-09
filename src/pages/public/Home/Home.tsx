export default function Home() {
  return (
    <>
      <div className='bg-blue-50 p-6'>
        {/* Phần 1: Hero Section & Mục tiêu hệ thống */}
        <section className='mb-12 flex flex-col gap-8 lg:flex-row'>
          {/* Cột trái: Giới thiệu */}
          <div className='flex-1 lg:w-3/5'>
            <h1 className='mb-4 text-4xl font-bold text-blue-800'>
              Chương trình Tutor/Mentor - Hỗ trợ toàn diện cho sinh viên HCMUT
            </h1>
            <p className='mb-6 text-lg text-gray-600'>
              Tutor/Mentor đồng hành cùng sinh viên trong quá trình học tập, hướng dẫn học thuật, phát triển kỹ năng và
              định hướng nghề nghiệp. Hệ thống giúp quản lý phân công, theo dõi tiến trình, và đánh giá hiệu quả hoạt
              động.
            </p>
            <div className='flex gap-4'>
              <button className='rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700'>
                Đăng ký
              </button>
              <button className='rounded-lg border border-blue-600 px-6 py-2 font-semibold text-blue-600 transition-colors hover:bg-blue-50'>
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Cột phải: Box Mục tiêu */}
          <div className='rounded-2xl border border-gray-200 bg-white p-6 shadow-lg lg:w-2/5'>
            <h2 className='mb-4 text-2xl font-semibold text-blue-800'>Mục tiêu hệ thống</h2>
            <p className='mb-4 text-gray-600'>
              Thiết kế để quản lý linh hoạt, bảo mật, và mở rộng — hỗ trợ phân công Tutor theo lớp/khóa, theo dõi buổi
              hướng dẫn, lưu trữ đánh giá và báo cáo thống kê cho nhà trường.
            </p>
            <ul className='list-disc space-y-2 pl-5 text-gray-600'>
              <li>Quản lý Tutor & Mentor (thanh toán, phân công)</li>
              <li>Đăng ký & ghép nhóm sinh viên</li>
              <li>Ghi nhận tiến trình & đánh giá</li>
            </ul>
          </div>
        </section>

        {/* Phần 2: Thống kê */}
        <section className='mb-16 grid grid-cols-1 gap-6 md:grid-cols-3'>
          <div className='rounded-lg border border-gray-100 bg-white p-6 text-center shadow-md'>
            <h3 className='mb-2 text-5xl font-bold text-blue-600'>120+</h3>
            <p className='text-lg text-gray-700'>Tutor & Mentor</p>
          </div>
          <div className='rounded-lg border border-gray-100 bg-white p-6 text-center shadow-md'>
            <h3 className='mb-2 text-5xl font-bold text-blue-600'>1,300+</h3>
            <p className='text-lg text-gray-700'>Sinh viên tham gia</p>
          </div>
          <div className='rounded-lg border border-gray-100 bg-white p-6 text-center shadow-md'>
            <h3 className='mb-2 text-5xl font-bold text-blue-600'>95%</h3>
            <p className='text-lg text-gray-700'>Mức hài lòng</p>
          </div>
        </section>

        {/* Phần 3: Tính năng chính */}
        <section className='mb-1'>
          <h2 className='mb-4 text-3xl font-bold text-blue-800'>Tính năng chính</h2>
          <p className='mb-10 max-w-5xl text-lg text-gray-600'>
            Hệ thống được thiết kế để đáp ứng quy trình thực tế của nhà trường, từ phân công, theo dõi đến báo cáo và
            đánh giá.
          </p>
          <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-3'>
            <div className='rounded-lg border border-gray-100 bg-white p-6 shadow-lg'>
              <h4 className='mb-2 text-xl font-semibold text-blue-700'>Quản lý Tutor & Mentor</h4>
              <p className='text-gray-600'>
                Hồ sơ, lịch trực, phân công theo môn/học phần, và lịch sử hoạt động. Cho phép phân quyền (giảng viên,
                NCS, sinh viên năm trên).
              </p>
            </div>
            <div className='rounded-lg border border-gray-100 bg-white p-6 shadow-lg'>
              <h4 className='mb-2 text-xl font-semibold text-blue-700'>Ghép nhóm & Đăng ký</h4>
              <p className='text-gray-600'>
                Sinh viên đăng ký theo nhu cầu — hệ thống tự động ghép nhóm theo trình độ, lịch học và ưu tiên Tutor.
              </p>
            </div>
            <div className='rounded-lg border border-gray-100 bg-white p-6 shadow-lg'>
              <h4 className='mb-2 text-xl font-semibold text-blue-700'>Theo dõi tiến trình</h4>
              <p className='text-gray-600'>
                Ghi chú buổi học, kết quả, bài tập giao và tiến độ cải thiện; báo cáo trực quan cho cán bộ quản lý.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className='bg-white-100 p-8'>
        {/* Phần 4: Call to Action (CTA) */}
        <section className='flex flex-col items-center justify-between rounded-lg bg-blue-100 p-8 text-white md:flex-row'>
          <div>
            <h3 className='mb-1 text-3xl font-bold text-blue-600'>Muốn tham gia chương trình?</h3>
            <p className='text-gray-700'>
              Sinh viên có thể đăng ký để được ghép Tutor/ Mentor phù hợp — nhanh chóng và minh bạch.
            </p>
          </div>
          <button className='text-white-600 mt-4 flex-shrink-0 rounded-lg bg-blue-600 px-6 py-2 font-semibold transition-colors hover:bg-blue-800 md:mt-0'>
            Đăng ký ngay
          </button>
        </section>
        {/*
        PHẦN FOOTER 
      */}
        <footer className='mt-16 border-t border-gray-200 pt-8'>
          <div className='flex flex-col items-start justify-between md:flex-row'>
            {/* Cột trái: Thông tin trường */}
            <div>
              <p className='font-bold text-gray-800'>Trường ĐH Bách Khoa — ĐHQG TP.HCM</p>
              <p className='text-sm text-gray-600'>Phòng Công tác Sinh viên — Chương trình Tutor/Mentor</p>
            </div>

            {/* Cột phải: Liên hệ */}
            <div className='mt-4 text-sm text-gray-600 md:mt-0 md:text-right'>
              <p>Email: xxxxx@hcmut.edu.vn</p>
              <p>Hotline: (028) 3724-xxxx</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
