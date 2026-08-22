import bioData from "@/lib/content/bio.json";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://vishalpatel.dev/#person",
        name: "Vishal Patel",
        jobTitle: "Software & AI Systems Engineer",
        description:
          "Teaching software to see, sort & screen the real world. Computer Science (AI & ML) @ SRM IST (9.74 CGPA). Interning @ RideAbit & QRaptor.",
        url: "https://vishalpatel.dev",
        email: `mailto:${bioData.email}`,
        telephone: "+91-7043624030",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "SRM Institute of Science and Technology",
          url: "https://www.srmist.edu.in",
        },
        worksFor: [
          {
            "@type": "Organization",
            name: "RideAbit",
          },
          {
            "@type": "Organization",
            name: "QRaptor",
          },
        ],
        sameAs: [
          bioData.github,
          bioData.linkedin,
          bioData.resumeUrl,
        ],
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Computer Vision",
          "React Native",
          "Expo",
          "Python",
          "FastAPI",
          "PostgreSQL",
          "Next.js",
          "ONNX Runtime",
          "Distributed Systems",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://vishalpatel.dev/#website",
        url: "https://vishalpatel.dev",
        name: "Vishal Patel — Software & AI Systems Engineer",
        description:
          "Portfolio of Vishal Patel. Software & AI Systems Engineer specializing in Computer Vision, Mobile Engineering, and Edge Machine Learning.",
        publisher: {
          "@id": "https://vishalpatel.dev/#person",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "AutisMind-AI",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        url: "https://autis-mind-ai.vercel.app/",
        author: {
          "@id": "https://vishalpatel.dev/#person",
        },
        description:
          "A full-stack AI platform for early autism screening pairing interactive assessments with computer vision and generative AI prediction modules over a real-time REST API.",
      },
      {
        "@type": "SoftwareSourceCode",
        name: "PrithviQ",
        codeRepository: "https://github.com/Vp-7777/PrithviQ",
        programmingLanguage: "Python",
        author: {
          "@id": "https://vishalpatel.dev/#person",
        },
        description:
          "A computer-vision system that detects, classifies, and quantifies plastic waste from drone and smartphone imagery aligned with UN SDG 12 and 14.",
      },
      {
        "@type": "SoftwareSourceCode",
        name: "CampuSwap",
        codeRepository: "https://github.com/Vp-7777/CampuSwap",
        programmingLanguage: "JavaScript / TypeScript",
        author: {
          "@id": "https://vishalpatel.dev/#person",
        },
        description:
          "A full-stack campus marketplace for students to list, browse, and trade items securely on a PostgreSQL ACID relational backend.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
