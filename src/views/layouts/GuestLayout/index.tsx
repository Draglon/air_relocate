"use client";
import GuestHeader from "@/views/layouts/headers/GuestHeader";
import GuestFooter from "@/views/layouts/footers/GuestFooter";

type Props = {
  children: React.ReactNode;
};

const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <div className="page">
        <GuestHeader />
        <main className="page__main">{children}</main>
        <GuestFooter />
      </div>
    </>
  );
};

export default GuestLayout;
