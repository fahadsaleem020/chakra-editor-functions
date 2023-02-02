import { WithEditor, NodeOrMarkList, ButtonFunction } from "@retap/types";
import { ChainedCommands } from "@tiptap/react";

export const toBase64 = <T extends Blob>(
  file: T,
  cb: (result: FileReader["result"]) => any
) => {
  var fileReader = new FileReader();
  fileReader.onloadend = () => cb(fileReader.result);
  fileReader.readAsDataURL(file);
};

export const isExtension = <
  Property extends string = string,
  Object extends Record<string, any> = object
>(
  obj: Object,
  prop: Property,
  errorMessage = `A plugin is required for this operation. \ntrying to call: ${prop}`
) => {
  if (prop in obj) {
    return obj as unknown as ChainedCommands &
      Record<Property, (...options: any[]) => ChainedCommands>;
  } else {
    throw new Error(errorMessage);
  }
};

export const getAttributeValue: <T>(
  props: WithEditor & { nodeOrMark: NodeOrMarkList; attribute: string }
) => T = ({ editor, nodeOrMark, attribute }) => {
  return editor.getAttributes(nodeOrMark)[attribute];
};

export const toggleBold: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "toggleBold").toggleBold().run();
};

export const toggleCodeBlock: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "toggleCodeBlock")
    .toggleCodeBlock()
    .run();

export const setCodeBlock: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "setCodeBlock").setCodeBlock().run();

export const unSetCodeBlock: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "unsetBlockquote")
    .unsetBlockquote()
    .run();

export const toggleCode: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "toggleCode").toggleCode().run();

export const setCode: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "setCode").setCode().run();

export const unsetCode: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "unsetCode").unsetCode().run();

export const toggleSubscript: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "toggleSubscript")
    .toggleSubscript()
    .run();

export const sinkListItem: ButtonFunction<WithEditor> = ({ editor }) =>
  editor.chain().focus().sinkListItem("listItem").run();

export const canSink: ButtonFunction<WithEditor> = ({ editor }) =>
  editor.can().sinkListItem("listItem");

export const liftListItem: ButtonFunction<WithEditor> = ({ editor }) =>
  editor.chain().focus().liftListItem("listItem").run();

export const canLift: ButtonFunction<WithEditor> = ({ editor }) =>
  editor.can().liftListItem("listItem");

export const setFontFamily: ButtonFunction<
  { fontfamily?: string } & WithEditor
> = ({ editor, fontfamily = "arial" }) =>
  isExtension(editor.chain().focus(), "setFontFamily")
    .setFontFamily(fontfamily)
    .run();

export const setFontSize: ButtonFunction<WithEditor & { fontSize: string }> = ({
  editor,
  fontSize,
}) => {
  return isExtension(
    editor.chain().focus(),
    "setFontSize",
    'Please import "FontSize" extension'
  )
    .setFontSize(fontSize)
    .run();
};

export const getFontSizeValue: ButtonFunction<
  WithEditor,
  string | undefined
> = ({ editor }) => {
  return getAttributeValue<string | undefined>({
    editor,
    nodeOrMark: "textStyle",
    attribute: "fontSize",
  })
    ?.split("px")
    .at(0);
};

export const insertVideo: ButtonFunction<
  WithEditor & {
    src: string;
    title: string;
    sources?: Record<string, string>;
  }
> = ({ editor, sources, src, title }) => {
  return isExtension(
    editor.chain().focus(),
    "setVideo",
    'Please import "Video" extension'
  )
    .setVideo({ src, sources, title })
    .run();
};

export const insertYoutubeVideo: ButtonFunction<
  {
    src: string;
    width?: number;
    height?: number;
    start?: number;
  } & WithEditor
> = ({ editor, ...meta }) => {
  return isExtension(
    editor.chain().focus(),
    "setYoutubeVideo",
    'Please import "Youtube" extension'
  )
    .setYoutubeVideo(meta)
    .focus()
    .run();
};
export const clearFormats: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().unsetAllMarks(), "removeEmptyTextStyle")
    .removeEmptyTextStyle()
    .run();

export const setTextAlignment: ButtonFunction<
  {
    position: "left" | "right" | "center" | "justify";
  } & WithEditor
> = ({ editor, position }) => {
  return isExtension(editor.chain().focus(), "setTextAlign")
    .setTextAlign(position)
    .run();
};

export const unSetTextAlignment: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "unsetTextAlign").unsetTextAlign().run();

export const isTextAlignmentValue: ButtonFunction<
  {
    position: "left" | "right" | "center" | "justify";
  } & WithEditor
> = ({ editor, position }) => editor.isActive({ textAlign: position });

export const getTextAlignmentValue: ButtonFunction<
  WithEditor,
  "justify" | "left" | "right" | "center"
