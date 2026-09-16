/**
 * Replaces every `var(--name)` reference with the value currently defined on
 * `:root`. Needed for APIs that can't resolve CSS custom properties at paint
 * time (canvas gradient colors, WebGL uniforms). Unknown variables are left
 * untouched so callers fall back to their original string.
 */
export const resolveCssVars = (value: string): string =>
  value.replace(/var\((--[\w-]+)\)/g, (match, name: string) => {
    const resolved = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return resolved || match;
  });
