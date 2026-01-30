**New Update:**
# Sulop National High School Website - Complete Project Documentation

## Project Overview

This is a comprehensive website project for Sulop National High School Senior High Department, featuring both the main information site and an administration branch with detailed faculty information. The project includes multiple HTML pages, JavaScript functionality, and supporting documentation.

## Project Structure

```
school-info-main-exp/
├── README                           # Main project documentation (updated with v2.0 changelog)
├── FULL_PROJECT_README.md           # This comprehensive documentation file
├── CODE_FUNCTIONS_README.md         # Detailed code modification guide
├── index.html                       # Main school information website
├── branch.html                      # Administration branch with faculty details
├── School_info_snhs.js              # JavaScript for main site functionality
├── branch.js                        # JavaScript for administration branch
└── images/
    ├── snhs-logo.jpg               # School logo image
    └── principal-image.png         # Principal's photograph
```

## File Descriptions and Contents

### Main Files

#### `README`
- **Purpose**: Primary project documentation with version history
- **Contents**:
  - Project overview and purpose
  - Website features and technical details
  - Installation and usage instructions
  - Version history (v1.0 and v2.0)
  - Customization guides
- **Key Updates in v2.0**:
  - Added administration branch documentation
  - Enhanced feature descriptions
  - Updated version history with new functionality

#### `FULL_PROJECT_README.md` (This File)
- **Purpose**: Comprehensive documentation of all project files and contents
- **Contents**: Detailed breakdown of every file, their purposes, and relationships

#### `CODE_FUNCTIONS_README.md`
- **Purpose**: Technical guide for code modification and customization
- **Contents**:
  - Detailed explanation of all JavaScript functions
  - CSS styling guides
  - HTML structure documentation
  - Step-by-step modification instructions
  - Responsive design explanations
- **Key Sections**:
  - HTML Structure and CSS Styling
  - JavaScript Functionality (smooth scrolling, popups, navigation)
  - Editable Areas management
  - Responsive Design breakpoints

### Website Files

#### `index.html` (Main School Website)
- **Purpose**: Primary school information website
- **Size**: ~800+ lines of HTML, CSS, and embedded JavaScript
- **Key Features**:
  - School branding and header with logo
  - Sticky navigation bar with smooth scrolling
  - Multiple content sections:
    - About Our Senior High School
    - School Location (with Google Maps embed)
    - Academic Tracks & Strands (STEM, ABM, ASH, GAS, TVL)
    - School Administration
    - Contact Information
  - Interactive elements:
    - Hover popups for academic tracks
    - Principal biography popup
    - Mobile-responsive design
- **Technical Details**:
  - Embedded CSS (~600+ lines)
  - Inline JavaScript (~300+ lines)
  - Font Awesome 6.4.0 integration
  - Responsive breakpoints for mobile/tablet/desktop

#### `branch.html` (Administration Branch)
- **Purpose**: Detailed faculty and administration information page
- **Size**: ~1200+ lines of HTML, CSS, and JavaScript
- **Key Features**:
  - Complete faculty directory organized by:
    - Administration & Support Staff (6 members)
    - Subject Teachers (15 members)
    - Grade 11 Advisers (14 members)
    - Grade 12 Advisers (12 members)
  - Track-specific faculty listings (STEM, ABM, ASH, GAS, TVL)
  - Interactive faculty cards with modal popups
  - Principal biography section
  - Image carousel functionality
  - Print-friendly layouts
- **Technical Details**:
  - Embedded CSS (~800+ lines)
  - External JavaScript file (branch.js)
  - Advanced interactivity with touch support
  - Keyboard navigation accessibility

### JavaScript Files

#### `School_info_snhs.js` (Main Site JavaScript)
- **Purpose**: Handles all interactive functionality for index.html
- **Key Functions**:
  - Smooth scrolling navigation
  - Active section highlighting
  - Popup functionality for track cards and principal
  - Editable areas highlighting
  - Mobile-responsive popup behavior
  - Print functionality
  - Back-to-top button
  - School logo click-to-scroll
