import {
  BlockObjectResponse
} from "@notionhq/client/build/src/api-endpoints";
import { Highlight, themes } from "prism-react-renderer";
import { Fragment } from "react";
import styled from "styled-components";
import Text from "./Text";

const Pre = styled.pre`
  margin: 1em 0;
  padding: 1.5em;
  overflow-x: scroll;

  /* for Internet Explorer, Edge */
  -ms-overflow-style: none;
  // for Firefox
  scrollbar-width: none;

  /* for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CallOut = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.opacity.normal};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;

  p {
    margin: 0;
  }
`;

const CallOutIcon = styled.span`
  margin-right: 10px;
`;

function RenderBlock(block: BlockObjectResponse) {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.rich_text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.rich_text} />
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
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
            theme={themes.dracula}
            code={value.rich_text[0].plain_text}
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
          <Text text={value.rich_text} />

          {value.children?.map((block, i) => (
            <p>{block.paragraph.rich_text[0].text.content}</p>
          ))}
        </blockquote>
      );
    case "callout":
      return (
        <CallOut>
          <CallOutIcon>{value.icon.emoji}</CallOutIcon>
          <Text text={value.rich_text} />
        </CallOut>
      );
    case "divider":
      return <hr />;
    default:
      return `Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
}

export default RenderBlock;
