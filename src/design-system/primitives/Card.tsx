import * as React from 'react'
import { cn } from '../../utils/cn'
import { Panel, type PanelProps } from './Panel'

export interface CardProps extends Omit<PanelProps, 'padding'> {
  /**
   * Add Bokeh effect background (legacy prop, use bokeh instead)
   * @deprecated Use bokeh prop from Panel instead
   */
  withBokeh?: boolean
}

/**
 * Card Component
 * 
 * Structured content container with optional sections.
 * Built on top of Panel for consistent styling.
 * 
 * **Features:**
 * - Header, Title, Description sections
 * - Content and Footer areas
 * - Optional Bokeh background effect
 * - All Panel variants supported
 * 
 * **Composition:**
 * Card is composed of:
 * - CardHeader (optional)
 * - CardTitle (in header)
 * - CardDescription (in header)
 * - CardContent (main area)
 * - CardFooter (optional)
 * 
 * @example
 * ```tsx
 * <Card variant="elevated">
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Description text</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     Main content goes here
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Action</Button>
 *   </CardFooter>
 * </Card>
 * ```
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, withBokeh = false, bokeh, children, ...props }, ref) => {
    // Support legacy withBokeh prop, but prefer bokeh from Panel
    const shouldShowBokeh = bokeh !== undefined ? bokeh : withBokeh

    return (
      <Panel
        ref={ref}
        padding="none"
        bokeh={shouldShowBokeh}
        className={cn('relative', className)}
        {...props}
      >
        {withBokeh && !bokeh && <Bokeh />}
        <div className="relative z-10">{children}</div>
      </Panel>
    )
  }
)
Card.displayName = 'Card'

/**
 * Bokeh background effect
 * Subtle animated glow circles
 */
const Bokeh = () => (
  <div className="bokeh">
    <div
      className="bokeh-circle"
      style={
        {
          '--color': 'rgba(96, 165, 128, 0.4)',
          width: '300px',
          height: '300px',
          top: '-50px',
          right: '-50px',
          animationDelay: '0s',
        } as React.CSSProperties
      }
    />
    <div
      className="bokeh-circle"
      style={
        {
          '--color': 'rgba(229, 221, 213, 0.3)',
          width: '250px',
          height: '250px',
          bottom: '-30px',
          left: '-30px',
          animationDelay: '-5s',
        } as React.CSSProperties
      }
    />
    <div
      className="bokeh-circle"
      style={
        {
          '--color': 'rgba(142, 178, 159, 0.3)',
          width: '200px',
          height: '200px',
          top: '40%',
          left: '60%',
          animationDelay: '-10s',
        } as React.CSSProperties
      }
    />
  </div>
)

/**
 * Card Header
 * 
 * Container for card title and description.
 */
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

/**
 * Card Title
 * 
 * Main heading for the card.
 */
const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn('text-2xl font-medium leading-none tracking-tight', className)}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

/**
 * Card Description
 * 
 * Supporting text for the card title.
 */
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-[hsl(var(--muted-foreground))]', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

/**
 * Card Content
 * 
 * Main content area of the card.
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

/**
 * Card Footer
 * 
 * Bottom section for actions or metadata.
 */
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
}
