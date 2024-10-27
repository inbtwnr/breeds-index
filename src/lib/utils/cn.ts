import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Make it easier to conditionally add Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs))
}
