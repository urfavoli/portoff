/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. IMPORTANT: Configure content paths
  // This tells Tailwind CSS where to look for your component files
  // so it can generate the correct CSS classes.
  // Adjust these paths based on your actual project structure.
  content: [
    "./index.html", // If you have an index.html file in your project root (common for Vite/CRA)
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, TSX files in the 'src' directory
    // If you have files directly in root or other specific folders, add them here:
    // "./*.{js,jsx,ts,tsx}", // For files directly in the root, if any
  ],
  theme: {
    extend: {
      // 2. Define custom keyframes for your animations
      keyframes: {
        // --- Existing Keyframes (from your original config) ---
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUpAndScale: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        glowingBorder: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(99, 102, 241, 0)' },
          '50%': { boxShadow: '0 0 10px rgba(99, 102, 241, 0.6)' }, // Using original color, adjust if needed
        },
        pulseLight: {
          '0%, 100%': { transform: 'scale(0.95)', opacity: '0.1' },
          '70%': { transform: 'scale(1.05)', opacity: '0.3' },
        },
        'pulse-slow': { // For the loading text glow or subtle background pulses
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },

        // --- New Keyframes for Portfolio Page ---
        'text-gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },

        // --- New Keyframes for Welcome Page ---
        'pulse-strong': { // For more prominent glow effects (e.g., IconButton)
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'float-subtle': { // For background elements
          '0%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-10px) translateX(10px)' },
          '100%': { transform: 'translateY(0px) translateX(0px)' },
        },
        'shine-button': { // For button shine effect
          '0%': { transform: 'translateX(-100%) skewX(-30deg)' },
          '100%': { transform: 'translateX(200%) skewX(-30deg)' },
        },
        'text-reveal-in': { // For individual text elements (though largely handled by Framer Motion now)
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-text': { // For text glow effect on Welcome page
          '0%, 100%': { textShadow: '0 0 5px rgba(255,255,255,0)' },
          '50%': { textShadow: '0 0 15px rgba(255,255,255,0.6)' },
        },
      },
      // 3. Map keyframes to animation utilities
      animation: {
        // --- Existing Animations ---
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up-custom': 'slideUpAndScale 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'shadow-glow': 'glowingBorder 1.5s infinite alternate',
        'pulse-light': 'pulseLight 2s ease-in-out infinite',
        // 'pulse-slow' animation from existing keyframe, changed duration for better visual
        'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',


        // --- New Animations for Portfolio Page ---
        'text-gradient-flow': 'text-gradient-flow 3s ease infinite alternate', // Adjust speed as needed for header text

        // --- New Animations for Welcome Page ---
        'pulse-strong': 'pulse-strong 3s ease-in-out infinite alternate',
        'float-subtle': 'float-subtle 6s ease-in-out infinite alternate',
        'shine-button': 'shine-button 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'text-reveal-in': 'text-reveal-in 0.8s ease-out forwards', // Not directly used with Framer Motion, but good to have
        'glow-text': 'glow-text 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};