<script lang="ts">
  // No props needed for now
</script>

<section class="lab-section">
  <div class="container">
    <h2 class="lab-title">Join the Humanitech Research Fellowship</h2>
    <p class="lab-intro">Become part of a community dedicated to advancing technology for humanitarian good. Whether you're a student, researcher, or leader, there's a place for you in our lab.</p>
    <div class="lab-cards">
      <div class="lab-card">
        <div class="card-glass"></div>
        <div class="card-content">
          <h3>Researcher</h3>
          <p>Lead and collaborate on cutting-edge projects that address real-world challenges. Open to experienced professionals and academics.</p>
          <button class="lab-cta">Apply as Researcher</button>
        </div>
      </div>
      <div class="lab-card">
        <div class="card-glass"></div>
        <div class="card-content">
          <h3>Intern</h3>
          <p>Kickstart your career in tech for good. Work alongside experts, learn, and make a tangible impact as a student or early-career innovator.</p>
          <button class="lab-cta">Apply as Intern</button>
        </div>
      </div>
      <div class="lab-card">
        <div class="card-glass"></div>
        <div class="card-content">
          <h3>Executive</h3>
          <p>Shape the vision and strategy of Humanitech Research Lab. Ideal for leaders passionate about scaling impact and driving innovation.</p>
          <button class="lab-cta">Apply as Executive</button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
.lab-section {
  padding: 4rem 0 2rem 0;
  background: #fff;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.lab-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 1.5rem;
  text-align: center;
}
.lab-intro {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2.5rem;
  text-align: center;
}
.lab-cards {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
}
.lab-card {
  position: relative;
  width: 320px;
  min-height: 260px;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 32px rgba(0,0,0,0.12);
  overflow: hidden;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
}
.lab-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 8px 40px rgba(46,124,246,0.18);
}
.card-glass {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.03) 0%, transparent 100%);
  pointer-events: none;
  z-index: 1;
}
.card-content {
  position: relative;
  z-index: 2;
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 0.7rem;
}
.card-content p {
  font-size: 1.05rem;
  color: #333;
  margin-bottom: 1.5rem;
}
.lab-cta {
  background: #fff;
  color: #111;
  border: 2px solid #111;
  border-radius: 1.2rem;
  padding: 0.7rem 2.2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(46,124,246,0.08);
  transition: background 0.2s, color 0.2s, border 0.2s, transform 0.2s;
}
.lab-cta:hover {
  background: #111;
  color: #fff;
  border: 2px solid #111;
  transform: translateY(-2px) scale(1.04);
}
@media (max-width: 1000px) {
  .lab-cards {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .lab-card {
    width: 90%;
    min-width: 260px;
  }
}
</style> 