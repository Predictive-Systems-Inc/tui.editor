import { Direction } from './command/direction';
import type { PluginContext } from '@predictive-systems/editor';
import type { TableOffsetMapFactory } from '@t/index';
import { createAddColumnCommand } from './command/addColumn';
import { createAddRowCommand } from './command/addRow';
import { createMergeCellsCommand } from './command/mergeCells';
import { createRemoveColumnCommand } from './command/removeColumn';
import { createRemoveRowCommand } from './command/removeRow';
import { createSplitCellsCommand } from './command/splitCells';

export function createCommands(context: PluginContext, OffsetMap: TableOffsetMapFactory) {
  return {
    mergeCells: createMergeCellsCommand(context, OffsetMap),
    splitCells: createSplitCellsCommand(context, OffsetMap),
    addRowToUp: createAddRowCommand(context, OffsetMap, Direction.UP),
    addRowToDown: createAddRowCommand(context, OffsetMap, Direction.DOWN),
    removeRow: createRemoveRowCommand(context, OffsetMap),
    addColumnToLeft: createAddColumnCommand(context, OffsetMap, Direction.LEFT),
    addColumnToRight: createAddColumnCommand(context, OffsetMap, Direction.RIGHT),
    removeColumn: createRemoveColumnCommand(context, OffsetMap),
  };
}
