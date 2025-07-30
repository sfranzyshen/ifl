// Import Tone.js library
// Tone.js is available at https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js
// Ensure this script is loaded AFTER Tone.min.js in your HTML if not using modules directly.
// For this example, we'll assume Tone is globally available if loaded via <script src="...">.

// --- Tone.js Sound Setup ---
// Create a simple synth for button clicks
const clickSynth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
        type: "sine"
    },
    envelope: {
        attack: 0.005,
        decay: 0.05,
        sustain: 0.01,
        release: 0.1
    }
}).toDestination();

// Function to play a click sound
function playClickSound() {
    // Play a short note (e.g., C5) for a very short duration
    clickSynth.triggerAttackRelease("C5", "32n");
}


// --- Translation Data ---
const translations = {
    "en": {
        "nativeName": "English",
        "pageTitle": "Ottodiy Ninja",
        "headerTitle": "Ninja Control",
        "upBtnTitle": "Forward",
        "leftBtnTitle": "Turn Left",
        "centerBtnTitle": "Stop",
        "rightBtnTitle": "Turn Right",
        "downBtnTitle": "Backward",
        "walkModeBtn": "Walk",
        "rollModeBtn": "Roll",
        "avoidBtn": "Avoid",
        "followBtn": "Follow",
        "themeToggleBtnDark": "Switch to Light Mode",
        "themeToggleBtnLight": "Switch to Dark Mode",
        "languageToggleBtn": "Change language",
        "connectivityToggleBtn": "Change Connectivity",
        "net": "NET",
        "ble": "BLE",
        "ser": "SER"
    },
    "es": {
        "nativeName": "Español",
        "pageTitle": "Ottodiy Ninja",
        "headerTitle": "Control Ninja",
        "upBtnTitle": "Adelante",
        "leftBtnTitle": "Girar Izquierda",
        "centerBtnTitle": "Detener",
        "rightBtnTitle": "Girar Derecha",
        "downBtnTitle": "Atrás",
        "walkModeBtn": "Caminar",
        "rollModeBtn": "Rodar",
        "avoidBtn": "Evitar",
        "followBtn": "Seguir",
        "themeToggleBtnDark": "Cambiar a Modo Claro",
        "themeToggleBtnLight": "Cambiar a Modo Oscuro",
        "languageToggleBtn": "Cambiar idioma",
        "connectivityToggleBtn": "Cambiar Conectividad",
        "net": "RED",
        "ble": "BLE",
        "ser": "SER"
    },
    "fr": {
        "nativeName": "Français",
        "pageTitle": "Ottodiy Ninja",
        "headerTitle": "Contrôle Ninja",
        "upBtnTitle": "Avancer",
        "leftBtnTitle": "Tourner à Gauche",
        "centerBtnTitle": "Arrêter",
        "rightBtnTitle": "Tourner à Droite",
        "downBtnTitle": "Reculer",
        "walkModeBtn": "Marcher",
        "rollModeBtn": "Rouler",
        "avoidBtn": "Éviter",
        "followBtn": "Suivre",
        "themeToggleBtnDark": "Passer au Mode Clair",
        "themeToggleBtnLight": "Passer au Mode Sombre",
        "languageToggleBtn": "Changer de langue",
        "connectivityToggleBtn": "Changer de Connectivité",
        "net": "RÉSEAU",
        "ble": "BLE",
        "ser": "SÉRIE"
    },
    "de": {
        "nativeName": "Deutsch",
        "pageTitle": "Ottodiy Ninja",
        "headerTitle": "Ninja-Steuerung",
        "upBtnTitle": "Vorwärts",
        "leftBtnTitle": "Links Abbiegen",
        "centerBtnTitle": "Stoppen",
        "rightBtnTitle": "Rechts Abbiegen",
        "downBtnTitle": "Rückwärts",
        "walkModeBtn": "Gehen",
        "rollModeBtn": "Rollen",
        "avoidBtn": "Vermeiden",
        "followBtn": "Folgen",
        "themeToggleBtnDark": "Zum Hellmodus wechseln",
        "themeToggleBtnLight": "Zum Dunkelmodus wechseln",
        "languageToggleBtn": "Sprache ändern",
        "connectivityToggleBtn": "Konnektivität ändern",
        "net": "NETZ",
        "ble": "BLE",
        "ser": "SERIELL"
    },
    "it": { // Italian translations
        "nativeName": "Italiano",
        "pageTitle": "Ottodiy Ninja",
        "headerTitle": "Controllo Ninja",
        "upBtnTitle": "Avanti",
        "leftBtnTitle": "Gira a Sinistra",
        "centerBtnTitle": "Stop",
        "rightBtnTitle": "Gira a Destra",
        "downBtnTitle": "Indietro",
        "walkModeBtn": "Cammina",
        "rollModeBtn": "Rotola",
        "avoidBtn": "Evita",
        "followBtn": "Segui",
        "themeToggleBtnDark": "Passa alla Modalità Chiara",
        "themeToggleBtnLight": "Passa alla Modalità Scura",
        "languageToggleBtn": "Cambia lingua",
        "connectivityToggleBtn": "Cambia Connettività",
        "net": "RETE",
        "ble": "BLE",
        "ser": "SERIALE"
    },
    "nl": { // Dutch translations
        "nativeName": "Nederlands",
        "pageTitle": "Ottodiy Ninja",
        "headerTitle": "Ninja Besturing",
        "upBtnTitle": "Vooruit",
        "leftBtnTitle": "Sla Linksaf",
        "centerBtnTitle": "Stop",
        "rightBtnTitle": "Sla Rechtsaf",
        "downBtnTitle": "Achteruit",
        "walkModeBtn": "Lopen",
        "rollModeBtn": "Rollen",
        "avoidBtn": "Vermijden",
        "followBtn": "Volgen",
        "themeToggleBtnDark": "Schakel naar Lichte Modus",
        "themeToggleBtnLight": "Schakel naar Donkere Modus",
        "languageToggleBtn": "Taal wijzigen",
        "connectivityToggleBtn": "Connectiviteit wijzigen",
        "net": "NET",
        "ble": "BLE",
        "ser": "SERIEEL"
    },
    "ja": { // Japanese translations
        "nativeName": "日本語",
        "pageTitle": "Ottodiy ニンジャ",
        "headerTitle": "ニンジャ制御",
        "upBtnTitle": "前進",
        "leftBtnTitle": "左折",
        "centerBtnTitle": "停止",
        "rightBtnTitle": "右折",
        "downBtnTitle": "後退",
        "walkModeBtn": "歩く",
        "rollModeBtn": "転がる",
        "avoidBtn": "回避",
        "followBtn": "追跡",
        "themeToggleBtnDark": "ライトモードに切り替え",
        "themeToggleBtnLight": "ダークモードに切り替え",
        "languageToggleBtn": "言語を変更",
        "connectivityToggleBtn": "接続を変更",
        "net": "ネット",
        "ble": "BLE",
        "ser": "シリアル"
    },
    "zh": { // Chinese translations (Simplified Chinese)
        "nativeName": "中文",
        "pageTitle": "Ottodiy 忍者",
        "headerTitle": "忍者控制",
        "upBtnTitle": "前进",
        "leftBtnTitle": "左转",
        "centerBtnTitle": "停止",
        "rightBtnTitle": "右转",
        "downBtnTitle": "后退",
        "walkModeBtn": "步行",
        "rollModeBtn": "滚动",
        "avoidBtn": "避开",
        "followBtn": "跟随",
        "themeToggleBtnDark": "切换到浅色模式",
        "themeToggleBtnLight": "切换到深色模式",
        "languageToggleBtn": "更改语言",
        "connectivityToggleBtn": "更改连接",
        "net": "网络",
        "ble": "蓝牙",
        "ser": "串口"
    },
    "sv": { // Swedish translations
        "nativeName": "Svenska",
        "pageTitle": "Ottodiy Ninja",
        "headerTitle": "Ninja Kontroll",
        "upBtnTitle": "Framåt",
        "leftBtnTitle": "Sväng Vänster",
        "centerBtnTitle": "Stopp",
        "rightBtnTitle": "Sväng Höger",
        "downBtnTitle": "Bakåt",
        "walkModeBtn": "Gå",
        "rollModeBtn": "Rulla",
        "avoidBtn": "Undvik",
        "followBtn": "Följ",
        "themeToggleBtnDark": "Växla till Ljust Läge",
        "themeToggleBtnLight": "Växla till Mörkt Läge",
        "languageToggleBtn": "Ändra språk",
        "connectivityToggleBtn": "Ändra Anslutning",
        "net": "NÄT",
        "ble": "BLE",
        "ser": "SERIELL"
    },
    "pt": { // Portuguese translations
        "nativeName": "Português",
        "pageTitle": "Ottodiy Ninja",
        "headerTitle": "Controle Ninja",
        "upBtnTitle": "Para Frente",
        "leftBtnTitle": "Virar à Esquerda",
        "centerBtnTitle": "Parar",
        "rightBtnTitle": "Virar à Direita",
        "downBtnTitle": "Para Trás",
        "walkModeBtn": "Andar",
        "rollModeBtn": "Rolar",
        "avoidBtn": "Evitar",
        "followBtn": "Seguir",
        "themeToggleBtnDark": "Mudar para Modo Claro",
        "themeToggleBtnLight": "Mudar para Modo Escuro",
        "languageToggleBtn": "Mudar idioma",
        "connectivityToggleBtn": "Mudar Conectividade",
        "net": "REDE",
        "ble": "BLE",
        "ser": "SERIAL"
    },
    "ru": { // Russian translations
        "nativeName": "Русский",
        "pageTitle": "Ottodiy Ниндзя",
        "headerTitle": "Управление Ниндзя",
        "upBtnTitle": "Вперед",
        "leftBtnTitle": "Повернуть Влево",
        "centerBtnTitle": "Стоп",
        "rightBtnTitle": "Повернуть Вправо",
        "downBtnTitle": "Назад",
        "walkModeBtn": "Идти",
        "rollModeBtn": "Катиться",
        "avoidBtn": "Избегать",
        "followBtn": "Следовать",
        "themeToggleBtnDark": "Переключить на Светлый Режим",
        "themeToggleBtnLight": "Переключить на Темный Режим",
        "languageToggleBtn": "Изменить язык",
        "connectivityToggleBtn": "Изменить Подключение",
        "net": "СЕТЬ",
        "ble": "BLE",
        "ser": "СЕРИЙНЫЙ"
    },
    "pl": { // Polish translations
        "nativeName": "Polski",
        "pageTitle": "Ottodiy Ninja",
        "headerTitle": "Sterowanie Ninja",
        "upBtnTitle": "Do Przodu",
        "leftBtnTitle": "Skręć W Lewo",
        "centerBtnTitle": "Stop",
        "rightBtnTitle": "Skręć W Prawo",
        "downBtnTitle": "Do Tyłu",
        "walkModeBtn": "Chodzić",
        "rollModeBtn": "Toczyć",
        "avoidBtn": "Unikaj",
        "followBtn": "Śledź",
        "themeToggleBtnDark": "Przełącz na Tryb Jasny",
        "themeToggleBtnLight": "Przełącz na Tryb Ciemny",
        "languageToggleBtn": "Zmień język",
        "connectivityToggleBtn": "Zmień Łączność",
        "net": "SIEĆ",
        "ble": "BLE",
        "ser": "SZEREGOWY"
    }
};

