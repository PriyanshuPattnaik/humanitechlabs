<script>
  import { onMount } from 'svelte';
  import { Coffee, X } from 'lucide-svelte';
  
  let visible = true;
  let mounted = false;
  
  onMount(() => {
    mounted = true;
    const dismissed = localStorage.getItem('banner-dismissed');
    if (dismissed) {
      visible = false;
    }
  });
  
  function dismiss() {
    visible = false;
    localStorage.setItem('banner-dismissed', 'true');
  }
</script>

{#if visible && mounted}
  <div class="notification-banner">
    <div class="banner-content">
      <div class="banner-icon">
        <Coffee size={20} />
      </div>
      <div class="banner-text">
        <strong>Taking a Break</strong>
        <span>We're currently on a development hiatus and will return with enhanced capabilities soon. Stay tuned!</span>
      </div>
      <button class="close-button" on:click={dismiss} aria-label="Dismiss notification">
        <X size={18} />
      </button>
    </div>
  </div>
{/if}

<style>
  .notification-banner {
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    max-width: 900px;
    width: calc(100% - 2rem);
    animation: slideDown 0.5s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  .banner-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  }

  .banner-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    background: #f5f5f5;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0a0a0a;
  }

  .banner-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .banner-text strong {
    font-size: 0.95rem;
    font-weight: 600;
    color: #0a0a0a;
  }

  .banner-text span {
    font-size: 0.875rem;
    color: #666;
    line-height: 1.4;
  }

  .close-button {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .close-button:hover {
    background: #f5f5f5;
    color: #0a0a0a;
  }

  @media (max-width: 768px) {
    .notification-banner {
      top: 70px;
      width: calc(100% - 1rem);
    }

    .banner-content {
      padding: 0.875rem 1rem;
      gap: 0.75rem;
    }

    .banner-icon {
      width: 36px;
      height: 36px;
    }

    .banner-text strong {
      font-size: 0.875rem;
    }

    .banner-text span {
      font-size: 0.8rem;
    }

    .close-button {
      width: 28px;
      height: 28px;
    }
  }
</style>
