export function getFirstParagraph(blocks): string {
    const list: string[] = []

    blocks.map((block) => {
        if (block.type == "paragraph") {
            list.push(block.paragraph.text[0]?.text.content)
        }
    })

    return list[0]
}

// @ts-ignore
export function getImageUrl(blocks): string {
    const list: string[] = []

    blocks.map((block) => {
        const { type, id } = block;
        const value = block[type];

        if (type == "image") {
            value.type === "external" ? list.push(value.external.url) : list.push(value.file.url);
        } else {
            list.push("/images/steffen-pedersen.png")
        }
    })

    return list[0]
}