import logo from "../../../assets/Logo-DH-Bach-Khoa-HCMUT.webp";
export default function Login() {
  return (
    <>
      <div className='flex h-screen w-full items-center justify-center'>
        <div className='flex h-[550px] w-8/12 shadow-lg'>
          {/* Login form */}
          <form className='flex w-1/2 items-center justify-center'>
            <div className='flex h-2/3 w-2/3 flex-col justify-between'>
              <div className='flex items-center justify-between'>
                <h2 className='text-2xl'>
                  <strong>Đăng nhập</strong>
                </h2>
                <img src={logo} alt='logo HCMUT' className='h-16 w-16' />
              </div>
              <div>
                <label>Tên đăng nhập</label>
                <input
                  type='text'
                  className='mt-1 w-full rounded-lg border border-gray-400 px-2 py-1 outline-none transition-all duration-200 focus:border-[#3758F9] focus:ring-1 focus:ring-[#3758F9]'
                />
              </div>
              <div>
                <label>Mật khẩu</label>
                <input
                  type='password'
                  className='mt-1 w-full rounded-lg border border-gray-400 px-2 py-1 outline-none transition-all duration-200 focus:border-[#3758F9] focus:ring-1 focus:ring-[#3758F9]'
                />
              </div>
              <div className='flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#3758F9] py-2 text-white transition-all duration-200 hover:bg-[#3758F9]/95'>
                Đăng nhập
              </div>
              <p className='text-gray-500'>Quên mật khẩu?</p>
            </div>
          </form>
          <div className='flex w-1/2 items-end bg-[#3758F9] text-xl font-semibold text-white'>
            <div className='mb-16 ml-14'>
              Tutor <br /> Support <br /> System
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
