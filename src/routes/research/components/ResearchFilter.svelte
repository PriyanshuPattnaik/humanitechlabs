<script lang="ts">
    export let showDropdown: boolean;
    export let selectedTech: string[];
    export let selectedArea: string[];
    export let selectedTopic: string[];
    export let techOptions: string[];
    export let areaOptions: string[];
    export let topicOptions: string[];
    export let onToggleDropdown: () => void;
    export let onClearFilters: () => void;
    export let onCloseDropdown: () => void;
  
    // Calculate total selected filters
    $: totalSelected = selectedTech.length + selectedArea.length + selectedTopic.length;
    
    // Active tab state
    let activeTab = 'tech';
    
    // Search functionality for each category
    let techSearch = '';
    let areaSearch = '';
    let topicSearch = '';
    
    // Filtered options based on search
    $: filteredTechOptions = techOptions.filter(tech => 
      tech.toLowerCase().includes(techSearch.toLowerCase())
    );
    $: filteredAreaOptions = areaOptions.filter(area => 
      area.toLowerCase().includes(areaSearch.toLowerCase())
    );
    $: filteredTopicOptions = topicOptions.filter(topic => 
      topic.toLowerCase().includes(topicSearch.toLowerCase())
    );
  
    function toggleSelection(category: string, item: string) {
      if (category === 'tech') {
        if (selectedTech.includes(item)) {
          selectedTech = selectedTech.filter(t => t !== item);
        } else {
          selectedTech = [...selectedTech, item];
        }
      } else if (category === 'area') {
        if (selectedArea.includes(item)) {
          selectedArea = selectedArea.filter(a => a !== item);
        } else {
          selectedArea = [...selectedArea, item];
        }
      } else if (category === 'topic') {
        if (selectedTopic.includes(item)) {
          selectedTopic = selectedTopic.filter(t => t !== item);
        } else {
          selectedTopic = [...selectedTopic, item];
        }
      }
    }
  
    function isSelected(category: string, item: string) {
      if (category === 'tech') return selectedTech.includes(item);
      if (category === 'area') return selectedArea.includes(item);
      if (category === 'topic') return selectedTopic.includes(item);
      return false;
    }
  </script>
  
  <div class="filter-container">
    <!-- Filter Toggle Button -->
    <button 
      class="filter-toggle" 
      class:has-selections={totalSelected > 0}
      on:click={onToggleDropdown} 
      aria-haspopup="true" 
      aria-expanded={showDropdown}
    >
      <div class="filter-content">
        <span class="filter-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 2v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4Z"/>
          </svg>
        </span>
        <span class="filter-text">Filter Research</span>
        {#if totalSelected > 0}
          <span class="filter-badge">{totalSelected}</span>
        {/if}
      </div>
    </button>
  
    <!-- Active Filters Display -->
    {#if totalSelected > 0}
      <div class="active-filters">
        {#each selectedTech as tech}
          <span class="filter-chip tech">
            <span class="chip-label">Tech:</span>
            {tech}
            <button on:click={() => toggleSelection('tech', tech)}>×</button>
          </span>
        {/each}
        {#each selectedArea as area}
          <span class="filter-chip area">
            <span class="chip-label">Area:</span>
            {area}
            <button on:click={() => toggleSelection('area', area)}>×</button>
          </span>
        {/each}
        {#each selectedTopic as topic}
          <span class="filter-chip topic">
            <span class="chip-label">Topic:</span>
            {topic}
            <button on:click={() => toggleSelection('topic', topic)}>×</button>
          </span>
        {/each}
      </div>
    {/if}
  
    {#if showDropdown}
      <div class="dropdown-backdrop" on:click={onCloseDropdown}></div>
      <div class="dropdown-panel">
        
        <!-- Quick Actions -->
        <div class="quick-filters">
          <h4>Quick Actions</h4>
          <div class="quick-filter-chips">
            <button class="quick-chip clear" on:click={onClearFilters}>
              Clear All Filters
            </button>
            <button class="quick-chip info" on:click={() => {}}>
              How to Filter
            </button>
          </div>
        </div>
  
        <!-- Tab Navigation -->
        <div class="tab-navigation">
          <button 
            class="tab-btn" 
            class:active={activeTab === 'tech'}
            on:click={() => activeTab = 'tech'}
          >
            Technology Fields
            {#if selectedTech.length > 0}
              <span class="tab-count">{selectedTech.length}</span>
            {/if}
          </button>
          <button 
            class="tab-btn" 
            class:active={activeTab === 'area'}
            on:click={() => activeTab = 'area'}
          >
            Research Areas
            {#if selectedArea.length > 0}
              <span class="tab-count">{selectedArea.length}</span>
            {/if}
          </button>
          <button 
            class="tab-btn" 
            class:active={activeTab === 'topic'}
            on:click={() => activeTab = 'topic'}
          >
            Topics
            {#if selectedTopic.length > 0}
              <span class="tab-count">{selectedTopic.length}</span>
            {/if}
          </button>
        </div>
  
        <!-- Tab Content -->
        <div class="tab-content">
          {#if activeTab === 'tech'}
            <div class="search-container">
              <input 
                type="text" 
                placeholder="Search technology fields..." 
                bind:value={techSearch}
                class="search-input"
              />
            </div>
            <div class="options-grid">
              {#each filteredTechOptions as tech}
                <button 
                  class="option-chip" 
                  class:selected={isSelected('tech', tech)}
                  on:click={() => toggleSelection('tech', tech)}
                >
                  {tech}
                  {#if isSelected('tech', tech)}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  {/if}
                </button>
              {/each}
            </div>
          {/if}
  
          {#if activeTab === 'area'}
            <div class="search-container">
              <input 
                type="text" 
                placeholder="Search research areas..." 
                bind:value={areaSearch}
                class="search-input"
              />
            </div>
            <div class="options-grid">
              {#each filteredAreaOptions as area}
                <button 
                  class="option-chip" 
                  class:selected={isSelected('area', area)}
                  on:click={() => toggleSelection('area', area)}
                >
                  {area}
                  {#if isSelected('area', area)}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  {/if}
                </button>
              {/each}
            </div>
          {/if}
  
          {#if activeTab === 'topic'}
            <div class="search-container">
              <input 
                type="text" 
                placeholder="Search topics..." 
                bind:value={topicSearch}
                class="search-input"
              />
            </div>
            <div class="options-grid">
              {#each filteredTopicOptions as topic}
                <button 
                  class="option-chip" 
                  class:selected={isSelected('topic', topic)}
                  on:click={() => toggleSelection('topic', topic)}
                >
                  {topic}
                  {#if isSelected('topic', topic)}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  {/if}
                </button>
              {/each}
            </div>
          {/if}
        </div>
  
        <!-- Footer Actions -->
        <div class="dropdown-footer">
          <button class="action-btn secondary" on:click={onClearFilters}>
            Reset Filters
          </button>
          <button class="action-btn primary" on:click={onCloseDropdown}>
            Apply ({totalSelected})
          </button>
        </div>
      </div>
    {/if}
  </div>
  
  <style>
    .filter-container {
      position: relative;
      margin-bottom: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 12px;
      z-index: 100;
    }
  
    .filter-toggle {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 12px;
      padding: 0;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  
    .filter-toggle:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
      transform: translateY(-1px);
    }
  
    .filter-toggle.has-selections {
      background: rgba(0, 0, 0, 0.95);
      color: white;
      border-color: rgba(255, 255, 255, 0.1);
    }
  
    .filter-content {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 600;
    }
  
    .filter-icon {
      display: flex;
      opacity: 0.8;
    }
  
    .filter-badge {
      background: #3b82f6;
      color: white;
      font-size: 11px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 6px;
      min-width: 16px;
      text-align: center;
    }
  
    .filter-toggle.has-selections .filter-badge {
      background: white;
      color: #000;
    }
  
    .active-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-width: 400px;
      justify-content: flex-end;
    }
  
    .filter-chip {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 8px;
      font-size: 12px;
      font-weight: 500;
      border-radius: 8px;
      color: white;
      animation: chipSlide 0.3s ease;
    }
  
    .chip-label {
      font-size: 10px;
      opacity: 0.8;
      font-weight: 600;
    }
  
    .filter-chip.tech { background: #8b5cf6; }
    .filter-chip.area { background: #06b6d4; }
    .filter-chip.topic { background: #10b981; }
  
    .filter-chip button {
      background: none;
      border: none;
      color: inherit;
      font-size: 14px;
      cursor: pointer;
      padding: 0;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      opacity: 0.8;
      transition: opacity 0.2s;
    }
  
    .filter-chip button:hover {
      opacity: 1;
      background: rgba(255, 255, 255, 0.2);
    }
  
    @keyframes chipSlide {
      from {
        opacity: 0;
        transform: translateX(10px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  
    .dropdown-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
      z-index: 99;
    }
  
    .dropdown-panel {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      width: 420px;
      max-width: 90vw;
      background: rgba(0, 0, 0, 0.95);
      backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
      z-index: 101;
      overflow: hidden;
      animation: panelSlide 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  
    @keyframes panelSlide {
      from {
        opacity: 0;
        transform: translateY(-10px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  
    .quick-filters {
      padding: 20px 20px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
  
    .quick-filters h4 {
      color: white;
      font-size: 13px;
      font-weight: 700;
      margin: 0 0 12px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      opacity: 0.8;
    }
  
    .quick-filter-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  
    .quick-chip {
      background: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }
  
    .quick-chip:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.2);
    }
  
    .quick-chip.clear {
      background: rgba(239, 68, 68, 0.1);
      color: #f87171;
      border-color: rgba(239, 68, 68, 0.2);
    }
  
    .quick-chip.clear:hover {
      background: rgba(239, 68, 68, 0.15);
    }
  
    .quick-chip.info {
      background: rgba(59, 130, 246, 0.1);
      color: #60a5fa;
      border-color: rgba(59, 130, 246, 0.2);
    }
  
    .quick-chip.info:hover {
      background: rgba(59, 130, 246, 0.15);
    }
  
    .tab-navigation {
      display: flex;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
  
    .tab-btn {
      flex: 1;
      background: none;
      border: none;
      color: rgba(255, 255, 255, 0.6);
      padding: 12px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      position: relative;
    }
  
    .tab-btn:hover {
      color: rgba(255, 255, 255, 0.8);
      background: rgba(255, 255, 255, 0.03);
    }
  
    .tab-btn.active {
      color: white;
      background: rgba(255, 255, 255, 0.05);
    }
  
    .tab-btn.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: white;
    }
  
    .tab-count {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 10px;
      font-weight: 700;
      padding: 2px 5px;
      border-radius: 4px;
      min-width: 14px;
      text-align: center;
    }
  
    .tab-content {
      padding: 20px;
      min-height: 200px;
      max-height: 300px;
      overflow-y: auto;
    }
  
    .search-container {
      margin-bottom: 16px;
    }
  
    .search-input {
      width: 100%;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 10px 12px;
      color: white;
      font-size: 14px;
      outline: none;
      transition: all 0.2s ease;
    }
  
    .search-input::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  
    .search-input:focus {
      border-color: rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.12);
    }
  
    .options-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 8px;
    }
  
    .option-chip {
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 8px 12px;
      color: rgba(255, 255, 255, 0.9);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      text-align: left;
    }
  
    .option-chip:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.2);
    }
  
    .option-chip.selected {
      background: rgba(255, 255, 255, 0.95);
      color: #000;
      border-color: white;
    }
  
    .dropdown-footer {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding: 16px 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(0, 0, 0, 0.3);
    }
  
    .action-btn {
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid transparent;
    }
  
    .action-btn.secondary {
      background: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.8);
      border-color: rgba(255, 255, 255, 0.1);
    }
  
    .action-btn.secondary:hover {
      background: rgba(255, 255, 255, 0.15);
      color: white;
    }
  
    .action-btn.primary {
      background: white;
      color: #000;
      font-weight: 700;
    }
  
    .action-btn.primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
    }
  
    /* Mobile Responsive */
    @media (max-width: 640px) {
      .dropdown-panel {
        left: 1rem;
        right: 1rem;
        width: auto;
        max-width: none;
      }
      
      .active-filters {
        max-width: none;
        justify-content: flex-start;
      }
      
      .options-grid {
        grid-template-columns: 1fr 1fr;
      }
      
      .tab-content {
        max-height: 250px;
      }
    }
  
    /* Custom scrollbar */
    .tab-content::-webkit-scrollbar {
      width: 4px;
    }
  
    .tab-content::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 2px;
    }
  
    .tab-content::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }
  
    .tab-content::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  </style>