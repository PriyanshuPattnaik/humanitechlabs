<script lang="ts">
  import ResearchCard from './ResearchCard.svelte';
  
  export let area: any;
  export let isExpanded: boolean;
  export let onToggle: (areaId: string) => void;
  export let shouldShowTopic: (topic: any, area: any) => boolean;
  export let hasActiveFilters: boolean = false;
  
  // Check if fellowship card should be shown (only when no filters are applied)
  function shouldShowFellowship(): boolean {
    // Fellowship card should only show when no filters are applied
    return !hasActiveFilters;
  }
</script>

<div class="area-block">
  <button class="area-header" on:click={() => onToggle(area.id)} aria-expanded={isExpanded}>
    <div class="area-main-info">
      <span class="area-icon" style={`background:${area.color}20; color:${area.color}`}>{area.icon}</span>
      <div class="area-text">
        <h3 class="area-title">{area.title}</h3>
        <div class="area-subtitle">{area.subtitle}</div>
        <div class="area-description">{area.description}</div>
        <div class="area-impact">{area.impact}</div>
      </div>
    </div>
    <div class="area-toggle">
      <svg class="toggle-icon" class:expanded={isExpanded} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="2" fill="none"/>
      </svg>
    </div>
  </button>
  
  {#if isExpanded}
    <div class="topics-grid">
      {#each area.topics.filter((topic: any) => shouldShowTopic(topic, area)) as topic}
        <ResearchCard {topic} {area} />
      {/each}
      
      <!-- Fellowship Card - only show when no filters are applied -->
      {#if shouldShowFellowship()}
        <ResearchCard topic={{}} area={{}} isFellowship={true} />
      {/if}
    </div>
  {/if}
</div>

<style>
.area-block {
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 1.5rem 1rem 1rem 1rem;
  border: 1px solid #f0f0f0;
  transition: box-shadow 0.2s;
}

@media (min-width: 640px) {
  .area-block {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    border-radius: 1.2rem;
  }
}

@media (min-width: 768px) {
  .area-block {
    padding: 2.5rem 2rem 2rem 2rem;
    border-radius: 1.5rem;
  }
}

.area-block:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,0.12);
}

.area-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
  padding: 0;
}

.area-header:hover {
  transform: translateY(-1px);
}

.area-main-info {
  display: flex;
  gap: 1rem;
  flex: 1;
}

@media (min-width: 640px) {
  .area-main-info {
    gap: 1.5rem;
  }
}

.area-icon {
  font-size: 2rem;
  border-radius: 50%;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .area-icon {
    font-size: 1.5rem;
    padding: 0.3rem 0.7rem;
  }
}

.area-text {
  flex: 1;
}

.area-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
  margin: 0 0 0.2rem 0;
  line-height: 1.2;
}

@media (min-width: 640px) {
  .area-title {
    font-size: 1.8rem;
  }
}

@media (min-width: 768px) {
  .area-title {
    font-size: 2rem;
  }
}

.area-subtitle {
  font-size: 1rem;
  color: #555;
  margin: 0 0 0.2rem 0;
}

@media (min-width: 640px) {
  .area-subtitle {
    font-size: 1.1rem;
  }
}

.area-description {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
}

@media (min-width: 640px) {
  .area-description {
    font-size: 1rem;
  }
}

.area-impact {
  font-size: 0.9rem;
  color: #888;
  font-weight: 600;
}

.area-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f5f5f5;
  flex-shrink: 0;
  transition: background 0.2s;
}

.area-toggle:hover {
  background: #e5e5e5;
}

.toggle-icon {
  transition: transform 0.2s;
  color: #666;
}

.toggle-icon.expanded {
  transform: rotate(180deg);
}

.topics-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .topics-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.2rem;
  }
}

@media (min-width: 768px) {
  .topics-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .topics-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .area-header:hover {
    transform: none;
  }
  
  .area-header {
    transition: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .area-block {
    border: 2px solid #000;
  }
}
</style> 