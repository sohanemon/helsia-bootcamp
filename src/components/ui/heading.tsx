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
        'text-themeText-dark font-bold ',
        { 'text-4xl tracking-wider': cta },
        className
      )}
      {...props}
    />
  );
}
