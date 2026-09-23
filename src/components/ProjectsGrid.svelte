

<script lang="ts">
  interface Project {
    id: string;
    title: string;
    tagline: string;
    category: 'Full-Stack' | 'Frontend' | 'Backend';
    image: string;
    tech: string[];
  }

  let { projects }: { projects: Project[] } = $props();

  const filters = ['All', 'Full-Stack', 'Frontend', 'Backend'] as const;
  type Filter = (typeof filters)[number];

  let active = $state<Filter>('All');

  let visible = $derived(
    active === 'All' ? projects : projects.filter((p) => p.category === active)
  );

  function countFor(f: Filter) {
    return projects.filter((p) => p.category === f).length;
  }
</script>

<!-- Filter chips -->
<div class="flex flex-wrap gap-2 mb-10">
  {#each filters as f}
    <button
      onclick={() => (active = f)}
      class="px-4 py-2 rounded-full text-sm font-medium transition-all focus-ring min-h-[36px] {active === f
        ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-md shadow-indigo-500/20'
        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}"
    >
      {f}
      {#if f !== 'All'}
        <span class="ml-1.5 text-xs {active === f ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}">
          ({countFor(f)})
        </span>
      {/if}
    </button>
  {/each}
</div>

<!-- Project grid -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each visible as project (project.id)}
    <a
      href={`/projects/${project.id}`}
      class="group card-hover cursor-pointer block rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      <div class="relative h-52 bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300">
          {project.category}
        </span>
      </div>
      <div class="p-6">
        <h2 class="font-display font-semibold text-lg text-slate-900 dark:text-slate-100 mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
          {project.tagline}
        </p>
        <div class="flex flex-wrap gap-1.5 mb-5">
          {#each project.tech.slice(0, 5) as t}
            <span class="px-2 py-0.5 rounded text-xs font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300">
              {t}
            </span>
          {/each}
          {#if project.tech.length > 5}
            <span class="px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-500">
              +{project.tech.length - 5}
            </span>
          {/if}
        </div>
        <div class="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 gap-1.5 group-hover:gap-2.5 transition-all">
          View case study
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </a>
  {/each}
</div>

{#if visible.length === 0}
  <div class="py-20 text-center text-slate-400 dark:text-slate-500">
    No projects in this category yet — check back soon!
  </div>
{/if}
