export default function Home() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      
      {/* Phần 1: Hero Section & Mục tiêu hệ thống */}
      <section className="flex flex-col lg:flex-row gap-8 mb-12">
        
        {/* Cột trái: Giới thiệu */}
        <div className="flex-1 lg:w-3/5">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Chương trình Tutor/Mentor - Hỗ trợ toàn diện cho sinh viên HCMUT
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Tutor/Mentor đồng hành cùng sinh viên trong quá trình học tập, hướng
            dẫn học thuật, phát triển kỹ năng và định hướng nghề nghiệp. Hệ
            thống giúp quản lý phân công, theo dõi tiến trình, và đánh giá hiệu
            quả hoạt động.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Đăng ký
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Tìm hiểu thêm
            </button>
          </div>
        </div>

        {/* Cột phải: Box Mục tiêu */}
        <div className="lg:w-2/5 bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Mục tiêu hệ thống
          </h2>
          <p className="text-gray-600 mb-4">
            Thiết kế để quản lý linh hoạt, bảo mật, và mở rộng — hỗ trợ
            phân công Tutor theo lớp/khóa, theo dõi buổi hướng dẫn, lưu trữ
            đánh giá và báo cáo thống kê cho nhà trường.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Quản lý Tutor & Mentor (thanh toán, phân công)</li>
            <li>Đăng ký & ghép nhóm sinh viên</li>
            <li>Ghi nhận tiến trình & đánh giá</li>
          </ul>
        </div>
      </section>

      {/* Phần 2: Thống kê */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
          <h3 className="text-5xl font-bold text-blue-600 mb-2">120+</h3>
          <p className="text-lg text-gray-700">Tutor & Mentor</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
          <h3 className="text-5xl font-bold text-blue-600 mb-2">1,300+</h3>
          <p className="text-lg text-gray-700">Sinh viên tham gia</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
          <h3 className="text-5xl font-bold text-blue-600 mb-2">95%</h3>
          <p className="text-lg text-gray-700">Mức hài lòng</p>
        </div>
      </section>

      {/* Phần 3: Tính năng chính */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Tính năng chính
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-5xl">
          Hệ thống được thiết kế để đáp ứng quy trình thực tế của nhà trường, từ phân công, theo dõi đến báo cáo và đánh giá.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">
              Quản lý Tutor & Mentor
            </h4>   
            <p className="text-gray-600">
              Hồ sơ, lịch trực, phân công theo môn/học phần, và lịch sử hoạt
              động. Cho phép phân quyền (giảng viên, NCS, sinh viên năm
              trên).
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">
              Ghép nhóm & Đăng ký
            </h4>
            <p className="text-gray-600">
              Sinh viên đăng ký theo nhu cầu — hệ thống tự động ghép nhóm theo
              trình độ, lịch học và ưu tiên Tutor.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-blue-700 mb-2">
              Theo dõi tiến trình
            </h4>
            <p className="text-gray-600">
              Ghi chú buổi học, kết quả, bài tập giao và tiến độ cải thiện;
              báo cáo trực quan cho cán bộ quản lý.
            </p>
          </div>
        </div>
      </section>

      {/* Phần 4: Call to Action (CTA) */}
      <section className="bg-blue-100 text-white p-8 rounded-lg flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-3xl font-bold mb-1 text-blue-600">
            Muốn tham gia chương trình?
          </h3>
          <p className="text-gray-700">
            Sinh viên có thể đăng ký để được ghép Tutor/ Mentor phù hợp —
            nhanh chóng và minh bạch.
          </p>
        </div>
        <button className="bg-blue-600 text-white-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors mt-4 md:mt-0 flex-shrink-0">
          Đăng ký ngay
        </button>
      </section>
      {/*
        PHẦN FOOTER 
      */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start">
          
          {/* Cột trái: Thông tin trường */}
          <div>
            <p className="font-bold text-gray-800">
              Trường ĐH Bách Khoa — ĐHQG TP.HCM
            </p>
            <p className="text-sm text-gray-600">
              Phòng Công tác Sinh viên — Chương trình Tutor/Mentor
            </p>
          </div>
          
          {/* Cột phải: Liên hệ */}
          <div className="text-sm text-gray-600 mt-4 md:mt-0 md:text-right">
            <p>Email: xxxxx@hcmut.edu.vn</p>
            <p>Hotline: (028) 3724-xxxx</p>
          </div>

        </div>
      </footer>      
    </div>
  );
}
