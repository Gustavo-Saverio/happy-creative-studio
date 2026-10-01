import { createFileRoute } from "@tanstack/react-router";
import { BellRing, Radio, Settings2, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OctagonShell, SectionTitle } from "@/components/octagon-shell";
import { Switch } from "@/components/ui/switch";
import { usePersistentState } from "@/hooks/use-persistent-state";

const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCeJfeJxM-wANHs0KB3NsaDtBEpjjtwzBo6Sr60bS8aqQFLtgEke2Pw_K5n4xhaGkdBxtu7EKJUgHpZB4JIKiZR4C6572HgJLiMRG8jSSTzanFVZQ2XRU8lxViMsrq6Q-YMC4MAAvgvpOvGjqljDsjFG1sDvWDGRSHy9qhCzNVAaDoRbFOs57j4Y-VPfB5BFSwWWH_ksvzdyfRG-ZeZybEUwEfoauG-C0fv2407nXU-rcGV2WFkEq9z",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBFrjaMteEEcHzihvVw4H1ak0aqeCbwue-BU22u1gIRhMHzotSZJeqdHCAHJFWql3QgtVnMhcY5pxlsRYPA7f1ikUS1ZZsCpoZNAi09Nvd8qTD3u7Vz-Z48-zfrPciI57CtKCAbRV9_7b4yNIAD4k6wCtLho35B3gAWzE3Cnvntz-P0I6ZW6fzPeXVwVDQG0NVaWq83Hi2k6vaEQujQuei2WsSdeSD1mKuON2lICQM2aqml8BptdEz2",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDrPULSRNPdjJleEEDtkLFYq6ibgxA3T4m4sdkTtZcasa77WkAT5U-I41OANA-rekSh1Jd4TilrNGYgq1sPktnCYE03nvGDlY4f7jn8r1XBPV1ETTsCtMzPUxPJ69B5j0mX13Pg7ZfPhj0oSveyMLH1i9vSYPGVTwoXWpkM0EDWzwOgJLhI_sa3HUME2H7gIr3frPq5ZLQgh5_QBiJ0Z_9CNrRHNoa2feIwoY-tJf2nEDuiD4D55wMz"
];
const profile = "https://lh3.googleusercontent.com/aida-public/AB6AXuCXn3KvsD2jmIXJ63i-f3xkdvD2cIDQePmUm2qOCRaCQ2amgD4JW9Yq8smuvrP6pZXkIs4L5V0QHMxfYk1Vr5K9YKqfEJWZCdfZUEPCdZvOOK1nKmOWeoPcquM1kouj23uGP_WMk2l5QHL3fDuvV6jaeevM40BIakaKu9lGaPCjIXanK2qxyRwt01fQld4kc2rhfKNvm78RC649lmgynkS36UckIByvnR_7PLozsIpMDqGIni6hZmZO";

export const Route = createFileRoute("/favorites")({ head: () => ({ meta: [{ title: "Favoritos — OctagonLive" }, { name: "description", content: "Alertas, lutadores favoritos e histórico do juiz virtual." }, { property: "og:title", content: "Favoritos — OctagonLive" }, { property: "og:description", content: "Alertas, lutadores favoritos e histórico do juiz virtual." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: FavoritesPage });

function FavoritesPage() {
  const [warning, setWarning] = usePersistentState("warning-3min", true);
  const [cardAlert, setCardAlert] = usePersistentState("card-alert", true);
  const [result, setResult] = usePersistentState("result-alert", false);
  return <OctagonShell title="Favoritos">
    <section className="panel flex items-center gap-3 p-3"><div className="relative"><img src={profile} alt="Rodrigo Silva" className="size-14 rounded-sm object-cover"/><i className="absolute bottom-0 right-0 size-3 rounded-full bg-tertiary"/></div><div className="flex-1"><h1 className="font-display text-xl font-bold uppercase">Rodrigo Silva <span className="text-secondary">●</span></h1><p className="text-xs text-accent-foreground">Fã Hardcore • Nível 14</p><span className="tag bg-secondary text-secondary-foreground">Assinante Octagon Pro</span></div><Button variant="secondary" size="icon"><Settings2/></Button></section>
    <SectionTitle icon={<BellRing/>} title="Alertas de walkout & luta" meta="Ativo" />
    <section className="rounded-lg border border-primary/20 bg-primary/20 p-3"><div className="flex justify-between font-display text-[10px] font-bold uppercase text-accent-foreground"><span>◷ Próximo walkout agendado</span><span className="text-tertiary">● Sincronizado</span></div><div className="mt-3 flex items-end justify-between"><div><strong className="font-display text-2xl uppercase">Alex Pereira</strong><p className="text-xs text-accent-foreground">UFC 312 • Cinturão Meio-Pesado</p></div><div className="text-right font-display"><strong className="block text-2xl">00:45</strong><small className="uppercase text-accent-foreground">BRT estimado</small></div></div><div className="mt-3 flex justify-between bg-nav/60 p-3 text-xs"><span><Radio className="mr-2 inline size-4 text-tertiary"/>Vibração háptica + sirene do corner</span><b className="text-tertiary">-3 MIN</b></div></section>
    <section className="panel mt-2 divide-y divide-border px-4">{[
      ["Aviso 3 minutos antes da entrada", "Dispara quando o lutador inicia a caminhada", warning, setWarning],
      ["Início do card principal", "Previsto para 23:00 BRT com contagem regressiva", cardAlert, setCardAlert],
      ["Resultado instantâneo via push", "Notificação flash de vitória", result, setResult],
    ].map(([title, copy, checked, set], i) => <label key={String(title)} className="flex min-h-20 items-center gap-3 py-3"><span className="font-display text-lg text-accent-foreground">{i + 1}</span><span className="flex-1"><strong className="block font-display text-lg uppercase">{String(title)}</strong><small className="block text-accent-foreground">{String(copy)}</small></span><Switch checked={Boolean(checked)} onCheckedChange={(v) => (set as (v:boolean)=>void)(v)} /></label>)}</section>
    <SectionTitle icon={<Star className="fill-secondary text-secondary"/>} title="Meus lutadores favoritos" meta="5 monitorados" />
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2">{[
      ["Alex Pereira", "Meio-pesado • 12-2", "UFC 312 • Main Event"], ["Charles Oliveira", "Leve • 35-10", "Camp aberto"], ["Sean O'Malley", "Galo • 18-2", "UFC 314 • Co-main"]
    ].map((f,i)=><article key={f[0]} className="panel w-44 shrink-0 overflow-hidden p-2"><img src={images[i]} alt={f[0]} className="h-28 w-full rounded-sm object-cover"/><h3 className="mt-2 font-display text-xl font-bold uppercase">{f[0]}</h3><p className="font-display text-[10px] uppercase text-accent-foreground">{f[1]}</p><div className="mt-2 bg-nav p-2 text-[11px]"><b className="text-tertiary">{f[2]}</b><p>Aguardando atualização</p></div></article>)}</div>
    <SectionTitle icon={<Trophy/>} title="Histórico juiz virtual & bolão" meta="42 rounds" />
    <section className="panel p-4"><div className="grid grid-cols-2"><div><span className="metric-label">Concordância oficial</span><strong className="metric-value text-tertiary">84%</strong></div><div><span className="metric-label">Rank fãs</span><strong className="metric-value">#12</strong></div></div><p className="mt-3 border-t border-border pt-3 text-sm text-accent-foreground">Você e 89% da comunidade registraram vantagem para Pereira.</p></section>
  </OctagonShell>;
}