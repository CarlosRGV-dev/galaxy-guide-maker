import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import astronaut from "@/assets/astronaut.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Órbita — Explore o Universo" },
      { name: "description", content: "Conheça o Sistema Solar, missões históricas, calcule seu peso em outros planetas e teste seus conhecimentos no quiz." },
      { property: "og:title", content: "Órbita — Explore o Universo" },
      { property: "og:description", content: "Planetas, missões, calculadora de peso interplanetário e quiz espacial." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const planets = [
  { name: "Mercúrio", g: 3.7, fact: "O planeta mais próximo do Sol; um ano dura 88 dias." },
  { name: "Vênus", g: 8.87, fact: "O mais quente: cerca de 465 °C na superfície." },
  { name: "Terra", g: 9.81, fact: "O único planeta conhecido com vida." },
  { name: "Marte", g: 3.71, fact: "Abriga o Monte Olimpo, o maior vulcão do Sistema Solar." },
  { name: "Júpiter", g: 24.79, fact: "Tão grande que caberiam mais de 1.300 Terras dentro dele." },
  { name: "Saturno", g: 10.44, fact: "Seus anéis são feitos de gelo e rocha." },
  { name: "Urano", g: 8.69, fact: "Gira praticamente deitado, inclinado 98°." },
  { name: "Netuno", g: 11.15, fact: "Tem os ventos mais rápidos: até 2.100 km/h." },
  { name: "Lua", g: 1.62, fact: "Visitada por 12 astronautas entre 1969 e 1972." },
];

const missions = [
  { year: "1957", title: "Sputnik 1", text: "Primeiro satélite artificial em órbita." },
  { year: "1961", title: "Vostok 1", text: "Yuri Gagarin é o primeiro humano no espaço." },
  { year: "1969", title: "Apollo 11", text: "Primeiros passos humanos na Lua." },
  { year: "1990", title: "Hubble", text: "Telescópio que revolucionou a astronomia." },
  { year: "2021", title: "James Webb", text: "Observa as primeiras galáxias do universo." },
];

const questions = [
  { q: "Qual é o maior planeta do Sistema Solar?", options: ["Saturno", "Júpiter", "Netuno", "Terra"], a: 1 },
  { q: "Quem foi o primeiro ser humano no espaço?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Marcos Pontes"], a: 2 },
  { q: "Qual planeta é conhecido como Planeta Vermelho?", options: ["Marte", "Vênus", "Mercúrio", "Urano"], a: 0 },
  { q: "Em que ano a Apollo 11 pousou na Lua?", options: ["1959", "1965", "1969", "1975"], a: 2 },
  { q: "Qual é o planeta mais quente?", options: ["Mercúrio", "Vênus", "Marte", "Júpiter"], a: 1 },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="font-display text-lg font-bold text-gradient">ÓRBITA</a>
          <div className="hidden gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#sobre" className="hover:text-primary">Sobre</a>
            <a href="#planetas" className="hover:text-primary">Planetas</a>
            <a href="#missoes" className="hover:text-primary">Missões</a>
            <a href="#calculadora" className="hover:text-primary">Calculadora</a>
            <a href="#quiz" className="hover:text-primary">Quiz</a>
          </div>
        </nav>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img src={hero} alt="Nebulosa sobre o horizonte de um planeta" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="relative mx-auto max-w-6xl px-4 pt-20">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Explore o universo</p>
          <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            Além do <span className="text-gradient">horizonte</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Uma viagem pelo Sistema Solar, pelas grandes missões da humanidade e pelos mistérios do cosmos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quiz" className="rounded-full bg-gradient-glow px-6 py-3 font-bold text-primary-foreground glow transition hover:scale-105">Fazer o quiz</a>
            <a href="#calculadora" className="rounded-full border px-6 py-3 font-medium transition hover:border-primary hover:text-primary">Calcular meu peso</a>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 md:grid-cols-2">
        <img src={astronaut} alt="Astronauta flutuando sobre a Terra" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full rounded-2xl object-cover glow" />
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Quem somos</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Divulgação científica para todos</h2>
          <p className="mt-5 text-muted-foreground">
            O Órbita é um projeto educativo que aproxima as pessoas da astronomia. Nossa missão é transformar
            conhecimento científico em experiências acessíveis, visuais e interativas.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[["8", "Planetas"], ["200+", "Luas"], ["13,8 bi", "Anos de universo"]].map(([n, l]) => (
              <div key={l} className="rounded-xl border bg-card p-4 text-center">
                <div className="font-display text-xl font-bold text-primary sm:text-2xl">{n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planetas" className="starfield border-y bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold sm:text-4xl">O Sistema Solar</h2>
          <p className="mt-3 text-muted-foreground">Curiosidades sobre os nossos vizinhos cósmicos.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {planets.filter((p) => p.name !== "Lua").map((p) => (
              <article key={p.name} className="rounded-xl border bg-card p-5 transition hover:-translate-y-1 hover:border-primary">
                <h3 className="text-lg font-bold text-primary">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.fact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="missoes" className="mx-auto max-w-4xl px-4 py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Missões históricas</h2>
        <ol className="mt-10 space-y-6 border-l-2 border-primary/40 pl-6">
          {missions.map((m) => (
            <li key={m.title} className="relative">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-gradient-glow glow" />
              <div className="font-display text-sm text-accent">{m.year}</div>
              <h3 className="text-xl font-bold">{m.title}</h3>
              <p className="text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <WeightCalculator />
      <Quiz />

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        © 2026 Órbita — Projeto educativo de astronomia.
      </footer>
    </div>
  );
}

function WeightCalculator() {
  const [weight, setWeight] = useState("70");
  const kg = parseFloat(weight.replace(",", "."));
  const valid = !isNaN(kg) && kg > 0 && kg < 1000;
  return (
    <section id="calculadora" className="border-y bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold sm:text-4xl">Calculadora de peso interplanetário</h2>
        <p className="mt-3 text-muted-foreground">Digite sua massa na Terra e descubra quanto você "pesaria" em outros mundos.</p>
        <label className="mt-8 flex max-w-sm flex-col gap-2">
          <span className="text-sm">Sua massa (kg)</span>
          <input
            type="number" min="1" max="999" value={weight} onChange={(e) => setWeight(e.target.value)}
            aria-label="Sua massa em kg"
            className="rounded-lg border bg-input/20 px-4 py-3 text-lg outline-none focus:border-primary focus:ring-2 focus:ring-ring"
          />
        </label>
        {!valid && <p className="mt-3 text-sm text-destructive">Informe um valor entre 1 e 999 kg.</p>}
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {planets.map((p) => {
            const equiv = valid ? (kg * p.g) / 9.81 : 0;
            return (
              <div key={p.name} data-testid={`peso-${p.name}`} className="rounded-xl border bg-card p-4">
                <div className="flex justify-between text-sm text-muted-foreground"><span>{p.name}</span><span>g = {p.g} m/s²</span></div>
                <div className="mt-2 font-display text-2xl font-bold text-primary">{valid ? equiv.toFixed(1) : "—"} kg</div>
                <div className="mt-2 h-1.5 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-glow transition-all" style={{ width: `${Math.min(100, (p.g / 24.79) * 100)}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Quiz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const done = i >= questions.length;
  const q = questions[i];

  const choose = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.a) setScore((s) => s + 1);
  };
  const next = () => { setPicked(null); setI((n) => n + 1); };
  const restart = () => { setI(0); setScore(0); setPicked(null); };

  return (
    <section id="quiz" className="mx-auto max-w-3xl px-4 py-24">
      <h2 className="text-3xl font-bold sm:text-4xl">Quiz espacial</h2>
      <div className="mt-8 rounded-2xl border bg-card p-6 glow sm:p-8">
        {done ? (
          <div className="text-center">
            <p className="text-muted-foreground">Resultado final</p>
            <p className="mt-2 font-display text-5xl font-black text-gradient" data-testid="quiz-score">{score}/{questions.length}</p>
            <p className="mt-4">{score === questions.length ? "Perfeito! Você é um(a) astronauta!" : score >= 3 ? "Muito bem, cadete espacial!" : "Continue explorando o universo!"}</p>
            <button onClick={restart} className="mt-6 rounded-full bg-gradient-glow px-6 py-3 font-bold text-primary-foreground">Jogar novamente</button>
          </div>
        ) : (
          <>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Pergunta {i + 1} de {questions.length}</span><span>Acertos: {score}</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-muted">
              <div className="h-full rounded-full bg-gradient-glow transition-all" style={{ width: `${(i / questions.length) * 100}%` }} />
            </div>
            <h3 className="mt-6 text-xl font-bold">{q.q}</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {q.options.map((o, idx) => {
                const state = picked === null ? "border hover:border-primary" : idx === q.a ? "border-2 border-success text-success" : idx === picked ? "border-2 border-destructive text-destructive" : "border opacity-50";
                return (
                  <button key={o} onClick={() => choose(idx)} className={`rounded-xl bg-secondary px-4 py-3 text-left transition ${state}`}>{o}</button>
                );
              })}
            </div>
            {picked !== null && (
              <button onClick={next} className="mt-6 rounded-full bg-gradient-glow px-6 py-3 font-bold text-primary-foreground">
                {i + 1 === questions.length ? "Ver resultado" : "Próxima"}
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
