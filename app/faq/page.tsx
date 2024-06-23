import FAQComponent from "@/components/faq";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "FAQ",
  description: "Frequency asked questions about PearAI.",
  canonical: "/faq",
});

export default function About() {
  return (
    <>
      <FAQComponent />
    </>
  );
}
