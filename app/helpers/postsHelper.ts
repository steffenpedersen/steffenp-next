export function getFirstParagraph(blocks): string {
    const list: string[] = []

    blocks.map((block) => {
        if (block.type == "paragraph") {
            list.push(block.paragraph.text[0]?.text.content)
        }
    })

    return list[0]
}