let currentLanguage = "en"; // Default language
let currentConnectivity = "net"; // Default connectivity mode

// Function to apply translations
function applyTranslations(langCode) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.dataset.i18n;
        if (translations[langCode] && translations[langCode][key]) {
            // Special handling for elements that use 'title' attribute
            if (element.id === 'themeToggleBtn') {
                // The theme toggle button's title depends on the current theme
                const isLight = body.classList.contains('light-theme');
                element.title = isLight ? translations[langCode]['themeToggleBtnLight'] : translations[langCode]['themeToggleBtnDark'];
            } else if (element.id === 'languageToggleBtn' || element.id === 'connectivityToggleBtn') {
                element.title = translations[langCode][key];
            } else if (element.id === 'upBtn' || element.id === 'leftBtn' || element.id === 'centerBtn' || element.id === 'rightBtn' || element.id === 'downBtn') {
                element.title = translations[langCode][key];
            }
            // For other elements, update textContent or specific child's textContent
            else if (element.tagName === 'BUTTON' || element.tagName === 'H1' || element.tagName === 'TITLE') {
                // For language selection buttons in the dropdown, their text is now set statically on DOMContentLoaded
                // We skip them here to prevent them from being translated
                if (element.dataset.lang) {
                    // Do nothing here, text is set statically
                }
                // For connectivity buttons (now with <img> and <span>)
                else if (element.dataset.conn) {
                    const textSpan = element.querySelector('span[data-i18n-text]');
                    if (textSpan) {
                        textSpan.textContent = translations["en"][key]; // Always use English for connectivity text
                    }
                }
                // For the main header icons (theme, language, connectivity)
                else if (element.id === 'themeToggleBtn' || element.id === 'languageToggleBtn' || element.id === 'connectivityToggleBtn') {
                    // These buttons now contain an <img>, so we don't update innerHTML
                    // The icon source is handled by the setTheme and initial DOMContentLoaded
                }
                // For other general text elements (H1, etc.)
                else {
                    element.textContent = translations[langCode][key];
                }
            }
        }
    });
    // Update the document title separately as it's not directly in body
    document.title = translations[langCode]["pageTitle"];
    currentLanguage = langCode; // Update the global current language
}


