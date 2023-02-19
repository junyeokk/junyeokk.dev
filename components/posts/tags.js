export default function Tags({ data }) {
  const id = data.id;
  const name = data.name;
  const color = data.color;

  return {
    default: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagDefault w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    gray: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagGray w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    brown: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagBrown w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    orange: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagOrange w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    yellow: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagYellow w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    green: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagGreen w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    blue: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagBlue w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    purple: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagPurple w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    purple: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagPurple w-30"
        key={id}
      >
        {name}
      </h1>
    ),
    red: (
      <h1
        className="px-2 mr-2 text-sm rounded-md bg-notionTagRed w-30"
        key={id}
      >
        {name}
      </h1>
    ),
  }[color];
}