- **Size**: ~400+ lines
- **Dependencies**: Requires Font Awesome for icons

#### `branch.js` (Administration Branch JavaScript)
- **Purpose**: Advanced functionality for branch.html faculty directory
- **Key Functions**:
  - Image carousel management with auto-advance
  - Touch and keyboard navigation support
  - Faculty modal popups with detailed information
  - Smooth scrolling and active navigation
  - Print optimization
  - Back-to-top functionality
  - Enhanced animations and transitions
- **Size**: ~500+ lines
- **Advanced Features**:
  - Carousel navigation with multiple categories
  - Touch gesture support for mobile
  - Keyboard accessibility (arrow keys, escape)
  - Auto-advancing carousels (5-second intervals)

### Image Assets

#### `images/snhs-logo.jpg`
- **Purpose**: Official Sulop National High School logo
- **Usage**: Displayed in headers of both main site and branch page
- **Technical Details**:
  - JPEG format
  - Used in responsive design with hover animations
  - Clickable in branch.js for scroll-to-top functionality

#### `images/principal-image.png`
- **Purpose**: Photograph of the school principal (Jerome G. Samson)
- **Usage**: Featured in administration section of both websites
- **Technical Details**:
  - PNG format (supports transparency)
  - Used in popup modals and faculty cards
  - Optimized for web display

## Relationships Between Files

### Main Site Dependencies
```
index.html
├── School_info_snhs.js (functionality)
├── images/snhs-logo.jpg (branding)
└── images/principal-image.png (administration)
```

### Administration Branch Dependencies
```
branch.html
├── branch.js (advanced functionality)
├── images/snhs-logo.jpg (branding)
├── images/principal-image.png (principal photo)
└── index.html (cross-page navigation)
```

### Documentation Hierarchy
```
README (overview + changelog)
├── FULL_PROJECT_README.md (complete file inventory)
└── CODE_FUNCTIONS_README.md (technical modification guide)
```

## Version Differences (v1.0 vs v2.0)

### v1.0 Features (Original)
- Basic school information website
- Simple HTML/CSS/JS structure
- Limited interactivity
- Single page design

### v2.0 Additions (Current)
- **New Files Added**:
  - `branch.html` - Complete administration branch
  - `branch.js` - Advanced JavaScript functionality
  - `FULL_PROJECT_README.md` - Comprehensive documentation
  - `CODE_FUNCTIONS_README.md` - Technical guide
  - Additional images in `/images/` folder

- **Enhanced Features**:
  - Multi-page website architecture
  - Interactive faculty directory
  - Advanced JavaScript with carousels and modals
  - Touch and keyboard accessibility
  - Print-friendly layouts
  - Cross-page navigation
  - Detailed faculty information system

- **Technical Improvements**:
  - Modular JavaScript architecture
  - Enhanced responsive design
  - Advanced CSS animations
  - Better accessibility features
  - Comprehensive documentation

## File Sizes and Complexity

| File | Size | Complexity | Purpose |
|------|------|------------|---------|
| `index.html` | ~800 lines | Medium | Main website |
| `branch.html` | ~1200 lines | High | Faculty directory |
| `School_info_snhs.js` | ~400 lines | Medium | Main site JS |
| `branch.js` | ~500 lines | High | Advanced JS features |
| `README` | ~350 lines | Low | Documentation |
| `FULL_PROJECT_README.md` | ~200 lines | Low | Complete docs |
| `CODE_FUNCTIONS_README.md` | ~250 lines | Medium | Technical guide |

## Development Notes

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **Vanilla JavaScript**: No frameworks, pure JS functionality
- **Font Awesome 6.4.0**: Icon library for visual elements
- **Google Maps API**: Embedded maps for location display

### Browser Compatibility
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Key Features Implemented
- Smooth scroll behavior with offset calculations
- CSS animations and transitions
- Responsive grid and flexbox layouts
- Media queries for mobile optimization
- Interactive popup systems
- Touch gesture support
- Keyboard navigation
- Print-friendly CSS
- Dynamic content loading
- Event delegation for performance