// --- Get Panel Elements ---
const buttonPanel = document.getElementById('buttonPanel');
const joystickPanel = document.getElementById('joystickPanel');

// --- Directional Button Logic ---
const directionalButtons = document.querySelectorAll('.button-panel button');
let activeButton = null; // To keep track of the currently active (latched) arrow button

directionalButtons.forEach(button => {
    button.addEventListener('click', () => {
        playClickSound(); // Play sound on button click

        const isArrowButton = button.id === 'upBtn' ||
                              button.id === 'leftBtn' ||
                              button.id === 'rightBtn' ||
                              button.id === 'downBtn';

        if (activeButton) {
            activeButton.classList.remove('active-button');
        }

        if (isArrowButton) {
            button.classList.add('active-button');
            activeButton = button;
            console.log(`${button.id} clicked and is now latched.`);
        } else if (button.id === 'centerBtn') {
            activeButton = null; // No arrow button is latched
            console.log(`Center button clicked (momentary).`);
        }
    });
});

// --- Walk/Roll Switch Logic ---
const walkModeBtn = document.getElementById('walkModeBtn');
const rollModeBtn = document.getElementById('rollModeBtn');
let currentMode = 'walk'; // Default mode

// Function to set the active mode and toggle panel visibility
function setMode(mode) {
    playClickSound(); // Play sound on mode switch

    // Remove active class from both mode buttons
    walkModeBtn.classList.remove('active-mode');
    rollModeBtn.classList.remove('active-mode');

    // Toggle active class on mode buttons and switch panels
    if (mode === 'walk') {
        walkModeBtn.classList.add('active-mode');
        buttonPanel.style.display = 'grid'; // Show button panel
        joystickPanel.style.display = 'none'; // Hide joystick panel
        currentMode = 'walk';
        // Clear any latched directional button when switching away from joystick
        if (activeButton) {
            activeButton.classList.remove('active-button');
            activeButton = null;
        }
    } else if (mode === 'roll') {
        rollModeBtn.classList.add('active-mode');
        buttonPanel.style.display = 'none'; // Hide button panel
        joystickPanel.style.display = 'flex'; // Show joystick panel
        currentMode = 'roll';
        // Clear any latched directional button when switching to joystick
        if (activeButton) {
            activeButton.classList.remove('active-button');
            activeButton = null;
        }
        // Reset joystick handle to center when switching to roll mode
        resetJoystickHandle();
    }
    console.log(`Mode switched to: ${currentMode}`);
    // You can add further logic here based on the selected mode
}

