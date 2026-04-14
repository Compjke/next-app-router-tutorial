'use client';

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
      </>
    );
  }
  return (
    <>
      Not signed in <br />
    </>
  );
};