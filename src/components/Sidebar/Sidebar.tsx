import logo from "../../assets/Logo-DH-Bach-Khoa-HCMUT.webp";
import Tag from "./components/Tag";
import path from "../../constants/path";
export default function Sidebar() {
  return (
    <>
      <div className='flex h-full w-full flex-col pl-3 pt-1'>
        <div className='flex h-16 w-full'>
          <img src={logo} alt='logo HCMUT' className='h-16 w-16' />
          <div className='ml-2 flex h-full w-2 flex-col font-bold leading-5'>Tutor Support System</div>
        </div>
        <div className='mt-3 w-full'>
          <Tag tagName='Home' path={path.HOME} />
          <Tag tagName='Lịch học' path={path.CALENDAR} />
          <Tag tagName='Nhóm' path={path.GROUP} />
          <Tag tagName='Tutor' path={path.TUTOR} />
          <Tag tagName='Phản hồi' path={path.RESPONSE} />
          <Tag tagName='Tài liệu' path={path.DOCUMENT} />
        </div>
      </div>
    </>
  );
}
