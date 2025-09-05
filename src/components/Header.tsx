import { Home, User, Briefcase, FileText, Play, X, Menu } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
// import { Button } from 'react-day-picker';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navItems = [
    { name: 'Início', url: '/', icon: Home },
    { name: 'Sobre', url: '#about', icon: User },
    { name: 'Curso', url: '#course', icon: Play },
    { name: 'Projetos', url: '#projects', icon: Briefcase },
    { name: 'Contato', url: '#contact', icon: FileText }
  ]

  const navLinks = [
    { href: "#curso", label: "Sobre o Curso" },
    { href: "#recursos", label: "Recursos" },
    { href: "#membros", label: "Área de Membros" },
    { href: "#preco", label: "Preço" },
  ];

  function setIsMenuOpen(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div>
            </div>
            <img src="/nx_tech.png" alt="logo nexus tech" className="w-20 h-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg">
              Inscreva-se Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!setIsMenuOpen)}
            aria-label="Toggle menu"
          >
            {setIsMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {setIsMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-smooth px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <Button variant="hero" size="lg" className="w-full">
                  Inscreva-se Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;