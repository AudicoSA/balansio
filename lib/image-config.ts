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
    main: "/hero.png",
    avatars: {
      avatar1: "/avatar1.png",
      avatar2: "/avatar2.png",
      avatar3: "/avatar3.png",
    }
  },

  // How It Works Section
  steps: {
    step1: "/step1.png",
    step2: "/step2.png",
    step3: "/step3.png",
  },

  // Testimonials Section
  testimonials: {
    testimonial1: "/testimonial1.png",
    testimonial2: "/testimonial2.png",
    testimonial3: "/testimonial3.png",
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
