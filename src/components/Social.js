import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Social() {
  return (
    <div>
      <div className="flex justify-end flex-wrap gap-4 text-slate-400 mt-2 text-2xl">
        <a href="https://www.linkedin.com/in/pioxscorpio/">
          <FaLinkedin />
        </a>
        <a href="https://wa.me/584127999788">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/Pioxscorpio">
          <FaGithub />
        </a>
      </div>
    </div>
  )
}