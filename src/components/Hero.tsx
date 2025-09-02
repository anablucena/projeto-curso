import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';

const transitionVariants = {
  container: {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5
      }
    }
  }
};

const Hero = () => {
  return (
    <main className="overflow-hidden bg-background">
      <section className="bg-background">
        <div className="relative pt-24 md:pt-36 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <AnimatedGroup variants={transitionVariants}>
                <div className="hover:bg-muted dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border border-border p-1 pl-4 shadow-md transition-all duration-300">
                  <span className="text-foreground text-sm">Curso Completo de Engenharia de Dados</span>
                  <span className="block h-4 w-0.5 border-l border-border"></span>

                  <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                    <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                      <span className="flex size-6">
                        <ArrowRight className="m-auto size-3" />
                      </span>
                    </div>
                  </div>
                </div>
    
                <h1 className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] text-foreground">
                  Domine a <span className="bg-gradient-hero bg-clip-text text-transparent">Engenharia</span> e <span className="bg-gradient-hero bg-clip-text text-transparent">Análise</span> de Dados
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">Transforme sua carreira com o nosso curso. Aprenda desde fundamentos até projetos avançados com dados reais, ferramentas modernas e metodologias da indústria.</p>
              </AnimatedGroup>

              <AnimatedGroup variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75
                    }
                  }
                },
                ...transitionVariants
              }} className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                <div key={1} className="bg-foreground/10 rounded-[14px] border border-border p-0.5">
                  <Button size="lg" className="rounded-xl px-5 text-base" variant="hero">
                    <span className="text-nowrap">Começar Agora</span>
                  </Button>
                </div>
                <Button key={2} size="lg" variant="ghost" className="h-10.5 rounded-xl px-5">
                  <span className="text-nowrap">Ver Mais</span>
                </Button>
              </AnimatedGroup>
            </div>
          </div>

          <AnimatedGroup variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75
                }
              }
            },
            ...transitionVariants
          }}>
            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
              <div aria-hidden className="bg-gradient-to-b from-transparent from-35% to-background absolute inset-0 z-10" />
              <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border p-4 shadow-lg bg-muted/50">
                {/* Espaço para vídeo */}
                <div className="aspect-video bg-muted/30 rounded-2xl border-2 border-dashed border-border flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Vídeo do Curso</h3>
                    <p className="text-muted-foreground text-sm">Clique aqui para anexar o vídeo de apresentação</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </main>
  );
};

export default Hero;