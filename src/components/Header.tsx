import { Home, User, Briefcase, FileText, Play } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const Header = () => {
  const navItems = [
    { name: "Início", url: "/", icon: Home },
    { name: "Sobre", url: "#about", icon: User },
    { name: "Curso", url: "#course", icon: Play },
    { name: "Área de membros", url: "members", icon: Briefcase },
    { name: "Contato", url: "#contact", icon: FileText },
  ];

  return (
    <div className="relative">
      <NavBar items={navItems} />
      {/* Logo no canto superior direito */}
      <div className="fixed top-4 left-6 z-50">
        <img 
          src="/public/nx_academy_logo.png" 
          alt="NX Academy Logo" 
          className="h-16 w-auto"
        />
      </div>
    </div>
  );
};

export default Header;
