import type { PluginContext, PluginInfo } from '@predictive-systems/editor';

export interface PluginOptions {
  preset?: string[];
}

export default function colorPlugin(context: PluginContext, options: PluginOptions): PluginInfo;
