import Image from 'next/image';
import {Button,PageShell,SectionLabel,contact} from '../components';
import {InterpreteHero} from '../hero-experiences';

const conversation=contact('Olá, Gabriel! Vim pela página do Interprete. e gostaria de agendar a primeira conversa gratuita.');

const actionSteps=[
  'Identifique o problema clínico.',
  'Defina a pergunta estruturada.',
  'Encontre as melhores evidências.',
  'Avalie a validade das evidências.',
  'Interprete os resultados.',
  'Aplique os resultados ao atendimento do paciente.',
];

const plans=[
  {name:'Orientação',detail:'1 encontro inicial + 1 encontro por mês, com duração de 1 hora.',for:'Ideal para quem já possui expertise, mas precisa de direcionamento.',old:'R$ 1.200',price:'R$ 1.000',hour:'250 reais por hora de aula.'},
  {name:'Aprofundamento',detail:'1 encontro inicial + 2 encontros por mês, com duração de uma hora.',for:'Ideal para quem conhece o básico e busca se aprofundar.',old:'R$ 1.300',price:'R$ 1.100',hour:'185 reais por hora de aula.'},
  {name:'Imersão clínica',detail:'1 encontro inicial + 4 encontros por mês, com duração de até 1 hora e meia.',for:'Ideal para quem busca entender do básico ao complexo, em uma imersão exclusiva.',old:'R$ 1.400',price:'R$ 1.200',hour:'90 reais por aula.'},
];

export default function Interprete(){
  return <PageShell theme="interprete"><main>
    <InterpreteHero/>

    <section className="section interprete-about" aria-labelledby="interprete-about-title">
      <div className="interprete-about-image">
        <Image src="/gabriel-microfone.jpg" alt="Gabriel Schuchter falando ao microfone" fill sizes="(max-width: 760px) 100vw, 40vw"/>
      </div>
      <div>
        <SectionLabel>Quem sou eu</SectionLabel>
        <h2 id="interprete-about-title">Quem sou eu</h2>
        <p>Forte envolvimento em pesquisa, metodologia científica e epidemiologia clínica durante a graduação.</p>
        <p>Nutricionista formado pela Universidade Federal de Uberlândia (UFU), Analista do Reviews, pesquisador, mentor e consultor de pesquisa, com atuação voltada à Prática Baseada em Evidências e à análise crítica da literatura científica em saúde.</p>
        <p>É fundador do Nutriwork, reconhecido como o maior grupo de Nutrição Baseada em Evidências do Brasil, e atua como professor de Prática Baseada em Evidências, já tendo ministrado aulas para estudantes e profissionais das áreas de Nutrição, Medicina, Psicologia, Fisioterapia e Enfermagem.</p>
      </div>
    </section>

    <section className="section interprete-definition" aria-labelledby="interprete-definition-title">
      <div>
        <SectionLabel>O que é o Interprete.</SectionLabel>
        <h2 id="interprete-definition-title">O que é o Interprete.</h2>
        <p>O Interprete. é uma comunidade exclusiva, onde você terá um acompanhamento individual e personalizado em formato de mentorias particulares, em tempo real.</p>
        <p>A mentoria aborda temas como Prática Baseada em Evidências, leitura crítica de artigos científicos, construção de raciocínio clínico e Nutrição.</p>
      </div>
      <ul className="interprete-pillars" aria-label="Pilares do Interprete.">
        <li>Nutrição Baseada em Evidências</li>
        <li>Aplicação da evidência na prática</li>
        <li>Interpretação crítica da literatura</li>
      </ul>
    </section>

    <section id="como-funciona" className="dark-section interprete-action" aria-labelledby="action-title">
      <SectionLabel>Plano de ação</SectionLabel>
      <div className="interprete-action-intro">
        <h2 id="action-title">Aprender, de forma constante e progressiva, todos os passos necessários para uma prática clínica verdadeira baseada em evidências.</h2>
        <p>O fluxo de trabalho:</p>
      </div>
      <ol className="interprete-flow">{actionSteps.map((step,index)=><li key={step}><span>{String(index+1).padStart(2,'0')}</span><strong>{step}</strong></li>)}</ol>
      <cite>Fonte: Diretrizes para a utilização da literatura médica: manual para a prática clínica da medicina baseada em evidências</cite>
    </section>

    <section className="section interprete-operational" aria-labelledby="operational-title">
      <div>
        <SectionLabel>Plano operacional</SectionLabel>
        <h2 id="operational-title">12 semanas</h2>
      </div>
      <div className="interprete-phases">
        <article><h3>1ª e 2ª semanas</h3><p>Identificação do problema clínico; busca de evidências; compreensão de qual tipo de artigo procurar.</p><strong>“Qual tipo de artigo devo procurar?”</strong></article>
        <article><h3>3ª a 8ª semanas</h3><p>Validade dos estudos; interpretação dos resultados; compreensão do que torna um estudo mais ou menos confiável; compreensão do significado dos resultados.</p><strong>“Esse estudo é bom ou ruim?”<br/>“O que esse resultado significa?”</strong></article>
        <article><h3>9ª a 12ª semanas</h3><p>Tomada de decisão baseada em evidências; aplicação dos resultados à prática clínica.</p><strong>“Como aplicar esses resultados na prática clínica?”</strong></article>
      </div>
    </section>

    <section id="planos" className="section interprete-plans" aria-labelledby="plans-title">
      <div className="interprete-plans-intro">
        <SectionLabel>Formatos do Interprete.</SectionLabel>
        <h2 id="plans-title">Escolha o formato que corresponde ao seu momento.</h2>
        <p>Os três formatos têm duração de 12 semanas. Os valores e frequências abaixo são os dados atualmente confirmados no repositório.</p>
      </div>
      <div className="interprete-plan-list">{plans.map(plan=><article className="interprete-plan" key={plan.name}>
        <p className="interprete-plan-name">Interprete. / {plan.name}</p>
        <h3>{plan.name}</h3>
        <p>{plan.detail}</p>
        <strong>{plan.for}</strong>
        <div className="interprete-plan-price"><s>{plan.old}</s><b>{plan.price}</b></div>
        <small>{plan.hour}</small>
      </article>)}</div>
    </section>

    <section className="section service-conversation interprete-conversation" aria-labelledby="interprete-conversation-title">
      <div>
        <SectionLabel>Primeira conversa gratuita</SectionLabel>
        <h2 id="interprete-conversation-title">Antes de escolher seu caminho, vamos conversar.</h2>
        <p>Na primeira conversa, você poderá me contar seu momento, as principais dificuldades que encontra ao estudar ou aplicar evidências e o que gostaria de desenvolver. A partir disso, podemos entender se o Interprete. faz sentido para você.</p>
        <Button href={conversation}>Agendar minha conversa gratuita</Button>
      </div>
    </section>
  </main></PageShell>;
}
