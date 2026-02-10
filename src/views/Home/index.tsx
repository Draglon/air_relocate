"use client";

import GuestLayout from "@/views/layouts/GuestLayout";
import SectionMain from "@/views/Home/SectionMain";

const Home = () => {
  return (
    <GuestLayout>
      <div className="page__container">
        <SectionMain />
      </div>
    </GuestLayout>
  );
};

export default Home;
