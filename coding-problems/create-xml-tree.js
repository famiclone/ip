const XmlElementType = {
  UNKNOWN: 0,
  OPENING: 1,
  CLOSING: 2,
  TEXT: 4,
};

class XMLElement {
  constructor() {
    this.elementType = XmlElementType.UNKNOWN;
    this.node_name = '';
  }
}

class XMLTokenizer {
  constructor(xmlString) {
    this.xml = xmlString;
    this.index = 0;
  }

  //<xml><data>hello world     </data>    <a><b></b><c><d></d></c></a></xml>

  getNextElement(element) {
    // Iterate through string and find index of char "<"
    let i = this.xml.substr(this.index).search('<'); // 0

    // If "<" not found – return false because string isn't valid xml string
    if (i === -1) {
      return false;
    }

    i += this.index; // 0 += 0
    let temp = this.xml.substring(this.index, i); //
    temp = temp.trim();

    if (temp.length != 0) {
      element.node_name = temp;
      element.element_type = XmlElementType.TEXT;

      this.index = i;
      return true;
    }

    let j = this.xml.substr(i).search('>');
    j += i;

    if (this.xml[i + 1] === '/') {
      element.node_name = this.xml.substring(i + 2, j);
      element.element_type = XmlElementType.CLOSING;
    } else {
      element.node_name = this.xml.substring(i + 1, j);
      element.element_type = XmlElementType.OPENING;
    }
    console.log(element);

    this.index = j + 1;
    return true;
  }
}

class Node_xml {
  constructor(name) {
    this.node_name = name;
    this.children = [];
  }
}

let createXmlTree = function (xml) {
  const tokenizer = new XMLTokenizer(xml);
  let element = new XMLElement();

  if (!tokenizer.getNextElement(element)) {
    return null;
  }

  let stack = [];
  let root = new Node_xml(element.name);
  stack.push(root);

  while (tokenizer.getNextElement(element)) {
    const node = new Node_xml(element.node_name);
    stack[stack.length - 1].children.push(node);
  }
  return root;
};

const string =
  '<xml><data>hello world     </data>    <a><b></b><c><d></d></c></a></xml';

console.log(createXmlTree(string));
