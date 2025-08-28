import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              🔥 Oferta Limitada - Últimas Vagas
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Transforme sua Carreira em{" "}
              <span className="text-white/90">6 Meses</span>
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Não perca a oportunidade de se tornar um profissional de dados requisitado pelo mercado. 
              Comece hoje mesmo e veja resultados em semanas.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">Acesso Vitalício</div>
                <div className="text-sm text-white/70">Conteúdo sempre atualizado</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">Comunidade Ativa</div>
                <div className="text-sm text-white/70">Networking com profissionais</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">Certificado Reconhecido</div>
                <div className="text-sm text-white/70">Validado pela indústria</div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <div className="text-sm text-white/70 mb-2">Valor do Curso</div>
                <div className="flex items-baseline space-x-2 mb-4">
                  <span className="text-4xl font-bold text-white">R$ 497</span>
                  <span className="text-lg text-white/60 line-through">R$ 997</span>
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    50% OFF
                  </span>
                </div>
                <div className="text-sm text-white/80">
                  ou 12x de R$ 49,70 sem juros
                </div>
              </div>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 hover:shadow-lg transition-bounce group text-lg py-6"
                >
                  Inscrever-se Agora
                  <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <div className="text-center text-sm text-white/70">
                  ✓ Garantia de 30 dias • ✓ Suporte premium • ✓ Certificação inclusa
                </div>
              </div>
            </div>
          </div>

          <div className="text-sm text-white/60">
            Mais de 500 alunos já transformaram suas carreiras. 
            <span className="text-white font-medium"> Seja o próximo!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;