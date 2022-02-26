export class NotionApiBlockResponse {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  has_children: boolean;
  archived: boolean;
  type: string;
  image?: Image;
  paragraph?: Paragraph;
  heading_2?: Paragraph;
  code?: Code;
  quote?: Paragraph;
}

class Code {
  text: Text2[];
  language: string;
}

class Paragraph {
  text: Text2[];
}

class Text2 {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: any;
}

class Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

class Text {
  content: string;
  link?: any;
}

class Image {
  caption: any[];
  type: string;
  external: External;
}

class External {
  url: string;
}