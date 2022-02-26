import { Client } from "@notionhq/client";
import { GetPageResponse, QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

// TODO: Add Promise<NotionApiDatabaseResponse>
export const getDatabase = async (databaseId: string) => {
    const response: QueryDatabaseResponse = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: 'Date',
                direction: 'descending',
            },
        ],
    });
    return response.results;
};

export const getPage = async (pageId: string): Promise<GetPageResponse> => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
};

// TODO: Add Promise<NotionApiBlockResponse>
export const getBlocks = async (blockId: string) => {
    const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 50,
    });
    return response.results;
};
