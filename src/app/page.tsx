/** @format */
"use client";

import { NotificationItem, socialMediaActivity } from "./data";
import { Notification } from "@/components/notification";
import { colors } from "./color";
import { useState } from "react";

export default function Home() {
  const [notifications, setNotification] =
    useState<NotificationItem[]>(socialMediaActivity);

  function handleMarkAsRead() {
    setNotification(
      notifications.map((notification) => ({ ...notification, read: true }))
    );
  }

  return (
    <main
      style={{ background: colors.neutral.lightGrayishBlue1 }}
      className="min-h-screen w-full flex items-center justify-center  sm:p-10  "
    >
      <div className="max-w-2xl mx-auto   pt-8 bg-white rounded-md px-2 sm:px-10 ">
        {/* notification and mark all read */}
        <section className="flex justify-between items-center  mb-6 ">
          <h1 className="text-2xl flex gap-3 items-center font-semibold ">
            <span>Notifications</span>
            <span
              style={{ background: colors.blue }}
              className="text-white px-[10px]  rounded-md text-lg transition-all"
            >
              {/* count unread message  */}
              {
                notifications.filter((notification) => !notification.read)
                  .length
              }
            </span>
          </h1>
          <button
            type="button"
            onClick={handleMarkAsRead}
            className=" hover:text-[hsl(219,85%,26%)]  text-gray-500   "
          >
            Mark all as read
          </button>
        </section>

        {notifications.map((notification, index) => (
          <Notification
            read={notification.read}
            key={index}
            action={notification.action}
            timeAgo={notification.timeAgo}
            user={notification.user}
            userImage={notification.userImage} // Pass the userImage property
            group={notification.group}
            message={notification.message}
            picture={notification.picture}
            post={notification.post}
          />
        ))}
      </div>
    </main>
  );
}
