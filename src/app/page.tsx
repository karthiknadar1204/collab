import { SignedIn, SignedOut, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
      <SignedOut>
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default page;
