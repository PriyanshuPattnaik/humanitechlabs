<script lang="ts">
  export let topic: any;
  export let area: any;
  export let isFellowship: boolean = false;
</script>

{#if isFellowship}
  <div class="research-card fellowship-card">
    <div class="card-content">
      <h4 class="card-title">Join Research Fellowship</h4>
      <p class="card-description">
        Interested in contributing to research? Join our fellowship program when we return.
      </p>
      <a href="/join-us" class="card-link">
        Learn More →
      </a>
    </div>
  </div>
{:else}
  <div class="research-card">
    <div class="card-header">
      <h4 class="card-title">{topic.title}</h4>
    </div>
    <div class="card-content">
      <p class="card-description">{topic.description}</p>
      {#if topic.domains && topic.domains.length > 0}
        <div class="card-domains">
          {#each topic.domains.slice(0, 3) as domain}
            <span class="domain-tag">{domain}</span>
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .research-card {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
  }

  .research-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.2);
  }

  .fellowship-card {
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    border: 2px dashed rgba(0, 0, 0, 0.2);
  }

  .card-header {
    margin-bottom: 1rem;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0a0a0a;
    margin: 0;
    line-height: 1.3;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #666;
    margin: 0;
  }

  .card-domains {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .domain-tag {
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    color: #666;
    font-weight: 500;
  }

  .card-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #0a0a0a;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.2s ease;
  }

  .card-link:hover {
    gap: 0.75rem;
  }

  @media (max-width: 768px) {
    .research-card {
      padding: 1.25rem;
    }

    .card-title {
      font-size: 1.1rem;
    }

    .card-description {
      font-size: 0.9rem;
    }
  }
</style>
