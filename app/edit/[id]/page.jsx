import EditArquive from "@/components/EditArquive";

const getTopicById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/arquives/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch arquive");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

export default async function edit({params}) {
    const { id } = params;
    const { arquive } = await getTopicById(id);
    const { title, description } = arquive;
 
    return <EditArquive id={id} title={title} description={description} />
}