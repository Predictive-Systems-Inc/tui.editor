import '@/prismjs-langs';
import '@/css/plugin.css';

import type { PluginContext, PluginInfo } from '@predictive-systems/editor';

import Prism from 'prismjs';
import { PrismJs } from '@t/index';
import { codeSyntaxHighlightPlugin } from '@/plugin';

// Prevent to highlight all code elements automatically.
// @link https://prismjs.com/docs/Prism.html#.manual
// eslint-disable-next-line no-undefined
if (typeof window !== undefined) {
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
}

export default function plugin(context: PluginContext): PluginInfo {
  return codeSyntaxHighlightPlugin(context, { highlighter: Prism as PrismJs });
}
