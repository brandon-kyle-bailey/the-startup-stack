"use client";
import { handleOnClick } from "@/app/(landing)/actions";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(undefined);
  return (
    <div>
      <p>User:</p>
      {JSON.stringify(user)}
      <Button
        onClick={async () => {
          const user = await handleOnClick();
          setUser(user);
        }}
      >
        Click me
      </Button>
    </div>
  );
}