// Event listeners for the mode switch buttons
walkModeBtn.addEventListener('click', () => setMode('walk'));
rollModeBtn.addEventListener('click', () => setMode('roll'));


// --- Joystick Logic ---
const joystickBase = document.getElementById('joystickBase');
const joystickHandle = document.getElementById('joystickHandle');

let isDragging = false;
let baseRect; // Stores the bounding rectangle of the joystick base
let baseCenterX, baseCenterY; // Center coordinates of the joystick base
let maxDistance; // Maximum distance the handle can move from the center

// Function to update the joystick base's dimensions and center
function updateJoystickBounds() {
    baseRect = joystickBase.getBoundingClientRect();
    // Calculate the center of the base in screen coordinates
    baseCenterX = baseRect.left + baseRect.width / 2;
    baseCenterY = baseRect.top + baseRect.height / 2;
    // Max distance is the radius of the base minus the radius of the handle
    maxDistance = (baseRect.width / 2) - (joystickHandle.offsetWidth / 2);
}

// Initial update of joystick bounds when the script loads
updateJoystickBounds();
// Update bounds whenever the window is resized to maintain responsiveness
window.addEventListener('resize', updateJoystickBounds);


// Function to reset joystick handle to its centered position
function resetJoystickHandle() {
    // Apply a transform that centers the handle itself (translate(-50%, -50%))
    // and then adds 0px translation for its position relative to the base center.
    joystickHandle.style.transform = 'translate(-50%, -50%)'; // Corrected: Reset to 0,0 relative to center
}