> = ({ editor }) => {
  return getAttributeValue({
    editor,
    nodeOrMark: isButtonActive({ editor, nodeOrMark: "heading" })
      ? "heading"
      : "paragraph",
    attribute: "textAlign",
  });
};

export const clearContents: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().unsetAllMarks(), "removeEmptyTextStyle")
    .removeEmptyTextStyle()
    .clearContent()
    .run();

export const toggleSuperscript: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "toggleSuperscript")
    .toggleSuperscript()
    .run();

export const toggleItalic: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "toggleItalic").toggleItalic().run();

export const toggleStrike: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "toggleStrike").toggleStrike().run();

export const toggleUnderline: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "toggleUnderline")
    .toggleUnderline()
    .run();

export const toggleBlockQuote: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "toggleBlockquote")
    .toggleBlockquote()
    .run();

export const setHardBreak: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "setHardBreak").setHardBreak().run();

export const setUndo: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "undo").undo().run();

export const setRedo: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "redo").redo().run();

export const toggleHighlight: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "toggleHighlight")
    .toggleHighlight()
    .run();

export const setHighlightColor: ButtonFunction<
  { color?: string } & WithEditor
> = ({ editor, color }) =>
  isExtension(editor.chain().focus(), "setHighlight")
    .setHighlight(color ? { color } : undefined)
    .run();

export const unsetHighlightColor: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "unsetHighlight").unsetHighlight().run();

export const setHorizontalLine: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "setHorizontalRule")
    .setHorizontalRule()
    .run();

export const toggleHeading: ButtonFunction<{ level: any } & WithEditor> = ({
  editor,
  level,
}) =>
  !Number(level)
    ? isExtension(editor.chain().focus(), "setParagraph").setParagraph().run()
    : isExtension(editor.chain().focus(), "toggleHeading")
        .toggleHeading({ level: Number(level) as any })
        .run();

export const getFontColorValue: ButtonFunction<
  WithEditor,
  string | undefined
> = ({ editor }) => editor.getAttributes("textStyle").color;

export const getHighlightColorValue: ButtonFunction<
  WithEditor,
  string | undefined
> = ({ editor }) => editor.getAttributes("highlight").color;

export const setFontColor: ButtonFunction<{ color: string } & WithEditor> = ({
  editor,
  color,
}) => isExtension(editor.chain().focus(), "setColor").setColor(color).run();

export const unsetFontColor: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "unsetColor").unsetColor().run();
};

export const inrceaseTextIndent: ButtonFunction<
  WithEditor & { value?: number; limit?: number }
> = ({ editor, value = 25, limit = 200 }) => {
  return isExtension(editor.chain().focus(), "increaseIndent")
    .increaseIndent(value, limit)
    .run();
};

export const decreaseTextIndent: ButtonFunction<
  WithEditor & { value?: number }
> = ({ editor, value = 25 }) => {
  return isExtension(editor.chain().focus(), "decreaseIndent")
    .decreaseIndent(value)
    .run();
};

export const toggleBulletList: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "toggleBulletList")
    .toggleBulletList()
    .focus()
    .run();

export const toggleNumberedList: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().focus(), "toggleOrderedList")
    .toggleOrderedList()
    .run();

export const insertUrl: ButtonFunction<{ url: string } & WithEditor> = ({
  editor,
  url,
}) => {
  return isExtension(editor.chain().focus().extendMarkRange("link"), "setLink")
    .setLink({
      href: url.includes("https") ? url : `https://${url}`,
      target: "_blank",
    })
    .run();
};

export const deleteSelection: ButtonFunction<WithEditor> = ({ editor }) =>
  editor.chain().deleteSelection().focus().run();

export const insertTable: ButtonFunction<
  {
    rows: number;
    columns: number;
    withHeader?: boolean;
  } & WithEditor
> = ({ editor, rows, columns, withHeader = false }) => {
  return isExtension(editor.chain().focus(), "insertTable")
    .insertTable({ rows: rows, cols: columns, withHeaderRow: withHeader })
    .run();
};
export const deleteTable: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "deleteTable").deleteTable().run();
};

export const deleteNode: ButtonFunction<
  WithEditor & { nodeOrMark: NodeOrMarkList }
> = ({ editor, nodeOrMark }) => editor.chain().deleteNode(nodeOrMark).run();

export const fixTables: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "fixTables").fixTables().run();
};
export const mergeCells: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "mergeCells").mergeCells().run();
};
export const splitCell: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "splitCell").splitCell().run();
};
export const mergeOrSplit: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "mergeOrSplit")
    .mergeOrSplit()
    .run();
};
export const setCellAttribute: ButtonFunction<
  {
    cellAttr: "colspan" | "rowspan";
    attrValue: number;
  } & WithEditor
