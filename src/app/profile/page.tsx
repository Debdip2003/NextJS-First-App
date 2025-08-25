"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.text();
        console.log(data);
        setUsers(JSON.parse(data));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user._id} className="border p-3 rounded">
              <Link href={`/profile/${user._id}`}>
                <span className="text-blue-500 cursor-pointer">
                  {user.username}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
