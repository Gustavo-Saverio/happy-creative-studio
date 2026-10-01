import { Link, useRouterState } from "@tanstack/react-router";
import { Bell, CalendarDays, Radio, Star, UserRound } from "lucide-react";
import type { ReactNode } from "react";

const avatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuCIyInam6x7jfqAhQ3D_5f65JCiZGrUeVxjhb1td7nxxFC-AhQ2scCBP888Gl_fFei6LXyJuF3r3X1x_dLLtZbxNbz-0oCfMUldzFNMfrwEI4csjTaAJoMhDm_jjEhGv7fYjEem2T7ue_KirRiUaMbLcQ4_vbUE5duK0LIOM8SAi3gUoMaHv7BAGNL4Z8fJ0Fx_TStt3TMXWQlSt4EXiY3uCGZDlulIgQZ6PRuBOPm_iP8pXH5N1jNZ";

const nav = [
  { to: "/" as const, label: "Eventos", icon: CalendarDays },
  { to: "/live" as const, label: "Ao vivo", icon: Radio },
  { to: "/fighters" as const, label: "Lutadores", icon: UserRound },
  { to: "/favorites" as const, label: "Favoritos", icon: Star },
];

export function OctagonShell({ title, children }: { title: string; children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[680px] items-center justify-between px-4">
          <Link to="/" className="flex min-w-0 items-center gap-2" aria-label="OctagonLive — Eventos">
            <span className="logo-mark"><span /></span>
            <span className="leading-none">
              <strong className="block font-display text-[18px] uppercase">Octagon<span className="text-primary">Live</span></strong>
              <small className="block font-display text-[9px] font-bold uppercase text-muted-foreground">{title}</small>
            </span>
          </Link>
          <span className="live-pill"><i /> Live 12ms</span>
          <div className="flex items-center gap-2">
            <Bell className="size-5 text-accent-foreground" aria-label="Notificações" />
            <img src={avatar} alt="Perfil de Rodrigo Silva" className="size-9 rounded-full object-cover" />
          </div>
        </div>
      </header>
      <main className="mx-auto min-h-screen max-w-[680px] px-4 pb-28 pt-20">{children}</main>
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border/50 bg-nav/95 backdrop-blur-xl" aria-label="Navegação principal">
        <div className="mx-auto grid h-[74px] max-w-[680px] grid-cols-4 px-2 pb-[env(safe-area-inset-bottom)]">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.to;
            return <Link key={item.to} to={item.to} className={active ? "nav-item nav-item-active" : "nav-item"}>
              <span className="relative"><Icon className="size-5" />{item.label === "Favoritos" && <b>3</b>}</span>
              <span>{item.label}</span>
            </Link>;
          })}
        </div>
      </nav>
    </div>
  );
}

export function SectionTitle({ icon, title, meta }: { icon: ReactNode; title: string; meta?: string }) {
  return <div className="mb-2 mt-5 flex items-center gap-2 font-display uppercase">
    <span className="text-primary">{icon}</span><h2 className="text-xl font-bold">{title}</h2>
    {meta && <span className="ml-auto text-[11px] font-bold text-accent-foreground">{meta}</span>}
  </div>;
}