> = ({ editor, cellAttr, attrValue }) => {
  return isExtension(editor.chain().focus(), "setCellAttribute")
    .setCellAttribute(cellAttr, attrValue)
    .run();
};
export const goToNextCell: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "goToNextCell")
    .goToNextCell()
    .run();
};
export const goToPreviousCell: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "goToPreviousCell")
    .goToPreviousCell()
    .run();
};
export const toggleHeaderColumn: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "toggleHeaderColumn")
    .toggleHeaderColumn()
    .run();
};
export const toggleHeaderRow: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "toggleHeaderRow")
    .toggleHeaderRow()
    .run();
};
export const toggleHeaderCell: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "toggleHeaderCell")
    .toggleHeaderCell()
    .run();
};
export const insertColumnBefore: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "addColumnBefore")
    .addColumnBefore()
    .run();
};
export const insertColumnAfter: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "addColumnAfter")
    .addColumnAfter()
    .run();
};
export const deleteColumn: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "deleteColumn")
    .deleteColumn()
    .run();
};
export const insertRowBefore: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "addRowBefore")
    .addRowBefore()
    .run();
};
export const insertRowAfter: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "addRowAfter").addRowAfter().run();
};
export const deleteRow: ButtonFunction<WithEditor> = ({ editor }) => {
  return isExtension(editor.chain().focus(), "deleteRow").deleteRow().run();
};

export const removeUrl: ButtonFunction<WithEditor> = ({ editor }) =>
  isExtension(editor.chain().extendMarkRange("link"), "unsetLink")
    .unsetLink()
    .run();

export const insertImage: ButtonFunction<
  {
    src: unknown;
    alt: string;
    title: string;
    sources?: Record<string, string>;
  } & WithEditor
> = ({ editor, ...image }) => {
  const { src, alt, title, sources } = image;

  return isExtension(
    editor.chain().focus(),
    "setImage",
    'Please import "Image" extension'
  )
    .setImage({ src: src as string, alt, title })
    .updateAttributes("image", { sources })
    .run();
};

export const activeHeadingValue: ButtonFunction<
  WithEditor,
  1 | 2 | 3 | 4 | 5 | 6 | "paragraph"
> = ({ editor }) => {
  if (editor.isActive("heading", { level: 1 })) return 1;
  if (editor.isActive("heading", { level: 2 })) return 2;
  if (editor.isActive("heading", { level: 3 })) return 3;
  if (editor.isActive("heading", { level: 4 })) return 4;
  if (editor.isActive("heading", { level: 5 })) return 5;
  if (editor.isActive("heading", { level: 6 })) return 6;
  return "paragraph";
};

export const getFontFamilyValue: ButtonFunction<
  WithEditor,
  string | undefined
> = ({ editor }) => editor.getAttributes("textStyle").fontFamily;

export const isButtonActive: ButtonFunction<
  {
    nodeOrMark: NodeOrMarkList;
    attributes?: Record<string, any>;
  } & WithEditor
> = ({ editor, nodeOrMark, attributes }) =>
  editor.isActive(nodeOrMark, attributes);

const functions = {
  isExtension,
  toggleBold,
  setHorizontalLine,
  setHardBreak,
  toggleHeading,
  toggleStrike,
  activeHeadingValue,
  toggleBulletList,
  toggleNumberedList,
  insertUrl,
  removeUrl,
  isButtonActive,
  insertImage,
  toggleItalic,
  toggleUnderline,
  toggleBlockQuote,
  toggleCodeBlock,
  toggleSubscript,
  toggleSuperscript,
  clearFormats,
  clearContents,
  setUndo,
  setRedo,
  setFontColor,
  unsetFontColor,
  toggleHighlight,
  setHighlightColor,
  unsetHighlightColor,
  insertYoutubeVideo,
  sinkListItem,
  canSink,
  liftListItem,
  canLift,
  getFontColorValue,
  getHighlightColorValue,
  getFontFamilyValue,
  setFontFamily,
  setTextAlignment,
  unSetTextAlignment,
  isTextAlignmentValue,
  insertTable,
  deleteSelection,
  getAttributeValue,
  deleteTable,
  fixTables,
  mergeCells,
  splitCell,
  mergeOrSplit,
  setCellAttribute,
  goToNextCell,
  goToPreviousCell,
  toggleHeaderColumn,
  toggleHeaderRow,
  toggleHeaderCell,
  insertColumnBefore,
  insertColumnAfter,
  deleteColumn,
  insertRowBefore,
  insertRowAfter,
  deleteRow,
  deleteNode,
  setFontSize,
  getTextAlignmentValue,
  getFontSizeValue,
  inrceaseTextIndent,
  decreaseTextIndent,
  toBase64,
  insertVideo,
  toggleCode,
  setCode,
  unsetCode,
};

export default functions;
