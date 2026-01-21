import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import { Check, LucideIcon } from 'lucide-react'
import { Panel } from '../primitives/Panel'

const featureCardVariants = cva('', {
  variants: {
    variant: {
      default: '',
      moss: 'bg-[#52B788]/5 border-[#74C69D]/20 hover:bg-[#52B788]/10',
      sage: 'bg-[#74C69D]/5 border-[#74C69D]/20 hover:bg-[#74C69D]/10',
      earth: 'bg-[#2D6A4F]/5 border-[#40916C]/20 hover:bg-[#2D6A4F]/10',
      stone: 'bg-[hsl(var(--primary))]/5 border-[hsl(var(--primary))]/20 hover:bg-[hsl(var(--primary))]/10',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface FeatureCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    VariantProps<typeof featureCardVariants> {
  /**
   * Icon component from lucide-react
   */
  icon?: LucideIcon
  /**
   * Icon color
   */
  iconColor?: string
  /**
   * Card title
   */
  title: string
  /**
   * Card description
   */
  description?: string
  /**
   * List of features/items
   */
  features?: string[]
  /**
   * Show checkmarks for features
   */
  showCheckmarks?: boolean
}

/**
 * Feature Card Component
 * 
 * Card for displaying features with icon, title, description, and feature list.
 * Built on Panel component for consistency.
 * 
 * **Variants:**
 * - `default` - Standard panel styling
 * - `moss` - Moss green tint (#52B788)
 * - `sage` - Sage green tint (#74C69D)
 * - `earth` - Earth tone tint (#2D6A4F)
 * - `stone` - Berget Stone tint
 * 
 * **Design System Role:**
 * FeatureCard extends Panel with opinionated structure for feature showcases.
 * Used throughout marketing pages for consistent feature presentation.
 * 
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={Cloud}
 *   iconColor="text-[#52B788]"
 *   title="Serverless Inference"
 *   description="Deploy AI models without managing infrastructure"
 *   features={["Auto-scaling", "Pay per use", "EU regions"]}
 *   variant="moss"
 * />
 * ```
 */
const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      className,
      variant,
      icon: Icon,
      iconColor = 'text-[#52B788]',
      title,
      description,
      features,
      showCheckmarks = true,
      ...props
    },
    ref
  ) => {
    return (
      <Panel
        ref={ref}
        variant={variant === 'default' ? 'default' : 'outline'}
        className={cn(
          'transition-colors group',
          featureCardVariants({ variant }),
          className
        )}
        {...props}
      >
        {Icon && (
          <div className="mb-4">
            <Icon className={cn('w-8 h-8', iconColor)} />
          </div>
        )}

        <h3 className="text-xl font-medium mb-3">{title}</h3>

        {description && <p className="text-white/60 mb-4">{description}</p>}

        {features && features.length > 0 && (
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                {showCheckmarks && (
                  <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#52B788]" />
                  </div>
                )}
                <span className="text-sm text-white/80 flex-1">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </Panel>
    )
  }
)
FeatureCard.displayName = 'FeatureCard'

export { FeatureCard, featureCardVariants }
