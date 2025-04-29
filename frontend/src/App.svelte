<script lang="ts">
  let count = 0;
</script>

<div class="min-h-screen flex items-center justify-center">
  <div class="card w-96 shadow-xl">
    <div class="card-body items-center text-center">
      <h2 class="card-title">Svelte + Tailwind v4 + DaisyUI v5</h2>
      <p>You've clicked {count} {count === 1 ? 'time' : 'times'}.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" on:click={() => count++}>Click Me</button>
      </div>
    </div>
  </div>
</div>
