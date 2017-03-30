import * as React from "react"
import * as moment from "moment"
import numbro from "numbro"
import * as Pikaday from "pikaday"
import * as Zeroclipboard from "zeroclipboard"
import * as Handsontable from "handsontable"
import "handsontable.css"

export interface Props {
    root?: string
    settings: any
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
export default class HotTable extends React.Component<Props, {}> {
    hotInstance: any
    root: string

    constructor(props: Props) {
        super(props)

        this.root = this.props.root || 'hot' + new Date().getTime()
    }

    /**
     * Initialize Handsontable after the component has mounted.
     */
    componentDidMount() {
        console.log("Is Handsontable loaded?", Handsontable)
        const newSettings = this.props.settings
        this.hotInstance = new Handsontable(document.getElementById(this.root) as Element, newSettings)
    }

    /**
     * Call the `updateHot` method and prevent the component from re-rendering the instance.
     *
     * @param {Object} nextProps
     * @param {Object} nextState
     * @returns {Boolean}
     */
    shouldComponentUpdate(nextProps: Props, nextState: {}) {
        this.updateHot(nextProps.settings)

        return false;
    }

    /**
     * Destroy the Handsontable instance when the parent component unmounts.
     */
    componentWillUnmount() {
        this.hotInstance.destroy()
    }

    /**
     * Render the table.
     *
     * @returns {XML}
     */
    render() {
        return <div id={this.root}></div>
    }

    /**
     * Call the `updateSettings` method for the Handsontable instance.
     * @param newSettings
     */
    updateHot(newSettings: any) {
        this.hotInstance.updateSettings(newSettings)
    }
}
