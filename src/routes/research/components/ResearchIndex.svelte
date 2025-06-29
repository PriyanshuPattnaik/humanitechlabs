<script lang="ts">
  import ResearchArea from './ResearchArea.svelte';
  import { onMount } from 'svelte';
  
  // Import data from JSON file
  let researchAreas: any[] = [];
  let isLoading = true;
  
  // Load data on mount
  onMount(async () => {
    try {
      // Fetch from static directory
      const response = await fetch('/researchDatafinal.json');
      const data = await response.json();
      researchAreas = data.techFields;
      isLoading = false;
    } catch (error) {
      console.error('Error loading research data:', error);
      researchAreas = [];
      isLoading = false;
    }
  })

  // Simple tech field selection
  let selectedTechFields: string[] = [];
  let showDropdown = false;
  let searchTerm = '';
  let expandedAreas: Set<string> = new Set();

  // Filter tech fields based on search
  $: filteredTechOptions = researchAreas
    .map(area => area.title)
    .filter(title => 
      title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // Get selected tech areas
  $: selectedTechAreas = selectedTechFields.length > 0 
    ? researchAreas.filter(area => selectedTechFields.includes(area.title))
    : researchAreas;

  // Toggle area expansion
  function toggleArea(areaId: string) {
    if (expandedAreas.has(areaId)) {
      expandedAreas.delete(areaId);
    } else {
      expandedAreas.add(areaId);
    }
    expandedAreas = expandedAreas; // Trigger reactivity
  }

  // Check if topic should be shown
  function shouldShowTopic(topic: any, area: any): boolean {
    return true; // Show all topics
  }

  // Toggle tech field selection
  function toggleTechField(techField: string) {
    if (selectedTechFields.includes(techField)) {
      selectedTechFields = selectedTechFields.filter(field => field !== techField);
    } else {
      selectedTechFields = [...selectedTechFields, techField];
    }
  }

  // Clear all selections
  function clearSelections() {
    selectedTechFields = [];
    searchTerm = '';
    expandedAreas.clear();
  }

  // Toggle dropdown
  function toggleDropdown() {
    showDropdown = !showDropdown;
    if (!showDropdown) {
      searchTerm = '';
    }
  }

  // Close dropdown
  function closeDropdown() {
    showDropdown = false;
    searchTerm = '';
  }
</script>

<section class="index-section">
  <div class="container">
    <h2 class="index-title">Research Index</h2>
    
    <!-- Simple Tech Field Selector -->
    <div class="tech-selector">
      <div class="selector-container">
        <button 
          class="selector-button" 
          class:has-selections={selectedTechFields.length > 0}
          on:click={toggleDropdown}
        >
          <div class="selector-content">
            <span class="selector-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 2v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4Z"/>
              </svg>
            </span>
            <span class="selector-text">
              {selectedTechFields.length > 0 
                ? `${selectedTechFields.length} technology field${selectedTechFields.length !== 1 ? 's' : ''} selected`
                : 'Select Technology Fields'
              }
            </span>
            {#if selectedTechFields.length > 0}
              <span class="selector-badge">{selectedTechFields.length}</span>
            {/if}
          </div>
        </button>
        
        {#if selectedTechFields.length > 0}
          <div class="selected-chips">
            {#each selectedTechFields as techField}
              <span class="tech-chip">
                {techField}
                <button on:click={() => toggleTechField(techField)}>×</button>
              </span>
            {/each}
            <button class="clear-all-btn" on:click={clearSelections}>
              Clear All
            </button>
          </div>
        {/if}
      </div>

      {#if showDropdown}
        <div class="dropdown-backdrop" on:click={closeDropdown}></div>
        <div class="dropdown-panel">
          <div class="search-container">
            <input 
              type="text" 
              placeholder="Search technology fields..." 
              bind:value={searchTerm}
              class="search-input"
            />
          </div>
          
          <div class="options-list">
            {#each filteredTechOptions as techField}
              <button 
                class="option-item" 
                class:selected={selectedTechFields.includes(techField)}
                on:click={() => toggleTechField(techField)}
              >
                <span class="option-text">{techField}</span>
                {#if selectedTechFields.includes(techField)}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                {/if}
              </button>
            {/each}
            
            {#if filteredTechOptions.length === 0}
              <div class="no-options">
                No technology fields found matching "{searchTerm}"
              </div>
            {/if}
          </div>
          
          <div class="dropdown-footer">
            <button class="footer-btn" on:click={closeDropdown}>
              Done ({selectedTechFields.length} selected)
            </button>
          </div>
        </div>
      {/if}
    </div>
    
    {#if isLoading}
      <div class="loading">Loading research data...</div>
    {:else}
      <!-- Show selected tech areas -->
      <div class="areas-list">
        {#each selectedTechAreas as area}
          <ResearchArea 
            {area} 
            isExpanded={expandedAreas.has(area.id)}
            onToggle={toggleArea}
            {shouldShowTopic}
            hasActiveFilters={selectedTechFields.length > 0}
          />
        {/each}
        
        {#if selectedTechAreas.length === 0}
          <div class="no-results">
            <div class="no-results-icon">🔍</div>
            <h4>No technology fields to display</h4>
            <p>Select one or more technology fields from the dropdown above to see research topics.</p>
            <button class="select-btn" on:click={toggleDropdown}>
              Select Technology Fields
            </button>
          </div>
        {/if}
      </div>
    {/if}
  </div>
</section>

<style>
.index-section {
  padding: 2rem 0 1rem 0;
  background: #fff;
}

@media (min-width: 768px) {
  .index-section {
    padding: 4rem 0 2rem 0;
  }
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

.index-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 1.5rem;
  text-align: left;
}

@media (min-width: 640px) {
  .index-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}

@media (min-width: 768px) {
  .index-title {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }
}

/* Tech Field Selector Styles */
.tech-selector {
  position: relative;
  margin-bottom: 2rem;
}

.selector-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.selector-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 56px;
  position: relative;
  overflow: hidden;
}

.selector-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.selector-button:hover::before {
  opacity: 1;
}

.selector-button:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.selector-button.has-selections {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.3);
}

.selector-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
  position: relative;
  z-index: 1;
}

.selector-icon {
  color: #60a5fa;
  display: flex;
  align-items: center;
}

.selector-text {
  color: #e5e7eb;
  font-weight: 500;
  font-size: 0.95rem;
}

.selector-badge {
  background: #3b82f6;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  min-width: 1.5rem;
  text-align: center;
}

.selected-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.tech-chip {
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #60a5fa;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.tech-chip:hover {
  background: rgba(59, 130, 246, 0.3);
  transform: translateY(-1px);
}

.tech-chip button {
  background: none;
  border: none;
  color: #60a5fa;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.tech-chip button:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #f87171;
}

.clear-all-btn {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #f87171;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.clear-all-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  transform: translateY(-1px);
}

.dropdown-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
}

.dropdown-panel {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  z-index: 999;
  overflow: hidden;
  max-height: 400px;
  display: flex;
  flex-direction: column;
}

.search-container {
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.search-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  color: #e5e7eb;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  background: rgba(255, 255, 255, 0.08);
}

.options-list {
  flex: 1;
  overflow-y: auto;
  max-height: 250px;
}

.option-item {
  width: 100%;
  background: none;
  border: none;
  padding: 0.75rem 1rem;
  color: #e5e7eb;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
  font-size: 0.9rem;
}

.option-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.option-item.selected {
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
}

.option-item.selected svg {
  color: #60a5fa;
}

.no-options {
  padding: 1rem;
  text-align: center;
  color: #9ca3af;
  font-size: 0.9rem;
}

.dropdown-footer {
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-btn {
  width: 100%;
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #60a5fa;
  padding: 0.75rem;
  border-radius: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.footer-btn:hover {
  background: rgba(59, 130, 246, 0.3);
  transform: translateY(-1px);
}

/* Scrollbar styling for options list */
.options-list::-webkit-scrollbar {
  width: 6px;
}

.options-list::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.options-list::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.options-list::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Areas List */
.areas-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (min-width: 768px) {
  .areas-list {
    gap: 3rem;
    margin-bottom: 3rem;
  }
}

/* No Results */
.no-results {
  text-align: center;
  padding: 4rem 2rem;
  background: #fafafa;
  border-radius: 1rem;
  border: 2px dashed #e0e0e0;
}

.no-results-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.no-results h4 {
  font-size: 1.3rem;
  color: #333;
  margin: 0 0 0.5rem 0;
}

.no-results p {
  color: #666;
  margin: 0 0 2rem 0;
  font-size: 1rem;
}

.select-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.select-btn:hover {
  background: #2563eb;
}

/* Loading */
.loading {
  text-align: center;
  padding: 3rem 0;
  color: #666;
  font-size: 1.1rem;
}

/* Mobile Responsive */
@media (max-width: 639px) {
  .areas-list {
    gap: 1.5rem;
  }
  
  .dropdown-panel {
    left: 0.5rem;
    right: 0.5rem;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .index-title {
    color: #000;
  }
}

/* Print styles */
@media print {
  .index-section {
    background: white;
  }
}
</style> 