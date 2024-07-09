"use client";
import "../config/Language/index";
import { useTranslation } from "react-i18next";

import InteractiveFormSection from "@/components/templates/InteractiveFormSection/InteractiveFormSection";
import Sample from "@/components/Sample";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <InteractiveFormSection
        title={t("Home.FindProfessional")}
        onButtonClick={() => {}}
      />
      <Sample />
    </main>
  );
}
