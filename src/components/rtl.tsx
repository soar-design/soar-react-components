'use client';

/**
 * RTL Support
 * 
 * Re-export DirectionProvider from @radix-ui/react-direction
 * to enable Right-to-Left text direction support.
 * 
 * @example
 * ```tsx
 * import { DirectionProvider } from '@mostaphaqammari/soar-react-components';
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html dir="rtl">
 *       <body>
 *         <DirectionProvider dir="rtl">
 *           {children}
 *         </DirectionProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */

export { DirectionProvider } from '@radix-ui/react-direction';

