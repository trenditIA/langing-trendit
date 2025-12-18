import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface FloatingBreadcrumbProps {
  items: BreadcrumbItem[];
}

export function FloatingBreadcrumb({ items }: FloatingBreadcrumbProps) {
  return (
    <div className="absolute top-4 left-0 right-0 z-20 px-6 lg:px-12">
      <div className="max-w-[1100px] mx-auto">
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md"
          style={{
            background: 'rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {item.href ? (
                <a
                  href={item.href}
                  className="text-[12px] lg:text-[13px] text-white/70 hover:text-white transition-colors hover:underline decoration-white/40 underline-offset-2"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 500
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className="text-[12px] lg:text-[13px] text-white truncate max-w-[140px] sm:max-w-[200px] lg:max-w-none"
                  style={{
                    fontFamily: 'Campton, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontWeight: 600
                  }}
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
              {idx < items.length - 1 && (
                <ChevronRight className="size-3 text-white/40 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
