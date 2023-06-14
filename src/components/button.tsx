import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

export default function Button({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn('', {}, className)} {...props} />;
}
