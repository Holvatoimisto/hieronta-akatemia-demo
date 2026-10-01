/**
 * Shared visual styles for the primary education CTA ("Hae koulutukseen").
 * Two context variants: the surrounding surface decides which one is used.
 *
 * Surface-only: geometry (size, padding, width, radius) stays
 * context-specific at each call site.
 */

/** Brand blue primary CTA for light surfaces. */
export const bookingPrimaryOnLightClasses =
  'bg-[#0271E0] text-white border border-[#0271E0] shadow-[0_8px_28px_rgba(2,113,224,0.30)] hover:bg-[#0159B5] hover:border-[#0159B5] hover:shadow-[0_10px_32px_rgba(2,113,224,0.38)] transition-all duration-300';

/** Brand blue primary CTA for dark surfaces (hero, final CTA). */
export const bookingGlassOnDarkClasses =
  'bg-[#0271E0] text-white border border-[#0271E0] shadow-[0_8px_28px_rgba(2,113,224,0.35)] hover:bg-[#0159B5] hover:border-[#0159B5] transition-colors duration-300';
