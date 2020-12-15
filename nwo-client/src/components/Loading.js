import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Loading = () => {
  const anim = useAnimation();

  useEffect(async () => {
    anim.start();
  }, []);

  return (
    <div className="loading-container">
      <motion.div animate={anim}>
        <img src="https://nwobucky.s3.us-east-2.amazonaws.com/nwo_images/NWO_Body+Full+Logo_Full+Color.png" />
      </motion.div>
    </div>
  );
};

export default Loading;
