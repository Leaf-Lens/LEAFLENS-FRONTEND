import Banner from "@/components/Banner/Banner";
import Plans from "@/components/Plans/Plans";
import Dialog1 from "@/components/Dialog1/page";
import Footer from "@/components/Footer/page";
import AuthButton from "@/components/LoginButton/LoginButton";
import InquiryModal from "@/components/Modal/InquiryModal";
import SnackbarSuccess from "@/components/Snackbar/SnackbarSuccess";

export default function Home() {

  return (
    <main>
      {/* <AuthButton /> */}
      <Banner />
      <Plans />
      <Dialog1 />
      <Footer />
      <InquiryModal/>
      <SnackbarSuccess/>
    </main>
  );
}
