import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
import React, { Fragment } from "react";
import styled from "styled-components";
import Text from "./Text";

const Pre = styled.pre`
  margin: 1em 0;
  padding: 1.5em;
`;

function RenderBlock(block) {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{RenderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      return (
        <figure>
          <img src={src} />
        </figure>
      );
    case "code":
      return (
        <>
          <Highlight
            {...defaultProps}
            theme={theme}
            code={value.text[0].plain_text}
            language={value.language}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </Pre>
            )}
          </Highlight>
        </>
      );
    case "quote":
      return (
        <blockquote>
          <p>{value.text[0].plain_text}</p>
          {value.children?.map((block) => (
            <p>{block.paragraph.text[0].plain_text}</p>
          ))}
        </blockquote>
      );
    default:
      return `Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
}

export default RenderBlock;
