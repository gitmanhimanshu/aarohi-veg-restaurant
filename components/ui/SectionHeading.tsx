import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'left';
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {kicker && (
        <Reveal>
          <span className={cn('eyebrow', light && 'text-gold-400')}>
            <span className="h-px w-6 bg-current" />
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={cn(
            'heading-serif text-balance text-3xl sm:text-4xl md:text-5xl',
            light && 'text-cream'
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p
            className={cn(
              'max-w-2xl text-base leading-relaxed md:text-lg',
              light ? 'text-cream/70' : 'text-forest-700/70',
              align === 'center' && 'mx-auto'
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
