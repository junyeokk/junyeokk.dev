export default function Tags({ data }) {
  const id = data.id;
  const name = data.name;
  const color = data.color;

  return {
    default: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagDefault dark:bg-notionTagDarkDefault w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    gray: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagGray dark:bg-notionTagDarkGray w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    brown: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagBrown dark:bg-notionTagDarkBrown w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    orange: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagOrange dark:bg-notionTagDarkOrange w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    yellow: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagYellow dark:bg-notionTagDarkYellow w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    green: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagGreen dark:bg-notionTagDarkGreen w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    blue: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagBlue dark:bg-notionTagDarkBlue w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    purple: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagPurple dark:bg-notionTagDarkPurple w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    pink: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagPink dark:bg-notionTagDarkPink w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    red: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagRed dark:bg-notionTagDarkRed w-30"
        key={id}
      >
        {name}
      </h1>
    ),
  }[color];
}
