# Code Functions and Modification Guide

This document provides a detailed explanation of all the functions and features implemented in the Sulop National High School website code. Each section includes what the code does, how it works, and step-by-step guides for moving, deleting, or tinkering with specific lines or sections.

## Table of Contents
1. [HTML Structure and CSS Styling](#html-structure-and-css-styling)
2. [JavaScript Functionality](#javascript-functionality)
3. [Editable Areas](#editable-areas)
4. [Responsive Design](#responsive-design)

## HTML Structure and CSS Styling

### Header Section
**Function:** Displays the school branding, logo, and DepEd badge at the top of the page.

**Code Location:** Lines 1-50 in `index.html` (HTML) and CSS rules starting around line 50.

**What it does:**
- Creates a gradient background header
- Displays school logo with hover animation
- Shows school name and tagline
- Includes DepEd official badge

**How to modify:**

#### To Move the Header:
1. Locate the `<header>` tag (around line 400 in HTML)
2. Cut the entire `<header>` block
3. Paste it in the desired location (e.g., after `<nav>` or before `<footer>`)
4. Update any CSS that depends on header positioning

#### To Delete the Header:
1. Remove the entire `<header>` block from HTML (lines ~400-420)
2. Remove all CSS rules for `.header-content`, `.school-brand`, etc. (lines ~50-150 in CSS)
3. Note: This will remove school branding - consider adding alternative branding

#### To Tweak Header Styling:
- **Change colors:** Modify `background: linear-gradient(135deg, #0056b3 0%, #003d82 100%);` to different hex colors
- **Resize logo:** Change `.school-logo { width: 100px; height: 100px; }` values
- **Remove hover effect:** Delete `transform: scale(1.05);` from `.school-logo:hover`

### Navigation Bar
**Function:** Provides sticky navigation with smooth scrolling to page sections.

**Code Location:** Lines 51-80 in CSS and HTML nav element around line 425.

**What it does:**
- Creates horizontal navigation menu
- Implements sticky positioning
- Adds hover animations with underline effects
- Highlights active section

**How to modify:**

#### To Move Navigation:
1. Find `<nav>` element in HTML
2. Cut and paste to different location
3. Adjust CSS positioning if needed

#### To Delete Navigation:
1. Remove `<nav>` element from HTML
2. Remove all nav-related CSS (lines ~51-120)
3. Update section links to use regular anchor tags instead of smooth scroll

#### To Add New Menu Items:
1. In HTML, add `<li><a href="#newsection">New Item</a></li>` to the nav ul
2. Create corresponding section with `id="newsection"` in main content
3. No CSS changes needed - styles are inherited

### Main Content Sections
**Function:** Organizes content into distinct sections with consistent styling.

**Code Location:** CSS rules for `section`, `h2`, etc. (lines ~200-250) and HTML sections.

**What it does:**
- Applies consistent styling to all sections
- Adds hover effects and shadows
- Implements responsive grid layouts

**How to modify:**

#### To Move a Section:
1. Cut the entire `<section id="about">` block
2. Paste in desired order among other sections
3. Update navigation links if order changes

#### To Delete a Section:
1. Remove the entire `<section>` block from HTML
2. Remove corresponding navigation link
3. If section has unique CSS classes, remove those too

#### To Add New Section:
1. Copy an existing section structure
2. Change `id` and content
3. Add navigation link: `<li><a href="#newid">New Section</a></li>`

## JavaScript Functionality

### Smooth Scrolling (Lines 1-20 in School_info_snhs.js)
**Function:** Enables smooth scrolling when clicking navigation links.

**Code:**
```javascript
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});
```

**How to modify:**

#### To Move This Function:
- Cut the entire event listener block
- Place it in a different part of the DOMContentLoaded event
- Or move to a separate function and call it

#### To Delete Smooth Scrolling:
1. Remove the entire `document.querySelectorAll('nav a').forEach...` block
2. Navigation will revert to default jump behavior
3. Consider adding CSS `scroll-behavior: smooth;` to body for basic smooth scrolling

#### To Tweak Offset:
- Change `offsetTop - 60` to different value (higher number = more space from top)
- Test on different screen sizes

### Active Navigation Indicator (Lines 22-50)
**Function:** Highlights the current section in navigation based on scroll position.

**How to modify:**

#### To Move:
- Cut the `updateActiveNavLink` function
- Place it before or after other functions
- Ensure it's called in the same places

#### To Delete:
1. Remove the entire `updateActiveNavLink` function
2. Remove `updateActiveNavLink();` calls
3. Remove `window.addEventListener('scroll', updateActiveNavLink);`
4. Navigation will no longer highlight active section

#### To Change Highlight Color:
- Modify CSS for `nav ul li a.active` (currently yellow #ffd700)
- Change `color: #ffd700;` and `background-color: rgba(255, 215, 0, 0.1);`

### Editable Areas Highlighting (Lines 52-65)
**Function:** Adds hover effects to elements marked with `editable` class.

**Code:**
```javascript
document.querySelectorAll('.editable').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#fff9c4';
    });

    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#fffde7';
    });
});
```

**How to modify:**

#### To Move:
- Relocate the event listener setup within DOMContentLoaded
- Can be placed anywhere after DOM is loaded

#### To Delete:
1. Remove the entire `.editable` event listener block
2. Editable areas will lose hover highlighting
3. CSS `.editable` class will still show dashed border

#### To Change Highlight Colors:
- Modify `'#fff9c4'` (hover) and `'#fffde7'` (normal) to different hex colors
- Ensure good contrast with text

### Popup Functionality (Lines 67-95)
**Function:** Creates hover popup for faculty/staff card with additional information.

**How to modify:**

#### To Move Popup:
- The popup is positioned relative to `.popup-trigger`
- Adjust CSS `top: -180px;` to change vertical position
- Modify `left: 50%; transform: translateX(-50%);` for horizontal positioning

#### To Delete Popup:
1. Remove the entire popup-related JavaScript (lines 67-95)
2. Remove HTML for `.faculty-popup` div
3. Remove CSS for `.faculty-popup`, `.popup-trigger`, etc.
4. Card will remain but without popup

#### To Change Popup Content:
- Edit the HTML inside `.faculty-popup` div
- Modify links, text, or add new elements
- Update CSS for new content sizing

## Editable Areas

**Function:** Marks content that can be easily updated by administrators.

**Code Location:** CSS `.editable` class and HTML spans with class="editable"

**What it does:**
- Highlights modifiable content with yellow background and dashed border
- Provides visual cues for content management

**How to modify:**

#### To Add New Editable Area:
1. Wrap content in `<span class="editable">content</span>`
2. Or apply class to any element: `<p class="editable">text</p>`

#### To Remove Editable Styling:
1. Delete `.editable` CSS rules (lines ~650-665)
2. Keep class names in HTML if needed for other purposes

#### To Change Editable Appearance:
- Modify border: `border: 1px dashed #ffd700;`
- Change background: `background-color: #fffde7;`
- Adjust padding: `padding: 3px 8px;`

## Responsive Design

**Function:** Adapts layout for different screen sizes using media queries.

**Code Location:** CSS media queries at bottom of style block (lines ~670+)

**Breakpoints:**
- `@media (max-width: 768px)`: Tablet and mobile adjustments
- `@media (max-width: 480px)`: Small mobile optimizations

**How to modify:**

#### To Add New Breakpoint:
1. Add new `@media (max-width: XXXpx)` rule
2. Include CSS overrides for that screen size
3. Test thoroughly on target devices

#### To Remove Responsive Design:
1. Delete all `@media` rules
2. Site will display desktop layout on all devices
3. May cause usability issues on mobile

#### To Adjust Existing Breakpoints:
- Change `768px` to different value for tablet breakpoint
- Modify CSS within each media query
- Test on various device sizes

## General Modification Tips

### CSS Variables (Not Currently Used)
Consider adding CSS custom properties for easier theming:
```css
:root {
    --primary-color: #0056b3;
    --secondary-color: #ffd700;
    --font-family: 'Segoe UI', sans-serif;
}
```

### JavaScript Error Handling
Add try-catch blocks for better error handling:
```javascript
try {
    // existing code
} catch (error) {
    console.error('Error in function:', error);
}
```

### Performance Considerations
- Minimize DOM queries by caching selectors
- Use event delegation for dynamic content
- Consider lazy loading for images

### Accessibility Improvements
- Add ARIA labels to interactive elements
- Ensure sufficient color contrast
- Test with keyboard navigation

## Testing Modifications

After any changes:
1. Test on multiple browsers (Chrome, Firefox, Safari, Edge)
2. Check mobile responsiveness
3. Verify smooth scrolling and navigation
4. Test popup functionality on desktop and mobile
5. Validate HTML and CSS

## Backup and Version Control

Before major modifications:
1. Create backup of original files
2. Use git for version control
3. Test changes in a development environment
4. Document all changes in commit messages

---

**Note:** This website was created as a school project. Some features may be simplified for educational purposes. Always test modifications thoroughly before deploying to production.
