<script lang="ts">
  import { Zap, TrendingUp, Atom } from 'lucide-svelte';
  export let activeTab: string = 'index';
  export let isMobile: boolean = false;
  
  const tabs = [
    { 
      key: 'index', 
      label: 'Discover Research', 
      shortLabel: 'Discover', 
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-400'
    },
    { 
      key: 'overview', 
      label: 'Research Overview', 
      shortLabel: 'Overview', 
      icon: TrendingUp,
      gradient: 'from-purple-500 to-pink-400'
    },
    { 
      key: 'lab', 
      label: 'Research Lab', 
      shortLabel: 'Lab', 
      icon: Atom,
      gradient: 'from-emerald-500 to-teal-400'
    }
  ];
  
  function selectTab(tab: string) {
    activeTab = tab;
    dispatch('change', tab);
  }
  
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div class="research-nav-container" class:mobile={isMobile}>
  {#if isMobile}
    <!-- Mobile Bottom Navigation -->
    <nav class="mobile-nav" role="tablist" aria-label="Research Navigation">
      <div class="mobile-nav-backdrop"></div>
      {#each tabs as tab, index}
        <button
          class="mobile-tab"
          class:active={activeTab === tab.key}
          on:click={() => selectTab(tab.key)}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.key}
          aria-label={tab.label}
          style="--delay: {index * 0.1}s"
        >
          <div class="mobile-tab-inner">
            <div class="mobile-icon-container">
              <svelte:component this={tab.icon} class="mobile-tab-icon" size={20} />
              <div class="mobile-icon-glow"></div>
            </div>
            <span class="mobile-tab-label">{tab.shortLabel}</span>
            <div class="mobile-active-pill"></div>
          </div>
          <div class="mobile-ripple"></div>
        </button>
      {/each}
    </nav>
  {:else}
    <!-- Desktop Vertical Navigation -->
    <nav class="desktop-nav" role="tablist" aria-label="Research Navigation">
      <div class="nav-backdrop"></div>
      
      <header class="nav-header">
        <div class="header-content">
          <h3 class="nav-title">Research Studio</h3>
          <div class="header-accent"></div>
        </div>
      </header>
      
      <div class="nav-tabs">
        {#each tabs as tab, index}
          <button
            class="nav-tab"
            class:active={activeTab === tab.key}
            data-gradient={tab.gradient}
            on:click={() => selectTab(tab.key)}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.key}
            style="--delay: {index * 0.1}s"
          >
            <div class="tab-inner">
              <div class="icon-container">
                <svelte:component this={tab.icon} class="tab-icon" size={24} />
                <div class="icon-glow"></div>
              </div>
              <div class="tab-text">
                <span class="tab-label">{tab.label}</span>
                <div class="tab-underline"></div>
              </div>
              <div class="tab-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div class="tab-bg"></div>
            <div class="tab-gradient"></div>
          </button>
        {/each}
      </div>
    </nav>
  {/if}
</div>

<style>
/* CSS Variables for theming */
:root {
  --nav-blur: 32px;
  --nav-border: rgba(255, 255, 255, 0.12);
  --nav-bg: rgba(10, 10, 10, 0.85);
  --text-primary: rgba(255, 255, 255, 0.95);
  --text-secondary: rgba(255, 255, 255, 0.65);
  --text-muted: rgba(255, 255, 255, 0.45);
  --accent-primary: #e7e7e7;
  --accent-glow: rgba(59, 130, 246, 0.3);
  --surface-elevated: rgba(255, 255, 255, 0.08);
  --surface-hover: rgba(255, 255, 255, 0.12);
}

.research-nav-container {
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Desktop Navigation */
.desktop-nav {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  background: var(--nav-bg);
  backdrop-filter: blur(var(--nav-blur));
  -webkit-backdrop-filter: blur(var(--nav-blur));
  border: 1px solid var(--nav-border);
  border-radius: 28px;
  padding: 2rem;
  box-shadow: 
    0 24px 64px rgba(0, 0, 0, 0.25),
    0 8px 32px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.nav-backdrop {
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, 
    rgba(255, 255, 255, 0.06) 0%, 
    rgba(255, 255, 255, 0.02) 40%,
    rgba(0, 0, 0, 0.02) 100%);
  border-radius: 28px;
  pointer-events: none;
}

.nav-header {
  margin-bottom: 2rem;
  position: relative;
}

.header-content {
  position: relative;
}

.nav-title {
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.025em;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-accent {
  position: absolute;
  bottom: -0.75rem;
  left: 0;
  width: 48px;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-primary), transparent);
  border-radius: 1px;
  opacity: 0.8;
}

.nav-tabs {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.nav-tab {
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: calc(0.2s + var(--delay));
}

.tab-inner {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  z-index: 2;
  transition: all 0.3s ease;
}

.icon-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--surface-elevated);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
}

.tab-icon {
  font-size: 1.25rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.icon-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, var(--accent-primary), transparent);
  border-radius: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
  filter: blur(4px);
}

.tab-text {
  flex: 1;
  position: relative;
}

.tab-label {
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  transition: all 0.3s ease;
  display: block;
}

