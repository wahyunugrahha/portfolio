<template>
  <div class="px-6 py-24 mx-auto max-w-6xl">
    <!-- Hallmark · genre: playful · macrostructure: 18-portfolio-grid · theme: Hum · nav: N1 · footer: Ft8 -->
    <!-- Hallmark · inferred context: audience = recruiters · use = see work before hire · tone = soft playful -->
    
    <header class="mb-20 flex flex-col-reverse md:flex-row md:items-center justify-between gap-10 max-w-5xl">
      <div class="max-w-2xl">
        <h1 class="text-4xl md:text-5xl font-display font-semibold tracking-tight text-ink mb-2 animate-fade-in delay-100">
          {{ lang.heroTitle }}
        </h1>
        <h2 class="text-2xl md:text-3xl font-display font-medium text-ink-2 mb-6 animate-fade-in delay-200 h-8 md:h-10 flex items-center">
          {{ currentRole }}<span class="animate-pulse ml-1 inline-block w-[3px] h-[1em] bg-ink-2"></span>
        </h2>
        <p class="text-lg text-ink-2 leading-relaxed animate-fade-in delay-300">
          {{ lang.heroDescription }}
        </p>

        <!-- CTAs & Social Links -->
        <div class="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in delay-400">
          <a href="/Wahyu_Nugraha_CV.pdf" download class="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 rounded-full font-semibold hover:bg-ink-2 transition-colors">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            {{ lang.downloadCv }}
          </a>
          
          <div class="flex items-center gap-3">
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/wahyunugrahha/" target="_blank" rel="noopener noreferrer" class="p-2.5 bg-paper-2 text-ink-2 hover:text-ink hover:bg-paper border border-paper-2 hover:border-accent-cyan/30 rounded-full transition-colors" title="LinkedIn">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <!-- GitHub -->
            <a href="https://github.com/wahyunugrahha" target="_blank" rel="noopener noreferrer" class="p-2.5 bg-paper-2 text-ink-2 hover:text-ink hover:bg-paper border border-paper-2 hover:border-accent-cyan/30 rounded-full transition-colors" title="GitHub">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <!-- Instagram -->
            <a href="https://www.instagram.com/wahyunugrahha/" target="_blank" rel="noopener noreferrer" class="p-2.5 bg-paper-2 text-ink-2 hover:text-ink hover:bg-paper border border-paper-2 hover:border-accent-cyan/30 rounded-full transition-colors" title="Instagram">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <!-- YouTube -->
            <a href="https://www.youtube.com/@wahyunugrahha" target="_blank" rel="noopener noreferrer" class="p-2.5 bg-paper-2 text-ink-2 hover:text-ink hover:bg-paper border border-paper-2 hover:border-accent-cyan/30 rounded-full transition-colors" title="YouTube">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <!-- Roblox -->
            <a href="https://www.roblox.com/communities/973054263/WeenStudios#!/about" target="_blank" rel="noopener noreferrer" class="p-2.5 bg-paper-2 text-ink-2 hover:text-ink hover:bg-paper border border-paper-2 hover:border-accent-cyan/30 rounded-full transition-colors" title="Roblox (Ween Studios)">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5.42 2.373L21.626 5.42 18.58 21.627 2.374 18.58 5.42 2.373zm5.726 10.59a1.696 1.696 0 1 0-1.695-1.696 1.696 1.696 0 0 0 1.695 1.696z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full overflow-hidden border-[6px] border-paper bg-paper-2 shadow-2xl hover:scale-105 transition-transform duration-500 animate-fade-in delay-300">
        <img src="/images/ProfilePict.jpg" alt="Wahyu Nugraha" class="w-full h-full object-cover" />
      </div>
    </header>

    <!-- Projects Section -->
    <section id="projects" class="scroll-mt-24 animate-fade-in delay-500">
      <header class="mb-8 max-w-2xl">
        <h2 class="text-3xl font-display font-semibold tracking-tight text-ink mb-4">{{ lang.selectedProjects }}</h2>
      </header>

      <!-- Filter Bar -->
      <div class="flex items-center gap-2 mb-8 border-b border-paper-2 pb-4 overflow-x-auto scrollbar-hide">
        <button @click="activeFilter = 'All Work'" :class="['text-sm px-4 py-2 rounded-full transition-colors whitespace-nowrap', activeFilter === 'All Work' ? 'font-semibold text-ink bg-paper-2' : 'font-medium text-ink-2 hover:text-ink hover:bg-paper-2']">{{ lang.filterAll }}</button>
        <button @click="activeFilter = 'Web / Full Stack'" :class="['text-sm px-4 py-2 rounded-full transition-colors whitespace-nowrap', activeFilter === 'Web / Full Stack' ? 'font-semibold text-ink bg-paper-2' : 'font-medium text-ink-2 hover:text-ink hover:bg-paper-2']">{{ lang.filterWeb }}</button>
        <button @click="activeFilter = 'Backend & Cloud'" :class="['text-sm px-4 py-2 rounded-full transition-colors whitespace-nowrap', activeFilter === 'Backend & Cloud' ? 'font-semibold text-ink bg-paper-2' : 'font-medium text-ink-2 hover:text-ink hover:bg-paper-2']">{{ lang.filterBackend }}</button>
        <button @click="activeFilter = 'Game Dev'" :class="['text-sm px-4 py-2 rounded-full transition-colors whitespace-nowrap', activeFilter === 'Game Dev' ? 'font-semibold text-ink bg-paper-2' : 'font-medium text-ink-2 hover:text-ink hover:bg-paper-2']">{{ lang.filterGame }}</button>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <article 
          v-for="project in filteredProjects" 
        :key="project.id"
        class="group cursor-pointer flex flex-col h-full"
      >
        <div @click="openProjectModal(project)" class="flex flex-col h-full">
          <div class="aspect-video w-full rounded-card overflow-hidden bg-paper-2 mb-4 relative card-hover flex items-center justify-center border border-paper-2 group-hover:border-accent-cyan/30 transition-colors shrink-0">
             <img v-if="project.image" :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
             <div v-else class="absolute inset-0 flex items-center justify-center text-ink/10 font-display text-2xl font-bold p-6 text-center group-hover:text-accent-cyan/10 transition-colors">
               {{ project.title }}
             </div>
          </div>
          <div class="flex flex-col flex-grow">
            <h3 class="text-lg font-semibold font-display text-ink mb-2 group-hover:text-accent-cyan transition-colors leading-snug">{{ project.title }}</h3>
            <p class="text-sm text-ink-2 mb-4 flex-grow line-clamp-3 leading-relaxed">{{ project.description[locale] }}</p>
            <div class="flex flex-wrap gap-2 mt-auto">
              <span v-for="t in project.tech" :key="t" class="text-xs font-medium text-ink bg-paper-2 px-2 py-1 rounded-md border border-paper-2 group-hover:border-accent-cyan/20 transition-colors">
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
    </section>

    <!-- Education Section -->
    <section id="about" class="mt-16 border-t border-paper-2 pt-12 scroll-mt-24">
      <header class="mb-8 max-w-2xl">
        <h2 class="text-3xl font-display font-semibold tracking-tight text-ink mb-4">{{ lang.educationTitle }}</h2>
      </header>
      <div class="bg-paper-2 p-6 md:p-8 rounded-card border border-paper-2 hover:border-accent-cyan/30 transition-colors">
        <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 class="text-2xl font-display font-semibold text-ink">Universitas Sriwijaya</h3>
          <span class="text-sm font-medium text-ink-2 bg-paper px-4 py-1.5 rounded-full border border-paper-2 mt-3 md:mt-0 w-fit">Aug 2021 - Feb 2025</span>
        </div>
        <p class="text-ink-2 font-medium mb-3 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          South Sumatera, Indonesia
        </p>
        <p class="text-lg text-ink font-medium">Bachelor of Informatics Engineering</p>
        <div class="mt-4 flex items-center gap-2">
          <span class="bg-accent-cyan/10 text-accent-cyan font-bold px-3 py-1 rounded-md text-sm">GPA: 3.92 / 4.00</span>
        </div>
      </div>
    </section>

    <!-- Organization Experience Section -->
    <section class="mt-16 border-t border-paper-2 pt-12">
      <header class="mb-8 max-w-2xl">
        <h2 class="text-3xl font-display font-semibold tracking-tight text-ink mb-4">{{ lang.organizationTitle }}</h2>
      </header>
      <div class="grid grid-cols-1 gap-6">
        <div v-for="(org, i) in organizations" :key="i" class="bg-paper-2 p-6 md:p-8 rounded-card border border-paper-2 hover:border-accent-cyan/30 transition-colors">
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <h3 class="text-2xl font-display font-semibold text-ink">{{ org.organization }}</h3>
            <span class="text-sm font-medium text-ink-2 bg-paper px-4 py-1.5 rounded-full border border-paper-2 mt-3 md:mt-0 w-fit">{{ org.period }}</span>
          </div>
          <p class="text-ink-2 font-medium mb-3 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {{ org.location }}
          </p>
          <p class="text-lg text-ink font-semibold mb-2">{{ org.role }}</p>
          <p class="text-ink-2 leading-relaxed whitespace-pre-wrap">{{ org.description[locale] }}</p>
        </div>
      </div>
    </section>

    <!-- Skills & Languages Section -->
    <section class="mt-16 border-t border-paper-2 pt-12">
      <header class="mb-8 max-w-2xl">
        <h2 class="text-3xl font-display font-semibold tracking-tight text-ink mb-4">{{ lang.skillsAndLanguagesTitle }}</h2>
      </header>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <!-- Hard Skills -->
        <div class="bg-paper-2 p-6 md:p-8 rounded-card border border-paper-2">
          <h3 class="text-lg font-semibold text-ink mb-6 flex items-center gap-3">
            <div class="p-2 bg-paper rounded-lg border border-paper-2 text-accent-cyan">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            {{ lang.hardSkillsTitle }}
          </h3>
          <div class="flex flex-wrap gap-2.5">
            <span v-for="skill in ['Java', 'PHP', 'Laravel', 'HTML', 'CSS', 'Javascript', 'Node JS', 'Express JS', 'Hapi JS', 'Postman', 'Kotlin', 'Python', 'Figma', 'MySQL', 'Github', 'Android Studio']" :key="skill" class="text-sm font-medium text-ink bg-paper px-4 py-2 rounded-lg border border-paper-2 hover:border-accent-cyan/30 transition-colors">
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Soft Skills -->
        <div class="bg-paper-2 p-6 md:p-8 rounded-card border border-paper-2">
          <h3 class="text-lg font-semibold text-ink mb-6 flex items-center gap-3">
            <div class="p-2 bg-paper rounded-lg border border-paper-2 text-accent-cyan">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            {{ lang.skillsTitle }}
          </h3>
          <div class="flex flex-wrap gap-2.5">
            <span v-for="skill in ['Leadership', 'Teamwork', 'Analysis', 'Time Management', 'Communication', 'Planning & Organizing', 'Creative', 'Problem Solving']" :key="skill" class="text-sm font-medium text-ink bg-paper px-4 py-2 rounded-lg border border-paper-2 hover:border-accent-cyan/30 transition-colors">
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Languages -->
        <div class="bg-paper-2 p-6 md:p-8 rounded-card border border-paper-2 md:col-span-2">
          <h3 class="text-lg font-semibold text-ink mb-6 flex items-center gap-3">
            <div class="p-2 bg-paper rounded-lg border border-paper-2 text-accent-cyan">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
            </div>
            {{ lang.languagesTitle }}
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-paper p-5 rounded-xl border border-paper-2 flex flex-col gap-1 hover:border-accent-cyan/30 transition-colors">
              <span class="text-sm font-medium text-ink-2">Indonesia</span>
              <span class="text-lg font-display font-semibold text-ink">Fluent</span>
            </div>
            <div class="bg-paper p-5 rounded-xl border border-paper-2 flex flex-col gap-1 hover:border-accent-cyan/30 transition-colors">
              <span class="text-sm font-medium text-ink-2">English</span>
              <span class="text-lg font-display font-semibold text-ink">Intermediate</span>
            </div>
            <div class="bg-paper p-5 rounded-xl border border-paper-2 flex flex-col gap-1 hover:border-accent-cyan/30 transition-colors">
              <span class="text-sm font-medium text-ink-2">Chinese</span>
              <span class="text-lg font-display font-semibold text-ink">Elementary</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>


    <!-- Licenses & Certifications Section -->
    <section id="certifications" class="mt-16 border-t border-paper-2 pt-12 scroll-mt-24">
      <header class="mb-8 max-w-2xl">
        <h2 class="text-3xl font-display font-semibold tracking-tight text-ink mb-4">{{ lang.certificationsTitle }}</h2>
        <p class="text-ink-2">
          {{ lang.certificationsSubtitle }}
        </p>
      </header>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <!-- Dicoding Collection Cover Card -->
        <div 
          @click="isCertModalOpen = true"
          class="group block card-hover cursor-pointer"
        >
          <div class="aspect-[4/3] w-full rounded-card overflow-hidden bg-paper-2 mb-4 relative flex items-center justify-center border border-paper-2 group-hover:border-accent-cyan/30 transition-colors">
              <img src="/images/Dicoding.png" alt="Dicoding Certifications" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm text-xs font-semibold text-ink">
                 +17 {{ lang.more }}
              </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-ink leading-snug group-hover:text-accent-cyan transition-colors line-clamp-2">
              Dicoding Sertifikat
            </h3>
            <p class="text-sm text-ink-2 mt-1">Dicoding Academy • Tap to view all 18</p>
          </div>
        </div>

        <!-- Other Certificates -->
        <div 
          v-for="cert in otherCertificates" 
          :key="cert.id"
          class="group block card-hover"
        >
          <div class="aspect-[4/3] w-full rounded-card overflow-hidden bg-paper-2 mb-4 relative flex items-center justify-center border border-paper-2 group-hover:border-accent-cyan/30 transition-colors">
            <!-- Custom Image -->
            <img v-if="cert.image" :src="cert.image" :alt="cert.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <!-- Placeholder -->
            <svg v-else class="w-12 h-12 text-ink/20 group-hover:text-accent-cyan/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-ink leading-snug group-hover:text-accent-cyan transition-colors line-clamp-2">
              {{ cert.title }}
            </h3>
            <p class="text-sm text-ink-2 mt-1">{{ cert.issuer }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal for All Certificates -->
    <div v-if="isCertModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity" @click="isCertModalOpen = false"></div>
      
      <!-- Modal Content -->
      <div class="relative bg-paper w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b border-paper-2 bg-paper/80 backdrop-blur-md z-10">
          <h2 class="text-2xl font-display font-semibold text-ink">Dicoding Certifications</h2>
          <button @click="isCertModalOpen = false" class="p-2 text-ink-2 hover:text-ink hover:bg-paper-2 rounded-full transition-colors focus:outline-none">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <!-- Body: The Grid -->
        <div class="p-6 overflow-y-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <a 
              v-for="cert in certificates" 
              :key="cert.id" 
              :href="cert.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group block card-hover"
            >
              <div class="aspect-[4/3] w-full rounded-card overflow-hidden bg-paper-2 mb-3 relative flex items-center justify-center border border-paper-2 group-hover:border-accent-cyan/30 transition-colors">
                <img v-if="cert.image" :src="cert.image" :alt="cert.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <svg v-else class="w-10 h-10 text-ink/20 group-hover:text-accent-cyan/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div class="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-1.5 rounded-full shadow-sm text-accent-cyan">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </div>
              <div>
                <h3 class="text-xs font-semibold text-ink leading-snug group-hover:text-accent-cyan transition-colors line-clamp-2" :title="cert.title">
                  {{ cert.title }}
                </h3>
              </div>
            </a>
          </div>
        </div>
        
      </div>
    </div>

    <!-- Project Details Modal -->
    <div v-if="isProjectModalOpen && selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" @click.self="isProjectModalOpen = false">
      <div class="absolute inset-0 bg-ink/40 backdrop-blur-sm" @click="isProjectModalOpen = false"></div>
      
      <div class="relative w-full max-w-2xl bg-paper rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <!-- Header Image Area -->
        <div class="relative w-full aspect-video bg-paper-2 flex items-center justify-center shrink-0">
          <img v-if="selectedProject.image" :src="selectedProject.image" :alt="selectedProject.title" class="absolute inset-0 w-full h-full object-cover" />
          <div v-else class="absolute inset-0 flex items-center justify-center text-ink/10 font-display text-4xl font-bold p-8 text-center px-4">
             {{ selectedProject.title }}
          </div>
          <!-- Close Button -->
          <button @click="isProjectModalOpen = false" class="absolute top-4 right-4 p-2 bg-paper/50 backdrop-blur-sm text-ink-2 hover:text-ink hover:bg-paper rounded-full transition-colors focus:outline-none z-10">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <!-- Body -->
        <div class="p-6 md:p-8 overflow-y-auto">
          <h2 class="text-3xl font-display font-semibold text-ink mb-4">{{ selectedProject.title }}</h2>
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="t in selectedProject.tech" :key="t" class="text-sm font-medium text-ink bg-paper-2 px-3 py-1.5 rounded-md border border-paper-2">
              {{ t }}
            </span>
          </div>
          <p class="text-ink-2 leading-relaxed mb-8 whitespace-pre-wrap">{{ selectedProject.description[locale] }}</p>
          
          <!-- Gallery -->
          <div v-if="selectedProject.gallery && selectedProject.gallery.length > 0" class="mb-8">
            <h3 class="text-lg font-semibold text-ink mb-4">Project Gallery</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="(img, index) in selectedProject.gallery" :key="index" class="aspect-video rounded-card overflow-hidden bg-paper-2 border border-paper-2">
                <img :src="img" :alt="`${selectedProject.title} screenshot ${index + 1}`" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <a v-if="selectedProject.github_url" :href="selectedProject.github_url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 rounded-full font-semibold hover:bg-ink-2 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              {{ lang.openProject }}
            </a>
            <a v-if="selectedProject.figma_url" :href="selectedProject.figma_url" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-[#F24E1E]/10 text-[#F24E1E] px-6 py-3 rounded-full font-semibold hover:bg-[#F24E1E]/20 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 2.002a4 4 0 1 0 0 8h4v-8H8zm8 0h-4v8h4a4 4 0 1 0 0-8zm-4 8H8a4 4 0 1 0 0 8h4v-8zm0 8H8a4 4 0 1 0 4 4v-4z" /></svg>
              {{ lang.viewDesign }}
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import projects from '~/data/projects.json'
import organizations from '~/data/organizations.json'

const { locale } = useLocale()
const lang = computed(() => t[locale.value])

// Typewriter Effect
const roles = [
  'Full-Stack Developer',
  'UI/UX Designer',
  'Graphic Designer',
  'Roblox Game Developer',
  'Content Creator',
  'Editor'
]
const currentRole = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typingTimeout

const typeWriter = () => {
  const currentText = roles[roleIndex]
  
  if (isDeleting) {
    currentRole.value = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    currentRole.value = currentText.substring(0, charIndex + 1)
    charIndex++
  }

  let typingSpeed = isDeleting ? 40 : 100

  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = 2000 // Pause before deleting
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length
    typingSpeed = 500 // Pause before typing next word
  }

  typingTimeout = setTimeout(typeWriter, typingSpeed)
}

onMounted(() => {
  typeWriter()
})

onUnmounted(() => {
  clearTimeout(typingTimeout)
})

const activeFilter = ref('All Work')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All Work') return projects
  return projects.filter(p => p.category === activeFilter.value)
})
import certificates from '~/data/certificates.json'
import otherCertificates from '~/data/other_certificates.json'

const isCertModalOpen = ref(false)

const isProjectModalOpen = ref(false)
const selectedProject = ref(null)

const openProjectModal = (project) => {
  selectedProject.value = project
  isProjectModalOpen.value = true
}

useHead({
  title: 'Wahyu Nugraha · Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio of Wahyu Nugraha, a Full Stack Developer and Game Developer based in Indonesia.' }
  ]
})
</script>

