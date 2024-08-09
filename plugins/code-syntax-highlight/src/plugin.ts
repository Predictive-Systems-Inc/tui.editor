import type { PluginContext, PluginInfo } from '@predictive-systems/editor';

import { PluginOptions } from '@t/index';
import { codeSyntaxHighlighting } from '@/plugins/codeSyntaxHighlighting';
import { createCodeSyntaxHighlightView } from '@/nodeViews/codeSyntaxHighlightView';
import { getHTMLRenderers } from '@/renderers/toHTMLRenderers';
import isFunction from 'tui-code-snippet/type/isFunction';

export function codeSyntaxHighlightPlugin(
  context: PluginContext,
  options?: PluginOptions
): PluginInfo {
  if (options) {
    const { eventEmitter } = context;
    const { highlighter: prism } = options;

    eventEmitter.addEventType('showCodeBlockLanguages');
    eventEmitter.addEventType('selectLanguage');
    eventEmitter.addEventType('finishLanguageEditing');

    const { languages } = prism!;
    const registerdlanguages = Object.keys(languages).filter(
      (language) => !isFunction(languages[language])
    );

    return {
      toHTMLRenderers: getHTMLRenderers(prism!),
      wysiwygPlugins: [() => codeSyntaxHighlighting(context, prism!)],
      wysiwygNodeViews: {
        codeBlock: createCodeSyntaxHighlightView(registerdlanguages),
      },
    };
  }
  return {};
}
