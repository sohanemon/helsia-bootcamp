import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

export default function GrayText({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        'text-themeText-dark/60 tracking-wide leading-7 ',
        className
      )}
      {...props}
    />
  );
}
