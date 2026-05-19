# Aurora Component Catalog

Complete reference of all 31 Aurora UI components. Use this to map product requirements to the correct components.

---

## Navigation & Structure

### Breadcrumb
**When to use**: Multi-level page navigation, showing user's location in hierarchy
- Selector: `au-breadcrumb` + `au-breadcrumb-item`
- Auto-collapses with dropdown when items exceed space
- Include back button template for mobile

### Tab
**When to use**: Switching between related content sections on the same page
- Selector: `au-tab`
- Props: `title` (required), `subtitle`, `disabled`, `indicator` (badge count)
- Supports icon via `#auTabIcon` template

### Stepper
**When to use**: Multi-step processes (checkout, onboarding, wizards)
- Selector: `au-stepper` + `au-step`
- Variants: `number-horizontal` | `number-vertical` | `dot-horizontal` | `dot-vertical` | `compact`
- Props: `activeStep`, `variant`

### Pagination
**When to use**: Navigating through paginated data
- Selector: `au-pagination`
- Props: `first`, `totalRecords`, `rows`, `rowsPerPageOptions`
- Default rows per page: [10, 20, 50, 100]

---

## Actions

### Button
**When to use**: Primary actions, form submissions, navigation triggers
- Selector: `button[auBtn]` or `a[auBtn]`
- Types: `primary` | `secondary` | `destructive` | `tertiary` | `tertiary-plain`
- Sizes: `default` | `compact`
- Props: `btnType`, `btnSize`, `iconOnly`, `noHorizontalPadding`

**Usage guidelines**:
- Max 1 primary button per view/section
- Use `destructive` for delete/remove actions
- Use `tertiary` for low-emphasis actions
- Use `compact` size inside tables and dense UIs

---

## Data Input

### Form Field
**When to use**: Wrapping any form input (text, select, textarea)
- Selector: `au-form-field`
- Variants: `default` | `compact`
- Sub-components: `au-label`, `au-hint`, `[auFieldInput]`, `[auFieldPrefix]`, `[auFieldSuffix]`
- Supports error state via `errorStateMatcher`

### Label
- Selector: `au-label`
- Props: `for`, `required`, `showHelp`, `showSuffix`, `labelState` ('default' | 'error')

### Hint
- Selector: `au-hint`
- Props: `hintState` ('default' | 'error' | 'disabled')

### Checkbox
**When to use**: Multiple selections, boolean toggles, terms acceptance
- Selector: `au-checkbox`
- Props: `label`, `type` ('check' | 'indeterminate'), `disabled`, `checked`
- Supports two-way binding via `checkedChange`

### Radio
**When to use**: Single selection from a list of options
- Selector: `au-radio` (inside `au-radio-group`)
- Radio Group props: `name`, `disabled`, `vertical`, `required`
- Radio props: `label`, `value`, `disabled`
- Implements `ControlValueAccessor` for reactive forms

### Toggle
**When to use**: On/off settings, feature switches
- Selector: `au-toggle`
- Props: `checked`, `disabled`, `label`
- Implements `ControlValueAccessor`

### Autocomplete
**When to use**: Search with suggestions, selecting from large datasets
- Selector: `au-autocomplete`
- Variants: `default` | `compact`
- Props: `label`, `placeholder`, `required`, `lazy`, `searchDebounceTime`, `multiselect`, `hint`, `errorHint`
- Supports infinite scroll via `retrieveNext` event
- Implements `ControlValueAccessor`

### Datepicker
**When to use**: Date selection, date range inputs
- Selector: `au-datepicker`
- Calendar-based selection with native date adapter
- Integrates with form field

### Country Code Select
**When to use**: Phone number input with country code
- Selector: specialized dropdown for country codes

---

## Data Display

### Text
**When to use**: Any text that needs Aurora typography
- Selector: `[auText]`
- Variants: `heading-l` | `heading-m` | `heading-s` | `body-l` | `body-m` | `body-s` | `body-semibold-l` | `body-semibold-m` | `body-semibold-s`
- Colors: `primary` | `secondary` | `muted` | `inverse` | `brand` | `success-dark` | `success-light` | `danger-dark` | `danger-light` | `warning-dark` | `warning-light` | `caution-dark` | `caution-light` | `active-dark` | `active-light`
- Alignment: `left` | `center` | `right`

### Table
**When to use**: Displaying structured data, lists with sorting/filtering
- Selector: `au-table`
- Features: sorting (single/multi), filtering, pagination, selection (single/multi), expandable rows, lazy loading, scrollable
- Templates: `#header`, `#body`, `#footer`, `#emptymessage`, `#loadingbody`, `#expandedrow`
- Key props: `value`, `paginator`, `rows`, `sortMode`, `selectionMode`, `lazy`, `loading`, `scrollable`

