import { Button } from "@/components/ui/button";
import { Code, Database, BarChart3, Cloud, Users, Award, ArrowRight, CheckCircle } from "lucide-react";
const Features = () => {
  const features = [{
    icon: Code,
    title: "Python & SQL Avançado",
    description: "Domine as linguagens essenciais para manipulação e análise de dados com projetos práticos e exercícios hands-on.",
    highlights: ["Pandas & NumPy", "Queries Complexas", "APIs & Scraping"]
  }, {
    icon: Database,
    title: "Engenharia de Dados",
    description: "Aprenda a construir pipelines robustos, ETL/ELT e arquiteturas escaláveis para processamento de big data.",
    highlights: ["Apache Spark", "Kafka", "Data Warehouses"]
  }, {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Transforme dados em insights acionáveis com ferramentas modernas de visualização e business intelligence.",
    highlights: ["Power BI", "Tableau", "Dashboards"]
  }, {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Implemente soluções na nuvem com AWS, Azure e GCP. Aprenda sobre serverless e containers.",
    highlights: ["AWS/Azure", "Docker", "Kubernetes"]
  }, {
    icon: Users,
    title: "Machine Learning",
    description: "Desenvolva modelos preditivos e sistemas de recomendação aplicados a problemas reais de negócio.",
    highlights: ["Scikit-learn", "TensorFlow", "MLOps"]
  }, {
    icon: Award,
    title: "Certificação & Carreira",
    description: "Prepare-se para certificações da indústria e receba suporte completo na transição de carreira.",
    highlights: ["Mentoria 1:1", "Portfolio", "Networking"]
  }];
  return <section id="recursos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">Ensinamos as tecnologias mais ultilizadas do mercado </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tudo o que você precisa para se tornar um
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Expert em Dados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Foco em resultados práticos e empregabilidade.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => <div key={index} className="group relative bg-card p-8 rounded-2xl shadow-card hover:shadow-hero transition-smooth border border-border hover:border-primary/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-bounce">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              <div className="space-y-2">
                {feature.highlights.map((highlight, idx) => <div key={idx} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>)}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-smooth rounded-2xl"></div>
            </div>)}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-bg p-12 rounded-3xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Pronto para acelerar sua carreira?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Junte-se a nós e transforme sua carreira.</p>
          <Button variant="hero" size="lg" className="group">
            Ver Programa Completo
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Features;