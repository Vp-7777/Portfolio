"use client";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      {/* Mobile sticky header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div>
        <p className="mb-4">
          I&apos;m a Computer Science (AI & ML) undergraduate at{" "}
          <a
            href="https://www.srmist.edu.in/"
            className="prose-link"
            target="_blank"
            rel="noreferrer"
          >
            SRM Institute of Science and Technology
          </a>{" "}
          with a cumulative <span className="font-medium text-slate-200">9.74 CGPA</span> and a
          flawless <span className="font-medium text-slate-200">10.0/10 GPA</span> in Semester 2.
          I focus on building production-grade software systems that span mobile applications,
          high-throughput REST APIs, and on-device machine learning pipelines.
        </p>

        <p className="mb-4">
          Currently, I&apos;m interning at two companies simultaneously:{" "}
          <a
            href="#experience"
            className="prose-link"
          >
            RideAbit
          </a>
          , where I build cross-platform React Native mobile apps with Expo, and{" "}
          <a
            href="#experience"
            className="prose-link"
          >
            QRaptor
          </a>
          , where I engineer Python-based AI backends with FastAPI and scalable ML pipelines.
          Across both roles, I&apos;ve shipped production code that handles real user traffic.
        </p>

        <p className="mb-4">
          My side projects include{" "}
          <a
            href="https://autis-mind-ai.vercel.app/"
            className="prose-link"
            target="_blank"
            rel="noreferrer"
          >
            AutisMind-AI
          </a>
          , a real-time clinical screening platform using quantized ONNX models for sub-15ms
          on-device inference;{" "}
          <a
            href="https://github.com/Vp-7777/PrithviQ"
            className="prose-link"
            target="_blank"
            rel="noreferrer"
          >
            PrithviQ
          </a>
          , a geospatial drone vision system aligned with UN SDG 12 & 14; and{" "}
          <a
            href="https://github.com/Vp-7777/CampuSwap"
            className="prose-link"
            target="_blank"
            rel="noreferrer"
          >
            CampuSwap
          </a>
          , a peer-to-peer campus marketplace with PostgreSQL ACID transactions and JWT
          authentication.
        </p>

        <p>
          I hold certifications from{" "}
          <span className="font-medium text-slate-200">ISRO (IIRS)</span> in Geodata Processing
          with Machine Learning and{" "}
          <span className="font-medium text-slate-200">AWS Cloud Practitioner Essentials</span>.
          I was a{" "}
          <span className="font-medium text-slate-200">Top 20 finalist</span> at the QRaptors
          National Hackathon (257+ teams) and the Ashna AI Agent Hackathon, and I organize and
          mentor at the Team SRM Hackathon.
        </p>
      </div>
    </section>
  );
}
