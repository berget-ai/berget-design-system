# Missing Components

This document identifies missing components that should be added to the Berget Design System.

## Current Component Count

| Level         | Count | Components                                                                                                    |
| ------------- | ----- | ------------------------------------------------------------------------------------------------------------- |
| **Atoms**     | 12    | Alert, Badge, Berget Logotype, Berget Symbol, Button, Checkbox, Divider, Input, Link, Panel, Select, Textarea |
| **Molecules** | 4     | Card, List, SectionHeader, Tabs                                                                               |
| **Organisms** | 8     | AIChatBox, BlogCard, EmailTemplate, FeatureCards, HeroBlock, PricingCards, Stepper, Terminal                  |
| **Total**     | 24    | -                                                                                                             |

---

## Missing Components

### High Priority Atoms

These are fundamental building blocks that are commonly used across most applications.

#### 1. Radio

**Purpose:** Single choice selection from a list of options.

**Use Cases:**

- Form radio buttons (gender, payment method, etc.)
- Settings toggles (light/dark mode)
- Preference selection

**Props:**

- `value` - Current value
- `options` - Array of { value, label }
- `onChange` - Change handler
- `variant` - Visual style (default, primary, subtle)
- `size` - sm, md, lg
- `disabled` - Disabled state

**Example:**

```tsx
<Radio
    value={selected}
    options={[
        { value: "light", label: "Light Mode" },
        { value: "dark", label: "Dark Mode" },
        { value: "auto", label: "Auto" }
    ]}
    onChange={setSelected}
/>
```

---

#### 2. Switch

**Purpose:** Binary toggle for on/off states.

**Use Cases:**

- Settings toggles (notifications, auto-save)
- Feature flags
- Preferences

**Props:**

- `checked` - Current state
- `onChange` - Change handler
- `label` - Optional label
- `disabled` - Disabled state
- `size` - sm, md, lg

**Example:**

```tsx
<Switch
    checked={notificationsEnabled}
    onChange={setNotificationsEnabled}
    label="Enable notifications"
/>
```

---

#### 3. Spinner

**Purpose:** Loading state indicator.

**Use Cases:**

- Button loading states
- Page loading
- Async operations

**Props:**

- `size` - sm, md, lg
- `variant` - default, primary, white
- `label` - Optional accessibility label

**Example:**

```tsx
<Spinner size="md" variant="primary" />
```

---

#### 4. Progress

**Purpose:** Progress indication for operations.

**Use Cases:**

- File uploads
- Multi-step forms
- Long-running operations

**Props:**

- `value` - Progress value (0-100)
- `variant` - default, primary, success
- `size` - sm, md, lg
- `showLabel` - Show percentage label

**Example:**

```tsx
<Progress value={75} variant="primary" showLabel />
```

---

#### 5. Avatar

**Purpose:** User avatar display.

**Use Cases:**

- User profile pictures
- Team member displays
- Comment authors

**Props:**

- `src` - Image source
- `alt` - Alt text
- `name` - Fallback name for initials
- `size` - xs, sm, md, lg, xl
- `variant` - circle, rounded, square

**Example:**

```tsx
<Avatar src="/avatar.jpg" alt="John Doe" name="John Doe" size="md" variant="circle" />
```

---

#### 6. Tooltip

**Purpose:** Hover information display.

**Use Cases:**

- Button explanations
- Icon meanings
- Additional context

**Props:**

- `content` - Tooltip content
- `placement` - top, bottom, left, right
- `delay` - Show delay in ms

**Example:**

```tsx
<Tooltip content="Click to save" placement="top">
    <Button>Save</Button>
</Tooltip>
```

---

#### 7. Dialog

**Purpose:** Modal dialog for focused interactions.

**Use Cases:**

- Confirmations
- Forms
- Important messages

**Props:**

- `open` - Open state
- `onClose` - Close handler
- `title` - Dialog title
- `size` - sm, md, lg, xl, full

**Example:**

```tsx
<Dialog open={isOpen} onClose={setIsOpen} title="Confirm Delete">
    <DialogContent>
        <p>Are you sure you want to delete this item?</p>
    </DialogContent>
    <DialogFooter>
        <Button variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
        </Button>
        <Button variant="destructive" onClick={handleDelete}>
            Delete
        </Button>
    </DialogFooter>
</Dialog>
```

---

#### 8. DropdownMenu

**Purpose:** Menu with selectable options.

**Use Cases:**

- User account menu
- Action menus
- Settings menus

**Props:**

- `trigger` - Trigger element
- `items` - Menu items array

**Example:**

```tsx
<DropdownMenu
    trigger={<Button>Menu</Button>}
    items={[
        { label: "Profile", onClick: () => {} },
        { label: "Settings", onClick: () => {} },
        { label: "Logout", onClick: () => {} }
    ]}
/>
```

---

#### 9. Breadcrumb

**Purpose:** Navigation breadcrumbs.

**Use Cases:**

- Page hierarchy
- Navigation path
- File paths

**Props:**

- `items` - Breadcrumb items array

**Example:**

```tsx
<Breadcrumb
    items={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Details" }
    ]}
/>
```

---

#### 10. Pagination

**Purpose:** Page navigation.

**Use Cases:**

- Data tables
- Search results
- Content lists

**Props:**

- `currentPage` - Current page
- `totalPages` - Total pages
- `onPageChange` - Page change handler
- `showEdges` - Show first/last page buttons

**Example:**

```tsx
<Pagination currentPage={1} totalPages={10} onPageChange={setPage} showEdges />
```

---

### High Priority Molecules

These are composed components that combine atoms for common patterns.

#### 1. FormGroup

**Purpose:** Label + Input + Error message combination.

**Use Cases:**

- Form fields with validation
- Labeled inputs
- Error-prone inputs

