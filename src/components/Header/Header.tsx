import { FaSearch } from "react-icons/fa";
import { FiBell, FiMessageSquare } from "react-icons/fi";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/Logo-DH-Bach-Khoa-HCMUT.webp";
import path from "../../constants/path";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className='flex h-full w-full items-center justify-center bg-gradient-to-r from-[#FAF7F0] to-[#EAE7E1]'>
        <div className='flex h-[48px] w-5/6 items-end justify-between'>
          <div className='flex h-5/6 w-2/5 items-center justify-between rounded-lg border bg-white'>
            <input
              type='text'
              placeholder='Search...'
              className='h-full w-5/6 flex-grow rounded-l-lg border-none pl-3 focus:outline-none'
            />
            <FaSearch className='mr-1 cursor-pointer text-xl text-gray-400' />
          </div>
          <div className='flex h-full items-center justify-center gap-2'>
            <Link to={path.NOTIFICATION}>
              <FiBell />
            </Link>
            <FiMessageSquare />
            <img src={logo} alt='logo HCMUT' className='h-[42px] w-[42px] rounded-full bg-gray-200' />
            <ChevronDown className='font-normal' />
          </div>
        </div>
      </div>
    </>
  );
}
