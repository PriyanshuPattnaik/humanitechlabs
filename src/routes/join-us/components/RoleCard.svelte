<script>
  export let role = {
    title: 'Role Title',
    summary: 'Role summary goes here.',
    tags: ['Tag1', 'Tag2'],
    applyLink: '#',
  };

  const handleApplyClick = () => {
    if (role.applyLink && role.applyLink !== '#') {
      window.open(role.applyLink, '_blank');
    }
  };
</script>

<div class="role-card glass-card">
  <h3 class="role-title">{role.title}</h3>
  <p class="role-summary">{role.summary}</p>
  <div class="role-tags">
    {#each role.tags as tag}
      <span class="tag-pill">{tag}</span>
    {/each}
  </div>
  <button 
    class="apply-btn" 
    aria-label="Apply Now for {role.title}"
    on:click={handleApplyClick}
    disabled={!role.applyLink || role.applyLink === '#'}
  >
    Apply Now
  </button>
</div>

<style>
.role-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  backdrop-filter: var(--glass-blur);
  border-radius: 12px;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  transition: box-shadow 0.3s ease;
}

.role-card:hover {
  box-shadow: 0 12px 40px 0 var(--glass-accent-glow);
}

.role-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.role-summary {
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.role-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-pill {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  border-radius: 6px;
  padding: 0.25rem 0.8rem;
  font-size: 0.95rem;
  font-weight: 500;
  box-shadow: 0 1px 4px 0 var(--glass-accent-glow);
  transition: background 0.3s;
}

.apply-btn {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-primary);
  border-radius: 8px;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px 0 var(--glass-accent-glow);
  align-self: flex-end;
}

.apply-btn:hover, .apply-btn:focus {
  background: var(--glass-btn-hover);
  outline: none;
  box-shadow: 0 4px 16px 0 var(--glass-accent-glow);
}

.apply-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.apply-btn:disabled:hover {
  background: var(--glass-bg);
  box-shadow: 0 2px 8px 0 var(--glass-accent-glow);
}

@media (max-width: 600px) {
  .role-card {
    padding: 1.2rem 0.7rem 1rem 0.7rem;
  }
}
</style>