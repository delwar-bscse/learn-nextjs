

export default async function Slug({params}:{params:Promise<{slug:string[]}>}) {
  const {slug} = await params;

  console.log(slug);

  if(slug?.length === 2){
    return (
      <h2>
        Viewing docs for feature <span className="font-bold text-green-500">{slug[0]}</span> and concept <span className="font-bold text-blue-500">{slug[1]}</span>
      </h2>
    );
  }else if(slug?.length === 1){
    return (
      <h2>
        Viewing docs for feature <span className="font-bold text-green-500">{slug[0]}</span>
      </h2>
    );
  }else{
    return (
      <h2>
        Docs home page
      </h2>
    );
  }

  
}
