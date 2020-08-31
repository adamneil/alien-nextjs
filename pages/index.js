import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Main from '../components/main'
import Subscribe from "../components/subscribe";
import Layout from "../components/Layout";

function Index() {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  const features = [
    {
      title: "Progressive Web Applications (PWA)",
      description:
        "Responsive design that works in any browser. Service workers enable for fast reloading ",
    },
    {
      title: "Server-side rendering (SSR)",
      description:
        "Web pages are prepoluated with user data directly from server-side, increasing performance and providing consistent SEO",
    },
    {
      title: "Pragmatic design",
      description:
        "Leveraging material design principles, sites are designed for practical applications specific to each business",
    },
    {
      title: "Seamless API Integration",
      description:
        "Integration directly into social media platforms allows for coordinated marketing campaigns",
    },
    {
      title: "Data Analytics",
      description:
        "Built-in data analytics allow for effective tracking of the progress and success of each add campaign",
    },
    {
      title: "White-hat SEO",
      description:
        "Organic SEO strategies that providing long-lasting, front-page results",
    },
    {
      title: "Keyword Research",
      description:
        "Leveraging Google Analytics data, robust semantic analysis provides for prominent search engine results",
    },
  ];
  return (
    <Layout>
      <svg className="progress-icon" viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="#111"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="#111"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>
      <Main features={features} />

      <Subscribe />
      <style jsx>{``}</style>
    </Layout>
  );
}

export default Index;
