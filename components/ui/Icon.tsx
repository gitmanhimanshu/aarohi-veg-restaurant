import {
  Leaf,
  Sparkles,
  ShieldCheck,
  Users,
  Wallet,
  Star,
  Sun,
  HeartHandshake,
  Coins,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  Leaf,
  Sparkles,
  ShieldCheck,
  Users,
  Wallet,
  Star,
  Sun,
  HeartHandshake,
  Coins,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Leaf;
  return <Cmp className={className} aria-hidden />;
}
