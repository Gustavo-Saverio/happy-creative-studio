import { createFileRoute } from "@tanstack/react-router";
import { Crosshair, Gavel, Timer, Vote } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { OctagonShell } from "@/components/octagon-shell";

const pereira = "https://lh3.googleusercontent.com/aida-public/AB6AXuAUjHj-EFaLi4WPHjVchMtl6viQ65pgKUsj8fmUCFh-BMOqsxUDxvgDGcssIJsUVsbwJMmjX6WtgpWgHfJIYmJMGphvbG8oee8HvLpZl3O5s5kLok41YLbABbKCgtMLONWkqRAoZcFDFqrldaldrh3lECjjQ3_4Mee2GF0tGVjxAijYZAk3hcopMpt5NDeoRT-wnvePQzdcLSMZFvL2429H9bKbNCYot0kFLU70y3TW7z9K2BGW_Jlr";
const jiri = "https://lh3.googleusercontent.com/aida-public/AB6AXuD3d7pk5k5gFx9BeRB9jp3HpGMkuZA5st26I5QbnSA93XDtfHCpVgOVx5c8oMF_JEGaoLbW9upebsfRbl7WY-f2LWDM8Wavt0mZYRdMEqt3Pq1kepuDAUiMjByUbK2weGjNLpZDGKNpkkqSqqhLbuarh0VyHaTU9MDjUsaJGnvaLc_-oHjftkPGXCFRUfdMj907lH3cF_1MY_1XhQCx8zxbo-0RXHBQ7xBZeuqXaBjATb3g2jAxaox5";

export const Route = createFileRoute("/live")({ head: () => ({ meta: [{ title: "Ao vivo — OctagonLive" }, { name: "description", content: "Estatísticas e pontuação ao vivo de Pereira vs. Procházka." }, { property: "og:title", content: "Ao vivo — OctagonLive" }, { property: "og:description", content: "Estatísticas e pontuação ao vivo de Pereira vs. Procházka." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: LivePage });

function LivePage() {
  const [tab, setTab] = useState("Stats ao vivo");
  const [voted, setVoted] = useState(false);
  return <OctagonShell title="Ao vivo">
    <div className="mb-2 flex justify-between font-display text-[10px] font-bold uppercase text-tertiary"><span>● Latência 18ms • Dados compactos ativos</span><span>CH 04 HD</span></div>
    <div className="-mx-4 bg-card px-4 py-2 font-display text-lg font-bold uppercase"><i className="mr-1 inline-block h-4 w-1.5 rounded bg-secondary" /> UFC 312: Cinturão meio-pesado (205 lbs)</div>
    <section className="-mx-4 grid grid-cols-[1fr_auto_1fr] items-center bg-muted px-4 py-3 font-display uppercase">
      <div className="flex items-center gap-2"><img src={pereira} alt="Alex Pereira" className="size-14 rounded-sm object-cover" /><div><small className="text-secondary">Campeão • BRA</small><strong className="block text-lg">A. Pereira</strong><small>12-2-0</small></div></div>
      <div className="text-center"><span className="block text-[10px] text-primary">Round 3</span><strong className="block text-4xl">03:24</strong><small className="text-tertiary">Octógono</small></div>
      <div className="flex flex-row-reverse items-center gap-2 text-right"><img src={jiri} alt="Jiří Procházka" className="size-14 rounded-sm object-cover" /><div><small className="text-accent-foreground">CZE • #1 Rank</small><strong className="block text-lg">J. Procházka</strong><small>31-5-1</small></div></div>
    </section>
    <div className="mt-3 grid grid-cols-3 rounded-sm bg-muted p-1">{["Stats ao vivo", "Lance a lance", "Juiz virtual"].map((name) => <Button key={name} variant={tab === name ? "default" : "ghost"} className="h-9 rounded-sm font-display text-xs uppercase" onClick={() => setTab(name)}>{name}</Button>)}</div>
    {tab === "Stats ao vivo" ? <Stats /> : <div className="panel mt-2 min-h-80 p-5"><h2 className="font-display text-2xl font-bold uppercase">{tab}</h2><p className="mt-2 text-sm text-accent-foreground">{tab === "Lance a lance" ? "03:24 — Procházka pressiona. Pereira responde com jab e low kick." : "A comunidade aponta vantagem de Pereira neste round."}</p></div>}
    <Button onClick={() => setVoted(true)} className="mt-3 h-12 w-full justify-between rounded-sm font-display text-base font-bold uppercase"><span><Vote className="mr-2 inline" />{voted ? "Voto registrado" : "Pontuar round 3 no juiz virtual"}</span><span>{voted ? "✓" : "10 - 9 Pereira  ›"}</span></Button>
  </OctagonShell>;
}

function Stats() { return <>
  <section className="panel mt-2 p-3"><div className="flex items-end justify-between font-display"><strong className="text-2xl text-primary">54 <small className="text-sm text-accent-foreground">/82 (65%)</small></strong><span className="text-[10px] font-bold uppercase text-accent-foreground">Golpes significativos</span><strong className="text-2xl text-secondary"><small className="text-sm text-accent-foreground">(53%) 76/</small> 41</strong></div><div className="mt-2 flex h-3 overflow-hidden rounded-sm"><i className="w-[55%] bg-primary"/><i className="flex-1 bg-secondary"/></div><div className="mt-2 flex justify-between font-display text-[10px] font-bold uppercase"><span className="text-tertiary">+13 golpes conectados</span><span>Precisão superior</span></div></section>
  <section className="panel mt-2 p-3"><div className="flex justify-between"><h2 className="font-display text-lg font-bold uppercase">Mapa de golpes por alvo</h2><span className="tag bg-muted">R1 - R3 acumulado</span></div><div className="mt-2 grid grid-cols-[1fr_1.2fr_1fr] items-center text-center font-display uppercase"><div className="space-y-3 text-left"><Hit label="Cabeça" value="32" pct="59%"/><Hit label="Corpo" value="14" pct="26%"/><Hit label="Pernas" value="08" pct="15%"/></div><div className="flex h-48 items-center justify-center rounded-sm bg-nav"><Crosshair className="size-20 text-primary" /></div><div className="space-y-3 text-right"><Hit label="Cabeça" value="28" pct="68%"/><Hit label="Corpo" value="09" pct="22%"/><Hit label="Pernas" value="04" pct="10%"/></div></div></section>
  <div className="mt-2 grid grid-cols-2 gap-2"><Duel icon={<Gavel/>} label="Quedas / Takedowns" left="0/1" right="1/3" note="Defesa Pereira: 67%"/><Duel icon={<Timer/>} label="Controle de solo" left="0:15" right="1:42" note="Vantagem Procházka"/></div>
  </>; }
function Hit({ label, value, pct }: { label:string; value:string; pct:string }) { return <div><small className="text-[10px] text-accent-foreground">{label}</small><strong className="block text-xl text-primary">{value}</strong><small>{pct}</small></div>; }
function Duel({ icon, label, left, right, note }: { icon:ReactNode; label:string; left:string; right:string; note:string }) { return <div className="metric-card font-display uppercase"><div className="flex items-center justify-between text-primary">{icon}<span className="text-[9px] font-bold text-accent-foreground">{label}</span></div><div className="mt-3 flex items-end justify-between"><strong className="text-2xl text-primary">{left}</strong><small>vs</small><strong className="text-2xl text-secondary">{right}</strong></div><div className="mt-1 h-1.5 bg-[linear-gradient(to_right,var(--primary)_25%,var(--secondary)_25%)]"/><small className="text-[9px]">{note}</small></div>; }