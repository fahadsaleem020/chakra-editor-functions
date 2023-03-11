const e=(e,t)=>{var o=new FileReader;o.onloadend=()=>t(o.result),o.readAsDataURL(e)},t=(e,t,o=`A plugin is required for this operation. \ntrying to call: ${t}`)=>{if(t in e)return e;throw new Error(o)},o=({editor:e,nodeOrMark:t,attribute:o})=>e.getAttributes(t)[o],i=({editor:e})=>t(e.chain().focus(),"toggleBold").toggleBold().run(),r=({editor:e})=>t(e.chain().focus(),"toggleCodeBlock").toggleCodeBlock().run(),n=({editor:e})=>t(e.chain().focus(),"setCodeBlock").setCodeBlock().run(),l=({editor:e})=>t(e.chain().focus(),"unsetBlockquote").unsetBlockquote().run(),s=({editor:e})=>t(e.chain().focus(),"toggleCode").toggleCode().run(),u=({editor:e})=>t(e.chain().focus(),"setCode").setCode().run(),a=({editor:e})=>t(e.chain().focus(),"unsetCode").unsetCode().run(),d=({editor:e})=>t(e.chain().focus(),"toggleSubscript").toggleSubscript().run(),c=({editor:e})=>e.chain().focus().sinkListItem("listItem").run(),g=({editor:e})=>e.can().sinkListItem("listItem"),h=({editor:e})=>e.chain().focus().liftListItem("listItem").run(),f=({editor:e})=>e.can().liftListItem("listItem"),m=({editor:e,fontfamily:o="arial"})=>t(e.chain().focus(),"setFontFamily").setFontFamily(o).run(),C=({editor:e,fontSize:o})=>t(e.chain().focus(),"setFontSize",'Please import "FontSize" extension').setFontSize(o).run(),p=({editor:e})=>o({editor:e,nodeOrMark:"textStyle",attribute:"fontSize"})?.split("px").at(0),A=({editor:e,sources:o,src:i,title:r})=>t(e.chain().focus(),"setVideo",'Please import "Video" extension').setVideo({src:i,sources:o,title:r}).run(),k=({editor:e,...o})=>t(e.chain().focus(),"setYoutubeVideo",'Please import "Youtube" extension').setYoutubeVideo(o).focus().run(),x=({editor:e})=>t(e.chain().unsetAllMarks(),"removeEmptyTextStyle").removeEmptyTextStyle().run(),b=({editor:e,position:o})=>t(e.chain().focus(),"setTextAlign").setTextAlign(o).run(),H=({editor:e})=>t(e.chain().focus(),"unsetTextAlign").unsetTextAlign().run(),v=({editor:e,position:t})=>e.isActive({textAlign:t}),S=({editor:e})=>o({editor:e,nodeOrMark:Ae({editor:e,nodeOrMark:"heading"})?"heading":"paragraph",attribute:"textAlign"}),T=({editor:e})=>t(e.chain().unsetAllMarks(),"removeEmptyTextStyle").removeEmptyTextStyle().clearContent().run(),B=({editor:e})=>t(e.chain().focus(),"toggleSuperscript").toggleSuperscript().run(),I=({editor:e})=>t(e.chain().focus(),"toggleItalic").toggleItalic().run(),w=({editor:e})=>t(e.chain().focus(),"toggleStrike").toggleStrike().run(),R=({editor:e})=>t(e.chain().focus(),"toggleUnderline").toggleUnderline().run(),F=({editor:e})=>t(e.chain().focus(),"toggleBlockquote").toggleBlockquote().run(),L=({editor:e})=>t(e.chain().focus(),"setHardBreak").setHardBreak().run(),y=({editor:e})=>t(e.chain().focus(),"undo").undo().run(),V=({editor:e})=>t(e.chain().focus(),"redo").redo().run(),O=({editor:e})=>t(e.chain().focus(),"toggleHighlight").toggleHighlight().run(),z=({editor:e,color:o})=>t(e.chain().focus(),"setHighlight").setHighlight(o?{color:o}:void 0).run(),M=({editor:e})=>t(e.chain().focus(),"unsetHighlight").unsetHighlight().run(),P=({editor:e})=>t(e.chain().focus(),"setHorizontalRule").setHorizontalRule().run(),N=({editor:e,level:o})=>Number(o)?t(e.chain().focus(),"toggleHeading").toggleHeading({level:Number(o)}).run():t(e.chain().focus(),"setParagraph").setParagraph().run(),U=({editor:e})=>e.getAttributes("textStyle").color,E=({editor:e})=>e.getAttributes("highlight").color,q=({editor:e,color:o})=>t(e.chain().focus(),"setColor").setColor(o).run(),Y=({editor:e})=>t(e.chain().focus(),"unsetColor").unsetColor().run(),$=({editor:e,value:o=25,limit:i=200})=>t(e.chain().focus(),"increaseIndent").increaseIndent(o,i).run(),D=({editor:e,value:o=25})=>t(e.chain().focus(),"decreaseIndent").decreaseIndent(o).run(),Q=({editor:e})=>t(e.chain().focus(),"toggleBulletList").toggleBulletList().focus().run(),_=({editor:e})=>t(e.chain().focus(),"toggleOrderedList").toggleOrderedList().run(),j=({editor:e,url:o})=>t(e.chain().focus().extendMarkRange("link"),"setLink").setLink({href:o.includes("https")?o:`https://${o}`,target:"_blank"}).run(),G=({editor:e})=>e.chain().deleteSelection().focus().run(),J=({editor:e,rows:o,columns:i,withHeader:r=!1})=>t(e.chain().focus(),"insertTable").insertTable({rows:o,cols:i,withHeaderRow:r}).run(),K=({editor:e})=>t(e.chain().focus(),"deleteTable").deleteTable().run(),W=({editor:e,nodeOrMark:t})=>e.chain().deleteNode(t).run(),X=({editor:e})=>t(e.chain().focus(),"fixTables").fixTables().run(),Z=({editor:e})=>t(e.chain().focus(),"mergeCells").mergeCells().run(),ee=({editor:e})=>t(e.chain().focus(),"splitCell").splitCell().run(),te=({editor:e})=>t(e.chain().focus(),"mergeOrSplit").mergeOrSplit().run(),oe=({editor:e,cellAttr:o,attrValue:i})=>t(e.chain().focus(),"setCellAttribute").setCellAttribute(o,i).run(),ie=({editor:e})=>t(e.chain().focus(),"goToNextCell").goToNextCell().run(),re=({editor:e})=>t(e.chain().focus(),"goToPreviousCell").goToPreviousCell().run(),ne=({editor:e})=>t(e.chain().focus(),"toggleHeaderColumn").toggleHeaderColumn().run(),le=({editor:e})=>t(e.chain().focus(),"toggleHeaderRow").toggleHeaderRow().run(),se=({editor:e})=>t(e.chain().focus(),"toggleHeaderCell").toggleHeaderCell().run(),ue=({editor:e})=>t(e.chain().focus(),"addColumnBefore").addColumnBefore().run(),ae=({editor:e})=>t(e.chain().focus(),"addColumnAfter").addColumnAfter().run(),de=({editor:e})=>t(e.chain().focus(),"deleteColumn").deleteColumn().run(),ce=({editor:e})=>t(e.chain().focus(),"addRowBefore").addRowBefore().run(),ge=({editor:e})=>t(e.chain().focus(),"addRowAfter").addRowAfter().run(),he=({editor:e})=>t(e.chain().focus(),"deleteRow").deleteRow().run(),fe=({editor:e})=>t(e.chain().extendMarkRange("link"),"unsetLink").unsetLink().run(),me=({editor:e,...o})=>{const{src:i,alt:r,title:n,sources:l}=o;return t(e.chain().focus(),"setImage",'Please import "Image" extension').setImage({src:i,alt:r,title:n}).updateAttributes("image",{sources:l}).run()},Ce=({editor:e})=>e.isActive("heading",{level:1})?1:e.isActive("heading",{level:2})?2:e.isActive("heading",{level:3})?3:e.isActive("heading",{level:4})?4:e.isActive("heading",{level:5})?5:e.isActive("heading",{level:6})?6:"paragraph",pe=({editor:e})=>e.getAttributes("textStyle").fontFamily,Ae=({editor:e,nodeOrMark:t,attributes:o})=>e.isActive(t,o),ke={isExtension:t,toggleBold:i,setHorizontalLine:P,setHardBreak:L,toggleHeading:N,toggleStrike:w,activeHeadingValue:Ce,toggleBulletList:Q,toggleNumberedList:_,insertUrl:j,removeUrl:fe,isButtonActive:Ae,insertImage:me,toggleItalic:I,toggleUnderline:R,toggleBlockQuote:F,toggleCodeBlock:r,toggleSubscript:d,toggleSuperscript:B,clearFormats:x,clearContents:T,setUndo:y,setRedo:V,setFontColor:q,unsetFontColor:Y,toggleHighlight:O,setHighlightColor:z,unsetHighlightColor:M,insertYoutubeVideo:k,sinkListItem:c,canSink:g,liftListItem:h,canLift:f,getFontColorValue:U,getHighlightColorValue:E,getFontFamilyValue:pe,setFontFamily:m,setTextAlignment:b,unSetTextAlignment:H,isTextAlignmentValue:v,insertTable:J,deleteSelection:G,getAttributeValue:o,deleteTable:K,fixTables:X,mergeCells:Z,splitCell:ee,mergeOrSplit:te,setCellAttribute:oe,goToNextCell:ie,goToPreviousCell:re,toggleHeaderColumn:ne,toggleHeaderRow:le,toggleHeaderCell:se,insertColumnBefore:ue,insertColumnAfter:ae,deleteColumn:de,insertRowBefore:ce,insertRowAfter:ge,deleteRow:he,deleteNode:W,setFontSize:C,getTextAlignmentValue:S,getFontSizeValue:p,inrceaseTextIndent:$,decreaseTextIndent:D,toBase64:e,insertVideo:A,toggleCode:s,setCode:u,unsetCode:a};export{Ce as activeHeadingValue,f as canLift,g as canSink,T as clearContents,x as clearFormats,D as decreaseTextIndent,ke as default,de as deleteColumn,W as deleteNode,he as deleteRow,G as deleteSelection,K as deleteTable,X as fixTables,o as getAttributeValue,U as getFontColorValue,pe as getFontFamilyValue,p as getFontSizeValue,E as getHighlightColorValue,S as getTextAlignmentValue,ie as goToNextCell,re as goToPreviousCell,$ as inrceaseTextIndent,ae as insertColumnAfter,ue as insertColumnBefore,me as insertImage,ge as insertRowAfter,ce as insertRowBefore,J as insertTable,j as insertUrl,A as insertVideo,k as insertYoutubeVideo,Ae as isButtonActive,t as isExtension,v as isTextAlignmentValue,h as liftListItem,Z as mergeCells,te as mergeOrSplit,fe as removeUrl,oe as setCellAttribute,u as setCode,n as setCodeBlock,q as setFontColor,m as setFontFamily,C as setFontSize,L as setHardBreak,z as setHighlightColor,P as setHorizontalLine,V as setRedo,b as setTextAlignment,y as setUndo,c as sinkListItem,ee as splitCell,e as toBase64,F as toggleBlockQuote,i as toggleBold,Q as toggleBulletList,s as toggleCode,r as toggleCodeBlock,se as toggleHeaderCell,ne as toggleHeaderColumn,le as toggleHeaderRow,N as toggleHeading,O as toggleHighlight,I as toggleItalic,_ as toggleNumberedList,w as toggleStrike,d as toggleSubscript,B as toggleSuperscript,R as toggleUnderline,l as unSetCodeBlock,H as unSetTextAlignment,a as unsetCode,Y as unsetFontColor,M as unsetHighlightColor};
//# sourceMappingURL=index.esm.js.map