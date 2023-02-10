import Image from "next/legacy/image";

export default function ProjectItem({ data } :any){

  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.GitHub.url;
  const description = data.properties.description.rich_text[0].plain_text;
  const imgSrc = data.cover.file.url;

  const tags = data.properties.tag.multi_select
  const start = data.properties.date.date.start
  const end = data.properties.date.date.end

  const calculatedPeriod = (start :any , end :any) => {
    const startDateStringArray = start?.split('-');
    const endDateStringArray = end?.split('-');

    if(startDateStringArray != null && endDateStringArray != null){
    var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
    var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);
    }

    // @ts-ignore
    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100"
        height="50"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={github}>깃허브 바로가기</a>
        <p className="my-1 ">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag :any) => (
            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
          ))}
        </div>

      </div>

    </div>
  );
}
