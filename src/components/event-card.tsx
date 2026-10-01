import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FightRow({ left, right, leftMeta, rightMeta, status, leftImage, rightImage }: { left: string; right: string; leftMeta: string; rightMeta: string; status: string; leftImage?: string; rightImage?: string }) {
  return <div className="fight-row">
    <div className="min-w-0 flex-1 text-left">{leftImage && <img src={leftImage} alt="" />}<strong>{left}</strong><small>{leftMeta}</small></div>
    <span className="text-center"><em>{status}</em><b>VS</b></span>
    <div className="min-w-0 flex-1 text-right">{rightImage && <img src={rightImage} alt="" />}<strong>{right}</strong><small>{rightMeta}</small></div>
  </div>;
}

export function FavoriteButton({ active, onClick, label = "Favoritar" }: { active: boolean; onClick: () => void; label?: string }) {
  return <Button variant="ghost" size="icon" aria-label={label} aria-pressed={active} onClick={onClick} className="star-button">
    <Star className={active ? "fill-current text-secondary" : "text-accent-foreground"} />
  </Button>;
}

export function LiveEventCard() {
  return <section className="panel overflow-hidden">
    <div className="flex items-center justify-between border-b border-border px-3 py-2 font-display text-[11px] font-bold uppercase text-accent-foreground">
      <span><i className="mr-1.5 inline-block size-2 rounded-full bg-primary" /> Ao vivo agora • Card principal</span><span>Round 3 / 5</span>
    </div>
    <div className="p-3">
      <span className="tag tag-muted">Peso pesado 120.2 kg</span>
      <div className="mt-2 flex items-center justify-between"><div><h3 className="font-display text-2xl font-bold uppercase">UFC Fight Night: Blaydes vs. Almeida</h3><p className="text-xs text-accent-foreground">Apex Facility, Las Vegas • Octógono Principal</p></div><Star className="size-5 text-accent-foreground" /></div>
      <div className="score-box mt-3"><span>C. Blaydes #5</span><strong>02:18</strong><span>J. Almeida #7</span></div>
      <div className="flex justify-between text-[10px] font-bold uppercase"><span>42 golpes conectados</span><span className="text-tertiary">58 golpes (+3 quedas)</span></div>
      <div className="mt-2 flex h-2 overflow-hidden rounded-full"><i className="w-[42%] bg-primary" /><i className="flex-1 bg-tertiary" /></div>
      <Button asChild className="mt-3 h-12 w-full rounded-sm font-display text-base font-bold uppercase">
        <Link to="/live">◎ &nbsp; Acompanhar luta ao vivo</Link>
      </Button>
    </div>
  </section>;
}