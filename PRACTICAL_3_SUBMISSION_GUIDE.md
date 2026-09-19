# Practical 3: Responsive UI Design using CSS Grid, Flexbox, and Bootstrap/Tailwind

**Course:** Web Development Frameworks (WDF)  
**Project Base:** StudentHub Portal  
**Student Name:** Krisha Patel  
**Student ID:** 24CS066  
**Institution:** CHARUSAT - CSPIT (Computer Engineering)  

---

## Table of Contents
1. [Required Submission Checklist](#required-submission-checklist)
2. [Section 1: CSS Grid Implementation](#section-1-css-grid-implementation)
3. [Section 2: Flexbox Implementation](#section-2-flexbox-implementation)
4. [Section 3: Tailwind CSS / Bootstrap Implementation](#section-3-tailwind-css--bootstrap-implementation)
5. [Step-by-Step Guide: How to Click & Save Screenshots](#step-by-step-guide-how-to-click--save-screenshots)

---

## Required Submission Checklist

| Practical Requirement | Component Description | Status | Screenshot Proof File |
| :--- | :--- | :--- | :--- |
| **1. CSS Grid** | Responsive Student Dashboard (`grid-template-areas`, `auto-fit`, `minmax`) | ✅ Complete | `screenshots/1_CSS_Grid_Desktop.png` |
| **2. Flexbox** | Responsive Navigation Bar, Profile Hero & Flex Cards (`display: flex`, `flex-wrap`, `grow`) | ✅ Complete | `screenshots/2_Flexbox_Desktop.png` |
| **3. Bootstrap / Tailwind** | Responsive StudentHub Web Page using Tailwind CSS & Bootstrap 5 | ✅ Complete | `screenshots/3_Tailwind_CSS_Desktop.png` |

---

## Section 1: CSS Grid Implementation

### 1.1 HTML Code (`grid_dashboard.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StudentHub - CSS Grid Layout</title>
    <link rel="stylesheet" href="grid_style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>
<body>
    <div class="app-layout">
        <!-- Header -->
        <header class="grid-header">
            <div class="logo"><h2><i class="fa-solid fa-graduation-cap"></i> StudentHub</h2></div>
            <div class="user-profile"><span>Welcome, <strong>Krisha Patel (24CS066)</strong></span></div>
        </header>

        <!-- Sidebar -->
        <aside class="grid-sidebar">
            <ul>
                <li><a href="#" class="active"><i class="fa-solid fa-chart-line"></i> Dashboard</a></li>
                <li><a href="#"><i class="fa-solid fa-book-open"></i> Courses</a></li>
                <li><a href="#"><i class="fa-solid fa-calendar-days"></i> Timetable</a></li>
                <li><a href="#"><i class="fa-solid fa-user-check"></i> Attendance</a></li>
            </ul>
        </aside>

        <!-- Main Grid Area -->
        <main class="grid-main">
            <!-- Stats Auto-fit Grid -->
            <section class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon"><i class="fa-solid fa-book-bookmark"></i></div>
                    <div class="stat-info"><h3>6</h3><p>Enrolled Courses</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fa-solid fa-clipboard-user"></i></div>
                    <div class="stat-info"><h3>92%</h3><p>Attendance</p></div>
                </div>
            </section>
        </main>
    </div>
</body>
</html>
```

### 1.2 CSS Code (`grid_style.css`)
```css
/* App Layout Container using CSS Grid template-areas */
.app-layout {
    display: grid;
    grid-template-columns: 260px 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header  header"
        "sidebar main"
        "footer  footer";
    min-height: 100vh;
}

/* Stats Cards Grid using auto-fit and minmax for fluid responsiveness */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
}

/* Responsive Media Queries */
@media (max-width: 768px) {
    .app-layout {
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "sidebar"
            "main"
            "footer";
    }
}
```

---

## Section 2: Flexbox Implementation

### 2.1 HTML Code (`flex_navbar_header.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StudentHub - Flexbox Layout</title>
    <link rel="stylesheet" href="flex_style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>
<body>
    <header class="flex-header">
        <div class="brand-logo">
            <i class="fa-solid fa-graduation-cap"></i>
            <h2>StudentHub Portal</h2>
        </div>
        <ul class="flex-nav-links">
            <li><a href="#" class="active"><i class="fa-solid fa-house"></i> Home</a></li>
            <li><a href="#"><i class="fa-solid fa-book"></i> Courses</a></li>
            <li><a href="#"><i class="fa-solid fa-chart-pie"></i> Performance</a></li>
        </ul>
    </header>

    <main class="main-wrapper">
        <section class="profile-hero">
            <div class="profile-detail">
                <div class="avatar"><i class="fa-solid fa-user-graduate"></i></div>
                <div class="profile-text">
                    <h2>Krisha Patel <span>ID: 24CS066</span></h2>
                    <p>CSPIT - Computer Engineering</p>
                </div>
            </div>
        </section>
    </main>
</body>
</html>
```

### 2.2 CSS Code (`flex_style.css`)
```css
/* Flexbox Navbar Header */
.flex-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem 2rem;
    background: #1e293b;
}

/* Profile Hero Flex Container */
.profile-hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
}

/* Flex Cards Row with Flex Grow and Basis */
.flex-card {
    flex: 1 1 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```

---

## Section 3: Tailwind CSS / Bootstrap Implementation

### 3.1 HTML Code (`tailwind_studenthub.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StudentHub - Tailwind CSS Responsive UI</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>
<body class="bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col">

    <!-- Responsive Navbar -->
    <nav class="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
            <div class="flex items-center space-x-3">
                <span class="text-xl font-bold text-blue-600">StudentHub</span>
            </div>
            <div class="hidden md:flex space-x-4">
                <a href="#" class="text-blue-600 font-semibold">Dashboard</a>
                <a href="#" class="text-slate-600">Courses</a>
                <a href="#" class="text-slate-600">Schedule</a>
            </div>
        </div>
    </nav>

    <!-- Stats Responsive Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <p class="text-xs text-slate-500 font-bold uppercase">Enrolled Subjects</p>
            <h3 class="text-2xl font-extrabold text-slate-800">6 Courses</h3>
        </div>
    </div>
</body>
</html>
```

---

## Step-by-Step Guide: How to Click & Save Screenshots

### Method 1: Using Windows Snipping Shortcut (`Win + Shift + S`)
1. Open any of the HTML pages in Microsoft Edge / Google Chrome:
   - `css-grid/grid_dashboard.html`
   - `flexbox/flex_navbar_header.html`
   - `bootstrap-tailwind/tailwind_studenthub.html`
2. Press <kbd>Windows Key</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> on your keyboard.
3. Your screen will dim, and a crosshair cursor will appear.
4. Drag a box over your webpage window to capture the region.
5. Go directly to **Microsoft Teams** submission chat or assignment window and press <kbd>Ctrl + V</kbd> to paste!

### Method 2: Google Chrome / Edge Developer Tools Full-Page Screenshot
1. Press <kbd>F12</kbd> (or Right Click &rarr; Inspect).
2. Press <kbd>Ctrl + Shift + P</kbd> to open the Developer Command Palette.
3. Type **`Capture full size screenshot`** and press <kbd>Enter</kbd>.
4. A high-resolution `.png` file of the complete page will automatically download to your Downloads folder!

### Method 3: Capturing Mobile & Tablet Responsive View
1. Open the page in your browser and press <kbd>F12</kbd>.
2. Press <kbd>Ctrl + Shift + M</kbd> (or click the Smartphone/Tablet icon in DevTools top bar).
3. Select **iPhone 14 Pro** or **iPad Air** from the top device dropdown.
4. Press <kbd>Win + Shift + S</kbd> or click the 3 dots in DevTools &rarr; **Capture screenshot**.

---
*Created for StudentHub Practical Submission 2026*
