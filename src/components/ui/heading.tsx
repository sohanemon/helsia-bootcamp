import { cn } from '@/lib/utils';
import { HtmlHTMLAttributes } from 'react';

export default function Heading({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLHeadElement>) {
  return <h1 className={cn('', className)} {...props} />;
}
