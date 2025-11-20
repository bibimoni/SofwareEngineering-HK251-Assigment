import { useState } from "react";
import CreateGroupModal from "./Components/CreateGroupModal";
// 1. INTERFACE
interface Group {
  id: number;
  groupName: string;
  currentMember: string[];
  quantity: number;
}

// Link avt
const avatars = {
  avatar1:
    "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar2:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar3:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  avatar4:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar5:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar6:
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar7:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar8:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar9:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar10:
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar11:
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar12:
    "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar13:
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar14:
    "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  avatar15:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

// Database
const initialGroupData: Group[] = [
  {
    id: 1,
    groupName: "Hihi haha",
    currentMember: [avatars.avatar1, avatars.avatar2, avatars.avatar3, avatars.avatar4, avatars.avatar5],
    quantity: 5,
  },
  {
    id: 2,
    groupName: "3 thằng ăn hại",
    currentMember: [avatars.avatar6, avatars.avatar7, avatars.avatar8],
    quantity: 3,
  },
  { id: 3, groupName: "2 anh em", currentMember: [avatars.avatar9, avatars.avatar10], quantity: 2 },
  { id: 4, groupName: "BFF", currentMember: [avatars.avatar11, avatars.avatar12], quantity: 2 },
  { id: 5, groupName: "Mô hình hóa Group", currentMember: [avatars.avatar13, avatars.avatar14], quantity: 2 },
  { id: 6, groupName: "Alone", currentMember: [avatars.avatar15], quantity: 1 },
];

// 3. Component Row
interface GroupRowProps {
  group: Group;
  isLastRow: boolean;
}

function GroupRow({ group, isLastRow }: GroupRowProps) {
  const rowClasses = `grid grid-cols-10 gap-4 items-center px-6 py-4 hover:bg-gray-50 ${
    isLastRow ? "" : "border-b border-gray-200"
  }`;

  return (
    <div className={rowClasses}>
      {/* Tên Nhóm */}
      <div className='col-span-3 font-semibold text-gray-900'>{group.groupName}</div>

      {/* Thành viên */}
      <div className='col-span-4 flex -space-x-2 overflow-hidden'>
        {group.currentMember.map((avatarUrl, index) => (
          <img
            key={index}
            className='inline-block h-8 w-8 rounded-full ring-2 ring-white'
            src={avatarUrl}
            alt={`Thành viên ${String(index + 1)}`}
          />
        ))}
      </div>

      {/* Số lượng */}
      <div className='col-span-1 flex justify-center text-gray-700'>{group.quantity}</div>

      {/* Nút Hành động */}
      <div className='col-span-2 flex justify-end space-x-2'>
        <button className='rounded-md border border-red-500 px-4 py-1.5 text-sm font-medium text-red-500 hover:bg-red-50'>
          Rời
        </button>
        <button className='rounded-md border border-green-600 px-4 py-1.5 text-sm font-medium text-green-600 hover:bg-green-50'>
          Thêm
        </button>
      </div>
    </div>
  );
}

export default function Group() {
  const [groups, setGroups] = useState<Group[]>(initialGroupData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateNewGroup = (newGroup: Group) => {
    setGroups([newGroup, ...groups]);
    setIsModalOpen(false);
  };
  return (
    <main className='h-full w-full bg-gray-50 p-8'>
      <div className='overflow-hidden rounded-lg bg-white shadow-md'>
        <div className='grid grid-cols-10 items-center gap-4 border-b border-gray-200 bg-gray-50 px-6 py-4'>
          <div className='col-span-3 text-sm font-medium uppercase text-gray-500'>Tên</div>
          <div className='col-span-4 text-sm font-medium uppercase text-gray-500'>Thành viên hiện tại</div>
          <div className='col-span-1 flex justify-center text-sm font-medium uppercase text-gray-500'>Số lượng</div>
          <div className='col-span-2'></div>
        </div>

        <div>
          {groups.map((group, index) => (
            <GroupRow key={group.id} group={group} isLastRow={index === groups.length - 1} />
          ))}
        </div>
      </div>

      <div className='mt-8 flex justify-end'>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className='rounded-full border border-blue-600 bg-white px-6 py-2 font-semibold text-blue-600 transition-colors hover:bg-blue-50'
        >
          Tạo nhóm
        </button>
      </div>
      {isModalOpen && (
        <CreateGroupModal
          onClose={() => {
            setIsModalOpen(false);
          }}
          onCreate={handleCreateNewGroup}
        />
      )}
    </main>
  );
}
