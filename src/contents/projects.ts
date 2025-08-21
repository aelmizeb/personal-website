import { Project } from "@/types";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const projects: Project[] = [
    {
        title: 'Advanced Reports for Magento 2',
        description: 'Advanced Reports for Magento 2 is a free extension which helps stores quickly access advanced reports on the Dashboard. This module provides visual dashboards and detailed statistics to help you make informed business decisions.',
        technologies: ['Magento 2', 'PHP', 'ECharts'],
        githubLink: 'https://github.com/aelmizeb/magento2-reports',
        demoLink: '',
        image: basePath + '/open-source-projects/magento2-reports.png',
      },
      {
        title: 'Nuxt Dashboard Template',
        description: 'A Nuxt 3 dashboard template styled with Tailwind CSS and developed with Nuxt 3, ECharts, Leaflet and GitHub Actions.',
        technologies: ['Nuxt 3', 'Vue 3', 'ECharts', 'Tailwind CSS', 'Leaflet', 'GitHub Actions'],
        githubLink: 'https://github.com/aelmizeb/nuxt-dashboard',
        demoLink: 'https://aelmizeb.github.io/nuxt-dashboard/',
        image: basePath + '/open-source-projects/nuxt-dashboard.png',
      },
      {
        title: 'Site Metrics Card',
        description: 'A lightweight tool focused solely on analyzing and visualizing website performance, embeddable anywhere.',
        technologies: ['Node.js', 'Puppeteer', 'Lighthouse', 'node-canvas', 'TypeScript', 'GitHub Actions'],
        githubLink: 'https://github.com/aelmizeb/site-metrics-card',
        demoLink: 'https://github.com/aelmizeb/site-metrics-card',
        image: basePath + '/open-source-projects/website-metrics.svg',
      },
      {
        title: 'Rust Crypt: A Customizable Encryptor Built with Rust',
        description: 'A GUI-based encryption app built with Rust to explore and test the Rust GUI ecosystem.',
        technologies: ['Rust', 'egui'],
        githubLink: 'https://github.com/aelmizeb/rust-crypt',
        demoLink: '',
        image: basePath + '/open-source-projects/rust-crypt.png',
      },
  ];