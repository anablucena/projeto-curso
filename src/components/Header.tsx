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

  return <NavBar items={navItems} />;
};

export default Header;
