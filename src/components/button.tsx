import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

export default function Button({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'h-12 bg-themeBlue rounded-xl text-white px-8',
        {},
        className
      )}
      {...props}
    />
  );
}
