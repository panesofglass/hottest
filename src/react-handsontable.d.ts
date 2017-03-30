// Type definitions for React-Handsontable 0.1
// Project: https://handsontable.com/
// Definitions by: Ryan Riley <https://github.com/panesofglass/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/

declare namespace HotTable {

    export interface Props extends ht.Options {
        root?: string
        settings?: ht.Options
    }

    /**
     * A Handsontable-ReactJS wrapper.
     *
     * To implement, use the `HotTable` tag with properties corresponding to Handsontable options.
     * For example:
     *
     * ```js
     * <HotTable root="hot" data={dataObject} contextMenu={true} colHeaders={true} width={600} height={300} stretchH="all" />
     *
     * // is analogous to
     * let hot = new Handsontable(document.getElementById('hot'), {
     *    data: dataObject,
     *    contextMenu: true,
     *    colHeaders: true,
     *    width: 600
     *    height: 300
     * });
     *
     * ```
     *
     * @class HotTable
     */
    export class HotTable extends React.Component<Props, {}> {

    }
}

declare module "react-handsontable" {
    export default HotTable.HotTable;
}
