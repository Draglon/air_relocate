"use client";

import GuestLayout from "@/views/layouts/GuestLayout";
import SectionMain from "@/views/Home/SectionMain";
import SectionVacancies from "@/views/Home/SectionVacancies";
import SectionCities from "@/views/Home/SectionCities";
import SectionRelocation from "@/views/Home/SectionRelocation";
import SectionBlog from "@/views/Home/SectionBlog";
import SectionSubscription from "@/views/Home/SectionSubscription";
import SectionAboutUs from "@/views/Home/SectionAboutUs";

const Home = () => {
  return (
    <GuestLayout>
      <div className="page__container">
        <SectionMain />
        <SectionVacancies />
        <SectionCities />
        <SectionRelocation />
        <SectionBlog />
        <SectionSubscription />
        <SectionAboutUs />
      </div>
    </GuestLayout>
  );
};

export default Home;
