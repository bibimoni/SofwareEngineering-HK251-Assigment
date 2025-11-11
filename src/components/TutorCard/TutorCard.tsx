interface TutorCardProps {
  name: string;
  email: string;
  description: string;
  subjects: string[];
  avatarUrl?: string;
}

export default function TutorCard({ name, email, description, subjects, avatarUrl }: TutorCardProps) {
  return (
    <div className='flex min-h-[290px] w-full flex-col rounded-[10px] border border-black bg-white p-[25px] shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)]'>
      <div className='mb-4 flex items-start gap-[23px]'>
        <div className='h-[80px] w-[80px] flex-shrink-0 rounded-full bg-gray-300'>
          {avatarUrl && <img src={avatarUrl} alt={name} className='h-full w-full rounded-full object-cover' />}
        </div>
        <div className='flex min-w-0 flex-col justify-center'>
          <h3 className='break-words text-sm font-medium leading-[22px] text-[#111928]'>{name}</h3>
          <p className='break-words text-sm leading-[22px] text-[#637381]'>{email}</p>
        </div>
      </div>

      <p className='font-roboto mb-2 line-clamp-3 text-sm leading-5 tracking-[0.25px] text-[#111928]'>{description}</p>

      <div className='font-roboto mb-2 text-sm leading-5 tracking-[0.25px] text-[#111928]'>Môn học</div>

      <div className='mb-4 flex flex-wrap gap-2'>
        {subjects.slice(0, 4).map((subject, index) => (
          <span
            key={index}
            className='flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-[#3758F9] bg-white px-4 py-2 text-sm font-medium leading-6 text-[#3758F9] transition-colors hover:bg-[#E1E8FF]'
          >
            {subject}
          </span>
        ))}
      </div>

      <button className='mx-auto mt-4 flex h-[36px] w-full max-w-[214px] items-center justify-center rounded-md border border-[#3758F9] bg-[#E1E8FF] text-base font-medium leading-6 text-[#637381] transition-colors hover:bg-[#3758F9] hover:text-white'>
        Đăng ký
      </button>
    </div>
  );
}
