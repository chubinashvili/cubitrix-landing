import { useState } from "react";

// components
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// svg
import {
  Facebook,
  Linkedin,
  Twitter,
  Github,
  TradeIcon,
  StakingIcon,
  DashboardIcon,
  ExtensionsIcon,
  LoansIcon,
} from "../svg";

// css
import styles from "../styles/Home.module.css";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    setEmail("");
    console.log("email sent");
  };

  const defaultCardsData = [
    {
      id: 1,
      title: "We Believe in Endless Possibilities ",
      description:
        "Access the world’s most popular instruments, ranging from forex pairs to CFDs on stocks, indices, commodities, and cryptocurrencies - all at the palm of your hand.",
      image: "/img/cardImgs/img1.png",
      className: 'green'
    },
    {
      id: 2,
      title: "Great Trading Conditions",
      description:
        "Hedging is allowed, without any restrictions on short selling and scalping. We provide fast and reliable order execution, as well as ultra-low spreads.",
      image: "/img/cardImgs/img2.png",
      className: 'yellow'
    },
    {
      id: 3,
      title: "We Believe You Deserve The Best ",
      description:
        "Take advantage of our Expert Advisors, Copy Trading platforms and 24/7 crypto trading. Try our unique risk management tool AvaProtectTM, or utilise the Trading Central automated analysis add-on.",
      image: "/img/cardImgs/img3.png",
      className: 'blue'
    },
  ];

  const aboutProjectsData = [
    {
      id: 1,
      title: "Analitical Tools",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci lobortis ut tempor pretium proin congue. Sit etiam dolor in accumsan mauris nibh. Placerat nulla ullamcorper tempus turpis tempus libero tellus. Orci facilisis quisque mollis enim felis. Eget lorem dolor sed.",
      image: "/img/AboutProjects/dashboard.jpg",
    },
    {
      id: 2,
      title: "Trade",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci lobortis ut tempor pretium proin congue. Sit etiam dolor in accumsan mauris nibh. Placerat nulla ullamcorper tempus turpis tempus libero tellus. Orci facilisis quisque mollis enim felis. Eget lorem dolor sed.",
      image: "/img/AboutProjects/referral.jpg",
    },
    {
      id: 3,
      title: "Staking",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci lobortis ut tempor pretium proin congue. Sit etiam dolor in accumsan mauris nibh. Placerat nulla ullamcorper tempus turpis tempus libero tellus. Orci facilisis quisque mollis enim felis. Eget lorem dolor sed.",
      image: "/img/AboutProjects/dashboard.jpg",
    },
    {
      id: 4,
      title: "Loans",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci lobortis ut tempor pretium proin congue. Sit etiam dolor in accumsan mauris nibh. Placerat nulla ullamcorper tempus turpis tempus libero tellus. Orci facilisis quisque mollis enim felis. Eget lorem dolor sed.",
      image: "/img/AboutProjects/referral.jpg",
    },
    {
      id: 5,
      title: "Extensions",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci lobortis ut tempor pretium proin congue. Sit etiam dolor in accumsan mauris nibh. Placerat nulla ullamcorper tempus turpis tempus libero tellus. Orci facilisis quisque mollis enim felis. Eget lorem dolor sed.",
      image: "/img/AboutProjects/dashboard.jpg",
    },
    {
      id: 6,
      title: "Referral",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci lobortis ut tempor pretium proin congue. Sit etiam dolor in accumsan mauris nibh. Placerat nulla ullamcorper tempus turpis tempus libero tellus. Orci facilisis quisque mollis enim felis. Eget lorem dolor sed.",
      image: "/img/AboutProjects/referral.jpg",
    },
  ];

  const becomeMemberData = {
    id: 1,
    description:
      "Creating an account is easy. To get started, simply click on the 'Create Account' button and follow the instruction. We take your privacy and security seriously, so rest assured that your information will be kept safe and confidential.",
    image: "/img/BecomeMember/complend.jpg",
    link: "http://localhost:3000/"
  }

  const cardsData = [
    {
      title: "Dashboard",
      svg: <DashboardIcon />,
      background: "#3B78DE",
    },
    {
      title: "Trade",
      svg: <TradeIcon />,
      background: "#3C17DB",
    },
    {
      title: "Staking",
      svg: <StakingIcon />,
      background: "#FF8C00",
    },
    {
      title: "Loans",
      svg: <LoansIcon />,
      background: "#00D7BB",
    },
    {
      title: "REFERRAL",
      svg: <ExtensionsIcon />,
      background: "#00A5DC",
    },
  ];

  const footerData = [
    {
      svg: <Facebook />,
      link: "https://www.facebook.com/",
    },
    {
      svg: <Linkedin />,
      link: "https://www.linkedin.com/",
    },
    {
      svg: <Twitter />,
      link: "https://twitter.com/",
    },
    {
      svg: <Github />,
      link: "https://github.com/",
    },
  ];

  return (
    <div className={styles.main}>
      <Navbar link={"http://localhost:3000/"} />
      <Card
        type={"trading-platform"}
        link={"http://localhost:3000/"}
        cardsData={cardsData}
      />
      <Card type={"default"} data={defaultCardsData} />
      <Card type={"about"} data={aboutProjectsData} />
      <Card
        type={"become-member"}
        data={becomeMemberData}
      />
      <Footer
        data={footerData}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
