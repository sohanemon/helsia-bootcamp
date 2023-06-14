import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

export default function Button({
  className,
  white,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement> & { white?: boolean }) {
  return (
    <button
      className={cn(
        'h-12 bg-themeBlue rounded-xl whitespace-nowrap flex items-center gap-5 shadow-2xl text-white px-8',
        { 'bg-white text-themeBlue': white },
        className
      )}
      {...props}
    />
  );
}
