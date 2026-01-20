import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

/**
 * Card component variants
 * 
 * Variants:
 * - default: Standard card with subtle border
 * - glass: Glass morphism effect with backdrop blur
 * - elevated: Card with shadow and hover lift effect
 * - flat: Minimal card without border
 */
const cardVariants = cva(
  'rounded-2xl text-[hsl(var(--card-foreground))] transition-all duration-300',
  {
    variants: {
      variant: {
        default:
          'bg-[hsl(var(--card))] border border-white/10',
        glass:
          'bg-[hsl(var(--card))]/40 backdrop-blur-xl border border-white/10',
        elevated:
          'bg-[hsl(var(--card))] border border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-1',
        flat:
          'bg-[hsl(var(--card))]',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        default: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /**
   * Add Bokeh effect background
   */
  withBokeh?: boolean
}

/**
 * Berget Design System Card Component
 * 
 * A versatile card component with multiple variants and optional Bokeh effect.
 * 
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card description</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     Content goes here
 *   </CardContent>
 * </Card>
 * ```
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, withBokeh = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding }), 'relative', className)}
      {...props}
    >
      {withBokeh && <Bokeh />}
      <div className="relative z-10">{children}</div>
    </div>
  )
)
Card.displayName = 'Card'

/**
 * Bokeh background effect component
 * Subtle animated glow circles in the background
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
 * Card Header - Contains title and description
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
 * Card Title - Heading for the card
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
 * Card Description - Subheading for the card
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
 * Card Content - Main content area
 */
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

/**
 * Card Footer - Bottom section of the card
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
  cardVariants,
}
