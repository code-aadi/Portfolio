import "./ResumeButton.css";

const RESUME_URL = "/Aditya_Kourav_Resume.pdf";

export default function ResumeButton({ variant = "outline", size = "md", children }) {
  return (
    <a
      href={RESUME_URL}
      download="Aditya_Kourav_Resume.pdf"
      className={`resume-btn resume-btn--${variant} resume-btn--${size}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v12m0 0l-5-5m5 5l5-5M5 21h14" />
      </svg>
      {children || "Download Resume"}
    </a>
  );
}