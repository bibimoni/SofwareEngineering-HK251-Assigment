import React, { useState } from "react";
import { Bell, Clock, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface NotificationItem {
  id: number;
  message: string;
  timestamp: string;
  isRead: boolean;
  type: "assignment" | "meeting" | "system" | "general";
}

//Mock Data
const mockNotifications: NotificationItem[] = [
  {
    id: 1,
    message: 'Giảng viên Lê Đình Thuận đã giao bài tập "Báo cáo cuối kỳ" cho bạn.',
    timestamp: "2 giờ trước",
    isRead: false,
    type: "assignment",
  },
  {
    id: 2,
    message: 'Cuộc họp nhóm "Hệ cơ sở dữ liệu" sẽ bắt đầu trong 15 phút.',
    timestamp: "30 phút trước",
    isRead: false,
    type: "meeting",
  },
  {
    id: 3,
    message: 'Tài liệu "Hướng dẫn React" đã được Giảng viên Duy Tiến chia sẻ.',
    timestamp: "Hôm qua, 10:00 AM",
    isRead: true,
    type: "general",
  },
  {
    id: 4,
    message: "Hệ thống đã cập nhật thành công hồ sơ của bạn.",
    timestamp: "05/04/2024",
    isRead: true,
    type: "system",
  },
];

//icon and color for each notification type
const getNotificationTypeConfig = (type: NotificationItem["type"]) => {
  switch (type) {
    case "assignment":
      return { Icon: AlertTriangle, color: "text-red-500 bg-red-100" };
    case "meeting":
      return { Icon: Bell, color: "text-blue-500 bg-blue-100" };
    case "system":
      return { Icon: CheckCircle, color: "text-green-500 bg-green-100" };
    case "general":
    default:
      return { Icon: Info, color: "text-gray-500 bg-gray-100" };
  }
};

// Component from each notification item
const NotificationItem: React.FC<{
  notification: NotificationItem;
  onMarkAsRead: (id: number) => void;
}> = ({ notification, onMarkAsRead }) => {
  const { Icon, color } = getNotificationTypeConfig(notification.type);

  //Style for read and unread notification
  const itemStyle = notification.isRead
    ? "bg-white text-gray-500 border-l-4 border-gray-200 opacity-75"
    : "bg-white hover:bg-gray-50 text-gray-800 font-medium border-l-4 border-blue-500 shadow-md";

  return (
    <div className={`mb-3 flex items-center rounded-lg p-4 transition-all duration-300 ${itemStyle}`} role='alert'>
      {/* Icon */}
      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${color} mr-4`}>
        <Icon className='h-5 w-5' />
      </div>

      {/* Nội dung */}
      <div className='flex-grow'>
        <p className='text-sm leading-snug'>{notification.message}</p>
        <div className='mt-1 flex items-center text-xs text-gray-400'>
          <Clock className='mr-1 h-3 w-3' />
          <span>{notification.timestamp}</span>
        </div>
      </div>

      {/* Hành động (Đánh dấu đã đọc) */}
      {!notification.isRead && (
        <button
          onClick={() => {
            onMarkAsRead(notification.id);
          }}
          className='ml-4 flex-shrink-0 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-200'
        >
          Đã đọc
        </button>
      )}
      {notification.isRead && <div className='ml-4 flex-shrink-0 text-xs text-gray-400'>Đã đọc</div>}
    </div>
  );
};

export default function Notification() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const handleMarkAsRead = (id: number) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, isRead: true } : notif)));
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className='min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8'>
      {/* Header */}
      <div className='mx-auto mb-6 max-w-4xl'>
        <h1 className='flex items-center text-3xl font-extrabold text-gray-900'>
          <Bell className='mr-3 h-7 w-7 text-blue-600' />
          Thông báo của bạn
        </h1>
        <p className='mt-2 text-sm text-gray-600'>
          Bạn có <span className='font-bold text-blue-600'>{unreadCount}</span> thông báo chưa đọc.
        </p>
        <button
          onClick={() => {
            setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
          }}
          disabled={unreadCount === 0}
          className='mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-blue-600 disabled:bg-gray-400'
        >
          Đánh dấu tất cả đã đọc
        </button>
      </div>

      <div className='mx-auto max-w-4xl'>
        {notifications.length === 0 ? (
          <div className='rounded-xl bg-white p-10 text-center shadow-lg'>
            <Bell className='mx-auto h-12 w-12 text-gray-400' />
            <h3 className='mt-2 text-lg font-medium text-gray-900'>Không có thông báo mới</h3>
            <p className='mt-1 text-sm text-gray-500'>Bạn đã xem tất cả các thông báo gần đây.</p>
          </div>
        ) : (
          <div>
            {notifications.filter((n) => !n.isRead).length > 0 && (
              <div className='mb-6'>
                <h2 className='mb-3 text-xl font-semibold text-gray-700'>Chưa đọc ({unreadCount})</h2>
                {notifications
                  .filter((n) => !n.isRead)
                  .map((notif) => (
                    <NotificationItem key={notif.id} notification={notif} onMarkAsRead={handleMarkAsRead} />
                  ))}
              </div>
            )}

            {notifications.filter((n) => n.isRead).length > 0 && (
              <div className='mt-8 border-t border-gray-200 pt-6'>
                <h2 className='mb-3 text-xl font-semibold text-gray-700'>Đã đọc</h2>
                {notifications
                  .filter((n) => n.isRead)
                  .map((notif) => (
                    <NotificationItem key={notif.id} notification={notif} onMarkAsRead={handleMarkAsRead} />
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