// Mouse/Touch down event for joystick handle (start of drag)
joystickHandle.addEventListener('mousedown', (e) => {
    e.preventDefault(); // Prevent default browser drag behavior (e.g., image dragging)
    isDragging = true;
    updateJoystickBounds(); // Recalculate bounds in case of recent layout changes

    // Play sound when dragging starts
    playClickSound();

    // Add global event listeners for dragging and releasing
    document.addEventListener('mousemove', dragJoystick);
    document.addEventListener('mouseup', stopDragJoystick);
});

joystickHandle.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent scrolling on touch devices
    isDragging = true;
    updateJoystickBounds();

    // Play sound when dragging starts
    playClickSound();

    document.addEventListener('touchmove', dragJoystick);
    document.addEventListener('touchend', stopDragJoystick);
});

// Mouse/Touch move event for dragging
function dragJoystick(e) {
    if (!isDragging) return; // Only drag if the mouse/touch is down

    // Get current mouse/touch coordinates (handling both mouse and touch events)
    const currentX = e.clientX || e.touches[0].clientX;
    const currentY = e.clientY || e.touches[0].clientY;

    // Calculate the handle's desired position relative to the center of the joystick base
    let newX = currentX - baseCenterX;
    let newY = currentY - baseCenterY;

    // Calculate the distance of the desired position from the center
    const distance = Math.sqrt(newX * newX + newY * newY);

    // Constrain the handle within the circular base
    if (distance > maxDistance) {
        // If the distance exceeds the max, scale back the coordinates
        // to be exactly at maxDistance from the center, maintaining the angle.
        const angle = Math.atan2(newY, newX);
        newX = maxDistance * Math.cos(angle);
        newY = maxDistance * Math.sin(angle);
    }

    // Apply the new position using transform.
    // We combine the -50%, -50% (to center the handle's own origin)
    // with the calculated newX and newY offsets.
    joystickHandle.style.transform = `translate(calc(-50% + ${newX}px), calc(-50% + ${newY}px))`;

    // Optional: Log joystick position for debugging or further use
    // console.log(`Joystick position (relative to center): X=${newX.toFixed(2)}, Y=${newY.toFixed(2)}`);
}

// Mouse/Touch up event to stop dragging
function stopDragJoystick() {
    isDragging = false;
    // Remove global event listeners to prevent unintended dragging
    document.removeEventListener('mousemove', dragJoystick);
    document.removeEventListener('mouseup', stopDragJoystick);
    document.removeEventListener('touchmove', dragJoystick);
    document.removeEventListener('touchend', stopDragJoystick);

    // Play sound when dragging stops
    playClickSound();

    // Snap joystick handle back to center
    resetJoystickHandle();
    console.log('Joystick released, snapped to center.');
}

// --- Avoid/Follow Toggle Logic ---
const avoidBtn = document.getElementById('avoidBtn');
const followBtn = document.getElementById('followBtn');

// Function to handle toggle behavior for AVOID/FOLLOW buttons
function toggleAction(clickedButton) {
    playClickSound(); // Play sound on toggle

    // If the clicked button is already active, deactivate it
    if (clickedButton.classList.contains('active-toggle')) {
        clickedButton.classList.remove('active-toggle');
        console.log(`${clickedButton.id} is OFF.`);
    } else {
        // Deactivate the other button if it's active
        if (clickedButton === avoidBtn && followBtn.classList.contains('active-toggle')) {
            followBtn.classList.remove('active-toggle');
            console.log('FOLLOW is OFF.');
        } else if (clickedButton === followBtn && avoidBtn.classList.contains('active-toggle')) {
            avoidBtn.classList.remove('active-toggle');
            console.log('AVOID is OFF.');
        }
        // Activate the clicked button
        clickedButton.classList.add('active-toggle');
        console.log(`${clickedButton.id} is ON.`);
    }
}

