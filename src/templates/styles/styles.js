export const tailwindStyles = () => `@tailwind base;
@tailwind components;
@tailwind utilities;

body { @apply bg-[#0a0a0c] text-white; overflow-x: hidden; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-float { animation: float 4s ease-in-out infinite; }
`;

export const scssStyles = () => `// Variables
$primary: #00d4ff;
$bg-dark: #0a0a0c;
$bg-darker: #1a1a2e;
$text-light: #fff;
$text-gray: #888;
$text-gray-dark: #666;

// Reset
* { box-sizing: border-box; }
body { margin: 0; background: $bg-dark; color: $text-light; font-family: sans-serif; overflow-x: hidden; }

// Layout Styles
.isotope-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  header {
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 50;
    
    nav {
      max-width: 80rem;
      margin: 0 auto;
      display: flex;
      gap: 1.5rem;
      align-items: center;
      
      a.logo-link {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-decoration: none;
        
        .logo-box {
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          
          img { width: 1.75rem; height: 1.75rem; }
        }
        
        .logo-text {
          color: white;
          font-weight: bold;
          letter-spacing: 0.2em;
          font-size: 1.25rem;
        }
      }
      
      .nav-links {
        margin-left: 1.5rem;
        display: flex;
        gap: 1.5rem;
        
        a {
          color: $text-gray;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          transition: color 0.3s;
          &:hover { color: $primary; }
        }
      }
    }
  }
  
  main { flex: 1; display: flex; flex-direction: column; }
  
  footer {
    padding: 2rem;
    text-align: center;
    color: $text-gray-dark;
    font-size: 0.875rem;
  }
}

// Page Styles
.isotope-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 2rem 5rem;
  background: radial-gradient(circle, $bg-darker 0%, $bg-dark 100%);
  text-align: center;
  
  .hero-section {
    position: relative;
    margin-bottom: 4rem;
    
    .glow {
      position: absolute;
      inset: -50%;
      background: $primary;
      border-radius: 50%;
      filter: blur(120px);
      opacity: 0.25;
      animation: pulse 4s infinite;
    }
    
    .logo-main {
      width: 16rem;
      position: relative;
      z-index: 10;
      filter: drop-shadow(0 0 50px rgba(0, 212, 255, 0.4));
      animation: float 4s ease-in-out infinite;
    }
  }
  
  h1 {
    color: $primary;
    font-size: 5.5rem;
    font-weight: 900;
    margin: 0;
    line-height: 1;
    letter-spacing: 0.9rem;
    filter: drop-shadow(0 0 40px rgba(0, 212, 255, 0.7));
    text-transform: uppercase;
    padding-left: 0.9rem;
  }
  
  .description {
    color: $text-gray;
    font-size: 1.4rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    font-weight: 500;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    opacity: 0.8;
  }
  
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    max-width: 80rem;
    width: 100%;
    margin-top: 2.5rem;
    
    .feature-card {
      padding: 2rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1.5rem;
      backdrop-filter: blur(20px);
      transition: all 0.3s;
      
      &:hover { border-color: rgba(0, 212, 255, 0.5); }
      
      .icon {
        color: $primary;
        margin-bottom: 1rem;
        transition: transform 0.3s;
      }
      
      &:hover .icon { transform: scale(1.1); }
      
      h3 { font-size: 1.25rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05rem; }
      p { color: #666; font-size: 0.875rem; line-height: 1.6; }
    }
  }
  
  .badge-list {
    margin-top: 5rem;
    display: flex;
    gap: 0.9rem;
    .badge {
      padding: 0.625rem 1.25rem;
      border: 1px solid $primary;
      border-radius: 1.875rem;
      background: rgba(0, 212, 255, 0.1);
      font-size: 0.9rem;
    }
  }
  
  .command-box {
    margin-top: 5rem;
    padding: 1.5rem;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 212, 255, 0.2);
    border-radius: 0.75rem;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    
    .prompt { color: $primary; font-family: monospace; font-size: 1.125rem; }
    code { color: #ccc; font-family: monospace; font-size: 1.125rem; }
    
    .copy-btn {
      background: none;
      border: none;
      color: #555;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: all 0.3s;
      &:hover { background: rgba(255, 255, 255, 0.1); color: white; }
    }
  }
}

// About Page Specific
.about-page {
  @extend .isotope-container;
  
  .about-hero {
    @extend .hero-section;
    .icon-container {
      width: 8rem;
      height: 8rem;
      background: rgba(0, 212, 255, 0.1);
      border: 1px solid rgba(0, 212, 255, 0.2);
      border-radius: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      position: relative;
      animation: float 4s ease-in-out infinite;
      transition: transform 0.3s;
      &:hover { transform: scale(1.05); }
    }
  }
  
  .about-title {
    color: $primary;
    font-size: 5.5rem;
    font-weight: 900;
    margin: 0;
    line-height: 1;
    letter-spacing: 0.9rem;
    filter: drop-shadow(0 0 40px rgba(0, 212, 255, 0.7));
    text-transform: uppercase;
    padding-left: 0.9rem;
  }
  
  .about-subtitle {
    color: $text-gray;
    font-size: 1.4rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    font-weight: 500;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    opacity: 0.8;
    max-width: 48rem;
  }
  
  .about-content {
    max-width: 56rem;
    width: 100%;
    padding: 2.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1.5rem;
    backdrop-filter: blur(20px);
    text-align: left;
    line-height: 1.6;
    
    .about-section-title {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
      color: $primary;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .about-description { color: $text-gray; margin-bottom: 1.5rem; font-size: 1.125rem; }
    
    .about-features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2.5rem;
      
      .about-feature-card {
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 1rem;
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: border-color 0.3s;
        &:hover { border-color: rgba(0, 212, 255, 0.3); }
        
        .about-feature-title {
          font-weight: bold;
          color: white;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: -0.025em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .about-feature-text { color: #999; font-size: 0.875rem; }
      }
    }
  }
  
  .about-badges {
    margin-top: 5rem;
    display: flex;
    gap: 0.9rem;
    justify-content: center;
    flex-wrap: wrap;
    .about-badge {
      padding: 0.625rem 1.25rem;
      border: 1px solid $primary;
      border-radius: 1.875rem;
      background: rgba(0, 212, 255, 0.1);
      font-size: 0.9rem;
    }
  }
}

// Animations
@keyframes pulse {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.35; }
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
`;
