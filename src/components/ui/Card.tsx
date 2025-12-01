import * as React from "react";
import { cn } from "../../utils/cn";

// Bokeh background component for subtle animated glow effect
const Bokeh = () => (
    <div className="bokeh">
        <div
            className="bokeh-circle"
            style={
                {
                    "--color": "rgba(96, 165, 128, 0.4)",
                    width: "300px",
                    height: "300px",
                    top: "-50px",
                    right: "-50px",
                    animationDelay: "0s"
                } as React.CSSProperties
            }
        />
        <div
            className="bokeh-circle"
            style={
                {
                    "--color": "rgba(229, 221, 213, 0.3)",
                    width: "250px",
                    height: "250px",
                    bottom: "-30px",
                    left: "-30px",
                    animationDelay: "-5s"
                } as React.CSSProperties
            }
        />
        <div
            className="bokeh-circle"
            style={
                {
                    "--color": "rgba(142, 178, 159, 0.3)",
                    width: "200px",
                    height: "200px",
                    top: "40%",
                    left: "60%",
                    animationDelay: "-10s"
                } as React.CSSProperties
            }
        />
    </div>
);

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn("text-white relative", className)} {...props}>
            <Bokeh />
            <div className="relative z-10">{children}</div>
        </div>
    )
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex flex-col space-y-1.5 p-6", className)}
            {...props}
        />
    )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn("text-2xl font-medium leading-none tracking-tight", className)}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-white/60", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("flex items-center p-6 pt-0", className)}
            {...props}
        />
    )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
