const TrustedBy = () => {
  const companies = [
    { name: "Microsoft", logo: "🔷" },
    { name: "Google", logo: "🟦" },
    { name: "Amazon", logo: "🟠" },
    { name: "Meta", logo: "🔵" },
    { name: "Netflix", logo: "🔴" },
    { name: "Spotify", logo: "🟢" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-muted-foreground mb-8">
            Nossos alunos trabalham nas melhores empresas
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex flex-col items-center space-y-2 group hover:scale-110 transition-bounce"
              >
                <div className="text-4xl opacity-60 group-hover:opacity-100 transition-smooth">
                  {company.logo}
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-smooth">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-foreground">92%</div>
            <div className="text-muted-foreground">Taxa de Empregabilidade</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-foreground">R$ 8.500</div>
            <div className="text-muted-foreground">Salário Médio Inicial</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-foreground">6 meses</div>
            <div className="text-muted-foreground">Tempo Médio para Contratação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;