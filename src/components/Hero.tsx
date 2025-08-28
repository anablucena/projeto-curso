import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-data.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-bg pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-hero rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                🚀 Curso Completo de Engenharia de Dados
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Domine a{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Engenharia
                </span>{" "}
                e{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Análise
                </span>{" "}
                de Dados
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transforme sua carreira com o curso mais completo do mercado. 
                Aprenda desde fundamentos até projetos avançados com dados reais, 
                ferramentas modernas e metodologias da indústria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Alunos Certificados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Projetos Práticos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">Avaliação Média</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Engenharia e Análise de Dados"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero/20"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-card p-4 rounded-xl shadow-card animate-float">
              <div className="text-sm font-medium text-foreground">Python</div>
              <div className="text-xs text-muted-foreground">Machine Learning</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-sm font-medium text-foreground">SQL</div>
              <div className="text-xs text-muted-foreground">Big Data</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;