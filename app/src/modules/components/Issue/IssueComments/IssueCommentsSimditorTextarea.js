import React from 'react';
import Simditor from "simditor";
import $ from "jquery";

require("simditor/styles/simditor.css");

/**
 * 取值 let goods_desc = $(".detailContainer").find(".simditor-body").html();
 */

class SimditorTextarea extends React.Component {

    componentDidMount = () => {
        this.initEditor();
        this.editor.setValue("");
    };

    initEditor = () => {
        let config = {
            placeholder: this.props.placeholder,
            defaultImage: 'images/image.png',
            params: {},
            tabIndent: true,
            toolbar: [
                'title',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'fontScale',
                'color',
                'link',
                'hr',
                'indent',
                'outdent',
                'alignment',
            ],
            toolbarFloat: true,
            toolbarFloatOffset: 0,
            toolbarHidden: false,
            pasteImage: false,
            cleanPaste: false,
            textarea: $(this.refs.textarea)
        };
        
        

        this.editor = new Simditor(config);
        this.editor.setValue(this.props.value);
//        this.editor.on("valuechanged", (e, src) => {
//            let html = this.editor.getValue();
//        });
    };

    render() {
        return (
            <textarea
                id={this.props.id}
                ref="textarea"
                placeholder=""/>
        );
    }
}

export default SimditorTextarea;