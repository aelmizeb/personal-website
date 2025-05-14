import { Project } from "@/types";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const projects: Project[] = [
    {
        title: 'Advanced Reports for Magento 2',
        description: 'Advanced Reports for Magento 2 is a free extension which helps stores quickly access advanced reports on the Dashboard. This module provides visual dashboards and detailed statistics to help you make informed business decisions.',
        technologies: ['Magento 2', 'PHP', 'ECharts'],
        githubLink: 'https://github.com/aelmizeb/magento2-reports',
        demoLink: '',
        image: 'https://raw.githubusercontent.com/aelmizeb/magento2-reports/refs/heads/main/view/adminhtml/web/images/preview.png',
      },
      {
        title: 'Nuxt Dashboard Template',
        description: 'A Nuxt 3 dashboard template styled with Tailwind CSS and developed with Nuxt 3, ECharts, Leaflet and GitHub Actions.',
        technologies: ['Nuxt 3', 'Vue 3', 'ECharts', 'Tailwind CSS', 'Leaflet', 'GitHub Actions'],
        githubLink: 'https://github.com/aelmizeb/nuxt-dashboard',
        demoLink: 'https://aelmizeb.github.io/nuxt-dashboard/',
        image: 'https://raw.githubusercontent.com/aelmizeb/nuxt-dashboard/main/src/assets/img/preview.png',
      },
      {
        title: 'Site Metrics Card',
        description: 'A lightweight tool focused solely on analyzing and visualizing website performance, embeddable anywhere.',
        technologies: ['Node.js', 'Puppeteer', 'Lighthouse', 'node-canvas', 'TypeScript', 'GitHub Actions'],
        githubLink: 'https://github.com',
        demoLink: '',
        image: basePath + '/projects/site-metrics-card.png',
      },
  ];