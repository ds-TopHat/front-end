import typography from '@styles/tokens/typography';

const fonts = {
  displayLarge: {
    fontWeight: typography.fontWeight.semibold,
    fontSize: typography.fontSize.xl,
    lineHeight: typography.lineHeight.xl,
  },
  displayMedium: {
    fontWeight: typography.fontWeight.semibold,
    fontSize: typography.fontSize.lg,
    lineHeight: typography.lineHeight.lg,
  },
  displaySmall: {
    fontWeight: typography.fontWeight.semibold,
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.lg,
  },
  headlineLarge: {
    fontWeight: typography.fontWeight.semibold,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.md,
  },
  headlineMedium: {
    fontWeight: typography.fontWeight.semibold,
    fontSize: typography.fontSize.xs,
    lineHeight: typography.lineHeight.sm,
  },
  headlineSmall: {
    fontWeight: typography.fontWeight.medium,
    fontSize: typography.fontSize.lg,
    lineHeight: typography.lineHeight.lg,
  },
  bodyLarge: {
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.fontSize.lg,
    lineHeight: typography.lineHeight.lg,
  },
  bodyMedium: {
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.lg,
  },
  bodySmall: {
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.md,
  },
  labelLarge: {
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.fontSize.xs,
    lineHeight: typography.lineHeight.lg,
  },
  labelSmall: {
    fontWeight: typography.fontWeight.regular,
    fontSize: typography.fontSize.xxs,
    lineHeight: typography.lineHeight.xs,
  },
} as const;

export default fonts;