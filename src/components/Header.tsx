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
      <div className="fixed top-4 right-6 z-50">
        <img 
          src="/lovable-uploads/76beac64-f6b7-436f-abdc-c961fc3e3625.png" 
          alt="NX Academy Logo" 
          className="h-8 w-auto"
        />
      </div>
    </div>
  );
};

export default Header;
