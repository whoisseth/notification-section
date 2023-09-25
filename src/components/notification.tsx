/** @format */

import { colors } from "@/app/color";
import { NotificationItem } from "@/app/data";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function Notification({
  user,
  userImage,
  action,
  post,
  group,
  message,
  picture,
  timeAgo,
  read
}: NotificationItem) {
  const [animationParent] = useAutoAnimate();
  return (
    <div
      style={{ background: !read ? colors.neutral.veryLightGrayishBlue : "" }}
      className={clsx(" p-4  transition-all  rounded-md mb-4")}
    >
      <div className="flex items-start gap-2 w-full ">
        {/* user image  */}
        <Image
          width={40}
          height={40}
          src={userImage}
          alt={`Profile of ${user}`}
          className=" rounded-full mr-2"
        />

        <section className="flex flex-col w-full">
          {/* detils */}
          <div className="flex w-full  justify-between gap-2 ">
            <div ref={animationParent} className="mb-2   space-x-2 ">
              <span className="font-bold whitespace-nowrap">{user}</span>
              <span style={{ color: colors.neutral.darkGrayishBlue }}>
                {action}
              </span>

              {action === "reacted to your recent post" && (
                <span className="  cursor-pointer text-gray-500 font-bold hover:text-[hsl(219,85%,26%)] ">
                  {post}
                </span>
              )}

              {action === "has joined your group" ||
                (action === "left the group" && (
                  <span style={{ color: colors.blue }} className="font-bold">
                    {group}
                  </span>
                ))}
              {/* red notification */}
              {read === false && (
                <span
                  style={{ background: colors.red }}
                  className="h-2 w-2 min-2 inline-block rounded-full "
                />
              )}
            </div>

            {picture && (
              <Image
                width={50}
                height={50}
                src={picture ?? ""}
                alt="Commented on your picture"
                className=" h-12 w-12  rounded-lg"
              />
            )}
          </div>
          {/* time */}
          <span
            style={{ color: colors.neutral.grayishBlue }}
            className="text-gray-600 text-sm "
          >
            {timeAgo}
          </span>
          {action === "sent you a private message" && (
            <p className="border rounded p-3 mt-2  text-gray-500 hover:bg-blue-100 cursor-pointer">
              {message}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
