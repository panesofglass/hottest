import * as React from "react"
import HotTable from "./react-handsontable"

const Demo = () => {
    const data = [
      ["", "Ford", "Volvo", "Toyota", "Honda"],
      ["2016", 10, 11, 12, 13],
      ["2017", 20, 11, 14, 13],
      ["2018", 30, 15, 12, 13]
    ]

    return (
        <div id="example-component">
            <HotTable settings={{
                data: data,
                colHeaders: true,
                rowHeaders: true,
                width: 600,
                height: 300,
                stretchH: "all"
             }} />
        </div>
    )
}

export default Demo
