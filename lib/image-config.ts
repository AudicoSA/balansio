/**
 * Image Configuration
 *
 * This file centralizes all image paths used across the site.
 * To update an image, simply change the path here.
 *
 * You can use:
 * - Local images: "/your-image.jpg" (place in /public folder)
 * - External URLs: "https://example.com/image.jpg" (must be added to next.config.js remotePatterns)
 */

export const imageConfig = {
  // Hero Section
  hero: {
    main: "/placeholder-hero.svg",
    avatars: {
      avatar1: "/placeholder-avatar1.svg",
      avatar2: "/placeholder-avatar2.svg",
      avatar3: "/placeholder-avatar3.svg",
    }
  },

  // How It Works Section
  steps: {
    step1: "/placeholder-step1.svg",
    step2: "/placeholder-step2.svg",
    step3: "/placeholder-step3.svg",
  },

  // Testimonials Section
  testimonials: {
    testimonial1: "/placeholder-testimonial1.svg",
    testimonial2: "/placeholder-testimonial2.svg",
    testimonial3: "/placeholder-testimonial3.svg",
  },

  // Contact Section
  contact: {
    office: "https://thumbs.dreamstime.com/b/modern-office-space-design-natural-light-plants-cozy-workspace-setup-home-ideas-interior-inspiration-minimalist-desk-367404334.jpg"
  },

  // Social Proof Section
  socialProof: {
    team: "https://thumbs.dreamstime.com/b/cheerful-african-businesswoman-smiling-hispanic-businessman-standing-office-stand-together-modern-holding-tablet-digital-382083030.jpg"
  },

  // Collaboration Section
  collaboration: {
    team: "https://thumbs.dreamstime.com/b/business-team-working-together-laptop-office-meeting-vertical-shot-businesspeople-collaborating-laptops-engaging-teamwork-387116550.jpg"
  }
}

// Helper function to get image path
export function getImagePath(category: keyof typeof imageConfig, key: string): string {
  const categoryObj = imageConfig[category] as any
  return categoryObj[key] || "/placeholder.svg"
}
