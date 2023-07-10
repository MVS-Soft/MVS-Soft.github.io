import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Thank you for your interest in MVS-Soft!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
