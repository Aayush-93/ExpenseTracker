import React, { useState } from "react";
import { Bell, XCircle } from "lucide-react";

const Notification = () => {
  // Sample Notifications (Replace with Redux or API later)
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New Expense Added: Rs. 500 for Food", type: "expense" },
    {
      id: 2,
      message: "Expense Updated: Rs. 200 for Transport",
      type: "update",
    },
    { id: 3, message: "Total Expense exceeded Rs. 10,000", type: "alert" },
  ]);

  // Remove a notification
  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div className="w-96 bg-white shadow-lg rounded-lg p-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-2">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <Bell className="text-blue-500" /> Expense Notifications
        </h2>
      </div>

      {/* Notifications List */}
      <div className="mt-3 space-y-2">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex justify-between items-center p-3 border rounded-lg shadow-sm bg-gray-100"
            >
              <p className="text-sm">{notification.message}</p>
              <button onClick={() => removeNotification(notification.id)}>
                <XCircle className="w-5 h-5 text-red-500 hover:text-red-700" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-4">
            No new notifications.
          </p>
        )}
      </div>
    </div>
  );
};

export default Notification;
