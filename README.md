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

```
About me/
├── README.md                 # This file - project documentation
├── IMPROVEMENTS.md           # Detailed list of enhancements made
├── images/
│   └── my id.jpg            # Profile photo (auto-loaded)
└── main/
    └── about me.html        # Main website file (HTML, CSS, JavaScript)
```

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
