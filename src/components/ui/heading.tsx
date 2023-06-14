import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

export default function Heading({
  className,
  cta,
  ...props
}: HtmlHTMLAttributes<HTMLHeadElement> & { cta?: boolean }) {
  return (
    <h1
      className={cn(
        'text-themeText-dark text-3xl leading-relaxed font-bold font-grot ',
        { 'text-4xl leading-normal': cta },
        className
      )}
      {...props}
    />
  );
}
