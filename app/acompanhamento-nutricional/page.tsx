import {Button,PageShell,SectionLabel,contact} from '../components';
import {NutritionHero} from '../hero-experiences';

const conversation=contact('Olá, Gabriel! Vim pela página de acompanhamento nutricional e gostaria de agendar a primeira conversa gratuita.');

const receives=[
  'Consulta inicial completa',
  'Avaliação da sua rotina, histórico, alimentação, exames e objetivos',
  'Estratégia nutricional personalizada',
  'Consultas de acompanhamento e feedbacks semanais',
  'Ajustes ao longo do processo',
  'Materiais e orientações complementares',
  'Suporte para dúvidas de segunda a segunda',
];

export default function Nutrition(){
  return <PageShell theme="nutrition"><main>
    <NutritionHero/>

    <section id="como-funciona" className="section service-overview nutrition-overview" aria-labelledby="nutrition-overview-title">
      <div className="service-overview-intro">
        <SectionLabel>O acompanhamento nutricional</SectionLabel>
        <h2 id="nutrition-overview-title">Nutrição clínica com acompanhamento ao longo do processo.</h2>
        <p>Nutricionista (CRN9 38302/P) formado pela Universidade Federal de Uberlândia (UFU), com atuação voltada para Nutrição Clínica.</p>
        <p>Mais de 5 anos de experiência em atendimentos nutricionais.</p>
      </div>
      <div className="service-receives">
        <h3>O que você recebe</h3>
        <ul>{receives.map(item=><li key={item}>{item}</li>)}</ul>
      </div>
    </section>

    <section className="section service-conversation nutrition-conversation" aria-labelledby="nutrition-conversation-title">
      <div>
        <SectionLabel>Primeira conversa gratuita</SectionLabel>
        <h2 id="nutrition-conversation-title">Vamos conversar antes de começar.</h2>
        <p>Antes de iniciar o acompanhamento, podemos ter uma primeira conversa gratuita para você me contar o que está buscando, tirar suas dúvidas e entender se esse acompanhamento faz sentido para o seu momento.</p>
        <small>Uma conversa inicial para conhecer sua necessidade e explicar como funciona o acompanhamento.</small>
        <Button href={conversation}>Agendar minha conversa gratuita</Button>
      </div>
    </section>
  </main></PageShell>;
}
