import styles from "./Home.module.css";
import HomeIllustration from "../../Assets/images/Gift-cuate.png";
import CustomButton from "../../Components/Button/Button";
import toast, { Toaster } from "react-hot-toast";
import VideoSection from "../../Components/VideoSection/VideoSection";
import FAQSection from "../../Components/FAQSection/FAQSection";
import ImageSection from "../../Components/ImageSection/ImageSection";
import CategorySection from "../../Components/CategorySection/CategorySection";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import ReviewSection from "../../Components/ReviewSection/ReviewSection";
import SponsorSection from "../../Components/SponsorSection/SponsorSection";
import { Link } from "react-router-dom";

// TOP SECTION
const TopSection = () => {
  const mobile = window.innerWidth < 768;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.left}>
        <h1>Gifting is the New Normal </h1>
        <p>
          Order gifts for your loved one, and get them shipped instantly with
          love.
        </p>
        <div>
          <CustomButton
            color="white"
            bgColor="black"
            width={mobile ? "70%" : "350px"}
            height={mobile ? "50px" : "74px"}
            fontSize={mobile ? "18px" : "24px"}
          >
            <Link to="/register">Get Started</Link>
          </CustomButton>
        </div>
      </div>
      <div className={styles.right}>
        <img src={HomeIllustration} alt="Home" width={"100%"} />
        <a style={{ visibility: "hidden" }} href="https://storyset.com/people">
          People illustrations by Storyset
        </a>
      </div>
    </div>
  );
};

// SECOND SECTION
const SecondSection = () => {
  const mobile = window.innerWidth < 768;
  const notifyError = () =>
    toast.error("Please fill all the fields", {
      position: "top-center",
      duration: 3000,
    });
  const notifySuccess = () =>
    toast.success("success", {
      position: "top-center",
      duration: 3000,
    });

  const handleSubmit = (e) => {
    const city = document.getElementById("send-city").value;
    const category = document.getElementById("send-category").value;
    const date = document.getElementById("send-date").value;
    if (!city || !category || !date) {
      notifyError();
      return;
    }
    notifySuccess();
    console.log(city, category, date);
  };
  return (
    <>
      <Toaster />
      <div className={styles.sendContainer}>
        <div className={styles.sendHeader}>
          <h2>SEND GIFTS TO NIGERIA INSTANTLY</h2>
          <p>FOLLOW THESE STEPS </p>
        </div>
        <div className={styles.sendSelectDiv}>
          <div className={styles.sendSelectCol}>
            <div>
              <span>1</span>
              <div className={styles.sendSelectRow}>
                <h3>Choose Destination</h3>
                <select name="Select City" id="send-city">
                  <option value=""></option>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="PH">Port Harcourt</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.sendSelectCol}>
            <div>
              <span>2</span>
              <div className={styles.sendSelectRow}>
                <h3>Celebration</h3>
                <select id="send-category">
                  <option value=""></option>
                  <option value="romance">Romance</option>
                  <option value="omugwo">Omugwo</option>
                  <option value="wedding">Wedding</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.sendSelectCol}>
            <div>
              <span>3</span>
              <div className={styles.sendSelectRow}>
                <h3>Choose Delivery Date</h3>
                <input id="send-date" type="date" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sendbtn}>
          <CustomButton
            onClick={handleSubmit}
            color="white"
            bgColor="black"
            width={mobile ? "200px" : "417px"}
            height={mobile ? "50px" : "64px"}
            fontSize={mobile ? "18px" : "24px"}
          >
            Submit
          </CustomButton>
        </div>
      </div>
    </>
  );
};

const HomePage = () => {
  return (
    <div style={{ width: "100vw" }}>
      <TopSection />
      <SecondSection />
      <VideoSection />
      <ImageSection />
      <FeaturedProducts />
      <CategorySection />
      <ReviewSection />
      <SponsorSection />
      <FAQSection />
    </div>
  );
};

export default HomePage;
