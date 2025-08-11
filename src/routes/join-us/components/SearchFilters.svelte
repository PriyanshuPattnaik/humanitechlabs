<script>
  import { searchQuery, selectedTeam, selectedType, selectedLocation, resetFilters } from './rolesStore.js';
  
  let searchFocused = false;
  let teamFocused = false;
  let typeFocused = false;
  let locationFocused = false;
</script>

<div class="search-filters-container">
  <div class="filters-header">
    <h3>Refine Your Search</h3>
    <div class="filters-actions">
      <button class="reset-button" on:click={resetFilters} aria-label="Reset all filters">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12a9 9 0 0 1-9 9c-2.39 0-4.68-.94-6.4-2.6L3 16"/>
          <path d="M3 12a9 9 0 0 1 9-9c2.39 0 4.68.94 6.4 2.6L21 8"/>
          <path d="M3 16v-4h4"/>
          <path d="M21 8V4h-4"/>
        </svg>
        Reset
      </button>
      <div class="filters-indicator">
        <span class="indicator-dot"></span>
        <span class="indicator-text">Live Filters</span>
      </div>
    </div>
  </div>
  
  <div class="search-filters">
    <div class="search-group">
      <label for="search-input" class="filter-label">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        Search
      </label>
      <div class="input-wrapper" class:focused={searchFocused}>
        <input
          id="search-input"
          class="search-input"
          type="text"
          placeholder="Search roles, skills, or keywords..."
          bind:value={$searchQuery}
          on:focus={() => searchFocused = true}
          on:blur={() => searchFocused = false}
          aria-label="Search roles"
        />
        <div class="input-glow"></div>
      </div>
    </div>

    <div class="filters-row">
      <div class="filter-group">
        <label for="team-select" class="filter-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          Team
        </label>
        <div class="select-wrapper" class:focused={teamFocused}>
          <select 
            id="team-select"
            class="filter-dropdown" 
            bind:value={$selectedTeam}
            on:focus={() => teamFocused = true}
            on:blur={() => teamFocused = false}
            aria-label="Filter by team"
          >
            <option value="">All Teams</option>
            <option value="Strategy & Leadership">Strategy & Leadership</option>
            <option value="Business Development & Partnerships">Business Development & Partnerships</option>
            <option value="Outreach, PR & Communications">Outreach, PR & Communications</option>
            <option value="People & Recruitment">People & Recruitment</option>
            <option value="Product & Technology">Product & Technology</option>
            <option value="Research & Innovation">Research & Innovation</option>
            <option value="Creative & Content">Creative & Content</option>
            <option value="Finance & Legal">Finance & Legal</option>
            <option value="Operations & Delivery">Operations & Delivery</option>
          </select>
          <div class="select-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <div class="select-glow"></div>
        </div>
      </div>

      <div class="filter-group">
        <label for="type-select" class="filter-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          Type
        </label>
        <div class="select-wrapper" class:focused={typeFocused}>
          <select 
            id="type-select"
            class="filter-dropdown" 
            bind:value={$selectedType}
            on:focus={() => typeFocused = true}
            on:blur={() => typeFocused = false}
            aria-label="Filter by type"
          >
            <option value="">All Types</option>
            <option value="Intern">Intern</option>
            <option value="Executive">Executive</option>
            <option value="Ambassador">Ambassador</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
          <div class="select-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <div class="select-glow"></div>
        </div>
      </div>

      <div class="filter-group">
        <label for="location-select" class="filter-label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Location
        </label>
        <div class="select-wrapper" class:focused={locationFocused}>
          <select 
            id="location-select"
            class="filter-dropdown" 
            bind:value={$selectedLocation}
            on:focus={() => locationFocused = true}
            on:blur={() => locationFocused = false}
            aria-label="Filter by location"
          >
            <option value="">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
          </select>
          <div class="select-arrow">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <div class="select-glow"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.search-filters-container {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.05),
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.search-filters-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}

.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.filters-header h3 {
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #d4d4d8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.filters-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.reset-button {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  padding: 0.3rem 0.8rem;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.reset-button:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

.reset-button svg {
  opacity: 0.8;
}

.filters-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.indicator-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.search-filters {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.search-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filters-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-label svg {
  opacity: 0.7;
}

.input-wrapper,
.select-wrapper {
  position: relative;
  transition: all 0.3s ease;
}

.input-glow,
.select-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.input-wrapper.focused .input-glow,
.select-wrapper.focused .select-glow {
  opacity: 1;
}

.search-input,
.filter-dropdown {
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border-radius: 12px;
  padding: 0.875rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 400;
  outline: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-input:focus,
.filter-dropdown:focus {
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.4),
    0 0 0 2px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.8);
}

.filter-dropdown {
  appearance: none;
  cursor: pointer;
  padding-right: 2.5rem;
}

.filter-dropdown option {
  background: #000000;
  color: #ffffff;
  padding: 0.5rem;
  border: none;
}

.filter-dropdown option:hover,
.filter-dropdown option:focus {
  background: #1a1a1a;
  color: #ffffff;
}

.select-wrapper {
  position: relative;
}

.select-arrow {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
  pointer-events: none;
  z-index: 2;
  transition: all 0.3s ease;
}

.select-wrapper.focused .select-arrow {
  color: rgba(255, 255, 255, 0.8);
  transform: translateY(-50%) rotate(180deg);
}

/* Responsive Design */
@media (max-width: 768px) {
  .search-filters-container {
    padding: 1.5rem;
  }
  
  .filters-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .filters-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .search-filters-container {
    padding: 1rem;
  }
  
  .search-input,
  .filter-dropdown {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  
  .filter-dropdown {
    padding-right: 2rem;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .search-input,
  .filter-dropdown {
    border-color: #ffffff;
  }
  
  .search-input:focus,
  .filter-dropdown:focus {
    border-width: 2px;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .indicator-dot {
    animation: none;
  }
  
  .input-wrapper,
  .select-wrapper,
  .search-input,
  .filter-dropdown,
  .select-arrow {
    transition: none;
  }
}
</style>