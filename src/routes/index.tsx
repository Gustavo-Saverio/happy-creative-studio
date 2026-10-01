import { createFileRoute, Link } from "@tanstack/react-router";
import { BellRing, CalendarDays, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FavoriteButton, FightRow, LiveEventCard } from "@/components/event-card";
import { OctagonShell, SectionTitle } from "@/components/octagon-shell";
import { usePersistentState } from "@/hooks/use-persistent-state";

const hero = "https://lh3.googleusercontent.com/aida-public/AB6AXuDNrCbeVkaUhlbcJwGzAkf0G-iDU8hQ-F3kiQSk1sws04FI2Z5yhaNFKn_2wp0eYnOlTCbqrclGPgZwF0Y0VtF_R85B1nDhwveGvTaz4TYBN8PU7ca7dwUTOPe20TPywWHNqZG7Zk0YYNriMDaCrs8-SmYLsTMCnrRJX6YEPZAfOgKXigNvfyIgWvaWrHV6jCtV4enP7MnRFjwgKkuVtk7IffRFgifnGqq3h_Pw2-d-jEmv3nJHGW3e";
const blaydes = "https://lh3.googleusercontent.com/aida-public/AB6AXuBlCEviMfBWkZi0XRSzkMbnGeWV6xG6gBQZpbe-JcV8d8FUNpYZLMuLQB3wMwXQTuEtS2y41lq9QxlC-7A07NrwPeFbSwe3pF3X-O-xG3OXpl5uUQ4AYx9gZSAQcqDFoYOIYjU_Jc_KKY6kXAXOdFhg6YqKhQWGA2E9UvFAXOBmxQgxuPtezWJuIWuAWy7Vn15fc6wQT-acPIU9mvdi9mLDQIC9fNqSp1HVbEe1slfRwc-CX6eb8tS3";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Eventos — OctagonLive" }, { name: "description", content: "Calendário de eventos e cards de MMA ao vivo." }, { property: "og:title", content: "Eventos — OctagonLive" }, { property: "og:description", content: "Calendário de eventos e cards de MMA ao vivo." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: EventsPage,
});

function EventsPage() {
  const [favorite, setFavorite] = usePersistentState("favorite-event", false);
  const [alert, setAlert] = usePersistentState("walkout-alert", false);
  const [filter, setFilter] = useState("Todos");
  return <OctagonShell title="Eventos">
    <section className="relative h-[286px] overflow-hidden rounded-lg bg-card bg-cover bg-center p-4 shadow-xl" style={{ backgroundImage: `url(${hero})` }}>
      <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--card)_4%,transparent_75%)]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex justify-between"><span className="tag bg-secondary text-secondary-foreground">🏆 Cinturão meio-pesado</span><FavoriteButton active={favorite} onClick={() => setFavorite(!favorite)} /></div>
        <div className="mt-auto"><p className="font-display text-xs font-bold uppercase text-secondary">Em 2d 14h 28m</p><h1 className="mt-1 font-display text-4xl font-bold uppercase">Pereira <span className="text-primary">vs.</span> Procházka 3</h1><p className="text-xs text-accent-foreground">Sábado, 23:00 BRT • Qudos Bank Arena, Sydney</p></div>
        <Button onClick={() => setAlert(!alert)} className="mt-4 h-12 rounded-sm font-display text-base font-bold uppercase"><BellRing />{alert ? "Alerta de walkout ativado" : "Definir alerta de walkout"}</Button>
      </div>
    </section>
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 py-4">
      {["Todos", "Pay-per-view", "Fight Nights", "★ Favoritos (3)", "Encerrados"].map((item) => <Button key={item} size="sm" variant={filter === item ? "default" : "secondary"} className="shrink-0 rounded-full font-display text-xs uppercase" onClick={() => setFilter(item)}>{item}</Button>)}
    </div>
    {filter !== "Encerrados" && <LiveEventCard />}
    <SectionTitle icon={<span className="block h-4 w-1 rounded bg-primary" />} title={filter === "Encerrados" ? "Eventos encerrados" : "Card principal"} meta="5 lutas • 23:00 BRT" />
    <div className="overflow-hidden rounded-lg">
      <FightRow left="Curtis Blaydes" right="Jailton Almeida" leftMeta="17-4-0 • #5 • Odds 1.72" rightMeta="20-2-0 • #7 • Odds 2.15" status="Em andamento" leftImage={blaydes} />
      <FightRow left="Gilbert Burns" right="Jack Della M." leftMeta="22-6-0 • #6 • Odds 1.88" rightMeta="16-2-0 • #11 • Odds 1.95" status="A seguir" />
      <FightRow left="Renato Moicano" right="Jalin Turner" leftMeta="19-5-1 • #10" rightMeta="14-7-0 • #12" status="Confirmado" />
      <FightRow left="Petr Yan" right="Song Yadong" leftMeta="17-5-0 • #4" rightMeta="21-7-1 • #7" status="Confirmado" />
    </div>
    <Button asChild variant="secondary" className="mt-5 h-14 w-full justify-between rounded-sm font-display text-base font-bold uppercase"><Link to="/live"><span><CalendarDays className="mr-2 inline size-5" /> Abrir central ao vivo</span><span>›</span></Link></Button>
  </OctagonShell>;
}