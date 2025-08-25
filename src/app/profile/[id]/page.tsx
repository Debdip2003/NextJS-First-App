"use client";

import { use, useEffect, useState } from "react";

export default function UserProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/users/${id}`);
        console.log(res.url);
        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  if (!user) {
    return <p className="p-6">Loading user...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{user.username}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}
