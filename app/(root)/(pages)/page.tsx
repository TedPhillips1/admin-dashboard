import React from "react";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <SignedIn>
        <UserButton afterSignOutUrl='/' />
      </SignedIn>

      <SignedOut>
        <Button asChild>
          <Link href='/sign-in'>Sign In</Link>
        </Button>
      </SignedOut>
    </div>
  );
};

export default Home;
