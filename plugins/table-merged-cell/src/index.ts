import './css/plugin.css';

import type { PluginContext, PluginInfo } from '@predictive-systems/editor';
import { createOffsetMapMixin, offsetMapMixin } from '@/wysiwyg/tableOffsetMapMixin';

import { addLangs } from '@/i18n/langs';
import { addMergedTableContextMenu } from '@/wysiwyg/contextMenu';
import { createCommands } from '@/wysiwyg/commandFactory';
import { markdownParsers } from '@/markdown/parser';
import { toHTMLRenderers } from '@/markdown/renderer';
import { toMarkdownRenderers } from '@/wysiwyg/renderer';

export default function tableMergedCellPlugin(context: PluginContext): PluginInfo {
  const { i18n, eventEmitter } = context;
  const TableOffsetMap = eventEmitter.emitReduce(
    'mixinTableOffsetMapPrototype',
    offsetMapMixin,
    createOffsetMapMixin
  );

  addLangs(i18n);
  addMergedTableContextMenu(context);

  return {
    toHTMLRenderers,
    markdownParsers,
    toMarkdownRenderers,
    wysiwygCommands: createCommands(context, TableOffsetMap),
  };
}
