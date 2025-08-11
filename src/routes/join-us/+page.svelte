<script>
  import HeroSection from './components/HeroSection.svelte';
  import MissionStatement from './components/MissionStatement.svelte';
  import OurCulture from './components/OurCulture.svelte';
  import JoiningPaths from './components/JoiningPaths.svelte';
  import OpenRoles from './components/OpenRoles.svelte';
</script>

<div class="join-us-page">
  <HeroSection />
  <MissionStatement />
  <OurCulture />
  <JoiningPaths />
  <OpenRoles />
</div>

<style>
.join-us-page {
  background: var(--bg-primary);
  min-height: 100vh;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style> 