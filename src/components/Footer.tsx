import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
const Footer = () => {
  const footerLinks = {
    curso: [
      {
        label: "Sobre o Curso",
        href: "#curso",
      },
      {
        label: "Metodologia",
        href: "#metodologia",
      },
      {
        label: "Instrutores",
        href: "#instrutores",
      },
      {
        label: "Certificação",
        href: "#certificacao",
      },
    ],
    recursos: [
      {
        label: "Material de Apoio",
        href: "#materiais",
      },
      {
        label: "Projetos Práticos",
        href: "#projetos",
      },
      {
        label: "Comunidade",
        href: "#comunidade",
      },
      {
        label: "Mentoria",
        href: "#mentoria",
      },
    ],
    suporte: [
      {
        label: "Central de Ajuda",
        href: "#ajuda",
      },
      {
        label: "FAQ",
        href: "#faq",
      },
      {
        label: "Contato",
        href: "#contato",
      },
      {
        label: "Suporte Técnico",
        href: "#suporte",
      },
    ],
    legal: [
      {
        label: "Termos de Uso",
        href: "#termos",
      },
      {
        label: "Política de Privacidade",
        href: "#privacidade",
      },
      {
        label: "Política de Reembolso",
        href: "#reembolso",
      },
      {
        label: "Cookies",
        href: "#cookies",
      },
    ],
  };
  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
    },
  ];
  return (
    <footer className="bg-black border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div>
                  <img
                    src="/nx_academy_logo.png"
                    alt="logo nx academy"
                    className="flex items-start w-36 h-auto"
                  />
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-md">
                Metodologia prática, projetos reais e mentoria personalizada.
                Sua jornada para uma carreira de sucesso começa aqui.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contato@datacraft.com.br</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(11) 99999-9999</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-smooth"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-8 lg:col-span-3">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Curso</h4>
                <ul className="space-y-3">
                  {footerLinks.curso.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
                <ul className="space-y-3">
                  {footerLinks.recursos.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
                <ul className="space-y-3">
                  {footerLinks.suporte.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-smooth"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 NXacademy. Todos os direitos reservados.
            </div>

            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
