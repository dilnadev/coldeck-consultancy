import type { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export const fadeInDown: Variants = {
  hidden:  { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const fadeInLeft: Variants = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export const fadeInRight: Variants = {
  hidden:  { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const staggerContainer: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

export const staggerContainerSlow: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

export const cardHover = {
  rest:  { y: 0,  boxShadow: '0 4px 24px rgba(77,89,183,0.08)', transition: { duration: 0.3 } },
  hover: { y: -8, boxShadow: '0 20px 60px rgba(77,89,183,0.25)', transition: { duration: 0.3 } },
}

export const buttonHover = {
  rest:  { scale: 1 },
  hover: { scale: 1.04 },
  tap:   { scale: 0.97 },
}

export const navbarVariants: Variants = {
  hidden:  { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const mobileMenuVariants: Variants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.25, ease: 'easeInOut' } },
}

export const accordionContent: Variants = {
  hidden:  { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.35, ease: 'easeInOut' } },
  exit:    { opacity: 0, height: 0,      transition: { duration: 0.25, ease: 'easeInOut' } },
}

export const pageTransition: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
}

export const viewportConfig = { once: true, margin: '-80px' }

