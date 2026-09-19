const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

async function capture() {
    const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
    
    if (!fs.existsSync(edgePath)) {
        console.error("Edge executable not found at: " + edgePath);
        return;
    }

    const browser = await puppeteer.launch({
        executablePath: edgePath,
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    const screenshotDir = path.join(__dirname, 'screenshots');
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const pagesToCapture = [
        {
            name: '1_CSS_Grid_Desktop.png',
            url: 'file:///' + path.join(__dirname, 'css-grid', 'grid_dashboard.html').replace(/\\/g, '/'),
            width: 1280,
            height: 900
        },
        {
            name: '1_CSS_Grid_Mobile.png',
            url: 'file:///' + path.join(__dirname, 'css-grid', 'grid_dashboard.html').replace(/\\/g, '/'),
            width: 414,
            height: 896
        },
        {
            name: '2_Flexbox_Desktop.png',
            url: 'file:///' + path.join(__dirname, 'flexbox', 'flex_navbar_header.html').replace(/\\/g, '/'),
            width: 1280,
            height: 900
        },
        {
            name: '2_Flexbox_Mobile.png',
            url: 'file:///' + path.join(__dirname, 'flexbox', 'flex_navbar_header.html').replace(/\\/g, '/'),
            width: 414,
            height: 896
        },
        {
            name: '3_Tailwind_CSS_Desktop.png',
            url: 'file:///' + path.join(__dirname, 'bootstrap-tailwind', 'tailwind_studenthub.html').replace(/\\/g, '/'),
            width: 1280,
            height: 900
        },
        {
            name: '3_Bootstrap_CSS_Desktop.png',
            url: 'file:///' + path.join(__dirname, 'bootstrap-tailwind', 'bootstrap_studenthub.html').replace(/\\/g, '/'),
            width: 1280,
            height: 900
        }
    ];

    for (const p of pagesToCapture) {
        console.log(`Capturing ${p.name}...`);
        await page.setViewport({ width: p.width, height: p.height, deviceScaleFactor: 2 });
        await page.goto(p.url, { waitUntil: 'networkidle0' });
        await page.screenshot({ path: path.join(screenshotDir, p.name), fullPage: true });
        console.log(`Saved ${p.name}`);
    }

    await browser.close();
    console.log("All screenshots captured successfully!");
}

capture().catch(err => console.error(err));
