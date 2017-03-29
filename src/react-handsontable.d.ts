/// <reference types="react" />
/// <reference types="handsontable" />

declare module "react-handsontable" {
    export interface Props extends ht.Options {
        root?: string
        settings?: ht.Options
    }

    export class HotTable extends React.Component<Props, {}> {
    }

    export default HotTable
}