### Educational Value
This project demonstrates:
- Modern web development practices
- Responsive design principles
- JavaScript DOM manipulation
- CSS animations and transitions
- User experience design
- Accessibility considerations
- Project organization and documentation
- Version control practices

## Future Enhancement Possibilities

Based on the existing codebase, potential additions could include:
- Student portal integration
- Dynamic content management system
- User authentication for admin features
- Database integration for faculty information
- Calendar integration for school events
- Mobile app companion
- Multi-language support
- Dark mode toggle
- Advanced search functionality

## Contact and Credits

**Project Creator**: Harvey Gel B. Cimagala (Grade 12 Student)
**Institution**: Sulop National High School - Senior High Department
**Location**: Sulop, Davao del Sur, Philippines
**Project Type**: Educational Website Development

---

*This comprehensive documentation was created to provide complete visibility into all project components and their interrelationships. Last updated with v2.0 features.*




# About Me - Personal Portfolio Website

##  Project Overview

This is a **personal portfolio webpage** designed to showcase information about **Harvey Gel B. Cimagala**. It's a clean, modern, and responsive website that displays personal information, location details, life experiences, and family background in an organized and visually appealing manner.

The website is a **student project** created with HTML, CSS, and JavaScript, featuring a professional layout with smooth animations and intuitive navigation.

---

##  Purpose

The main goal of this website is to:
-  Present personal information in a structured format
-  Display a profile photo prominently
-  Share location and educational details
-  Describe life experiences and interests
-  Provide family background information
-  Offer smooth navigation through different sections
-  Maintain a clean, professional appearance

---

##  Project Structure

**Note:** This README has been updated to reflect the current Sulop National High School website project structure. The project has evolved significantly from a simple personal portfolio to a comprehensive school website with multiple pages and advanced features.

```
school-info-main-exp/
├── README.md                           # Main project documentation (this file)
├── FULL_PROJECT_README.md              # Comprehensive project inventory and details
├── CODE_FUNCTIONS_README.md            # Technical code modification guide
├── index.html                          # Main school information website
├── branch.html                         # Administration branch with faculty directory
├── School_info_snhs.js                 # JavaScript for main site functionality
├── branch.js                           # JavaScript for administration branch features
└── images/
    ├── snhs-logo.jpg                  # Official school logo
    └── principal-image.png            # Principal's photograph
```

### Complete File Inventory and Contents

#### Documentation Files
- **README.md**: Main project overview, features, and version history
- **FULL_PROJECT_README.md**: Comprehensive documentation of all files, their contents, relationships, and technical details
- **CODE_FUNCTIONS_README.md**: Detailed technical guide for modifying code functions, CSS, and HTML structure

#### Website Files
- **index.html**: Main school website featuring:
  - School branding and navigation
  - Academic tracks (STEM, ABM, ASH, GAS, TVL) with interactive popups
  - Location information with Google Maps
  - Administration section with principal details
  - Contact information and enrollment details
  - Responsive design for all devices

- **branch.html**: Administration branch featuring:
  - Complete faculty directory (47 staff members)
  - Interactive faculty cards with modal popups
  - Track-specific faculty organization
  - Principal biography section
  - Image carousel functionality
  - Advanced navigation and accessibility features

#### JavaScript Functionality
- **School_info_snhs.js**: Handles main site interactions including smooth scrolling, popups, and mobile responsiveness
- **branch.js**: Advanced features for administration branch including carousels, touch support, and keyboard navigation

#### Image Assets
- **snhs-logo.jpg**: Official Sulop National High School logo used across both websites
- **principal-image.png**: Professional photograph of Principal Jerome G. Samson

---

##  Website Features

### **1. Professional Profile Card**
- **Profile Photo**: Your ID photo auto-loads from the images folder
- **Name & Age**: Display in a clean two-column layout
- **Permanent Photo**: Cannot be removed - stays in place

### **2. Multiple Information Sections**

#### Personal Info
- Name and age (combined in profile card)
- Current residence location
- Birth place location
- Educational information
- Phone number

