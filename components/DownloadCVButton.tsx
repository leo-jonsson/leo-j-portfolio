"use client";

import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const DownloadCVButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Leo-CV.pdf";
    link.click();
  };

  return (
    <Button
      className="md:flex items-center hidden rounded-full"
      onClick={handleDownload}
    >
      <Download />
      Download CV
    </Button>
  );
};

export default DownloadCVButton;
