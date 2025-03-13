import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://kaifoundry.com/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1.0,
        },
        {
            url: 'https://kaifoundry.com/career',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://kaifoundry.com/blogs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://kaifoundry.com/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://kaifoundry.com/blogs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://kaifoundry.com/blogs',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}