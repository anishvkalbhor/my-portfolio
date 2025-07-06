import * as LucideIcons from "lucide-react"
import { Code2, FileText, type LucideIcon } from "lucide-react"

interface SocialLink {
  platform: string
  url: string
  icon: string
}

interface SocialLinksProps {
  socialLinks: SocialLink[]
}

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  const getIconComponent = (iconName: string): LucideIcon | null => {
    // Handle special cases for platforms that don't have specific Lucide icons
    switch (iconName) {
      case "Leetcode":
        return Code2 // Using Code2 icon for Leetcode
      case "Resume":
        return FileText // Using FileText icon for Resume
      case "Github":
        return LucideIcons.Github as LucideIcon
      case "Linkedin":
        return LucideIcons.Linkedin as LucideIcon
      default:
        const icon = LucideIcons[iconName as keyof typeof LucideIcons]
        return icon ? icon as LucideIcon : null
    }
  }

  return (
    <div className="flex justify-center gap-2 sm:gap-3 my-2 sm:my-3">
      {socialLinks.map((link, index) => {
        const IconComponent = getIconComponent(link.icon)

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
            aria-label={link.platform}
          >
            {IconComponent && <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />}
          </a>
        )
      })}
    </div>
  )
}
