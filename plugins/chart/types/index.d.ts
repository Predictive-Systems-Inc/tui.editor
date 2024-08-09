import type { PluginContext, PluginInfo } from '@predictive-systems/editor';

export interface PluginOptions {
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  width: number | 'auto';
  height: number | 'auto';
}

export default function chartPlugin(context: PluginContext, options: PluginOptions): PluginInfo;
