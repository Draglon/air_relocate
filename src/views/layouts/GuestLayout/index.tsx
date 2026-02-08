"use client";
import GuestHeader from "@/views/layouts/headers/GuestHeader";

type Props = {
  children: React.ReactNode;
};

const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <div className="page">
        <GuestHeader />
        <main className="page__main">{children}</main>
      </div>
    </>
  );
};

export default GuestLayout;