#### Location Display
- Interactive Google Map showing location
- Current residence details
- Birth place information

#### Life Details
- Section for personal interests and hobbies
- Edit in source code only (read-only in preview)

#### Family Information
- Family background section
- Pre-filled with default family information
- Edit in source code only (read-only in preview)

### **3. Navigation & User Experience**
- **Fixed Navigation Bar**: Stays at top with gradient design
- **Smooth Scrolling**: Click nav links to jump between sections
- **Section Indicator**: Shows current section on desktop
- **Active Link Highlighting**: Navigation updates based on scroll position
- **Mobile Responsive**: Works perfectly on all devices

### **4. Visual Design**
- **Modern Gradient Colors**: Professional blue and gray gradients
- **Smooth Animations**:
  - Page slide-in effect
  - Hover lift animations on info boxes
  - Navigation link interactions
  - Icon float animation
- **Professional Typography**: Segoe UI font for clarity
- **Responsive Layout**: Adapts to desktop, tablet, and mobile screens

### **5. Hover Animations**
All interactive elements have smooth hover effects:
- Info boxes lift up with shadow
- Navigation links show animated borders
- Photo area scales slightly on hover
- All transitions are smooth 0.3s eases

---

##  Responsive Design

### Desktop (>768px)
- Two-column profile layout (photo left, info right)
- Full navigation bar with section indicators
- 300px height Google Maps embed
- Full animations enabled

### Tablet (480px - 768px)
- Single column layout
- Responsive navigation
- Adjusted sizing for touch screens
- Stacked profile layout

### Mobile (<480px)
- Optimized for small screens
- Simplified navigation
- Large touch targets
- Vertical stacking of all elements

---

##  How to Use the Website

### **Viewing the Website**
1. Open `main/about me.html` in any web browser
2. The website loads with your profile photo automatically
3. Navigate using the top menu bar or by scrolling

### **Editing Content**
 Important: The website is **read-only in the browser**. To make changes:

1. **Edit in Source Code**:
   - Open `main/about me.html` in a text editor (VS Code)
   - Find the section you want to edit
   - Change the text between the HTML tags
   - Save the file

2. **Example - Changing Name**:
   ```html
   <div class="info-content" id="name-content">
       Harvey Gel B. Cimagala  <!-- ← Change this text -->
   </div>
   ```

3. **Example - Changing Location**:
   ```html
   <div class="location-item" id="location-content">
       <strong>Current Residence:</strong> Your address here
   </div>
   ```

4. **Refresh Browser**: After saving, refresh the webpage to see changes

### **Changing Profile Photo**
1. Replace the image in `images/my id.jpg` with your new photo
2. OR update the file path in the JavaScript:
   ```javascript
   idPreview.src = '../images/my id.jpg';  // ← Change this path
   ```
3. Refresh the browser

---

##  Customization Guide

### **Update Personal Information**
Find these sections in the HTML and edit the content:
- Name: `id="name-content"`
- Age: `id="age-content"`
- Location: `id="location-content"`
- Birth Place: `id="birthplace-content"`
- School: `id="school-content"`
- Phone: `id="phone-content"`

### **Update Section Content**
- Life Details: `id="details-content"` (currently empty)
- Family Info: `id="family-content"` (pre-filled text)

### **Change Colors**
Edit the CSS color values in the `<style>` section:
- Primary Blue: `#3498db`
- Dark Blue: `#2980b9`
- Accent Orange: `#f39c12`
- Background: `#f5f5f5`

### **Modify Google Map**
Find the `<iframe>` tag in the Location Information section and update:
```html
<iframe src="https://www.google.com/maps/embed?pb=...">
```
Replace with your own embed code from Google Maps.

---

##  Technical Details

### **Technologies Used**
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with gradients and animations
- **JavaScript**: Navigation, photo upload, and interactions
- **Font Awesome 6.4.0**: Icons for visual elements
- **Google Maps API**: Interactive location display

### **Browser Compatibility**
-  Chrome/Chromium (latest)
-  Firefox (latest)
-  Safari (latest)
-  Edge (latest)
-  Mobile browsers

