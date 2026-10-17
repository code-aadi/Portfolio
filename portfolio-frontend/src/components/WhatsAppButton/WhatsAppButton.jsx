import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";


const WHATSAPP_NUMBER = "917828053425";
const MESSAGE = "Hi Aditya, I saw your portfolio and wanted to connect.";

export default function WhatsAppButton({ size = "md", children }) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`wa-btn wa-btn--${size}`}
    >
      <FaWhatsapp size={20} />
      {children || "Chat on WhatsApp"}
    </a>
  );
}