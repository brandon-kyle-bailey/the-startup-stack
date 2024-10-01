"use client";
import {
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} from "@/app/(auth)/actions";
import { Button } from "@/components/ui/button";
import { UserDto } from "@/lib/interface/dtos/users/user.dto";
import { useState } from "react";

export default function Page() {
  const [user, setUser] = useState<UserDto | undefined>(undefined);
  const [action, setAction] = useState<string | undefined>(undefined);
  return (
    <div>
      {user && (
        <>
          <p>{action}</p>
          <p>{user.id}</p>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </>
      )}
      <Button
        onClick={async () => {
          const user = await getUserById({ id: 1 });
          setUser(user);
          setAction("get by id result");
        }}
      >
        Get user by id
      </Button>

      <Button
        onClick={async () => {
          const user = await createUser({
            email: "blah@test.com",
            name: "auto created user",
            password_hash: "test",
          });
          setUser(user);
          setAction("create result");
        }}
      >
        Create user
      </Button>
      <Button
        onClick={async () => {
          const user = await updateUser({
            id: 1,
            email: "randomtest1@test.com",
          });
          setUser(user);

          setAction("update result");
        }}
      >
        Update user email
      </Button>
      <Button
        onClick={async () => {
          const user = await deleteUser({ id: 1 });
          setUser(user);
          setAction("delete result");
        }}
      >
        Delete user
      </Button>
    </div>
  );
}