### **Features Implemented**
- Smooth scroll behavior
- CSS animations and transitions
- Responsive flexbox layout
- Media queries for mobile optimization
- Interactive photo upload system
- Smooth navigation scrolling
- Dynamic section indicator

---

##  Read-Only Mode

The website operates in **read-only mode**:
- All content is **not editable** in the browser
- Photo is **permanent** and cannot be removed
- Changes can only be made by editing the HTML source code
- Perfect for sharing without worrying about accidental modifications

---

##  File Descriptions

### `about me.html`
Main website file containing:
- Complete HTML structure
- Embedded CSS styling (320+ lines)
- JavaScript functionality (180+ lines)
- All interactive elements
- Font Awesome icon library reference

### `my id.jpg`
Your profile photograph - automatically loads in the profile card

### `IMPROVEMENTS.md`
Detailed documentation of all enhancements and features

### `README.md`
This file - comprehensive project documentation

---

##  How to Deploy

### **Local Viewing**
Simply open `main/about me.html` in your browser

### **Share with Others**
- Email the entire "About me" folder
- Upload to web hosting (Netlify, GitHub Pages, etc.)
- Host on any HTTP server

### **Share as Link**
If hosted online, share the direct link to `about me.html`

---

##  Tips & Tricks

1. **Quick Editing**: Use Find & Replace in your editor to change names throughout
2. **Safe Changes**: Always backup the file before making major changes
3. **Testing**: Test on mobile devices to ensure responsive layout works
4. **Google Maps**: Create custom map embeds at maps.google.com
5. **Colors**: Use [color-hex.com](https://www.color-hex.com/) to find color codes

---

##  Educational Value

This project demonstrates:
-  HTML5 semantic markup
-  Modern CSS3 styling and animations
-  Vanilla JavaScript (no frameworks)
-  Responsive design principles
-  Web accessibility considerations
-  Professional UI/UX practices
-  Project organization and structure

---

##  Contact Information

**Student Name**: Harvey Gel B. Cimagala  
**Age**: 18 Years Old  
**Location**: Sulop, Davao del Sur, Philippines  
**Project Type**: Student Portfolio Website

---

##  License & Usage

This project is created for educational purposes. Feel free to:
-  Modify for your own use
-  Use as a template for other projects
-  Share with classmates and instructors
-  Customize the design and content

---

##  Version History

- **v2.0** (Current): Major expansion with administration branch and enhanced features
  - **New Administration Branch Page**: Complete faculty directory with detailed staff information
  - **Interactive Faculty Cards**: Clickable faculty profiles with position details and contact information
  - **Track-Specific Faculty Listings**: Organized faculty by academic tracks (STEM, ABM, ASH, GAS, TVL)
  - **Enhanced Navigation**: Cross-page navigation between main site and administration branch
  - **Advanced JavaScript Features**: Auto-advancing carousels, touch support, keyboard navigation
  - **Principal Biography Section**: Detailed information about school leadership
  - **Faculty Modal System**: Interactive popups showing complete faculty details
  - **Print Functionality**: Print-optimized layouts for both main and branch pages
  - **Back-to-Top Navigation**: Smooth scrolling with floating navigation buttons
  - **Mobile-Optimized Popups**: Touch-friendly interactions for mobile devices
  - **Enhanced Accessibility**: Keyboard navigation and screen reader support

- **v1.0** (Jan 25, 2026): Initial creation with full features
  - Professional profile card with auto-loading photo
  - Multiple information sections
  - Responsive design
  - Smooth animations and hover effects
  - Navigation system
  - Read-only mode for security

---

##  Future Enhancement Ideas

- Add skills section
- Portfolio/projects showcase
- Contact form
- Social media links
- Dark mode toggle
- Multiple language support
- Resume download button
- Project gallery

---

##  Support

For questions about:
- **How to edit**: Check the "How to Use" section above
- **Customization**: See "Customization Guide" section
- **Technical issues**: Review the "Browser Compatibility" section

---

**Made with  as a student project**

*Last Updated: January 25, 2026*