**Props:**

- `label` - Field label
- `error` - Error message
- `required` - Required indicator
- `description` - Helper text

**Example:**

```tsx
<FormGroup
    label="Email"
    error={errors.email}
    required
    description="We'll never share your email"
>
    <Input type="email" name="email" />
</FormGroup>
```

---

#### 2. Form

**Purpose:** Form container with validation.

**Use Cases:**

- Complete forms
- Multi-section forms
- Settings forms

**Props:**

- `onSubmit` - Submit handler
- `disabled` - Disabled state
- `loading` - Loading state

**Example:**

```tsx
<Form onSubmit={handleSubmit} loading={isSubmitting}>
    <FormGroup label="Name">
        <Input name="name" />
    </FormGroup>
    <Button type="submit">Submit</Button>
</Form>
```

---

#### 3. Table

**Purpose:** Data table with headers, rows, cells.

**Use Cases:**

- Data displays
- Lists
- Reports

**Props:**

- `columns` - Column definitions
- `data` - Row data
- `sortable` - Enable sorting
- `selectable` - Enable row selection

**Example:**

```tsx
<Table
    columns={[
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "role", label: "Role" }
    ]}
    data={users}
    sortable
/>
```

---

#### 4. SearchInput

**Purpose:** Input with search icon/button.

**Use Cases:**

- Search bars
- Filter inputs
- Find functionality

**Props:**

- `onSearch` - Search handler
- `placeholder` - Placeholder text
- `debounceMs` - Debounce delay

**Example:**

```tsx
<SearchInput onSearch={handleSearch} placeholder="Search..." debounceMs={300} />
```

---

### Medium Priority Atoms

#### 1. Slider

**Purpose:** Range selection slider.

**Use Cases:**

- Price ranges
- Quantity selection
- Settings adjustments

---

#### 2. Rating

**Purpose:** Star rating display.

**Use Cases:**

- Product ratings
- Review scores
- Feedback

---

#### 3. Chip

**Purpose:** Removable tags/labels.

**Use Cases:**

- Selected filters
- Tags
- Categories

---

#### 4. Skeleton

**Purpose:** Loading placeholder.

**Use Cases:**

- Content loading states
- Image placeholders
- Text placeholders

---

### Medium Priority Molecules

#### 1. DatePicker

**Purpose:** Date selection.

**Use Cases:**

- Date inputs
- Date ranges
- Scheduling

---

#### 2. TimePicker

**Purpose:** Time selection.

**Use Cases:**

- Time inputs
- Scheduling
- Reminders

---

#### 3. FileUpload

**Purpose:** File upload with preview.

**Use Cases:**

- Profile pictures
- Document uploads
- Media uploads

---

#### 4. Stepper (Already exists)

**Status:** ✅ Already implemented in organisms

---

## Implementation Priority

### Phase 1 - Core Form Elements (Week 1)

1. Radio
2. Switch
3. FormGroup
4. Form

### Phase 2 - Feedback & Loading (Week 2)

1. Spinner
2. Progress
3. Tooltip

### Phase 3 - Complex Components (Week 3)

1. Dialog
2. DropdownMenu
3. Table

### Phase 4 - Navigation (Week 4)

1. Breadcrumb
2. Pagination
3. SearchInput

### Phase 5 - User Elements (Week 5)

1. Avatar
2. Chip
3. Skeleton

### Phase 6 - Date/Time (Week 6)

1. DatePicker
2. TimePicker
3. FileUpload

---

## Component Design Guidelines

When implementing new components, follow these guidelines:

### 1. Use Existing Patterns

- Follow the patterns in existing atoms/molecules
- Use `class-variance-authority` for variants
- Use `cn()` utility for className merging
- Use `React.forwardRef` for ref forwarding

### 2. Accessibility First

- Implement proper ARIA attributes
- Support keyboard navigation
- Include proper labels and descriptions
- Test with screen readers

### 3. Consistent API

- Use semantic prop names (`variant`, `size`, `disabled`)
- Follow existing naming conventions
- Provide sensible defaults
- Document all props with JSDoc

### 4. Storybook Stories

- Create comprehensive stories
- Include real-world examples
- Show all variants
- Test edge cases

### 5. TypeScript Types

- Export component props interface
- Use proper type definitions
- Support generic types where appropriate

---

## Template for New Components

````tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const componentVariants = cva("base-classes", {
    variants: {
        variant: {
            default: "default-classes",
            primary: "primary-classes",
            subtle: "subtle-classes"
        },
        size: {
            sm: "sm-classes",
            md: "md-classes",
            lg: "lg-classes"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "md"
    }
});

export interface ComponentProps
    extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof componentVariants> {
    children: React.ReactNode;
}

/**
 * Component Name
 *
 * Description of what this component does.
 *
 * **Variants:**
 * - `default` - Default style
 * - `primary` - Primary style
 * - `subtle` - Subtle style
 *
 * **Sizes:**
 * - `sm` - Small size
 * - `md` - Medium size (default)
 * - `lg` - Large size
 *
 * @example
 * ```tsx
 * <Component variant="primary" size="md">
 *   Content
 * </Component>
 * ```
 */
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
    ({ className, variant, size, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(componentVariants({ variant, size }), className)}
            {...props}
        >
            {children}
        </div>
    )
);
Component.displayName = "Component";

export { Component, componentVariants };
````

---

## Resources

- **[ATOMIC-DESIGN.md](./ATOMIC-DESIGN.md)** - Atomic Design implementation
- **[COMPONENT-GUIDE.md](./COMPONENT-GUIDE.md)** - Component selection guide
- **[README.md](./README.md)** - Design system overview

---

**Last Updated:** 2025-02-09
**Total Missing:** 16 components (10 atoms, 6 molecules)
