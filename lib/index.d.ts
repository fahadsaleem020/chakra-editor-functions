import { ButtonFunction, NodeOrMarkList, WithEditor } from "@chakra-editor/types";
import { ChainedCommands } from "@tiptap/react";
export declare const toBase64: <T extends Blob>(file: T, cb: (result: FileReader["result"]) => any) => void;
export declare const isExtension: <Property extends string = string, Object_1 extends Record<string, any> = object>(obj: Object_1, prop: Property, errorMessage?: string) => {
    blur: () => ChainedCommands;
    clearContent: (emitUpdate?: boolean | undefined) => ChainedCommands;
    clearNodes: () => ChainedCommands;
    command: (fn: (props: import("@tiptap/react").CommandProps) => boolean) => ChainedCommands;
    createParagraphNear: () => ChainedCommands;
    deleteCurrentNode: () => ChainedCommands;
    deleteNode: (typeOrName: string | import("prosemirror-model").NodeType) => ChainedCommands;
    deleteRange: (range: import("@tiptap/react").Range) => ChainedCommands;
    deleteSelection: () => ChainedCommands;
    enter: () => ChainedCommands;
    exitCode: () => ChainedCommands;
    extendMarkRange: (typeOrName: string | import("prosemirror-model").MarkType, attributes?: Record<string, any> | undefined) => ChainedCommands;
    first: (commands: import("@tiptap/react").Command[] | ((props: import("@tiptap/react").CommandProps) => import("@tiptap/react").Command[])) => ChainedCommands;
    focus: (position?: import("@tiptap/react").FocusPosition | undefined, options?: {
        scrollIntoView?: boolean | undefined;
    } | undefined) => ChainedCommands;
    forEach: <T>(items: T[], fn: (item: T, props: import("@tiptap/react").CommandProps & {
        index: number;
    }) => boolean) => ChainedCommands;
    insertContent: (value: import("@tiptap/react").Content, options?: {
        parseOptions?: import("prosemirror-model").ParseOptions | undefined;
        updateSelection?: boolean | undefined;
    } | undefined) => ChainedCommands;
    insertContentAt: (position: number | import("@tiptap/react").Range, value: import("@tiptap/react").Content, options?: {
        parseOptions?: import("prosemirror-model").ParseOptions | undefined;
        updateSelection?: boolean | undefined;
    } | undefined) => ChainedCommands;
    joinUp: () => ChainedCommands;
    joinDown: () => ChainedCommands;
    joinBackward: () => ChainedCommands;
    joinForward: () => ChainedCommands;
    keyboardShortcut: (name: string) => ChainedCommands;
    lift: (typeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
    liftEmptyBlock: () => ChainedCommands;
    liftListItem: (typeOrName: string | import("prosemirror-model").NodeType) => ChainedCommands;
    newlineInCode: () => ChainedCommands;
    resetAttributes: (typeOrName: string | import("prosemirror-model").NodeType | import("prosemirror-model").MarkType, attributes: string | string[]) => ChainedCommands;
    scrollIntoView: () => ChainedCommands;
    selectAll: () => ChainedCommands;
    selectNodeBackward: () => ChainedCommands;
    selectNodeForward: () => ChainedCommands;
    selectParentNode: () => ChainedCommands;
    selectTextblockEnd: () => ChainedCommands;
    selectTextblockStart: () => ChainedCommands;
    setContent: (content: import("@tiptap/react").Content, emitUpdate?: boolean | undefined, parseOptions?: import("prosemirror-model").ParseOptions | undefined) => ChainedCommands;
    setMark: (typeOrName: string | import("prosemirror-model").MarkType, attributes?: Record<string, any> | undefined) => ChainedCommands;
    setMeta: (key: string, value: any) => ChainedCommands;
    setNode: (typeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
    setNodeSelection: (position: number) => ChainedCommands;
    setTextSelection: (position: number | import("@tiptap/react").Range) => ChainedCommands;
    sinkListItem: (typeOrName: string | import("prosemirror-model").NodeType) => ChainedCommands;
    splitBlock: (options?: {
        keepMarks?: boolean | undefined;
    } | undefined) => ChainedCommands;
    splitListItem: (typeOrName: string | import("prosemirror-model").NodeType) => ChainedCommands;
    toggleList: (listTypeOrName: string | import("prosemirror-model").NodeType, itemTypeOrName: string | import("prosemirror-model").NodeType) => ChainedCommands;
    toggleMark: (typeOrName: string | import("prosemirror-model").MarkType, attributes?: Record<string, any> | undefined, options?: {
        extendEmptyMarkRange?: boolean | undefined;
    } | undefined) => ChainedCommands;
    toggleNode: (typeOrName: string | import("prosemirror-model").NodeType, toggleTypeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
    toggleWrap: (typeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
    undoInputRule: () => ChainedCommands;
    unsetAllMarks: () => ChainedCommands;
    unsetMark: (typeOrName: string | import("prosemirror-model").MarkType, options?: {
        extendEmptyMarkRange?: boolean | undefined;
    } | undefined) => ChainedCommands;
    updateAttributes: (typeOrName: string | import("prosemirror-model").NodeType | import("prosemirror-model").MarkType, attributes: Record<string, any>) => ChainedCommands;
    wrapIn: (typeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
    wrapInList: (typeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
} & {
    run: () => boolean;
} & Record<Property, (...options: any[]) => ChainedCommands>;
export declare const getAttributeValue: <T>(props: WithEditor & {
    nodeOrMark: NodeOrMarkList;
    attribute: string;
}) => T;
export declare const toggleBold: ButtonFunction<WithEditor>;
export declare const toggleCodeBlock: ButtonFunction<WithEditor>;
export declare const setCodeBlock: ButtonFunction<WithEditor>;
export declare const unSetCodeBlock: ButtonFunction<WithEditor>;
export declare const toggleCode: ButtonFunction<WithEditor>;
export declare const setCode: ButtonFunction<WithEditor>;
export declare const unsetCode: ButtonFunction<WithEditor>;
export declare const toggleSubscript: ButtonFunction<WithEditor>;
export declare const sinkListItem: ButtonFunction<WithEditor>;
export declare const canSink: ButtonFunction<WithEditor>;
export declare const liftListItem: ButtonFunction<WithEditor>;
export declare const canLift: ButtonFunction<WithEditor>;
export declare const setFontFamily: ButtonFunction<{
    fontfamily?: string;
} & WithEditor>;
export declare const setFontSize: ButtonFunction<WithEditor & {
    fontSize: string;
}>;
export declare const getFontSizeValue: ButtonFunction<WithEditor, string | undefined>;
export declare const insertVideo: ButtonFunction<WithEditor & {
    src: string;
    title: string;
    sources?: Record<string, string>;
}>;
export declare const insertYoutubeVideo: ButtonFunction<{
    src: string;
    width?: number;
    height?: number;
    start?: number;
} & WithEditor>;
export declare const clearFormats: ButtonFunction<WithEditor>;
export declare const setTextAlignment: ButtonFunction<{
    position: "left" | "right" | "center" | "justify";
} & WithEditor>;
export declare const unSetTextAlignment: ButtonFunction<WithEditor>;
export declare const isTextAlignmentValue: ButtonFunction<{
    position: "left" | "right" | "center" | "justify";
} & WithEditor>;
export declare const getTextAlignmentValue: ButtonFunction<WithEditor, "justify" | "left" | "right" | "center">;
export declare const clearContents: ButtonFunction<WithEditor>;
export declare const toggleSuperscript: ButtonFunction<WithEditor>;
export declare const toggleItalic: ButtonFunction<WithEditor>;
export declare const toggleStrike: ButtonFunction<WithEditor>;
export declare const toggleUnderline: ButtonFunction<WithEditor>;
export declare const toggleBlockQuote: ButtonFunction<WithEditor>;
export declare const setHardBreak: ButtonFunction<WithEditor>;
export declare const setUndo: ButtonFunction<WithEditor>;
export declare const setRedo: ButtonFunction<WithEditor>;
export declare const toggleHighlight: ButtonFunction<WithEditor>;
export declare const setHighlightColor: ButtonFunction<{
    color?: string;
} & WithEditor>;
export declare const unsetHighlightColor: ButtonFunction<WithEditor>;
export declare const setHorizontalLine: ButtonFunction<WithEditor>;
export declare const toggleHeading: ButtonFunction<{
    level: any;
} & WithEditor>;
export declare const getFontColorValue: ButtonFunction<WithEditor, string | undefined>;
export declare const getHighlightColorValue: ButtonFunction<WithEditor, string | undefined>;
export declare const setFontColor: ButtonFunction<{
    color: string;
} & WithEditor>;
export declare const unsetFontColor: ButtonFunction<WithEditor>;
export declare const inrceaseTextIndent: ButtonFunction<WithEditor & {
    value?: number;
    limit?: number;
}>;
export declare const decreaseTextIndent: ButtonFunction<WithEditor & {
    value?: number;
}>;
export declare const toggleBulletList: ButtonFunction<WithEditor>;
export declare const toggleNumberedList: ButtonFunction<WithEditor>;
export declare const insertUrl: ButtonFunction<{
    url: string;
} & WithEditor>;
export declare const deleteSelection: ButtonFunction<WithEditor>;
export declare const insertTable: ButtonFunction<{
    rows: number;
    columns: number;
    withHeader?: boolean;
} & WithEditor>;
export declare const deleteTable: ButtonFunction<WithEditor>;
export declare const deleteNode: ButtonFunction<WithEditor & {
    nodeOrMark: NodeOrMarkList;
}>;
export declare const fixTables: ButtonFunction<WithEditor>;
export declare const mergeCells: ButtonFunction<WithEditor>;
export declare const splitCell: ButtonFunction<WithEditor>;
export declare const mergeOrSplit: ButtonFunction<WithEditor>;
export declare const setCellAttribute: ButtonFunction<{
    cellAttr: "colspan" | "rowspan";
    attrValue: number;
} & WithEditor>;
export declare const goToNextCell: ButtonFunction<WithEditor>;
export declare const goToPreviousCell: ButtonFunction<WithEditor>;
export declare const toggleHeaderColumn: ButtonFunction<WithEditor>;
export declare const toggleHeaderRow: ButtonFunction<WithEditor>;
export declare const toggleHeaderCell: ButtonFunction<WithEditor>;
export declare const insertColumnBefore: ButtonFunction<WithEditor>;
export declare const insertColumnAfter: ButtonFunction<WithEditor>;
export declare const deleteColumn: ButtonFunction<WithEditor>;
export declare const insertRowBefore: ButtonFunction<WithEditor>;
export declare const insertRowAfter: ButtonFunction<WithEditor>;
export declare const deleteRow: ButtonFunction<WithEditor>;
export declare const removeUrl: ButtonFunction<WithEditor>;
export declare const insertImage: ButtonFunction<{
    src: unknown;
    alt: string;
    title: string;
    sources?: Record<string, string>;
} & WithEditor>;
export declare const activeHeadingValue: ButtonFunction<WithEditor, 1 | 2 | 3 | 4 | 5 | 6 | "paragraph">;
export declare const getFontFamilyValue: ButtonFunction<WithEditor, string | undefined>;
export declare const isNodeOrMarkActive: ButtonFunction<{
    nodeOrMark: NodeOrMarkList;
    attributes?: Record<string, any>;
} & WithEditor>;
declare const functions: {
    isExtension: <Property extends string = string, Object_1 extends Record<string, any> = object>(obj: Object_1, prop: Property, errorMessage?: string) => {
        blur: () => ChainedCommands;
        clearContent: (emitUpdate?: boolean | undefined) => ChainedCommands;
        clearNodes: () => ChainedCommands;
        command: (fn: (props: import("@tiptap/react").CommandProps) => boolean) => ChainedCommands;
        createParagraphNear: () => ChainedCommands;
        deleteCurrentNode: () => ChainedCommands;
        deleteNode: (typeOrName: string | import("prosemirror-model").NodeType) => ChainedCommands;
        deleteRange: (range: import("@tiptap/react").Range) => ChainedCommands;
        deleteSelection: () => ChainedCommands;
        enter: () => ChainedCommands;
        exitCode: () => ChainedCommands;
        extendMarkRange: (typeOrName: string | import("prosemirror-model").MarkType, attributes?: Record<string, any> | undefined) => ChainedCommands;
        first: (commands: import("@tiptap/react").Command[] | ((props: import("@tiptap/react").CommandProps) => import("@tiptap/react").Command[])) => ChainedCommands;
        focus: (position?: import("@tiptap/react").FocusPosition | undefined, options?: {
            scrollIntoView?: boolean | undefined;
        } | undefined) => ChainedCommands;
        forEach: <T>(items: T[], fn: (item: T, props: import("@tiptap/react").CommandProps & {
            index: number;
        }) => boolean) => ChainedCommands;
        insertContent: (value: import("@tiptap/react").Content, options?: {
            parseOptions?: import("prosemirror-model").ParseOptions | undefined;
            updateSelection?: boolean | undefined;
        } | undefined) => ChainedCommands;
        insertContentAt: (position: number | import("@tiptap/react").Range, value: import("@tiptap/react").Content, options?: {
            parseOptions?: import("prosemirror-model").ParseOptions | undefined;
            updateSelection?: boolean | undefined;
        } | undefined) => ChainedCommands;
        joinUp: () => ChainedCommands;
        joinDown: () => ChainedCommands;
        joinBackward: () => ChainedCommands;
        joinForward: () => ChainedCommands;
        keyboardShortcut: (name: string) => ChainedCommands;
        lift: (typeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
        liftEmptyBlock: () => ChainedCommands;
        liftListItem: (typeOrName: string | import("prosemirror-model").NodeType) => ChainedCommands;
        newlineInCode: () => ChainedCommands;
        resetAttributes: (typeOrName: string | import("prosemirror-model").NodeType | import("prosemirror-model").MarkType, attributes: string | string[]) => ChainedCommands;
        scrollIntoView: () => ChainedCommands;
        selectAll: () => ChainedCommands;
        selectNodeBackward: () => ChainedCommands;
        selectNodeForward: () => ChainedCommands;
        selectParentNode: () => ChainedCommands;
        selectTextblockEnd: () => ChainedCommands;
        selectTextblockStart: () => ChainedCommands;
        setContent: (content: import("@tiptap/react").Content, emitUpdate?: boolean | undefined, parseOptions?: import("prosemirror-model").ParseOptions | undefined) => ChainedCommands;
        setMark: (typeOrName: string | import("prosemirror-model").MarkType, attributes?: Record<string, any> | undefined) => ChainedCommands;
        setMeta: (key: string, value: any) => ChainedCommands;
        setNode: (typeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
        setNodeSelection: (position: number) => ChainedCommands;
        setTextSelection: (position: number | import("@tiptap/react").Range) => ChainedCommands;
        sinkListItem: (typeOrName: string | import("prosemirror-model").NodeType) => ChainedCommands;
        splitBlock: (options?: {
            keepMarks?: boolean | undefined;
        } | undefined) => ChainedCommands;
        splitListItem: (typeOrName: string | import("prosemirror-model").NodeType) => ChainedCommands;
        toggleList: (listTypeOrName: string | import("prosemirror-model").NodeType, itemTypeOrName: string | import("prosemirror-model").NodeType) => ChainedCommands;
        toggleMark: (typeOrName: string | import("prosemirror-model").MarkType, attributes?: Record<string, any> | undefined, options?: {
            extendEmptyMarkRange?: boolean | undefined;
        } | undefined) => ChainedCommands;
        toggleNode: (typeOrName: string | import("prosemirror-model").NodeType, toggleTypeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
        toggleWrap: (typeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
        undoInputRule: () => ChainedCommands;
        unsetAllMarks: () => ChainedCommands;
        unsetMark: (typeOrName: string | import("prosemirror-model").MarkType, options?: {
            extendEmptyMarkRange?: boolean | undefined;
        } | undefined) => ChainedCommands;
        updateAttributes: (typeOrName: string | import("prosemirror-model").NodeType | import("prosemirror-model").MarkType, attributes: Record<string, any>) => ChainedCommands;
        wrapIn: (typeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
        wrapInList: (typeOrName: string | import("prosemirror-model").NodeType, attributes?: Record<string, any> | undefined) => ChainedCommands;
    } & {
        run: () => boolean;
    } & Record<Property, (...options: any[]) => ChainedCommands>;
    toggleBold: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    setHorizontalLine: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    setHardBreak: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleHeading: ButtonFunction<{
        level: any;
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleStrike: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    activeHeadingValue: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, "paragraph" | 1 | 2 | 3 | 4 | 5 | 6>;
    toggleBulletList: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleNumberedList: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    insertUrl: ButtonFunction<{
        url: string;
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    removeUrl: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    isNodeOrMarkActive: ButtonFunction<{
        nodeOrMark: NodeOrMarkList;
        attributes?: Record<string, any> | undefined;
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    insertImage: ButtonFunction<{
        src: unknown;
        alt: string;
        title: string;
        sources?: Record<string, string> | undefined;
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleItalic: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleUnderline: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleBlockQuote: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleCodeBlock: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleSubscript: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleSuperscript: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    clearFormats: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    clearContents: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    setUndo: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    setRedo: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    setFontColor: ButtonFunction<{
        color: string;
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    unsetFontColor: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleHighlight: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    setHighlightColor: ButtonFunction<{
        color?: string | undefined;
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    unsetHighlightColor: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    insertYoutubeVideo: ButtonFunction<{
        src: string;
        width?: number | undefined;
        height?: number | undefined;
        start?: number | undefined;
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    sinkListItem: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    canSink: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    liftListItem: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    canLift: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    getFontColorValue: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, string | undefined>;
    getHighlightColorValue: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, string | undefined>;
    getFontFamilyValue: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, string | undefined>;
    setFontFamily: ButtonFunction<{
        fontfamily?: string | undefined;
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    setTextAlignment: ButtonFunction<{
        position: "left" | "right" | "center" | "justify";
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    unSetTextAlignment: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    isTextAlignmentValue: ButtonFunction<{
        position: "left" | "right" | "center" | "justify";
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    insertTable: ButtonFunction<{
        rows: number;
        columns: number;
        withHeader?: boolean | undefined;
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    deleteSelection: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    getAttributeValue: <T>(props: WithEditor & {
        nodeOrMark: NodeOrMarkList;
        attribute: string;
    }) => T;
    deleteTable: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    fixTables: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    mergeCells: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    splitCell: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    mergeOrSplit: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    setCellAttribute: ButtonFunction<{
        cellAttr: "colspan" | "rowspan";
        attrValue: number;
    } & {
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    goToNextCell: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    goToPreviousCell: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleHeaderColumn: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleHeaderRow: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    toggleHeaderCell: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    insertColumnBefore: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    insertColumnAfter: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    deleteColumn: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    insertRowBefore: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    insertRowAfter: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    deleteRow: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    deleteNode: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    } & {
        nodeOrMark: NodeOrMarkList;
    }, boolean>;
    setFontSize: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    } & {
        fontSize: string;
    }, boolean>;
    getTextAlignmentValue: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, "left" | "right" | "center" | "justify">;
    getFontSizeValue: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, string | undefined>;
    inrceaseTextIndent: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    } & {
        value?: number | undefined;
        limit?: number | undefined;
    }, boolean>;
    decreaseTextIndent: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    } & {
        value?: number | undefined;
    }, boolean>;
    toBase64: <T_1 extends Blob>(file: T_1, cb: (result: FileReader["result"]) => any) => void;
    insertVideo: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    } & {
        src: string;
        title: string;
        sources?: Record<string, string> | undefined;
    }, boolean>;
    toggleCode: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    setCode: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
    unsetCode: ButtonFunction<{
        editor: import("@tiptap/react").Editor;
    }, boolean>;
};
export default functions;
