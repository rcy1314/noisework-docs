declare const gitmojis: Record<string, string>;
declare function convert(content: string, withSpace?: boolean | "leading" | "trailing" | "both"): string;

export { convert, gitmojis };