avoidBtn.addEventListener('click', () => toggleAction(avoidBtn));
followBtn.addEventListener('click', () => toggleAction(followBtn));


// --- Theme Switch Logic ---
const themeToggleBtn = document.getElementById('themeToggleBtn'); // Reference to the single toggle button
const body = document.body; // Get a reference to the body element

// Function to set the active theme
function setTheme(theme) {
    playClickSound(); // Play sound on theme switch

    const themeIcon = themeToggleBtn.querySelector('.header-icon'); // Get the image element

    if (theme === 'dark') {
        body.classList.remove('light-theme'); // Remove light theme class
        themeIcon.src = "sun.svg"; // Sun icon for dark theme
        themeIcon.alt = "Sun Icon";
        localStorage.setItem('theme', 'dark'); // Save theme preference
    } else if (theme === 'light') {
        body.classList.add('light-theme'); // Add light theme class
        themeIcon.src = "moon.svg"; // Moon icon for light theme
        themeIcon.alt = "Moon Icon";
        localStorage.setItem('theme', 'light'); // Save theme preference
    }
    // Update tooltip based on the current theme and language
    themeToggleBtn.title = body.classList.contains('light-theme') ?
                          translations[currentLanguage]['themeToggleBtnLight'] :
                          translations[currentLanguage]['themeToggleBtnDark'];

    console.log(`Theme switched to: ${theme}`);
}

// Event listener for the single theme toggle button
themeToggleBtn.addEventListener('click', () => {
    // Check current theme based on body class
    if (body.classList.contains('light-theme')) {
        setTheme('dark'); // If currently light, switch to dark
    } else {
        setTheme('light'); // If currently dark, switch to light
    }
});


// --- Language Switch Logic ---
const languageToggleBtn = document.getElementById('languageToggleBtn');
const languageDropdown = document.getElementById('languageDropdown');
const languageButtons = languageDropdown.querySelectorAll('button');
const languageSwitchPanel = document.querySelector('.language-switch-panel'); // Get reference to the panel

// Function to toggle language dropdown visibility
function toggleLanguageDropdown() {
    playClickSound(); // Play sound on dropdown toggle
    connectivityDropdown.style.display = 'none'; // Close connectivity dropdown if open
    languageDropdown.style.display = languageDropdown.style.display === 'flex' ? 'none' : 'flex';
}

// Function to handle language selection
function selectLanguage(event) {
    playClickSound(); // Play sound on language selection
    const selectedLang = event.currentTarget.dataset.lang; // Use currentTarget
    console.log(`Language selected: ${selectedLang}`);

    // Remove active class from all language buttons
    languageButtons.forEach(btn => btn.classList.remove('active-lang'));
    // Add active class to the selected language button
    event.currentTarget.classList.add('active-lang'); // Use currentTarget

    // Apply new language translations
    applyTranslations(selectedLang);
    localStorage.setItem('language', selectedLang); // Save language preference

    // Hide the dropdown after selection
    languageDropdown.style.display = 'none';
}

// Event listener for the language toggle button
languageToggleBtn.addEventListener('click', toggleLanguageDropdown);

// Event listeners for each language button in the dropdown
languageButtons.forEach(button => {
    button.addEventListener('click', selectLanguage);
});


// --- Connectivity Switch Logic ---
const connectivityToggleBtn = document.getElementById('connectivityToggleBtn');
const connectivityDropdown = document.getElementById('connectivityDropdown');
const connectivityButtons = connectivityDropdown.querySelectorAll('button');
const connectivitySwitchPanel = document.querySelector('.connectivity-switch-panel'); // Get reference to the panel

// Function to toggle connectivity dropdown visibility
function toggleConnectivityDropdown() {
    playClickSound(); // Play sound on dropdown toggle
    languageDropdown.style.display = 'none'; // Close language dropdown if open
    connectivityDropdown.style.display = connectivityDropdown.style.display === 'flex' ? 'none' : 'flex';
}

