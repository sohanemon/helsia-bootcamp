import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

export default function Button({
  className,
  white,
  outline,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement> & {
  white?: boolean;
  outline?: boolean;
}) {
  return (
    <button
      className={cn(
        'h-12 font-semibold bg-themeBlue rounded-xl whitespace-nowrap flex items-center gap-5 shadow-2xl text-white px-8',
        {
          'bg-white text-themeBlue': white,
          'bg-transparent text-themeBlue border-current border shadow-none w-full flex justify-center':
            outline,
        },

        className
      )}
      {...props}
    />
  );
}
