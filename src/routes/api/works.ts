import { Client } from '@notionhq/client';

const notion = new Client({ auth: import.meta.env.VITE_NOTION_KEY as string });

const databaseId = 'aae954cd5c574891b62d62f0c51b00f4';

export type Work = {
  id: string;
  title: string;
  edited: string;
  status: {
    name: 'In progress' | 'Not started' | 'Completed';
    color: string;
  };
  client: {
    name: string;
    color: string;
  };
};

export async function get() {
  const _pages = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Last Edited',
        direction: 'descending',
      },
    ],
  });

  const works: Work[] = _pages.results.map((page: any) => {
    return {
      id: page.id,
      title: page.properties.Name.title[0].text.content,
      edited: page.last_edited_time,
      status: {
        name: page.properties.Status.select.name,
        color: page.properties.Status.select.color,
      },
      client: {
        name: page.properties.Client.select.name,
        color: page.properties.Client.select.color,
      },
    };
  });

  return {
    body: {
      works,
      // _pages,
    },
  };
}
