import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Users } from "lucide-react";
const CTA = () => {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 border border-border/50 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-2xl bg-primary/10">
              <Star className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Transforme Sua Carreira em Dados
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 10.000 profissionais que já dominam engenharia e análise de dados. 
            Comece hoje e veja resultados em semanas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              <span>Começar Agora</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Acesso imediato • Garantia de 30 dias</span>
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>10.000+ alunos</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-current text-yellow-500" />
              <span>4.9/5 avaliação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;