// Function to handle connectivity selection
function selectConnectivity(event) {
    playClickSound(); // Play sound on connectivity selection
    const selectedConn = event.currentTarget.dataset.conn; // Use currentTarget
    console.log(`Connectivity selected: ${selectedConn}`);

    // Remove active class from all connectivity buttons
    connectivityButtons.forEach(btn => btn.classList.remove('active-conn'));
    // Add active class to the selected connectivity button
    event.currentTarget.classList.add('active-conn'); // Use currentTarget

    currentConnectivity = selectedConn; // Update global current connectivity
    localStorage.setItem('connectivity', selectedConn); // Save connectivity preference

    // Hide the dropdown after selection
    connectivityDropdown.style.display = 'none';

    // You can add further logic here based on the selected connectivity type
    // e.g., initialize Wi-Fi, BLE, or Serial connections
}

// Event listener for the connectivity toggle button
connectivityToggleBtn.addEventListener('click', toggleConnectivityDropdown);

// Event listeners for each connectivity button in the dropdown
connectivityButtons.forEach(button => {
    button.addEventListener('click', selectConnectivity);
});


// Close dropdowns if clicked outside
document.addEventListener('click', (event) => {
    // Check if the click was outside the language switch panel
    if (!languageSwitchPanel.contains(event.target) && languageDropdown.style.display === 'flex') {
        languageDropdown.style.display = 'none';
    }
    // Check if the click was outside the connectivity switch panel
    if (!connectivitySwitchPanel.contains(event.target) && connectivityDropdown.style.display === 'flex') {
        connectivityDropdown.style.display = 'none';
    }
});

// Set initial language, theme, and connectivity on load
document.addEventListener('DOMContentLoaded', () => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/ifl/Ninja/service-worker.js')
                .then((registration) => {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch((error) => {
                    console.error('Service Worker registration failed:', error);
                });
        });
    }

    // Load and apply theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('dark'); // Default to dark theme if no preference saved
    }

    // --- Initialize language dropdown buttons with native names ---
    languageButtons.forEach(button => {
        const langCode = button.dataset.lang;
        if (translations[langCode] && translations[langCode].nativeName) {
            button.textContent = translations[langCode].nativeName;
        }
    });

    // Load and apply language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        applyTranslations(savedLanguage);
        // Also ensure the correct language button is active
        const savedLangButton = document.querySelector(`.language-dropdown button[data-lang="${savedLanguage}"]`);
        if (savedLangButton) {
            languageButtons.forEach(btn => btn.classList.remove('active-lang'));
            savedLangButton.classList.add('active-lang');
        }
    } else {
        applyTranslations(currentLanguage); // Apply default language on load
    }

    // Set initial language icon (remains globe.svg)
    const languageIcon = languageToggleBtn.querySelector('.header-icon');
    if (languageIcon) {
        languageIcon.src = "globe.svg"; // Globe icon
        languageIcon.alt = "Language Icon";
    }

    // Load and apply connectivity preference
    const savedConnectivity = localStorage.getItem('connectivity');
    if (savedConnectivity) {
        // Find the button corresponding to the saved connectivity and simulate a click
        const savedConnButton = document.querySelector(`.connectivity-dropdown button[data-conn="${savedConnectivity}"]`);
        if (savedConnButton) {
            // Remove active class from all connectivity buttons
            connectivityButtons.forEach(btn => btn.classList.remove('active-conn'));
            // Add active class to the selected connectivity button
            savedConnButton.classList.add('active-conn');
            currentConnectivity = savedConnectivity; // Update global current connectivity
        }
    } else {
        // Set initial active connectivity (e.g., 'net' for Wi-Fi by default)
        const defaultConnButton = document.querySelector('.connectivity-dropdown button[data-conn="net"]');
        if (defaultConnButton) {
            defaultConnButton.classList.add('active-conn');
            currentConnectivity = 'net'; // Ensure global variable is set
        }
    }

    // Set initial connectivity icon (remains bars.svg)
    const connectivityIcon = connectivityToggleBtn.querySelector('.header-icon');
    if (connectivityIcon) {
        connectivityIcon.src = "bars.svg";
        connectivityIcon.alt = "Connectivity Icon";
    }
});
