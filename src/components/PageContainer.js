import React from 'react';
import {
    Editor,
    EditorState,
    RichUtils,
} from 'draft-js';

class PageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onChange = (editorState) => {
        this.setState({
            editorState
        });
    }

    handleKeyCommand = (command) => {
        const newState = 
        RichUtils.handleKeyCommand(this.state.editorState, command);

        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    };
    onItalicClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
    };
    onBoldClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
    };
    onUnderlineClick = () => {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
    };

    render() {
        return (
            <div>
                <div>
                    < button className='btn-style'
                    onClick = {
                        this.onItalicClick
                    } >
                        <em>I</em>
                    </button>
                    < button className='btn-style'
                    onClick = {
                        this.onBoldClick
                    } >
                        <em>B</em>
                    </button>
                    < button className='btn-style'
                    onClick = {
                        this.onUnderlineClick
                    } >
                        <em>U</em>
                    </button>
                </div>
                <div className = "editors" >
                    <Editor 
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default PageContainer;