### Icons
**When to use**: Visual indicators, button icons, status icons
- 800+ SVG icons available
- Selector: `au-icon`
- Props: `name`, `size`, `color`
- Individual import: `@paper-indonesia/aurora/icons/individual/[name]`

### Skeleton
**When to use**: Loading placeholders for content
- Selector: `au-skeleton`
- Props: `shape` ('rectangle' | 'circle'), `animation` ('wave' | 'none'), `width`, `height`, `borderRadius`

### Progress Bar
**When to use**: Task progress, upload progress, step completion
- Selector: `au-progress-bar`
- Props: `value` (0-100), `title`, `helperText`, `showPercentage`, `isCompactSize`
- Supports animation with `animationDuration` and `delayDuration`

### Infinite Loader
**When to use**: Loading indicator for infinite scroll or async operations
- Selector: `au-infinite-loader`
- Sizes: `s` | `m` | `l`
- Themes: `default` | `dark` | `light`

---

## Containers & Layout

### Accordion
**When to use**: Collapsible content sections, FAQ, settings panels
- Selector: `au-accordion`
- Variants: `default` | `transparent`
- Props: `expanded`, `disabled`, `isLoading`, `isCompact`, `isLazy`

### Dialog
**When to use**: Modal confirmations, forms, detail views
- Selector: `au-dialog`
- Sub-components: `au-dialog-content`, `au-dialog-actions`, `[auDialogTitle]`
- Supports draggable header and bottom sheet mode

### Carousel
**When to use**: Image galleries, onboarding slides, feature showcases
- Selector: `au-carousel`
- Props: `autoplay`, `loop`, `showPagination`, `showNavigation`, `activeIndex`
- Navigation position: `inside` | `outside`
- Pagination position: `top` | `bottom`

### Scroll Container
**When to use**: Custom scrollable areas with styled scrollbars
- Selector: `au-scroll-container`
- Props: `maxHeight`, `maxWidth`, `horizontalScroll`, `verticalScroll`, `scrollbarSize`

---

## Feedback & Overlays

### Banner
**When to use**: Page-level alerts, announcements, status messages
- Selector: `au-banner`
- States: `informative` | `danger` | `warning` | `success` | `help`
- Types: `subtle` | `attention`
- Props: `title`, `subtitle`, `showIcon`, `actionLabel`, `dismissible`

### Toast
**When to use**: Temporary notifications, action confirmations
- Types: `default` | `danger` | `success` | `warning`
- Config: `title`, `subtitle`, `icon`, `closeButton`, `progressBar`, `duration`, `action`
- Shown via service injection, not direct template usage

### Tooltip
**When to use**: Additional context on hover/focus
- Selector: `*[auTooltip]`
- Props: `tooltipTitle`, `tooltipDescription`, `tooltipPosition`, `tooltipEvent`, `tooltipMaxWidth`
- Positions: `top` | `bottom` | `left` | `right` + corners (e.g., `top-left`, `bottom-right`)

### Dropdown Menu
**When to use**: Action menus, option menus triggered by button click
- Selector: `au-dropdown-menu` + `au-dropdown-menu-item`
- Methods: `open(anchor, initialFocus)`, `close()`

### Context Menu
**When to use**: Right-click contextual actions
- Selector: `au-context-menu`
- Props: `items: MenuItem[]`
- Methods: `openMenu(event)`, `closeMenu()`

---

## Tags & Chips

### Chip
**When to use**: Filters, tags, selections, compact info display
- Selector: `au-chip`
- Props: `disabled`, `active`
- Slots: `[chip-head]`, `[chip-placeholder]`, `[chip-counter]`, `[chip-trail]`

---

## Component Selection Guide

| Need | Use Component |
|------|---------------|
| User confirms an action | **Dialog** |
| User selects from <=5 options | **Radio** |
| User selects multiple from options | **Checkbox** |
| User toggles a setting on/off | **Toggle** |
| User needs to choose a date | **Datepicker** |
| User searches & selects from large list | **Autocomplete** |
| Show structured data | **Table** |
| Show step-by-step process | **Stepper** |
| Show collapsible info | **Accordion** |
| Show page-level message | **Banner** |
| Show temporary notification | **Toast** |
| Show extra info on hover | **Tooltip** |
| Trigger action from a menu | **Dropdown Menu** |
| Navigate multi-level pages | **Breadcrumb** |
| Switch between content views | **Tab** |
| Show loading placeholder | **Skeleton** |
| Primary action button | **Button** (primary) |
| Dangerous action button | **Button** (destructive) |
| Show images/slides | **Carousel** |
| Show progress of task | **Progress Bar** |
| Paginate data | **Pagination** (or Table with paginator) |