.tab-underline {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-primary), transparent);
  border-radius: 1px;
  transition: width 0.3s ease;
}

.tab-arrow {
  color: var(--text-muted);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-8px);
}

.tab-bg {
  position: absolute;
  inset: 0;
  background: var(--surface-hover);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tab-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.1) 0%, 
    rgba(147, 51, 234, 0.05) 100%);
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Hover States */
.nav-tab:hover:not(.active) .tab-bg {
  opacity: 1;
}

.nav-tab:hover:not(.active) .tab-label {
  color: var(--text-primary);
}

.nav-tab:hover:not(.active) .tab-arrow {
  opacity: 0.6;
  transform: translateX(0);
}

.nav-tab:hover:not(.active) .icon-container {
  background: var(--surface-hover);
  transform: scale(1.05);
}

/* Active States */
.nav-tab.active {
  transform: translateX(8px);
}

.nav-tab.active .tab-inner {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 
    0 16px 40px rgba(0, 0, 0, 0.3),
    0 8px 20px rgba(0, 0, 0, 0.15);
}

.nav-tab.active .tab-label {
  color: #1a1a1a;
  font-weight: 600;
}

.nav-tab.active .tab-icon {
  transform: scale(1.1);
}

.nav-tab.active .icon-container {
  background: rgba(59, 130, 246, 0.1);
  transform: scale(1.1);
}

.nav-tab.active .icon-glow {
  opacity: 1;
}

.nav-tab.active .tab-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #1a1a1a;
}

.nav-tab.active .tab-underline {
  width: 100%;
}

/* Mobile Navigation */
.mobile-nav {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  padding: 0.75rem;
  box-shadow: 
    0 12px 32px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  overflow: hidden;
}

.mobile-nav-backdrop {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(255, 255, 255, 0.05) 100%);
  border-radius: 24px;
  pointer-events: none;
}

.mobile-tab {
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 18px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
  animation-delay: calc(0.1s + var(--delay));
  touch-action: manipulation;
}

.mobile-tab-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.75rem;
  z-index: 2;
  transition: all 0.3s ease;
}

.mobile-icon-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.mobile-tab-icon {
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.mobile-icon-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, var(--accent-primary), transparent);
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  filter: blur(3px);
}

.mobile-tab-label {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  transition: all 0.3s ease;
  text-align: center;
  line-height: 1.2;
}

.mobile-active-pill {
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: #1a1a1a;
  border-radius: 2px;
  opacity: 0;
  transition: all 0.3s ease;
}

.mobile-ripple {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 18px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Mobile Hover/Touch States */
.mobile-tab:hover:not(.active) .mobile-ripple {
  opacity: 1;
}

.mobile-tab:hover:not(.active) .mobile-tab-label {
  color: rgba(0, 0, 0, 0.8);
}

.mobile-tab:hover:not(.active) .mobile-icon-container {
  background: rgba(0, 0, 0, 0.08);
  transform: scale(1.05);
}

/* Mobile Active States */
.mobile-tab.active .mobile-tab-inner {
  background: rgba(0, 0, 0, 0.95);
  border-radius: 18px;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.1);
}

.mobile-tab.active .mobile-tab-label {
  color: #ffffff;
  font-weight: 600;
}

.mobile-tab.active .mobile-tab-icon {
  transform: scale(1.1);
}

.mobile-tab.active .mobile-icon-container {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.1);
}

.mobile-tab.active .mobile-icon-glow {
  opacity: 1;
}

.mobile-tab.active .mobile-active-pill {
  opacity: 1;
  background: #ffffff;
}

/* Animations */
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-32px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .desktop-nav {
    max-width: 280px;
    padding: 1.5rem;
  }
  
  .nav-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .mobile-nav {
    max-width: 100%;
    padding: 0.5rem;
    border-radius: 20px;
  }
  
  .mobile-tab-inner {
    padding: 0.875rem 0.5rem;
  }
  
  .mobile-icon-container {
    width: 32px;
    height: 32px;
  }
  
  .mobile-tab-icon {
    font-size: 1.1rem;
  }
  
  .mobile-tab-label {
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .mobile-nav {
    padding: 0.375rem;
    border-radius: 18px;
  }
  
  .mobile-tab-inner {
    padding: 0.75rem 0.375rem;
    gap: 0.375rem;
  }
  
  .mobile-icon-container {
    width: 28px;
    height: 28px;
  }
  
  .mobile-tab-icon {
    font-size: 1rem;
  }
  
  .mobile-tab-label {
    font-size: 0.65rem;
  }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
  .mobile-tab {
    min-height: 72px;
  }
  
  .mobile-tab:active {
    transform: scale(0.98);
  }
  
  .nav-tab:active {
    transform: translateX(4px) scale(0.99);
  }
}

/* Focus states for accessibility */
.mobile-tab:focus-visible,
.nav-tab:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
  border-radius: 20px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --nav-border: rgba(255, 255, 255, 0.3);
    --text-secondary: rgba(255, 255, 255, 0.9);
    --text-muted: rgba(255, 255, 255, 0.7);
  }
}
</style>