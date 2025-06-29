<script lang="ts">
  export let topic: any;
  export let area: any;
  export let isFellowship: boolean = false;
</script>

{#if isFellowship}
  <!-- Fellowship Card -->
  <div class="fellowship-card">
    <div class="fellowship-header">
      <div class="fellowship-icon">🎓</div>
      <h4 class="fellowship-title">Got Another Research Topic?</h4>
    </div>
    <p class="fellowship-desc">
      Join our fellowship program to research under expert guidance and build the perfect network for your humanitarian tech career.
    </p>
    <div class="fellowship-features">
      <div class="feature">
        <span class="feature-icon">👥</span>
        <span>Expert Mentorship</span>
      </div>
      <div class="feature">
        <span class="feature-icon">🌐</span>
        <span>Global Network</span>
      </div>
      <div class="feature">
        <span class="feature-icon">💡</span>
        <span>Research Guidance</span>
      </div>
    </div>
    <div class="fellowship-actions">
      <button class="action-btn fellowship-btn">Apply for Fellowship</button>
      <button class="action-btn learn-btn">Learn More</button>
    </div>
  </div>
{:else}
  <!-- Research Topic Card -->
  <div class="topic-card">
    <div class="topic-header">
      <h4 class="topic-title">{topic.title}</h4>
      <div class="topic-category">
        <span class="category-label">Category:</span>
        <span class="category-value">{topic.category}</span>
      </div>
      <div class="topic-subcategory">
        <span class="subcategory-label">Subcategory:</span>
        <span class="subcategory-value">{topic.subcategory}</span>
      </div>
    </div>
    <p class="topic-desc">{topic.description}</p>
    <div class="topic-tags">
      {#each topic.technologies as tech}
        <span class="tag">{tech}</span>
      {/each}
    </div>
    <div class="topic-actions">
      <button class="action-btn join-btn">Join In</button>
      <button class="action-btn updates-btn">Read Updates</button>
    </div>
  </div>
{/if}

<style>
/* Modern Glassmorphism Cards */
.topic-card, .fellowship-card {
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.fellowship-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(139, 92, 246, 0.3);
}

/* Hover Effects */
.topic-card:hover, .fellowship-card:hover {
  transform: translateY(-12px);
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 
    0 24px 48px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
}

.fellowship-card:hover {
  background: rgba(0, 0, 0, 0.85);
  border-color: rgba(139, 92, 246, 0.5);
  box-shadow: 
    0 24px 48px rgba(139, 92, 246, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

/* Add subtle glow effect */
.topic-card::before, .fellowship-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.topic-card:hover::before, .fellowship-card:hover::before {
  opacity: 1;
}

/* Typography */
.topic-title, .fellowship-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 20px 0;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.fellowship-title {
  margin-bottom: 0;
}

/* Header Sections */
.topic-header {
  margin-bottom: 20px;
}

.fellowship-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.fellowship-icon {
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  backdrop-filter: blur(10px);
}

/* Category/Subcategory */
.topic-category, .topic-subcategory {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  font-size: 0.9375rem;
}

.category-label, .subcategory-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  min-width: 90px;
}

.category-value, .subcategory-value {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  padding: 4px 12px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Description */
.topic-desc, .fellowship-desc {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0 0 24px 0;
  font-weight: 400;
}

/* Fellowship Features */
.fellowship-features {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  transition: all 0.3s ease;
}

.feature:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateX(4px);
}

.feature-icon {
  font-size: 20px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Tags */
.topic-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
}

.tag {
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.tag::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s;
}

.tag:hover::before {
  left: 100%;
}

.tag:hover {
  background: rgba(0, 0, 0, 0.9);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* Action Buttons */
.topic-actions, .fellowship-actions {
  display: flex;
  gap: 16px;
}

.action-btn {
  flex: 1;
  padding: 16px 24px;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Shimmer effect */
.action-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
  transition: left 0.6s;
}

.action-btn:hover::before {
  left: 100%;
}

/* Primary Buttons (Black with White Text) */
.join-btn, .fellowship-btn {
  background: rgba(0, 0, 0, 0.85);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.2);
}

.join-btn:hover, .fellowship-btn:hover {
  background: rgba(0, 0, 0, 0.95);
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
}

/* Secondary Buttons (Grey Glass) */
.updates-btn, .learn-btn {
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.15);
}

.updates-btn:hover, .learn-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(255, 255, 255, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .topic-card, .fellowship-card {
    padding: 24px;
    border-radius: 20px;
  }
  
  .topic-title, .fellowship-title {
    font-size: 1.25rem;
  }
  
  .fellowship-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  
  .fellowship-icon {
    width: 48px;
    height: 48px;
    font-size: 20px;
  }
  
  .topic-actions, .fellowship-actions {
    flex-direction: column;
    gap: 12px;
  }
  
  .category-label, .subcategory-label {
    min-width: 80px;
  }
}

@media (max-width: 480px) {
  .topic-card, .fellowship-card {
    padding: 20px;
  }
  
  .action-btn {
    padding: 14px 20px;
    font-size: 0.9375rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .topic-card, .fellowship-card, .action-btn, .tag, .feature {
    transition: none;
  }
  
  .topic-card:hover, .fellowship-card:hover, 
  .action-btn:hover, .tag:hover, .feature:hover {
    transform: none;
  }
  
  .action-btn::before, .tag::before, 
  .topic-card::before, .fellowship-card::before {
    display: none;
  }
}

.action-btn:focus {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}

/* High Contrast Support */
@media (prefers-contrast: high) {
  .topic-card, .fellowship-card {
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid #ffffff;
  }
  
  .action-btn {
    border: 2px solid #ffffff;
  }
  
  .tag {
    border: 2px solid #ffffff;
  }
}
</style>